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
		this.contexte;
		this.vitesse = 1;

	}

	setPosition(x,y){
		this.position = [x,y];
	}

	setContexte(ctx){
		this.contexte = ctx;
	}

	draw(){
		this.contexte.fillStyle = this.couleur;
 		this.contexte.fillRect(this.position[0], this.position[1], this.epaisseur, this.hauteur);

	}

	clear(){
		this.contexte.fillStyle = 'rgb(200,200,200)';
		this.contexte.fillRect(this.position[0], this.position[1], this.epaisseur, this.hauteur);

	}

	move(i){
		this.clear();
		this.setPosition(this.position[0],this.position[1] - i);
		this.draw();
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