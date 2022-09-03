const loadCatagories=async()=>{

    try {
        const url=`https://openapi.programming-hero.com/api/news/categories`
        const res=await fetch(url);
        const data=await res.json();
        displayCatagories(data.data.news_category)
      }
      catch(err) {
       console.error(err)
      }


}
const displayCatagories=categories=>{

    
    
    const categoriesContainer=document.getElementById('categories-container');
    
    categories.forEach(category => {
        
        const categoryDiv=document.createElement('div');
        
        categoryDiv.innerHTML=`<div onclick="loadNews(${category.category_id})" class="p-3 border bg-light">${category. category_name}</div>`;
       
        categoriesContainer.appendChild(categoryDiv);
        
    });
    
    // start loader 
}
const loadNews=async(category_id)=>{
    toggleSpinner(true);
    // console.log(typeof(category_id))
    try {
        const url=`https://openapi.programming-hero.com/api/news/category/0${category_id}`
    
        const res=await fetch(url);
        const data=await res.json();
        displayLoadNews(data.data)
      }
      catch(err) {
        console.log(err)
      }
   

}
const displayLoadNews=news=>{
    const number=document.getElementById('number');
    number.innerText=news.length;
    
    
    console.log(news.length)
    const newsContainer=document.getElementById('newsContainer');
    newsContainer.innerHTML=``;
    news.forEach(element => {
        // console.log(element)
        // console.log(element._id)
        const newsDiv=document.createElement('div');
        
        newsDiv.innerHTML=`
        <div class="card my-5">
                  <div class="row">
                      <div class="col-2 photo">
                          <img src="${element.thumbnail_url}" alt="human" class="img-fluid">
                      </div>
                      <div class="col-10 pt-4">
                          <h3>${element.title}</h3>
                          <p class="pt-3">
                             ${(element.details.length)<800?(element.details):(element.details).slice(0,800)+'...'}
                          </p>
                        
          
                          <div class="card-footer">
                              <div class="d-flex">
                                  <img src="${element.author.img}" alt="" width="50px" height="50px">
                                 <div class="ps-2 name-date-part">
                                  <p>${element.author.name?element.author.name:'no name found'}</p>   
                                  <p>${element.author.published_date?element.author.published_date:'no date found'}</p>                 
                              </div>
                              </div>
                              <div>
                                 <i class="fa-solid fa-eye">&ensp; ${element.total_view?element.total_view:'no data show'}</i>
                                 
                              </div>
                              <div>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star-half-stroke"></i>
                              </div>
                              <div class="div">
                              <button onclick="loadModal('${element._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal">Show Details</button>


  


                              </div>
                          </div>
                      </div>
                  </div>
                </div>
        `;
        newsContainer.appendChild(newsDiv)
    });
    toggleSpinner(false); 
}
const loadModal=async(news_id)=>{
    try {
        const url=`https://openapi.programming-hero.com/api/news/${news_id}`
    const res=await fetch(url);
    const data=await res.json();
    displayModal(data.data[0])
      }
      catch(err) {
        console.log(err)
      }
    
   
}
const displayModal=(modal)=>{
    
    const newsDetailModalLabel=document.getElementById('newsDetailModalLabel');
    newsDetailModalLabel.innerText=modal.title;
    const newsDetailForModal=document.getElementById('newsDetailForModal');
    newsDetailForModal.innerHTML=`
    <div class="card my-5">
    <div class="row">
        <div class="col-2 photo">
            <img src="${modal.thumbnail_url}" alt="human" class="img-fluid">
        </div>
        <div class="col-10 pt-4">
            <h3>${modal.title}</h3>
            <p class="pt-3">
               ${(modal.details.length)<150?(modal.details):(modal.details).slice(0,100)+'...'}
            </p>
          

            <div class="card-footer">
                <div class="d-flex">
                    <img src="${modal.author.img}" alt="" width="50px" height="50px">
                   <div class="ps-2 name-date-part">
                    <p>${modal.author.name?modal.author.name:'No name Found'}</p>   
                    <p>${modal.author.published_date?modal.author.published_date:'no date found'}</p>                 
                </div>
                </div>
                <div>
                   <i class="fa-solid fa-eye">&ensp; ${modal.total_view?modal.total_view:'no data'}</i>
                   
                </div>
             
                




                </div>
            </div>
        </div>
    </div>
  </div>
    `;
    
}
const toggleSpinner=isLoading=>{
    const loaderSection=document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}
loadCatagories();
// loadNews(03);
