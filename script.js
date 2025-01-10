// const rayhan="odajoiwejdfoi";       //string
//const num="43786";                 // intrger
//const islogin=true;               // Boolean
//const friends=["rayhan","jibon","sujon","sabbir"]; // array
//const person={name:"rayhan",age:20,job:"teacher"}; //object

//console.log(rayhan);
//console.log(num);

//console.log(islogin);
//console.log(friends);
//console.log(person); 

    //console.log("contact");
    // console.log("event");
     //console.log(event.target);
     //console.log(event.target.name);
     //console.log(event.target.email);
     //console.log(event.target.message);
     function handlecontact(event){
     event.preventDefault();
     const email=event.target.email.value;
     const name=event.target.name.value;
     const message=event.target.message.value;

     console.log(name);
     console.log(email);
     console.log(message);
     const successcontainer=document.getElementById("success-container");
     //console.log(document);
     console.log(successcontainer);
     const nameparagraph=document.createElement("p");
     nameparagraph.innerText=`your name:${name}`;
     const emailparagraph=document.createElement("p");
     emailparagraph.innerText=`your email:${email}`;
     const messageparagraph=document.createElement("p");
     messageparagraph.innerText=`your message:${message}`;
     console.log(nameparagraph);
     console.log(emailparagraph);
     console.log(messageparagraph);
     successcontainer.appendChild(nameparagraph);
     successcontainer.appendChild(emailparagraph);
     successcontainer.appendChild(messageparagraph);
     
     

}
//array of objects
const imageArray=[
    {
        url:"image/projects/image 3.png",
    },

    {
        url:"image/projects/image 5.png",
    },
    {
        url:"image/projects/image 6.png",
    },
    {
        url:"image/projects/image 7.png",
    },
    
    
];

function handleShowMoreProject(){   
 const projectContainer=document.getElementById("projects"); 

   


    for (const item of imageArray) {
       

        const projectDivImage=document.createElement("div");
        projectDivImage.classList.add("project");
        projectDivImage.innerHTML= 
        `<img src="${item.url}" alt"">
        `;
        projectContainer.appendChild(projectDivImage);  
    }
    
}




//const firstUrl=imageArray[0];
//const secondUrl=imageArray[1];
//const thirdUrl=imageArray[2];
//const jibon= friends[1];
// console.log(imageArray);
// console.log(firstUrl);
// console.log(secondUrl);
// console.log(thirdUrl);
// console.log(jibon);

// for (const interator of Object){

// }
// for of loop
 //for (const item of imageArray){
   // console.log(item);
 //}

//const imagesLenght=imageArray.length;
 //console.log(imagesLenght);

 //const firstUrl=imageArray[0];

 //console.log(firstUrl);

//  raw for loop

// for (let index=0; index<imagesLenght; i++){
    // console.log(imageArray[index]);
 //}



//  varriable, Array,loop,function,event,dom-manupulation of javascript
 

