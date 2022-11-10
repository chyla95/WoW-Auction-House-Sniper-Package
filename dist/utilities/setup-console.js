"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupConsole = void 0;
let isConsoleConfigured = false;
const _errorPrefix = "🔴 Error:";
const _warnPrefix = "🟡 Warning:";
const _infoPrefix = "🔵 Info:";
const _logPrefix = "🟢 Log:";
const setupConsole = () => {
    if (isConsoleConfigured) {
        throw new Error("The Console Is Already Configured - You Cannot Re-Configure It!");
    }
    isConsoleConfigured = true;
    const _error = console.error;
    console.error = function () {
        Array.prototype.unshift.call(arguments, _errorPrefix);
        _error.apply(console, [...arguments]);
    };
    const _warning = console.warn;
    console.warn = function () {
        Array.prototype.unshift.call(arguments, _warnPrefix);
        _warning.apply(console, [...arguments]);
    };
    const _log = console.log;
    console.log = function () {
        Array.prototype.unshift.call(arguments, _logPrefix);
        _log.apply(console, [...arguments]);
    };
    const _info = console.info;
    console.info = function () {
        Array.prototype.unshift.call(arguments, _infoPrefix);
        _info.apply(console, [...arguments]);
    };
};
exports.setupConsole = setupConsole;
