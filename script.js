let Modal = {

    open(){

        //Abrir modal
        //Adicionar classe active ao modal 
        document.querySelector('.modal-overlay').classList.add('active');

    },

    close(){

        //fecha modal
        //retira a classe active do modal
        document.querySelector('.modal-overlay').classList.remove('active');

    }

}