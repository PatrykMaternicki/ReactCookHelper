import React, {Component} from 'react';
import Sidebar from './components/Sidebar.js';
import Form from './components/Form.js';
import Main from './components/Main.js';
import { connect } from "react-redux";
import './App.css';

const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen,
    view: state.view
  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.dictionares = {
      FORM: {
        component: <Form />
      },
      MAIN: {
        component: <Main />
      }
    }
  }

  toggleExpand(baseClass) {
    return this.props.isOpen ? `${baseClass} ${baseClass}--expand` : baseClass;
  }

  toggleView() {
    return this.dictionares[this.props.view].component;
  }

  render() {
    return (
      <div class={this.toggleExpand('app')}>
        <div class='app__leftColumn'>
          <Sidebar className="sidebar" />
        </div>
        <div className="app__rightColumn">
          {this.toggleView()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
