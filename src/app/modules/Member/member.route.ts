import express from "express";
import { MemberController } from "./member.controller";

const route = express.Router();

route.post("/", MemberController.createMemberIntoDB);
route.get("/", MemberController.getAllMembersFromDB);
route.get("/:id", MemberController.getSingleMemberFromDB);
route.put("/:id", MemberController.updateMemberIntoDB);
route.delete("/:id", MemberController.deleteMemberFromDB);

export const MemberRoute = route;
