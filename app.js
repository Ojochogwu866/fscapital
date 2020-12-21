    const navSlide= () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelector('.navlinks li');
    
    burger.addEventListener('click',()=>{
        
        nav.classList.toggle('nav-active');
        
        
        //animatelinks
        
     navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animate='';
        }else{
           link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`; 
        }
        
       });
        
        //burgeranimation
        burger.classList.toggle('toggle');
    });
}

navSlide();