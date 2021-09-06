import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import BlogComponent from '../../component/BlogComponent/BlogComponent';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state  = {
        post : []
    }

    componentDidMount(){

        axios.get('http://localhost:3004/posts')
        .then((result)=>{
            this.setState({
                post : result.data
            })
        });
    }

    render() {
        return (
            <Fragment>
                <h2>Selamat datang di Blog Saya</h2>
                <div className="content">
                {/* <BlogComponent title="Hhaha" desc="tehehe"/> */}
                {
                    this.state.post.map( post => {
                        return <BlogComponent key={post.id} title={post.title} desc={post.body} />
                    })
                }
                </div>
            </Fragment>
        );
    }
}

export default Blog;