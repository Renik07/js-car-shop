class Products {
	render() {
		let htmlCatalog = '';
		CATALOG.forEach(({id, name, img, price}) => {
			htmlCatalog += `
				<li>
					<span>${name}</span>
					<img src="${img}" />
					<span>${price}</span>
					<button>Добавить в корзину</button>
				</li>
			`;
			console.log(id, name, img, price);
		});
		const html = `
			<ul>
				${htmlCatalog}
			</ul>
		
		`;

		ROOT_PRODUCTS.innerHTML = html;
	}
}

const products = new Products();
products.render();