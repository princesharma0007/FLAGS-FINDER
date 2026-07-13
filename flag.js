let mainFrame = document.getElementById("Main-frame");

mainFrame.className =
"min-h-screen bg-gray-100 flex flex-col items-center p-8";  
 

let heading = document.createElement("h1"); 

heading.innerText="Country Flag Finder";

heading.className=
"text-4xl font-bold mb-8 text-blue-700";

mainFrame.appendChild(heading);



// search

let searchBox=document.createElement("div");

searchBox.className=
"flex gap-4 items-center mb-8";


let countryInput=document.createElement("input");

countryInput.placeholder="Enter country name";

countryInput.className=
"border-2 border-gray-400 rounded-lg h-10 w-80 px-3 outline-none";


let searchBtn=document.createElement("button");

searchBtn.innerText="Search";

searchBtn.className=
"bg-blue-600 text-white px-6 h-10 rounded-lg";


searchBox.appendChild(countryInput);

searchBox.appendChild(searchBtn);

mainFrame.appendChild(searchBox);




// flag area

let flagArea=document.createElement("div");

flagArea.className=
"flex justify-center items-center w-full";

mainFrame.appendChild(flagArea);





// INDIA

function indiaFlag(){

let flag=document.createElement("div");
flag.className="w-40 h-28 border border-black m-5";

let orange=document.createElement("div");
orange.className="h-1/3 bg-orange-500";

let white=document.createElement("div");
white.className="h-1/3 bg-white flex justify-center items-center";

let chakra=document.createElement("div");
chakra.className="h-10 w-10 rounded-full bg-blue-700";


let green=document.createElement("div");
green.className="h-1/3 bg-green-600";


white.appendChild(chakra);

flag.append(orange,white,green);

return flag;

}



// JAPAN

function japanFlag(){

let flag=document.createElement("div");

flag.className=
"w-40 h-28 border border-black m-5 bg-white flex justify-center items-center";


let circle=document.createElement("div");

circle.className=
"h-14 w-14 rounded-full bg-red-600";


flag.appendChild(circle);

return flag;

}




// GERMANY

function germanyFlag(){

let flag=document.createElement("div");

flag.className=
"w-40 h-28 border border-black m-5";


let black=document.createElement("div");
black.className="h-1/3 bg-black";


let red=document.createElement("div");
red.className="h-1/3 bg-red-700";


let yellow=document.createElement("div");
yellow.className="h-1/3 bg-yellow-400";


flag.append(black,red,yellow);

return flag;

}





// FRANCE

function franceFlag(){

let flag=document.createElement("div");

flag.className=
"w-40 h-28 border border-black m-5 flex";


let blue=document.createElement("div");
blue.className="w-1/3 bg-blue-600";


let white=document.createElement("div");
white.className="w-1/3 bg-white";


let red=document.createElement("div");
red.className="w-1/3 bg-red-600";


flag.append(blue,white,red);

return flag;

}





// ITALY

function italyFlag(){

let flag=document.createElement("div");

flag.className=
"w-40 h-28 border border-black m-5 flex";


let green=document.createElement("div");
green.className="w-1/3 bg-green-600";


let white=document.createElement("div");
white.className="w-1/3 bg-white";


let red=document.createElement("div");
red.className="w-1/3 bg-red-600";


flag.append(green,white,red);

return flag;

}





// BANGLADESH

function bangladeshFlag(){

let flag=document.createElement("div");

flag.className=
"w-40 h-28 border border-black m-5 bg-green-700 flex justify-center items-center";


let circle=document.createElement("div");

circle.className=
"h-14 w-14 rounded-full bg-red-600";


flag.appendChild(circle);

return flag;

}





// RUSSIA

function russiaFlag(){

let flag=document.createElement("div");

flag.className=
"w-40 h-28 border border-black m-5";


let white=document.createElement("div");
white.className="h-1/3 bg-white";


let blue=document.createElement("div");
blue.className="h-1/3 bg-blue-500";


let red=document.createElement("div");
red.className="h-1/3 bg-red-600";


flag.append(white,blue,red);


return flag;

}





// BRAZIL

function brazilFlag(){

let flag=document.createElement("div");

flag.className=
"w-40 h-28 border border-black m-5 bg-green-700 flex justify-center items-center";


let diamond=document.createElement("div");

diamond.className=
"h-16 w-16 bg-yellow-400 rotate-45 flex justify-center items-center";


let ball=document.createElement("div");

ball.className=
"h-10 w-10 bg-blue-700 rounded-full";


diamond.appendChild(ball);

flag.appendChild(diamond);


return flag;

}





// SEARCH FUNCTION


function findFlag(){

let name=countryInput.value.toLowerCase();


flagArea.innerHTML="";


if(name=="india"){

flagArea.appendChild(indiaFlag());

}

else if(name=="japan"){

flagArea.appendChild(japanFlag());

}

else if(name=="germany"){

flagArea.appendChild(germanyFlag());

}

else if(name=="france"){

flagArea.appendChild(franceFlag());

}

else if(name=="italy"){

flagArea.appendChild(italyFlag());

}

else if(name=="bangladesh"){

flagArea.appendChild(bangladeshFlag());

}

else if(name=="russia"){

flagArea.appendChild(russiaFlag());

}

else if(name=="brazil"){

flagArea.appendChild(brazilFlag());

}

else{

alert("Invalid Country");

flagArea.appendChild(indiaFlag());

}


countryInput.value="";


}



searchBtn.addEventListener("click",findFlag);


countryInput.addEventListener("keydown",function(e){

if(e.key=="Enter"){

findFlag();

}

});
