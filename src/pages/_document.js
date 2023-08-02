import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/*
          <meta
            name="title"
            content="Mohmmed Mukarram Menn - Full Stack Developer"
          />
          <meta
            name="description"
            content="I'm Mohmmed Mukarram Menn, and I'm a full stack web developer. I'm passionate about crafting awesome applications and designs for the web. If you have a cool idea in mind, let's team up and bring it to life! Let's make something amazing together!"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Mohmmed Mukarram Menn - Full Stack Developer" />
          <meta property="og:description" content="With a strong command of front-end, back-end & server technologies, [Your Name] delivers seamless web solutions with a focus on quality and client satisfaction. " />
          <meta property="og:image" content="https://www.vipuljha.com/images/banner.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Mohmmed Mukarram Menn - Full Stack Developer" />
          <meta property="twitter:description" content="Meet Mohmmed Mukarram Menn, a professional full stack web developer seeking freelance projects." />
          <meta property="twitter:image" content="https://www.vipuljha.com/images/banner.png" />
          <meta
            property="og:title"
            content="Mohmmed Mukarram Menn - Full Stack Developer"
          />
          <meta
            property="og:description"
            content="With a strong command of front-end, back-end & server technologies, [Your Name] delivers seamless web solutions with a focus on quality and client satisfaction. "
          />
          <meta
            property="og:title"
            content="Mohmmed Mukarram Menn - Full Stack Developer"
          />
          <meta
            property="og:description"
            content="With a strong command of front-end, back-end & server technologies, [Your Name] delivers seamless web solutions with a focus on quality and client satisfaction. "
          />
          <meta
            property="twitter:title"
            content="Mohmmed Mukarram Menn - Full Stack Developer"
          />
          <meta
            property="twitter:description"
            content=" I'm Mohmmed Mukarram Menn, and I'm a full stack web developer. I'm passionate about crafting awesome applications and designs for the web. If you have a cool idea in mind, let's team up and bring it to life! Let's make something amazing together!"
          />*/}

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          />
          <meta charset="UTF-8" />
          <meta
            name="title"
            content="Mukarram Menn | Freelance Full Stack Developer in Mumbai"
          />
          <meta
            name="description"
            content="Experienced Freelance Full Stack Developer in Mumbai. Delivering innovative web solutions. Hire me for your next project!"
          />
          <meta
            name="keywords"
            content="Mukarram Menn, Freelance Full Stack Developer in Mumbai"
          />
          <meta name="author" content="Mukarram Menn" />
          <meta
            property="og:description"
            content="Experienced  Freelance Full Stack Developer in Mumbai. Delivering innovative web solutions. Hire me for your next project!"
          />
          <meta property="og:url" content="mukarram.in/" />
          <meta name="distribution" content="global" />
          <meta http-equiv="content-language" content="en-gb" />
          <meta name="geo.region" content="IN-MH" />
          <meta name="geo.placename" content="Mumbai" />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content="Mukarram Menn | Freelance Full Stack Developer in Mumbai"
          />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
