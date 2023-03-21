const PublicRoute = ({ children }) => { // check whether there is a user loggedin or not, if yes route to private pages
	const currentUser = localStorage.getItem('userUID');

	if (currentUser) {
		window.location.assign("/userlist");
	}
	return children;
};

export default PublicRoute;
