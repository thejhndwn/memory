import { GetStaticProps } from "next";
import Link from "next/link";

import { Forum } from "../../interfaces";
import Layout from "../../components/Layout";
import List from "../../components/PostList";
import { getForums } from "../../lib/forums";

type Props = {
  items: Forum[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Forums">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /forums</p>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Forum[] = getForums();
  return { props: { items } };
};

export default WithStaticProps;
