import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class CustomDocument extends Document {
    render(){
        return(
        <Html>
            <Head>
                <title>Oscar Delta</title>
            </Head>
            <body>
                <Main />
            </body>
        <NextScript />
        </Html>
        )
    }
}