import getData from '../utils/getData';

const Home = async () => {
    const data = await getData();

    const view = `
        <div class="characters">
            <article class="character-item">
                <img src="${data.url}" alt="dog" with="500" height="500">
                <h2>${data.setup}</h2>
            </article>
        </div>
    `;
    return view;
}

export default Home;
