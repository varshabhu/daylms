
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Slider from 'react-slick';

const NavigationBar = () => {
  const navStyle = {
    backgroundColor: 'grey',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '50px',
    height: '40px',
  };

  const personLogoStyle = {
    width: '30px',
    height: '25px',
    marginLeft: '10px',
  };

  const sidebarStyle = {
    backgroundColor: 'grey',
    padding: '20px',
    width: '200px',
    position: 'fixed',
    top: '50px',
    left: 0,
    bottom: 0,
  };

  const sidebarLinkStyle = {
    display: 'block',
    margin: '25px 0',
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  };

  const hoverStyle = {
    backgroundColor: 'blue',
    color: 'black',
  };

  const mainContentStyle = {
    marginLeft: '220px',
    padding: '20px',
  };

  const slideshowContainerStyle = {

     marginLeft: '220px',
     marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const slideImages = [
    "https://tse2.mm.bing.net/th?id=OIP.1ZwbiO2COpPjfJ7ppEXfngHaDQ&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.o0-QlfkZf9xlNmwa9Sk3xAHaEK&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.uKDrg9_OIgtS_qajSkJ5agHaDB&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.wxj_VetISpGTp7JcSsiq_QHaEK&pid=Api&P=0&h=180",

  ];

  const slideProperties = {
    duration: 5000, 
    transitionDuration: 500, // Transition duration between slides in milliseconds
    infinite: true, // Whether to loop the slideshow continuously
    indicators: true, // Whether to show slide indicators at the bottom
    arrows: true, // Whether to show previous/next arrows
    autoplay: true, // Whether to automatically transition to the next slide
    pauseOnHover: true, // Whether to pause the slideshow on hover
    canSwipe: true, // Whether to allow swiping on touch-enabled devices
  };

  const slideContainerStyle = {
    height: '10px', // Adjust the height as needed
    width: '500px', // Adjust the width as needed
    marginTop: '0px', // Center the slideshow horizontally
  };

  const slideImageStyle = {
    height: '100%', // Make the images fill the slide container vertically
    width: '100%', // Make the images fill the slide container horizontally
    objectFit: 'cover', // Scale and crop the images to fit the container
  };
  const textStyle = {
   marginTop:'70px',
    marginLeft:'190px',


   };
  const headstyle={
    marginLeft:'500px',
  }
  const hstyle={
    marginLeft:'400px',
    fontweight:'bold',
  }

  const styles = {
    container: {
      textAlign: 'center',
      padding: '-10px',
    },
    cardList: {
      display: 'flex',
      justifyContent: 'center',
    },
  
      card: {
        width: '250px',
        height:'200px',
       marginLeft:''
      
    
        // border: '1px solid #ccc',
        // borderRadius: '5px',
      },
  
    image:{
    width:'200px',
    height:'150px',
    marginLeft:'100px'
   
    }
  };
  
  const slideshowRef = useRef(null);

  const handleSlideChange = () => {
    if (slideshowRef.current) {
      slideshowRef.current.goNext();
    }
  };
  const Card = ({ title, description,imageUrl}) => {
    return (
      
      <div  style={styles.card}>
       <img src={imageUrl} alt={title}  style={styles.image} />
        <h3>{title}</h3>
        <p>{description}</p>
        
      </div>
      
    );
  };

  
    const cards = [
      {
        title: '',
        description: '',
        imageUrl:'https://tse1.mm.bing.net/th?id=OIP.LhWTiTZosp1jQXZ7-zc6egHaDj&pid=Api&P=0&h=180'
      },
     
      {
        title: '',
        description: '',
        imageUrl:'https://tse3.mm.bing.net/th?id=OIP.L_OP6b7zmaL8MLvmbsz9dAHaFm&pid=Api&P=0&h=180'
      },
      {
        title: '',
        description: '',
        imageUrl:'https://tse4.mm.bing.net/th?id=OIP.I_IkI7we2rrJfuuPi0wXTAAAAA&pid=Api&P=0&h=180'
      },
      {
        title: '',
        description: '',
        imageUrl:'https://tse1.mm.bing.net/th?id=OIP.7ygfMmlb9BXxtTmcCq2ptAHaEs&pid=Api&P=0&h=180'
      },
      {
        title: '',
        description: '',
        imageUrl:'https://tse2.mm.bing.net/th?id=OIP.kvzxc4eZ7Iwp2T_24-n7JgHaEK&pid=Api&P=0&h=180'
      },
     
    ];
   


  return (
    <>
      <nav style={navStyle}>
      <h1 style={headstyle}>LEARNING MANAGEMENT SYSTEM</h1>
        <Link to="/home" style={linkStyle}>
        
        </Link>
        <div style={containerStyle}>
          <Link to="/home" style={linkStyle} activeStyle={hoverStyle}>
            Home
          </Link>
          <Link to="/contact" style={linkStyle} activeStyle={hoverStyle}>
           Contact us
          </Link>
          <Link to="/settings" style={linkStyle} activeStyle={hoverStyle}>
            Settings
          </Link>
         
          <Link to="/profile" style={linkStyle} activeStyle={hoverStyle}>
            Profile
          </Link>
          
        </div>
      </nav>
      <div style={sidebarStyle}>
        <br />
       
        <Link to="/about" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          About
        </Link>
        <Link to="/course" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Courses
        </Link>
        <Link to="/assesments" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Assesments
        </Link>
        <Link to="/Completion Status" style={sidebarLinkStyle} activeStyle={hoverStyle}>
         Completion Status
        </Link>
       <Link to="/home" style={sidebarLinkStyle}>
          <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689091000/logout_dvsxna.png" alt="Logo" style={logoStyle} />
        </Link>
      
      </div>
     <div style={textStyle}>
      
     <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689140916/dffsdf_yuyujq.png" alt="img" width="1340px" height="500px"/>
      </div> 
  
    <h1 style={hstyle}> 
    <br></br>Explore New And Trending Online Courses </h1>
    <br></br><br></br>

  
    <div style={styles.cardList}>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  

      <div style={slideshowContainerStyle}>
        <br></br>
        <br></br>
        
        <div style={slideContainerStyle}>
          <Slide {...slideProperties} ref={slideshowRef}>
            {slideImages.map((image, index) => (
              <div key={index} className="each-slide">
                <img src={image} alt={`Slide ${index + 1}`} style={slideImageStyle} />
              </div>
            ))}
          </Slide>
        </div>
      </div>  


     
   
    </>
  );
};

export default NavigationBar;