const inp = document.getElementById("addInput")
const butt1 = document.getElementById("but1")
const ol = document.getElementById("contener")

butt1.addEventListener("click",function (){
    const list = document.createElement("li")
    const para = document.createElement("span")
    const div = document.createElement("div")
    const butt2 = document.createElement("button")
    const butt3 = document.createElement("button")

    butt2.className = "done"
    butt3.className = "delete"
    
    if(inp.value == ""){
        alert("You must write something!")
        return
    }else{
        ol.appendChild(list)
        list.appendChild(para)
        para.innerText = inp.value
        list.appendChild(div)
        div.appendChild(butt2)
        div.appendChild(butt3)
        butt2.innerText = "Done"
        butt3.innerText = "Delete"
        inp.value = ""
    }
    let count = 0
    butt2.addEventListener("click",function(){
        if(count%2 == 0){
            para.style.textDecoration = "line-through"
            butt2.innerText = "Undo"
        }else{
            para.style.textDecoration = "none"
            butt2.innerText = "Done"
        }
       count++
    })
    butt3.addEventListener("click",function(){
        list.style.display = "none"
    })
})

