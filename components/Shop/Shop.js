class Shop {
	handleClear() {
		ROOT_SHOP.innerHTML = '';
	}
	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({id, name, price}) => {
			
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
					<tr>
						<td class="shop-element__name">✔️ ${name}</td>
						<td class="shop-element__price">${price.toLocaleString()} ₽</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		const html = `
			<div class="shop-container">
				<div class="shop__close" onClick="shopPage.handleClear();"></div>
				<table>
					${htmlCatalog}
					<tr>
						<td class="shop-element__name">✅ ИТОГО:</td>
						<td class="shop-element__price">${sumCatalog.toLocaleString()} ₽</td>
					</tr>
				</table>
			</div>
		`;

		ROOT_SHOP.innerHTML = html;
	}
}

const shopPage = new Shop();