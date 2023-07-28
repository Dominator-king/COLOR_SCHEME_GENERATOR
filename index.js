const form = document.getElementById("form")

form.addEventListener("submit", (event)=> {
    event.preventDefault()
    let images
let colors
let imgHTML=""
let divHTML=""
    let colorH = document.getElementById("selectColor").value
    let color= colorH.slice(1)
    let type = document.getElementById("type").value
    fetch( `https://www.thecolorapi.com/scheme?hex=${color}&mode=${type}` )
    .then(rs=>rs.json()).then(data=>{
        
        colors = data.colors.map(objects=>objects.hex)
        images = data.colors.map(objects=>objects.image)
        
        
        images.map(object=>{imgHTML+=`<img src=${object.bare} />`})
        colors.map(object=>{divHTML+=`<div>${object.value}</div>`})
        
document.getElementById("content").innerHTML = imgHTML
document.getElementById("content").innerHTML += divHTML
    
    })
})
