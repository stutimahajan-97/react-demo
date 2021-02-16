//import react and reactDOM libraries
import  React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


function getButtonText() {
    return 'Click on me!';
}
//class App extends React.Component
//create a react components
const App = () => {
  // const buttonText = 'Click Me!';
    return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice blog post"
        cats={faker.image.cats}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        content="I like the subject"
        cats={faker.image.cats}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        content="I like the writing"
        cats={faker.image.image}
      />
    </div>
  );
};
//take the react components and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
    );
