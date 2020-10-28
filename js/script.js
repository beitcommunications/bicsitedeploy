function navShow(){


    let nav = document.querySelector('.mobile-nav');
    let burger = document.querySelector('.menu-icon').addEventListener('click',navOpen);
    let burgerCancel = document.querySelector('.cancel-icon').addEventListener('click',navClose);
    
   

    function navOpen(){
        nav.classList.toggle('nav-active');
    }
        
    
    function navClose(){
        nav.classList.toggle('nav-active');
    }
    
}

navShow();
