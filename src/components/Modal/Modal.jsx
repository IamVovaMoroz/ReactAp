import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

// Делаем доступ по ID куда рендерить будем модалку
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
    // window.addEventListener('keydown', event => {
    //     // отслеживаем нажатия клавы, при ESC срабатывает
    //     // console.log(event);
    //     if(event.code === "Escape"){
    //         console.log("Нажали ESC");
    //         console.log(this.props);
    //         this.props.onClose({ showModal: true });
    //     }
    // });

  }

  componentWillUnmount() {

    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       console.log('Нажали ESC, нужно закрыть модалку');

//       this.props.onClose();
//     }
//   };


handleKeyDown = event => {
  if (event.code === 'Escape') {
    console.log('Нажали ESC');
    console.log(this.props);
    this.props.onClose({ showModal: true }); // Удалите { showModal: true } из аргумента
  }
};

  



  handleBackdropClick = event => {
    console.log('Кликнули в бекдроп');
    // event.target  это где конкретно кликнули.
    if (event.currentTarget === event.target) {
        this.props.onClose();
      }

}





// добавляем render() {return createPortal(1 что рендерим  + ссылка на рут, после запятой, где рендерим modalRoot)
  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,  modalRoot
      
      );
  }
}

