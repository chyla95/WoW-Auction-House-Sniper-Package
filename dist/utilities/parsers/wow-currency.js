"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToWowCurrency = void 0;
const copperPerSilver = 100;
const silverPerGold = 100;
const convertToWowCurrency = (rawAmmount) => {
    const gold = Math.trunc(rawAmmount / (copperPerSilver * silverPerGold));
    const silver = Math.trunc(rawAmmount - gold * copperPerSilver * silverPerGold) / copperPerSilver;
    const copper = Math.trunc(rawAmmount % copperPerSilver);
    return { gold, silver, copper };
};
exports.convertToWowCurrency = convertToWowCurrency;
