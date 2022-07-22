import Head from "next/head";
import Image from "next/image";
import Content from "../components/content/Content";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Main from "../components/home/Home";

export default function Home() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}
