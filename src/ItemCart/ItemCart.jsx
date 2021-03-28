import React, { Component } from 'react';
import '../css/style.css';
import PostCart from './PostCart';

class ItemCart extends Component {
    state = {
        listCart: [],
        totalHarga: 0,
        nom: 0
    }

    ambilDataDariApi = () => {

        // fetch("http://localhost:3001/barang?_sort=harga&_order=asc")
        fetch("http://localhost:3002/cart?_sort=id&_order=asc")
            .then(response => response.json())
            .then(jsonGetDataApi => {
                this.setState({
                    listCart: jsonGetDataApi
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
                        <table>
                            <thead>
                                <tr>
                                    <th>Nomor</th>
                                    <th>ID Produk</th>
                                    <th>Nama</th>
                                    <th>Harga</th>
                                    <th>Qty</th>
                                    <th>Subtotal</th>
                                    {/* <th>Hapus</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listCart.map(cart => {
                                    return (this.state.nom += 1,
                                        <PostCart key={cart.userId} id={cart.userId} nama={cart.nama} nom={this.state.nom}
                                            harga={cart.harga} total_qty={cart.total_qty} total_harga={cart.total_harga} />
                                    )
                                })}
                                {this.state.listCart.map(cart => {
                                    this.state.totalHarga += cart.total_harga
                                })}
                                < tr >
                                    <td colSpan="5" style={{ textAlign: "right" }}><b>Total</b></td>
                                    <td>Rp. {this.state.totalHarga}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        );
    }
}

export default ItemCart;