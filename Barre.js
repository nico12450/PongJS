class Barre {

	constructor(epaisseur, hauteur, couleur){

		if (typeof epaisseur != "undefined") {
			this.epaisseur = epaisseur;
		}
		else{
			this.epaisseur = 10;
		}

		if (typeof hauteur != "undefined") {
			this.hauteur = hauteur;
		}
		else{
			this.hauteur = 100;
		}

		if (typeof couleur != "undefined") {
			this.couleur = couleur;
		}
		else{
			this.couleur = 'black';
		}

		this.position = [0,0]

	}

	setPosition(x,y){
		this.position = [x,y];
	}

	draw(ctx){
		ctx.fillStyle = this.couleur;
 		ctx.fillRect(this.position[0], this.position[1], this.epaisseur, this.hauteur);

	}

	clear(ctx){
		ctx.fillStyle = 'rgb(200,200,200)';
		ctx.fillRect(this.position[0], this.position[1], this.epaisseur, this.hauteur);

	}

	description(){

		var d = "\n";
		d += "description de la barre : \n"
		d += "epaisseur : " + this.epaisseur + "\n";
		d += "hauteur : " + this.hauteur + "\n";
		d += "couleur : " + this.couleur + "\n";

		console.log(d);

	}

}