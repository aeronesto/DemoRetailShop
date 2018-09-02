import React, { Component } from 'react';

// local
import 'styles.css';
import clothing from 'data/clothing';
import Description from 'components/Description';
import Wrapper from 'components/Wrapper';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class MyCards extends Component {
  constructor(props){
    super(props);
    this.state = {
      piece: 0,
      data: clothing,
      liked: [],
      disliked: []
    }
    this.onSwipeLeft = this.onSwipeLeft.bind(this);
    this.onSwipeRight = this.onSwipeRight.bind(this);
  }

  onSwipeLeft = () => {
     const newData = this.state.data.slice(1);
     this.setState(prevState => ({ data: newData, disliked: [...prevState.disliked, prevState.data[0].title]}));
  }
  onSwipeRight = () => {
    const newData = this.state.data.slice(1);
    this.setState(prevState => ({ data: newData, liked: [...prevState.liked, prevState.data[0].title] }));
  }
  render() {
    return (
      <div>
        <Wrapper
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
          data={this.state.data}
        />
        <div className='buttons-wrapper'>
          <ButtonToolbar>
            {this.state.piece < 1 && <Button bsStyle="info" disabled>Previous</Button>}
            {this.state.piece >= 1 && <Button
              onClick={() => this.setState({ piece: this.state.piece-1 })}
            bsStyle="info">Previous</Button>}
            {this.state.piece >= clothing.length-1 && <Button bsStyle="success" disabled>Next</Button>}
            {this.state.piece < clothing.length-1 && <Button
              onClick={() => this.setState({ piece: this.state.piece+1 })}
            bsStyle="success">Next</Button>}
          </ButtonToolbar>
        </div>
        {this.state.data.length && <Description item={this.state.data[0]}/>}
      </div>
    )
  }
}
