import React from "react";
import "../css/style.css";
import images_biodata from "../images/myImages.jpeg";

const AboutStatelsss = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="main_container">
                    <div className="item">
                        <table border="1">
                            <thead>
                                <tr>
                                    <th style={{ width: 400, textAlign: "center" }}>
                                        Images Biodata
                                </th>
                                    <th colSpan="2" style={{ textAlign: "center" }}>
                                        Detail Biodata
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan="9">
                                        <img src={images_biodata} className="image_biodata"></img>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nama : Muhammad Rayhan Akbar Putra</td>
                                </tr>
                                <tr>
                                    <td>Tempat, Tanggal Lahir : Malang, 07 - Juni - 2000</td>
                                </tr>
                                <tr>
                                    <td>Jenis Kelamin : Laki - laki</td>
                                </tr>
                                <tr>
                                    <td>
                                        Alamat : Singosari Jl.Rogonoto No. 9
                  </td>
                                </tr>
                                <tr>
                                    <td>Agama : Islam</td>
                                </tr>
                                <tr>
                                    <td>Status : Mahasiswa</td>
                                </tr>
                                <tr>
                                    <td>Perguruan Tinggi : Politeknik Negeri Malang</td>
                                </tr>
                                <tr>
                                    <td>Hobi : Game, Catur, Gambar</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutStatelsss;