const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
const htmlContainer = document.querySelector(".text")


async function makeApiCall() {
    try {
        const response = await fetch(url);

        const json = await response.json();

        const results = json

        console.log(results);

        htmlContainer.innerHTML = ""

        for(let i = 0; i < results.length; i++){

            if(i === 10) {
                break;
            }


            htmlContainer.innerHTML += `<div class="resultsContainer">
                                        <h2><a href="details.html?id=${results[i].id}">${results[i].name}</a></h2> 
                                        <h3>Product type: ${results[i].product_type}</h3> 
                                        <h3>Price: $${results[i].price}</h3> 
                                        <div class="details-image" 
                                    style="background-image: url('${results[i].image_link}')"></div>
                                    </div>`
        }

        


    } catch (error) {
        htmlContainer.innerHTML = "Uh oh... This is not good. Something went wrong!"
        console.log(error);
    }
}

makeApiCall();

