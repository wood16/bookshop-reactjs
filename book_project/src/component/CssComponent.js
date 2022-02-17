import React from 'react';
import axios from 'axios';
import './Html.css';
import { NavLink } from 'react-router-dom';
class CssComponent extends React.Component{
    state = {
        books: []
    }
    
    // call api axios
    componentDidMount() {
        axios.get(`http://localhost:3001/css`)
          .then(res => {
            const books = res.data;
            this.setState({ books });
          })
    }
    render(){
        
        const row = this.state.books.map((book, i)=>{
            return(
                <div className="book" key={i}>
                    <div className='book-image'>
                        <img src={book.image} alt={book.title} width="100%" height="300"/>
                    </div>
                    <div className='book-info'>
                        <p>{book.title}</p>
                        <p>By<i>{book.author}</i></p>
                        <NavLink to={`/css/${book.id}`}>
                            <button className="button">Detail</button>
                        </NavLink>
                    </div>
                </div>
            )
        })
        return(
            <div className='container-book'>
                <h2>CSS Books</h2>
                {row}
            </div>
        )
    }
}
export default CssComponent;