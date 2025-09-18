import { API_BASE_URL, API_ROUTES, PATHS } from "@/constants";

export default async function SimpleGetPage({
  searchParams,
}: PageProps<PATHS.HOME>) {
  const params = await searchParams;

  const paramsString = Object.entries(params)
    .map(([key, value]) =>
      Array.isArray(value)
        ? value.map((x) => `${key}=${encodeURI(x)}`).join("&")
        : `${key}=${encodeURI(value || "")}`
    )
    .join("&");

  let result;

  try {
    const response = await fetch(
      `${API_BASE_URL}${API_ROUTES.SIMPLE_GET}${paramsString ? `?${paramsString}` : ""}`
    );
    result = await response.json();
  } catch (error) {
    console.error(error);
  }

  if (!result) {
    return "Error occured";
  }

  return (
    <main>
      <h1>Simple GET page</h1>
      <p>{result.message}</p>
      <p>
        {result.searchParams
          ? `Search params: ${(result.searchParams as URLSearchParams).toString()}`
          : "No search params"}
      </p>
    </main>
  );
}
