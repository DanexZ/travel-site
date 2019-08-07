import $ from  'jquery';

class Modal {
    constructor() {
        this.openingHandler = $('.open-modal');
        this.closingHandler = $('.modal__close');
        this.modal = $('.modal');
        this.events();
    }

    events() {

        this.openingHandler.click(this.openModal.bind(this));

        this.closingHandler.click(this.closeModal.bind(this));

        //if esc is pushed
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        if(e.keyCode == 27){
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass('modal--is-visible'); 
        return false;
    }

    closeModal() {
        this.modal.removeClass('modal--is-visible');
    }
}

export default Modal;