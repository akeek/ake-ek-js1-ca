const detailsContainer = document.querySelector(".product-details");

const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "http://makeup-api.herokuapp.com/api/v1/products/" + id + ".json";

console.log(url)

async function showProduct() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details)

        makeHtml(details)

        title.innerHTML = details.name

    }

    catch(error) {
        console.log(error);
        detailsContainer.innerHTML = "Uh oh... This is not good. Something went wrong!"
    }
}

showProduct();

function makeHtml(details) {
    detailsContainer.innerHTML = `<h1>${details.name}</h1>
                                <div class="details-image" 
                                    style="background-image: url('${details.image_link}')"></div>
                                <h3>$${details.price}</h3>
                                <div>${details.description}</div>`;
}



