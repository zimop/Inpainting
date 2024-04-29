import Link from "next/link";

export default function Navbar() {
    return(
        <nav className = "flex justify-between items-center bg-green-600 px-5 py-5">
            <Link className="text-white font-bold"
                href = {"/"}>
                    GTCoding
            </Link>
            <Link className = "text-green-600 font-bold bg-white p-2"
                href = {"/addTopic"}>
                    Add Topic
            </Link>
        </nav>
    );
}