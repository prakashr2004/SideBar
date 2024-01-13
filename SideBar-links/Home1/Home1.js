
// --------------HOME SEACTION--------------------------------------------

var h2 = document.createElement("h2")
h2.innerHTML = "Page Not Fount"

var para = document.createElement("p")
para.innerHTML = "Look like you've followed broken link or interted a URL dosen't exist on this site " 

h4 = document.createElement("h4")
h4.innerHTML = "<a href = 'http://127.0.0.1:5503/sideBar-Nav/index.html'><span> < </span> Back to our site</a>"

var  homeDive = document.createElement("div")
homeDive.setAttribute("class","homediv")

var hr = document.createElement("hr")
homeDive.append(h2,para,h4,hr)

console.log(homeDive)

// ---------------------- HR TAG-----------------------------------




// ----------------  END CONTANT ----------------------------------------------

 var endContentDiv = document.createElement("div")
endContentDiv.setAttribute("class","end-content-div")

var para2 =document.createElement("p") 

para2.innerHTML = "if this your site ,and you werent a 404 for this path , please visit Netlify' <span id='hi'><b><q>page not fount support guide</q>supporter guide</b></span> troubleshooting tips"

endContentDiv.append(para2)


// -------------------------------------PARANT DIV--------------------------------------

var parentdiv = document.createElement("div")

parentdiv.setAttribute("class","parent")

parentdiv.append(homeDive,endContentDiv)

console.log(parentdiv)

document.body.append(parentdiv)