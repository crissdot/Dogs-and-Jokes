const CATS_API = 'https://aws.random.cat/meow/';
const JOKES_API = 'https://official-joke-api.appspot.com/jokes/ten/';

const getData = async () => {
    try {
        const catResponse = await fetch(CATS_API);
        const catData = await catResponse.json();

        const jokeResponse = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const jokeData = await jokeResponse.json();

        const data = {
            ...jokeData,
            ...catData
        }
        console.log(data);
        return data;
    } catch(error) {
        console.log('Fetch Error', error);
    }
}

export default getData;
