"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const member_service_1 = require("./member.service");
const sendResponce_1 = __importDefault(require("../../../shared/sendResponce"));
const http_status_1 = __importDefault(require("http-status"));
const createMemberIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.createMember(req.body);
    const formattedResult = {
        membershipId: result.memberId,
        name: result.name,
        email: result.email,
        phone: result.phone,
        membershipDate: result.membershipDate,
    };
    (0, sendResponce_1.default)(res, {
        success: true,
        status: http_status_1.default.CREATED,
        message: "Member created successfully",
        data: formattedResult,
    });
}));
const getAllMembersFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.getAllMembers();
    const formattedResult = result.map((member) => ({
        membershipId: member.memberId,
        name: member.name,
        email: member.email,
        phone: member.phone,
        membershipDate: member.membershipDate,
    }));
    (0, sendResponce_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Members retrieved successfully",
        data: formattedResult,
    });
}));
const getSingleMemberFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.MemberService.getSingleMember(id);
    const formattedResult = {
        membershipId: result.memberId,
        name: result.name,
        email: result.email,
        phone: result.phone,
        membershipDate: result.membershipDate,
    };
    (0, sendResponce_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Member retrieved successfully",
        data: formattedResult,
    });
}));
const updateMemberIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.MemberService.updateMember(id, req.body);
    const formattedResult = {
        membershipId: result.memberId,
        name: result.name,
        email: result.email,
        phone: result.phone,
    };
    (0, sendResponce_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Member updated successfully",
        data: formattedResult,
    });
}));
const deleteMemberFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield member_service_1.MemberService.deleteMember(id);
    (0, sendResponce_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: "Member successfully deleted",
    });
}));
exports.MemberController = {
    createMemberIntoDB,
    getAllMembersFromDB,
    getSingleMemberFromDB,
    updateMemberIntoDB,
    deleteMemberFromDB,
};
