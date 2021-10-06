import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const data = await prisma.link.findMany();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send({ error });
  }
};
