let text = document.getElementById ("text");
let treeleft = document.getElementById ("tree-left");
let treeright = document.getElementById ("tree-right");

window.addEventListener("scroll" , () =>{
    let value = window.scrollY;
    text.style.marginTop = value * 1.5 + "px" ;
    treeleft.style.left = value * -1.5 + "px" ;
    treeright.style.right = value * -1.5 + "px" ;

});
