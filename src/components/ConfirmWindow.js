import React from 'react';


export default class ConfirmWindow extends React.Component{
  confirm(){
    this.props.onConfirm();
  }

  render(){
    return <div className="confirm_modal" >
                <div className="confrim-text">
                    <p>Вы уверены, что хотите удалить выбранный элемент?</p>
                </div>
                <div className="confirm-modal-button">
                    <button className="confirm-modal-button_ok" onClick={this.confirm.bind(this)}>Да</button>
                    <button className="confirm-modal-button_cancel" >Отменить</button>
                </div>
            </div>

  }
}