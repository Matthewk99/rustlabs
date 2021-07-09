import './App.css';
import React, { Component } from 'react';
import Search from './components/Search';
import About from './components/About';
import { Route, Link, Switch } from 'react-router-dom';
import Logo from './logo.jpeg';
import Video1 from './components/video/Video1.mp4';
import Card from './components/Card/Card';
import ItemData from './components/ItemData.js';
import EnviroData from './components/EnviroData.js';
import ItemComponent from './components/ItemComponent.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image: "",
      description: ""
    }
  }

  render() {
    return (
      <div className="App">
        <Link to="/"><img src= {Logo} alt='' id= 'icon' /></Link>{' '}
        <Link to="/items"><h1 id='items'>Items</h1></Link>{' '}
        <Link to="/environment"><h1 id='environment'>Environment</h1></Link>

        <main>
          <Switch>
            <Route exact path="/" render={() =>
              <div>
                <Search />
                <Link to="/about"><h2 id='about'>About</h2></Link>
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
                <h1 id="home-title">RustLabs Console Edition</h1>
              </div> }/>
            <Route exact path="/about" render={() => <About /> } />
            <Route exact path="/items" render={() => <Card Items={ItemData}/> } />
            <Route exact path="/environment" render={() => <Card Items={EnviroData}/> } />
            <Route exact path='/:title' render={(props) => <ItemComponent title={props.match.params.title} allWeapons={ItemData} allEnviron={EnviroData}/> } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

