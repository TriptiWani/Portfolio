$(document).ready(function(){
  setInterval(randomCreativeWorks,4000);
  $('.laptopDisplay').on('click',function(){
    console.log('clicked');
  });

  $('.laptopDisplay').mouseleave(function(){
    console.log('leave');
    showImage($(this),"laptop.png");
  });
  $('.laptopDisplay').mouseenter(function(){
    console.log('enter');
    showImage($(this),"laptop2.png");
  });
  $('.aboutme').append($divImg).append($divAboutMeContainer);

    projectViews($('.projects_container'),1,'laptop');
    projectViews($('.projects_container'),2,'laptop');
    projectViews($('.projects_container'),3,'mobile');
    projectViews($('.projects_container'),4,'mobile');
    projectViews($('.projects_container'),5,'laptop');
    projectViews($('.projects_container'),6,'laptop');
    _(num_of_projects).times(function(n){
      displayProjectDetails(n);
    });

});
