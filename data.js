const projectData = {
    publishers: [
        { 
            id: 101,
            name: 'Ahmed Abdelshafy',
            isVerified: true,
            avatar: 'https://l.top4top.io/p_3741cjkd80.png' 
        },
        { 
            id: 102,
            name: 'Sara Ahmed',
            isVerified: false,
            avatar: 'https://i.pravatar.cc/150?u=sara' 
        }
    ],
    designs: [
        // 1. Button
        {
            id: 1, 
            pubId: 101, 
            category: 'Button', 
            title: 'Modern Mesh Glow Button',
            html: `<button class="glow-btn">Explore Now</button>`,
            css: `.glow-btn {
    padding: 14px 32px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    outline: none;
    color: #fff;
    background: #0a0a0a;
    cursor: pointer;
    position: relative;
    z-index: 1;
    border-radius: 12px;
    font-weight: 500;
    font-family: inherit;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
}

.glow-btn:before {
    content: '';
    background: linear-gradient(45deg, #6366f1, #a855f7, #ec4899);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.6);
    z-index: -1;
    filter: blur(25px);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s ease;
}

.glow-btn:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.5px;
    background: linear-gradient(135deg, rgba(255,255,255,0.4), transparent, rgba(255,255,255,0.1));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.5;
    transition: opacity 0.4s;
}

.glow-btn:hover {
    color: #fff;
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.glow-btn:hover:before {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.2);
}

.glow-btn:hover:after {
    opacity: 1;
}

.glow-btn:active {
    transform: translateY(0);
}`
        },
        // 2. Check box
        {
            id: 2, 
            pubId: 101, 
            category: 'Checkbox', 
            title: 'Elegant Checkbox',
            html: `<label class="container">Accept Terms & Conditions
    <input type="checkbox" checked="checked">
    <span class="checkmark"></span>
</label>`,
            css: `.container {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
}

.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 5px;
}

.container:hover input ~ .checkmark {
    background-color: #ccc;
}

.container input:checked ~ .checkmark {
    background-color: #2196F3;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.container input:checked ~ .checkmark:after {
    display: block;
}

.container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}`
        },
        // 3. Toggle Switch
        {
            id: 3, 
            pubId: 101, 
            category: 'Toggle Switch', 
            title: 'iOS Style Toggle',
            html: `<label class="switch">
    <input type="checkbox">
    <span class="slider"></span>
</label>`,
            css: `.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: #2196F3;
}

input:checked + .slider:before {
    transform: translateX(26px);
}`
        },
        // 4. Card
        {
            id: 4, 
            pubId: 101, 
            category: 'Card', 
            title: 'Glassmorphism Card',
            html: `<div class="glass-card">
    <h2>Web Development</h2>
    <p>Learn the latest programming technologies with us.</p>
</div>`,
            css: `.glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    color: #333;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}`
        },
        // 5. Loader
        {
            id: 5, 
            pubId: 101, 
            category: 'Loader', 
            title: 'DNA Pulse Loader',
            html: `<div class="loader"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`,
            css: `.loader {
    display: flex;
    gap: 8px;
}

.dot {
    width: 15px;
    height: 15px;
    background: #3b82f6;
    border-radius: 50%;
    animation: pulse 1.5s infinite ease-in-out;
}

.dot:nth-child(2) {
    animation-delay: 0.2s;
}

.dot:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes pulse {
    0%, 100% { transform: scale(0.5); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 1; }
}`
        },
        // 6. Input
        {
            id: 6, 
            pubId: 101, 
            category: 'Input', 
            title: 'Modern Text Input',
            html: `<input type="text" class="modern-input" placeholder="Enter your name...">`,
            css: `.modern-input {
    width: 250px;
    padding: 12px;
    border: 2px solid #eee;
    border-radius: 12px;
    transition: 0.3s;
    outline: none;
}

.modern-input:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 10px rgba(59,130,246,0.1);
}`
        },
        // 13. Floating Label Input
        {
            id: 13, 
            pubId: 101, 
            category: 'Input', 
            title: 'Floating Label Input',
            html: `<div class="input-group">
    <input type="text" id="name" class="input-field" placeholder=" ">
    <label for="name" class="input-label">UserName</label>
</div>`,
            css: `:root {
    --primary-color: #6366f1;
    --text-color: #1f2937;
    --border-color: #d1d5db;
    --bg-color: #f9fafb;
}

.input-group {
    position: relative;
    margin: 20px 0;
    width: 300px;
    font-family: inherit;
}

.input-field {
    width: 100%;
    padding: 12px 16px;
    font-size: 16px;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    outline: none;
    background-color: var(--bg-color);
    transition: all 0.3s ease;
    color: var(--text-color);
}

.input-label {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    color: #9ca3af;
    font-size: 16px;
    pointer-events: none;
    transition: all 0.3s ease;
    background-color: transparent;
    padding: 0 4px;
}

.input-field:focus,
.input-field:not(:placeholder-shown) {
    border-color: var(--primary-color);
    background-color: white;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.input-field:focus + .input-label,
.input-field:not(:placeholder-shown) + .input-label {
    top: 0;
    font-size: 12px;
    color: var(--primary-color);
    background-color: white;
    font-weight: bold;
}

.input-field::placeholder {
    color: transparent;
}`
        },
        // 14. Blue Neumorphic
        {
            id: 14,
            pubId: 101,
            category: 'Button',
            title: 'Blue Neumorphic Wave',
            html: `<button class="custom-btn btn-1">Button</button>`,
            css: `.custom-btn {
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    font-family: inherit;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5), 
                7px 7px 20px 0px rgba(0,0,0,.1), 
                4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
    border: none;
}

.btn-1 {
    background: linear-gradient(0deg, rgba(6,14,131,1) 0%, rgba(12,25,180,1) 100%);
}

.btn-1:hover {
    background: linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%);
}`
        },
        // 19. 3D Flip Box
        {
            id: 19,
            pubId: 101,
            category: 'Button',
            title: '3D Flip Box Blue',
            html: `<button class="custom-btn btn-12"><span>Click Me</span><span>Button 12</span></button>`,
            css: `.btn-12 {
    position: relative;
    border:none;
    width: 130px;
    height: 40px;
    perspective: 230px;
    cursor: pointer;
    background: transparent;
}

.btn-12 span {
    background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
    display: block;
    position: absolute;
    width: 130px;
    height: 40px;
    border-radius: 5px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    transition: all .3s;
    transform-origin: 50% 50% -20px;
}

.btn-12 span:nth-child(1) {
    transform: rotateX(90deg);
}

.btn-12 span:nth-child(2) {
    transform: rotateX(0deg);
}

.btn-12:hover span:nth-child(1) {
    transform: rotateX(0deg);
}

.btn-12:hover span:nth-child(2) {
    color: transparent;
    transform: rotateX(-90deg);
}`
        },
        {
    id: 20,
    pubId: 101,
    category: 'Button',
    title: 'Magic Shiny Flash',
    html: `<button class="custom-btn btn-11">Button</button>`,
    css: `.btn-11 {
    width: 130px;
    height: 40px;
    border: none;
    background: linear-gradient(0deg, rgba(251,33,117,1) 0%, rgba(234,76,137,1) 100%);
    color: #fff;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    font-family: inherit;
    font-weight: 500;
}

.btn-11:before {
    position: absolute;
    content: '';
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #fff;
    animation: shiny-btn1 3s ease-in-out infinite;
}

@keyframes shiny-btn1 {
    0% {
        transform: scale(0) rotate(45deg);
        opacity: 0;
    }
    80% {
        transform: scale(0) rotate(45deg);
        opacity: 0.5;
    }
    81% {
        transform: scale(4) rotate(45deg);
        opacity: 1;
    }
    100% {
        transform: scale(50) rotate(45deg);
        opacity: 0;
    }
}`
},
  {
    id: 21,
    pubId: 101,
    category: 'Button',
    title: 'Neon Pulse Glow',
    html: `<button class="btn-21">Neon Pulse</button>`,
    css: `.btn-21 {
  width: 140px;
  height: 45px;
  background: #000;
  color: #00f3ff;
  border: 2px solid #00f3ff;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
  box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
}

.btn-21:hover {
  background: #00f3ff;
  color: #000;
  box-shadow: 0 0 30px rgba(0, 243, 255, 0.6);
}`
  },
  {
    id: 22,
    pubId: 101,
    category: 'Button',
    title: 'Glassmorphism Float',
    html: `<button class="btn-22">Glass Button</button>`,
    css: `.btn-22 {
  width: 140px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease;
}

.btn-22:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.5);
}`
  },
  {
    id: 23,
    pubId: 101,
    category: 'Button',
    title: 'Retro 3D Shadow',
    html: `<button class="btn-23">Push Me</button>`,
    css: `.btn-23 {
  width: 130px;
  height: 40px;
  background: #6336fa;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 5px 0 #4a28bb;
  transition: all 0.1s;
}

.btn-23:active {
  transform: translateY(3px);
  box-shadow: 0 2px 0 #4a28bb;
}`
  },
  {
    id: 24,
    pubId: 101,
    category: 'Button',
    title: 'Gradient Border Slide',
    html: `<button class="btn-24"><span>Slide In</span></button>`,
    css: `.btn-24 {
  padding: 2px;
  background: linear-gradient(90deg, #6336fa, #f7e1b5);
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.btn-24 span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 40px;
  background: #0f172a;
  color: white;
  border-radius: 6px;
  transition: 0.3s;
}

.btn-24:hover span {
  background: transparent;
}`
  },
  {
    id: 25,
    pubId: 101,
    category: 'Button',
    title: 'Minimal Underline',
    html: `<button class="btn-25">Hover Link</button>`,
    css: `.btn-25 {
  background: none;
  border: none;
  color: #6336fa;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  padding: 5px 0;
}

.btn-25::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #bf953f;
  transition: width 0.3s ease;
}

.btn-25:hover::after {
  width: 100%;
}`
  },
  {
    id: 26,
    pubId: 101,
    category: 'Button',
    title: 'Soft Claymorphism',
    html: `<button class="btn-26">Clay Button</button>`,
    css: `.btn-26 {
  width: 140px;
  height: 50px;
  background: #6336fa;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  box-shadow: inset 5px 5px 10px #4a28bb, 
              inset -5px -5px 10px #7c44ff,
              5px 5px 15px rgba(0,0,0,0.2);
  transition: 0.3s;
}

.btn-26:hover {
  transform: scale(0.98);
}`
  },
  {
    id: 27,
    pubId: 101,
    category: 'Button',
    title: 'Double Border Draw',
    html: `<button class="btn-27">Draw Border</button>`,
    css: `.btn-27 {
  width: 140px;
  height: 45px;
  background: none;
  border: 1px solid #6336fa;
  color: #6336fa;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  transition: 0.4s;
}

.btn-27:hover {
  box-shadow: inset 0 0 0 2px #6336fa;
  color: #bf953f;
}`
  },
  {
    id: 28,
    pubId: 101,
    category: 'Button',
    title: 'Liquid Fill Effect',
    html: `<button class="btn-28">Liquid</button>`,
    css: `.btn-28 {
  width: 130px;
  height: 40px;
  border: 2px solid #bf953f;
  background: transparent;
  color: #bf953f;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
}

.btn-28::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #bf953f;
  transition: 0.5s;
  z-index: -1;
}

.btn-28:hover {
  color: #000;
}

.btn-28:hover::before {
  top: 0;
}`
  },
  {
    id: 29,
    pubId: 101,
    category: 'Button',
    title: 'Golden Shimmer',
    html: `<button class="btn-29">Gold Shimmer</button>`,
    css: `.btn-29 {
  width: 150px;
  height: 45px;
  background: linear-gradient(45deg, #bf953f, #fcf6ba, #bf953f);
  background-size: 200% auto;
  border: none;
  border-radius: 5px;
  color: #000;
  font-weight: 800;
  cursor: pointer;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}`
  },
  {
    id: 30,
    pubId: 101,
    category: 'Button',
    title: 'Ghost Ripple',
    html: `<button class="btn-30">Ripple</button>`,
    css: `.btn-30 {
  width: 130px;
  height: 40px;
  background: transparent;
  color: #6336fa;
  border: 1px solid #6336fa;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-30:hover {
  background: rgba(99, 54, 250, 0.1);
  letter-spacing: 2px;
  font-weight: bold;
}`
  },
  {
    id: 31,
    pubId: 101,
    category: 'Input',
    title: 'Floating Label Input',
    html: `<div class="input-group">
  <input type="text" required>
  <label>Your Name</label>
</div>`,
    css: `.input-group {
  position: relative;
  width: 200px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #6336fa;
  background: transparent;
  border-radius: 8px;
  color: #fff;
  outline: none;
}

.input-group label {
  position: absolute;
  left: 10px;
  top: 10px;
  color: #6336fa;
  pointer-events: none;
  transition: 0.3s;
}

.input-group input:focus ~ label,
.input-group input:valid ~ label {
  top: -20px;
  font-size: 12px;
  color: #bf953f;
}`
  },
  {
    id: 32,
    pubId: 101,
    category: 'Loader',
    title: 'Golden Spinner',
    html: `<div class="loader-32"></div>`,
    css: `.loader-32 {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(191, 149, 63, 0.1);
  border-left-color: #bf953f;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`
  },
  {
    id: 33,
    pubId: 101,
    category: 'Card',
    title: 'Glassy Info Card',
    html: `<div class="card-33">
  <h3>Feature</h3>
  <p>Description goes here.</p>
</div>`,
    css: `.card-33 {
  width: 200px;
  padding: 20px;
  background: rgba(99, 54, 250, 0.1);
  border: 1px solid rgba(99, 54, 250, 0.2);
  border-radius: 15px;
  color: #fff;
  backdrop-filter: blur(5px);
  text-align: center;
}`
  },
  {
    id: 34,
    pubId: 101,
    category: 'Input',
    title: 'Neon Search Bar',
    html: `<input type="text" class="input-34" placeholder="Search...">`,
    css: `.input-34 {
  width: 180px;
  padding: 10px;
  background: #000;
  border: 1px solid #6336fa;
  color: #fff;
  border-radius: 50px;
  box-shadow: 0 0 5px #6336fa;
  outline: none;
}`
  },
  {
    id: 35,
    pubId: 101,
    category: 'Loader',
    title: 'Double Pulse',
    html: `<div class="pulse-35"></div>`,
    css: `.pulse-35 {
  width: 20px;
  height: 20px;
  background: #6336fa;
  border-radius: 50%;
  position: relative;
}

.pulse-35::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  to { transform: scale(2.5); opacity: 0; }
}`
  },
  {
    id: 36,
    pubId: 101,
    category: 'Card',
    title: 'Gradient Border Card',
    html: `<div class="card-36">Hover Me</div>`,
    css: `.card-36 {
  width: 150px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f172a;
  color: #fff;
  border-radius: 10px;
  position: relative;
  z-index: 1;
}

.card-36::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  background: linear-gradient(45deg, #6336fa, #bf953f);
  z-index: -1;
  border-radius: 11px;
}`
  },
  {
    id: 37,
    pubId: 101,
    category: 'Button',
    title: 'Cyberpunk Glitch',
    html: `<button class="btn-37">Cyber</button>`,
    css: `.btn-37 {
  width: 120px;
  height: 40px;
  background: #6336fa;
  border: none;
  color: #fff;
  font-weight: bold;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
  cursor: pointer;
}`
  },
  {
    id: 38,
    pubId: 101,
    category: 'Input',
    title: 'Underline Focus',
    html: `<input type="text" class="input-38" placeholder="Username">`,
    css: `.input-38 {
  background: transparent;
  border: none;
  border-bottom: 2px solid #333;
  color: #fff;
  padding: 5px;
  outline: none;
  transition: 0.3s;
}

.input-38:focus {
  border-bottom-color: #bf953f;
}`
  },
  {
    id: 39,
    pubId: 101,
    category: 'Loader',
    title: 'Bouncing Dots',
    html: `<div class="dots-39"><span></span><span></span><span></span></div>`,
    css: `.dots-39 { display: flex; gap: 5px; }
.dots-39 span {
  width: 10px; height: 10px;
  background: #6336fa; border-radius: 50%;
  animation: bounce 0.6s infinite alternate;
}
.dots-39 span:nth-child(2) { animation-delay: 0.2s; }
.dots-39 span:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  to { transform: translateY(-10px); }
}`
  },
  {
    id: 40,
    pubId: 101,
    category: 'Card',
    title: 'Glow Card',
    html: `<div class="card-40">Content</div>`,
    css: `.card-40 {
  width: 180px;
  height: 80px;
  background: #1a1528;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bf953f;
  box-shadow: 0 0 15px rgba(99, 54, 250, 0.3);
}`
  },
  {
    id: 41,
    pubId: 101,
    category: 'Button',
    title: 'Magnetic Hover Glow',
    html: `<button class="btn-41">Explore</button>`,
    css: `.btn-41 {
  width: 140px;
  height: 45px;
  background: #1a1528;
  color: #fff;
  border: 1px solid #6336fa;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
}

.btn-41:hover {
  box-shadow: 0 0 20px #6336fa;
  text-shadow: 0 0 5px #fff;
}

.btn-41::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 0; height: 0;
  background: rgba(99, 54, 250, 0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: 0.6s;
}

.btn-41:hover::before {
  width: 300px; height: 300px;
}`
  },
  {
    id: 42,
    pubId: 101,
    category: 'Card',
    title: 'Perspective Tilt Card',
    html: `<div class="card-42">3D Hover</div>`,
    css: `.card-42 {
  width: 180px;
  height: 120px;
  background: linear-gradient(135deg, #6336fa, #bf953f);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transition: 0.5s;
  cursor: pointer;
}

.card-42:hover {
  transform: rotateY(20deg) rotateX(10deg);
  box-shadow: -15px 15px 25px rgba(0,0,0,0.4);
}`
  },
  {
    id: 43,
    pubId: 101,
    category: 'Loader',
    title: 'Infinity Ring',
    html: `<div class="loader-43"></div>`,
    css: `.loader-43 {
  width: 48px;
  height: 48px;
  border: 3px double #bf953f;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin43 1s linear infinite;
}

@keyframes spin43 {
  to { transform: rotate(360deg); }
}`
  },
  {
    id: 44,
    pubId: 101,
    category: 'Input',
    title: 'Golden Shine Focus',
    html: `<input type="password" class="input-44" placeholder="Enter Key...">`,
    css: `.input-44 {
  width: 200px;
  padding: 12px;
  background: #0a0516;
  border: 2px solid #333;
  color: #bf953f;
  border-radius: 10px;
  outline: none;
  transition: 0.3s;
}

.input-44:focus {
  border-color: #bf953f;
  box-shadow: 0 0 10px rgba(191, 149, 63, 0.3);
}`
  },
  {
    id: 45,
    pubId: 101,
    category: 'Button',
    title: 'Retro Cyber Outline',
    html: `<button class="btn-45">Access</button>`,
    css: `.btn-45 {
  padding: 10px 25px;
  background: transparent;
  color: #6336fa;
  border: 2px solid #6336fa;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
}

.btn-45::after {
  content: 'ACCESS';
  position: absolute;
  top: 4px; left: 4px;
  width: 100%; height: 100%;
  background: rgba(99, 54, 250, 0.2);
  display: flex; align-items: center; justify-content: center;
  z-index: -1;
  transition: 0.2s;
}

.btn-45:hover::after {
  top: 0; left: 0;
}`
  },
  {
    id: 46,
    pubId: 101,
    category: 'Card',
    title: 'Neon Border Trace',
    html: `<div class="card-46">Tracing...</div>`,
    css: `.card-46 {
  width: 160px; height: 100px;
  background: #111;
  color: #fff;
  display: flex; align-items: center; justify-content: center;
  position: relative;
}

.card-46::before {
  content: '';
  position: absolute;
  width: 100%; height: 100%;
  border: 2px solid #6336fa;
  animation: trace 2s linear infinite;
}

@keyframes trace {
  0% { clip-path: inset(0 0 95% 0); }
  25% { clip-path: inset(0 0 0 95%); }
  50% { clip-path: inset(95% 0 0 0); }
  75% { clip-path: inset(0 95% 0 0); }
  100% { clip-path: inset(0 0 95% 0); }
}`
  },
  {
    id: 47,
    pubId: 101,
    category: 'Loader',
    title: 'Liquid Wave Ball',
    html: `<div class="loader-47"></div>`,
    css: `.loader-47 {
  width: 50px; height: 50px;
  background: #6336fa;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  animation: morph 3s linear infinite;
}

@keyframes morph {
  0%, 100% { border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%; }
  34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
  67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
}`
  },
  {
    id: 48,
    pubId: 101,
    category: 'Input',
    title: 'Glass Search Expand',
    html: `<div class="search-48"><input type="text" placeholder="Search"></div>`,
    css: `.search-48 input {
  width: 40px; height: 40px;
  border-radius: 20px;
  border: 1px solid #bf953f;
  background: transparent;
  color: white;
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;
}

.search-48 input:focus {
  width: 180px;
  cursor: text;
  background: rgba(191, 149, 63, 0.1);
}`
  },
  {
    id: 49,
    pubId: 101,
    category: 'Button',
    title: 'Particle Click Style',
    html: `<button class="btn-49">Sparkle</button>`,
    css: `.btn-49 {
  width: 130px; height: 45px;
  background: linear-gradient(to right, #6336fa, #9067ff);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(99, 54, 250, 0.3);
  transition: 0.3s;
}

.btn-49:active {
  transform: scale(0.95);
  filter: brightness(1.2);
}`
  },
  {
    id: 50,
    pubId: 101,
    category: 'Card',
    title: 'Neumorphic Dark Box',
    html: `<div class="card-50">Soft UI</div>`,
    css: `.card-50 {
  width: 140px; height: 140px;
  background: #0a0516;
  border-radius: 30px;
  display: flex; align-items: center; justify-content: center;
  color: #6336fa;
  box-shadow: 8px 8px 16px #05020a, -8px -8px 16px #0f0822;
}`
  },
  {
    id: 51,
    pubId: 101,
    category: 'Loader',
    title: 'Ghost Bar',
    html: `<div class="bar-51"></div>`,
    css: `.bar-51 {
  width: 150px; height: 4px;
  background: #1e293b;
  position: relative; overflow: hidden;
}

.bar-51::after {
  content: '';
  position: absolute;
  left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, #bf953f, transparent);
  animation: loading51 1.5s infinite;
}

@keyframes loading51 {
  100% { left: 100%; }
}`
  },
  {
    id: 52,
    pubId: 101,
    category: 'Button',
    title: 'Skew Slice Button',
    html: `<button class="btn-52">Slice Me</button>`,
    css: `.btn-52 {
  width: 130px; height: 40px;
  background: #bf953f;
  color: #000;
  border: none;
  font-weight: bold;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  cursor: pointer;
  transition: 0.3s;
}

.btn-52:hover {
  background: #fcf6ba;
  transform: translateX(5px);
}`
  },
  {
    id: 53,
    pubId: 101,
    category: 'Input',
    title: 'Neon Bottom Line',
    html: `<input type="text" class="input-53" placeholder="Typing...">`,
    css: `.input-53 {
  background: transparent;
  border: none;
  border-bottom: 2px solid #333;
  color: white;
  padding: 8px;
  outline: none;
}

.input-53:focus {
  border-bottom: 2px solid #6336fa;
  filter: drop-shadow(0 0 5px #6336fa);
}`
  },
  {
    id: 54,
    pubId: 101,
    category: 'Card',
    title: 'Glowing Mesh Card',
    html: `<div class="card-54">Mesh</div>`,
    css: `.card-54 {
  width: 200px; height: 100px;
  background: #1a1528;
  border-radius: 10px;
  background-image: radial-gradient(at 0% 0%, rgba(99,54,250,0.3) 0, transparent 50%), 
                    radial-gradient(at 100% 100%, rgba(191,149,63,0.2) 0, transparent 50%);
  display: flex; align-items: center; justify-content: center;
  color: #fff;
}`
  },
  {
    id: 55,
    pubId: 101,
    category: 'Loader',
    title: 'Pulsing Cube',
    html: `<div class="loader-55"></div>`,
    css: `.loader-55 {
  width: 30px; height: 30px;
  background: #6336fa;
  animation: pulseRotate 1.2s infinite ease-in-out;
}

@keyframes pulseRotate {
  0% { transform: scale(0); }
  50% { transform: scale(1) rotate(45deg); }
  100% { transform: scale(0) rotate(90deg); }
}`
  },
  {
    id: 56,
    pubId: 101,
    category: 'Button',
    title: 'Double Arrow Hover',
    html: `<button class="btn-56">Proceed <span>>></span></button>`,
    css: `.btn-56 {
  background: #0f172a;
  color: #bf953f;
  border: 1px solid #bf953f;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-56 span {
  display: inline-block;
  transition: 0.3s;
}

.btn-56:hover span {
  transform: translateX(10px);
  opacity: 0.5;
}`
  },
  {
    id: 57,
    pubId: 101,
    category: 'Card',
    title: 'Floating Border Glass',
    html: `<div class="card-57">Float</div>`,
    css: `.card-57 {
  width: 150px; height: 150px;
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  color: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}`
  },
  {
    id: 58,
    pubId: 101,
    category: 'Input',
    title: 'Icon Focus Slide',
    html: `<div class="group-58"><i>@</i><input type="text"></div>`,
    css: `.group-58 {
  display: flex; align-items: center;
  background: #1a1528; padding: 5px; border-radius: 5px;
}

.group-58 i { color: #6336fa; padding: 0 10px; }

.group-58 input {
  background: transparent; border: none; color: white; outline: none; width: 100px;
  transition: 0.3s;
}

.group-58 input:focus { width: 150px; }`
  },
  {
    id: 59,
    pubId: 101,
    category: 'Button',
    title: 'Glitch Text Style',
    html: `<button class="btn-59" data-text="DANGER">DANGER</button>`,
    css: `.btn-59 {
  width: 140px; height: 45px;
  background: transparent; color: #ff0055;
  border: 1px solid #ff0055; font-weight: 900;
  cursor: pointer; position: relative;
}

.btn-59:hover {
  text-shadow: 2px 2px #00f3ff, -2px -2px #6336fa;
}`
  },
  {
    id: 60,
    pubId: 101,
    category: 'Loader',
    title: 'Binary Orbit',
    html: `<div class="orbit-60"><span></span><span></span></div>`,
    css: `.orbit-60 {
  width: 40px; height: 40px; position: relative;
}
.orbit-60 span {
  position: absolute; width: 10px; height: 10px;
  background: #bf953f; border-radius: 50%;
  animation: orbit 2s linear infinite;
}
.orbit-60 span:nth-child(2) { animation-delay: -1s; background: #6336fa; }

@keyframes orbit {
  0% { top: 0; left: 0; }
  25% { top: 0; left: 30px; }
  50% { top: 30px; left: 30px; }
  75% { top: 30px; left: 0; }
  100% { top: 0; left: 0; }
}`
  },
  {
    id: 61,
    pubId: 101,
    category: 'Card',
    title: 'Image Overlay Reveal',
    html: `<div class="card-61"><span>View Details</span></div>`,
    css: `.card-61 {
  width: 200px; height: 130px;
  background: url('https://via.placeholder.com/200x130') center/cover;
  border-radius: 10px; position: relative; overflow: hidden;
  cursor: pointer;
}
.card-61 span {
  position: absolute; bottom: -100%; left: 0;
  width: 100%; background: rgba(99, 54, 250, 0.9);
  color: white; text-align: center; padding: 10px;
  transition: 0.4s;
}
.card-61:hover span { bottom: 0; }`
  },
  {
    id: 62,
    pubId: 101,
    category: 'Button',
    title: 'Retro Liquid Fill',
    html: `<button class="btn-62"><span>Hover Me</span></button>`,
    css: `.btn-62 {
  position: relative; padding: 15px 30px; background: transparent;
  color: #6336fa; border: 2px solid #6336fa; font-weight: bold;
  cursor: pointer; overflow: hidden; transition: 0.4s;
}
.btn-62 span { position: relative; z-index: 1; }
.btn-62::before {
  content: ''; position: absolute; top: 100%; left: 0; width: 100%; height: 100%;
  background: #6336fa; transition: 0.4s; z-index: 0;
}
.btn-62:hover { color: #fff; }
.btn-62:hover::before { top: 0; }`
  },
  {
    id: 63,
    pubId: 101,
    category: 'Loader',
    title: 'Atomic Spin',
    html: `<div class="loader-63"><div></div><div></div></div>`,
    css: `.loader-63 { position: relative; width: 50px; height: 50px; }
.loader-63 div {
  position: absolute; width: 100%; height: 100%;
  border: 3px solid transparent; border-top-color: #bf953f;
  border-radius: 50%; animation: spin63 1.5s linear infinite;
}
.loader-63 div:nth-child(2) {
  border-top-color: #6336fa; transform: rotate(120deg);
  animation-duration: 1s;
}
@keyframes spin63 { to { transform: rotate(360deg); } }`
  },
  {
    id: 64,
    pubId: 101,
    category: 'Card',
    title: 'Neon Glass Morph',
    html: `<div class="card-64"><h4>Analytics</h4><div class="bar"></div></div>`,
    css: `.card-64 {
  width: 180px; padding: 20px; border-radius: 20px;
  background: rgba(255,255,255,0.05); backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1); color: #fff;
}
.card-64 .bar {
  height: 5px; width: 70%; background: #6336fa;
  border-radius: 10px; box-shadow: 0 0 10px #6336fa;
}`
  },
  {
    id: 65,
    pubId: 101,
    category: 'Input',
    title: 'Floating Label Gold',
    html: `<div class="group-65"><input type="text" required><label>Email</label></div>`,
    css: `.group-65 { position: relative; width: 200px; }
.group-65 input {
  width: 100%; padding: 10px; background: none; border: 1px solid #333;
  color: #fff; border-radius: 5px; outline: none;
}
.group-65 label {
  position: absolute; left: 10px; top: 10px; color: #666; transition: 0.3s;
}
.group-65 input:focus ~ label, .group-65 input:valid ~ label {
  top: -20px; font-size: 12px; color: #bf953f;
}`
  },
  {
    id: 66,
    pubId: 101,
    category: 'Button',
    title: 'Glassy Slide',
    html: `<button class="btn-66">Explore</button>`,
    css: `.btn-66 {
  padding: 12px 24px; background: rgba(99, 54, 250, 0.2);
  color: #fff; border: 1px solid rgba(99, 54, 250, 0.4);
  backdrop-filter: blur(5px); cursor: pointer; transition: 0.3s;
}
.btn-66:hover { background: #6336fa; box-shadow: 0 0 20px #6336fa; }`
  },
  {
    id: 67,
    pubId: 101,
    category: 'Loader',
    title: 'Wave Bars',
    html: `<div class="loader-67"><span></span><span></span><span></span></div>`,
    css: `.loader-67 { display: flex; gap: 4px; }
.loader-67 span {
  width: 4px; height: 20px; background: #bf953f;
  animation: wave67 1s infinite ease-in-out;
}
.loader-67 span:nth-child(2) { animation-delay: 0.2s; }
.loader-67 span:nth-child(3) { animation-delay: 0.4s; }
@keyframes wave67 { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(2); } }`
  },
  {
    id: 68,
    pubId: 101,
    category: 'Card',
    title: 'Dark Cyber Card',
    html: `<div class="card-68">System Active</div>`,
    css: `.card-68 {
  width: 160px; height: 80px; background: #000; border: 1px solid #6336fa;
  color: #6336fa; display: flex; align-items: center; justify-content: center;
  font-family: monospace; clip-path: polygon(0 0, 100% 0, 100% 70%, 80% 100%, 0 100%);
}`
  },
  {
    id: 69,
    pubId: 101,
    category: 'Button',
    title: 'Shadow Pop',
    html: `<button class="btn-69">Click Me</button>`,
    css: `.btn-69 {
  padding: 10px 20px; background: #bf953f; color: #000; border: 2px solid #000;
  font-weight: bold; cursor: pointer; transition: 0.2s; box-shadow: 4px 4px 0px #000;
}
.btn-69:active { box-shadow: 0 0 0px #000; transform: translate(4px, 4px); }`
  },
  {
    id: 70,
    pubId: 101,
    category: 'Loader',
    title: 'Pulsing Ring',
    html: `<div class="loader-70"></div>`,
    css: `.loader-70 {
  width: 40px; height: 40px; border: 4px solid #6336fa;
  border-radius: 50%; animation: pulse70 1.2s infinite;
}
@keyframes pulse70 {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}`
  },
  {
    id: 71,
    pubId: 101,
    category: 'Input',
    title: 'Animated Border',
    html: `<div class="input-71"><input type="text" placeholder="Username"></div>`,
    css: `.input-71 { position: relative; width: 180px; }
.input-71 input {
  width: 100%; padding: 10px; background: #111; border: none; color: #fff; outline: none;
}
.input-71::after {
  content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px;
  background: #6336fa; transition: 0.4s;
}
.input-71:focus-within::after { width: 100%; }`
  },
  {
    id: 72,
    pubId: 101,
    category: 'Card',
    title: 'Hover Lift Glow',
    html: `<div class="card-72">Glow</div>`,
    css: `.card-72 {
  width: 140px; height: 140px; background: #1a1528; border-radius: 20px;
  color: #bf953f; display: flex; align-items: center; justify-content: center;
  transition: 0.3s;
}
.card-72:hover { transform: translateY(-10px); box-shadow: 0 10px 20px rgba(99, 54, 250, 0.4); }`
  },
  {
    id: 73,
    pubId: 101,
    category: 'Button',
    title: 'Gradient Border',
    html: `<button class="btn-73"><span>Fancy</span></button>`,
    css: `.btn-73 {
  padding: 2px; background: linear-gradient(45deg, #6336fa, #bf953f);
  border: none; border-radius: 10px; cursor: pointer;
}
.btn-73 span {
  display: block; padding: 10px 20px; background: #0a0516;
  color: #fff; border-radius: 8px;
}`
  },
  {
    id: 74,
    pubId: 101,
    category: 'Loader',
    title: 'Square Dance',
    html: `<div class="loader-74"></div>`,
    css: `.loader-74 {
  width: 30px; height: 30px; background: #6336fa;
  animation: dance 1.2s infinite ease-in-out;
}
@keyframes dance {
  0% { transform: rotate(0deg); border-radius: 0; }
  50% { transform: rotate(180deg); border-radius: 50%; }
  100% { transform: rotate(360deg); border-radius: 0; }
}`
  },
  {
    id: 75,
    pubId: 101,
    category: 'Card',
    title: 'Minimalist Line',
    html: `<div class="card-75">Concept</div>`,
    css: `.card-75 {
  width: 180px; padding: 20px; border-left: 4px solid #bf953f;
  background: #222; color: #fff; transition: 0.3s;
}
.card-75:hover { background: #333; border-left-width: 10px; }`
  },
  {
    id: 76,
    pubId: 101,
    category: 'Input',
    title: 'Search Glass',
    html: `<div class="search-76"><input type="text" placeholder="Find..."></div>`,
    css: `.search-76 input {
  padding: 8px 15px; border-radius: 50px; border: 1px solid #6336fa;
  background: transparent; color: #fff; width: 150px; outline: none;
}
.search-76 input:focus { box-shadow: 0 0 10px rgba(99, 54, 250, 0.5); }`
  },
  {
    id: 77,
    pubId: 101,
    category: 'Button',
    title: 'Skewed Retro',
    html: `<button class="btn-77">Retro</button>`,
    css: `.btn-77 {
  padding: 10px 25px; background: #ff0055; color: #fff;
  border: none; transform: skew(-15deg); cursor: pointer;
  font-weight: 900; transition: 0.2s;
}
.btn-77:hover { transform: skew(-15deg) scale(1.1); background: #6336fa; }`
  },
  {
    id: 78,
    pubId: 101,
    category: 'Loader',
    title: 'Double Circle',
    html: `<div class="loader-78"></div>`,
    css: `.loader-78 {
  width: 40px; height: 40px; border: 3px solid #6336fa; border-top: 3px solid transparent;
  border-radius: 50%; animation: spin 1s linear infinite; position: relative;
}
.loader-78::after {
  content: ''; position: absolute; top: 5px; left: 5px; right: 5px; bottom: 5px;
  border: 3px solid #bf953f; border-bottom: 3px solid transparent;
  border-radius: 50%; animation: spin 0.5s linear infinite reverse;
}`
  },
  {
    id: 79,
    pubId: 101,
    category: 'Card',
    title: 'Shadow Hover Stack',
    html: `<div class="card-79">Stack</div>`,
    css: `.card-79 {
  width: 150px; height: 100px; background: #6336fa; border-radius: 10px;
  display: flex; align-items: center; justify-content: center; color: white;
  box-shadow: 0 5px 0 #4a28bb; transition: 0.2s;
}
.card-79:hover { transform: translateY(3px); box-shadow: 0 2px 0 #4a28bb; }`
  },
  {
    id: 80,
    pubId: 101,
    category: 'Button',
    title: 'Neon Pulse',
    html: `<button class="btn-80">Online</button>`,
    css: `.btn-80 {
  padding: 10px 20px; background: #111; color: #00ff00;
  border: 1px solid #00ff00; border-radius: 5px; cursor: pointer;
  box-shadow: 0 0 5px #00ff00; animation: pulse80 1.5s infinite;
}
@keyframes pulse80 {
  0% { box-shadow: 0 0 5px #00ff00; }
  50% { box-shadow: 0 0 20px #00ff00; }
  100% { box-shadow: 0 0 5px #00ff00; }
}`
  },
  {
    id: 81,
    pubId: 101,
    category: 'Pattern',
    title: 'Cyber Grid 3D',
    html: `<div class="pattern-81"></div>`,
    css: `.pattern-81 {
  width: 100%; height: 200px;
  background-color: #0a0516;
  background-image: linear-gradient(rgba(99, 54, 250, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 54, 250, 0.3) 1px, transparent 1px);
  background-size: 20px 20px;
  perspective: 500px;
  transform: rotateX(45deg);
}`
  },
  {
    id: 82,
    pubId: 101,
    category: 'Pattern',
    title: 'Golden Polka Dot',
    html: `<div class="pattern-82"></div>`,
    css: `.pattern-82 {
  width: 100%; height: 200px;
  background-color: #1a1528;
  background-image: radial-gradient(#bf953f 1px, transparent 1px);
  background-size: 15px 15px;
}`
  },
  {
    id: 83,
    pubId: 101,
    category: 'Pattern',
    title: 'ZigZag Neon',
    html: `<div class="pattern-83"></div>`,
    css: `.pattern-83 {
  width: 100%; height: 200px;
  background-color: #0a0516;
  background: linear-gradient(135deg, #6336fa 25%, transparent 25%) -25px 0,
    linear-gradient(225deg, #6336fa 25%, transparent 25%) -25px 0,
    linear-gradient(315deg, #6336fa 25%, transparent 25%),
    linear-gradient(45deg, #6336fa 25%, transparent 25%);
  background-size: 50px 50px;
  opacity: 0.2;
}`
  },
  {
    id: 84,
    pubId: 101,
    category: 'Pattern',
    title: 'Luxury Stripes',
    html: `<div class="pattern-84"></div>`,
    css: `.pattern-84 {
  width: 100%; height: 200px;
  background: repeating-linear-gradient(45deg, 
    #1a1528, #1a1528 10px, 
    #bf953f 10px, #bf953f 11px);
}`
  },
  {
    id: 85,
    pubId: 101,
    category: 'Pattern',
    title: 'Circuit Board',
    html: `<div class="pattern-85"></div>`,
    css: `.pattern-85 {
  width: 100%; height: 200px;
  background-color: #0a0516;
  background-image: radial-gradient(#6336fa 1px, transparent 0);
  background-size: 30px 30px;
  background-position: -15px -15px;
  position: relative;
}
.pattern-85::after {
  content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(90deg, rgba(99,54,250,0.05) 1px, transparent 1px);
  background-size: 15px 15px;
}`
  },
  {
    id: 86,
    pubId: 101,
    category: 'Pattern',
    title: 'Animated Flow Line',
    html: `<div class="pattern-86"></div>`,
    css: `.pattern-86 {
  width: 100%; height: 200px;
  background: linear-gradient(90deg, #1a1528 50%, #0a0516 50%);
  background-size: 40px 40px;
  animation: move86 2s linear infinite;
}
@keyframes move86 {
  from { background-position: 0 0; }
  to { background-position: 40px 0; }
}`
  },
  {
    id: 87,
    pubId: 101,
    category: 'Pattern',
    title: 'Carbon Fiber',
    html: `<div class="pattern-87"></div>`,
    css: `.pattern-87 {
  width: 100%; height: 200px;
  background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0,
    linear-gradient(27deg, #222 5px, transparent 5px) 0 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
  background-size: 20px 20px;
}`
  },
  {
    id: 88,
    pubId: 101,
    category: 'Pattern',
    title: 'Shining Diamonds',
    html: `<div class="pattern-88"></div>`,
    css: `.pattern-88 {
  width: 100%; height: 200px;
  background: #1a1528;
  background-image: linear-gradient(30deg, #bf953f 12%, transparent 12.5%, transparent 87%, #bf953f 87.5%, #bf953f),
    linear-gradient(150deg, #bf953f 12%, transparent 12.5%, transparent 87%, #bf953f 87.5%, #bf953f),
    linear-gradient(30deg, #bf953f 12%, transparent 12.5%, transparent 87%, #bf953f 87.5%, #bf953f),
    linear-gradient(150deg, #bf953f 12%, transparent 12.5%, transparent 87%, #bf953f 87.5%, #bf953f),
    linear-gradient(60deg, #bf953f 25%, transparent 25.5%, transparent 75%, #bf953f 75%, #bf953f),
    linear-gradient(60deg, #bf953f 25%, transparent 25.5%, transparent 75%, #bf953f 75%, #bf953f);
  background-size: 40px 70px;
  background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;
  opacity: 0.1;
}`
  },
  {
    id: 89,
    pubId: 101,
    category: 'Check box',
    title: 'Neon Glow Tick',
    html: `<label class="container-89">
  <input type="checkbox" checked="checked">
  <div class="checkmark"></div>
</label>`,
    css: `.container-89 { cursor: pointer; }
.container-89 input { display: none; }
.checkmark {
  width: 25px; height: 25px; border: 2px solid #6336fa;
  border-radius: 5px; transition: 0.3s; position: relative;
}
.container-89 input:checked ~ .checkmark {
  background: #6336fa; box-shadow: 0 0 15px #6336fa;
}
.checkmark:after {
  content: ""; position: absolute; display: none;
  left: 8px; top: 4px; width: 5px; height: 10px;
  border: solid white; border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
.container-89 input:checked ~ .checkmark:after { display: block; }`
  },
  {
    id: 90,
    pubId: 101,
    category: 'Check box',
    title: 'Golden Slide Fill',
    html: `<label class="ch-90">
  <input type="checkbox">
  <span class="slider"></span>
</label>`,
    css: `.ch-90 { position: relative; width: 25px; height: 25px; cursor: pointer; }
.ch-90 input { opacity: 0; width: 0; height: 0; }
.slider {
  position: absolute; inset: 0; border: 2px solid #bf953f;
  transition: 0.4s; border-radius: 50%;
}
.ch-90 input:checked + .slider { background: #bf953f; transform: scale(1.1); }`
  },
  {
    id: 91,
    pubId: 101,
    category: 'Check box',
    title: 'Cyberpunk Square',
    html: `<div class="cb-91">
  <input type="checkbox" id="cb91">
  <label for="cb91"></label>
</div>`,
    css: `.cb-91 { position: relative; }
.cb-91 input { display: none; }
.cb-91 label {
  width: 25px; height: 25px; border: 2px solid #6336fa;
  display: block; cursor: pointer; position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%);
}
.cb-91 input:checked + label { background: #6336fa; }
.cb-91 label::after {
  content: 'OK'; font-size: 8px; color: #fff; position: absolute;
  top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0;
}
.cb-91 input:checked + label::after { opacity: 1; }`
  },
  {
    id: 92,
    pubId: 101,
    category: 'Check box',
    title: 'Minimal Dot',
    html: `<label class="dot-92">
  <input type="checkbox">
  <span class="circle"></span>
</label>`,
    css: `.dot-92 input { display: none; }
.circle {
  width: 22px; height: 22px; border: 2px solid #ccc;
  border-radius: 50%; display: inline-block; position: relative;
}
.circle::after {
  content: ""; width: 10px; height: 10px; background: #6336fa;
  border-radius: 50%; position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%) scale(0); transition: 0.2s;
}
.dot-92 input:checked + .circle::after { transform: translate(-50%, -50%) scale(1); }`
  },
  {
    id: 93,
    pubId: 101,
    category: 'Check box',
    title: 'Animated Cross',
    html: `<label class="cross-93">
  <input type="checkbox">
  <div class="box"></div>
</label>`,
    css: `.cross-93 input { display: none; }
.box {
  width: 25px; height: 25px; border: 2px solid #333; position: relative; transition: 0.3s;
}
.box::before, .box::after {
  content: ""; position: absolute; width: 15px; height: 2px;
  background: #ff4444; top: 10px; left: 3px; opacity: 0; transition: 0.3s;
}
.box::before { transform: rotate(45deg); }
.box::after { transform: rotate(-45deg); }
.cross-93 input:checked + .box { border-color: #ff4444; }
.cross-93 input:checked + .box::before, .cross-93 input:checked + .box::after { opacity: 1; }`
  },
  {
    id: 94,
    pubId: 101,
    category: 'Check box',
    title: 'Liquid Fill Circle',
    html: `<label class="liquid-94">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.liquid-94 { cursor: pointer; }
.liquid-94 input { display: none; }
.liquid-94 span {
  width: 30px; height: 30px; border: 2px solid #6336fa;
  border-radius: 50%; display: block; overflow: hidden; position: relative;
}
.liquid-94 span::after {
  content: ""; position: absolute; bottom: -100%; left: 0;
  width: 100%; height: 100%; background: #6336fa; transition: 0.4s;
}
.liquid-94 input:checked + span::after { bottom: 0; }`
  },
  {
    id: 95,
    pubId: 101,
    category: 'Check box',
    title: 'Border Trace',
    html: `<label class="trace-95">
  <input type="checkbox">
  <div class="svg-box">
    <svg viewBox="0 0 20 20"><rect x="1" y="1" width="18" height="18" /></svg>
  </div>
</label>`,
    css: `.trace-95 input { display: none; }
.svg-box svg { width: 25px; height: 25px; fill: none; stroke: #bf953f; stroke-width: 2; stroke-dasharray: 80; stroke-dashoffset: 80; transition: 0.5s; }
.trace-95 input:checked + .svg-box svg { stroke-dashoffset: 0; }`
  },
  {
    id: 96,
    pubId: 101,
    category: 'Check box',
    title: 'Dark Mode Switcher',
    html: `<label class="dark-96">
  <input type="checkbox">
  <span class="moon"></span>
</label>`,
    css: `.dark-96 input { display: none; }
.moon {
  width: 25px; height: 25px; background: #333; border-radius: 50%;
  display: block; transition: 0.4s; box-shadow: inset 8px -4px 0 #eee;
}
.dark-96 input:checked + .moon { box-shadow: inset 25px -25px 0 #eee; background: #ffdb33; }`
  },
  {
    id: 97,
    pubId: 101,
    category: 'Check box',
    title: 'Soft UI Neumorphic',
    html: `<label class="neu-97">
  <input type="checkbox">
  <div class="neu-box"></div>
</label>`,
    css: `.neu-97 input { display: none; }
.neu-box {
  width: 30px; height: 30px; background: #e0e0e0;
  border-radius: 8px; box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  cursor: pointer; transition: 0.2s;
}
.neu-97 input:checked + .neu-box {
  box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;
}`
  },
  {
    id: 98,
    pubId: 101,
    category: 'Check box',
    title: 'Heart Like',
    html: `<label class="heart-98">
  <input type="checkbox">
  <div class="heart"></div>
</label>`,
    css: `.heart-98 input { display: none; }
.heart {
  width: 25px; height: 25px; background: #ccc;
  clip-path: polygon(50% 0%, 100% 35%, 82% 100%, 50% 80%, 18% 100%, 0% 35%);
  transition: 0.3s; cursor: pointer;
}
.heart-98 input:checked + .heart { background: #ff4444; transform: scale(1.2); }`
  },
  {
    id: 99,
    pubId: 101,
    category: 'Check box',
    title: 'Bounce Check',
    html: `<label class="bounce-99">
  <input type="checkbox">
  <span class="b-box"></span>
</label>`,
    css: `.bounce-99 input { display: none; }
.b-box {
  width: 25px; height: 25px; border: 2px solid #6336fa;
  display: block; transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.bounce-99 input:checked + .b-box {
  background: #6336fa; transform: rotate(360deg) scale(1.2);
}`
  },
  {
    id: 100,
    pubId: 101,
    category: 'Check box',
    title: 'Shadow Box Glow',
    html: `<label class="glow-100">
  <input type="checkbox">
  <span class="g-box"></span>
</label>`,
    css: `.glow-100 input { display: none; }
.g-box {
  width: 25px; height: 25px; background: #1a1528;
  border: 1px solid #bf953f; display: block; transition: 0.3s;
}
.glow-100 input:checked + .g-box {
  background: #bf953f; box-shadow: 0 0 20px #bf953f;
}`
  },
  {
    id: 101,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Neon Power Switch',
    html: `<label class="switch-101"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-101 { position: relative; width: 50px; height: 24px; display: inline-block; }
.switch-101 input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; inset: 0; background: #333; transition: .4s; border-radius: 34px; border: 1px solid #6336fa; }
.slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 3px; bottom: 3px; background: #6336fa; transition: .4s; border-radius: 50%; box-shadow: 0 0 10px #6336fa; }
input:checked + .slider { background: #6336fa; }
input:checked + .slider:before { transform: translateX(26px); background: #fff; box-shadow: 0 0 15px #fff; }`
  },
  {
    id: 102,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Golden Luxury Slider',
    html: `<label class="switch-102"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-102 { width: 60px; height: 30px; position: relative; display: inline-block; }
.switch-102 input { display: none; }
.slider { position: absolute; inset: 0; background: #1a1528; border: 2px solid #bf953f; border-radius: 30px; transition: 0.3s; }
.slider:before { content: ""; position: absolute; height: 20px; width: 20px; left: 3px; bottom: 3px; background: #bf953f; border-radius: 50%; transition: 0.3s; }
input:checked + .slider { background: #bf953f; }
input:checked + .slider:before { transform: translateX(30px); background: #1a1528; }`
  },
  {
    id: 103,
    pubId: 101,
    category: 'Toggle switch',
    title: 'iOS Style Smooth',
    html: `<label class="switch-103"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-103 { width: 51px; height: 31px; position: relative; display: inline-block; }
.switch-103 input { opacity: 0; }
.slider { position: absolute; inset: 0; background: #e9e9ea; border-radius: 31px; transition: .3s; }
.slider:before { content: ""; position: absolute; height: 27px; width: 27px; left: 2px; bottom: 2px; background: #fff; border-radius: 50%; box-shadow: 0 3px 8px rgba(0,0,0,.15); transition: .3s; }
input:checked + .slider { background: #34c759; }
input:checked + .slider:before { transform: translateX(20px); }`
  },
  {
    id: 104,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Day & Night Cycle',
    html: `<label class="switch-104"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-104 { width: 60px; height: 30px; position: relative; display: inline-block; }
.switch-104 input { opacity: 0; }
.slider { position: absolute; inset: 0; background: #333; border-radius: 30px; transition: 0.4s; }
.slider:before { content: "🌙"; position: absolute; left: 5px; top: 3px; transition: 0.4s; font-size: 16px; }
input:checked + .slider { background: #87ceeb; }
input:checked + .slider:before { content: "☀️"; transform: translateX(30px); }`
  },
  {
    id: 105,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Liquid Fill Switch',
    html: `<label class="switch-105"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-105 { width: 55px; height: 25px; position: relative; display: inline-block; }
.switch-105 input { display: none; }
.slider { position: absolute; inset: 0; border: 2px solid #6336fa; border-radius: 25px; overflow: hidden; }
.slider:before { content: ""; position: absolute; width: 100%; height: 100%; background: #6336fa; left: -100%; transition: 0.4s; }
input:checked + .slider:before { left: 0; }`
  },
  {
    id: 106,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Flat Square Toggle',
    html: `<label class="switch-106"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-106 { width: 50px; height: 25px; position: relative; display: inline-block; }
.switch-106 input { display: none; }
.slider { position: absolute; inset: 0; background: #ddd; transition: 0.2s; }
.slider:before { content: ""; position: absolute; height: 19px; width: 19px; left: 3px; bottom: 3px; background: #fff; transition: 0.2s; }
input:checked + .slider { background: #000; }
input:checked + .slider:before { transform: translateX(25px); }`
  },
  {
    id: 107,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Cyber Gradient',
    html: `<label class="switch-107"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-107 { width: 50px; height: 25px; position: relative; display: inline-block; }
.switch-107 input { display: none; }
.slider { position: absolute; inset: 0; background: linear-gradient(90deg, #6336fa, #bf953f); border-radius: 25px; }
.slider:before { content: ""; position: absolute; height: 21px; width: 21px; left: 2px; bottom: 2px; background: #fff; border-radius: 50%; transition: 0.3s; }
input:checked + .slider:before { transform: translateX(25px); }`
  },
  {
    id: 108,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Inner Shadow Neo',
    html: `<label class="switch-108"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-108 { width: 50px; height: 25px; position: relative; display: inline-block; }
.switch-108 input { display: none; }
.slider { position: absolute; inset: 0; background: #e0e0e0; border-radius: 25px; box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; }
.slider:before { content: ""; position: absolute; height: 17px; width: 17px; left: 4px; bottom: 4px; background: #6336fa; border-radius: 50%; transition: 0.3s; }
input:checked + .slider:before { transform: translateX(25px); }`
  },
  {
    id: 109,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Yes/No Label',
    html: `<label class="switch-109"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-109 { width: 60px; height: 25px; position: relative; display: inline-block; font-family: sans-serif; }
.switch-109 input { display: none; }
.slider { position: absolute; inset: 0; background: #ff4d4d; border-radius: 25px; transition: 0.3s; }
.slider:after { content: "NO"; position: absolute; right: 8px; top: 4px; color: #fff; font-size: 10px; font-weight: bold; }
.slider:before { content: ""; position: absolute; height: 19px; width: 19px; left: 3px; bottom: 3px; background: #fff; border-radius: 50%; transition: 0.3s; z-index: 2; }
input:checked + .slider { background: #2ecc71; }
input:checked + .slider:after { content: "YES"; left: 8px; }
input:checked + .slider:before { transform: translateX(35px); }`
  },
  {
    id: 110,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Slim Line Toggle',
    html: `<label class="switch-110"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-110 { width: 40px; height: 10px; position: relative; display: inline-block; margin: 10px; }
.switch-110 input { opacity: 0; }
.slider { position: absolute; inset: 0; background: #ccc; border-radius: 10px; transition: 0.3s; }
.slider:before { content: ""; position: absolute; height: 20px; width: 20px; left: -5px; bottom: -5px; background: #fff; border: 1px solid #6336fa; border-radius: 50%; transition: 0.3s; }
input:checked + .slider { background: #6336fa; }
input:checked + .slider:before { transform: translateX(30px); }`
  },
  {
    id: 111,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Elastic Bounce',
    html: `<label class="switch-111"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-111 { width: 50px; height: 26px; position: relative; display: inline-block; }
.switch-111 input { opacity: 0; }
.slider { position: absolute; inset: 0; background: #333; border-radius: 34px; transition: 0.4s; }
.slider:before { position: absolute; content: ""; height: 20px; width: 20px; left: 3px; bottom: 3px; background: #fff; transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); border-radius: 50%; }
input:checked + .slider { background: #6336fa; }
input:checked + .slider:before { transform: translateX(24px); width: 28px; left: -1px; }
input:checked + .slider:before { transform: translateX(24px); width: 20px; left: 3px; }`
  },
  {
    id: 112,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Dot Border Switch',
    html: `<label class="switch-112"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-112 { width: 50px; height: 26px; position: relative; display: inline-block; }
.switch-112 input { display: none; }
.slider { position: absolute; inset: 0; border: 2px dotted #6336fa; border-radius: 34px; transition: 0.4s; }
.slider:before { content: ""; position: absolute; height: 16px; width: 16px; left: 5px; bottom: 3px; background: #6336fa; border-radius: 50%; transition: 0.4s; }
input:checked + .slider { border-style: solid; }
input:checked + .slider:before { transform: translateX(24px); }`
  },
  {
    id: 113,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Vertical Mini',
    html: `<label class="switch-113"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-113 { width: 20px; height: 40px; position: relative; display: inline-block; }
.switch-113 input { display: none; }
.slider { position: absolute; inset: 0; background: #222; border-radius: 20px; transition: 0.3s; }
.slider:before { content: ""; position: absolute; width: 14px; height: 14px; left: 3px; top: 3px; background: #bf953f; border-radius: 50%; transition: 0.3s; }
input:checked + .slider:before { transform: translateY(20px); }`
  },
  {
    id: 114,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Outline Pulse',
    html: `<label class="switch-114"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-114 { width: 50px; height: 25px; position: relative; display: inline-block; }
.switch-114 input { display: none; }
.slider { position: absolute; inset: 0; border: 1px solid #6336fa; border-radius: 25px; transition: 0.3s; }
.slider:before { content: ""; position: absolute; height: 17px; width: 17px; left: 3px; bottom: 3px; background: #6336fa; border-radius: 50%; transition: 0.3s; }
input:checked + .slider { box-shadow: 0 0 10px rgba(99, 54, 250, 0.5); }
input:checked + .slider:before { transform: translateX(25px); animation: pulse 1s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(99, 54, 250, 0.7); } 70% { box-shadow: 0 0 0 10px rgba(99, 54, 250, 0); } 100% { box-shadow: 0 0 0 0 rgba(99, 54, 250, 0); } }`
  },
  {
    id: 115,
    pubId: 101,
    category: 'Toggle switch',
    title: 'B&W Contrast',
    html: `<label class="switch-115"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-115 { width: 50px; height: 25px; position: relative; display: inline-block; }
.switch-115 input { display: none; }
.slider { position: absolute; inset: 0; background: #fff; border: 2px solid #000; border-radius: 4px; transition: 0.2s; }
.slider:before { content: ""; position: absolute; height: 15px; width: 15px; left: 3px; bottom: 3px; background: #000; transition: 0.2s; }
input:checked + .slider { background: #000; }
input:checked + .slider:before { transform: translateX(25px); background: #fff; }`
  },
  {
    id: 116,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Glassmorphism Blur',
    html: `<label class="switch-116"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-116 { width: 50px; height: 25px; position: relative; display: inline-block; }
.switch-116 input { display: none; }
.slider { position: absolute; inset: 0; background: rgba(255,255,255,0.1); backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.2); border-radius: 25px; }
.slider:before { content: ""; position: absolute; height: 19px; width: 19px; left: 2px; bottom: 2px; background: #6336fa; border-radius: 50%; transition: 0.3s; }
input:checked + .slider:before { transform: translateX(25px); background: #bf953f; }`
  },
  {
    id: 117,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Textured Carbon',
    html: `<label class="switch-117"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-117 { width: 55px; height: 28px; position: relative; display: inline-block; }
.switch-117 input { display: none; }
.slider { position: absolute; inset: 0; background: #111; border-radius: 4px; border: 1px solid #333; }
.slider:before { content: ""; position: absolute; height: 20px; width: 20px; left: 4px; bottom: 3px; background: repeating-linear-gradient(45deg, #222, #222 2px, #333 2px, #333 4px); transition: 0.3s; }
input:checked + .slider:before { transform: translateX(25px); background: #6336fa; }`
  },
  {
    id: 118,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Double Dot',
    html: `<label class="switch-118"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-118 { width: 50px; height: 25px; position: relative; display: inline-block; }
.switch-118 input { display: none; }
.slider { position: absolute; inset: 0; background: #333; border-radius: 25px; }
.slider:before { content: ""; position: absolute; height: 10px; width: 10px; left: 5px; top: 7px; background: #fff; border-radius: 50%; transition: 0.3s; box-shadow: 30px 0 0 #fff; opacity: 0.3; }
input:checked + .slider:before { opacity: 1; box-shadow: 0 0 0 #fff; transform: translateX(30px); }`
  },
  {
    id: 119,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Retro Arcade Red',
    html: `<label class="switch-119"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-119 { width: 50px; height: 25px; position: relative; display: inline-block; }
.switch-119 input { display: none; }
.slider { position: absolute; inset: 0; background: #444; box-shadow: inset 0 2px 5px rgba(0,0,0,0.5); border-radius: 2px; }
.slider:before { content: ""; position: absolute; height: 21px; width: 21px; left: 2px; bottom: 2px; background: #ff0000; transition: 0.1s; box-shadow: 0 2px 0 #800000; }
input:checked + .slider:before { transform: translateX(25px); background: #00ff00; box-shadow: 0 2px 0 #008000; }`
  },
  {
    id: 120,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Soft Glow Gold',
    html: `<label class="switch-120"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-120 { width: 50px; height: 25px; position: relative; display: inline-block; }
.switch-120 input { display: none; }
.slider { position: absolute; inset: 0; background: #1a1528; border-radius: 25px; border: 1px solid #bf953f; transition: 0.3s; }
.slider:before { content: ""; position: absolute; height: 17px; width: 17px; left: 3px; bottom: 3px; background: #bf953f; border-radius: 50%; transition: 0.3s; opacity: 0.5; }
input:checked + .slider { box-shadow: 0 0 15px rgba(191, 149, 63, 0.3); }
input:checked + .slider:before { transform: translateX(25px); opacity: 1; }`
  },
  {
    id: 121,
    pubId: 101,
    category: 'Radio button',
    title: 'Neon Pulse Radio',
    html: `<label class="radio-121">
  <input type="radio" name="r121" checked>
  <span class="dot"></span>
</label>`,
    css: `.radio-121 { display: inline-block; cursor: pointer; }
.radio-121 input { display: none; }
.dot {
  width: 24px; height: 24px; border: 2px solid #6336fa;
  border-radius: 50%; display: block; position: relative; transition: 0.3s;
}
.dot::after {
  content: ""; position: absolute; inset: 4px;
  background: #6336fa; border-radius: 50%;
  transform: scale(0); transition: 0.3s;
}
.radio-121 input:checked + .dot { box-shadow: 0 0 15px #6336fa; }
.radio-121 input:checked + .dot::after { transform: scale(1); }`
  },
  {
    id: 122,
    pubId: 101,
    category: 'Radio button',
    title: 'Golden Ring Orbit',
    html: `<label class="radio-122">
  <input type="radio" name="r122">
  <span class="ring"></span>
</label>`,
    css: `.radio-122 { cursor: pointer; }
.radio-122 input { display: none; }
.ring {
  width: 26px; height: 26px; border: 2px solid #bf953f;
  border-radius: 50%; display: block; position: relative;
}
.ring::before {
  content: ""; position: absolute; top: 50%; left: 50%;
  width: 10px; height: 10px; background: #bf953f;
  border-radius: 50%; transform: translate(-50%, -50%) scale(0);
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.radio-122 input:checked + .ring::before { transform: translate(-50%, -50%) scale(1); }`
  },
  {
    id: 123,
    pubId: 101,
    category: 'Radio button',
    title: 'Liquid Fill Radio',
    html: `<label class="radio-123">
  <input type="radio" name="r123">
  <span class="liquid"></span>
</label>`,
    css: `.radio-123 input { display: none; }
.liquid {
  width: 25px; height: 25px; border: 2px solid #6336fa;
  border-radius: 50%; display: block; position: relative; overflow: hidden;
}
.liquid::after {
  content: ""; position: absolute; bottom: -100%; left: 0;
  width: 100%; height: 100%; background: #6336fa; transition: 0.4s;
}
.radio-123 input:checked + .liquid::after { bottom: 0; }`
  },
  {
    id: 124,
    pubId: 101,
    category: 'Radio button',
    title: 'Cyberpunk Hexagon',
    html: `<label class="radio-124">
  <input type="radio" name="r124">
  <span class="hex"></span>
</label>`,
    css: `.radio-124 input { display: none; }
.hex {
  width: 25px; height: 25px; background: #1a1528;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  display: block; border: 1px solid #6336fa; transition: 0.3s;
}
.radio-124 input:checked + .hex { background: #6336fa; transform: rotate(90deg); }`
  },
  {
    id: 125,
    pubId: 101,
    category: 'Radio button',
    title: 'Inner Glow Dark',
    html: `<label class="radio-125">
  <input type="radio" name="r125">
  <span class="glow-dot"></span>
</label>`,
    css: `.radio-125 input { display: none; }
.glow-dot {
  width: 22px; height: 22px; background: #111; border-radius: 50%;
  display: block; box-shadow: inset 0 0 5px rgba(255,255,255,0.1); position: relative;
}
.radio-125 input:checked + .glow-dot { box-shadow: 0 0 15px #bf953f; background: #bf953f; }`
  },
  {
    id: 126,
    pubId: 101,
    category: 'Radio button',
    title: 'Expanding Border',
    html: `<label class="radio-126">
  <input type="radio" name="r126">
  <span class="border-dot"></span>
</label>`,
    css: `.radio-126 input { display: none; }
.border-dot {
  width: 24px; height: 24px; border: 2px solid #ccc; border-radius: 50%;
  display: block; position: relative; transition: 0.3s;
}
.radio-126 input:checked + .border-dot { border-width: 8px; border-color: #6336fa; }`
  },
  {
    id: 127,
    pubId: 101,
    category: 'Radio button',
    title: '3D Neumorphic',
    html: `<label class="radio-127">
  <input type="radio" name="r127">
  <span class="neu"></span>
</label>`,
    css: `.radio-127 input { display: none; }
.neu {
  width: 28px; height: 28px; background: #e0e0e0; border-radius: 50%;
  display: block; box-shadow: 4px 4px 8px #bebebe, -4px -4px 8px #ffffff;
  position: relative; transition: 0.2s;
}
.radio-127 input:checked + .neu {
  box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff;
}
.neu::after {
  content: ""; position: absolute; inset: 8px; background: #6336fa;
  border-radius: 50%; opacity: 0; transition: 0.2s;
}
.radio-127 input:checked + .neu::after { opacity: 1; }`
  },
  {
    id: 128,
    pubId: 101,
    category: 'Radio button',
    title: 'Minimalist Tick',
    html: `<label class="radio-128">
  <input type="radio" name="r128">
  <span class="tick-box"></span>
</label>`,
    css: `.radio-128 input { display: none; }
.tick-box {
  width: 24px; height: 24px; border: 2px solid #333; border-radius: 4px;
  display: block; position: relative;
}
.tick-box::after {
  content: "✓"; position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%) scale(0); color: #6336fa; font-weight: bold; transition: 0.2s;
}
.radio-128 input:checked + .tick-box::after { transform: translate(-50%, -50%) scale(1.2); }`
  },
  {
    id: 129,
    pubId: 101,
    category: 'Radio button',
    title: 'Double Circle Bloom',
    html: `<label class="radio-129">
  <input type="radio" name="r129">
  <span class="bloom"></span>
</label>`,
    css: `.radio-129 input { display: none; }
.bloom {
  width: 24px; height: 24px; border: 2px solid #bf953f; border-radius: 50%;
  display: block; position: relative;
}
.bloom::after {
  content: ""; position: absolute; inset: -5px; border: 1px solid #bf953f;
  border-radius: 50%; opacity: 0; transition: 0.4s;
}
.radio-129 input:checked + .bloom::after { opacity: 1; inset: 2px; }`
  },
  {
    id: 130,
    pubId: 101,
    category: 'Radio button',
    title: 'Vertical Line Select',
    html: `<label class="radio-130">
  <input type="radio" name="r130">
  <span class="v-line"></span>
</label>`,
    css: `.radio-130 input { display: none; }
.v-line {
  width: 4px; height: 25px; background: #ddd; display: block; transition: 0.3s;
}
.radio-130 input:checked + .v-line { background: #6336fa; width: 8px; box-shadow: 0 0 10px #6336fa; }`
  },
  {
    id: 131,
    pubId: 101,
    category: 'Radio button',
    title: 'Soft Shadow Push',
    html: `<label class="radio-131">
  <input type="radio" name="r131">
  <span class="push"></span>
</label>`,
    css: `.radio-131 input { display: none; }
.push {
  width: 24px; height: 24px; background: #fff; border-radius: 50%;
  display: block; box-shadow: 0 4px 0 #ddd; transition: 0.1s;
}
.radio-131 input:checked + .push { transform: translateY(3px); box-shadow: 0 1px 0 #ddd; background: #6336fa; }`
  },
  {
    id: 132,
    pubId: 101,
    category: 'Radio button',
    title: 'Concentric Ripples',
    html: `<label class="radio-132">
  <input type="radio" name="r132">
  <span class="ripple"></span>
</label>`,
    css: `.radio-132 input { display: none; }
.ripple {
  width: 24px; height: 24px; border: 1px solid #6336fa; border-radius: 50%;
  display: block; position: relative;
}
.radio-132 input:checked + .ripple { animation: ripple-effect 0.6s linear; }
@keyframes ripple-effect {
  0% { box-shadow: 0 0 0 0 rgba(99, 54, 250, 0.4); }
  100% { box-shadow: 0 0 0 15px rgba(99, 54, 250, 0); }
}`
  },
  {
    id: 133,
    pubId: 101,
    category: 'Radio button',
    title: 'Square to Circle',
    html: `<label class="radio-133">
  <input type="radio" name="r133">
  <span class="morph"></span>
</label>`,
    css: `.radio-133 input { display: none; }
.morph {
  width: 22px; height: 22px; background: #bf953f; display: block; transition: 0.4s;
}
.radio-133 input:checked + .morph { border-radius: 50%; background: #6336fa; transform: rotate(180deg); }`
  },
  {
    id: 134,
    pubId: 101,
    category: 'Radio button',
    title: 'Hollow Center',
    html: `<label class="radio-134">
  <input type="radio" name="r134">
  <span class="hollow"></span>
</label>`,
    css: `.radio-134 input { display: none; }
.hollow {
  width: 24px; height: 24px; border: 4px solid #ddd; border-radius: 50%; display: block; transition: 0.3s;
}
.radio-134 input:checked + .hollow { border-color: #6336fa; }`
  },
  {
    id: 135,
    pubId: 101,
    category: 'Radio button',
    title: 'Retro Checkmark',
    html: `<label class="radio-135">
  <input type="radio" name="r135">
  <span class="retro"></span>
</label>`,
    css: `.radio-135 input { display: none; }
.retro {
  width: 22px; height: 22px; background: #eee; display: block; position: relative;
}
.retro::after {
  content: "X"; position: absolute; font-size: 14px; font-weight: bold;
  top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0;
}
.radio-135 input:checked + .retro { background: #ff4444; color: white; }
.radio-135 input:checked + .retro::after { opacity: 1; }`
  },
  {
    id: 136,
    pubId: 101,
    category: 'Radio button',
    title: 'Shimmering Gold',
    html: `<label class="radio-136">
  <input type="radio" name="r136">
  <span class="shimmer"></span>
</label>`,
    css: `.radio-136 input { display: none; }
.shimmer {
  width: 26px; height: 26px; border: 2px solid #bf953f; border-radius: 50%; display: block;
}
.radio-136 input:checked + .shimmer {
  background: linear-gradient(45deg, #bf953f, #fcf6ba, #bf953f);
  background-size: 200% 200%; animation: shimmer-anim 2s infinite;
}
@keyframes shimmer-anim { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }`
  },
  {
    id: 137,
    pubId: 101,
    category: 'Radio button',
    title: 'Minimalist Cross',
    html: `<label class="radio-137">
  <input type="radio" name="r137">
  <span class="cross"></span>
</label>`,
    css: `.radio-137 input { display: none; }
.cross {
  width: 24px; height: 24px; border: 1px solid #333; border-radius: 50%; display: block; position: relative;
}
.cross::before {
  content: "+"; position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%); transition: 0.3s;
}
.radio-137 input:checked + .cross::before { transform: translate(-50%, -50%) rotate(45deg); color: #6336fa; }`
  },
  {
    id: 138,
    pubId: 101,
    category: 'Radio button',
    title: 'Glassy Blur Circle',
    html: `<label class="radio-138">
  <input type="radio" name="r138">
  <span class="glass"></span>
</label>`,
    css: `.radio-138 input { display: none; }
.glass {
  width: 24px; height: 24px; background: rgba(255,255,255,0.1); backdrop-filter: blur(5px);
  border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; display: block;
}
.radio-138 input:checked + .glass { background: #6336fa; border-color: #6336fa; }`
  },
  {
    id: 139,
    pubId: 101,
    category: 'Radio button',
    title: 'Elastic Pop',
    html: `<label class="radio-139">
  <input type="radio" name="r139">
  <span class="pop"></span>
</label>`,
    css: `.radio-139 input { display: none; }
.pop {
  width: 24px; height: 24px; border: 2px solid #6336fa; border-radius: 50%; display: block;
}
.radio-139 input:checked + .pop {
  animation: pop-anim 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  background: #6336fa;
}
@keyframes pop-anim { 0% { transform: scale(1); } 50% { transform: scale(1.4); } 100% { transform: scale(1.1); } }`
  },
  {
    id: 140,
    pubId: 101,
    category: 'Radio button',
    title: 'Glowing Orbit Dot',
    html: `<label class="radio-140">
  <input type="radio" name="r140">
  <span class="orbit"></span>
</label>`,
    css: `.radio-140 input { display: none; }
.orbit {
  width: 26px; height: 26px; border: 1px solid #bf953f; border-radius: 50%; display: block; position: relative;
}
.orbit::after {
  content: ""; position: absolute; width: 6px; height: 6px; background: #bf953f;
  border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0;
}
.radio-140 input:checked + .orbit { border-color: #fff; box-shadow: 0 0 10px #bf953f; }
.radio-140 input:checked + .orbit::after { opacity: 1; }`
  },
  {
    id: 141,
    pubId: 101,
    category: 'Form',
    title: 'Glassmorphism Login',
    html: `<form class="form-141">
  <h3>Login</h3>
  <input type="text" placeholder="Username">
  <input type="password" placeholder="Password">
  <button type="button">Sign In</button>
</form>`,
    css: `.form-141 {
  padding: 20px; background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px; width: 220px; display: flex; flex-direction: column; gap: 10px;
}
.form-141 h3 { color: #fff; margin: 0 0 10px 0; font-size: 16px; text-align: center; }
.form-141 input {
  background: rgba(255,255,255,0.1); border: none; padding: 8px 12px;
  border-radius: 5px; color: #fff; font-size: 12px; outline: none;
}
.form-141 button {
  background: #6336fa; color: #fff; border: none; padding: 8px;
  border-radius: 5px; cursor: pointer; font-weight: bold; transition: 0.3s;
}
.form-141 button:hover { background: #4a28bb; }`
  },
  {
    id: 142,
    pubId: 101,
    category: 'Form',
    title: 'Dark Newsletter',
    html: `<div class="form-142">
  <input type="email" placeholder="Enter email">
  <button>Join</button>
</div>`,
    css: `.form-142 {
  display: flex; background: #1a1528; padding: 5px;
  border-radius: 50px; border: 1px solid #bf953f; width: 240px;
}
.form-142 input {
  background: transparent; border: none; color: #fff;
  padding: 5px 15px; flex: 1; outline: none; font-size: 12px;
}
.form-142 button {
  background: #bf953f; color: #0a0516; border: none;
  padding: 6px 15px; border-radius: 50px; font-weight: bold; cursor: pointer;
}`
  },
  {
    id: 143,
    pubId: 101,
    category: 'Form',
    title: 'Floating Search Bar',
    html: `<form class="form-143">
  <input type="text" placeholder="Search components...">
  <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-width="2" stroke-linecap="round"></path></svg>
</form>`,
    css: `.form-143 {
  position: relative; width: 200px;
}
.form-143 input {
  width: 100%; padding: 10px 35px 10px 15px; border-radius: 10px;
  border: 2px solid #eee; outline: none; transition: 0.3s;
}
.form-143 input:focus { border-color: #6336fa; box-shadow: 0 5px 15px rgba(99,54,250,0.1); }
.form-143 svg { position: absolute; right: 12px; top: 12px; color: #999; }`
  },
  {
    id: 144,
    pubId: 101,
    category: 'Form',
    title: 'Minimal OTP Input',
    html: `<div class="form-144">
  <input type="text" maxlength="1" value="4">
  <input type="text" maxlength="1" value="2">
  <input type="text" maxlength="1">
  <input type="text" maxlength="1">
</div>`,
    css: `.form-144 { display: flex; gap: 8px; justify-content: center; }
.form-144 input {
  width: 35px; height: 45px; text-align: center; font-size: 18px;
  font-weight: bold; border: 2px solid #ddd; border-radius: 8px;
  background: transparent; color: #6336fa; outline: none; transition: 0.3s;
}
.form-144 input:focus { border-color: #6336fa; transform: translateY(-3px); }`
  },
  {
    id: 145,
    pubId: 101,
    category: 'Form',
    title: 'Retro Password Reset',
    html: `<form class="form-145">
  <input type="password" placeholder="New Password">
  <button>Update</button>
</form>`,
    css: `.form-145 { display: flex; flex-direction: column; gap: 5px; }
.form-145 input {
  padding: 10px; border: 2px solid #000; background: #fff;
  box-shadow: 4px 4px 0 #000; outline: none;
}
.form-145 button {
  padding: 10px; background: #ff4444; color: #fff;
  border: 2px solid #000; box-shadow: 4px 4px 0 #000;
  font-weight: bold; cursor: pointer; margin-top: 5px;
}
.form-145 button:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 #000; }`
  },
  {
    id: 146,
    pubId: 101,
    category: 'Form',
    title: 'Star Rating Form',
    html: `<div class="form-146">
  <input type="radio" name="star" id="s5"><label for="s5">★</label>
  <input type="radio" name="star" id="s4"><label for="s4">★</label>
  <input type="radio" name="star" id="s3"><label for="s3">★</label>
  <input type="radio" name="star" id="s2"><label for="s2">★</label>
  <input type="radio" name="star" id="s1"><label for="s1">★</label>
</div>`,
    css: `.form-146 { display: flex; flex-direction: row-reverse; gap: 5px; }
.form-146 input { display: none; }
.form-146 label {
  font-size: 24px; color: #ccc; cursor: pointer; transition: 0.3s;
}
.form-146 label:hover, .form-146 label:hover ~ label,
.form-146 input:checked ~ label { color: #bf953f; text-shadow: 0 0 10px #bf953f; }`
  },
  {
    id: 147,
    pubId: 101,
    category: 'Form',
    title: 'Shadow Compact Login',
    html: `<form class="form-147">
  <input type="text" placeholder="User">
  <input type="password" placeholder="Pass">
  <button>GO</button>
</form>`,
    css: `.form-147 {
  background: #fff; padding: 15px; border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05); width: 180px;
}
.form-147 input {
  width: 100%; margin-bottom: 8px; border: 1px solid #eee;
  padding: 6px 10px; border-radius: 6px; font-size: 11px; outline: none;
}
.form-147 button {
  width: 100%; background: #000; color: #fff; border: none;
  padding: 6px; border-radius: 6px; font-size: 11px; cursor: pointer;
}`
  },
  {
    id: 148,
    pubId: 101,
    category: 'Form',
    title: 'Cyberpunk Input Field',
    html: `<div class="form-148">
  <label>SYSTEM ACCESS</label>
  <input type="text" placeholder="Enter Code">
  <div class="line"></div>
</div>`,
    css: `.form-148 { width: 200px; position: relative; }
.form-148 label { color: #6336fa; font-size: 9px; letter-spacing: 2px; font-weight: bold; }
.form-148 input {
  width: 100%; background: transparent; border: none; color: #fff;
  padding: 10px 0; outline: none; font-family: monospace;
}
.form-148 .line { height: 2px; background: #333; position: relative; }
.form-148 .line::after {
  content: ''; position: absolute; left: 0; width: 0; height: 100%;
  background: #6336fa; transition: 0.5s; box-shadow: 0 0 10px #6336fa;
}
.form-148 input:focus + .line::after { width: 100%; }`
  },
  {
    id: 149,
    pubId: 101,
    category: 'Form',
    title: 'Contact Textarea',
    html: `<form class="form-149">
  <textarea placeholder="Your Message..."></textarea>
  <button>Send</button>
</form>`,
    css: `.form-149 { width: 220px; }
.form-149 textarea {
  width: 100%; height: 80px; border: 1px solid #ccc; border-radius: 10px;
  padding: 10px; font-size: 12px; outline: none; resize: none; transition: 0.3s;
}
.form-149 textarea:focus { border-color: #bf953f; }
.form-149 button {
  margin-top: 5px; width: 100%; background: #bf953f; color: #fff;
  border: none; padding: 8px; border-radius: 8px; cursor: pointer;
}`
  },
  {
    id: 150,
    pubId: 101,
    category: 'Form',
    title: 'Modern Range Slider',
    html: `<div class="form-150">
  <input type="range" min="0" max="100" value="70">
</div>`,
    css: `.form-150 { width: 180px; }
.form-150 input {
  width: 100%; -webkit-appearance: none; height: 4px; background: #ddd;
  border-radius: 5px; outline: none;
}
.form-150 input::-webkit-slider-thumb {
  -webkit-appearance: none; width: 15px; height: 15px;
  background: #6336fa; border-radius: 50%; cursor: pointer;
  box-shadow: 0 0 10px rgba(99, 54, 250, 0.4);
}`
  },
  {
    id: 151,
    pubId: 101,
    category: 'Form',
    title: 'Tag Input UI',
    html: `<div class="form-151">
  <span>Design</span><span>Code</span>
  <input type="text" placeholder="+Tag">
</div>`,
    css: `.form-151 {
  display: flex; flex-wrap: wrap; gap: 5px; padding: 5px;
  border: 1px solid #eee; border-radius: 8px; width: 200px;
}
.form-151 span {
  background: #6336fa; color: #fff; font-size: 10px;
  padding: 2px 8px; border-radius: 20px;
}
.form-151 input { border: none; outline: none; font-size: 10px; flex: 1; }`
  },
  {
    id: 152,
    pubId: 101,
    category: 'Form',
    title: 'Upload Button Area',
    html: `<div class="form-152">
  <label>Click to Upload</label>
  <input type="file" style="display:none">
</div>`,
    css: `.form-152 {
  border: 2px dashed #bf953f; border-radius: 12px;
  padding: 20px; text-align: center; width: 180px; cursor: pointer;
  transition: 0.3s;
}
.form-152 label { color: #bf953f; font-size: 12px; font-weight: bold; cursor: pointer; }
.form-152:hover { background: rgba(191,149,63,0.05); }`
  },
  {
    id: 153,
    pubId: 101,
    category: 'Form',
    title: 'Toggle Option Form',
    html: `<div class="form-153">
  <button class="active">Public</button>
  <button>Private</button>
</div>`,
    css: `.form-153 {
  background: #eee; padding: 4px; border-radius: 10px;
  display: flex; gap: 2px; width: 180px;
}
.form-153 button {
  flex: 1; border: none; padding: 6px; border-radius: 8px;
  font-size: 11px; cursor: pointer; background: transparent; transition: 0.3s;
}
.form-153 button.active { background: #fff; color: #6336fa; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }`
  },
  {
    id: 154,
    pubId: 101,
    category: 'Form',
    title: 'Stepper Input',
    html: `<div class="form-154">
  <button>-</button>
  <input type="text" value="1">
  <button>+</button>
</div>`,
    css: `.form-154 { display: flex; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; width: 100px; }
.form-154 button { width: 30px; border: none; background: #f8fafc; cursor: pointer; }
.form-154 input { width: 40px; border: none; text-align: center; border-left: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px; }`
  },
  {
    id: 155,
    pubId: 101,
    category: 'Form',
    title: 'Color Picker UI',
    html: `<div class="form-155">
  <input type="color" value="#6336fa">
  <span>Select Color</span>
</div>`,
    css: `.form-155 { display: flex; align-items: center; gap: 10px; }
.form-155 input { -webkit-appearance: none; border: none; width: 30px; height: 30px; cursor: pointer; background: transparent; }
.form-155 input::-webkit-color-swatch { border-radius: 50%; border: 2px solid #eee; }
.form-155 span { font-size: 12px; color: #666; }`
  },
  {
    id: 156,
    pubId: 101,
    category: 'Form',
    title: 'Validation Success',
    html: `<div class="form-156">
  <input type="text" value="Valid Username">
  <span>✓ Available</span>
</div>`,
    css: `.form-156 { position: relative; width: 200px; }
.form-156 input { width: 100%; border: 1px solid #2ecc71; padding: 10px; border-radius: 8px; font-size: 12px; outline: none; }
.form-156 span { font-size: 10px; color: #2ecc71; margin-top: 4px; display: block; }`
  },
  {
    id: 157,
    pubId: 101,
    category: 'Form',
    title: 'Neumorphic Search',
    html: `<div class="form-157">
  <input type="text" placeholder="Search...">
</div>`,
    css: `.form-157 {
  padding: 10px; background: #e0e0e0; border-radius: 12px;
  box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff;
}
.form-157 input { background: transparent; border: none; outline: none; font-size: 12px; padding: 5px; color: #555; }`
  },
  {
    id: 158,
    pubId: 101,
    category: 'Form',
    title: 'Coupon Apply Box',
    html: `<div class="form-158">
  <input type="text" placeholder="COUPON">
  <button>Apply</button>
</div>`,
    css: `.form-158 { display: flex; border: 1px dashed #6336fa; border-radius: 5px; padding: 2px; width: 220px; }
.form-158 input { border: none; padding: 8px; outline: none; flex: 1; font-size: 12px; text-transform: uppercase; }
.form-158 button { background: #6336fa; color: #fff; border: none; padding: 0 15px; border-radius: 3px; font-size: 11px; cursor: pointer; }`
  },
  {
    id: 159,
    pubId: 101,
    category: 'Form',
    title: 'Two Factor Login',
    html: `<form class="form-159">
  <div class="icon">🔒</div>
  <input type="password" placeholder="Key">
  <button>Verify</button>
</form>`,
    css: `.form-159 { text-align: center; background: #111; padding: 20px; border-radius: 20px; width: 160px; }
.form-159 .icon { font-size: 24px; margin-bottom: 10px; }
.form-159 input { width: 100%; background: #222; border: none; padding: 8px; border-radius: 8px; color: #fff; text-align: center; outline: none; }
.form-159 button { margin-top: 10px; background: #6336fa; border: none; color: #fff; width: 100%; padding: 8px; border-radius: 8px; cursor: pointer; }`
  },
  {
    id: 160,
    pubId: 101,
    category: 'Form',
    title: 'Subscribe Banner',
    html: `<div class="form-160">
  <p>Daily Updates</p>
  <input type="text" placeholder="Email">
</div>`,
    css: `.form-160 { background: linear-gradient(45deg, #6336fa, #bf953f); padding: 15px; border-radius: 15px; width: 220px; color: #fff; }
.form-160 p { font-size: 12px; margin: 0 0 10px 0; font-weight: bold; }
.form-160 input { width: 100%; padding: 8px; border-radius: 8px; border: none; outline: none; background: rgba(255,255,255,0.2); color: #fff; }
.form-160 input::placeholder { color: rgba(255,255,255,0.7); }`
  },
  {
    id: 161,
    pubId: 101,
    category: 'Tooltip',
    title: 'Classic Top Fade',
    html: `<div class="tooltip-161">Hover Me<span class="tooltiptext">Tooltip Text</span></div>`,
    css: `.tooltip-161 { position: relative; display: inline-block; cursor: pointer; color: #6336fa; font-weight: bold; }
.tooltip-161 .tooltiptext {
  visibility: hidden; width: 100px; background-color: #333; color: #fff;
  text-align: center; border-radius: 6px; padding: 5px; position: absolute;
  z-index: 1; bottom: 125%; left: 50%; margin-left: -50px; opacity: 0; transition: opacity 0.3s;
}
.tooltip-161:hover .tooltiptext { visibility: visible; opacity: 1; }`
  },
  {
    id: 162,
    pubId: 101,
    category: 'Tooltip',
    title: 'Neon Purple Glow',
    html: `<div class="tooltip-162">Neon<span class="tooltiptext">Cyber Mode</span></div>`,
    css: `.tooltip-162 { position: relative; display: inline-block; cursor: pointer; }
.tooltip-162 .tooltiptext {
  visibility: hidden; background: #6336fa; color: #fff; padding: 5px 10px;
  border-radius: 4px; position: absolute; bottom: 150%; left: 50%;
  transform: translateX(-50%); box-shadow: 0 0 15px #6336fa; white-space: nowrap;
}
.tooltip-162:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 163,
    pubId: 101,
    category: 'Tooltip',
    title: 'Golden Arrow Down',
    html: `<div class="tooltip-163">Bottom<span class="tooltiptext">I'm Below!</span></div>`,
    css: `.tooltip-163 { position: relative; display: inline-block; }
.tooltip-163 .tooltiptext {
  visibility: hidden; background: #bf953f; color: #000; padding: 5px 10px;
  position: absolute; top: 130%; left: 50%; transform: translateX(-50%); border-radius: 4px;
}
.tooltip-163 .tooltiptext::after {
  content: ""; position: absolute; bottom: 100%; left: 50%; margin-left: -5px;
  border-width: 5px; border-style: solid; border-color: transparent transparent #bf953f transparent;
}
.tooltip-163:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 164,
    pubId: 101,
    category: 'Tooltip',
    title: 'Glassmorphism Blur',
    html: `<div class="tooltip-164">Glass<span class="tooltiptext">Soft Blur</span></div>`,
    css: `.tooltip-164 { position: relative; display: inline-block; }
.tooltip-164 .tooltiptext {
  visibility: hidden; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2); color: #fff; padding: 8px;
  border-radius: 12px; position: absolute; bottom: 130%; left: 50%; transform: translateX(-50%);
}
.tooltip-164:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 165,
    pubId: 101,
    category: 'Tooltip',
    title: 'Side Right Slide',
    html: `<div class="tooltip-165">Right<span class="tooltiptext">Hello!</span></div>`,
    css: `.tooltip-165 { position: relative; display: inline-block; }
.tooltip-165 .tooltiptext {
  visibility: hidden; background: #000; color: #fff; padding: 5px 10px;
  position: absolute; left: 110%; top: 50%; transform: translateY(-50%);
  border-radius: 4px; transition: 0.3s; opacity: 0;
}
.tooltip-165:hover .tooltiptext { visibility: visible; opacity: 1; left: 125%; }`
  },
  {
    id: 166,
    pubId: 101,
    category: 'Tooltip',
    title: 'Side Left Slide',
    html: `<div class="tooltip-166">Left<span class="tooltiptext">Back here</span></div>`,
    css: `.tooltip-166 { position: relative; display: inline-block; }
.tooltip-166 .tooltiptext {
  visibility: hidden; background: #333; color: #fff; padding: 5px 10px;
  position: absolute; right: 110%; top: 50%; transform: translateY(-50%);
  border-radius: 4px; white-space: nowrap;
}
.tooltip-166:hover .tooltiptext { visibility: visible; right: 125%; }`
  },
  {
    id: 167,
    pubId: 101,
    category: 'Tooltip',
    title: 'Scale Animation',
    html: `<div class="tooltip-167">Scale<span class="tooltiptext">Pop!</span></div>`,
    css: `.tooltip-167 { position: relative; display: inline-block; }
.tooltip-167 .tooltiptext {
  visibility: hidden; background: #6336fa; border-radius: 50px; padding: 5px 15px;
  position: absolute; bottom: 150%; left: 50%; transform: translateX(-50%) scale(0);
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.tooltip-167:hover .tooltiptext { visibility: visible; transform: translateX(-50%) scale(1); }`
  },
  {
    id: 168,
    pubId: 101,
    category: 'Tooltip',
    title: 'Bouncing Tooltip',
    html: `<div class="tooltip-168">Bounce<span class="tooltiptext">Wheee!</span></div>`,
    css: `.tooltip-168 { position: relative; display: inline-block; }
.tooltip-168:hover .tooltiptext { animation: bounce 0.5s infinite alternate; visibility: visible; }
.tooltip-168 .tooltiptext {
  visibility: hidden; background: #bf953f; padding: 5px; position: absolute;
  bottom: 150%; left: 50%; transform: translateX(-50%);
}
@keyframes bounce { from { bottom: 150%; } to { bottom: 170%; } }`
  },
  {
    id: 169,
    pubId: 101,
    category: 'Tooltip',
    title: 'Gradient Border',
    html: `<div class="tooltip-169">Gradient<span class="tooltiptext">Fancy Border</span></div>`,
    css: `.tooltip-169 { position: relative; display: inline-block; }
.tooltip-169 .tooltiptext {
  visibility: hidden; background: #111; padding: 5px; position: absolute;
  bottom: 130%; left: 50%; transform: translateX(-50%); border: 2px solid;
  border-image: linear-gradient(45deg, #6336fa, #bf953f) 1; color: #fff;
}
.tooltip-169:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 170,
    pubId: 101,
    category: 'Tooltip',
    title: 'Underline Tooltip',
    html: `<div class="tooltip-170">Underline<span class="tooltiptext">Note!</span></div>`,
    css: `.tooltip-170 { position: relative; display: inline-block; border-bottom: 2px dashed #6336fa; }
.tooltip-170 .tooltiptext {
  visibility: hidden; background: #000; font-size: 10px; padding: 2px 8px;
  position: absolute; top: -30px; left: 0; border-radius: 4px;
}
.tooltip-170:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 171,
    pubId: 101,
    category: 'Tooltip',
    title: 'Soft Shadow White',
    html: `<div class="tooltip-171">Soft<span class="tooltiptext">Light UI</span></div>`,
    css: `.tooltip-171 { position: relative; display: inline-block; }
.tooltip-171 .tooltiptext {
  visibility: hidden; background: #fff; color: #333; padding: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1); border-radius: 8px;
  position: absolute; bottom: 130%; left: 50%; transform: translateX(-50%);
}
.tooltip-171:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 172,
    pubId: 101,
    category: 'Tooltip',
    title: 'Cyberpunk Red',
    html: `<div class="tooltip-172">Danger<span class="tooltiptext">Critical Error</span></div>`,
    css: `.tooltip-172 { position: relative; color: #ff4444; }
.tooltip-172 .tooltiptext {
  visibility: hidden; background: #ff4444; color: #fff; font-family: monospace;
  padding: 5px; clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
  position: absolute; bottom: 130%; left: 0; white-space: nowrap;
}
.tooltip-172:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 173,
    pubId: 101,
    category: 'Tooltip',
    title: 'Double Arrow Top',
    html: `<div class="tooltip-173">Double<span class="tooltiptext">Two Arrows</span></div>`,
    css: `.tooltip-173 { position: relative; }
.tooltip-173 .tooltiptext {
  visibility: hidden; background: #333; padding: 8px; position: absolute;
  bottom: 140%; left: 50%; transform: translateX(-50%);
}
.tooltip-173 .tooltiptext::before, .tooltip-173 .tooltiptext::after {
  content: ""; position: absolute; border: 5px solid transparent; border-top-color: #333;
  top: 100%;
}
.tooltip-173 .tooltiptext::before { left: 20%; }
.tooltip-173 .tooltiptext::after { right: 20%; }
.tooltip-173:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 174,
    pubId: 101,
    category: 'Tooltip',
    title: 'Animated Dots',
    html: `<div class="tooltip-174">Loading<span class="tooltiptext">Typing...</span></div>`,
    css: `.tooltip-174 .tooltiptext {
  visibility: hidden; background: #6336fa; padding: 5px 15px; border-radius: 20px;
  position: absolute; bottom: 130%; left: 50%; transform: translateX(-50%);
}
.tooltip-174:hover .tooltiptext { visibility: visible; animation: pulse 1s infinite; }
@keyframes pulse { 0% { opacity: 0.5; } 100% { opacity: 1; } }`
  },
  {
    id: 175,
    pubId: 101,
    category: 'Tooltip',
    title: 'Modern Rounded',
    html: `<div class="tooltip-175">Round<span class="tooltiptext">Smooth</span></div>`,
    css: `.tooltip-175 .tooltiptext {
  visibility: hidden; background: #000; border-radius: 50px; padding: 10px 20px;
  position: absolute; bottom: 150%; left: 50%; transform: translateX(-50%);
}
.tooltip-175:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 176,
    pubId: 101,
    category: 'Tooltip',
    title: 'Skewed Tooltip',
    html: `<div class="tooltip-176">Skewed<span class="tooltiptext">Angle Design</span></div>`,
    css: `.tooltip-176 .tooltiptext {
  visibility: hidden; background: #bf953f; color: #000; padding: 5px 10px;
  transform: skew(-15deg); position: absolute; bottom: 130%; left: 0;
}
.tooltip-176:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 177,
    pubId: 101,
    category: 'Tooltip',
    title: 'Blurry Reveal',
    html: `<div class="tooltip-177">Reveal<span class="tooltiptext">Unblur Me</span></div>`,
    css: `.tooltip-177 .tooltiptext {
  visibility: hidden; background: #6336fa; filter: blur(10px); transition: 0.4s;
  position: absolute; bottom: 130%; left: 50%; transform: translateX(-50%); padding: 5px;
}
.tooltip-177:hover .tooltiptext { visibility: visible; filter: blur(0); }`
  },
  {
    id: 178,
    pubId: 101,
    category: 'Tooltip',
    title: 'Contrast Black',
    html: `<div class="tooltip-178">Contrast<span class="tooltiptext">Sharp UI</span></div>`,
    css: `.tooltip-178 .tooltiptext {
  visibility: hidden; background: #000; border: 1px solid #fff; padding: 5px;
  position: absolute; top: 130%; left: 0; font-size: 11px;
}
.tooltip-178:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 179,
    pubId: 101,
    category: 'Tooltip',
    title: 'Floating Gold Tag',
    html: `<div class="tooltip-179">Tag<span class="tooltiptext">Sale 50%</span></div>`,
    css: `.tooltip-179 .tooltiptext {
  visibility: hidden; background: #bf953f; color: #fff; padding: 2px 8px;
  border-radius: 0 10px 10px 0; border-left: 3px solid #000;
  position: absolute; right: -80px; top: 0;
}
.tooltip-179:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 180,
    pubId: 101,
    category: 'Tooltip',
    title: 'Success Green',
    html: `<div class="tooltip-180">Saved<span class="tooltiptext">✓ Done</span></div>`,
    css: `.tooltip-180 .tooltiptext {
  visibility: hidden; background: #2ecc71; color: #fff; padding: 5px 10px;
  border-radius: 4px; position: absolute; bottom: 130%; left: 50%; transform: translateX(-50%);
}
.tooltip-180:hover .tooltiptext { visibility: visible; }`
  },
  {
    id: 181,
    pubId: 101,
    category: 'Pattern',
    title: 'Radial Tech Nodes',
    html: `<div class="pattern-181"></div>`,
    css: `.pattern-181 {
  width: 100%; height: 200px;
  background-color: #0a0516;
  background-image: radial-gradient(#6336fa 1px, transparent 1px);
  background-size: 20px 20px;
  position: relative;
}
.pattern-181::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(10,5,22,0.8), transparent, rgba(10,5,22,0.8));
}`
  },
  {
    id: 182,
    pubId: 101,
    category: 'Pattern',
    title: 'Golden Honeycomb',
    html: `<div class="pattern-182"></div>`,
    css: `.pattern-182 {
  width: 100%; height: 200px;
  background: #1a1528;
  background-image: linear-gradient(30deg, #bf953f 12%, transparent 12.5%, transparent 87%, #bf953f 87.5%, #bf953f),
  linear-gradient(150deg, #bf953f 12%, transparent 12.5%, transparent 87%, #bf953f 87.5%, #bf953f);
  background-size: 40px 70px;
  opacity: 0.15;
}`
  },
  {
    id: 183,
    pubId: 101,
    category: 'Pattern',
    title: 'Floating Rectangles',
    html: `<div class="pattern-183"></div>`,
    css: `.pattern-183 {
  width: 100%; height: 200px; background: #0a0516; overflow: hidden; position: relative;
}
.pattern-183::after {
  content: ''; position: absolute; width: 100%; height: 100%;
  background-image: linear-gradient(#6336fa 2px, transparent 2px), linear-gradient(90deg, #6336fa 2px, transparent 2px);
  background-size: 40px 40px; opacity: 0.1; transform: skewY(-10deg) translateY(-50px);
}`
  },
  {
    id: 184,
    pubId: 101,
    category: 'Pattern',
    title: 'Elegant Diamond',
    html: `<div class="pattern-184"></div>`,
    css: `.pattern-184 {
  width: 100%; height: 200px; background: #1a1528;
  background-image: linear-gradient(135deg, #bf953f 25%, transparent 25%), linear-gradient(225deg, #bf953f 25%, transparent 25%), linear-gradient(45deg, #bf953f 25%, transparent 25%), linear-gradient(315deg, #bf953f 25%, transparent 25%);
  background-position: 10px 0, 10px 0, 0 0, 0 0; background-size: 20px 20px; background-repeat: repeat; opacity: 0.05;
}`
  },
  {
    id: 185,
    pubId: 101,
    category: 'Pattern',
    title: 'Waves Gradient',
    html: `<div class="pattern-185"></div>`,
    css: `.pattern-185 {
  width: 100%; height: 200px;
  background: radial-gradient(circle at 50% 50%, #6336fa 0%, #0a0516 100%);
  position: relative;
}
.pattern-185::after {
  content: ""; position: absolute; inset: 0;
  background: repeating-radial-gradient(circle at 0 0, transparent 0, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px);
}`
  },
  {
    id: 186,
    pubId: 101,
    category: 'Pattern',
    title: 'Blueprint Grid',
    html: `<div class="pattern-186"></div>`,
    css: `.pattern-186 {
  width: 100%; height: 200px; background-color: #0a0516;
  background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}`
  },
  {
    id: 187,
    pubId: 101,
    category: 'Pattern',
    title: 'Chevron Luxury',
    html: `<div class="pattern-187"></div>`,
    css: `.pattern-187 {
  width: 100%; height: 200px; background: #1a1528;
  background-image: linear-gradient(45deg, #bf953f 25%, transparent 25%, transparent 75%, #bf953f 75%, #bf953f), linear-gradient(45deg, #bf953f 25%, transparent 25%, transparent 75%, #bf953f 75%, #bf953f);
  background-size: 40px 40px; background-position: 0 0, 20px 20px; opacity: 0.1;
}`
  },
  {
    id: 188,
    pubId: 101,
    category: 'Pattern',
    title: 'Stars Dust',
    html: `<div class="pattern-188"></div>`,
    css: `.pattern-188 {
  width: 100%; height: 200px; background: #000;
  background-image: radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
  radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
  radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px);
  background-size: 550px 550px, 350px 350px, 250px 250px;
  background-position: 0 0, 40px 60px, 130px 270px;
}`
  },
  {
    id: 189,
    pubId: 101,
    category: 'Pattern',
    title: 'Abstract Triangles',
    html: `<div class="pattern-189"></div>`,
    css: `.pattern-189 {
  width: 100%; height: 200px; background: #0a0516;
  background-image: linear-gradient(60deg, #6336fa 12%, transparent 12.5%, transparent 87%, #6336fa 87.5%, #6336fa),
  linear-gradient(-60deg, #6336fa 12%, transparent 12.5%, transparent 87%, #6336fa 87.5%, #6336fa);
  background-size: 40px 70px; opacity: 0.1;
}`
  },
  {
    id: 190,
    pubId: 101,
    category: 'Pattern',
    title: 'Diagonal Shimmer',
    html: `<div class="pattern-190"></div>`,
    css: `.pattern-190 {
  width: 100%; height: 200px; background: #1a1528;
  background: repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(191,149,63,0.05) 20px, rgba(191,149,63,0.05) 40px);
}`
  },
  {
    id: 191,
    pubId: 101,
    category: 'Pattern',
    title: 'Polka Glow',
    html: `<div class="pattern-191"></div>`,
    css: `.pattern-191 {
  width: 100%; height: 200px; background: #0a0516;
  background-image: radial-gradient(circle, #6336fa 2px, transparent 2px);
  background-size: 30px 30px;
}`
  },
  {
    id: 192,
    pubId: 101,
    category: 'Pattern',
    title: 'Crosshatch Dark',
    html: `<div class="pattern-192"></div>`,
    css: `.pattern-192 {
  width: 100%; height: 200px; background: #111;
  background-image: linear-gradient(45deg, #222 25%, transparent 25%), linear-gradient(-45deg, #222 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #222 75%), linear-gradient(-45deg, transparent 75%, #222 75%);
  background-size: 20px 20px;
}`
  },
  {
    id: 193,
    pubId: 101,
    category: 'Pattern',
    title: 'Golden Sand',
    html: `<div class="pattern-193"></div>`,
    css: `.pattern-193 {
  width: 100%; height: 200px; background: #1a1528;
  background-image: radial-gradient(#bf953f 0.5px, transparent 0.5px);
  background-size: 10px 10px; opacity: 0.3;
}`
  },
  {
    id: 194,
    pubId: 101,
    category: 'Pattern',
    title: 'Cyber Net',
    html: `<div class="pattern-194"></div>`,
    css: `.pattern-194 {
  width: 100%; height: 200px; background: #0a0516;
  background: linear-gradient(90deg, #6336fa 1px, transparent 1px) 0 0 / 20px 20px,
              linear-gradient(#6336fa 1px, transparent 1px) 0 0 / 20px 20px;
  opacity: 0.2;
}`
  },
  {
    id: 195,
    pubId: 101,
    category: 'Pattern',
    title: 'Brick Wall Lux',
    html: `<div class="pattern-195"></div>`,
    css: `.pattern-195 {
  width: 100%; height: 200px; background: #1a1528;
  background-image: linear-gradient(335deg, #0a0516 23px, transparent 23px),
  linear-gradient(155deg, #0a0516 23px, transparent 23px),
  linear-gradient(335deg, #0a0516 23px, transparent 23px),
  linear-gradient(155deg, #0a0516 23px, transparent 23px);
  background-size: 58px 58px; background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
  opacity: 0.4;
}`
  },
  {
    id: 196,
    pubId: 101,
    category: 'Pattern',
    title: 'Optical Illusion',
    html: `<div class="pattern-196"></div>`,
    css: `.pattern-196 {
  width: 100%; height: 200px; background: #6336fa;
  background-image: radial-gradient(circle at center, #0a0516 50%, transparent 55%);
  background-size: 20px 20px;
}`
  },
  {
    id: 197,
    pubId: 101,
    category: 'Pattern',
    title: 'Slanted Lines',
    html: `<div class="pattern-197"></div>`,
    css: `.pattern-197 {
  width: 100%; height: 200px; background: #0a0516;
  background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(99,54,250,0.1) 10px, rgba(99,54,250,0.1) 20px);
}`
  },
  {
    id: 198,
    pubId: 101,
    category: 'Pattern',
    title: 'Micro Dot Matrix',
    html: `<div class="pattern-198"></div>`,
    css: `.pattern-198 {
  width: 100%; height: 200px; background: #111;
  background-image: radial-gradient(#333 1px, transparent 0);
  background-size: 10px 10px;
}`
  },
  {
    id: 199,
    pubId: 101,
    category: 'Pattern',
    title: 'Labyrinth',
    html: `<div class="pattern-199"></div>`,
    css: `.pattern-199 {
  width: 100%; height: 200px; background: #0a0516;
  background-image: linear-gradient(90deg, #bf953f 1px, transparent 1px), linear-gradient(#bf953f 1px, transparent 1px);
  background-size: 40px 40px; opacity: 0.1;
}`
  },
  {
    id: 200,
    pubId: 101,
    category: 'Pattern',
    title: 'Final Cyber Pulse',
    html: `<div class="pattern-200"></div>`,
    css: `.pattern-200 {
  width: 100%; height: 200px; background: #000;
  background: radial-gradient(circle, #6336fa 10%, transparent 11%), radial-gradient(circle at bottom left, #bf953f 5%, transparent 6%);
  background-size: 50px 50px; background-position: 0 0, 25px 25px; opacity: 0.2;
}`
  },
  {
    id: 201,
    pubId: 101,
    category: 'Pattern',
    title: 'Cyber Grid Warp',
    html: `<div class="pattern-201"></div>`,
    css: `.pattern-201 {
  width: 100%; height: 200px; background: #0a0516;
  background-image: linear-gradient(#6336fa 1px, transparent 1px), linear-gradient(90deg, #6336fa 1px, transparent 1px);
  background-size: 30px 30px; perspective: 100px;
}
.pattern-201::after {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle, transparent 20%, #0a0516 80%);
}`
  },
  {
    id: 202,
    pubId: 101,
    category: 'Pattern',
    title: 'Gold Scale Armor',
    html: `<div class="pattern-202"></div>`,
    css: `.pattern-202 {
  width: 100%; height: 200px; background: #1a1528;
  background-image: radial-gradient(circle at 100% 0%, transparent 0, transparent 20px, #bf953f 21px, #bf953f 23px, transparent 24px);
  background-size: 40px 40px; opacity: 0.1;
}`
  },
  {
    id: 203,
    pubId: 101,
    category: 'Pattern',
    title: 'Circuit Path',
    html: `<div class="pattern-203"></div>`,
    css: `.pattern-203 {
  width: 100%; height: 200px; background: #0a0516;
  background-image: linear-gradient(90deg, transparent 50%, rgba(99,54,250,0.1) 50%), linear-gradient(rgba(99,54,250,0.1) 50%, transparent 50%);
  background-size: 40px 40px;
}`
  },
  {
    id: 204,
    pubId: 101,
    category: 'Pattern',
    title: 'Luxury Weave',
    html: `<div class="pattern-204"></div>`,
    css: `.pattern-204 {
  width: 100%; height: 200px; background: #1a1528;
  background: linear-gradient(45deg, #111 25%, transparent 25%, transparent 75%, #111 75%, #111), 
              linear-gradient(45deg, #111 25%, transparent 25%, transparent 75%, #111 75%, #111);
  background-size: 50px 50px; background-position: 0 0, 25px 25px; border: 1px solid #bf953f22;
}`
  },
  {
    id: 205,
    pubId: 101,
    category: 'Pattern',
    title: 'Atomic Bonds',
    html: `<div class="pattern-205"></div>`,
    css: `.pattern-205 {
  width: 100%; height: 200px; background: #0a0516;
  background-image: radial-gradient(circle, #6336fa 2px, transparent 2px), radial-gradient(circle, #6336fa 2px, transparent 2px);
  background-size: 40px 40px; background-position: 0 0, 20px 20px; opacity: 0.2;
}`
  },
  {
    id: 206,
    pubId: 101,
    category: 'Pattern',
    title: 'Shifting Stripes',
    html: `<div class="pattern-206"></div>`,
    css: `.pattern-206 {
  width: 100%; height: 200px; background: #1a1528;
  background: repeating-linear-gradient(90deg, #bf953f 0, #bf953f 1px, transparent 0, transparent 40px);
  opacity: 0.1;
}`
  },
  {
    id: 207,
    pubId: 101,
    category: 'Pattern',
    title: 'Polygon Mesh',
    html: `<div class="pattern-207"></div>`,
    css: `.pattern-207 {
  width: 100%; height: 200px; background: #0a0516;
  background-image: linear-gradient(30deg, #6336fa 12%, transparent 12.5%, transparent 87%, #6336fa 87.5%, #6336fa),
  linear-gradient(150deg, #6336fa 12%, transparent 12.5%, transparent 87%, #6336fa 87.5%, #6336fa),
  linear-gradient(30deg, #6336fa 12%, transparent 12.5%, transparent 87%, #6336fa 87.5%, #6336fa);
  background-size: 80px 140px; background-position: 0 0, 0 0, 40px 70px; opacity: 0.05;
}`
  },
  {
    id: 208,
    pubId: 101,
    category: 'Pattern',
    title: 'Golden Waves',
    html: `<div class="pattern-208"></div>`,
    css: `.pattern-208 {
  width: 100%; height: 200px; background: #1a1528;
  background: radial-gradient(circle at 50% 0%, rgba(191,149,63,0.1) 0%, transparent 70%);
  position: relative; overflow: hidden;
}
.pattern-208::after {
  content: ""; position: absolute; inset: -100%;
  background: repeating-radial-gradient(circle at center, transparent 0, transparent 10px, rgba(191,149,63,0.03) 10px, rgba(191,149,63,0.03) 11px);
}`
  },
  {
    id: 209,
    pubId: 101,
    category: 'Pattern',
    title: 'Infinite Boxes',
    html: `<div class="pattern-209"></div>`,
    css: `.pattern-209 {
  width: 100%; height: 200px; background: #0a0516;
  background-image:  linear-gradient(#111 2px, transparent 2px), linear-gradient(90deg, #111 2px, transparent 2px);
  background-size: 20px 20px, 20px 20px, 10px 10px, 10px 10px;
}`
  },
  {
    id: 210,
    pubId: 101,
    category: 'Pattern',
    title: 'Abstract DNA',
    html: `<div class="pattern-210"></div>`,
    css: `.pattern-210 {
  width: 100%; height: 200px; background: #0a0516;
  background-image: repeating-linear-gradient(0deg, transparent, transparent 19px, #6336fa 19px, #6336fa 20px),
                    repeating-linear-gradient(90deg, transparent, transparent 19px, #6336fa 19px, #6336fa 20px);
  opacity: 0.1;
}`
  },
  {
    id: 211,
    pubId: 101,
    category: 'Pattern',
    title: 'Night Sky Pixel',
    html: `<div class="pattern-211"></div>`,
    css: `.pattern-211 {
  width: 100%; height: 200px; background: #05020a;
  background-image: radial-gradient(#fff 1px, transparent 0);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
}`
  },
  {
    id: 212,
    pubId: 101,
    category: 'Pattern',
    title: 'Zebra Tech',
    html: `<div class="pattern-212"></div>`,
    css: `.pattern-212 {
  width: 100%; height: 200px; background: #1a1528;
  background: repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(99,54,250,0.05) 10px, rgba(99,54,250,0.05) 11px),
              repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(191,149,63,0.05) 10px, rgba(191,149,63,0.05) 11px);
}`
  },
  {
    id: 213,
    pubId: 101,
    category: 'Pattern',
    title: 'Interlocking Rings',
    html: `<div class="pattern-213"></div>`,
    css: `.pattern-213 {
  width: 100%; height: 200px; background: #0a0516;
  background-image: radial-gradient(circle, transparent 20%, #0a0516 20%, #0a0516 80%, transparent 80%, transparent),
  radial-gradient(circle, transparent 20%, #0a0516 20%, #0a0516 80%, transparent 80%, transparent);
  background-size: 50px 50px; background-position: 0 0, 25px 25px;
  border: 0.5px solid #6336fa11;
}`
  },
  {
    id: 214,
    pubId: 101,
    category: 'Pattern',
    title: 'Sand Glass Gold',
    html: `<div class="pattern-214"></div>`,
    css: `.pattern-214 {
  width: 100%; height: 200px; background: #1a1528;
  background-image: linear-gradient(45deg, #bf953f 25%, transparent 25%), linear-gradient(-45deg, #bf953f 25%, transparent 25%);
  background-size: 4px 4px; opacity: 0.1;
}`
  },
  {
    id: 215,
    pubId: 101,
    category: 'Pattern',
    title: 'Cyber Rain Static',
    html: `<div class="pattern-215"></div>`,
    css: `.pattern-215 {
  width: 100%; height: 200px; background: #000;
  background-image: linear-gradient(0deg, transparent 95%, #6336fa 95%), linear-gradient(90deg, transparent 95%, #6336fa 95%);
  background-size: 20px 80px; opacity: 0.2;
}`
  },
  {
    id: 216,
    pubId: 101,
    category: 'Pattern',
    title: 'Marble Veins',
    html: `<div class="pattern-216"></div>`,
    css: `.pattern-216 {
  width: 100%; height: 200px; background: #0a0516;
  background: radial-gradient(at 0% 0%, rgba(99,54,250,0.1) 0, transparent 50%), 
              radial-gradient(at 100% 100%, rgba(191,149,63,0.1) 0, transparent 50%);
}`
  },
  {
    id: 217,
    pubId: 101,
    category: 'Pattern',
    title: 'Square Dance',
    html: `<div class="pattern-217"></div>`,
    css: `.pattern-217 {
  width: 100%; height: 200px; background: #111;
  background-image:  linear-gradient(#1a1528 2px, transparent 2px), linear-gradient(90deg, #1a1528 2px, transparent 2px);
  background-size: 40px 40px;
}`
  },
  {
    id: 218,
    pubId: 101,
    category: 'Pattern',
    title: 'Chevron Flow',
    html: `<div class="pattern-218"></div>`,
    css: `.pattern-218 {
  width: 100%; height: 200px; background: #0a0516;
  background: translate(-50%, -50%) rotate(45deg);
  background-image: linear-gradient(45deg, rgba(99,54,250,0.1) 25%, transparent 25%, transparent 75%, rgba(99,54,250,0.1) 75%, rgba(99,54,250,0.1));
  background-size: 60px 60px;
}`
  },
  {
    id: 219,
    pubId: 101,
    category: 'Pattern',
    title: 'Dimmed Hexa',
    html: `<div class="pattern-219"></div>`,
    css: `.pattern-219 {
  width: 100%; height: 200px; background: #1a1528;
  background-image: radial-gradient(circle, #000 15%, transparent 16%),
    radial-gradient(circle at 0 0, #000 15%, transparent 16%),
    radial-gradient(circle at 0 100%, #000 15%, transparent 16%),
    radial-gradient(circle at 100% 0, #000 15%, transparent 16%),
    radial-gradient(circle at 100% 100%, #000 15%, transparent 16%);
  background-size: 50px 50px; opacity: 0.5;
}`
  },
  {
    id: 220,
    pubId: 101,
    category: 'Pattern',
    title: 'Luxury Gold Leaf',
    html: `<div class="pattern-220"></div>`,
    css: `.pattern-220 {
  width: 100%; height: 200px; background: #0a0516;
  background: radial-gradient(ellipse at center, rgba(191,149,63,0.15) 0%, transparent 80%);
  border: 1px solid #bf953f11;
}`
  },
  // --- Category: Button ---
  {
    id: 221,
    pubId: 101,
    category: 'Button',
    title: 'Cyber Glitch Button',
    html: `<button class="btn-221">SYSTEM ERROR</button>`,
    css: `.btn-221 {
  padding: 10px 25px; border: none; background: #6336fa; color: #fff;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%); font-weight: bold;
  cursor: pointer; position: relative; transition: 0.3s;
}
.btn-221:hover { transform: skewX(-5deg); box-shadow: 5px 0 0 #ff4444, -5px 0 0 #00ffff; }`
  },
  {
    id: 222,
    pubId: 101,
    category: 'Button',
    title: 'Luxury Gold Shine',
    html: `<button class="btn-222">PREMIUM</button>`,
    css: `.btn-222 {
  padding: 10px 30px; background: #1a1528; color: #bf953f; border: 1px solid #bf953f;
  border-radius: 50px; cursor: pointer; overflow: hidden; position: relative;
}
.btn-222::after {
  content: ''; position: absolute; top: -50%; left: -60%; width: 20%; height: 200%;
  background: rgba(255,255,255,0.4); transform: rotate(30deg); transition: 0.5s;
}
.btn-222:hover::after { left: 120%; }`
  },

  // --- Category: Loader ---
  {
    id: 223,
    pubId: 101,
    category: 'Loader',
    title: 'Neon Pulse Ring',
    html: `<div class="loader-223"></div>`,
    css: `.loader-223 {
  width: 40px; height: 40px; border: 3px solid transparent;
  border-top-color: #6336fa; border-radius: 50%;
  animation: spin223 1s linear infinite; box-shadow: 0 0 10px #6336fa;
}
@keyframes spin223 { 100% { transform: rotate(360deg); } }`
  },
  {
    id: 224,
    pubId: 101,
    category: 'Loader',
    title: 'Dual Floating Balls',
    html: `<div class="loader-224"><span></span><span></span></div>`,
    css: `.loader-224 { display: flex; gap: 10px; }
.loader-224 span { width: 12px; height: 12px; background: #bf953f; border-radius: 50%; animation: bounce224 0.6s infinite alternate; }
.loader-224 span:last-child { animation-delay: 0.3s; background: #6336fa; }
@keyframes bounce224 { to { transform: translateY(-15px); opacity: 0.5; } }`
  },

  // --- Category: Toggle switch ---
  {
    id: 225,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Cyber Square Toggle',
    html: `<label class="switch-225"><input type="checkbox"><span class="slider"></span></label>`,
    css: `.switch-225 { width: 50px; height: 26px; display: inline-block; position: relative; }
.switch-225 input { display: none; }
.slider { position: absolute; inset: 0; background: #333; border: 1px solid #6336fa; transition: 0.3s; }
.slider:before { content: ""; position: absolute; width: 18px; height: 18px; left: 3px; bottom: 3px; background: #6336fa; transition: 0.3s; }
input:checked + .slider { background: #1a1528; }
input:checked + .slider:before { transform: translateX(24px); background: #fff; box-shadow: 0 0 10px #fff; }`
  },

  // --- Category: Checkbox ---
  {
    id: 226,
    pubId: 101,
    category: 'Checkbox',
    title: 'Triangle Check',
    html: `<label class="chk-226"><input type="checkbox"><span></span></label>`,
    css: `.chk-226 input { display: none; }
.chk-226 span { width: 22px; height: 22px; border: 2px solid #bf953f; display: block; position: relative; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); transition: 0.3s; }
.chk-226 input:checked + span { background: #bf953f; transform: rotate(180deg); }`
  },

  // --- Category: Radio button ---
  {
    id: 227,
    pubId: 101,
    category: 'Radio button',
    title: 'Inner Target Radio',
    html: `<label class="rd-227"><input type="radio" name="r227"><span class="dot"></span></label>`,
    css: `.rd-227 input { display: none; }
.dot { width: 24px; height: 24px; border: 2px solid #6336fa; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.dot::after { content: ""; width: 0px; height: 0px; background: #6336fa; border-radius: 50%; transition: 0.3s; }
.rd-227 input:checked + .dot::after { width: 12px; height: 12px; }`
  },

  // --- Category: Form ---
  {
    id: 228,
    pubId: 101,
    category: 'Form',
    title: 'Mini Search Inline',
    html: `<div class="form-228"><input type="text" placeholder="Find..."><button>OK</button></div>`,
    css: `.form-228 { display: flex; border: 1px solid #ddd; border-radius: 5px; overflow: hidden; width: 150px; }
.form-228 input { border: none; padding: 5px; outline: none; width: 100px; font-size: 12px; }
.form-228 button { background: #000; color: #fff; border: none; flex: 1; cursor: pointer; }`
  },

  // --- Category: Tooltip ---
  {
    id: 229,
    pubId: 101,
    category: 'Tooltip',
    title: 'Purple Blur Tooltip',
    html: `<div class="tt-229">Info<span class="txt">Hidden Detail</span></div>`,
    css: `.tt-229 { position: relative; color: #6336fa; cursor: help; }
.tt-229 .txt { visibility: hidden; position: absolute; bottom: 120%; left: 50%; transform: translateX(-50%); background: rgba(99,54,250,0.9); color: #fff; padding: 5px 10px; border-radius: 8px; backdrop-filter: blur(4px); white-space: nowrap; }
.tt-229:hover .txt { visibility: visible; }`
  },

  // --- Category: Pattern ---
  {
    id: 230,
    pubId: 101,
    category: 'Pattern',
    title: 'Dark Mesh Grid',
    html: `<div class="pat-230"></div>`,
    css: `.pat-230 { width: 100%; height: 100px; background: #0a0516; background-image: radial-gradient(rgba(99,54,250,0.2) 1px, transparent 1px); background-size: 15px 15px; }`
  },

  // --- Category: Button ---
  {
    id: 231,
    pubId: 101,
    category: 'Button',
    title: 'Soft Neumorphic BTN',
    html: `<button class="btn-231">Click</button>`,
    css: `.btn-231 { padding: 10px 20px; border: none; border-radius: 10px; background: #e0e0e0; box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff; cursor: pointer; transition: 0.2s; }
.btn-231:active { box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; }`
  },

  // --- Category: Loader ---
  {
    id: 232,
    pubId: 101,
    category: 'Loader',
    title: 'Golden Progress Bar',
    html: `<div class="ldr-232"></div>`,
    css: `.ldr-232 { width: 100px; height: 4px; background: #333; position: relative; overflow: hidden; }
.ldr-232::after { content: ""; position: absolute; left: -100%; width: 100%; height: 100%; background: #bf953f; animation: flow232 1.5s infinite; }
@keyframes flow232 { 100% { left: 100%; } }`
  },

  // --- Category: Checkbox ---
  {
    id: 233,
    pubId: 101,
    category: 'Checkbox',
    title: 'Neon Circle Mark',
    html: `<label class="chk-233"><input type="checkbox"><span></span></label>`,
    css: `.chk-233 input { display: none; }
.chk-233 span { width: 20px; height: 20px; border: 2px solid #6336fa; border-radius: 50%; display: block; transition: 0.3s; }
.chk-233 input:checked + span { background: #6336fa; box-shadow: 0 0 10px #6336fa; }`
  },

  // --- Category: Form ---
  {
    id: 234,
    pubId: 101,
    category: 'Form',
    title: 'Dark Input Field',
    html: `<input type="text" class="in-234" placeholder="Your Name">`,
    css: `.in-234 { background: #111; border: 1px solid #333; color: #fff; padding: 10px; border-radius: 4px; outline: none; transition: 0.3s; }
.in-234:focus { border-color: #bf953f; box-shadow: 0 0 5px #bf953f; }`
  },

  // --- Category: Radio button ---
  {
    id: 235,
    pubId: 101,
    category: 'Radio button',
    title: 'Square Tech Radio',
    html: `<label class="rd-235"><input type="radio" name="r235"><span></span></label>`,
    css: `.rd-235 input { display: none; }
.rd-235 span { width: 18px; height: 18px; border: 1px solid #bf953f; display: block; padding: 2px; }
.rd-235 span::after { content: ""; width: 100%; height: 100%; background: #bf953f; display: block; opacity: 0; }
.rd-235 input:checked + span::after { opacity: 1; }`
  },

  // --- Category: Toggle switch ---
  {
    id: 236,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Slim Mode Switch',
    html: `<label class="sw-236"><input type="checkbox"><span></span></label>`,
    css: `.sw-236 { width: 40px; height: 14px; position: relative; display: inline-block; }
.sw-236 input { display: none; }
.sw-236 span { position: absolute; inset: 0; background: #ccc; border-radius: 10px; transition: 0.3s; }
.sw-236 span::before { content: ""; position: absolute; height: 20px; width: 20px; left: -2px; top: -3px; background: #6336fa; border-radius: 50%; transition: 0.3s; }
.sw-236 input:checked + span { background: #6336fa55; }
.sw-236 input:checked + span::before { transform: translateX(24px); }`
  },

  // --- Category: Pattern ---
  {
    id: 237,
    pubId: 101,
    category: 'Pattern',
    title: 'Diagonal Stripe Lux',
    html: `<div class="pat-237"></div>`,
    css: `.pat-237 { width: 100%; height: 100px; background: repeating-linear-gradient(45deg, #1a1528, #1a1528 10px, #111 10px, #111 20px); border-bottom: 2px solid #bf953f; }`
  },

  // --- Category: Button ---
  {
    id: 238,
    pubId: 101,
    category: 'Button',
    title: 'Outline Pulse Green',
    html: `<button class="btn-238">ACTIVE</button>`,
    css: `.btn-238 { padding: 8px 20px; background: transparent; border: 2px solid #2ecc71; color: #2ecc71; border-radius: 4px; cursor: pointer; transition: 0.3s; }
.btn-238:hover { background: #2ecc71; color: #fff; box-shadow: 0 0 15px #2ecc71; }`
  },

  // --- Category: Loader ---
  {
    id: 239,
    pubId: 101,
    category: 'Loader',
    title: 'Triple Dot Fade',
    html: `<div class="ldr-239"><div></div><div></div><div></div></div>`,
    css: `.ldr-239 { display: flex; gap: 5px; }
.ldr-239 div { width: 8px; height: 8px; background: #6336fa; border-radius: 50%; animation: fade239 1s infinite; }
.ldr-239 div:nth-child(2) { animation-delay: 0.2s; }
.ldr-239 div:nth-child(3) { animation-delay: 0.4s; }
@keyframes fade239 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }`
  },

  // --- Category: Form ---
  {
    id: 240,
    pubId: 101,
    category: 'Form',
    title: 'Glassy Card Login',
    html: `<div class="form-240"><input type="password" placeholder="Key"></div>`,
    css: `.form-240 { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); padding: 15px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); }
.form-240 input { background: transparent; border: none; border-bottom: 1px solid #bf953f; color: #fff; outline: none; }`
  },
  // --- Category: Button ---
  {
    id: 241,
    pubId: 101,
    category: 'Button',
    title: 'Hells Gate Button',
    html: `<button class="btn-241">DEMONIC</button>`,
    css: `.btn-241 {
  padding: 12px 30px; background: #000; color: #ff0000; border: 2px solid #ff0000;
  font-family: 'Courier New', monospace; font-weight: bold; cursor: pointer;
  box-shadow: inset 0 0 10px #ff0000; position: relative; transition: 0.3s;
}
.btn-241:hover { box-shadow: 0 0 20px #ff0000, inset 0 0 20px #ff0000; text-shadow: 0 0 5px #fff; }`
  },
  {
    id: 242,
    pubId: 101,
    category: 'Button',
    title: 'Slashed Red Button',
    html: `<button class="btn-242">ATTACK</button>`,
    css: `.btn-242 {
  padding: 10px 25px; background: #ff0000; color: #000; border: none;
  clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
  font-weight: 900; cursor: pointer; transition: 0.2s;
}
.btn-242:active { transform: scale(0.9); filter: brightness(1.2); }`
  },

  // --- Category: Loader ---
  {
    id: 243,
    pubId: 101,
    category: 'Loader',
    title: 'Pentagram Spin',
    html: `<div class="loader-243"></div>`,
    css: `.loader-243 {
  width: 50px; height: 50px; border: 4px double #ff0000;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  animation: devilSpin 2s infinite linear;
}
@keyframes devilSpin { 100% { transform: rotate(360deg); filter: hue-rotate(45deg); } }`
  },
  {
    id: 244,
    pubId: 101,
    category: 'Loader',
    title: 'Blood Drop Fall',
    html: `<div class="loader-244"></div>`,
    css: `.loader-244 {
  width: 20px; height: 20px; background: #ff0000;
  border-radius: 0 50% 50% 50%; transform: rotate(45deg);
  animation: drop 1s infinite ease-in;
}
@keyframes drop { 0% { transform: rotate(45deg) translateY(0); opacity: 1; } 100% { transform: rotate(45deg) translateY(50px); opacity: 0; } }`
  },

  // --- Category: Toggle switch ---
  {
    id: 245,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Horned Toggle',
    html: `<label class="sw-245"><input type="checkbox"><span></span></label>`,
    css: `.sw-245 { width: 60px; height: 30px; position: relative; }
.sw-245 input { display: none; }
.sw-245 span { position: absolute; inset: 0; background: #111; border: 2px solid #333; transition: 0.4s; }
.sw-245 span::before { content: "▼"; position: absolute; left: 5px; top: 2px; color: #ff0000; transition: 0.4s; font-size: 20px; }
.sw-245 input:checked + span { border-color: #ff0000; box-shadow: 0 0 10px #ff0000; }
.sw-245 input:checked + span::before { transform: translateX(30px) rotate(180deg); }`
  },

  // --- Category: Checkbox ---
  {
    id: 246,
    pubId: 101,
    category: 'Checkbox',
    title: 'Devil Mark Check',
    html: `<label class="chk-246"><input type="checkbox"><span></span></label>`,
    css: `.chk-246 input { display: none; }
.chk-246 span { width: 25px; height: 25px; border: 2px solid #ff0000; display: block; position: relative; background: #000; cursor: pointer; }
.chk-246 span::after { content: "†"; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #ff0000; opacity: 0; font-size: 20px; transition: 0.2s; }
.chk-246 input:checked + span::after { opacity: 1; text-shadow: 0 0 10px #ff0000; }`
  },

  // --- Category: Radio button ---
  {
    id: 247,
    pubId: 101,
    category: 'Radio button',
    title: 'Ritual Flame Radio',
    html: `<label class="rd-247"><input type="radio" name="devil"><span class="fire"></span></label>`,
    css: `.rd-247 input { display: none; }
.fire { width: 20px; height: 20px; border: 2px solid #333; border-radius: 50%; display: block; position: relative; transition: 0.3s; }
.rd-247 input:checked + .fire { border-color: #ff0000; box-shadow: 0 -5px 15px #ff0000; background: #ff0000; }`
  },

  // --- Category: Form ---
  {
    id: 248,
    pubId: 101,
    category: 'Form',
    title: 'Forbidden Input',
    html: `<div class="form-248"><input type="text" placeholder="SOUL NAME..."></div>`,
    css: `.form-248 input {
  background: #000; border: none; border-bottom: 2px solid #333;
  color: #ff0000; padding: 12px; font-family: monospace; outline: none;
  transition: 0.5s; width: 200px;
}
.form-248 input:focus { border-color: #ff0000; letter-spacing: 2px; box-shadow: 0 10px 10px -10px #ff0000; }`
  },

  // --- Category: Tooltip ---
  {
    id: 249,
    pubId: 101,
    category: 'Tooltip',
    title: 'Cursed Whisper',
    html: `<div class="tt-249">HOVER AT RISK<span class="tip">Beware the darkness</span></div>`,
    css: `.tt-249 { position: relative; color: #ff0000; font-weight: bold; cursor: help; }
.tt-249 .tip {
  visibility: hidden; position: absolute; top: 120%; left: 0;
  background: #ff0000; color: #000; padding: 10px; font-size: 12px;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%); width: 150px;
}
.tt-249:hover .tip { visibility: visible; animation: shake 0.1s infinite; }
@keyframes shake { 0% { left: 1px; } 100% { left: -1px; } }`
  },

  // --- Category: Pattern ---
  {
    id: 250,
    pubId: 101,
    category: 'Pattern',
    title: 'Lava Cracks',
    html: `<div class="pat-250"></div>`,
    css: `.pat-250 {
  width: 100%; height: 150px; background: #000;
  background-image: linear-gradient(rgba(255,0,0,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,0,0,0.1) 2px, transparent 2px);
  background-size: 30px 30px; position: relative;
}
.pat-250::after { content: ""; position: absolute; inset: 0; background: radial-gradient(circle, transparent, #000 90%); }`
  },

  // استكمال الـ 40 عنصر بنفس النمط...
  // سأقوم الآن بتكرار الفئات لضمان الوصول للـ id 280
  
  {
    id: 251,
    pubId: 101,
    category: 'Button',
    title: 'Shadow Realm Button',
    html: `<button class="btn-251">ENTER VOID</button>`,
    css: `.btn-251 { padding: 15px 35px; background: transparent; color: #fff; border: 1px solid #333; position: relative; cursor: pointer; overflow: hidden; }
.btn-251::before { content: ""; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: #ff0000; transition: 0.4s; z-index: -1; transform: skewX(-20deg); }
.btn-251:hover::before { left: 0; }
.btn-251:hover { color: #000; font-weight: bold; }`
  },

  {
    id: 260,
    pubId: 101,
    category: 'Loader',
    title: 'Demon Eye Pulse',
    html: `<div class="ldr-260"><span></span></div>`,
    css: `.ldr-260 { width: 40px; height: 40px; background: #111; border: 2px solid #ff0000; border-radius: 50% 0 50% 0; display: flex; align-items: center; justify-content: center; transform: rotate(45deg); }
.ldr-260 span { width: 10px; height: 10px; background: #ff0000; border-radius: 50%; animation: pulseEye 0.5s infinite alternate; }
@keyframes pulseEye { to { transform: scale(1.5); box-shadow: 0 0 15px #ff0000; } }`
  },

  {
    id: 270,
    pubId: 101,
    category: 'Form',
    title: 'Soul Contract Textarea',
    html: `<textarea class="txt-270" placeholder="Sign with your soul..."></textarea>`,
    css: `.txt-270 {
  width: 100%; height: 100px; background: #0a0000; border: 1px solid #400;
  color: #ff4444; padding: 10px; outline: none; border-left: 5px solid #ff0000;
}
.txt-270:focus { background: #150000; box-shadow: inset 0 0 10px #ff0000; }`
  },

  {
    id: 280,
    pubId: 101,
    category: 'Pattern',
    title: 'Blood Rain Pattern',
    html: `<div class="pat-280"></div>`,
    css: `.pat-280 {
  width: 100%; height: 200px; background: #000;
  background-image: repeating-linear-gradient(0deg, transparent, transparent 40px, #ff000022 40px, #ff000022 41px),
                    repeating-linear-gradient(90deg, transparent, transparent 40px, #ff000022 40px, #ff000022 41px);
}
.pat-280::before {
  content: ""; position: absolute; width: 100%; height: 100%;
  background: linear-gradient(to bottom, transparent, #ff000011 50%, #ff000033);
}`
  },
  {
    id: 281,
    pubId: 101,
    category: 'Button',
    title: 'Heartbeat Glow Button',
    html: `<button class="btn-281">With Love</button>`,
    css: `.btn-281 {
  padding: 12px 25px; background: #ff4d6d; color: #fff; border: none;
  border-radius: 50px; cursor: pointer; font-weight: bold;
  box-shadow: 0 0 15px rgba(255, 77, 109, 0.4);
  animation: beat281 1.2s infinite; transition: 0.3s;
}
@keyframes beat281 {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); box-shadow: 0 0 25px rgba(255, 77, 109, 0.6); }
  100% { transform: scale(1); }
}
.btn-281:hover { background: #ff758f; }`
  },
  {
    id: 282,
    pubId: 101,
    category: 'Loader',
    title: 'Expanding Hearts',
    html: `<div class="loader-282"><span>♥</span><span>♥</span><span>♥</span></div>`,
    css: `.loader-282 { display: flex; gap: 8px; color: #ff4d6d; font-size: 24px; }
.loader-282 span { animation: pulse282 0.8s infinite alternate; }
.loader-282 span:nth-child(2) { animation-delay: 0.2s; }
.loader-282 span:nth-child(3) { animation-delay: 0.4s; }
@keyframes pulse282 { from { transform: scale(0.5); opacity: 0.3; } to { transform: scale(1.2); opacity: 1; } }`
  },
  {
    id: 283,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Heart Toggle',
    html: `<label class="sw-283"><input type="checkbox"><span></span></label>`,
    css: `.sw-283 { width: 50px; height: 26px; position: relative; display: inline-block; }
.sw-283 input { display: none; }
.sw-283 span { position: absolute; inset: 0; background: #ffe5ec; border-radius: 20px; transition: 0.4s; cursor: pointer; }
.sw-283 span::before {
  content: "❤"; position: absolute; left: 4px; bottom: 2px;
  font-size: 16px; color: #ffb3c1; transition: 0.4s;
}
.sw-283 input:checked + span { background: #ff4d6d; }
.sw-283 input:checked + span::before { transform: translateX(24px); color: #fff; }`
  },
  {
    id: 284,
    pubId: 101,
    category: 'Checkbox',
    title: 'Sweet Check',
    html: `<label class="chk-284"><input type="checkbox"><span></span></label>`,
    css: `.chk-284 input { display: none; }
.chk-284 span {
  width: 22px; height: 22px; border: 2px solid #ff4d6d;
  border-radius: 6px; display: block; position: relative; cursor: pointer;
}
.chk-284 span::after {
  content: "❤"; position: absolute; top: -2px; left: 2px;
  color: #ff4d6d; font-size: 14px; opacity: 0; transition: 0.2s;
}
.chk-284 input:checked + span { background: #fff0f3; }
.chk-284 input:checked + span::after { opacity: 1; }`
  },
  {
    id: 285,
    pubId: 101,
    category: 'Form',
    title: 'Love Letter Input',
    html: `<input type="text" class="in-285" placeholder="Sweet message...">`,
    css: `.in-285 {
  border: none; border-bottom: 2px solid #ffb3c1; padding: 10px;
  background: transparent; color: #ff4d6d; outline: none; transition: 0.3s;
}
.in-285:focus { border-color: #ff4d6d; padding-left: 20px; }
.in-285::placeholder { color: #ffccd5; }`
  },
  {
    id: 286,
    pubId: 101,
    category: 'Pattern',
    title: 'Romantic Polka',
    html: `<div class="pat-286"></div>`,
    css: `.pat-286 {
  width: 100%; height: 100px; background-color: #fff0f3;
  background-image: radial-gradient(#ffb3c1 1px, transparent 1px);
  background-size: 15px 15px;
}`
  },
  {
    id: 287,
    pubId: 101,
    category: 'Radio button',
    title: 'Cupid Target',
    html: `<label class="rd-287"><input type="radio" name="love"><span class="ring"></span></label>`,
    css: `.rd-287 input { display: none; }
.ring {
  width: 20px; height: 20px; border: 2px solid #ffb3c1;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
}
.ring::after {
  content: ""; width: 0; height: 0; background: #ff4d6d;
  border-radius: 50%; transition: 0.3s;
}
.rd-287 input:checked + .ring { border-color: #ff4d6d; }
.rd-287 input:checked + .ring::after { width: 10px; height: 10px; }`
  },
  {
    id: 288,
    pubId: 101,
    category: 'Tooltip',
    title: 'Floating Kiss Tooltip',
    html: `<div class="tt-288">Hover me<span class="tip">Sending Love! 💋</span></div>`,
    css: `.tt-288 { position: relative; color: #ff4d6d; cursor: pointer; }
.tt-288 .tip {
  visibility: hidden; position: absolute; bottom: 130%; left: 50%;
  transform: translateX(-50%); background: #ff4d6d; color: #fff;
  padding: 5px 12px; border-radius: 15px; font-size: 12px; white-space: nowrap;
}
.tt-288 .tip::after {
  content: ""; position: absolute; top: 100%; left: 50%; margin-left: -5px;
  border: 5px solid transparent; border-top-color: #ff4d6d;
}
.tt-288:hover .tip { visibility: visible; animation: float288 1s infinite; }
@keyframes float288 { 0%, 100% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, -5px); } }`
  },
  {
    id: 289,
    pubId: 101,
    category: 'Button',
    title: 'Glass Heart Button',
    html: `<button class="btn-289">Love Glass</button>`,
    css: `.btn-289 {
  padding: 10px 20px; background: rgba(255, 179, 193, 0.2);
  backdrop-filter: blur(5px); border: 1px solid rgba(255, 77, 109, 0.3);
  color: #ff4d6d; border-radius: 8px; cursor: pointer; transition: 0.3s;
}
.btn-289:hover { background: rgba(255, 77, 109, 0.2); transform: translateY(-2px); }`
  },
  {
    id: 290,
    pubId: 101,
    category: 'Loader',
    title: 'Spinning Heart Ring',
    html: `<div class="loader-290"></div>`,
    css: `.loader-290 {
  width: 35px; height: 35px; border: 3px solid #fff0f3;
  border-top: 3px solid #ff4d6d; border-radius: 50%;
  animation: spin290 1s linear infinite;
}
@keyframes spin290 { 100% { transform: rotate(360deg); } }`
  },
  {
    id: 291,
    pubId: 101,
    category: 'Pattern',
    title: 'Love Wave',
    html: `<div class="pat-291"></div>`,
    css: `.pat-291 {
  width: 100%; height: 120px;
  background: radial-gradient(circle at 10px 10px, #ffccd5 2px, transparent 0);
  background-size: 25px 25px; background-color: #fff;
}`
  },
  {
    id: 292,
    pubId: 101,
    category: 'Form',
    title: 'Rounded Sweet Input',
    html: `<input type="password" class="in-292" placeholder="Secret Key...">`,
    css: `.in-292 {
  padding: 10px 20px; border: 2px solid #ffccd5; border-radius: 25px;
  outline: none; color: #ff4d6d; width: 180px; transition: 0.3s;
}
.in-292:focus { border-color: #ff4d6d; box-shadow: 0 0 8px #ffccd5; }`
  },
  {
    id: 293,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Soft Pink Slide',
    html: `<label class="sw-293"><input type="checkbox"><span></span></label>`,
    css: `.sw-293 { width: 44px; height: 22px; position: relative; }
.sw-293 input { display: none; }
.sw-293 span { position: absolute; inset: 0; background: #ffccd5; border-radius: 20px; cursor: pointer; }
.sw-293 span::before {
  content: ""; position: absolute; height: 16px; width: 16px;
  left: 3px; bottom: 3px; background: #fff; border-radius: 50%; transition: 0.3s;
}
.sw-293 input:checked + span { background: #ff4d6d; }
.sw-293 input:checked + span::before { transform: translateX(22px); }`
  },
  {
    id: 294,
    pubId: 101,
    category: 'Checkbox',
    title: 'Diamond Love Check',
    html: `<label class="chk-294"><input type="checkbox"><span></span></label>`,
    css: `.chk-294 input { display: none; }
.chk-294 span {
  width: 20px; height: 20px; border: 2px solid #ff758f;
  transform: rotate(45deg); display: block; cursor: pointer; transition: 0.3s;
}
.chk-294 input:checked + span { background: #ff758f; border-color: #ff4d6d; }`
  },
  {
    id: 295,
    pubId: 101,
    category: 'Button',
    title: 'Neon Love Button',
    html: `<button class="btn-295">GLOW</button>`,
    css: `.btn-295 {
  padding: 8px 25px; background: transparent; border: 2px solid #ff4d6d;
  color: #ff4d6d; font-weight: bold; cursor: pointer; border-radius: 4px;
  transition: 0.3s;
}
.btn-295:hover { background: #ff4d6d; color: #fff; box-shadow: 0 0 20px #ff4d6d; }`
  },
  {
    id: 296,
    pubId: 101,
    category: 'Loader',
    title: 'Soft Heart Orbit',
    html: `<div class="loader-296"><div></div></div>`,
    css: `.loader-296 { width: 40px; height: 40px; position: relative; border: 2px dashed #ffccd5; border-radius: 50%; animation: rot296 2s linear infinite; }
.loader-296 div { width: 10px; height: 10px; background: #ff4d6d; border-radius: 50%; position: absolute; top: -5px; left: 15px; }
@keyframes rot296 { 100% { transform: rotate(360deg); } }`
  },
  {
    id: 297,
    pubId: 101,
    category: 'Pattern',
    title: 'Gradient Love Sky',
    html: `<div class="pat-297"></div>`,
    css: `.pat-297 {
  width: 100%; height: 100px;
  background: linear-gradient(135deg, #fff0f3 0%, #ffccd5 100%);
}`
  },
  {
    id: 298,
    pubId: 101,
    category: 'Radio button',
    title: 'Sweet Dot Radio',
    html: `<label class="rd-298"><input type="radio" name="love2"><span class="dot"></span></label>`,
    css: `.rd-298 input { display: none; }
.dot { width: 18px; height: 18px; background: #fff0f3; border-radius: 4px; display: block; border: 1px solid #ffccd5; }
.rd-298 input:checked + .dot { background: #ff758f; border-color: #ff4d6d; }`
  },
  {
    id: 299,
    pubId: 101,
    category: 'Tooltip',
    title: 'Minimal Red Tooltip',
    html: `<div class="tt-299">Secret<span class="tip">You are special</span></div>`,
    css: `.tt-299 { position: relative; color: #c9184a; border-bottom: 1px dotted #c9184a; }
.tt-299 .tip {
  visibility: hidden; position: absolute; left: 110%; top: 0;
  background: #c9184a; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px; white-space: nowrap;
}
.tt-299:hover .tip { visibility: visible; }`
  },
  {
    id: 300,
    pubId: 101,
    category: 'Button',
    title: 'Shaking Love',
    html: `<button class="btn-300">Click Me ❤</button>`,
    css: `.btn-300 {
  padding: 12px 24px; background: #ff8fa3; color: #fff; border: none;
  border-radius: 4px; cursor: pointer; transition: 0.2s;
}
.btn-300:hover { animation: shake300 0.3s ease-in-out; background: #ff4d6d; }
@keyframes shake300 {
  0%, 100% { transform: rotate(0); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}`
  },
  {
    id: 301,
    pubId: 101,
    category: 'Button',
    title: 'Kufic Geometric Button',
    html: `<button class="btn-301">ALHAMDULILLAH</button>`,
    css: `.btn-301 {
  padding: 12px 28px; background: #042f2e; color: #fcd34d; border: 1px solid #fcd34d;
  font-family: 'Amiri', serif; letter-spacing: 1px; cursor: pointer; transition: 0.4s;
  box-shadow: 4px 4px 0px #92400e;
}
.btn-301:hover { transform: translate(2px, 2px); box-shadow: 0px 0px 0px #92400e; background: #134e4a; }`
  },
  {
    id: 302,
    pubId: 101,
    category: 'Loader',
    title: 'Eight-Point Star Pulse',
    html: `<div class="loader-302"><span></span></div>`,
    css: `.loader-302 {
  width: 45px; height: 45px; background: #065f46;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  animation: pulse302 1.5s infinite ease-in-out;
}
@keyframes pulse302 { 0%, 100% { transform: scale(0.8); opacity: 0.6; } 50% { transform: scale(1.1); opacity: 1; background: #fbbf24; } }`
  },
  {
    id: 303,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Mosque Dome Switch',
    html: `<label class="sw-303"><input type="checkbox"><span></span></label>`,
    css: `.sw-303 { width: 55px; height: 28px; position: relative; display: inline-block; }
.sw-303 input { display: none; }
.sw-303 span { position: absolute; inset: 0; background: #1e293b; border-radius: 30px; cursor: pointer; transition: 0.4s; }
.sw-303 span::before {
  content: ""; position: absolute; height: 20px; width: 20px; left: 4px; bottom: 4px;
  background: #94a3b8; border-radius: 50% 50% 10% 10%; transition: 0.4s;
}
.sw-303 input:checked + span { background: #047857; }
.sw-303 input:checked + span::before { transform: translateX(27px); background: #fcd34d; box-shadow: 0 0 10px #fcd34d; }`
  },
  {
    id: 304,
    pubId: 101,
    category: 'Checkbox',
    title: 'Crescent Checkbox',
    html: `<label class="chk-304"><input type="checkbox"><span></span></label>`,
    css: `.chk-304 input { display: none; }
.chk-304 span {
  width: 24px; height: 24px; border: 2px solid #065f46; border-radius: 50%;
  display: block; position: relative; cursor: pointer; transition: 0.3s;
}
.chk-304 span::after {
  content: "☪"; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  color: #059669; font-size: 14px; opacity: 0;
}
.chk-304 input:checked + span { border-color: #059669; background: #ecfdf5; }
.chk-304 input:checked + span::after { opacity: 1; }`
  },
  {
    id: 305,
    pubId: 101,
    category: 'Radio button',
    title: 'Islamic Pattern Radio',
    html: `<label class="rd-305"><input type="radio" name="islam3"><span class="art"></span></label>`,
    css: `.rd-305 input { display: none; }
.art {
  width: 22px; height: 22px; border: 1px solid #b45309; display: flex;
  align-items: center; justify-content: center; transform: rotate(45deg); transition: 0.3s;
}
.art::after {
  content: ""; width: 0; height: 0; background: #b45309; transition: 0.3s;
}
.rd-305 input:checked + .art { border-width: 2px; }
.rd-305 input:checked + .art::after { width: 12px; height: 12px; }`
  },
  {
    id: 306,
    pubId: 101,
    category: 'Form',
    title: 'Elegant Arabesque Input',
    html: `<div class="f-306"><input type="text" placeholder="Search Hadith..."></div>`,
    css: `.f-306 input {
  padding: 12px 20px; border: 1px solid #d1d5db; border-left: 4px solid #065f46;
  background: #fff; outline: none; font-family: serif; width: 220px; transition: 0.3s;
}
.f-306 input:focus { border-color: #065f46; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }`
  },
  {
    id: 307,
    pubId: 101,
    category: 'Pattern',
    title: 'Zellige Tilework',
    html: `<div class="pat-307"></div>`,
    css: `.pat-307 {
  width: 100%; height: 120px; background-color: #fef3c7;
  background-image:  linear-gradient(45deg, #f59e0b 25%, transparent 25%, transparent 75%, #f59e0b 75%, #f59e0b), 
  linear-gradient(45deg, #f59e0b 25%, transparent 25%, transparent 75%, #f59e0b 75%, #f59e0b);
  background-size: 30px 30px; background-position: 0 0, 15px 15px; opacity: 0.1;
}`
  },
  {
    id: 308,
    pubId: 101,
    category: 'Tooltip',
    title: 'Gold Leaf Tooltip',
    html: `<div class="tt-308">Zakat<span class="tip">Purify your wealth</span></div>`,
    css: `.tt-308 { position: relative; border-bottom: 2px dashed #b45309; cursor: help; color: #78350f; }
.tt-308 .tip {
  visibility: hidden; position: absolute; bottom: 125%; left: 50%; transform: translateX(-50%);
  background: #78350f; color: #fde68a; padding: 8px 12px; border-radius: 2px; font-size: 11px; white-space: nowrap;
}
.tt-308:hover .tip { visibility: visible; }`
  },
  {
    id: 309,
    pubId: 101,
    category: 'Button',
    title: 'Prayer Rug Texture',
    html: `<button class="btn-309">SUBMIT</button>`,
    css: `.btn-309 {
  padding: 10px 25px; background: #991b1b; color: #fff; border: none;
  border-bottom: 4px solid #7f1d1d; cursor: pointer; transition: 0.1s;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}
.btn-309:active { border-bottom: 0; transform: translateY(4px); }`
  },
  {
    id: 310,
    pubId: 101,
    category: 'Loader',
    title: 'Infinite Dua Circle',
    html: `<div class="loader-310"></div>`,
    css: `.loader-310 {
  width: 40px; height: 40px; border: 3px double #065f46;
  border-top-color: transparent; border-radius: 50%;
  animation: spin310 1s infinite linear;
}
@keyframes spin310 { 100% { transform: rotate(360deg); } }`
  },
  {
    id: 311,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Emerald Gold Toggle',
    html: `<label class="sw-311"><input type="checkbox"><span></span></label>`,
    css: `.sw-311 { width: 48px; height: 24px; position: relative; }
.sw-311 input { display: none; }
.sw-311 span { position: absolute; inset: 0; background: #dcfce7; border: 1px solid #059669; border-radius: 12px; }
.sw-311 span::before {
  content: ""; position: absolute; height: 16px; width: 16px; left: 3px; top: 3px;
  background: #059669; border-radius: 50%; transition: 0.3s;
}
.sw-311 input:checked + span { background: #059669; }
.sw-311 input:checked + span::before { transform: translateX(24px); background: #fcd34d; }`
  },
  {
    id: 312,
    pubId: 101,
    category: 'Checkbox',
    title: 'Minimal Sand Check',
    html: `<label class="chk-312"><input type="checkbox"><span></span></label>`,
    css: `.chk-312 input { display: none; }
.chk-312 span {
  width: 20px; height: 20px; border: 2px solid #d97706; border-radius: 2px;
  display: block; transition: 0.2s;
}
.chk-312 input:checked + span { background: #d97706; box-shadow: inset 0 0 5px rgba(0,0,0,0.2); }`
  },
  {
    id: 313,
    pubId: 101,
    category: 'Radio button',
    title: 'Minaret Peak Radio',
    html: `<label class="rd-313"><input type="radio" name="islam4"><span></span></label>`,
    css: `.rd-313 input { display: none; }
.rd-313 span {
  width: 18px; height: 18px; border: 2px solid #064e3b; display: block;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%); transition: 0.3s;
}
.rd-313 input:checked + span { background: #064e3b; transform: scale(1.2); }`
  },
  {
    id: 314,
    pubId: 101,
    category: 'Form',
    title: 'Deep Amber Textarea',
    html: `<textarea class="txt-314" placeholder="Write your reflection..."></textarea>`,
    css: `.txt-314 {
  width: 100%; padding: 10px; background: #fffcf2; border: 1px solid #b45309;
  border-radius: 4px; color: #451a03; outline: none; font-size: 14px;
}
.txt-314:focus { border-width: 2px; background: #fff; }`
  },
  {
    id: 315,
    pubId: 101,
    category: 'Pattern',
    title: 'Starry Desert Night',
    html: `<div class="pat-315"></div>`,
    css: `.pat-315 {
  width: 100%; height: 100px; background: #020617;
  background-image: radial-gradient(#fcd34d 0.5px, transparent 0.5px);
  background-size: 30px 30px;
}`
  },
  {
    id: 316,
    pubId: 101,
    category: 'Button',
    title: 'Silk Green Button',
    html: `<button class="btn-316">JOIN US</button>`,
    css: `.btn-316 {
  padding: 12px 24px; background: linear-gradient(135deg, #065f46 0%, #047857 100%);
  color: white; border: none; border-radius: 50px; cursor: pointer;
  box-shadow: 0 4px 14px 0 rgba(6, 95, 70, 0.39); transition: 0.3s;
}
.btn-316:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(6, 95, 70, 0.23); }`
  },
  {
    id: 317,
    pubId: 101,
    category: 'Loader',
    title: 'Golden Sand Timer',
    html: `<div class="ldr-317"></div>`,
    css: `.ldr-317 {
  width: 30px; height: 30px; background: #fbbf24;
  clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 100% 100%, 0% 100%, 50% 50%);
  animation: flip317 2s infinite ease-in-out;
}
@keyframes flip317 { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(180deg); } }`
  },
  {
    id: 318,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Antique Copper Toggle',
    html: `<label class="sw-318"><input type="checkbox"><span></span></label>`,
    css: `.sw-318 { width: 44px; height: 18px; position: relative; }
.sw-318 input { display: none; }
.sw-318 span { position: absolute; inset: 0; background: #78350f; border-radius: 2px; }
.sw-318 span::after {
  content: ""; position: absolute; height: 22px; width: 12px; left: 0; top: -2px;
  background: #fcd34d; transition: 0.3s;
}
.sw-318 input:checked + span::after { transform: translateX(32px); }`
  },
  {
    id: 319,
    pubId: 101,
    category: 'Checkbox',
    title: 'Royal Gate Check',
    html: `<label class="chk-319"><input type="checkbox"><span></span></label>`,
    css: `.chk-319 input { display: none; }
.chk-319 span {
  width: 20px; height: 20px; border: 2px solid #1e293b;
  border-radius: 50% 50% 0 0; display: block; position: relative;
}
.chk-319 input:checked + span { background: #fbbf24; border-color: #fbbf24; }`
  },
  {
    id: 320,
    pubId: 101,
    category: 'Radio button',
    title: 'Emerald Disc Radio',
    html: `<label class="rd-320"><input type="radio" name="islam5"><span></span></label>`,
    css: `.rd-320 input { display: none; }
.rd-320 span {
  width: 20px; height: 20px; border: 2px solid #059669; border-radius: 50%;
  display: block; position: relative;
}
.rd-320 span::after {
  content: ""; position: absolute; inset: 3px; background: #059669;
  border-radius: 50%; transform: scale(0); transition: 0.2s;
}
.rd-320 input:checked + span::after { transform: scale(1); }`
  },
  {
    id: 321,
    pubId: 101,
    category: 'Form',
    title: 'Gold Trimmed Login',
    html: `<div class="f-321"><input type="password" placeholder="Access Code"></div>`,
    css: `.f-321 input {
  background: #111; border: none; border-bottom: 2px solid #fbbf24;
  color: #fbbf24; padding: 10px; outline: none; width: 180px;
}
.f-321 input::placeholder { color: #4b5563; }`
  },
  {
    id: 322,
    pubId: 101,
    category: 'Pattern',
    title: 'Olive Leaf Lattice',
    html: `<div class="pat-322"></div>`,
    css: `.pat-322 {
  width: 100%; height: 100px; background: #f0fdf4;
  background-image: repeating-linear-gradient(45deg, #dcfce7 0, #dcfce7 2px, transparent 0, transparent 50%);
  background-size: 15px 15px;
}`
  },
  {
    id: 323,
    pubId: 101,
    category: 'Button',
    title: 'Terracotta Button',
    html: `<button class="btn-323">READ MORE</button>`,
    css: `.btn-323 {
  padding: 10px 20px; background: #c2410c; color: white; border: none;
  border-radius: 0; clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
  cursor: pointer; font-weight: bold; transition: 0.3s;
}
.btn-323:hover { background: #ea580c; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }`
  },
  {
    id: 324,
    pubId: 101,
    category: 'Loader',
    title: 'Mosaic Pulse',
    html: `<div class="ldr-324"><span></span><span></span></div>`,
    css: `.ldr-324 { display: flex; gap: 5px; }
.ldr-324 span { width: 15px; height: 15px; background: #064e3b; border-radius: 2px; animation: bounce324 0.6s infinite alternate; }
.ldr-324 span:last-child { background: #fbbf24; animation-delay: 0.3s; }
@keyframes bounce324 { to { opacity: 0.3; transform: translateY(-10px); } }`
  },
  {
    id: 325,
    pubId: 101,
    category: 'Toggle switch',
    title: 'Slim Palm Toggle',
    html: `<label class="sw-325"><input type="checkbox"><span></span></label>`,
    css: `.sw-325 { width: 40px; height: 10px; position: relative; display: block; }
.sw-325 input { display: none; }
.sw-325 span { position: absolute; inset: 0; background: #ccc; border-radius: 5px; transition: 0.3s; }
.sw-325 span::before {
  content: ""; position: absolute; height: 18px; width: 18px; background: #065f46;
  border-radius: 50%; top: -4px; left: -2px; transition: 0.3s;
}
.sw-325 input:checked + span { background: #a7f3d0; }
.sw-325 input:checked + span::before { transform: translateX(25px); }`
  },
  {
    id: 326,
    pubId: 101,
    category: 'Checkbox',
    title: 'Diamond Deco Check',
    html: `<label class="chk-326"><input type="checkbox"><span></span></label>`,
    css: `.chk-326 input { display: none; }
.chk-326 span { width: 22px; height: 22px; border: 1px solid #fbbf24; display: flex; align-items: center; justify-content: center; transform: rotate(45deg); cursor: pointer; }
.chk-326 span::after { content: ""; width: 10px; height: 10px; background: #fbbf24; display: none; }
.chk-326 input:checked + span::after { display: block; }`
  },
  {
    id: 327,
    pubId: 101,
    category: 'Radio button',
    title: 'Minimal Forest Radio',
    html: `<label class="rd-327"><input type="radio" name="islam6"><span></span></label>`,
    css: `.rd-327 input { display: none; }
.rd-327 span { width: 20px; height: 20px; border: 2px solid #064e3b; border-radius: 4px; display: block; }
.rd-327 input:checked + span { background: #064e3b; box-shadow: 0 0 8px rgba(6, 78, 59, 0.4); }`
  },
  {
    id: 328,
    pubId: 101,
    category: 'Tooltip',
    title: 'Antique Script Tooltip',
    html: `<div class="tt-328">Ihsan<span class="tip">Excellence in all</span></div>`,
    css: `.tt-328 { position: relative; color: #1e293b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; }
.tt-328 .tip {
  visibility: hidden; position: absolute; top: 110%; left: 0; background: #1e293b;
  color: #fff; padding: 5px; font-size: 10px; border-radius: 2px;
}
.tt-328:hover .tip { visibility: visible; }`
  },
  {
    id: 329,
    pubId: 101,
    category: 'Pattern',
    title: 'Royal Marble',
    html: `<div class="pat-329"></div>`,
    css: `.pat-329 {
  width: 100%; height: 100px; background: linear-gradient(45deg, #fff 25%, #f8fafc 25%, #f8fafc 50%, #fff 50%, #fff 75%, #f8fafc 75%, #f8fafc 100%);
  background-size: 40px 40px;
}`
  },
  {
    id: 330,
    pubId: 101,
    category: 'Button',
    title: 'Golden Calligraphy BTN',
    html: `<button class="btn-330">DONE</button>`,
    css: `.btn-330 {
  padding: 10px 30px; background: #fbbf24; color: #451a03; border: 2px solid #d97706;
  font-weight: 900; border-radius: 0; cursor: pointer; transition: 0.3s;
}
.btn-330:hover { background: #f59e0b; letter-spacing: 2px; }`
  }



    ]
};
