import { FastifyReply, FastifyRequest } from "fastify";

export const checkSessionIdExists = (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const { sessionId } = req.cookies;

  if (!sessionId) {
    return res.status(401).send({
      error: "You do not have permission to access",
    });
  }
};
