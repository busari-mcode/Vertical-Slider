const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideLeft.querySelectorAll('div').length  // note that slideRight can also be used in replace of slideLeft since they have equal number of div

let activeSlideIndex = 0 // we need to know which index is basically in view 

/* 
the index is zero based, so it will read 0,1,2,3 to make it four total
so we want the last index which is 3 (the fourth slide) 
and also the last slide of left-slide will go inline with the first slide of right-slide
*/
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh` // this does the matching as explain it the comment above

upButton.addEventListener('click', () => changesSlide('up'))
downButton.addEventListener('click', () => changesSlide('down'))

const changesSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if (direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex =  slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

