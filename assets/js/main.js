let page = 1;
const input = document.getElementById("ingredients");

//-----------------------------------------------------Input Logic

/* Enter key for search bar to trigger recipe search as most users
    will be used to pressing enter to trigger search as well as using 
    the search button */
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
    if(page >= 1) {
        page++;
        fetchRecipeInformation();
    }

    return page;
}

/* Remove buttons from display if there is an error message to provide
    an indicator of which API page the user is currently on */
function removeButtons() {
    $("#previous").addClass("d-none");
    $("#next").addClass("d-none");
}

//-----------------------------------------------------Presentation Logic

// Function call to write search results to index.html in array form.
function recipeInformationHTML(results) {
    let arr = [];
    let i;
    let recipes = $(results.results);

    if(page <= 1) {
        $("#previous").addClass("disable");
    } else {
        $("#previous").removeClass("disable");
    }

    if(recipes.length < 10) {
        $("#next").addClass("disable");
    } else {
        $("#next").removeClass("disable");
    }

    // If there are no recipes matching the search criteria, return an error message
    if(recipes.length === 0) {
        $("#recipe").html(`<h2 class="search-title">We can't find what you're looking for!</h2>`);
        removeButtons();

        return;
    }

    for(i = 0; i < recipes.length; i++) {
        arr.push(`
            <div class="recipe-card box-shadow d-block ">
                <a href="${results.results[i].href}" target="_blank">
                    <img class="card-image" src="${results.results[i].thumbnail}" onerror="this.onerror=null; this.src='./assets/img/alt.jpeg'" alt="recipe" width="250" height="150"/>
                </a>
                <div class="card-title-box">
                    <h6 class="card-title">${results.results[i].title}</h6>
                </div>
            </div>
        `);
    }

    return arr;
}

//-----------------------------------------------------Processing Logic

// Main search function API call
function fetchRecipeInformation() {
    const api = "https://recipe-puppy.p.rapidapi.com/";
    let ingredients = $("#ingredients").val();
    const apiKey = "c360b33a86msh5b162d84d24e68cp100c0ejsnf72caac1e03f";

    // Return error message if search field is empty 
    if(!ingredients) {
        $("#recipe").html(`<h2 class="search-title">Please enter your ingredients above!</h2>`);
        removeButtons();
        
        return;
    }

    // Promise to Recipe Puppy API using search criteria variables and callback for the recipeInformationHTML function
    $.when(
        $.getJSON(`${api}?p=${page}&i=${ingredients}&rapidapi-key=${apiKey}`)
    ).then(
        function(response) {
            var ingredientsData = response;
            $("#recipe").html(recipeInformationHTML(ingredientsData));
        }, function(errorResponse) {
            if(errorResponse.status === 404) {
                $("#recipe").html(`<h2 class="search-title">No recipe found</h2>`);
                removeButtons();
            } else if(errorResponse.status === 500) {
                $("#recipe").html(`<h2 class="search-title">Status: 500 - Internal Server error</h2>`);
                removeButtons();
            } else if(errorResponse === 403) {
                var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset')*1000);
                $("#recipe").html(`<h4 class="search-title>Too many requests, please wait until ${resetTime.toLocaleDateString()}</h4>`);
                removeButtons();
            } else {
                $("#recipe").html(`<h2 class="search-title">Error: ${errorResponse.responseJSON.message}</h2>`);
                removeButtons();
            }
        }
    );

}