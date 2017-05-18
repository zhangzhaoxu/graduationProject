import React from 'react';
import './SelectionItem.scss';

class SelectionItem extends React.Component {
    render() {
        let { selectionItem, handleSelectionChange, currentIndex, current } = this.props;
        return (
            <ul className="selectionItem">
                <li className="itemLiTitle">{selectionItem.title}:</li>
                {selectionItem.selections.map((item, index) => {
                    return index === current[currentIndex] ? <li className="itemLi current">{item}</li> :
                        <li onClick={() => {
                            handleSelectionChange(currentIndex, index, item)
                        }} className="itemLi">{item}</li>
                })}
            </ul>
        )
    }
}

export default SelectionItem;