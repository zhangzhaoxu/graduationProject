import React, {Component} from 'react';
import Selection from '../components/Forum/Selection';
import PostContainer from '../components/Forum/PostContainer';

class Forum extends Component {
    render() {
        return (
            <div className="forum">
                <Selection />
                <PostContainer />
            </div>
        )
    }
}

export default Forum;