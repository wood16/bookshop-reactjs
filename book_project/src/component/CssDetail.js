import React, { useEffect , useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './HtmlDetail.css';

function CssDetail  () {
    const {id} = useParams()
    const [book, setBook] = useState([])
    const [vote, setVote] = useState([])
    const spanStyle = {
        color: 'orange'
    };
    let votes = Array(5)
    let content = "Loading ..."

    // call api axios
    useEffect(()=>{
        axios.get(`http://localhost:3001/css/${id}`)
            .then(res => {
                setBook(res.data);
                setVote(res.data.vote)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [id])

    // set vote 
    if(vote){
        var i = 1;
        while(i <= 5){
            if(i <= vote){
                votes.push(<span className="fa fa-star" style={spanStyle} ></span>)
            }
            else{
                votes.push(<span className="fa fa-star"></span>)
            }
            i++
        }
    }

    // set content
    if(book){
        content = 
            <div className="row">
                <div className="col">
                    <img src={book.image} alt='Loading...' width='100%' height='450px'/>
                </div>
                <div className="col-6">
                    <h2>{book.title}</h2>
                    <i>{book.author}</i>
                    <p>{book.description}</p>
                </div>
                <div className="col">
                    {votes}   
                </div>
            </div>
        
    }
    return(
        <div className='container-detail'>
            {content}
        </div>
    )
}
export default CssDetail;