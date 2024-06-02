import Link from "next/link";

const page = () => {
    return (
        <div className=''>
            <Link href={"/auth/sign-up"} className="border border-green-400">Sign up</Link>
            This is sign in  page Components
        </div>
    );
};

export default page;