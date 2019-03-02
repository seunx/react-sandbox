import React, {Component} from 'react';
import './App.css';
import { CommentDetail } from './components/CommentDetail';
import faker from 'faker';
import { ApprovalCard } from './components/ApprovalCard';

const person = [
  {
  id: 1,
  name: 'Sam',
  avatar: `${faker.image.avatar()}`,
  date: 'Today at 8:00pm',
  post: 'Nice Blog Guy!',
  },
  {
  id: 2,
  name: 'Amy',
  avatar: `${faker.image.avatar()}`,
  date: 'Today at 8:40pm',
  post: 'Awesome!',
  },
]



class App extends Component<any, any> {
  render() {
    return (
      <>
        {person.map((person, i) =>{ 
          console.log(i)
          return(
          <ApprovalCard key={i}>
            <CommentDetail person={person} key={person.id} />
          </ApprovalCard>)
          }
        )}
      </>
    );
  }
}

export default App