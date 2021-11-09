const slider = document.querySelector('.slider');
const wrapper = document.querySelector('.wrapper');

const changeTheme = () => {
    wrapper.classList.toggle('light');
    wrapper.classList.toggle('dark');
}

slider.addEventListener('click', changeTheme);