import Link from "next/link";

const page = () => {
    return (
        <div className=''>
            <Link href={"/auth/sign-in"} className="border border-green-400">Sign In</Link>
            This is sign up page Components
        </div>
    );
};

export default page;