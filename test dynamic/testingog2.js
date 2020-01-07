

function updatesTemplate(cont){
  return `<div id="snipppet">
  
 
  <div id="flow">

  
  <div id="picha"><img id="snipppet-img" src="${cont.photo}"></div>
 
  <div id="vitu"><h4>${cont.headline}</h1><p>  ${cont.snippet}</p> <p id="round-coner">  ${cont.Article} ${cont.pub} </p></div
 
  </div> 
  </div>
  <hr id="songa">
  
  </div>`
  
}



const teamData1 = [
  {
    jina: "Sam Gichuru",
    photo : "./images/tom.png"
  },

  {
    jina: "Phylis Webi",
    photo : "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
  },

  {
    jina: "Valerie Waweru",
    photo : "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
  },

  {
    jina: "Rachel Sande",
    photo : "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
  }

];


function teamtemplate(team){
  return`
  <div id="card-inner">
         <div id="human">
         <img src="${team.photo}">

         </div>

         <div id="description">
         <h1>${team.jina}</h1>
         </div>
      
  
  </div>
  
  `
}



function pizzaTemplate(pizaa){
  return `<div id="if">
  <h1>${pizaa.headline}</h1>
  <h4>${pizaa.snippet}</h4>
  <p id="round-coner"> ${pizaa.Article} ${pizaa.pub} </p>
  <img src="${pizaa.photo}">
  
  
  </div>`
  
}

function newsTemplate(news){
  return`<div id="prev">
  <img src="${ news.photo}">
  <h1>${ news.headline}</h1>
  <h4>${news.snippet} <br><img id="star" src="${news.photo2}"></h4>
  <p id="round-coner">  ${news.Article} ${news.pub}  </p>

  </div>
  `
}


document.addEventListener("DOMContentLoaded",(e)=>{


 window.onscroll = () => {
    const nav = document.querySelector('#hold','#bg');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
    };
const {hostname,host,port,protocol} = window.location;
const url = `${protocol}//${host}/data.json`;
console.trace(host);
fetch(url,{method:"GET"})
.then((res)=>res.text()
).then((text)=>JSON.parse(text))
.then((data)=>{
    //Render received data here
    render(data);
})

})


function render(updatesData){
    console.trace(updatesData);

   /* document.getElementById("news-1").innerHTML=`
     ${petsData.map(pizzaTemplate).join('')}
    `
     
    document.getElementById("news-2").innerHTML=`
    ${newsData.map(newsTemplate).join('')}
    `
   */
    document.getElementById("news-3").innerHTML=`
    ${updatesData.map(updatesTemplate).join('')}
    `
   /*
    document.getElementById("row-team").innerHTML=`
    ${ teamData1.map(teamtemplate).join('')}
    `
    */
   }

 


 