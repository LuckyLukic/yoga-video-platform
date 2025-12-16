import "./globals.css";

export const metadata = {
  title: "Yoga Video Platform",
  description: "Online yoga video platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
