import logo from './logo.svg';
import './App.css';
import React, { useState, usePrevious, useEffect } from 'react';


// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [myCount, setMyCount] = useState(0);
  const [myCount2, setMyCount2] = useState(0);

  return (
    <div>
      <p>You clicked {myCount} times</p>
      <button onClick={() => setMyCount(myCount + 1)}>
        Click me
      </button>
      <p>You clicked {myCount2} times</p>
      <button onClick={() => setMyCount2(myCount2 + 1)}>
        Click me
      </button>
    </div>
  );
}


//Timer
class Timer extends React.Component {
  // Declare a new state variable, which we'll call "count"
  constructor(props) {
    super(props)
    this.state = { time: props.seconds, complete:false, interval: undefined}
  }
  
  componentDidMount() {
    this.setState({
    interval: setInterval(()=> {
    if(this.state.time > 0) {

      this.setState({ time: this.state.time - 1 })
    } else{
        this.setState({complete: true})
        clearInterval(this.state.interval)
    }
  }
    , 1000)
})
  }

  render() {
    let minutes = Math.floor(this.state.time / 60)
    let seconds = this.state.time - minutes * 60
  return (
    <div>
      {!this.state.complete ?
      
      <p>You have {String(minutes).padStart(2, 0)}:{String(seconds).padStart(2, "0")} seconds left</p>
        :
        <p>Timer done!</p>
      }
    </div>
  );
}
}

class ExampleClass extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {
    return <div>
      <p>You clicked {this.state.count} times</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Click me
      </button>
    </div>
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!, {props.username}! </h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up!</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting username={props.username} />;
  }
  return <GuestGreeting />;
}


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  return (
    <div className="App">
      <Greeting username={username} isLoggedIn={loggedIn} />
      {
          !loggedIn ?
          <> 
            <input id="input" onKeyUp={(val) => setUsername(document.getElementById("input").value)} ></input>
          <button onClick={() => setLoggedIn(true)}>Sign up</button>
          </>
        :  <button onClick={() => setLoggedIn(false)}>Sign Out</button>
        

      }


      <Timer seconds={90}></Timer>
      <Example></Example>
      <ExampleClass></ExampleClass>

    </div>
  );
}

export default App;
