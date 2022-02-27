const detailsContainer = document.querySelector(".product-details");

const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "http://makeup-api.herokuapp.com/api/v1/products/" + id + ".json";


async function showProduct() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        makeHtml(details)

        title.innerHTML = details.name

    }

    catch(error) {
        detailsContainer.innerHTML = "Uh oh... This is not good. Something went wrong!"
    }
}

showProduct();

function makeHtml(details) {
    detailsContainer.innerHTML = `<h1>${details.name}</h1>
                                <div class="product-image" 
                                    style="background-image: url('${details.image_link}')"></div>
                                <h3>$${details.price}</h3>
                                <div class="product-description">${details.description}</div>`;
}
