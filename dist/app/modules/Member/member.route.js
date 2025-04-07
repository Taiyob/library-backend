"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRoute = void 0;
const express_1 = __importDefault(require("express"));
const member_controller_1 = require("./member.controller");
const route = express_1.default.Router();
route.post("/", member_controller_1.MemberController.createMemberIntoDB);
route.get("/", member_controller_1.MemberController.getAllMembersFromDB);
route.get("/:id", member_controller_1.MemberController.getSingleMemberFromDB);
route.put("/:id", member_controller_1.MemberController.updateMemberIntoDB);
route.delete("/:id", member_controller_1.MemberController.deleteMemberFromDB);
exports.MemberRoute = route;
