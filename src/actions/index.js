export function selectBook(book){
	//selectBook is an action creator it should  an action
	//an object with a typ property

	return{
		type:'BOOK_SELECTED',
		payload:book
		
	}
}