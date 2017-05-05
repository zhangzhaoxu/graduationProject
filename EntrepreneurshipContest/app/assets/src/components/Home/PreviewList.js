import React, { Component } from 'react';
import Preview from './Preview';
import 'whatwg-fetch';

class PreviewList extends Component {
    static propTypes = {
        loading: React.PropTypes.bool,
        error: React.PropTypes.bool,
        loadArticles: React.PropTypes.func,
        articleList: React.PropTypes.arrayOf(React.PropTypes.object)
    };

    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        const { loading, error, articleList, push } = this.props;

        if (error) {
            return <p className = "message">Oops, something is wrong.</p>
        }

        if (loading) {
            return <p className = "message">Loading...</p>
        }

        return (
            <div>
                {
                    articleList.map(item => (
                        <Preview push={push} {...item} key={item.id} />
                    ))
                }
            </div>
        )
    }
}

export default PreviewList;