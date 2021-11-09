const slider = document.querySelector('.slider');
const wrapper = document.querySelector('.wrapper');
const sliderLabel = document.querySelector('.header__txt--switch');

const changeTheme = () => {
    wrapper.classList.toggle('light');
    wrapper.classList.toggle('dark');
    
    if (wrapper.classList.contains('light')) {
        sliderLabel.innerText = 'Dark mode';
    } else if (wrapper.classList.contains('dark')) {
        sliderLabel.innerText = 'Light mode';
    }
}

slider.addEventListener('click', changeTheme);