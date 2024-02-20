const refs = {
  formElem: document.querySelector('.form-search'),
  listElem: document.querySelector('.list-imgs'),
};

refs.formElem.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const userSearch = e.target.elements.image.value;
  if (!userSearch) return;

  searchImg(userSearch).then(data => {
    renderImg(data)
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        refs.form.reset();
      });
  });
}

function searchImg(imgName) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/?';
  const PARAMS = new URLSearchParams({
    key: '42408042-b97fa2d9d3888df0f8d594195',
    q: `${imgName}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = BASE_URL + END_POINT + PARAMS;

  return fetch(url).then(res => res.json());
}

function renderImg(img) {
  console.dir(img);
  const markup = `      <li class="item-img">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20230612/pngtree-images-of-winter-and-white-background-wallpapers-free-download-image_2935697.jpg"
          alt="img"
          width="360"
          height="200"
        />
        <ul class="img-list-info">
          <li>
            <h2 class="img-title">Task 1</h2>
            <p class="img-text">6666</p>
          </li>
          <li>
            <h2 class="img-title">Task 2</h2>
            <p class="img-text">7777</p>
          </li>
          <li>
            <h2 class="img-title">Task 3</h2>
            <p class="img-text">8888</p>
          </li>
          <li>
            <h2 class="img-title">Task 4</h2>
            <p class="img-text">9999</p>
          </li>
        </ul>
      </li>`;
  refs.listElem.insertAdjacentHTML('afterbegin', markup);
}
