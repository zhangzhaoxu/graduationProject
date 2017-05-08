import React from 'react';
import Tabs from '../common/Tabs';

export default function wrapper(Tabs, extra) {
    return class TabsWrapper extends React.Component {
        render () {
            return (
                <div className={extra.className}>
                    <Tabs data={extra.data} />
                </div>
            )
        }
    }
}