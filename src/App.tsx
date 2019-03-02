import React, {Component} from 'react';
import './App.css';
import { CommentDetail } from './components/CommentDetail';

const person = {
  // avatar: {faker.image.avatar()},
  name: 'Sam',
  date: 'Today at 8:00pm',
  comment: 'Nice Blog Guy!',
}



class App extends Component<any, any> {
  render() {
    return (
      <>
        <CommentDetail />
      </>
    );
  }
}

export default App