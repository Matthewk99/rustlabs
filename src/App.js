import './App.css';
import React, { Component } from 'react';
import Search from './components/Search';
import About from './components/About';
import { Route, Link } from 'react-router-dom';
import Logo from './logo.jpeg';
import Video1 from './components/video/Video1.mp4';
import Items from './components/Items';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          title: "Item name",
          image: "",
          description: "Lorem ipsum dolor sit amet..."
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <video autoPlay loop muted
        style = {{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
        }}
        >
            <source src={Video1} type="video/mp4"/>
        </video>
        <Search />
        <nav id="navbar">
          <Link to="/"><img src= {Logo} id= 'icon' /></Link>{' '}
          <Link to="/items"><h1 id='items'>Items</h1></Link>{' '}
          <Link to="/environment"><h1 id='environment'>Environment</h1></Link>
          <Link to="/about"><h2 id='about'>About</h2></Link>
        </nav>
        <main>
          <switch>
            <Route path="/" />
            <Route path="/about" render={() => <About /> } />
            <Route path="/items" render={() => <Items /> } />
          </switch>
        </main>
      </div>
    );
  }
}

export default App;
