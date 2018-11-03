class Balle {

	constructor(taille, couleur){

		if (typeof taille != "undefined") {
			this.taille = taille;
		}
		else{
			this.taille = 10;
		}

		if (typeof couleur != "undefined") {
			this.couleur = couleur;
		}
		else{
			this.couleur = 'black';
		}

		this.position = [0,0]
		this.vitesse = 10;
		this.contexte;
		this.direction = true;

	}

	setPosition(x,y){
		this.position = [x,y];
	}

	setContexte(ctx){
		this.contexte = ctx;
		this.position = [ctx.canvas.width/2-this.taille/2,ctx.canvas.height/2-this.taille/2];
	}

	draw(){
		this.contexte.fillStyle = this.couleur;
 		this.contexte.fillRect(this.position[0], this.position[1], this.taille, this.taille);

	}

	clear(){
		this.contexte.fillStyle = 'rgb(200,200,200)';
		this.contexte.fillRect(this.position[0], this.position[1], this.taille, this.taille);

	}

	move(){

		this.clear();

		this.testRebond();

		if(this.direction){
			this.setPosition(this.position[0]-this.vitesse,this.position[1]);
		}

		else{
			this.setPosition(this.position[0]+this.vitesse,this.position[1]);
		}

		this.draw();
	}

	testRebond(){

		if(this.position[0]<0){
			this.direction = false;
		}

		else if(this.position[0]>this.contexte.canvas.width){
			this.direction = true;
		}

	}

	description(){

		var d = "\n";
		d += "description de la balle : \n"
		d += "taille : " + this.taille + "\n";
		d += "couleur : " + this.couleur + "\n";

		console.log(d);

	}

}