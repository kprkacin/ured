import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="HR">
        <Head>
          <meta
            name="description"
            content="Odvjetnički ured Zoran Švaco u pretežitom dijelu bavi se područjem građanskog
prava te pruža stručnu pravnu pomoć fizičkim i pravnim osobama. Josipa Vargovića 2/I 
48 000 Koprivnica"
          />
          <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
