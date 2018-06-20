import React, { Component } from 'react';
import './css/BookmarksBoard.css'
import BookmarkItem from './BookmarkItem';

//Bookmark object

function Bookmark(id, url, description) {
    this.id = id;
    this.url = url;
    this.description = description;
}

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

        bookmarks: [],
        isEditing: false,
        currentBookmarkId: null
    };

    onAddBookmark = () => {

        let url = this.urlInput.value.trim();
        let description = this.descriptionInput.value;
        let id = this.state.bookmarks.length;

        let newBookmark = new Bookmark(id, url, description);
        let bookmarks = this.state.bookmarks.concat(newBookmark);

        //page re-renders at every change of state
        this.setState({
            bookmarks
        }, this.onClearInputFields());

    };

    onEditing = () => {


        //can go in edit mode only when there are items on screen
        if (this.state.bookmarks.length > 0) {
            this.setState({
                isEditing: true
            });
        }


    };

    onEditBookmark = (id, isSelected) => {


        if (isSelected) {
            //set current item id in state
            this.setState({
                currentBookmarkId: id
            });

            //get values of selected bookmark in input fields
            let selectedBookmark = this.state.bookmarks.filter(bookmark => {

                return bookmark.id === id;

            })[0];

            console.log(selectedBookmark);

            this.urlInput.value = selectedBookmark.url;
            this.descriptionInput.value = selectedBookmark.description;





        }

        if(!isSelected) {
            //set current item id in state to null
            this.setState({
                currentBookmarkId: null
            });
        }

    };

    submitEdit = () => {

        console.log('submitting changes');

    };

    onCancelEditing = () => {

        this.setState({
            isEditing: false,
            currentBookmarkId: null
        });

        this.onClearInputFields();
    };

    onClearInputFields = () => {

        this.urlInput.value = '';
        this.descriptionInput.value = '';
    };





    render () {

        console.log(this.state);

        //to no repeat this.state.bookmarks
        let { bookmarks } = this.state;

        const bookmarkItems = bookmarks.map(bookmark => {

            //to pass in all props at once
            let props = {
                id: bookmark.id,
                url: bookmark.url,
                description: bookmark.description,
                isEditing: this.state.isEditing,
                onEditBookmark: this.onEditBookmark,
                currentBookmarkId: this.state.currentBookmarkId
            };

            return (

                <BookmarkItem {...props} key={bookmark.id}/>

            )
        });


        return (
            <div style={bookmarksBoardStyle}>

                <div style={headerStyle}>
                    <h3>Super Bookmarks</h3>
                    <div style={controlsContainerStyle}>

                        {this.state.isEditing &&
                            <div style={cancelRemoveBtnContainer}>
                                <button style={btnStyle} onClick={this.onCancelEditing}>Cancel</button><button style={btnStyle}>Remove</button>
                            </div>
                        }


                        <div style={editAddBtnContainer}>
                            {this.state.bookmarks.length > 0 && !this.state.isEditing && <button style={btnStyle} onClick={this.onEditing}>Edit</button>}
                            {!this.state.isEditing && <button style={btnStyle} onClick={this.onAddBookmark}>Add</button>}
                            {this.state.isEditing && <button style={btnStyle} onClick={this.submitEdit}>Submit Changes</button>}
                        </div>

                    </div>
                    <input style={inputStyle} placeholder='Please insert url...' ref={input => this.urlInput = input}/>
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
    minWidth: 200,
    marginBottom:20
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

