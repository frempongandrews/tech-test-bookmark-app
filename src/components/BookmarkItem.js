import React, { Component } from 'react';
import './css/BookmarkItem.css'

export default class BookmarkItem extends Component {

    editBookmark = (id, e) => {

        // console.log(id);
        // console.log(e.target.checked);

        let selected = e.target.checked; //returns true(is selected) or false(is not selected)

        //set id to current selected item id on main state
        //depending on value of checkbox

            this.props.onEditBookmark(id, selected);


    };

    render () {

        let {id, url, description, isEditing} = this.props;

        return (
            <div style={bookmarkItemContainer}>

                {isEditing && <input onChange={e=> this.editBookmark(id, e)} type="checkbox" id="checkbox" />}



                <div>
                    <h3>{url}</h3>
                </div>

                <div>
                    <p>{description}</p>
                </div>

            </div>

        )
    }

}

const bookmarkItemContainer = {

    border: '1px solid grey',
    width: '80%',
    position: 'relative',
    margin: '10px auto',
    borderRadius: 10,
    padding: 10

};