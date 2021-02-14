function render() {
	const productsStore = localStorageUtil.getProducts();

	header.render(productsStore.length);
	products.render();

}

let CATALOG = [];

fetch('https://api.jsonbin.io/b/60295318435c323ba1c63ffe')
	.then(result => result.json())
	.then(body => {
		CATALOG = body;
		render();
	})
	.catch(error => {
		console.log(error);
	})
