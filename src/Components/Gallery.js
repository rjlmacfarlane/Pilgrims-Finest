import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

class PhotoGallery extends Component {
  
  render () {
    
    const images = this.props.data ? this.props.data : []

    return (
      <section id="gallery">
        <div style={{
            display: "block",
            background:"#eeeeee",
            minHeight: "1px",
            width: "100%",
            border: "0px solid #ddd",
            padding: "60px",
            overflow: "auto"}}>
            <h1>Photo Gallery</h1>
            <Gallery
                images={images}
                enableLightbox={true}
                enableImageSelection={false}
                currentImageWillChange={this.onCurrentImageChange}
            />            
        </div>
        <h1>Follow us on <a href="https://www.instagram.com/pilgrimsfinestbread/">Instagram!</a></h1>
      </section>
    );
  }
}

export default PhotoGallery;