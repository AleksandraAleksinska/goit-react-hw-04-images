import { Fragment } from "react";
import ImageGallery from "./ImageGallery";
import SearchBar from "./SearchBar";

import axios from "axios";
import { Watch } from  'react-loader-spinner'

import React, { Component } from 'react'
import Button from "./Button";


export default class App extends Component {

  state = {
    gallery: [],
    isLoading: false,
    query: '',
    error: null,
    page: 1
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    this.setState(
      prevState => ({
        page: prevState.page + 1
      }),
    )
  }
  
  handleFormSubmit = (e) => {
    e.preventDefault();
    
    const { q } = e.target;
    this.setState({ query: q.value, gallery: [] });
    
  }

  getGalleryImages = async() => {
    
    const searchParams = new URLSearchParams({
      q: this.state.query,
      key: '34670935-84395b17b2cc27de21cd2945c',
      image_type: 'photo',
      orientation: 'horizontal',
      page: this.state.page,
      per_page: 12,      
    });

      const response = await axios.get('https://pixabay.com/api/?' + searchParams)
      const galleryItems = response.data.hits;
      
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...galleryItems],
      }));
    }
  

    async componentDidUpdate(prevProps, prevState) {

      if (
        prevState.query !== this.state.query ||
        prevState.page !== this.state.page
      )

      try {
        this.setState({ isLoading: true })
        await this.getGalleryImages();
      }
      
      catch (error) {
        this.setState({ error:error })
      }
  
      finally {
        this.setState({ isLoading: false })
      }
  }


  render() {
    return (
      <Fragment>
      {/* <SearchBar 
        onSubmit={this.handleFormSubmit}
      /> */}
      <ImageGallery
        gallery={this.state.gallery}
      />
      { this.state.isLoading && 
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#3f51b5"
        ariaLabel="watch-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px"
        }}
        visible={true}
      />}
      <Button 
        onClick={this.handleSubmit}
        gallery={this.state.gallery}
      />        
      </Fragment>
    );
  }
}


  
  
