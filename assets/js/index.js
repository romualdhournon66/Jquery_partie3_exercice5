$(function(){
  // programmation des touches de direction
  	document.onkeydown = function(event)
  	{
  		if (event.keyCode == 37) gauche();
  		if (event.keyCode == 39) droite() ;
  		if (event.keyCode == 38) haut();
  		if (event.keyCode == 40) bas() ;
  	}  
    var largeur_fenetre = $(window).width();
    var hauteur_fenetre = $(window).height();

positionx=$('#carre').offset().
// Les fonctions de déplacement
if (positionX <=largeur_fenetre -100){
$('#carre').css('margin-left',0);
}else{
  $('#carre').css('margin-left','+=10px');
}
	function gauche()
	{
		clickLeft = getComputedStyle(carre).left;
		clickLeft = parseInt(clickLeft);
    clickLeft= clickLeft-10;
		clickLeft = clickLeft + "px";
		carre.style.left = clickLeft;
	}
	function droite()
  {
    clickLeft = getComputedStyle(carre).left;
    clickLeft = parseInt(clickLeft);
    clickLeft= clickLeft+10;
    clickLeft = clickLeft+"px";
    carre.style.left = clickLeft;
  }
	function haut()
  {
    clickUp = getComputedStyle(carre).top;
    clickUp = parseInt(clickUp);
    clickUp= clickUp-10;
    clickUp = clickUp+"px";
    carre.style.top = clickUp;
  }
	function bas()
  {
    clickUp = getComputedStyle(carre).top;
    clickUp = parseInt(clickUp);
    clickUp= clickUp+10;
    clickUp = clickUp+"px";
    carre.style.top = clickUp;
  }
});
