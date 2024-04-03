export const navigateBack = (steps = 1) => {
	window.history.go(-steps);
};
