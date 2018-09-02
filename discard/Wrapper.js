import React from 'react';
import Cards, { Card } from 'react-swipe-card';
import clothing from 'data/clothing';

const Wrapper = ({data, onSwipeLeft, onSwipeRight}) => {
  return (
    <Cards onEnd={console.log(`action`)} className='master-root'>
      {clothing.map((item,index) =>
        <Card
          key={index}
          onSwipeLeft={() => onSwipeLeft()}
          onSwipeRight={() => onSwipeRight()}>
          <img className='card-image' src={item.img} alt={item.alt}/>
        </Card>
      )}
    </Cards>
  )
}

export default Wrapper;
