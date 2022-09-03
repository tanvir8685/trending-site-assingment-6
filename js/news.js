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
    console.log(url)
    const res=await fetch(url);
    const data=await res.json();
    console.log(data)

}
loadCatagories()
