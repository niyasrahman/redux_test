import React,{Component } from 'react';
import {connect} from 'react-redux';

 class Bookdetail extends Component{
	render(){
		if(!this.props.book){
			return (<div>Select a book</div>);

		}
		return(
				<div>
				<h1>Selected book is</h1>
				<div>{this.props.book.title}</div>
				</div>
			);
	}
}


 function mapStateToProps(state){
 	return{
 		book:state.activeBook
 	};
 }
 export default connect(mapStateToProps)(Bookdetail);