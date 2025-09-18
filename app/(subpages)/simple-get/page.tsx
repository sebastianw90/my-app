import { API_BASE_URL, API_ROUTES } from "@/constants";

export default async function SimpleGetPage() {
  let result;

  try {
    const response = await fetch(`${API_BASE_URL}${API_ROUTES.SIMPLE_GET}`);
    result = await response.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <main>
      <h1>Simple GET page</h1>
      {result.message}
    </main>
  );
}
