import React from 'react';

// local
import 'styles.css';
import Footer from 'components/Home-Footer';

const Home = ({ item, openModal }) => {
  const title = "Ima's Perfect Fall Outfit";
  return (
    <div className='modal-container'>
      <div className="App-header">
          {item.title.toUpperCase()}
      </div>
      <div className="modal-body">
        <div className="container">
          <img id='piece' src='/images/outfit.jpeg' alt='outfit'/>
          <div className="jacket"><div onClick={() => openModal(1)} className="circle"/></div>
          <div className="blouse"><div onClick={() => openModal(2)} className="circle"/></div>
          <div className="pants"><div onClick={() => openModal(3)} className="circle"/></div>
          <div className="shoes"><div onClick={() => openModal(4)} className="circle"/></div>
        </div>
        <p id="message"><span><i>Style Advisor:</i></span><br/>
        "I think you would really love this outfit. I picked it out for you because you liked our summer version."
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
