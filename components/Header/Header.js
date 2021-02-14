class Header {
	handOpenShopPage() {
		shopPage.render();
	}
	render(count) {
		const html = `
			<div class="header-container">
				<img src="https://mir-s3-cdn-cf.behance.net/projects/230/5c3fab88576607.Y3JvcCw4MjMsNjQ0LDU1Niw1NQ.png" />
				<div class ="header-counter" onClick="header.handOpenShopPage();">
					🛒${count}
				</div>
			</div>	
		`;

		ROOT_HEADER.innerHTML = html;
	}
}

const header = new Header();