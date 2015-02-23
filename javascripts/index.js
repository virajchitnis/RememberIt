var userDropDownOpen = false;

$(document).ready(function() {
	$(".nav-dropdown-link").click(function() {
		if (!userDropDownOpen) {
			showUserDropdown();
			userDropDownOpen = true;
		}
		else {
			hideUserDropdown();
			userDropDownOpen = false;
		}
	});
});

function showUserDropdown() {
	$(".nav-dropdown-body").css("display", "block");
}

function hideUserDropdown() {
	$(".nav-dropdown-body").css("display", "none");
}