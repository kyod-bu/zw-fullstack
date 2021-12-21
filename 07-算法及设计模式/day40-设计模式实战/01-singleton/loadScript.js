class LodashLoader {
    static instance = null;

    static getInstance() {
        if (!LodashLoader.instance) {
            LodashLoader.instance = new LodashLoader();
        }

        return LodashLoader.instance;
    }

    constructor() {
        loadScript("https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js");
    }
}

function loadScript(url) {
    const $script = document.createElement("script");
    $script.src = url;
    $script.onload = () => {
        console.log("loaded::", url);
    };

    document.body.appendChild($script);
}

// UMD
window.LodashLoader = LodashLoader;
