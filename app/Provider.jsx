"use client";

import { api } from "@/convex/_generated/api";
import { useUser } from "@stackframe/stack";
import { useMutation } from "convex/react";
import { useEffect } from "react";

const Provider = ({ children }) => {
  const user = useUser();

  useEffect(() => {
    user && createUser();
  }, [user]);

  const createUserMutation = useMutation(api.users.CreateNewUser);

  const createUser = async () => {
    const data = {
      name: user?.displayName,
      email: user?.primaryEmail,
      picture: user?.profileImageUrl,
    };
    const result = await createUserMutation(data);
    console.log(result);
  };
  return <div>{children}</div>;
};

export default Provider;
