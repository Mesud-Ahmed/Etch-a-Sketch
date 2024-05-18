const container = document.querySelector(".container");
for(let i = 0; i < 16 * 16;i++){
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
}
let sketch = document.querySelectorAll(".grid-item");

sketch.forEach(item => {
item.addEventListener("mouseover",changeColor);
});

function changeColor(e){
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} )`;

}

const button = document.querySelector(".btn");
button.addEventListener("click",findSquares);
function findSquares(){
    let size = prompt("enter numbers of squares per side(maximum 100): ","16");
    if(size > 1 && size <=100){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        for (let i = 0; i< size * size;i++){
            const div = document.createElement("div");
            div.classList.add("grid-item");
            container.appendChild(div);

            //set automatic width and height 
            div.style.cssText = `
            width: calc(100% / ${size});
            height: calc(100% / ${size});`
        }
        let newD = document.querySelectorAll(".grid-item");

        newD.forEach(item => {
            item.addEventListener("mouseover",changeColor);
            });
    }
    else
        alert("Invalid input!!");
}
