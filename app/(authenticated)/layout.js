import Header from "@/app/components/Header";

export default function AuthenticatedLayout({ children }) {
  return (
    <div className='relative flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
    </div>
  );
}
