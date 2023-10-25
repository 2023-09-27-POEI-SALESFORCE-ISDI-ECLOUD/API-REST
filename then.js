function then(callback) {
	while (promese.state === "pending") {
		// wait
		1;
	}
	if (promese.state === "fulfilled") {
		callback(promese.value);
	}
}
function hello(name) {
	console.log("Hello " + name);
}
function bye(name, callback) {
	console.log("Bye " + name);
}

function test(instruction) {
	functs = {
		Bjr: [hello, bye],
		Arv: [hello, bye],
		//bjrArv: [bye, acheter_du_lait, hello],
		//Adeline: [velo, cafe, meme, cafe, bye, velo],
	};

	functs[instruction.instruction].forEach((element) => {
		//console.log(element.);
		let param = instruction.params[element.name];
		element(param);
	});

	//if (instruction == "Bjr") {
	//	hello("Toto");
	//	acheter_du_lait("Toto");
	//	revenir("Toto");
	//	bye("Toto");
	//} else if (instruction == "Arv") {
	//	bye("Toto");
	//	acheter_du_lait("Toto");
	//	hello("Toto");
	//} else if (instruction == "bjrArv") {
	//	bye("Toto");
	//	acheter_du_lait("Toto");
	//	hello("Toto");
	//} else if (instruction == "Adeline") {
	//	velo("Toto");
	//	cafe("Toto");
	//	meme("Toto");
	//	cafe("Toto");
	//	bye("Toto");
	//	velo("Toto");
	//}
}

test({ instruction: "Arv", params: { hello: "toto", bye: "titi" } });
