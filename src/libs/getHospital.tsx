export default async function getHospital( id: String ) {
  const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`)
  if (!response.ok) throw new Error("failed to fetch hospital")
  return await response.json();
}