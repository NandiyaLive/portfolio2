import Head from "next/head";
import Navbar from "./NavBar";
import footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Direndra's Profile</title>
        <meta name="description" content="Direndra Kavindu" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
