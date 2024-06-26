"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToDOM = exports.domToReact = exports.attributesToProps = exports.Text = exports.ProcessingInstruction = exports.Element = exports.Comment = void 0;
var html_dom_parser_1 = __importDefault(require("html-dom-parser"));
exports.htmlToDOM = html_dom_parser_1.default;
var attributes_to_props_1 = __importDefault(require("./attributes-to-props"));
exports.attributesToProps = attributes_to_props_1.default;
var dom_to_react_1 = __importDefault(require("./dom-to-react"));
exports.domToReact = dom_to_react_1.default;
var domhandler_1 = require("domhandler");
Object.defineProperty(exports, "Comment", { enumerable: true, get: function () { return domhandler_1.Comment; } });
Object.defineProperty(exports, "Element", { enumerable: true, get: function () { return domhandler_1.Element; } });
Object.defineProperty(exports, "ProcessingInstruction", { enumerable: true, get: function () { return domhandler_1.ProcessingInstruction; } });
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return domhandler_1.Text; } });
var domParserOptions = { lowerCaseAttributeNames: false };
/**
 * Converts HTML string to React elements.
 *
 * @param html - HTML string.
 * @param options - Parser options.
 * @returns - React element(s), empty array, or string.
 */
function HTMLReactParser(html, options) {
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!html) {
        return [];
    }
    return (0, dom_to_react_1.default)((0, html_dom_parser_1.default)(html, (options === null || options === void 0 ? void 0 : options.htmlparser2) || domParserOptions), options);
}
exports.default = HTMLReactParser;
//# sourceMappingURL=index.js.map