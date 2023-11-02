export default async function getHospitals() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  })
  const response = await fetch("http://localhost:8080/api/v1/hospitals", {
    next: { tags: ["hospitals"] },
  });
  if (!response.ok) throw new Error("failed to fetch hospital")

  return await response.json()
}