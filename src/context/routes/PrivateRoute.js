const PrivateRoute = ({ children }) => { // check whether there is a user loggedin or not, if not route to signin page
	const currentUser = localStorage.getItem('userUID');

	if (!currentUser) {
		window.location.assign("/signin");
	}
	return children;
};

export default PrivateRoute;
