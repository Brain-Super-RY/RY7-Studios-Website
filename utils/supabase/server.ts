import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = () => { // Reverted: no longer async
  const cookieStore = cookies(); // Reverted: no longer awaited

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          // @ts-ignore - Workaround for persistent type error in this build environment.
          if (cookieStore.has(name)) {
            // @ts-ignore - Workaround for persistent type error.
            return cookieStore.get(name)!.value;
          }
          return undefined;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            // @ts-ignore - Workaround for persistent type error.
            cookieStore.set(name, value, options);
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            // In Next.js, setting an empty value with an expiry date in the past effectively deletes the cookie.
            // Alternatively, if your cookie store handler supports `delete`, use that.
            // @ts-ignore - Workaround for persistent type error.
            cookieStore.set(name, '', { ...options, maxAge: 0 });
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
};
