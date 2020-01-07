


document.addEventListener("DOMContentLoaded",(e)=>{


 window.onscroll = () => {
    const nav = document.querySelector('#hold','#bg');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
    };
const {hostname,host,port,protocol} = window.location;
const url = `${protocol}//${hostname}:${port}/data.json`;
fetch(url,{method:"GET"})
.then((res)=>res.text()
).then((text)=>JSON.parse(text))
.then((data)=>{
    //Render received data here
    render(data);
})
.catch((e)=>{
  const {message} = e;
  //TODO(Tony) handle errors here eg: desplay error page 
  console.error(e);
});

})


const render = (updatesData)=>{
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
 


 