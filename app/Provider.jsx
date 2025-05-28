"use client";

import { UserDetailContext } from "@/context/UserDetailContext";
import { api } from "@/convex/_generated/api";
import { useUser } from "@stackframe/stack";
import { useMutation } from "convex/react";
import { useEffect, useState } from "react";

const Provider = ({ children }) => {
  const user = useUser();
  const createUserMutation = useMutation(api.users.CreateNewUser);

  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    user && createUser();
  }, [user]);

  const createUser = async () => {
    const data = {
      name: user?.displayName,
      email: user?.primaryEmail,
      picture: user?.profileImageUrl,
    };
    const result = await createUserMutation(data);
    setUserDetail(result);
  };
  return (
    <div>
      <UserDetailContext value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext>
    </div>
  );
};

export default Provider;
