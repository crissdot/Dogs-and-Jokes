const DOGS_API = 'https://random.dog/woof.json';
const JOKES_API = 'https://nova-joke-api.netlify.app/.netlify/functions/index/api/random/';

const getData = async () => {
    try {
        const jokeResponse = await fetch(JOKES_API);
        const jokeData = await jokeResponse.json();

        let dogData;
        do {
            dogData = await getDogData();
            console.log(dogData);
        } while(dogData.match(/.mp4/g))

        const data = {
            ...jokeData,
            url: dogData
        }
        return data;
    } catch(error) {
        console.log('Fetch Error', error);
    }
}

const getDogData = async () => {
    const dogResponse = await fetch(DOGS_API);
    const dogData = await dogResponse.json();
    return dogData.url;
}

export default getData;
