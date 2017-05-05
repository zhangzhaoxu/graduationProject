import React from 'react';
import './SelectionItem.scss';

class SelectionItem extends React.Component {
    render() {
        let testArr = {
            title: "赛事类型",
            conditions: [
                "IT", "金融", "教育", "医疗", "数学"
            ]
        };
        return (
            <ul className="selectionItem">
                <li className="itemLiTitle">{testArr.title}:</li>
                {testArr.conditions.map((item, index) => {
                    return index === 0 ? <li className="itemLi current">{item}</li> :
                        <li className="itemLi">{item}</li>
                })}
            </ul>
        )
    }
}

export default SelectionItem;