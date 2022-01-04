const chalk = require('chalk-next');
const jsdom = require('jsdom');
const path = require('path');
const files = require('../file/files');
const { cwd } = require('process');

module.exports = class AnchorParser {
    //TODO: extend html parser
    constructor(options) { }

    async parse(anchor) {
        if (!this._canParse(anchor))
            return;
        
        console.log(chalk.green(`\t\t\t* [${this.constructor.name}]:`));
        
        if (this._canRender(anchor)) {
            const file = path.resolve(cwd(), `${anchor.href}`);
        
            const html = await this._render(file);

            if(html != undefined)
                replace(anchor, html);
        }
        
        await this._parse(anchor);
    }

    //Proteced methods
    async _readFileAsString(file, encoding = "utf8") { return await files.readFileAsString(file, encoding); };

    //Abstract methods
    _canParse(anchor) { return this._canRender(anchor) };
    
    async _parse(anchor) { };
    
    _canRender(anchor) { throw "abstract method not implemented." };
    
    async _render(file) { throw "abstract method not implemented." };
}

const replace = function (el, fragment) {
    if (typeof fragment === 'string')
        fragment = jsdom.JSDOM.fragment(fragment);

    let ref = el;
    let parent = ref.parentNode;

    if (parent.nodeName === "P") {
        ref = parent;
        parent = ref.parentNode;
    }

    parent.insertBefore(fragment, ref);
    el.classList.add("replaced");
}