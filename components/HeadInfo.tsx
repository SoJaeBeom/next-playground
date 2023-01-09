import Head from 'next/head';

type Props = {
  title: string;
};
export default function HeadInfo({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
