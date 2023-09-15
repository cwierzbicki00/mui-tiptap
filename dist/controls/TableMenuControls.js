"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_material_1 = require("@mui/icons-material");
const MenuDivider_1 = __importDefault(require("../MenuDivider"));
const context_1 = require("../context");
const icons_1 = require("../icons");
const MenuButton_1 = __importDefault(require("./MenuButton"));
const MenuControlsContainer_1 = __importDefault(require("./MenuControlsContainer"));
/**
 * Renders all of the controls for manipulating a table in a Tiptap editor
 * (add or delete columns or rows, merge cells, etc.).
 */
function TableMenuControls({ className, labels, }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const editor = (0, context_1.useRichTextEditorContext)();
    return ((0, jsx_runtime_1.jsxs)(MenuControlsContainer_1.default, { className: className, children: [(0, jsx_runtime_1.jsx)(MenuButton_1.default, { tooltipLabel: (_a = labels === null || labels === void 0 ? void 0 : labels.insertColumnBefore) !== null && _a !== void 0 ? _a : "Insert column before", IconComponent: icons_1.InsertColumnLeft, onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().addColumnBefore().run(), disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().addColumnBefore()) }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { tooltipLabel: (_b = labels === null || labels === void 0 ? void 0 : labels.insertColumnAfter) !== null && _b !== void 0 ? _b : "Insert column after", IconComponent: icons_1.InsertColumnRight, onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().addColumnAfter().run(), disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().addColumnAfter()) }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { tooltipLabel: (_c = labels === null || labels === void 0 ? void 0 : labels.deleteColumn) !== null && _c !== void 0 ? _c : "Delete column", IconComponent: icons_1.DeleteColumn, onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().deleteColumn().run(), disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().deleteColumn()) }), (0, jsx_runtime_1.jsx)(MenuDivider_1.default, {}), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { tooltipLabel: (_d = labels === null || labels === void 0 ? void 0 : labels.insertRowAbove) !== null && _d !== void 0 ? _d : "Insert row above", IconComponent: icons_1.InsertRowTop, onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().addRowBefore().run(), disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().addRowBefore()) }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { tooltipLabel: (_e = labels === null || labels === void 0 ? void 0 : labels.insertRowBelow) !== null && _e !== void 0 ? _e : "Insert row below", IconComponent: icons_1.InsertRowBottom, onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().addRowAfter().run(), disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().addRowAfter()) }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { tooltipLabel: (_f = labels === null || labels === void 0 ? void 0 : labels.deleteRow) !== null && _f !== void 0 ? _f : "Delete row", IconComponent: icons_1.DeleteRow, onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().deleteRow().run(), disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().deleteRow()) }), (0, jsx_runtime_1.jsx)(MenuDivider_1.default, {}), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { tooltipLabel: (_g = labels === null || labels === void 0 ? void 0 : labels.mergeCells) !== null && _g !== void 0 ? _g : "Merge cells", IconComponent: icons_1.MergeCellsHorizontal, onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().mergeCells().run(), disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().mergeCells()) }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { tooltipLabel: (_h = labels === null || labels === void 0 ? void 0 : labels.splitCell) !== null && _h !== void 0 ? _h : "Split cell", IconComponent: icons_1.SplitCellsHorizontal, onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().splitCell().run(), disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().splitCell()) }), (0, jsx_runtime_1.jsx)(MenuDivider_1.default, {}), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { tooltipLabel: (_j = labels === null || labels === void 0 ? void 0 : labels.toggleHeaderRow) !== null && _j !== void 0 ? _j : "Toggle header row", IconComponent: icons_1.LayoutRowFill, onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleHeaderRow().run(), disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().toggleHeaderRow()) }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { tooltipLabel: (_k = labels === null || labels === void 0 ? void 0 : labels.toggleHeaderColumn) !== null && _k !== void 0 ? _k : "Toggle header column", IconComponent: icons_1.LayoutColumnFill, onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleHeaderColumn().run(), disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().toggleHeaderColumn()) }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { tooltipLabel: (_l = labels === null || labels === void 0 ? void 0 : labels.toggleHeaderCell) !== null && _l !== void 0 ? _l : "Toggle header cell", IconComponent: icons_material_1.FormatColorFill, onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleHeaderCell().run(), disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().toggleHeaderCell()), selected: (_m = editor === null || editor === void 0 ? void 0 : editor.isActive("tableHeader")) !== null && _m !== void 0 ? _m : false }), (0, jsx_runtime_1.jsx)(MenuDivider_1.default, {}), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { tooltipLabel: (_o = labels === null || labels === void 0 ? void 0 : labels.deleteTable) !== null && _o !== void 0 ? _o : "Delete table", IconComponent: icons_material_1.GridOff, onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().deleteTable().run(), disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().deleteTable()) })] }));
}
exports.default = TableMenuControls;