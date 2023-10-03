// Function to load data using $.getJSON method
function loadDataWithGetJSON() {
    $.getJSON('team.json', function(data) {
        var teamHtml = '<div class="team-container">';
        $.each(data, function(index, member) {
            teamHtml += '<div class="team-member">';
            teamHtml += '<h3>' + member.name + '</h3>';
            teamHtml += '<p class="position">' + member.position + '</p>';
            teamHtml += '<p class="bio">' + member.bio + '</p>';
            teamHtml += '</div>';
        });
        teamHtml += '</div>';
        $('#team').html(teamHtml);
    });
}

// Function to load data using $.ajax method
function loadDataWithAjax() {
    $.ajax({
        url: 'team.json',
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
            $('#team').html('Loading team information...');
        },
        error: function() {
            $('#team').html('Apologies, we couldn\'t retrieve the team data.');
        },
        success: function(data) {
            var teamHtml = '<div class="team-container">';
            $.each(data, function(index, member) {
                teamHtml += '<div class="team-member">';
                teamHtml += '<h3>' + member.name + '</h3>';
                teamHtml += '<p class="position">' + member.position + '</p>';
                teamHtml += '<p class="bio">' + member.bio + '</p>';
                teamHtml += '</div>';
            });
            teamHtml += '</div>';
            $('#team').html(teamHtml);
        }
    });
}

// Document ready function to call one of the above functions
$(document).ready(function() {
    // Calling loadDataWithGetJSON function to load and display data
    loadDataWithGetJSON();
    // Alternatively, you can call loadDataWithAjax function
    // loadDataWithAjax();
});
