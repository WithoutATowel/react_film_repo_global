import React, { Component } from 'react';

class Fave extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFave: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.stopPropagation()
        console.log("handling Fave click!");
        let newState = this.state.isFave ? false : true;
        this.setState({
            isFave: newState
        })
    }

    render() {
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue';

        return (
            <div className={"film-row-fave " + isFave} onClick={this.handleClick}>
              <p className="material-icons">{ isFave }</p>
            </div>
        )
    }
}

export default Fave;