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
            <button class="next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 172 172"
            style=" fill:#3c484e;"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M86,101.91827l57.98798,-56.79928c2.58413,-2.53246 6.71875,-2.50662 9.30288,0.05168l10.15565,10.15565c2.58413,2.60998 2.58413,6.79628 -0.02584,9.38041l-72.74339,72.27824c-1.29206,1.29207 -2.97175,1.9381 -4.67728,1.9381c-1.70553,0 -3.38522,-0.64603 -4.67728,-1.9381l-72.74339,-72.27824c-2.60997,-2.58413 -2.60997,-6.77043 -0.02584,-9.38041l10.15565,-10.15565c2.58413,-2.55829 6.71875,-2.58413 9.30288,-0.05168z"></path></g></g></g></svg></button>
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
