// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Car data
const cars = {
    honda: {
        title: "Honda",
        model: "BA.1781 AAC",
        image: "gambar/1.jpg",
        description: "Cocok untuk berkendara,dengan teman,keluarga",
        specs: [
            { icon: "fas fa-tachometer-alt", title: "Kecepatan", value: "240 km/jam" },
            { icon: "fas fa-gas-pump", title: "Bahan Bakar", value: "Pertalite" },
            { icon: "fas fa-cogs", title: "Transmission", value: "Manual" },
            { icon: "fas fa-user", title: "Tempat duduk", value: "6" },
            { icon: "fas fa-car", title: "Tipe", value: "Minibus" },
            { icon: "fas fa-calendar-alt", title: "Tahun", value: "2024" }
        ],
        whatsapp: "https://wa.me/6285374060051?text=Hi%20LuxuryRent,%20I'm%20interested%20in%20renting%20the%20BMW%20(BA.1781%20AAC).%20Can%20you%20provide%20more%20information?"
    },
    avanza: {
        title: "Avanza tahun 2024",
        model: "BIA 1612 AAE",
        image: "gambar/5.jpg",
        description: "Cocok untuk berkendara,dengan teman,keluarga",
        specs: [
            { icon: "fas fa-tachometer-alt", title: "Kecepatan", value: "260 km/jam" },
            { icon: "fas fa-gas-pump", title: "Bahan Bakar", value: "Pertalite" },
            { icon: "fas fa-cogs", title: "Transmission", value: "Manual" },
            { icon: "fas fa-user", title: "Tempat duduk", value: "6" },
            { icon: "fas fa-car", title: "Tipe", value: "Minibus" },
            { icon: "fas fa-calendar-alt", title: "Tahun", value: "2024" }
        ],
        whatsapp: "https://wa.me/6285374060051?text=Hi%20LuxuryRent,%20I'm%20interested%20in%20renting%20the%20Audi%20(BIA%201612%20AAE).%20Can%20you%20provide%20more%20information?"
    },
    xenia: {
        title: "Xenia th 2022",
        model: "61-20",
        image: "gambar/5.jpg",
        description: "Cocok untuk berkendara,dengan teman,keluarga",
        specs: [
            { icon: "fas fa-tachometer-alt", title: "Kecepatan", value: "250 km/jam" },
            { icon: "fas fa-gas-pump", title: "Bahan Bakar", value: "Pertalite" },
            { icon: "fas fa-cogs", title: "Transmission", value: "Manual" },
            { icon: "fas fa-user", title: "Tempat duduk", value: "6" },
            { icon: "fas fa-car", title: "Tipe", value: "Minibus" },
            { icon: "fas fa-calendar-alt", title: "Tahun", value: "2022" }
        ],
        whatsapp: "https://wa.me/6285374060051?text=Hi%20LuxuryRent,%20I'm%20interested%20in%20renting%20the%20Ford%20Mustang%20(61-20).%20Can%20you%20provide%20more%20information?"
    },
    innova: {
        title: "innova tahun 2023",
        model: "BAL493 BR",
        image: "gambar/5.jpg",
        description: "Cocok untuk berkendara,dengan teman,keluarga",
        specs: [
            { icon: "fas fa-tachometer-alt", title: "Kecepatan", value: "280 km/jam" },
            { icon: "fas fa-gas-pump", title: "Bahan Bakar", value: "solar" },
            { icon: "fas fa-cogs", title: "Transmission", value: "Matic" },
            { icon: "fas fa-user", title: "Tempat duduk", value: "6" },
            { icon: "fas fa-car", title: "Tipe", value: "Minibus" },
            { icon: "fas fa-calendar-alt", title: "Tahun", value: "2023" }
        ],
        whatsapp: "https://wa.me/6285374060051?text=Hi%20LuxuryRent,%20I'm%20interested%20in%20renting%20the%20Philips%20Luxury%20(BAL493%20BR).%20Can%20you%20provide%20more%20information?"
    }
};

// Modal functionality
const modal = document.getElementById('carModal');
const viewDetailsBtns = document.querySelectorAll('.view-details');
const closeModal = document.querySelector('.close-modal');
const closeModalBtn = document.querySelector('.close-modal-btn');

viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const carId = btn.getAttribute('data-car');
        const car = cars[carId];
        
        document.getElementById('modalCarImg').src = car.image;
        document.getElementById('modalCarTitle').textContent = car.title;
        document.getElementById('modalCarModel').textContent = car.model;
        document.getElementById('modalCarDescription').textContent = car.description;
        document.getElementById('modalWhatsappBtn').href = car.whatsapp;
        
        const specsContainer = document.getElementById('modalCarSpecs');
        specsContainer.innerHTML = '';
        
        car.specs.forEach(spec => {
            const specElement = document.createElement('div');
            specElement.className = 'modal-spec';
            specElement.innerHTML = `
                <i class="${spec.icon}"></i>
                <h4>${spec.title}</h4>
                <p>${spec.value}</p>
            `;
            specsContainer.appendChild(specElement);
        });
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
const carCards = document.querySelectorAll('.car-card');
const contactCards = document.querySelectorAll('.contact-card');

const observerOptions = {
    threshold: 0.1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

carCards.forEach(card => {
    observer.observe(card);
});

contactCards.forEach(card => {
    observer.observe(card);
});

// Make WhatsApp number configurable
const whatsappNumber = '6285374060051';
const whatsappLinks = document.querySelectorAll('[href*="wa.me"]');
    
whatsappLinks.forEach(link => {
    const currentHref = link.getAttribute('href');
    const newHref = currentHref.replace(/wa.me\/\d+/, `wa.me/${whatsappNumber}`);
    link.setAttribute('href', newHref);
});



