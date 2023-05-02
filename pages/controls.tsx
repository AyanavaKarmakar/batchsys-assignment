import Head from "next/head";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function Controls() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  /**
   * Prevents Next.js hydration mismatch error
   * @see https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
   */
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Controls</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-5 items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold text-center">Controls</h1>

        <div className="max-w-md w-auto">
          <div className="flex flex-row items-center gap-3 my-5">
            <div className="text-2xl font-bold">1. Change Card Type:</div>
            <button
              type="button"
              className="bg-primary-light dark:bg-primary-dark p-3 rounded-md"
            >
              Card 1
            </button>
          </div>

          <div className="flex flex-row items-center gap-3 my-5">
            <div className="text-2xl font-bold">
              2. Change Scroll Direction:
            </div>
            <button
              type="button"
              className="bg-primary-light dark:bg-primary-dark p-3 rounded-md"
            >
              Vertical
            </button>
          </div>

          <div className="flex flex-row items-center gap-3 my-5">
            <div className="text-2xl font-bold">3. Toggle Theme:</div>

            <button
              type="button"
              className="bg-primary-light dark:bg-primary-dark p-3 rounded-full"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <MoonIcon className="h-6 w-6" />
              ) : (
                <SunIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
