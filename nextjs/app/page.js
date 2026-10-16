// Rendered on each request, so the page shows the server is live.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <h1>Hello from Hangar</h1>
      <p>This Next.js app is live, rendered on the server at {new Date().toISOString()}.</p>
      <p>
        Edit <code>app/page.js</code> in your fork of{" "}
        <a href="https://github.com/hangar-cloud/templates">the starter</a> to make it yours.
      </p>
    </main>
  );
}
