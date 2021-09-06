import React, { Component, Fragment } from 'react';
import './Product.css';

class Product extends Component {
    state = {
        produk : 6
    }

    handlePlus = () => {
        this.setState({
            produk : this.state.produk+1
        });
    }

    handleMinus = () => {
        if(this.state.produk<1)
        {

        }
        else{
            this.setState({
                produk: this.state.produk - 1
            });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="nav">
                        <div className="logo">
                            <h2>AsShiddiq</h2>
                        </div>
                        <div className="keranjang">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACsklEQVRoge2ZO2gUURSGv1kXfCDaqmsQXzE+QEKwsdEuShCsbESIEC0tBMHOSrCxEywsjBhIRETECGLjs7Wz0EYh8QkGDYJgNI7FOdeZyMyss3PuzCzkg8sOd+f+55y999zXwiL1Ywh4C4QZ5QvwBBgGgmrcbM87soP4t4xR02CmiZycSvg+ANYBJ4Bv+t6x0rzLwUEkmCngQJt3TyKBPPftlG+WAp+RYLZX7MsCGjnf/wHc1+f9xr4UIm8gAI/1c5+lI1XQiwytT9R09sqDm7L7qnbE0cnQgmh41SZPigbS9XnShwytDyzmSX2YIN8ezUd56pzpNEcgypMqWWshsoMoT8pmVG2fsxALgI8quM1C8D9ZiezCfwObXGWRoRUfo2VOw0eQYB4Cr11lkUCgmvXkuH6OWoruQnrmvaVoBluRITULrLAUDpDNY6hGfHNebV3xIX5LxUd8iMdoIKfYENjrw8ApFb/uQzzGoNp5hadt0W41MO1DPIbbSZz1ZSAgOsdv9mRjNfAdmAd6kl4oOv1COevJUWA58ICUnrcIBPyvJ27tuOpJ/y/9pF/wFWWnas8AyzzoL6ChhkJgo7H2RdW9ZKybyh01OGyo2UR21yEwkPWiVY6AnzwZAtYALyjxmnYA+eXeGGreVs3ThpptWYL8j2J9nP2J9EomlkNrHnhmqAcSyGXkAFcqZ2LGu5o9SCAvq3akKE3k0BMi/3KVhmWOAPwCHunzoLF26YwgPVKHe69CrCLarlwANiBTc1dyGJjDbi2ptHcPpTjVSZnD6Hq0E66pE3eBlpZJrRtPaTOe0WbMs7+puF1rK1bXQ3S2SMLlVlKbr1nGrKffOO4CLenGIy35mxltKsPdd00C67Xc07qbhm2800t0uxIvM8AWwzal0AJuINuWWeRXbedQJ234A3thEhPzP31DAAAAAElFTkSuQmCC" />
                            <div className="jumlah">{this.state.produk}</div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="gambar-product">
                            <img src="https://s0.bukalapak.com/img/54588519682/s-330-330/fc684e0034fc2c18b1a1e9f9a92f90c4..webp" alt="Tas Selempang" />
                        </div>
                        <p className="nama">Tas Selempang USB Prot Charger</p>
                        <p className="harga">Rp81.000</p>
                    </div>
                    <div className="counter">
                        <button className="mplus" onClick={this.handleMinus}>-</button>
                        <input type="text" className="input" value={this.state.produk} />
                        <button className="mplus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Product;