const slider = document.querySelector('.slider')
const links = document.querySelectorAll('nav span')

const contents = document.querySelectorAll('.content p')
const contentEl = document.querySelector('.content')

links.forEach(link => {
    link.addEventListener('click', () => sliderPos(link))
})

function sliderPos(link) {

    contentEl.style.padding = `2rem`;

    slider.style.width = `${link.offsetWidth}px`
    slider.style.height = `${link.offsetHeight}px`
    slider.style.left = `${link.offsetLeft}px`

    contents.forEach(c => {
        c.classList.remove('show')
        if (c.dataset.content == link.dataset.title) {
            c.classList.add('show')
        }
    })
}