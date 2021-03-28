import React, { Component } from 'react';
import '../css/style.css';
import Post from './Post';

class ItemPost extends Component {
    state = {
        listProduk: []
    }

    ambilDataDariApi = () => {

        // fetch("http://localhost:3001/barang?_sort=harga&_order=asc")
        fetch("http://localhost:3001/barang?_sort=id&_order=asc")
            .then(response => response.json())
            .then(jsonGetDataApi => {
                this.setState({
                    listProduk: jsonGetDataApi
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariApi();
    }

    render() {
        return (
            <div className="wrapper">
                <div className="main_container">
                    <div className="item">
                        <b>Daftar List Produk</b>
                        {this.state.listProduk.map(produk => {
                            return <Post key={produk.id} id={produk.id} nama={produk.nama}
                                harga={produk.harga} stok={produk.stok} image={produk.image}
                            />
                        })}
                    </div>
                </div>
            </div >
        )
    }
}

export default ItemPost;