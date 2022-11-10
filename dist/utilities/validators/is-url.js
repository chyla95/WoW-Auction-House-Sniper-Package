"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrl = void 0;
const isUrl = (value) => {
    let isValid = false;
    try {
        const url = new URL(value);
        isValid = url.protocol === "http:" || url.protocol === "https:";
    }
    catch (error) {
        return false;
    }
    return isValid;
};
exports.isUrl = isUrl;
