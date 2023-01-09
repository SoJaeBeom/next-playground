import Head from 'next/head';
import Nav from './Nav';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
