
function closestParentClassName(element, className) {
	while (element) {
		if (element.classList.contains(className)) return element;
		element = element.parentElement
	}
	return undefined;
}