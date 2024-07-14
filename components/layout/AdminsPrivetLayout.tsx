import React, { ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { usePathname, useRouter } from "next/navigation";
import {
  logOut,
  selectCurrentOrganizer,
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";

interface AdminsPrivetLayoutProps {
  children: ReactNode;
}

const AdminsPrivetLayout: React.FC<AdminsPrivetLayoutProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(useCurrentToken);
  const organizer = useAppSelector(selectCurrentOrganizer);
  const user = useAppSelector(selectCurrentUser);

  useEffect(() => {
    if (organizer?.email) {
      router?.push("/");
    }
    if (!accessToken || user?.role !== "superAdmin") {
      const redirectTo = `/auth/sign-in?from=${encodeURIComponent(pathname)}`;
      router.push(redirectTo);
      dispatch(logOut());
    }
  }, [accessToken, dispatch, organizer, pathname, router, user]);

  return <>{children}</>;
};

export default AdminsPrivetLayout;
