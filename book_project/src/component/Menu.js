import React from 'react';
import { NavLink } from 'react-router-dom';
class Menu extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <div className="container d-flex flex-grow-1">
                        <NavLink className="navbar-brand d-none d-lg-inline-block" to="/"><i className="fas fa-book-open icon__book text-primary"></i></NavLink>
                    </div>
                    <div className="container collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/">Html<span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/css">Css</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/js">Javascript</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/react">React</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/nodejs">NodeJs</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>  
            </nav>
        )
    }
}
export default Menu;