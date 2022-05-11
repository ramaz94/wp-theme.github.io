$(function(){

    $('.burger').on('click', function(){
        $('.burger').toggleClass('active');
      });

    $('.header-top__close').on('click', function(){
      $('.header-top').toggleClass('active');
    });

    $('.burger').on('click', function(){
        $('.header-menu').slideToggle();
    });


    $('.header-menu__item--one').on('click', function(){
        $('.header-menu__item--one .header-menu__item-links').slideToggle();
    });

    $('.header-menu__item--three').on('click', function(){
        $('.header-menu__item--three .header-menu__item-links').slideToggle();
    });

    $('.header-menu__item--four').on('click', function(){
        $('.header-menu__item--four .header-menu__item-links').slideToggle();
    });




    let data = Array.from(document.querySelectorAll(' .posts-main__items .posts-main__item-none')),
    step = 2,
    item = 0;

    data.slice(step).forEach(e => e.style.display = 'none');
    item += step;

    document.querySelector('#more').addEventListener('click', function(e){
      let tmp = data.slice(item, item + step);
      tmp.forEach(e => e.style.display = 'flex');
      item += step;
    
      if(tmp.length < 1)
        this.remove();
    });







});









