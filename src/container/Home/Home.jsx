import React, { Component, Fragment } from 'react';
import Product from '../Product/Product';
import Blog from '../Blog/Blog';
import {BrowserRouter , Route, Link} from "react-router-dom"; 
import './Home.css';

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <div>
                    <Product nama="SEO" harga="Rp100.000" deskripsi="Mantap mantap" />
                    <KursusComponent nama="FB Ads" harga="Rp140.000" deskripsi="Mantap Mang"/>
                <KursusComponent nama="Google Ads" harga="Rp70.000" deskripsi="Mantap Mang"/>
                <KursusComponent nama="Google Adsense" harga="Rp50.000" />
                <KursusComponent nama="Tiktok Ads" harga="Rp100.000"/>
                <KursusComponent harga="Rp200.000" deskripsi="Mantap Mang"/>
                    <h2>Nasrullah Siddik</h2>
                    <hr />
                    <Blog />
                </div> */}
                <Fragment>
                    <div className="nav">
                        <ul>
                            <Link to="/">Home</Link>
                            <Link to="/product">Product</Link>
                        </ul>
                    </div>
                    <Route path="/" exact component={Blog} />
                    <Route path="/product" exac component={Product} />

                </Fragment>
            </BrowserRouter>
        );
    }


}

export default Home;