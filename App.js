// Master State Store
let state = {
    components: []
};

// Component Registry: Defines the blueprints for your elements
const componentLibrary = {
    title: { tag: 'h2', content: 'New Title', style: { fontSize: '32px', color: '#000' } },
    button: { tag: 'button', content: 'Click Me', style: { padding: '10px 20px', backgroundColor: '#6c05eb', color: '#fff' } },
    text: { tag: 'p', content: 'Edit this text...', style: { fontSize: '16px', color: '#000' } }
};

// Injection Module
function addComponent(type) {
    const id = `el-${Date.now()}`;
    const base = componentLibrary[type];
    
    const newComp = {
        id,
        type,
        x: 50, y: 50,
        content: base.content,
        style: { ...base.style }
    };
    
    state.components.push(newComp);
    renderCanvas();
}

// Rendering Engine: Rebuilds the UI from the State
function renderCanvas() {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = '';
    
    state.components.forEach(comp => {
        const el = document.createElement(componentLibrary[comp.type].tag);
        el.id = comp.id;
        el.className = 'element';
        el.style.position = 'absolute';
        el.style.left = `${comp.x}px`;
        el.style.top = `${comp.y}px`;
        el.innerText = comp.content;
        
        Object.assign(el.style, comp.style);
        
        // Interaction: Attach drag event
        el.onmousedown = (e) => startDragging(e, comp.id);
        
        canvas.appendChild(el);
    });
}
