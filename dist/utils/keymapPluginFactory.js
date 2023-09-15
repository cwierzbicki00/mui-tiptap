"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keymap_1 = require("@tiptap/pm/keymap");
const state_1 = require("@tiptap/pm/state");
/**
 * Create a `keymap` prosemirror plugin for keyboard shortcut use in Tiptap.
 *
 * This is an alternative to the `prosemirror-keymap` `keymap` factory function
 * (https://github.com/ProseMirror/prosemirror-keymap/blob/bcc8280e38900edeb6ed946e496ad7dbc0c17f95/src/keymap.js#L72-L74)
 * and follows identical logic, but because (a) Tiptap will only unregister
 * plugins properly if they have unique string names or `PluginKeys`
 * (https://github.com/ueberdosis/tiptap/blob/5daa870b0906f0387fe07041681bc6f5b3774617/packages/core/src/Editor.ts#L217-L220),
 * and (b) the original `keymap` function doesn't allow us to specify/define our
 * own key, we have to use our own factory function that allows us to specify
 * one.
 */
function keymapPluginFactory(bindings, key) {
    return new state_1.Plugin({
        key,
        props: {
            handleKeyDown: (0, keymap_1.keydownHandler)(bindings),
        },
    });
}
exports.default = keymapPluginFactory;
