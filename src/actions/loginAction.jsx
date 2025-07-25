import { redirect } from "react-router-dom";

export async function loginAction({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  if (username === "admin" && password === "1234") {
    // Fake token
    localStorage.setItem("auth_token", "my-fake-token-123");

    // Redirect to dashboard
    return redirect("/dashboard");
  } else {
    return { error: "Invalid credentials" };
  }
}
