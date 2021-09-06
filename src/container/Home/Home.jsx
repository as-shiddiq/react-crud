import React, { Component } from 'react';
import Product from '../Product/Product';
import Blog from '../Blog/Blog';

class Home extends Component {
    render() {
        return (
            <div>
                {/* <KursusComponent nama="SEO" harga="Rp100.000" deskripsi="Mantap mantap"/>
                <KursusComponent nama="FB Ads" harga="Rp140.000" deskripsi="Mantap Mang"/>
                <KursusComponent nama="Google Ads" harga="Rp70.000" deskripsi="Mantap Mang"/>
                <KursusComponent nama="Google Adsense" harga="Rp50.000" />
                <KursusComponent nama="Tiktok Ads" harga="Rp100.000"/>
                <KursusComponent harga="Rp200.000" deskripsi="Mantap Mang"/> */}
                <h2>Nasrullah Siddik</h2>
                <hr />
                <Blog />
            </div>
        );
    }


}

export default Home;