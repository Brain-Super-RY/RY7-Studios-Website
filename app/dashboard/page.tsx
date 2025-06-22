import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // const cookieStore = cookies(); // No longer needed here
  const supabase = createClient(); // Called without arguments, Reverted: removed await

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const role = user.user_metadata?.role;

  if (role) {
    redirect(`/dashboard/${role}`);
  } else {
    redirect("/dashboard/role-selection");
  }

  return null;
}
