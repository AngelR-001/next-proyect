import Title from '../components/Title';
import Layout from '../components/layout';

export default function Home(){
   return(
    <Layout>
      <Title>Home page</Title>
      <p>Aprende Next.JS con Webtoriales</p>

      <style>
        {`

          p{
            color: darkgray;
          }

          p:hover{
            color: darkred;
          }

        `}
      </style>
    </Layout>
  )
}
 