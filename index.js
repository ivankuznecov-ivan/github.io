window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.menu').classList.toggle("animate");
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.nav__list').classList.toggle('off');
    document.querySelector('.burger').classList.toggle('active');
  });

  document.querySelector('.button__loope').addEventListener('click', function(){
    document.querySelector('.search').classList.toggle('action');
    document.querySelector('.search__enter').classList.toggle('action');
    document.querySelector('.button__scan').classList.toggle('action');
    document.querySelector('.button__close').classList.toggle('action');
  });

  document.querySelector('.button__close').addEventListener('click', function(){
    document.querySelector('.search').classList.toggle('action');
    document.querySelector('.search__enter').classList.toggle('action');
    document.querySelector('.button__scan').classList.toggle('action');
    document.querySelector('.button__close').classList.toggle('action');

  });

  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
        btn.classList.remove('tabs-nav__btn--active')
      });
      e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tabs-item--active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');

    });
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    containerModifierClass: '.swiper-hero__slaider',
  });


  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      active: false,
      heightStyle: "content"
    });
  });

});

