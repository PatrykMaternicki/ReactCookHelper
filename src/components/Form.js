import React, {Component} from 'react';
import { setRecipe } from "../store/actions";
import { connect } from "react-redux";

const mapDispatchToProps = { setRecipe };

const mapStateToProps = state => {
  return {
    recipe: state.recipe
  }
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: '',
      url: '',
      category: '',
      kitchen: ''
    }
  }
  
  handleSubmit = () => {
    this.props.setRecipe(this.state);
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form>
        <label
          for="recipe"
        >
          Name Recipe:
        </label>
        <input id="recipe" name="recipe" type="text" onChange={this.handleChange} required />

        <label
          for="url"
        >
          URL:
        </label>
        <input id="url" name="url" type="text" onChange={this.handleChange} required />

        <label
          for="category"
        >
          Category:
        </label>
        <input name="category" id="category" type="text" onChange={this.handleChange} required />

        <label
          for="kitchen"
        >
          Kitchen:
        </label>
        <input  name="kitchen" id="kitchen" type="text" onChange={this.handleChange} required />
        <input type="button" onClick={this.handleSubmit} />
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);