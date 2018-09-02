import React from 'react';

// local
import 'styles.css';
import Footer from 'components/Modal-Footer';

const Modal = ({ item, closeModal }) => {
  const list = (item.list.length > 0) ? item.list.map((line, index) => <li key={index}>{line}</li>) : '';
  return (
      <div className='modal-container'>
        <div className="modal-header">
          <p className='modal-header-row-1'>
            {item.title.toUpperCase()}
            <span onClick={closeModal} className="close">&times;</span>
          </p>
          <p className='modal-header-row-2'>
            <i>{item.brand}</i>
            <span>{item.price}</span>
          </p>
        </div>
        <div className="modal-body">
          <img id='piece' src={item.img} alt={item.alt}/>
          <div className='copy'>
            <p><b>Size {item.size}</b></p>
            <h4 className="description-title">DESCRIPTION</h4>
            <p>
              <span className="description">{item.description}</span>
              <ul>{list}</ul>
              <span className="notes"><i>{item.notes}</i></span>
            </p>
          </div>
        </div>
        <Footer/>
      </div>
  )
}

// <Footer/>
// <div className="modal-footer">
//     <p>BUY</p>
// </div>

export default Modal;
