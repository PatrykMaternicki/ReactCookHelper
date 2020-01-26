import React, {Component} from 'react';
import Sidebar from './components/Sidebar.js';
import Form from './components/Form.js';
import Main from './components/Main.js';
import List from './components/List.js';
import { connect } from "react-redux";
import './App.css';

const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen,
    view: ''
  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'MAIN'
    }
    this.dictionares = {
      FORM: {
        component: <Form />
      },
      MAIN: {
        component: <Main />
      },
      LIST: {
        component: <List />
      }
    }
  }

  onChangeView = (view) => {
    this.setState({
      view
    });
  }

  toggleExpand(baseClass) {
    return this.props.isOpen ? `${baseClass} ${baseClass}--expand` : baseClass;
  }

  toggleView() {
    return this.dictionares[this.state.view].component;
  }

  render() {
    return (
      <div class={this.toggleExpand('app')}>
        <div class='app__leftColumn'>
          <Sidebar changeView={this.onChangeView} className="sidebar" />
        </div>
        <div className="app__rightColumn">
          {this.toggleView()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
