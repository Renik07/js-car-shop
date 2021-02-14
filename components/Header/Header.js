class Header {
	handOpenShopPage() {
		shopPage.render();
	}
	render(count) {
		const html = `
			<div class="header-container">
				<div class ="header-counter" onClick="header.handOpenShopPage();">
					🛒${count}
				</div>
			</div>	
		`;

		ROOT_HEADER.innerHTML = html;
	}
}

const header = new Header();