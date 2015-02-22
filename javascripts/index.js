$(document).ready(function() {
	$(".nav-dropdown-link").hover(
		function () {
			showUserDropdown();
		}, 
		function () {
			hideUserDropdown();
		}
	);
});

function showUserDropdown() {
	$(".nav-dropdown-body").css("display", "block");
}

function hideUserDropdown() {
	$(".nav-dropdown-body").css("display", "none");
}