class Balle {

	constructor(taille, couleur){

		if (typeof taille != "undefined") {
			this.taille = taille;
		}
		else{
			this.taille = 1;
		}

		if (typeof couleur != "undefined") {
			this.couleur = couleur;
		}
		else{
			this.couleur = 'black';
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