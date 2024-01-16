let rm = document.querySelector(".container").children

function GetRandomColor(){
    let val1 = (0+Math.random()*255)
    let val2 = (0+Math.random()*255) 
    let val3 = (0+Math.random()*255)
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(rm).forEach(e=>{
    e.style.backgroundColor=GetRandomColor()
    e.style.color=GetRandomColor()
})
