import React from 'react';
import axios from 'axios';
import './Html.css';
import { NavLink } from 'react-router-dom';
class HtmlComponent extends React.Component{
    state = {
        books: [],
        firstPage: 1,
        booksPerPage: 8
    }
    
    // call api axios
    componentDidMount() {
        axios.get(`http://localhost:3001/html`)
          .then(res => {
            const books = res.data;
            this.setState({ books });
          })
    }
    render(){
        var currentPage = this.state.firstPage
        var url = window.location.pathname
        if(url !== "/"){
            var tempArr = url.split('/');
            currentPage = tempArr[tempArr.length-1]
            console.log(url)
            console.log(currentPage)
        }
        
        const booksList = this.state.books
        const booksPerPage = this.state.booksPerPage
        const indexOfLastBooks = currentPage * booksPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu booksList
        const indexOfFirstBooks = indexOfLastBooks - booksPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu booksList
        const currentTodos = booksList.slice(indexOfFirstBooks, indexOfLastBooks); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang hiện tại
        // tong so trang
        const numPage = Math.ceil(booksList.length / booksPerPage)

        const row = currentTodos.map((book, i)=>{
            return(
                <div className="book" key={i}>
                    <div className='book-image'>
                        <img src={book.image} alt={book.title} width="100%" height="300"/>
                    </div>
                    <div className='book-info'>
                        <p>{book.title}</p>
                        <p>By <i>{book.author}</i></p>
                        <NavLink to={`/html/${book.id}`}>
                            <button className="button">Detail</button>
                        </NavLink>
                    </div>
                </div>
            )
        })
        var page
        if(numPage !== 0){
            // tao mang tu 1..N
            var temp = Array.from({length: numPage}, (_, i) => i + 1)
            page = temp.map((item, i)=>{
                return(             
                    <li className="page-item" key={item}><NavLink to={`/html/page/${item}`} className="page-link">{item}</NavLink></li>
                ) 
            })
        }
        
        return(
            <div className='container-book'>
                <h2>HTML Books</h2>
                {row}
                <div className='body-pagigation'>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {page}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default HtmlComponent;