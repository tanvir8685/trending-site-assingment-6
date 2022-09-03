const loadCatagories=async()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories/`
    const res=await fetch(url);
    const data=await res.json();
    displayCatagories(data.data.news_category)
}
const displayCatagories=categories=>{
    const categoriesContainer=document.getElementById('categories-container');
    
    categories.forEach(category => {
        
        const categoryDiv=document.createElement('div');
        
        categoryDiv.innerHTML=`<div onclick="loadNews(${category.category_id})" class="p-3 border bg-light">${category. category_name}</div>`;
       
        categoriesContainer.appendChild(categoryDiv);
    });
   
    
}
const loadNews=async(category_id)=>{
    // console.log(typeof(category_id))
    const url=`https://openapi.programming-hero.com/api/news/category/0${category_id}`
    
    const res=await fetch(url);
    const data=await res.json();
    displayLoadNews(data.data)

}
const displayLoadNews=news=>{
    const newsContainer=document.getElementById('newsContainer');
    newsContainer.innerHTML=``;
    news.forEach(element => {
        console.log(element)
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
                                  <p>${element.author.name}</p>   
                                  <p>${element.author.published_date}</p>                 
                              </div>
                              </div>
                              <div>
                                 <i class="fa-solid fa-eye">&ensp; ${element.total_view}</i>
                                 
                              </div>
                              <div>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star-half-stroke"></i>
                              </div>
                              <div class="div">
                                  <i class="fa-solid fa-arrow-right fa-2x"></i>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
        `;
        newsContainer.appendChild(newsDiv)
    });
    
}
loadCatagories()
