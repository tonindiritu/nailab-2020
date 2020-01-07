window.onscroll = () => {
    const nav = document.querySelector('#hold','#bg');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
    };

const teamData1 = [
  {
    jina: "Sam Gichuru",
    photo : "./IMAGES/GICH.PNG",
  },


  {
    jina: "Valerie Waweru",
    photo : "./images/val.png",
  },

  {
    jina: "Tomas More",
    photo : "./images/toom.png",
  },

  {
    jina: "Rachel Sande",
    photo : "./images/rachel.png",
  },

  {
    jina: "Alice Michira",
    photo : "./images/toom.png",
  },

  {
    jina: "Phylis Webi",
    photo : "./IMAGES/GICH.PNG",
  },
  {
    jina: "Toni Ndiritu",
    photo : "./images/toni.png",
  },
];



const teamData2 = [
   
  
  
    
  
    {
      jina: "Mary Mbuti",
      photo : "./images/mary.png",
    },
  
    {
      jina: "Robert Akoko",
      photo : "./images/rachel.png",
    },

    {
        jina: "Faith Amoding",
        photo : "./IMAGES/GICH.PNG",
      },
    
    
      {
        jina: "Fred okut",
        photo : "./images/val.png",
      },
    
      
  ];



  
const teamData3 = [
    
  
    
  ];



function teamTemplate(team){
  return` <div id="card-inner">
         <div id="human">
         <img src="${team.photo}">
         </div>
         <div id="description">
         <h1 id="card-team-h1">${team.jina}</h1>
         </div>
         </div>
  `}

  function teeamTemplate(team2){
    return` <div id="card-inner">
           <div id="human">
           <img src="${team2.photo}">
           </div>
           <div id="description">
           <h1 id="card-team-h1">${team2.jina}</h1>
           </div>
           </div>
    `}


    function teeeamTemplate(team3){
        return` <div id="card-inner">
               <div id="human">
               <img src="${team3.photo}">
               </div>
               <div id="description">
               <h1 id="card-team-h1">${team3.jina}</h1>
               </div>
               </div>
        `}



 document.getElementById("row-team").innerHTML=`
 ${teamData1.map(teamTemplate).join('')}
 `

 
 document.getElementById("row-team2").innerHTML=`
 ${teamData2.map(teeamTemplate).join('')}
 `

 
 document.getElementById("row-team3").innerHTML=`
 ${teamData3.map(teeeamTemplate).join('')}
 `
 

 