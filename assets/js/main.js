function recipeInformationHTML(results) {

    var arr = [];
    let i;
    var recipes = $("results['results]");

    for(i = 0; i < recipes.length; i++) {
        arr.push(`
            <div class="recipe-card">
                <img class="card-image" src="${results['results'][i]['thumbnail']}" alt="${results['results'][i]['title']}"/>
                <a class="card-title" href="${results['results'][i]['href']}" target="_blank">${results['results'][i]['title']}</a>
            </div>
        `);
    }
    return arr;
}

function fetchRecipeInformation() {

    const api = "https://recipe-puppy.p.rapidapi.com/";
    var ingredients = $("#ingredients").val();
    const apiKey = "c360b33a86msh5b162d84d24e68cp100c0ejsnf72caac1e03f";
    var page = "1";

    $.when(
        $.getJSON(`${api}?p=${page}&i=${ingredients}&rapidapi-key=${apiKey}`)
    ).then(
        function(response) {
            var ingredientsData = response;
            $("#recipe").html(recipeInformationHTML(ingredientsData));
        }, function(errorResponse) {
            if(errorResponse.status === 404) {
                $("#recipe").html(`<h2>No recipe found</h2>`);
            } else if(errorResponse === 403) {
                var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset')*1000);
                $("#recipe").html(`<h4>Too many requests, please wait until ${resetTime.toLocaleDateString()}</h4>`);
            } else {
                $("#recipe").html(`<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        }
    );

}