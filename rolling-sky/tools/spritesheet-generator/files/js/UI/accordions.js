function toggleAccordion(id) {
    let elem = getElem(id);
    if (elem.hasAttribute("data-accordion-collapsed")) {
        setAccordion(elem, true);
    } else {
        setAccordion(elem, false);
    }
}

function setAccordion(elem, makeOpen) {
    if (makeOpen) {
        elem.removeAttribute("data-accordion-collapsed");
    } else {
        elem.setAttribute("data-accordion-collapsed", "");
    }
}
for (let each of document.querySelectorAll("[data-accordion-controls]")) {
    each.setClick(() => {
        toggleAccordion(each.getAttribute("data-accordion-controls"));
    });
};
for (let each of ["general", "fragile", "fragileActive", "mover", "moverAuto"]) {
    getElem(each + "Overlay").setClick(() => {
        for (let fach of document.querySelectorAll("#tilesForm [data-opened-by]")) {
            setAccordion(fach, fach.getAttribute("data-opened-by").includes(each));
        }
    });
}
