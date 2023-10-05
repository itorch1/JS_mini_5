const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const userImg = document.getElementById('user-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg,.animated-bg-text');

setTimeout(loadContent,2000);

function loadContent() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">';
    title.innerText = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, voluptatibus';
    userImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    name.innerText = 'John Doe';
    date.innerText = 'Oct 08, 2020';

    animatedBgs.forEach( el => el.classList.remove('animated-bg','animated-bg-text') );
}
