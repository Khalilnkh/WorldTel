let currentLanguage = 'ru';

const translations = {
    az: {
        store: 'Mağazalarımız',
        sales: 'Korporativ satışlar',
        birbank: 'Birbank kartı əldə edin',
        gc: 'Hədiyyə kartları',
        account: 'HESABIM',
        cart: 'SƏBƏTİM',
        wishList: 'SEVİMLİLƏRİM',
        company: 'KAMPANİYALAR',
        searchItem: 'Axtardığınız məhsulu yazın',
    },
    ru: {
        store: 'Магазины',
        sales: 'Корпоративные продажи',
        birbank: 'Приобрести карту Birbank',
        gc: 'Подарочные карты',
        account: 'МОЙ СЧЕТ',
        cart: 'КОРЗИНА',
        wishList: 'ИЗБРАННЫЕ',
        company: 'АКЦИИ',
        searchItem: 'Введите продукт, который вы ищете',
    }
};

const azLink = document.getElementById('az-link');
const ruLink = document.getElementById('ru-link');
const storeLink = document.getElementById('store-link');
const corporateSalesLink = document.getElementById('corporate-sales-link');
const buyBirbankCardLink = document.getElementById('buy-birbank-card-link');
const gcLink = document.getElementById('gift-cards-link');
const account = document.getElementById('account');
const cart = document.getElementById('cart');
const wishList = document.getElementById('wish-list');
const searchItem = document.getElementById('search-item');
const company = document.getElementById('company');

azLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (currentLanguage !== 'az') {

        currentLanguage = 'az';
        translateText('az');

        azLink.classList.add('active');
        ruLink.classList.remove('active');

        updateURL('az');
    }
});


ruLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (currentLanguage !== 'ru') {

        currentLanguage = 'ru';
        translateText('ru');

        ruLink.classList.add('active');
        azLink.classList.remove('active');

        updateURL('ru');
    }
});

function translateText(language) {
    storeLink.textContent = translations[language].store;
    corporateSalesLink.textContent = translations[language].sales;
    buyBirbankCardLink.textContent = translations[language].birbank;
    gcLink.textContent = translations[language].gc;
    account.textContent = translations[language].account;
    wishList.textContent = translations[language].wishList;
    cart.textContent = translations[language].cart;
    searchItem.placeholder = translations[language].searchItem;
    company.textContent = translations[language].company;
}

function updateURL(locale) {

    const newURL = `${window.location.pathname}?locale=${locale}`;
    history.pushState(null, '', newURL);
}

translateText(currentLanguage);