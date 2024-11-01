(function () {
	const expected = /** @type {HTMLElement} */ (
		document.getElementById('expected')
	);

	const actual = /** @type {HTMLElement} */ (
		document.getElementById('actual')
	);

	const expectedInterval = 500;
	let lastInterval = Date.now();
	setInterval(() => {
		expected.textContent = `${expectedInterval}ms`;
		actual.textContent = `${Date.now() - lastInterval}ms`;
		lastInterval = Date.now();
	}, expectedInterval);
})();
