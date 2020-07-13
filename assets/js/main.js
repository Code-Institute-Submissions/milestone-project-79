let page = 1;
const pageLimit = 100;
const input = document.getElementById("ingredients");

// Enter key for search bar to trigger recipe search
input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        fetchRecipeInformation();
    }
});

// Previous button pagination
function prevPage() {
    if(page > 1) {
        page--;
        fetchRecipeInformation();
    }
    return page;
}


// Next button pagination
function nextPage() {
    if(page >= 1 && page <= pageLimit) {
        page++;
        fetchRecipeInformation();
    }
    return page;
}

// Function call to write search results to index.html in array form
function recipeInformationHTML(results) {
    let arr = [];
    let i;
    let recipes = $(results['results']);

    for(i = 0; i < recipes.length; i++) {
        arr.push(`
            <div class="recipe-card box-shadow">
                <a href="${results['results'][i]['href']}" target="_blank">
                    <img class="card-image" src="${results['results'][i]['thumbnail']}" onerror="this.onerror=null; this.src='./assets/img/alt.jpeg'"/>
                </a>
                <div class="card-title-box">
                    <h6 class="card-title">${results['results'][i]['title']}</h6>
                </div>
            </div>
        `);
    }
    return arr;
}

// Main search function API call
function fetchRecipeInformation(event) {
    const api = "https://recipe-puppy.p.rapidapi.com/";
    let ingredients = $("#ingredients").val();
    const apiKey = "c360b33a86msh5b162d84d24e68cp100c0ejsnf72caac1e03f";

    if(!ingredients) {
        $("#recipe").html(`<h2 class="error-text">Looks like your kitchen is empty!</h2>`);
        return;
    }

    $("#recipe").html(`<img src="./assets/img/loading.gif" alt="loading..." width="24" height="24"/>`)

    $.when(
        $.getJSON(`${api}?p=${page}&i=${ingredients}&rapidapi-key=${apiKey}`)
    ).then(
        function(response) {
            var ingredientsData = response;
            $("#recipe").html(recipeInformationHTML(ingredientsData));
        }, function(errorResponse) {
            if(errorResponse.status === 404) {
                $("#recipe").html(`<h2 class="error-text">No recipe found</h2>`);
            } else if(errorResponse.status === 500) {
                $("#recipe").html(`<h2 class="error-text">Server error</h2>`);
            } else if(errorResponse === 403) {
                var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset')*1000);
                $("#recipe").html(`<h4 class="error-text>Too many requests, please wait until ${resetTime.toLocaleDateString()}</h4>`);
            } else {
                $("#recipe").html(`<h2 class="error-text>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        }
    );

}