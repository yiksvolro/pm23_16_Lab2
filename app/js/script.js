function closewindow()
{
    window.close();
}

$(document).ready(function(){
    $.getJSON("data.json", function (data){
        var data_v = '';
        $.each(data, function (key, value){
            data_v += '<div class="daily_block">';
            data_v += '<p class="daily_block_label">'+value.label+'</p>';
            data_v += '<p class="daily_block_count">'+value.count+'</p>';
            data_v += '<div class="rectangles">';
            data_v += '<img src="img/rectanglegrey.png" alt="rect">';
            data_v += '<p class="text1020">1020</p>';
            data_v += '<img src="img/rectanglered.png" alt="rect">';
            data_v += '<p class="text1020">1020</p>';
            data_v += '</div>';
            data_v += '</div>';
        });
        $('#part_1').append(data_v);
    });
});

$(document).ready(function(){
    $.getJSON("data2.json", function (data){
        var data_v = '';
        $.each(data, function (key, value){
            data_v += '<div class="daily_block">';
            data_v += '<p class="daily_block_label">'+value.label+'</p>';
            data_v += '<p class="daily_block_count">'+value.count+'</p>';
            data_v += '<div class="rectangles">';
            data_v += '<img src="img/rectanglegrey.png" alt="rect">';
            data_v += '<p class="text1020">1020</p>';
            data_v += '<img src="img/rectanglered.png" alt="rect">';
            data_v += '<p class="text1020">1020</p>';
            data_v += '</div>';
            data_v += '</div>';
        });
        $('#part_2').append(data_v);
    });
});

$(document).ready(function (){
    $('.month__dots').click(function(event){
        $('.month__dots, .chart__menu').toggleClass('on');
    });
});