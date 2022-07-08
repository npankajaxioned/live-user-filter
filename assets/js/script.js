const search = document.getElementById('search');
const user_list = document.getElementById('user-list');
const listItems = [];
var user_data ;
async function get_user_data() {
  const characters = fetch('users.json');
  console.log(characters)
  characters
  .then (data => data.json()) 
  .then (data => {
    user_list.innerHTML = '';

    data.forEach(function(user) {
    const li = document.createElement('li');
    listItems.push(li);

    li.innerHTML = `
      <img src="${user.user_image}">
      <div class = "user-info">
        <h4>${user.name}</h4>
        <p>${user.location}</p>
      </div>
    `
    user_list.appendChild(li)
  });
  })
  .catch((error) => {
     console.error(error)
  })
}
get_user_data();

search.addEventListener('keyup', function(e) {
  var list_items = document.querySelectorAll('.users li')
  list_items.forEach(function(item) {
    var user_name = item.lastElementChild.firstChild.nextSibling.textContent.toLowerCase();
    var location = item.lastElementChild.lastElementChild.textContent.toLowerCase();
    var search_txt = e.target.value.toLowerCase();

    item.classList.remove('hide')
    
    if(!(location.indexOf(search_txt) > -1)) {
      item.classList.add('hide')
    }
  })
 })
