async function mafuncasync() {
	let request = await fetch("http://localhost:3000/produits");
	let data = await request.json();
	console.log("-----------Data-----------");
	console.log(data);
	console.log("-----------END - Data-----------");
	return data;
}

//mafuncasync().then((data) => {});

async function main() {
	let data = await mafuncasync();
	console.log(data);
}

main();
