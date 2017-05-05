import React, { Component, PropTypes } from 'react';
import Default from './layout/Default';

class Index extends Component {
    static propTypes = {
        microdata: PropTypes.object,
        mydata: PropTypes.object,
    };
    
    render() {

        console.log(this.props);
        
        const { microdata, mydata } = this.props;
        let homeJs = `${microdata.styleDomain}/build/app.bundle.js`;
        let scriptUrls = [homeJs];

        console.log(homeJs);
        
        return (
            <Default
                microdata={microdata}
                scriptUrls={scriptUrls}
                title={"demo"}>
                <div id="App"
                     data-microdata={JSON.stringify(microdata)}
                     data-mydata={JSON.stringify(mydata)}>
                    <div>hello：{mydata.nick}</div>
                </div>
            </Default>
        );
    }
};

module.exports = Index;
