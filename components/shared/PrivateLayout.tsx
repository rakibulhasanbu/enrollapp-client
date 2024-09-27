"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  logOut,
  selectCurrentOrganizer,
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import Loading from "../ui/Loading";

const PrivateLayout = ({
  children,
  roles,
}: Readonly<{
  children: React.ReactNode;
  roles?: string[];
}>) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const organizer = useAppSelector(selectCurrentOrganizer);
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const accessToken = useAppSelector(useCurrentToken);

  useEffect(() => {
    if (user && roles && !roles.includes(user?.role)) {
      const redirectTo = `/auth/sign-in?from=${encodeURIComponent(pathname)}`;
      router.push(redirectTo);
    } else if (!accessToken) {
      const redirectTo = `/auth/sign-in?from=${encodeURIComponent(pathname)}`;
      router.push(redirectTo);
    } else if (organizer && roles && !organizer.email) {
      const redirectTo = `/auth/organizer-login?from=${encodeURIComponent(
        pathname
      )}`;
      router.push(redirectTo);
    }
  }, [
    user,
    roles,
    accessToken,
    pathname,
    router,
    dispatch,
    isLoading,
    organizer,
  ]);

  if (isLoading) {
    return <Loading />;
  }

  if ((user && roles && !roles.includes(user?.role)) || !accessToken) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateLayout;
