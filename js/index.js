//Selector
const openingSelector = document.querySelector('.open');
const closingSelector = document.querySelector('.close');
const listMenu = document.querySelector('.group-header ul');

//Listener Event
openingSelector.addEventListener('click', () => {
  closingSelector.setAttribute('style', 'display: inline');
  openingSelector.setAttribute('style', 'display: none');
  listMenu.setAttribute('style', 'display: inline');
})

closingSelector.addEventListener('click', () =>{
  closingSelector.setAttribute('style', 'display: none');
  openingSelector.setAttribute('style', 'display: inline');
  listMenu.setAttribute('style', 'display: none');
})
