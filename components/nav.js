import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  return (
    <nav className="p-5 border-t-4 border-t-brand">
      <div className="flex">
        <Link href="/">
          <div className="flex-shrink-0 mb-0 mr-4">
            <span className="text-4xl">🦓</span>
          </div>
        </Link>
        <div className="flex w-full justify-between">
          <div className="flex text-lg items-center font-bold justify-center">
            <Link href="/" className="hover:underline">
              <h4>
                Zoo{" "}
                <span className="hidden sm:inline-block text-zinc-500 ml-1 font-light">
                  Image Playground •
                </span>
              </h4>
            </Link>
            <Link
              className="hover:underline"
              href="https://replicate.com?utm_source=project&utm_campaign=zoo"
            >
              <h4>
                <span className="text-zinc-500 ml-2 font-light">
                  <span className="sm:inline-flex hidden">Powered</span> by
                  Replicate
                </span>
              </h4>
            </Link>
          </div>

          <div className="">
            {router.pathname == "/memories" ? (
              <>
                <Link
                  href="/"
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  &larr; Back
                </Link>
              </>
            ) : (
              <Link
                href="/memories"
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Memories
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}