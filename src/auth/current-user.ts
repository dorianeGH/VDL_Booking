import { User } from "@prisma/client";
import { baseAuth } from "./auth";

export const currentUser = async () => {
  const session = await baseAuth();

  if (!session?.user) {
    return null;
  }
  const user = session.user as User;
  return user;
};
//si pas de user, throw une erreur pour partager les erreur
export const requiredCurrentUser = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }
  return user;
};
