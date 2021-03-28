import React, { Component } from 'react';
import '../css/style.css';
import ItemCart from '../ItemCart/ItemCart';
import { Link, Router, Route } from 'react-router-dom';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: this.props,
            insertProduk: {
                userId: props.id,
                id: 1,
                nama: this.props.nama,
                harga: this.props.harga,
                total_qty: 0,
                total_harga: 0
            }
        }
    }

    handleIncrement = () => {
        this.setState({
            qty: this.state.insertProduk.total_qty += 1,
        })
        if (this.state.insertProduk.total_qty >= this.props.stok) {
            this.setState({
                qty: this.state.insertProduk.total_qty = this.props.stok
            })
        }
        this.handleTotal()
    }

    handleTotal = () => {
        this.setState({
            totalHarga: this.state.insertProduk.total_harga = this.props.harga * this.state.insertProduk.total_qty,
            id: this.state.insertProduk["id"] = new Date().getTime()
        })
    }

    handleDecrement = () => {
        this.setState({
            qty: this.state.insertProduk.total_qty -= 1,
        })
        if (this.state.insertProduk.total_qty <= 0) {
            this.setState({
                qty: this.state.insertProduk.total_qty = 0
            })
        }
        this.handleTotal()
    }

    handleChanged = (event) => {
        this.setState({
            total_qty: this.state.insertProduk["total_qty"] = event.target.value,
        })
        this.handleTotal()
    }

    handleSimpan = () => {
        if (this.state.insertProduk.total_qty <= 0) {
            alert("Minimum Pesanan Adalah 1");
            this.handleDecrement()
        }
        else if (this.state.insertProduk.total_qty > this.props.stok) {
            alert("Pesanan Anda Melebihi Stok Yang Ada");
            this.handleIncrement()
        }
        else if (this.state.insertProduk.total_qty != 0 && this.state.insertProduk.total_qty <= this.props.stok) {
            fetch("http://localhost:3002/cart", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state.insertProduk)
            }).then(response => {
                if (response.ok) {
                    alert("Item Berhasil Ditambahkan Ke Keranjang")
                    this.setState({
                        total_qty: this.state.insertProduk["total_qty"] = 0
                    })
                    this.handleTotal()
                    return response.json()
                }
                else {
                    alert(response.statusText)
                }
            })
        }
    }

    render() {
        return (
            <div className="form">
                <table border="1">
                    <thead>
                        <tr>
                            <th style={{ width: 270, textAlign: "center" }}>Images Produk</th>
                            <th colSpan="2" style={{ textAlign: "center" }}>Detail Produk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="4"><img src={this.props.image} className="image_center"></img></td>
                        </tr>
                        <tr>
                            <td style={{ width: 580 }}>ID : {this.props.id}</td>
                            <td>Stok : {this.props.stok}</td>
                        </tr>
                        <tr>
                            <td>Nama : {this.props.nama} </td>
                            <td rowSpan="2">Jumlah Pemesanan :
                                <br />
                                <input type="text" id="total_qty" name="total_qty" value={this.state.insertProduk.total_qty} onChange={this.handleChanged}></input>&emsp;
                                <button className="button_decrement" onClick={this.handleDecrement}><b>Kurang</b></button>&emsp;
                                <button onClick={this.handleIncrement} className="button_increment"><b>Tambah</b></button>
                                <br />
                                Harga Total : Rp. {this.state.insertProduk.total_harga}
                                <br />
                                <button type="submit" style={{ display: "block", marginTop: 10 }} onClick={this.handleSimpan} className="button_cart">Beli</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Harga : Rp. {this.props.harga}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Post;