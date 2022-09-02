const loadCatagories=async()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`
    const res=await fetch(url);
    const data=await res.json();
    displayCatagories(data.data.news_category)
}
const displayCatagories=catagories=>{
    const catagoriesContainer=document.getElementById('catagories-container');
    catagories.forEach(catagori => {
        const catagoriDiv=document.createElement('div');
        catagoriDiv.innerHTML=`<div class="p-3 border bg-light">${catagori. category_name}</div>`;
        // console.log(catagori. category_name)
        catagoriesContainer.appendChild(catagoriDiv);
    });
   
    // console.log(catagories)
}
loadCatagories()