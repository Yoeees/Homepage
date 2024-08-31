document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("contact-modal");
    var contactBtn = document.querySelector(".layer4Contact");
    var closeBtn = document.querySelector(".close-btn");

    if (modal && contactBtn && closeBtn) {
        contactBtn.addEventListener('click', function() {
            modal.style.display = "block";
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    } else {
        console.error('Modal or button elements not found.');
    }
});
