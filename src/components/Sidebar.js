import React, {Component} from 'react';
import { FaBars, FaTimes, FaPlus, FaList } from 'react-icons/fa';
import { connect } from "react-redux";
import { isOpen, isClose } from "../store/actions";

const mapDispatchToProps = dispatch => ({
  isOpen: () => dispatch(isOpen()),
  isClose: () => dispatch(isClose()),
})

const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen
  }
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  handleClickLogo() {
    this.setState({isOpen: !this.state.isOpen});
    !this.state.isOpen ? this.props.isOpen(this.state.isOpen) : this.props.isClose(this.state.isOpen);
  }

  handleView(view) {
    this.props.changeView(view);
  }

  handleIcon() {
    return this.state.isOpen ? <FaTimes size="2rem" color="white"/> : <FaBars size="2rem" color="white"/>;
  }

  render() {
    return (
      <aside className={this.props.className}>
        <nav 
          className={`${this.props.className}__nav`}
        >
          <div 
            className={`${this.props.className}__menuContainer`}
            onClick={this.handleClickLogo.bind(this)}
          >
            {this.handleIcon()}
          </div>
          <ul className={`${this.props.className}__list`}>
            <li className={`${this.props.className}__item`}>
              <button
              title="Add recipe"
              className={`${this.props.className}__button`}
              onClick={this.handleView.bind(this, 'FORM')}
            >
              <FaPlus size="2rem"/>
              {this.state.isOpen ? 'Add recipe' : ''}
              </button>

              <button
              title="Show my recipes"
              className={`${this.props.className}__button`}
              onClick={this.handleView.bind(this, 'LIST')}
            >
              <FaList size="2rem"/>
              {this.state.isOpen ? 'Show my recipes' : ''}
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);