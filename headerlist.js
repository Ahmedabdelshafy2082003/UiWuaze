function loadHeader() {
    fetch('headerlist.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // تشغيل الوظائف بعد التأكد من أن الهيدر أصبح موجوداً في الصفحة
            initMobileMenu();
            setupDropdowns(); 
        })
        .catch(err => console.error('Error loading header:', err));
}

function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');

    if (btn && nav) {
        btn.onclick = null; // تنظيف أي أحداث سابقة لتجنب التكرار
        btn.addEventListener('click', () => {
            nav.classList.toggle('active');
            const spans = btn.querySelectorAll('span');
            const isActive = nav.classList.contains('active');
            
            spans[0].style.transform = isActive ? 'rotate(45deg) translate(5px, 6px)' : 'none';
            spans[1].style.opacity = isActive ? '0' : '1';
            spans[2].style.transform = isActive ? 'rotate(-45deg) translate(7px, -8px)' : 'none';
        });
    }
}

function setupDropdowns() {
    // نضع الكود المخصص للقوائم المنسدلة هنا
    const toolsButtons = document.querySelectorAll('.tools-btn');
    
    toolsButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                
                const parent = this.parentElement;
                parent.classList.toggle('mobile-open');
                
                // تدوير السهم
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = parent.classList.contains('mobile-open') 
                        ? 'rotate(180deg)' 
                        : 'rotate(0deg)';
                }
                console.log("Mobile dropdown toggled");
            }
        });
    });
}
function loadHeader() {
    fetch('headerlist.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            initMobileMenu();
            setupDropdowns();
            highlightCurrentPage(); // الدالة الجديدة هنا
        })
        .catch(err => console.error('Error loading header:', err));
}

function highlightCurrentPage() {
    // الحصول على مسار الصفحة الحالي (مثال: /color أو /button)
    const currentPath = window.location.pathname;
    
    // البحث عن جميع الروابط داخل الـ dropdown
    const dropdownLinks = document.querySelectorAll('.tools-dropdown a');
    
    dropdownLinks.forEach(link => {
        // الحصول على الرابط من خاصية href أو data-page
        const linkPath = link.getAttribute('href');
        
        // التحقق مما إذا كان المسار الحالي يحتوي على مسار الرابط
        if (currentPath.includes(linkPath) && linkPath !== '/') {
            link.classList.add('active');
            
            // اختيارياً: تلوين الزر الرئيسي (Tools) ليعرف المستخدم أن هناك صفحة نشطة بالداخل
            const toolsBtn = document.querySelector('.tools-btn');
            if (toolsBtn) {
                toolsBtn.style.color = '#8c52ff'; 
            }
        }
    });
}

// البدء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadHeader);
