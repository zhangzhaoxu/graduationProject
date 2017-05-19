import React, { Component, PropTypes } from 'react';
import Default from './layout/Default';

class Index extends Component {
    static propTypes = {
        microdata: PropTypes.object,
        userInfo: PropTypes.object,
        homeData: PropTypes.object,
        competitionsData: PropTypes.object
    };
    
    render() {
        
        const { microdata, userInfo, homeData, competitionsData, recommendData, forumData, answerData } = this.props;
        let homeJs = `${microdata.styleDomain}/build/app.bundle.js`;
        let scriptUrls = [homeJs];
        
        return (
            <Default
                userInfo={userInfo}
                homeData={homeData}
                competitionsData={competitionsData}
                recommendData={recommendData}
                forumData={forumData}
                answerData={answerData}
                scriptUrls={scriptUrls}
                title={"demo"}>
                <div id="App"
                     data-userInfo={JSON.stringify(userInfo)}
                     data-homeData={JSON.stringify(homeData)}
                     data-competitionsData={JSON.stringify(competitionsData)}
                     data-recommendData={JSON.stringify(recommendData)}
                     data-forumData={JSON.stringify(forumData)}
                     data-answerData={JSON.stringify(answerData)}
                >
                </div>
            </Default>
        );
    }
}

module.exports = Index;
