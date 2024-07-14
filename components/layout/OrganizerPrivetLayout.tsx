import React, { ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { usePathname, useRouter } from "next/navigation";
import {
  logOut,
  selectCurrentOrganizer,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";

interface OrganizerPrivetLayoutProps {
  children: ReactNode;
}

const OrganizerPrivetLayout: React.FC<OrganizerPrivetLayoutProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(useCurrentToken);
  const organizer = useAppSelector(selectCurrentOrganizer);
  useEffect(() => {
    if (!accessToken || !organizer?.email) {
      const redirectTo = `/auth/organizer-register?from=${encodeURIComponent(
        pathname
      )}`;
      router.push(redirectTo);
      dispatch(logOut());
    }
  }, [accessToken, dispatch, organizer, pathname, router]);

  // if (isLoading) {
  //     return (
  //         <div className="flex justify-center">
  //             <Loading />
  //         </div>
  //     );
  // }

  // if (user.isBlocked) {
  //     return (
  //         <div className="flex justify-center flex-col  custom-hight max-w-4xl mx-auto space-y-5">
  //             <h2 className="md:text-xl flex flex-col gap-2">
  //                 <span className="font-semibold">Dear {user?.name}, </span>
  //                 <span>
  //                     Your account with Acctbazaar.com is currently inactive. This may be due to a violation of our policies or an issue with your trades/transactions.

  //                     Please contact our support team for further assistance and to resolve this matter promptly.
  //                 </span>
  //             </h2>
  //             <AppButton
  //                 label="Contact support"
  //                 href="/contactus"
  //             />

  //         </div>
  //     );
  // }

  return <>{children}</>;
};

export default OrganizerPrivetLayout;
