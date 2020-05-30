import React, { Component } from 'react';
import './Tableitem.css';

class Tableitem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
        }
        }>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
       
        {
           checked && (<div className=".todo-item" style={{background: ""}} >공강</div>)
        }
        {
          checked && (<div className="check-mark">✓</div>)
         
        }
      </div>
    );
  }
}

export default Tableitem;