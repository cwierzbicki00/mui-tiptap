"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateMiddle = exports.slugify = exports.isTouchDevice = exports.isMac = exports.getModShortcutKey = exports.keymapPluginFactory = exports.getAttributesForNodes = exports.getAttributesForMarks = exports.getAttributesForEachSelected = exports.DebounceRender = void 0;
var DebounceRender_1 = require("./DebounceRender");
Object.defineProperty(exports, "DebounceRender", { enumerable: true, get: function () { return __importDefault(DebounceRender_1).default; } });
__exportStar(require("./color"), exports);
var getAttributesForEachSelected_1 = require("./getAttributesForEachSelected");
Object.defineProperty(exports, "getAttributesForEachSelected", { enumerable: true, get: function () { return getAttributesForEachSelected_1.getAttributesForEachSelected; } });
var getAttributesForMarks_1 = require("./getAttributesForMarks");
Object.defineProperty(exports, "getAttributesForMarks", { enumerable: true, get: function () { return getAttributesForMarks_1.getAttributesForMarks; } });
var getAttributesForNodes_1 = require("./getAttributesForNodes");
Object.defineProperty(exports, "getAttributesForNodes", { enumerable: true, get: function () { return getAttributesForNodes_1.getAttributesForNodes; } });
__exportStar(require("./images"), exports);
var keymapPluginFactory_1 = require("./keymapPluginFactory");
Object.defineProperty(exports, "keymapPluginFactory", { enumerable: true, get: function () { return __importDefault(keymapPluginFactory_1).default; } });
var platform_1 = require("./platform");
Object.defineProperty(exports, "getModShortcutKey", { enumerable: true, get: function () { return platform_1.getModShortcutKey; } });
Object.defineProperty(exports, "isMac", { enumerable: true, get: function () { return platform_1.isMac; } });
Object.defineProperty(exports, "isTouchDevice", { enumerable: true, get: function () { return platform_1.isTouchDevice; } });
var slugify_1 = require("./slugify");
Object.defineProperty(exports, "slugify", { enumerable: true, get: function () { return __importDefault(slugify_1).default; } });
var truncateMiddle_1 = require("./truncateMiddle");
Object.defineProperty(exports, "truncateMiddle", { enumerable: true, get: function () { return __importDefault(truncateMiddle_1).default; } });
