import React from 'react';
import { Fragment, useState, useEffect } from "react";
import ImageGallery from "./ImageGallery";
import axios from "axios";
import { Watch } from  'react-loader-spinner';
import Button from "./Button";
import Searchbar from './Searchbar';
import Modal from './Modal';
import { nanoid } from 'nanoid';



const App = () => {

  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [ , setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalImg, setModalImg] = useState(null);
  const [tags, setTags] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setPage(
      page + 1)
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const { q } = e.target;
    setQuery(q.value);
    setGallery([]);
    
  }
 
  useEffect(() => {
      
    const getGalleryImages = async() => {

      try {
        setIsLoading(true)
        const searchParams = new URLSearchParams({
          q: query,
          key: '34670935-84395b17b2cc27de21cd2945c',
          image_type: 'photo',
          orientation: 'horizontal',
          page: page,
          per_page: 12      
        });

        const response = await axios.get('https://pixabay.com/api/?' + searchParams)
        const galleryItems = response.data.hits;
      
        setGallery(prevState => (
          [...prevState, ...galleryItems]));
      }
          
      catch (error) {
        setError(error)
      }
      
      finally {
        setIsLoading(false)
        }

    };

    getGalleryImages()
  }, [page, query])

  useEffect(() => {

    const closeModalOnESC = (e) => {
      if(e.key === 'Escape'){
        closeModal()
      }
    }
    document.addEventListener('keydown', closeModalOnESC)
    return () => document.removeEventListener('keydown', closeModalOnESC)
  },[])
    

  const closeModal = () => setIsVisible(false);
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const openModal = (largeImageURL, tags) => {
     setIsVisible(true);
     setModalImg(largeImageURL);
     setTags(tags);
    };
 

  return (
    <Fragment>
      <Searchbar 
        onSubmit={handleFormSubmit}
      />

      <ImageGallery
        gallery={gallery}
        openModal={openModal}        
      />

      { isLoading && 
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
        onClick={handleSubmit}
        gallery={gallery}
      />

      { isVisible && (
      <Modal
        key={nanoid()} 
        closeModal={handleOverlayClick} 
        largeImageURL={modalImg} 
        tags={tags}  
      />
      )}

    </Fragment>
  )
}

export default App;


  
  
