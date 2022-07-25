document.addEventListener("DOMContentLoaded", () => { 


    const openPopupButton = document.querySelectorAll('[data_popup_target]')
    const closePopupButton = document.querySelectorAll('[data_popup_close]')
    const overlay = document.getElementById('overlay')

    openPopupButton.forEach(button => {
        button.addEventListener('click', () => {
            const popup = document.querySelector(button.dataset.popupTarget)
            openPopup(popup)
        })
    })

    closePopupButton.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup')
            closePopup(popup)
        })
    })

    overlay.addEventListener('click', () => {
        const popups = document.querySelectorAll('.popup.active')
        popups.forEach(popup => {
            closePopup(popup)
        })
    })

    function openPopup(popup) {
        if(popup == null) return
        popup.classList.add('active')
        overlay.classList.add('active')
    }

    function closePopup(popup) {
        if(popup == null) return
        popup.classList.remove('active')
        overlay.classList.remove('active')
    }
    
})

