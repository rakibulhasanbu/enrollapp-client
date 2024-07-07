import Navbar from "@/components/shared/Navbar";
import { Footer } from "antd/es/layout/layout";

const HomeLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className=''>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default HomeLayout;