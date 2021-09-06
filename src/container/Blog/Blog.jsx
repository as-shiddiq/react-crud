import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import BlogComponent from '../../component/BlogComponent/BlogComponent';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state  = {
        post : [],
        formBlogPost : {
            id : 1,
            title : '',
            body : '',
            userId : 1
        },
        isUpdate : false

    }


    putDataToApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        .then((res) => {
            console.log(res);
            this.componentDidMount();

        }, (err) => {
            console.err("err", err);
        })
    }


    postDataToApi = () => {
        axios.post(`http://localhost:3004/posts`,this.state.formBlogPost)
        .then((res)=>{
            console.log(res);
            this.componentDidMount();

        },(err)=>{
            console.err("err",err);
        })
    }

    handeRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((res)=>{
            console.log(res);
            this.componentDidMount();
        });
    }
    
    handleUpdate = (data) => {
        this.setState({
            formBlogPost : data,
            isUpdate : true
        });
    }

    handleFormInput = (event) => {
        let formBlogPostData = { ...this.state.formBlogPost };
        formBlogPostData[event.target.name] = event.target.value;
        if(!this.state.isUpdate)
        {
            let timenow = new Date().getTime();
            formBlogPostData['id'] = timenow;
        }
        this.setState({
            formBlogPost : formBlogPostData
        });

    }

    handleSubmit = () => {
        if(this.state.isUpdate)
        {
            this.putDataToApi();

        }
        else{
            this.postDataToApi();
        }

        this.setState({
            isUpdate: false,
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: 1
            },
        })
    }

    componentDidMount(){

        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
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
                <div className="formdata">
                    <div className="form-group">
                        <label htmlFor="title">Title Blog</label>
                        <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="add title" className="title form-control" onChange={this.handleFormInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Blogs Content</label>
                            <textarea name="body" id="body" cols="40" rows="15" placeholder="add blogs content" value={this.state.formBlogPost.body} className="body-content form-control" onChange={this.handleFormInput}></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn primary" onClick={this.handleSubmit}>Simpan Data</button>
                    </div>
                </div>
                {/* <BlogComponent title="Hhaha" desc="tehehe"/> */}
                {
                    this.state.post.map( post => {
                        return <BlogComponent key={post.id} data={post} remove={this.handeRemove} update={this.handleUpdate} />
                    })
                }
                </div>
            </Fragment>
        );
    }
}

export default Blog;