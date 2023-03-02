const loadData = () => {
    url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(dataName => displayData(dataName.data.tools));

}
const displayData = (dataName) => {
    console.log(dataName);

    dataName.forEach(element => {
        console.log(element);
        const cardContainer = document.getElementById('card-container')
        const newDiv = document.createElement('div')
        newDiv.classList.add('col')

        newDiv.innerHTML = `
        
        <div class="card">
        <img class="img-size" src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <p class="card-text">1.${element.features[0]} <br> 2.${element.features[1]} <br> 3.${element.features[2]} </p>
          <hr>
          <div class="d-flex d-flex justify-content-between align-items-center">
          <div>
          <h3>${element.name} </h3>
          <i class="fa-sharp fa-solid fa-calendar-days"></i> ${element.published_in}
          </div>
          <div >
          <button type="button" class="btn btn-outline-danger rounded-circle"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
    </div>

          
        </div>
        `

        cardContainer.appendChild(newDiv);
    });

}


loadData();