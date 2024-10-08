export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <body className="bg-slate-500">
          {children}
        </body>
    );
}