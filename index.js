

function newImage  (src, left, bottom){
 let item = document.createElement("img")
    item.src = src
    item.position = "fixed"
    item.style.left = left + "px"
    item.style.bottom = bottom + "px"
    document.body.append(item)
    return item

}
function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)

    item.addEventListener("dblclick",() =>{
        item.remove()
    })
}

newImage("assets/green-Character.gif", 100, 100)
newImage("assets/pine-tree.png", 450, 200)
newImage("assets/tree.png", 200, 300)
newImage("assets/pillar.png", 350, 100)
newImage("assets/crate.png", 150, 200)
newImage("assets/well.png", 500, 425)
newItem("assets/sword.png", 500, 405)
newItem("assets/sheild.png", 165, 185)
newItem("assets/staff.png", 600, 100)