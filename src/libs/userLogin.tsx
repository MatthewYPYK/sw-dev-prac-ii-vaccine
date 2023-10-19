export default async function UserLogin(
  email: string, 
  password: string,
) {
  const response = await fetch("http://localhost:5000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  if (!response.ok) throw new Error("log-in failed")
  return await response.json();
}