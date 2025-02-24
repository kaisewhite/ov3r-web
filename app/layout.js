import "./globals.css";

export const metadata = {
  title: "ov3r",
  description: "Central hub for OV3R services",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-background antialiased'>{children}</body>
    </html>
  );
}
