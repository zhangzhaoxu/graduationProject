import React, {Component} from 'react';
import Selection from '../components/Forum/Selection';
import PostContainer from '../components/Forum/PostContainer';
import PostInfo from '../components/Forum/PostInfo';

class Forum extends Component {
    render() {
        return (
            <div className="forum">
                <PostInfo />
            </div>
        )
    }
}

export default Forum;