const DOGS_API = 'https://random.dog/woof.json';
const JOKES_API = 'https://official-joke-api.appspot.com/jokes/random';

const getData = async () => {
    try {
        const dogResponse = await fetch(DOGS_API);
        const dogData = await dogResponse.json();

        const jokeResponse = await fetch(JOKES_API);
        const jokeData = await jokeResponse.json();

        const data = {
            ...jokeData,
            ...dogData
        }
        console.log(data);
        return data;
    } catch(error) {
        console.log('Fetch Error', error);
    }
}

export default getData;
