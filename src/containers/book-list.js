import React,{Component} from 'react';

import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

import { bindActionCreators } from 'redux';

 class BookList extends Component{
	RenderList(){
		return this.props.books.map((book) =>{
			return(
			<li onClick={()=> this.props.selectBook(book)} 
			className="list-group-item" 
			key={book.title} > {book.title} 
			</li>
		);
		});
	}
	render(){
		return(
			<ul>
				{this.RenderList()}
			</ul>
		)
	}
}

function mapStateToProps(state){
	return{
		books:state.books
	};
}
function mapDispachToProps(dispach){
	return bindActionCreators({ selectBook:selectBook },dispach)
}
export default connect(mapStateToProps,mapDispachToProps )(BookList);  