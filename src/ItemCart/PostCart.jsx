import React, { Component } from 'react';
import '../css/style.css';

const PostCart = (porps) => {
    return (
        <tr>
            <td>{porps.nom}</td>
            <td>{porps.id}</td>
            <td>{porps.nama}</td>
            <td>Rp. {porps.harga}</td>
            <td>{porps.total_qty}</td>
            <td>Rp. {porps.total_harga}</td>
            {/* <td>hapus</td> */}
        </tr>
    );
}

export default PostCart;