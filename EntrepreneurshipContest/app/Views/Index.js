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
        
        const { microdata, userInfo, homeData, competitionsData, recommendData, forumData } = this.props;
        let homeJs = `${microdata.styleDomain}/build/app.bundle.js`;
        let scriptUrls = [homeJs];
        
        return (
            <Default
                userInfo={userInfo}
                homeData={homeData}
                competitionsData={competitionsData}
                recommendData={recommendData}
                forumData={forumData}
                scriptUrls={scriptUrls}
                title={"demo"}>
                <div id="App"
                     data-userInfo={JSON.stringify(userInfo)}
                     data-homeData={JSON.stringify(homeData)}
                     data-competitionsData={JSON.stringify(competitionsData)}
                     data-recommendData={JSON.stringify(recommendData)}
                     data-forumData={JSON.stringify(forumData)}
                >
                </div>
            </Default>
        );
    }
}

module.exports = Index;
