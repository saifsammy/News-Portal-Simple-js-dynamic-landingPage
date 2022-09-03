const cardDetails = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCard(data.data);
    }
    catch (error) {
        console.log(error);
    }
}


const displayCard = (updateCards) => {
    const cardContainer = document.getElementById('card-container');
    console.log(updateCards);
    updateCards.forEach(cards => {
        const cardDetail = document.createElement('div');
        cardDetail.classList.add('col');
        const author = cards.author;
        cardDetail.innerHTML = `
        <div class="card h-100 p-4">
            <img src="${cards.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cards.title}</h5>
                <p class="card-text">${cards.details.slice(0, 200)}...</p>
            </div>
            <div class="card-footer h-25 d-flex justify-content-between ">
                <div class="d-flex">
                    <span><img class="img-fluid h-25 rounded-pill" src="${cards.author.img}" alt=""></span>
                    <p>${cards.author.name}</p>
                </div>
                <div>
                    <p>${cards.total_view}M</p>
                </div>
            </div>
            <button onclick="newsDetails('${cards._id}') type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModel">Show Details</button>
        </div>
        `;
        cardContainer.appendChild(cardDetail);
    });

}

const newsDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${_id}`
    const res = await fetch(url);
    const data = await res.json();
    console.log();
}
cardDetails();