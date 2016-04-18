import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index.js';
import {bindActionCreators} from 'redux';

class BookList extends Component{
  constructor(props){
    super(props);
  }
  renderList(){
    return this.props.books.map((book) =>{
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">{book.title} </li>
      );
    });
  }
  render(){
    return(
      <ul className="ligt-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {books: state.books};
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchtoProps(dispatch){
  //When selectbook is called, the result should be passed to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//Promote BookList from a component to a container
//It needs to know abut the selectBook method.
export default connect(mapStateToProps, mapDispatchtoProps)(BookList);
