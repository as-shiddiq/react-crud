import React from 'react';

function BlogComponent(props) {
    return (
        <div className="post">
            <div className="img">
                <img src="https://s0.bukalapak.com/img/54588519682/s-330-330/fc684e0034fc2c18b1a1e9f9a92f90c4..webp" alt="POst" />
            </div>
            <div className="article">
                <p className="title">{props.data.title}</p>
                <p className="description">{props.data.body}</p>
                <button className="btn danger delete" onClick={() => props.remove(props.data.id)}>Hapus</button>
                <button className="btn info update" onClick={()=> props.update(props.data)}>Edit</button>
            </div>
        </div>
    );
}

export default BlogComponent;