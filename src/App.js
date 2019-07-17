import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/*import logo from './logo.svg';*/
import './App.css';
//import fetch from 'react';


class App extends Component {

    /*constructor() {
        super();
        this.state={user:[]};
    }
    componentDidMount()
    {
        this.getFunction();
    }

    ApiCall() {
        /!*return *!/
    }

    getFunction = () => {
        this.ApiCall()
            .then(
                function(data){
                    console.log(data);
                    // set the state here
                    this.setState({data:data});
                },
                function(error){
                    console.log(error);
                }
            );
    }*/

    constructor() {
        super();
        this.state = { user: [] };
    }

    componentDidMount(){
        const creditScore = document.getElementById('creditScore');
        fetch('http://localhost:8080/getUser?creditScore='+creditScore)
            .then(result=> {this.setState({user:result.json})})
    }
    getApi(){
        const creditScore = document.getElementById('creditScore');
        fetch('http://localhost:8080/getUser?creditScore='+creditScore)
            .then(result=> {this.setState({user:result.json})})

    if(creditScore<500){
            ReactDOM.render(<USER />, document.getElementById('status'));
        }
    }


    render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
          <br/><br/>
          <br/><br/>
          <br/><br/>
          <br/><br/>
          <form method="get">
              Credit Score: <input name="creditScore" id="creditScore"/><br/><br/>
              <input type="submit" onSubmit={this.getApi()}/>
          </form>
      </div>
    );
  }
}

export default App;

class USER extends Component{

    render(){

        return(

            <p align={'center'}></p>
        );
    }
}