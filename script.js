const cross = document.querySelector('.modal-close')

const overlay = document.querySelector('.overlay')

cross.addEventListener('click',function(){
    overlay.style.display = 'none'
})

// api - start
const getEventApi = async (keyword) => {
    if (keyword === "" || keyword === undefined || keyword === null){
        try {
            const result = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=1`).then((data) => {
                return data.json();
            });
            return result;
        } catch (error) {
            return error;
        }
    } else {
        try {
            const result = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=1&keyword=${keyword}`).then((data) => {
                return data.json();
            });
            return result;
        } catch (error) {
            return error;
        }
    }
};
// api - end

// show card - start
const list = document.querySelector(".main");

 function createMarkup(arr) {
    console.log(arr)
    const html = arr.events.map((item) => {
        console.log(item.dates.start.localDate)
        return `<li class="main-card">
                     <div class="main__style-div"></div>
                     <img class="main-card-poster" src="${item.images[0].url}" alt="poster"/>
                     <h4 class="main-card-title">${item.name}</h4>
                      <p class="main-card-date">${item.dates.start.localDate}</p>
<span class="main__locate">${item.locale}</span>
                   </li>`;
    }).join("");

    list.innerHTML = html;
}
function searcPost() {
    const keyWord = searcInput.value;

    getEventApi(keyWord).then((data) => {
        createMarkup(data._embedded)
    });
}
const searcInput = document.querySelector(".header-search-ticket");

searcInput.addEventListener("input", _.debounce(() => {
    searcPost()
}, 500));


// enter input - end

