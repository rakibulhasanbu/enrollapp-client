import React, { ReactNode, useEffect } from "react";
import { useAppSelector } from "@/redux/hook";
import { usePathname, useRouter } from "next/navigation";
import { selectCurrentOrganizer, useCurrentToken } from "@/redux/features/auth/authSlice";

interface PrivateLayoutProps {
    children: ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const accessToken = useAppSelector(useCurrentToken);
    const organizer = useAppSelector(selectCurrentOrganizer)
    useEffect(() => {
        if (!accessToken || !organizer?.email) {
            const redirectTo = `/auth/sign-in?from=${encodeURIComponent(pathname)}`;
            router.push(redirectTo);
        }
    }, [accessToken, organizer, pathname, router]);

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

export default PrivateLayout;
