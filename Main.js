function draw() {

	var canvas = document.getElementById('Pong')
	var ctx = (canvas.getContext('2d'));

  	ctx.canvas.width  = window.innerWidth;
 	ctx.canvas.height = window.innerHeight;

 	var b1 = new Barre();
 	b1.description();

 	var b2 = new Barre(10,100,'blue');
 	b2.description();

 	var balle = new Balle();
 	balle.description();

}
