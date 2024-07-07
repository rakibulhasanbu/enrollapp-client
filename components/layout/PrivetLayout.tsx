import React, { ReactNode, useEffect } from "react";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/router";

interface PrivateLayoutProps {
    children: ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
    const { organizer } = useAppSelector((state) => state.auth);
    const router = useRouter();

    useEffect(() => {
        if (!organizer?.email) {
            router.push({
                pathname: "/auth/sign-in",
                query: { from: router?.pathname },
            });
        }
    }, [organizer, router]);

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
