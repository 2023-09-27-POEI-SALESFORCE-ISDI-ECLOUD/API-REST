let url = "http://localhost:3000/produits";

let requete = fetch(url);

//requete
//	.then(function (response) {
//		if (response.status === 200) {
//			let resultat = response.json();
//			resultat.then(function (data) {
//				create_product_card(data);
//			});
//		}
//		//console.log(response);
//	})
//	.catch(function (error) {
//		console.log("---------------ERROR---------------");
//		console.log(error);
//		console.log("---------------END ERROR---------------");
//	});

function create_products_cards(data) {
	// boucler sur le json et creer une card par element
}
function traitement_requete_produit(response) {
	let datas = response.json();
	datas.then(create_products_cards);
}

function error_promise(error) {
	console.log(error);
}

requete.then(traitement_requete_produit).catch(error_promise);

//requete
//	.then((response) => {
//		response.json().then((data) => {
//			create_product_card(data);
//		});
//	})
//	.catch((error) => {
//		console.log(error);
//	});
