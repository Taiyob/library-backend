import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { MemberService } from "./member.service";
import sendResponse from "../../../shared/sendResponce";
import http from "http-status";

const createMemberIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.createMember(req.body);

  const formattedResult = {
    membershipId: result.memberId,
    name: result.name,
    email: result.email,
    phone: result.phone,
    membershipDate: result.membershipDate,
  };

  sendResponse(res, {
    success: true,
    status: http.CREATED,
    message: "Member created successfully",
    data: formattedResult,
  });
});

const getAllMembersFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.getAllMembers();

  const formattedResult = result.map((member) => ({
    membershipId: member.memberId,
    name: member.name,
    email: member.email,
    phone: member.phone,
    membershipDate: member.membershipDate,
  }));

  sendResponse(res, {
    success: true,
    status: http.OK,
    message: "Members retrieved successfully",
    data: formattedResult,
  });
});

const getSingleMemberFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await MemberService.getSingleMember(id);

    const formattedResult = {
      membershipId: result.memberId,
      name: result.name,
      email: result.email,
      phone: result.phone,
      membershipDate: result.membershipDate,
    };

    sendResponse(res, {
      success: true,
      status: http.OK,
      message: "Member retrieved successfully",
      data: formattedResult,
    });
  }
);

const updateMemberIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MemberService.updateMember(id, req.body);

  const formattedResult = {
    membershipId: result.memberId,
    name: result.name,
    email: result.email,
    phone: result.phone,
  };

  sendResponse(res, {
    success: true,
    status: http.OK,
    message: "Member updated successfully",
    data: formattedResult,
  });
});

const deleteMemberFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await MemberService.deleteMember(id);

  sendResponse(res, {
    success: true,
    status: http.OK,
    message: "Member successfully deleted",
  });
});

export const MemberController = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
  updateMemberIntoDB,
  deleteMemberFromDB,
};
