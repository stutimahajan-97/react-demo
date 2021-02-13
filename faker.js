import React from 'react'
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
      <div className="ui container comments">
          <div className="comment">
           <a href="/" className="image">
              <img alt="image" src={faker.image.image()} />
              </a>
              <div className="content">
                  <a href="/" className="author">
                      Sam
                  </a>
                  <div className="metadata">
                      <span className="date">Today at 6:00 AM</span>
                      </div>
                      <div className="text">Nice blog post!</div>
                  </div>
              </div>
              <div className="comment">
           <a href="/" className="image">
              <img alt="image" src={faker.image.image()} />
              </a>
              <div className="content">
                  <a href="/" className="author">
                      Ram
                  </a>
                  <div className="metadata">
                      <span className="date">Today at 6:00 AM</span>
                      </div>
                      <div className="text">Nice blog post!</div>
                  </div>
              </div>
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
