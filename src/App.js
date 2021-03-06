import React, {Component} from 'react';
import './App.css';

var list = [
  {
    title:'React',
    url:'https://reactjs.org',
    author:'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onClickMe = this.onClickMe.bind(this);
  }

  onClickMe() {
    console.log(this);
  }
  onDismiss(id) {
    const updatedList = this.state.list.filter((item) => {
      return item.objectID !== id;
    });

    this.setState({list: updatedList});
  }
  render() {
    return (
      <div className="App">
        {
          this.state.list.map(item => {
              const onHandleDismiss = () => this.onDismiss(item.objectID);
              return(
                <div key={item.objectID}>
                  <span>
                    <a href={item.url}>{item.title}</a>
                  </span>
                  <span>
                    {item.author}
                  </span>
                  <span>
                    {item.num_comments}
                  </span>
                  <span>
                    {item.points}
                  </span>
                  <span>
                    <button
                        onClick={onHandleDismiss}
                        type="button">
                        Dismiss
                    </button>
                  </span>

                </div>
              )
          })
        }
        <button
          onClick={this.onClickMe}
          type="button">
          Click Me
        </button>
      </div>
    );
  }
}

export default App;
