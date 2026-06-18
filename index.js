console.log('Happy developing ✨')

const group = document.querySelector(".login-container");
const input = group.querySelector("input");

const button = document.getElementById('login_btn');

button.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log("Click Me");
    console.log('Кнопка была нажата!');
    if (input.value === '') {
        alert('Ошибка! Пожалуйста, введите свое имя.');
        
    } else {
        const response = await fetch("https://monach.onrender.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: input.value
            })
        });
        alert('Спасибо! Форма отправлена.');
        const data = await response.json();

        console.log(data);

    }
});
