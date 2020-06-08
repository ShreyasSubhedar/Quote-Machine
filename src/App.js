import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const styles = {
  fontFamily: "ubuntu"
};
const styleblockQuote = {
  borderColor: "#000000",
  borderStyle: "solid",
  padding: "20px 10px 15px 20px",
  fontSize: "25px",
  fontFamily: "Roboto",
  color:"white"

}
const styleChangeQuote = {
  padding: "5px 10px 5px 20px"

}

const styleAuthor = {
  // borderColor: "#000000",
  // borderStyle: "solid",
  // padding: "20px 10px 15px 20px",
  fontSize: "20px",
  fontFamily: "Courier",
  color:"white"

}
const authorWithQuote = {
  "Thomas Edison": "Genius is one percent inspiration and ninety-nine percent perspiration.",
  "Publilius Syrus": "A rolling stone gathers no moss.",
  "Napoleon Hill": "Ideas are the beginning points of all fortunes.",
  "Donald Trump": "Everything in life is luck.",
  "Lao Tzu": "Doing nothing is better than being busy doing nothing.",
  "Benjamin Spock": "Trust yourself. You know more than you think you do.",
  "Confucius": "Study the past, if you would divine the future.",
  "Sigmund Freud": "From error to error one discovers the entire truth.",
  "Christopher Reeve": "Once you choose hope, anythings possible."
}
var randomProperty = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
};
{var index  = Math.floor(Math.random() * Object.keys(authorWithQuote).length);
var auth = Object.keys(authorWithQuote)[index];
var qt = authorWithQuote[auth];
}
console.log(randomProperty(authorWithQuote));
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: auth,
      quote: qt
    }
    this.buttonEvent = this.buttonEvent.bind(this);
  }
  buttonEvent() {
    this.setState(state => {
      index  = Math.floor(Math.random() * Object.keys(authorWithQuote).length);
      auth = Object.keys(authorWithQuote)[index];
      qt = authorWithQuote[auth];
      return {
        author: auth,
        quote: qt
      }
    });
  }
  render() {
    return (
      <div className="container" id="quote-box">
        <div className="row">
          <div className="col-2">
          </div>
          <div className="col-8 text-center mt-5 rounded border">
            <strong><h2 style={styles}>Quote Machine</h2></strong>
            <blockquote id="text" style={styleblockQuote}>
              <b> <i>{this.state.quote}</i></b>
              <div className="row">
                <div className="col-8">
                </div>
                <div className="col-4" style={styleAuthor} id="author">
                  <p>-{this.state.author}</p>
                </div>
              </div>
            </blockquote>
            <div className="row">
              <div className="col-2 ">
              <a class="twitter-share-button" id ="tweet-quote"
  href={"https://twitter.com/intent/tweet?text="+this.state.quote}>Tweet</a>
              </div>
              <div className="col-8">
                <button className="btn btn-primary btn-sm" id="new-quote" onClick={this.buttonEvent} style={styleChangeQuote}>Change Quote</button>
              </div>
              <div className="col-2">
              </div>
            </div>
          </div>

          <div className="col-2">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
