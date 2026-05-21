
    function toClipboard(e) {
        navigator.clipboard.writeText(e.currentTarget.title)
            .then(() => {
                getElem("copyStatus").innerHTML = `Successfully copied ${e.target.title} to clipboard`;
            }, () => {});
    }