const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
const htmlContainer = document.querySelector(".text")


async function makeApiCall() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        console.log(results)

        htmlContainer.innerHTML = ""

        for(let i = 0; i < results.length; i++){

            if(i === 20) {
                break;
            }


            htmlContainer.innerHTML += `<a href="details.html?id=${results[i].id}" class="resultsContainer">
                                            <h2>${results[i].name}</h2> 
                                            <h3>Product type: ${results[i].product_type}</h3> 
                                            <h4>Price: $${results[i].price}</h4> 
                                            <div class="product-image" style="background-image: url('${results[i].image_link}')"></div>
                                        </a>`;
        }

        
    } catch (error) {
        htmlContainer.innerHTML = "Uh oh... This is not good. Something went wrong!"
        console.log(error);
    }
}

makeApiCall();