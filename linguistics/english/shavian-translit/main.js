var translitSystem = shavianTranslit[0];
onPageLoad(() => {
    let o = getElem("out");
    for (let sysid in shavianTranslit){
        let e = pack("tr", "");
        e.appendChild(pack("td", shavianTranslit[sysid].name));
        let f = pack("td", "");
        f.setAttribute("data-sys-id", sysid);
        e.appendChild(f);
        o.appendChild(e);
    }
    getElem("input").addEventListener("input", function(e){
        for(let ee of Array.from(document.querySelectorAll("td[data-sys-id]"))){
            ee.innerHTML = translit(e.currentTarget.value, ee.getAttribute("data-sys-id"), ['\ue010', "\ue011"])
                .cleanse()
                .replaceAll("\ue010", '<span class="original-latin">')
                .replaceAll("\ue011", '</span>');
        }
    });
});
