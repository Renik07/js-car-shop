class Products {
	render() {
		let htmlCatalog = '';
		CATALOG.forEach(({id, name, img, price}) => {
			htmlCatalog += `
				<li class="products-item">
					<span class="products-item__name">${name}</span>
					<img class="products-item__img" src="${img}" />
					<span class="products-item__price">💵 ${price.toLocaleString()} rub.</span>
					<button class="products-item__btn">Добавить в корзину</button>
				</li>
			`;
			console.log(id, name, img, price);
		});
		const html = `
			<ul class="products-container">
				${htmlCatalog}
			</ul>
		
		`;

		ROOT_PRODUCTS.innerHTML = html;
	}
}

const products = new Products();
products.render();