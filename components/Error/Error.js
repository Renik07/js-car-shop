class Error {

	render() {
		const html = `
			<div class="error-container">
				<div class="error-message">
					<h3>Ошибка доступа!</h3>
					<p>Попробуйте еще раз.</p>
				</div>
			</div>
		`;

		ROOT_ERROR.innerHTML = html;
	}
}

const errorPage = new Error();