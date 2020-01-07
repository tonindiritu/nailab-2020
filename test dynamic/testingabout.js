const teamData1 = [
  {
    jina: "Sam Gichuru",
    photo : "./images/tom.png",
  },

  {
    jina: "Phylis Webi",
    photo : "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },

  {
    jina: "Valerie Waweru",
    photo : "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },

  {
    jina: "Rachel Sande",
    photo : "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  }

];


function teamtemplate(team){
  return`<div id="card-inner">
         <div id="human">
         <img src="${team.photo}">
         </div>
         <div id="description">
         <h1>${team.jina}</h1>
         </div>
  </div>
  `}




 document.getElementById("news-2").innerHTML=`
 ${newsData.map(newsTemplate).join('')}
 `


 