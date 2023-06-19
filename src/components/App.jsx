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
  useEffect(() => {setGallery([])},[])
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
    

  const closeModal = () => setIsVisible(false);

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
        closeModal={closeModal} 
        largeImageURL={modalImg} 
        tags={tags}  
      />
      )}

    </Fragment>
  )
}

export default App;



// export default class Appp extends Component {

//   state = {
//     gallery: [],
//     isLoading: false,
//     query: '',
//     error: null,
//     page: 1,
//     isVisible: false,
//     modalImg: null,
//     tags: ''
    
//   }

//   closeModal = () => {
//     this.setState({ isVisible: false });
//   };

//   openModal = (largeImageURL, tags) => {
//     this.setState({ isVisible: true, modalImg: largeImageURL, tags: tags });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault()
    
//     this.setState(
//       prevState => ({
//         page: prevState.page + 1
//       }),
//     )
//   }
  
//   handleFormSubmit = (e) => {
//     e.preventDefault();
    
//     const { q } = e.target;
//     this.setState({ query: q.value, gallery: [] });
    
//   }

 
//   getGalleryImages = async() => {
    
//     const searchParams = new URLSearchParams({
//       q: this.state.query,
//       key: '34670935-84395b17b2cc27de21cd2945c',
//       image_type: 'photo',
//       orientation: 'horizontal',
//       page: this.state.page,
//       per_page: 12      
//     });

//       const response = await axios.get('https://pixabay.com/api/?' + searchParams)
//       const galleryItems = response.data.hits;
      
//       this.setState(prevState => ({
//         gallery: [...prevState.gallery, ...galleryItems],
//       }));
//     }
  

//     async componentDidUpdate(prevProps, prevState) {

//       if (
//         prevState.query !== this.state.query ||
//         prevState.page !== this.state.page
//       )

//       try {
//         this.setState({ isLoading: true })
//         await this.getGalleryImages();
//       }
      
//       catch (error) {
//         this.setState({ error:error })
//       }
  
//       finally {
//         this.setState({ isLoading: false })
//       }
//   }


//   render() {

//     return (

//     <Fragment>
//       <Searchbar 
//         onSubmit={this.handleFormSubmit}
//       />

//       <ImageGallery
//         gallery={this.state.gallery}
//         openModal={this.openModal}        
//       />

//       { this.state.isLoading && 
//       <Watch
//         height="80"
//         width="80"
//         radius="48"
//         color="#3f51b5"
//         ariaLabel="watch-loading"
//         wrapperStyle={{
//           display: "flex",
//           justifyContent: "center",
//           paddingTop: "15px"
//         }}
//         visible={true}
//       />}

//       <Button 
//         onClick={this.handleSubmit}
//         gallery={this.state.gallery}
//       />

//       { this.state.isVisible && (
//       <Modal
//         key={nanoid()} 
//         closeModal={this.closeModal} 
//         largeImageURL={this.state.modalImg} 
//         tags={this.state.tags}  
//       />
//       )}

//     </Fragment>
//     );
//   }
// }


  
  
