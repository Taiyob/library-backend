import prisma from "../../../shared/prisma";
import { IMember } from "./service.interface";

const createMember = async (data: IMember) => {
  const result = await prisma.member.create({
    data: data,
  });

  return result;
};

const getAllMembers = async () => {
  const result = await prisma.member.findMany({});

  return result;
};

const getSingleMember = async (id: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });

  return result;
};

const updateMember = async (id: string, data: Partial<IMember>) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });

  const result = await prisma.member.update({
    where: {
      memberId: id,
    },
    data: data,
  });

  return result;
};

const deleteMember = async (id: string) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });

  const result = await prisma.member.delete({
    where: {
      memberId: id,
    },
  });

  return result;
};

export const MemberService = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
