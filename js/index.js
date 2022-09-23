var popup = document.querySelector('.popup')
var popupbtn = document.querySelector('.btn-js')
var popupclose = document.querySelector('.popup-close')

popupbtn.addEventListener('click', function() {
    popup.classList.add('popup-open') 
})

popupclose.addEventListener('click', function() {
    popup.classList.remove('popup-open')
})