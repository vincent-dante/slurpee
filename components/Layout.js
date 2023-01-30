import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <main className="pb-[8rem]">{children}</main>
      <Footer />
    </>
  );
}
