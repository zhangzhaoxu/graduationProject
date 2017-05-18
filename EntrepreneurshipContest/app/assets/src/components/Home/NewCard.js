import React from 'react';
import './NewCard.scss';

export default class NewCard extends React.Component {
    static propTypes = {
        newsTitle: React.PropTypes.string,
        newsImg: React.PropTypes.string,
        newsDes: React.PropTypes.string
    };

    render() {
        let { newsTitle, newsImg, newsDes, index } = this.props;
        return (
            <div className="newCon">
                {index % 2 === 0 ?
                    <div>
                        <img src={newsImg} className="newImg"/>
                        <div className="newInfo">
                            <p className="infoTitle">{newsTitle}</p>
                            <p className="infoDes">{newsDes}</p>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="newInfo">
                            <p className="infoTitle">{newsTitle}</p>
                            <p className="infoDes">{newsDes}</p>
                        </div>
                        <img src={newsImg} className="newImg"/>
                    </div>
                }

            </div>
        )
    }
}