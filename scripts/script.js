const btnBurger = document.querySelector('.btn-burger'); // Получение элемента кнопки меню 
const catalog = document.querySelector('.catalog'); // Получение элемента каталога, который нужно показать
const overlay = document.querySelector('.overlay'); // Получение элемента оверлея для затемнения фона после показа каталога
const btnClose = document.querySelector('.btn-close'); // Кнопка закрытия коталога
const catalogList = document.querySelector('.catalog-list'); // Получения списка наименований каталога
const subCatalog = document.querySelector('.subcatalog'); // Получение подкаталога
const btnReturn = document.querySelector('.btn-return'); // Получение кнопки назад в подкаталоге
const subcatalogHeader = document.querySelector('.subcatalog-header'); // Получение заголовка подкаталога 

function openMenu(){ // Функция раскрытия коталога
    console.log("rkbr");
    catalog.classList.add('open');
    overlay.classList.add('active');
}
const closeMenu = () => { // Закрытие каталога 
    console.log('close');
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu(); // Закрытие подкаталога
};

function openSubMenu (event) { // Раскрытие подкаталога
    event.preventDefault(); // Отмена перехода по ссылке при клике
    const target = event.target; // Получение элемента на который произведено нажатие
    const classList = target.closest('.catalog-list__item'); // Поиск у элемента родителя класса 
    if(classList){ // Условие при котором открывается подкаталог только при нажатии на тот элемент родитель которого обладает нужным классом
        subcatalogHeader.innerHTML = target.innerHTML;  // Присваивание заголовку подменю текста и ссылки от элемента на который призведен клик
        subCatalog.classList.add('subopen'); // Раскрытие подкаталога
    };
}

const closeSubMenu = () => { // Закрытие подкаталога при нажатии стрелочки назад
    subCatalog.classList.remove('subopen');
};
 // События 
btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalogList.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);