$(document).ready(function() {
    $.getJSON("spbrand.json", function(json) {
        var brandingData = json;

        // Register all partials
        $(".hb-partial").each(function() {
            Handlebars.registerPartial($(this).attr("id"), $(this).html());    
        });

        // Draw sections to sections container
        var source = $("#sections-template").html();
        var template = Handlebars.compile(source);
        var html = template(brandingData);
        $("#sections-container").append(html);
    });
});