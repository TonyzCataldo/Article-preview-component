function share() {
    const div = document.querySelector(".share");
    const btn = document.querySelector(".share-img");
    const svg = document.querySelector(".svg");
    svg.classList.toggle("svg-color-change")
    div.classList.toggle("share-visible");
    btn.classList.toggle("btn-color-change");
}

