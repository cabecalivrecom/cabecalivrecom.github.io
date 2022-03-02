function random_number(first, last) {
    return Math.floor((Math.random() * (last - first + 1))) + first;
}

$(document).ready(function(){
    $('body').bootstrapMaterialDesign();

    $('#fab').click(function(){
        var enterDesignMode = ($('#fab button i').text() == "visibility");
        $('#fab button i').text(enterDesignMode ? "edit" : "visibility");
        document.designMode = enterDesignMode ? "on" : "off";
    });

    setUpGabAndParlerIconsForFontAwesome();

    // Trata pesquisa

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('q')) {
        const query = urlParams.get('q');
        $('#navbar-search-field').val(query);
        $('#navbar-search-button').click();
    }

});
