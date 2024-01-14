import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Nguyen Van Tuan's Profolio."
      />
      <meta
        name="keywords"
        content="data scientist portfolio, machine learning engineer, kostas georgiou portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Nguyen Van Tuan's Portfolio" />
      <meta
        property="og:description"
        content="Nguyen Van Tuan's Profolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nguyen Van Tuan',
};
