document.addEventListener('DOMContentLoaded', function() {
    const eventTextElement = document.getElementById('history-event-text');
    const yearElement = document.getElementById('history-year');
    const imageContainer = document.getElementById('historyImage');

    if (!eventTextElement || !yearElement || !imageContainer) return;

    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const apiUrl = `https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.events && data.events.length > 0) {
                // اختيار حدث عشوائي يمتلك صورة لضمان الجمالية
                const eventsWithImages = data.events.filter(e => e.pages && e.pages[0].thumbnail);
                const event = eventsWithImages.length > 0 
                    ? eventsWithImages[Math.floor(Math.random() * eventsWithImages.length)]
                    : data.events[0];

                // حقن التاريخ والنص
                yearElement.textContent = event.year;
                eventTextElement.textContent = event.text;

                // حقن الصورة
                if (event.pages && event.pages[0].thumbnail) {
                    const imageUrl = event.pages[0].thumbnail.source;
                    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Event Image" style="width:100%; height:100%;  background-size: cover; position: absolute; top: 0; left: 0; border-radius: 10px;  border: 1px solid #eee;">`;
                } else {
                    // في حال عدم وجود صورة، نضع اللوجو في منتصف الحاوية
                    imageContainer.innerHTML = `<img src="logo.png" style="width:60px; opacity:0.3; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);">`;
                }
            }
        })
        .catch(err => {
            console.error("Wikipedia fetch error:", err);
            yearElement.textContent = "Error";
            eventTextElement.textContent = "Could not load history.";
        });
});
