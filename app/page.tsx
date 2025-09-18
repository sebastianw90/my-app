import { PATHS } from "@/constants";

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <a href={PATHS.SIMPLE_GET}>Simple GET</a>
    </main>
  );
}
