import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(`https://api.chucknorris.io/jokes/random?category=${context.params.category}`);
  const joke = await data.json();

  return {
    props: {
      joke: joke.value
    }, // will be passed to the page component as props
  }
}

function Category({joke}) {
  return <>
    <div>{joke}</div>
    </>
}

export default Category
