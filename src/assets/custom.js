$( document ).ready(function() {
    $(".btn").click(function(){
        $(".sortable-list").sortable();
        $(".sortable-card").sortable({
            connectWith: ".connectedSortable"
        }).disableSelection();;
    })
    
});