import React, { Component } from 'react'


class BookSearch extends Component {
    render() {
        return (
            <div className="container">
                <h1>Search your book</h1>
                <div className="search-container center-align">
                    <div className="row">
                        <div className="col s12 l10">
                            <form action="">
                                <div className="input-field ">
                                    <input type="text" id="search" placeholder="Search your book" />
                                    {/* <label htmlFor="search">Search book by title</label> */}
                                </div>
                            </form>
                        </div>
                        <div className="col s12 l2">
                            <button className="btn-large btn-floating teal lighten-2 pulse"><i className="material-icons prefix">search</i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookSearch;