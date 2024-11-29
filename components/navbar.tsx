import Link from "next/link";
import Image from "next/image";
import { auth, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-white border-gray-200 border-b">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4 px-4">
        <Link href="/">
          <h1 className="font-bold text-lg tracking-wider">LOGO</h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <ul className="hidden md:flex items-center gap-x-7 mr-5 font-semibold text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-800">
                Home
              </Link>
            </li>
            {session && (
              <>
                <li>
                  <Link href="/product" className="hover:text-gray-800">
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-gray-800">
                    Dashboard
                  </Link>
                </li>
                {session.user.role === "admin" ? (
                  <li>
                    <Link href="/user" className="hover:text-gray-800">
                      Users
                    </Link>
                  </li>
                ) : null}
              </>
            )}
          </ul>
          {session && (
            <div className="flex gap-x-3 items-center">
              <div className="flex flex-col justify-center -space-y-1">
                <span className="font-semibold text-gray-600 text-right capitalize">
                  {session.user.name}
                </span>
                <span className="font-xs text-gray-400 text-right capitalize">
                  {session.user.role}
                </span>
              </div>
              <button>
                <Image
                  src={session.user.image || "/user.png"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="w-14 h-14 rounded-full"
                />
              </button>
            </div>
          )}

          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button
                type="submit"
                className="bg-red-400 text-white px-3 py-1 rounded-md hover:bg-red-500"
              >
                Sign Out
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="bg-red-400 text-white px-3 py-1 rounded-md hover:bg-red-500"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
