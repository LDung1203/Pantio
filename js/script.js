const buyBtns = document.querySelectorAll('.js-buy')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
        
        // Hàm hiển thị modal mua vé (thêm class open vào modal)
        function showBuyTickets() {
            modal.classList.add('open')
        }

        // Hàm ẩn modal mua vé (gỡ bỏ class open của modal)
        function hideBuyTickets() {
            modal.classList.remove('open')
        }

        // Lặp qua từng thẻ button và nghe hành vi click
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets)
        }

        // Nghe hành vi click vào button close
        modalClose.addEventListener('click', hideBuyTickets)
    
        modal.addEventListener('click', hideBuyTickets)
    
        modalContainer.addEventListener('click', function(event) {
            event.stopPropagation()
        })

/////////////////////////////////////////////////////////////////////////////////////////////////////
        document.addEventListener('DOMContentLoaded', function (){
            const userIcon = document.querySelector('.user .fa-circle-user');
            const loginForm = document.getElementById('login-form');
            const closeLoginForm = document.getElementById('close-login-form');
            userIcon.addEventListener('click', function (){
                loginForm.style.display = 'flex';
            });
            closeLoginForm.addEventListener('click', function (){
                loginForm.style.display = 'none';
            });
        });