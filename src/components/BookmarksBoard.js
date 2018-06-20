import React, { Component } from 'react';
import './css/BookmarksBoard.css'
import BookmarkItem from './BookmarkItem';

const data = [
    // {
    //     id: 0,
    //     url: 'test url',
    //     description: 'desc of above url'
    // },
    //
    // {
    //     id: 1,
    //     url: 'test url 2',
    //     description: 'desc of above url 2'
    // },
    //
    // {
    //     id: 2,
    //     url: 'test url 3',
    //     description: 'desc of above url 3'
    // },
];


export default class BookmarksBoard extends Component {

    state = {

        bookmarks: []
    };

    onAddBookmark = () => {

        console.log('adding bookmark');

    };



    render () {

        //to no repeat this.state.bookmarks
        let { bookmarks } = this.state;

        const bookmarkItems = bookmarks.map(bookmark => {

            //to pass in all props at once
            let props = {
                id: bookmark.id,
                url: bookmark.url,
                description: bookmark.description
            };

            return (

                <BookmarkItem {...props} key={bookmark.id}/>

            )
        });


        return (
            <div style={bookmarksBoardStyle}>

                <div style={headerStyle}>
                    <h3>Board</h3>
                    <div style={controlsContainerStyle}>

                        <div style={cancelRemoveBtnContainer}>
                            <button style={btnStyle}>Cancel</button><button style={btnStyle}>Remove</button>
                        </div>

                        <div style={editAddBtnContainer}>
                            <button style={btnStyle}>Edit</button><button style={btnStyle} onClick={this.onAddBookmark}>Add</button>
                        </div>

                    </div>
                    <input style={inputStyle} placeholder='Please insert url...' ref={input => this.nameInput = input}/>
                    <input style={inputStyle} placeholder='Description...' ref={input => this.descriptionInput = input}/>

                </div>

                {bookmarkItems}

            </div>

        )
    }

}

//Cannot use sass at the moment. mac OS sierra update giving me some issues.
// I'll be using styles in js and normal css:
//not very scalable. not good idea for larger applications

const bookmarksBoardStyle = {

    width: '80%',
    // height: '80vh',
    border: '1px solid grey',
    margin: '0 auto',
    minWidth: 200
};

const headerStyle = {
    marginBottom: 30
};

const inputStyle = {
    width: '80%',
    display: 'block',
    margin: '5px auto',
    borderLeft: 'none',
    borderTop: 'none',
    borderRight: 'none'
};

const controlsContainerStyle ={
    width: '100%',
    margin: '15px auto',
    backgroundColor: 'green',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden'
};

const cancelRemoveBtnContainer = {

    display: 'flex',
    flex: '1 0 200px'
};

const editAddBtnContainer = {
    display: 'flex',
    flex: '1 0 200px'
};

const btnStyle = {
  flex: '1 0 100px'
};

