//  navbar
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && ! navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});
//  button index
const contactTrigger = document.querySelector('#contact-trigger-point');
const navContactBox = document.querySelector('#nav-contact-container');

if (contactTrigger && navContactBox) {
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // Munculkan di Navbar jika tombol asli terlewati
                navContactBox.classList.remove('opacity-0', 'pointer-events-none');
                navContactBox.classList.add('opacity-100');
            } else {
                // Sembunyikan jika masih di atas
                navContactBox.classList.add('opacity-0', 'pointer-events-none');
                navContactBox.classList.remove('opacity-100');
            }
        });
    }, { threshold: 0 });

    contactObserver.observe(contactTrigger);
}

//  favorite
const favoriteBoxes = document.querySelectorAll('.bg-opacity-10');

favoriteBoxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('bg-[#cb879c]/30'); // Berubah warna saat diklik
        alert("Yay! You found one of my favorite things! ✨");
    });
});