import React, { Component } from 'react';

// local
import 'styles.css';

class Description extends Component {
  render() {
    const { item } = this.props;
    const list = (item.list.length > 0) ? item.list.map((line, index) => <li key={index}>{line}</li>) : '';
    return (
      <div className='copy'>
        <h1>{item.title}</h1> by <b>{item.brand}</b>
        <p className='price'><b>{item.price}</b></p>
        <b>Size {item.size}</b>
        <p>{item.description}</p>
        <ul>{list}</ul>
        <p><i>{item.notes}</i></p>
      </div>
    );
  }
}

export default Description;
