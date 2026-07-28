/**
 * وظيفة جلب مكون المشاركة وتفعيل أزراره
 */
async function loadShareComponent() {
    const containerId = 'share-placeholder';
    const htmlFile = 'share.html';
    const cssFile = 'share.css';

    try {
        // 1. استدعاء ملف CSS وحقنه في الرأس (Head)
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssFile;
        document.head.appendChild(link);

        // 2. جلب محتوى ملف HTML
        const response = await fetch(htmlFile);
        if (!response.ok) throw new Error('Failed to load share.html');
        
        const htmlContent = await response.text();
        document.getElementById(containerId).innerHTML = htmlContent;

        // 3. تفعيل روابط المشاركة برمجياً بعد تحميل الـ HTML
        activateShareLinks();

    } catch (error) {
        console.error('Error loading share components:', error);
    }
}

function activateShareLinks() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    const config = {
        'fb-share': `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        'x-share': `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        'in-share': `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        're-share': `https://www.reddit.com/submit?url=${url}&title=${title}`,
        'wa-share': `https://api.whatsapp.com/send?text=${title}%20${url}`,
        'pi-share': `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`,
        'em-share': `mailto:?subject=${title}&body=${url}`
    };

    // تطبيق الروابط على الأزرار المحملة
    for (const [id, link] of Object.entries(config)) {
        const btn = document.getElementById(id);
        if (btn) btn.href = link;
    }
}

// تشغيل الوظيفة فور تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadShareComponent);
document.addEventListener("DOMContentLoaded", function() {
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);

    // Facebook
    document.getElementById('fb-share').href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;

    // X (Twitter)
    document.getElementById('x-share').href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;

    // LinkedIn
    document.getElementById('in-share').href = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;

    // Reddit
    document.getElementById('re-share').href = `https://reddit.com/submit?url=${pageUrl}&title=${pageTitle}`;

    // WhatsApp
    document.getElementById('wa-share').href = `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`;

    // Pinterest
    document.getElementById('pi-share').href = `https://pinterest.com/pin/create/button/?url=${pageUrl}&description=${pageTitle}`;

    // Email
    document.getElementById('em-share').href = `mailto:?subject=${pageTitle}&body=Check out this link: ${pageUrl}`;
});

