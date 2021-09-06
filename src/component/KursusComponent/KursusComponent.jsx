import React from 'react';
import './KursusComponent.css';

function KursusComponent(props) {
    return (
        <div className="card">
            <img src="https://s0.bukalapak.com/img/54097096941/large/PC_Rakitan_Gaming_High_End_Full_ASUS_ROG_i7_8700k_GTX_1080_T.jpg" alt="image" />
            <div className="card-body">
                <h3 className="card-title">{props.nama}</h3>
                <p><strong>{props.harga}</strong></p>
                <p>{props.deskripsi}</p>
            </div>
        </div>
    );
}
KursusComponent.defaultProps = {
    nama : 'NULL',
    harga: 'Rp.0',
    deskripsi: '.....',
}

export default KursusComponent;