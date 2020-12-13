// const tweetContainer = document.getElementById('tweet');
// const api = 'https://sv443.net/jokeapi/v2/joke/Any?format=txt&type=single';

// const http = new XMLHttpRequest();
// http.open('POST', api);
// http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// http.onreadystatechange = () => {
//   if (http.readyState === 4 && http.status === 200) {
//     alert(http.responseText);
//   }
// };

// $(document).onReady(() => {
//   alert('carregado')
// })
import { mock } from './data.js';

const init = () => {
  const handleData = () => {
    return mock.forEach(item => {
      const {first_name, username, avatar, joke} = item;
      const jsxImg = `<img src=${avatar} alt=${first_name} />`;
      const jsx = `
      <div class="flex tweet">
          <div>
            <img src=${avatar} alt=${first_name} />
          </div>
          <div>
            <h2>${first_name}   <span>@${username}</span></h2>
            <p>${joke}</p>
            <div class="actions">
              <img src="assets/coment.svg" alt="coment" />
              <img src="assets/retweet.svg" alt="retweet" />
              <img src="assets/like.svg" alt="like" />
              <img src="assets/share.svg" alt="share" />
            </div>
          </div>
        </div>
      `;
      $('#fleet').append(jsxImg);
      $('#tweet').append(jsx);
    });
  }
  $(document).ready(handleData)
}

init();
