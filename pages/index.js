import Title from '../components/Title';
import Layout from '../components/layout';

export default function Home(){
   return(
    <Layout>
      <Title>Home page</Title>
      <p className='ha'>Mi primer pagina con Next.js</p>
      <img src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fshitpostosiosi%2F&psig=AOvVaw1s5sPSZ_719jenZ7vYWo9j&ust=1600584140727000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCZid7O9OsCFQAAAAAdAAAAABAJ"></img>

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
 