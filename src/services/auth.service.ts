import { prisma } from "../config/db";

export async function findOrCreateUser(data: {
  email: string;
  name: string;
  image?: string;
}) {
  let user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    user = await prisma.user.create({
      data,
    });
  }

  return user;
}