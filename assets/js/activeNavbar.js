$(document).ready(function ($) {
    var url = window.location.pathname;
    var activePage = url.substring(url.lastIndexOf('/') + 1);

    $('#navbarNav .nav-link').each(function () {
        var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1);

        if (activePage == linkPage) {
            $(this).closest("li").addClass("active border-bottom border-top");
        }
    });
});