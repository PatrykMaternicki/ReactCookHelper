import React, {Component} from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    recipes: state.recipe
  }
};
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  createList() {
    let liList = [];
    this.props.recipes.forEach(element => {
      liList.push(<li>{element.recipe}</li>)
    });
    return liList;
  }

  render() {
    return( 
      <div>
        <ul>
          {this.createList()}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(List);