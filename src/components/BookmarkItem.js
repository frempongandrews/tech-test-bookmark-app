import React, { Component } from 'react';
import './css/BookmarkItem.css'

export default class BookmarkItem extends Component {

    render () {

        return (
            <div style={bookmarkItemContainer}>


                <input type="checkbox" id="checkbox" />


                <div>
                    <h3>url link here</h3>
                </div>

                <div>
                    <p>url description here</p>
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