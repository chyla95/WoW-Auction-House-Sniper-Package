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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const battle_net_api_1 = require("./services/battle-net-api");
const ahSniper = {
    connect: (bnClientId, bnClientSecret) => __awaiter(void 0, void 0, void 0, function* () {
        const connection = yield battle_net_api_1.BattleNetApi.connect(bnClientId, bnClientSecret);
        if (!connection)
            throw new Error("Could not connect to the API!");
        return connection;
    }),
};
exports.default = ahSniper;
__exportStar(require("./utilities/helper-functions/battle-net-api-localization"), exports);
__exportStar(require("./classes/auction-house-scanner"), exports);
__exportStar(require("./classes/realm-groups"), exports);
__exportStar(require("./classes/realm-group"), exports);
__exportStar(require("./classes/realm"), exports);
__exportStar(require("./classes/item"), exports);
// How to update the package:
// 1. Run: npm run build
// 2. Commit and push changes to github
// How to install the package:
// 1. Run: npm i {link to github repo}
