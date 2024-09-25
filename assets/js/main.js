$(document).ready(function(){
    $('#fab').click(function(){
        var $fabButton = $('#fab button');
        var enterDesignMode = $fabButton.hasClass('btn-fab-view');
        $fabButton.removeClass(enterDesignMode ? 'btn-fab-view' : 'btn-fab-edit');
        $fabButton.addClass(enterDesignMode ? 'btn-fab-edit' : 'btn-fab-view');
        $fabButton.html('<i class="fas fa-' + (enterDesignMode ? 'edit' : 'eye') + '"></i>');
        document.designMode = enterDesignMode ? 'on' : 'off';
    });

    // Bootstrap's tables are opt-in
    // https://stackoverflow.com/a/39703599/1657502
    $('table:not(.rouge-table)').addClass('table');

    // Bootstrap's blockquotes are opt-in as well
    $('blockquote').addClass('blockquote py-2 px-4 mb-4 border-0 border-start border-5');

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
