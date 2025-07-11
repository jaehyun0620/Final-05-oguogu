import Category from '@/components/layouts/Category/Category';
import Header from "@/components/layouts/Header/Header";
import Navigation from '@/components/layouts/Navigation/Navigation';

export default function Home() {
  return (
     <>
        <Header cartItemCount={4} />
        <Navigation />
        <h1>Final-Project-oguogu v02</h1>
        <Category />
     </>
  );
}
