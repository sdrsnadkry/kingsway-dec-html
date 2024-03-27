function buttonClick() {
    console.log("Button was pressed");

    const p = document.getElementById("texts");

    p.style.color = "red";
    p.style.fontSize = "20px";
    p.style.backgroundColor = "black";

    p.innerHTML = "Button was pressed";
}