import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scorer: '',
      source: '',
      game:'',
      date: ''
    }
  }

  componentDidMount() {
    fetch('https://aqueous-bastion-92424.herokuapp.com/')
      .then(response => {
        return response.json();
      })
      .then(goal => {
        this.setState(
          {
            scorer: goal["SCORER"],
            source: goal["LINK"],
            game: goal["GAME"],
            date: goal["DATE"]
          }
        )
      });
  }

  render() {
    console.log(this.state);
    const {game, source, scorer, date} = this.state;
    return (
      <div className="App">
        <h1>{scorer}</h1>
        <img src={source} alt="Gol"/>
        <h2>{game}</h2>
        <h3>{date}</h3>
      </div>
    );
  }
}

export default App;
