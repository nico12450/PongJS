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

	}

	setContexte(ctx){
		this.contexte = ctx;
		this.position = [ctx.canvas.width/2,ctx.canvas.height/2]
	}

	draw(){
		this.contexte.fillStyle = this.couleur;
 		this.contexte.fillRect(this.position[0], this.position[1], this.taille, this.taille);

	}

	clear(){
		this.contexte.fillStyle = 'rgb(200,200,200)';
		this.contexte.fillRect(this.position[0], this.position[1], this.taille, this.taille);

	}

	description(){

		var d = "\n";
		d += "description de la balle : \n"
		d += "taille : " + this.taille + "\n";
		d += "couleur : " + this.couleur + "\n";

		console.log(d);

	}

}