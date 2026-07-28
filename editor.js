const editing = document.getElementById('editing');
const highlighting = document.getElementById('code-content');
const lineNumbers = document.getElementById('line-numbers');
const displayName = document.getElementById('display-name');
const langSelect = document.getElementById('lang-select');

// 1. نظام الاختصارات والإغلاق التلقائي للأقواس
editing.addEventListener('keydown', function(e) {
    const start = this.selectionStart;
    const end = this.selectionEnd;
    const value = this.value;

    // التعامل مع زر Tab والاختصارات
    if (e.key === 'Tab') {
        e.preventDefault();
        
        // استخراج الكلمة التي تسبق المؤشر مباشرة
        const wordStart = value.lastIndexOf(' ', start - 1) + 1;
        const wordStartNewLine = value.lastIndexOf('\n', start - 1) + 1;
        const actualStart = Math.max(wordStart, wordStartNewLine);
        const word = value.substring(actualStart, start);

        if (word === 'html5') {
            const boilerplate = `<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>Document</title>\n</head>\n<body>\n\t\n</body>\n</html>`;
            this.value = value.substring(0, actualStart) + boilerplate + value.substring(end);
            this.selectionStart = this.selectionEnd = actualStart + boilerplate.indexOf('<body>\n\t') + 8;
        } else if (word === 'cl') {
            const snip = `console.log();`;
            this.value = value.substring(0, actualStart) + snip + value.substring(end);
            this.selectionStart = this.selectionEnd = actualStart + 12; // وضع المؤشر داخل الأقواس
        } else {
            // مسافة Tab عادية
            this.value = value.substring(0, start) + "\t" + value.substring(end);
            this.selectionStart = this.selectionEnd = start + 1;
        }
        handleInput();
    }

    // الإغلاق التلقائي للأقواس وعلامات التنصيص
    const pairs = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'", '<': '>' };
    if (pairs[e.key]) {
        e.preventDefault();
        this.value = value.substring(0, start) + e.key + pairs[e.key] + value.substring(end);
        this.selectionStart = this.selectionEnd = start + 1;
        handleInput();
    }
});

function handleInput() {
    let text = editing.value;
    
    // تحويل الرموز الخاصة لتجنب تداخل الـ HTML
    let safe = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    const lang = langSelect.value;
    if (lang === 'html') safe = highlightHTML(safe);
    else if (lang === 'css') safe = highlightCSS(safe);
    else if (lang === 'js') safe = highlightJS(safe);

    highlighting.innerHTML = safe + (text.endsWith('\n') ? "\n " : "");
    
    // تحديث أرقام الأسطر باستخدام \n بدلاً من <br> لتزامن مثالي
    const lines = text.split('\n').length;
    lineNumbers.innerHTML = Array.from({length: lines}, (_, i) => i + 1).join('\n');
    
    document.getElementById('char-count').innerText = text.length + " Chars";
    
    handleScroll();
}

// محرك تلوين HTML (لون واحد)
function highlightHTML(text) {
    return text.replace(/(&lt;\/?[\s\S]*?&gt;)/g, '<span class="hl-html">$1</span>');
}

// محرك تلوين CSS (12 لون)
function highlightCSS(text) {
    text = text.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="hl-css-comment">$1</span>');
    text = text.replace(/('.*?'|".*?")/g, '<span class="hl-css-string">$1</span>');
    text = text.replace(/(@[\w-]+)/g, '<span class="hl-css-at">$1</span>');
    text = text.replace(/(--[\w-]+)/g, '<span class="hl-css-var">$1</span>');
    text = text.replace(/(!important)/g, '<span class="hl-css-important">$1</span>');
    text = text.replace(/(:hover|:active|:focus|::before|::after)/g, '<span class="hl-css-pseudo">$1</span>');
    text = text.replace(/([a-zA-Z0-9_-]+)(?=\s*:)/g, '<span class="hl-css-prop">$1</span>'); // خصائص
    text = text.replace(/(\.[a-zA-Z0-9_-]+|#[a-zA-Z0-9_-]+)/g, '<span class="hl-css-selector">$1</span>'); // محددات
    text = text.replace(/(:)([^;{]+)(;)/g, function(match, p1, p2, p3) {
        let val = p2.replace(/(\d*\.?\d+)(px|em|rem|%|vh|vw|s)/g, '<span class="hl-css-num">$1</span><span class="hl-css-unit">$2</span>');
        return p1 + '<span class="hl-css-val">' + val + '</span>' + p3;
    });
    text = text.replace(/([{}:;])/g, '<span class="hl-css-punct">$1</span>');
    return text;
}

// محرك تلوين JS (8 ألوان)
function highlightJS(text) {
    text = text.replace(/(\/\/.*|\/\*[\s\S]*?\*\/)/g, '<span class="hl-js-comment">$1</span>');
    text = text.replace(/('.*?'|".*?"|`.*?`)/g, '<span class="hl-js-string">$1</span>');
    text = text.replace(/\b(\d+)\b/g, '<span class="hl-js-num">$1</span>');
    text = text.replace(/\b(true|false)\b/g, '<span class="hl-js-bool">$1</span>');
    text = text.replace(/\b(let|const|var|function|return|if|else|for|while|class|import|export|new|this)\b/g, '<span class="hl-js-keyword">$1</span>');
    text = text.replace(/\b([a-zA-Z_$][0-9a-zA-Z_$]*)(?=\s*\()/g, '<span class="hl-js-func">$1</span>');
    text = text.replace(/([+\-*/%=!|]+|&lt;|&gt;|&amp;)/g, '<span class="hl-js-op">$1</span>');
    text = text.replace(/([{}()[\].,;])/g, '<span class="hl-js-punct">$1</span>');
    return text;
}

// تزامن التمرير بين طبقة التعديل وطبقة التلوين
function handleScroll() {
    const high = document.getElementById('highlighting');
    high.scrollTop = editing.scrollTop;
    high.scrollLeft = editing.scrollLeft;
    lineNumbers.scrollTop = editing.scrollTop;
}

// دوال التحكم بالملفات والمظهر
function handleUpload(event) {
    const file = event.target.files[0];
    if (file) {
        displayName.innerText = file.name;
        // تغيير محدد اللغة بناءً على امتداد الملف المرفوع
        const ext = file.name.split('.').pop().toLowerCase();
        if(ext === 'html' || ext === 'css' || ext === 'js') langSelect.value = ext;
        const reader = new FileReader();
        reader.onload = (e) => { editing.value = e.target.result; handleInput(); };
        reader.readAsText(file);
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
}

function openModal() {
    document.getElementById('modal').style.display='block';
    document.getElementById('overlay').style.display='block';
}

function closeModal() {
    document.getElementById('modal').style.display='none';
    document.getElementById('overlay').style.display='none';
}

function download() {
    const name = document.getElementById('filename').value || "index";
    const ext = document.getElementById('ext').value;
    const blob = new Blob([editing.value], {type: 'text/plain'});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${name}.${ext}`;
    a.click();
    displayName.innerText = `${name}.${ext}`;
    closeModal();
}

function togglePreview() {
    const frame = document.getElementById('preview-frame');
    const view = document.getElementById('editor-view');
    if(frame.style.display === 'none' || frame.style.display === '') {
        frame.style.display = 'block'; view.style.display = 'none';
        frame.srcdoc = editing.value;
    } else {
        frame.style.display = 'none'; view.style.display = 'flex';
    }
}

function exitEditor() { if(confirm("Exit and lose changes?")) window.close(); }

// تحديث التلوين عند تغيير اللغة من القائمة
langSelect.addEventListener('change', handleInput);

// تهيئة المحرر عند الفتح
handleInput();
