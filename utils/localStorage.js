class LocalStorageUtil {
	constructor() {
		this.keyName = 'products';
	}
	// метод, получаем с локального хранилища
	getProducts() {
		const productsLocalStorage = localStorage.getItem(this.keyName);
		if (productsLocalStorage !== null) {
			return JSON.parse(productsLocalStorage)
		} else {
			return [];
		}

	}
	putProducts(id) {
		let products = this.getProducts();
		let pushProduct = false;
		const index = products.indexOf(id);

		// если совпадений не найдено, то вернется -1
		if (index === -1) {
			//значит, это новые данные и их нужно записать
			products.push(id);
			pushProduct = true;
		} else {
			// иначе удалить
			products.splice(index, 1);
		}

		localStorage.setItem(this.keyName, JSON.stringify(products));

		return {pushProduct, products};
		
	}
}

const localStorageUtil = new LocalStorageUtil();