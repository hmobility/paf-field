import React from 'react';
import logo from './logo.svg';
import './style/common.scss';
import './App.css';

import {SamplePanel} from './components/SamplePanel';
import {Login} from './pages/Login';

interface AppProps {
}

interface AppState {
  token: string
  username: string
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: any) {
      super(props);
      this.state = {
          username: "",
          token: ""
      };
  }

  componentDidMount() {
    fetch('api')
        .then(response=>response.json())
        .then(data=>this.setState({username:data.username}));

    fetch('auth/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        username: "0315908763",
        password: "8763"
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('paf.field.token', data.token);
        this.setState({
          token: data.token
        });
      }
    });
  }

  render() {
    const {username, token} = this.state;
    
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Login/>
            <p>
              파프 필드 초기 템플릿 여기서 시작 <code>src/App.tsx</code> {username ? `${username}:${token}` : 'Hello World'}.
            </p>
            <SamplePanel/>
          </header>
        </div>
    );
  }
}

export default App;