const INVALID_CLASS = "form-input_invalid";

formElems = document.querySelectorAll("input");
formElems.forEach(node => {
    node.addEventListener("input", (e) => {
        if (e.target.value.length > 0) {
            node.parentNode.classList.add(INVALID_CLASS);
        } else {
            node.parentNode.classList.remove(INVALID_CLASS);
        }
    });
});