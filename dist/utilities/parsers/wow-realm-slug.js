"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSlug = void 0;
const parseSlug = (value) => {
    return value.toLocaleLowerCase().replace(/\s/g, "-");
};
exports.parseSlug = parseSlug;
