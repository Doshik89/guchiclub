if (!localStorage.theme) localStorage.theme = "dark" //Если нет локалки то по умолчанию стоит темная тема
document.body.className = localStorage.theme //Тема будет равняться на тему которая стоит
toggleThemeBtn.innerText = document.body.classList.contains("light") ? "Dark Theme" : "Light Theme"
//Меняет текст

toggleThemeBtn.onclick = () => {
  document.body.classList.toggle("light") //Добавляем или удаляем класс
  toggleThemeBtn.innerText = document.body.classList.contains("light") ? "Dark Theme" : "Light theme" //Меняет текст
  localStorage.theme = document.body.className || "dark" //в локалке объявляем тему
}
