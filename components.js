const navbar = `
<nav class="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <div class="flex-shrink-0 flex items-center cursor-pointer" onclick="window.location.href='index.html'">
        <span class="text-white text-2xl font-bold tracking-widest uppercase">BMW <span class="text-blue-500">M</span><span class="text-red-600">4</span></span>
      </div>
      <div class="hidden lg:flex space-x-6 items-center">
        <a href="index.html" class="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Home</a>
        <a href="overview.html" class="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Overview</a>
        <a href="performance.html" class="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Performance</a>
        <a href="design.html" class="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Design</a>
        <a href="technology.html" class="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Technology</a>
        <a href="gallery.html" class="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Gallery</a>
        <a href="models.html" class="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Models</a>
        <a href="specifications.html" class="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Specs</a>
        <a href="contact.html" class="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Contact</a>
        <a href="contact.html" class="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all uppercase text-sm font-semibold tracking-wider">Explore M4</a>
      </div>
      <div class="lg:hidden flex items-center">
        <button id="mobile-menu-btn" class="text-white focus:outline-none hover:text-blue-500 transition-colors">
          <i data-lucide="menu" class="w-8 h-8"></i>
        </button>
      </div>
    </div>
  </div>
  <div id="mobile-menu" class="hidden lg:hidden bg-black/95 backdrop-blur-xl absolute w-full border-b border-white/10 shadow-2xl">
    <div class="px-6 pt-4 pb-8 space-y-4">
        <a href="index.html" class="block text-white hover:text-blue-500 uppercase text-lg font-semibold tracking-wider transition-colors">Home</a>
        <a href="overview.html" class="block text-white hover:text-blue-500 uppercase text-lg font-semibold tracking-wider transition-colors">Overview</a>
        <a href="performance.html" class="block text-white hover:text-blue-500 uppercase text-lg font-semibold tracking-wider transition-colors">Performance</a>
        <a href="design.html" class="block text-white hover:text-blue-500 uppercase text-lg font-semibold tracking-wider transition-colors">Design</a>
        <a href="technology.html" class="block text-white hover:text-blue-500 uppercase text-lg font-semibold tracking-wider transition-colors">Technology</a>
        <a href="gallery.html" class="block text-white hover:text-blue-500 uppercase text-lg font-semibold tracking-wider transition-colors">Gallery</a>
        <a href="models.html" class="block text-white hover:text-blue-500 uppercase text-lg font-semibold tracking-wider transition-colors">Models</a>
        <a href="specifications.html" class="block text-white hover:text-blue-500 uppercase text-lg font-semibold tracking-wider transition-colors">Specifications</a>
        <a href="contact.html" class="block text-white hover:text-blue-500 uppercase text-lg font-semibold tracking-wider transition-colors">Contact</a>
    </div>
  </div>
</nav>
`;

const footer = `
<footer class="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
      <div class="col-span-1 md:col-span-1">
        <span class="text-white text-3xl font-bold tracking-widest uppercase mb-4 block">BMW <span class="text-blue-500">M</span><span class="text-red-600">4</span></span>
        <p class="text-gray-400 text-sm mt-4 leading-relaxed">BMW M4 — Performance without compromise. Born on the track, built for the road.</p>
      </div>
      <div>
        <h4 class="text-white font-semibold uppercase tracking-wider mb-6">Discover</h4>
        <ul class="space-y-3">
          <li><a href="overview.html" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Overview</a></li>
          <li><a href="performance.html" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Performance</a></li>
          <li><a href="design.html" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Design</a></li>
          <li><a href="technology.html" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Technology</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold uppercase tracking-wider mb-6">Explore</h4>
        <ul class="space-y-3">
          <li><a href="gallery.html" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Gallery</a></li>
          <li><a href="models.html" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Models</a></li>
          <li><a href="specifications.html" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Specifications</a></li>
          <li><a href="contact.html" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Build Your M4</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold uppercase tracking-wider mb-6">Legal</h4>
        <ul class="space-y-3">
          <li><a href="#" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Privacy Policy</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Terms of Service</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p class="text-gray-500 text-xs text-center md:text-left max-w-2xl">
        &copy; 2026 BMW M4 Concept Showcase. This is a conceptual design, not an official BMW website. Specifications may vary depending on model year, market, equipment and configuration.
      </p>
      <div class="flex space-x-6 mt-6 md:mt-0">
        <a href="#" class="text-gray-400 hover:text-white transition-colors"><i data-lucide="instagram" class="w-5 h-5"></i></a>
        <a href="#" class="text-gray-400 hover:text-white transition-colors"><i data-lucide="twitter" class="w-5 h-5"></i></a>
        <a href="#" class="text-gray-400 hover:text-white transition-colors"><i data-lucide="youtube" class="w-5 h-5"></i></a>
      </div>
    </div>
  </div>
</footer>
`;

// Inject components and initialize global scripts
document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('navbar-container');
  if (navContainer) navContainer.innerHTML = navbar;
  
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) footerContainer.innerHTML = footer;
  
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if(mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  if(typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage || (currentPage === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.remove('text-gray-300');
      link.classList.add('text-blue-500');
    }
  });

  // Smooth page transitions
  document.body.classList.add('opacity-0');
  setTimeout(() => {
    document.body.classList.remove('opacity-0');
    document.body.classList.add('opacity-100', 'transition-opacity', 'duration-500');
  }, 50);

  // Scroll animations with GSAP ScrollTrigger if available
  if(typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.animate-on-scroll').forEach(element => {
      gsap.fromTo(element, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    gsap.utils.toArray('.animate-fade-in').forEach(element => {
      gsap.fromTo(element, 
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }

  // Inject Scroll Progress Indicator and Back To Top Button
  const globalElements = `
    <div class="fixed top-0 left-0 h-1 bg-blue-600 z-[60] transition-all duration-100 ease-out" id="scroll-progress" style="width: 0%;"></div>
    <button id="back-to-top" class="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg shadow-blue-600/30 opacity-0 invisible transition-all duration-300 z-50 hover:bg-blue-500 hover:scale-110">
        <i data-lucide="arrow-up" class="w-6 h-6"></i>
    </button>
  `;
  document.body.insertAdjacentHTML('beforeend', globalElements);
  
  if(typeof lucide !== 'undefined') lucide.createIcons();

  const scrollProgress = document.getElementById('scroll-progress');
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    // Scroll progress
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if(scrollProgress) scrollProgress.style.width = scrolled + "%";

    // Back to top button
    if (winScroll > 500) {
        backToTop.classList.remove('opacity-0', 'invisible');
        backToTop.classList.add('opacity-100', 'visible');
    } else {
        backToTop.classList.add('opacity-0', 'invisible');
        backToTop.classList.remove('opacity-100', 'visible');
    }
  });

  if(backToTop) {
      backToTop.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
});
