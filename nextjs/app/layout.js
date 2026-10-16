import "./globals.css";

export const metadata = {
  title: "Hello from Hangar",
  description: "A Next.js starter deployed on Hangar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
