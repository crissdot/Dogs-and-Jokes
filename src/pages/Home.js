import getData from '../utils/getData';

const Home = async () => {
    const data = await getData();

    window.showPunchline = () => {
        const showPunch = document.querySelector('.show-punch');
        const punchline = document.querySelector('.punchline');
        showPunch.style.display = 'none';
        punchline.style.display = 'block';
    }

    const view = `
        <div class="characters">
            <article class="character-item">
                <img src="${data.url}" alt="dog">
                <h2 class="setup">${data.setup}</h2>
                <p class="show-punch" onclick="showPunchline()">Show Punchline</p>
                <h2 class="punchline">${data.punchline}</h2>
            </article>
        </div>
    `;
    return view;
}

export default Home;
