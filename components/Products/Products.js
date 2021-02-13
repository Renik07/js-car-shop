class Products {
	constructor() {
		this.clasNameActive = 'products-item__btn_active';
		this.labelAdd = 'Добавить в корзину';
		this.labelRemove = 'Удалить из корзины';
	}

	handlSetLocationStorage(elem, id) {
		const {pushProduct, products} = localStorageUtil.putProducts(id);

		if (pushProduct) {
			elem.classList.add(this.clasNameActive);
			elem.innerHTML = this.labelRemove;
		} else {
			elem.classList.remove(this.clasNameActive);
			elem.innerHTML = this.labelAdd;
		}

		header.render(products.length);
	}

	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';

		CATALOG.forEach(({id, name, img, price}) => {
			let activeClass = '';
			let activeText = '';

			if (productsStore.indexOf(id) === -1) {
				// совпадений не найдено => на кнопку добавляем activeText
				activeText = this.labelAdd;
			} else {
				activeClass = ' products-item__btn_active';
				activeText = this.labelRemove;
			}

			htmlCatalog += `
				<li class="products-item">
					<span class="products-item__name">${name}</span>
					<img class="products-item__img" src="${img}" />
					<span class="products-item__price">💵 ${price.toLocaleString()} rub.</span>
					<button class="products-item__btn ${activeClass}" onClick='products.handlSetLocationStorage(this, "${id}");'>${activeText}</button>
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