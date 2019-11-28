exports.onCreatePage = ({ page, actions }) => {
	const { createPage, deletePage } = actions;
	deletePage(page);
	// You can access the variable "house" in your page queries now
	createPage({
		...page,
		context: {
			...page.context,
			eventoId: `Su0e3Iy0rXxBObnRYQvD`
		}
	});
};
