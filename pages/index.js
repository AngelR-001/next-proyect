import Title from '../components/Title';
import Layout from '../components/layout';

export default function Home(){
   return(
    <Layout>
      <Title>Home page</Title>
      <p className='ha'>Hola ANDI :3</p>

      <style>
        {`

          p{
            color: darkgray;
          }

          p:hover{
            color: darkred;
          }

          ha{
            color: black;
          }

        `}
      </style>
    </Layout>
  )
}
 