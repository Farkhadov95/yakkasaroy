// Категории:
// Первое - first
// Второе - second
// Десерт - dessert
// Самса - samsa
// Холодные Закуски - cold-starter
// Горячин Закуски - hot-starter
// Салат - salad

const dishes = [
    {
        id: 1,
        name: 'Буратто Капрезе',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Сливочный мягкий сыр с томато'
    },
    {
        id: 2,
        name: 'Вителло тоннато',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Томленный контр филе говядины с соусом из консервированного тунца'
    },
    {
        id: 3,
        name: 'Канапе с красной икрой',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'С белыс хлебом со сливочным маслом'
    },
    {
        id: 4,
        name: 'Лимонное ассорти',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Лимонные дольки, лимонное кольцо, лимон в бантике'
    },
    {
        id: 5,
        name: 'Маринованное ассорти',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Маринованная капуста, бочковые помидоры, огурцы дунганский перец, чеснок'
    },
    {
        id: 6,
        name: 'Маслины и оливки (там их два, нужно удалить одну)',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Маринованные жумбо оливки с косточкой'
    },
    {
        id: 7,
        name: 'Мясное ассорти',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'От 4 до 6 видов собственного производства'
    },
    {
        id: 8,
        name: 'Овощное ассорти',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Помидоры, огурцы, перец болгарский, редиска, перец стручковый, зелень в ассортименте'
    },
    {
        id: 9,
        name: 'Роллы из форели',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Запеченные роллы из филе форели'
    },
    {
        id: 10,
        name: 'Рыбное ассорти',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'От 3 видов: слабо копчённая семга, маслины и скумбрия, тунец.'
    },
    {
        id: 11,
        name: 'Сырное ассорти',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'От 5 видов с импортным ассортиментом'
    },
    {
        id: 12,
        name: 'Террин',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Из утки с броколли кремом'
    },
    {
        id: 13,
        name: 'Фета фетакса',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Фетаки, фетакса, лабне, мини моцарелла'
    },
    {
        id: 14,
        name: 'Фруктовое ассорти',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'От 5 видов с сезонными фруктами'
    },
    {
        id: 15,
        name: 'Хлебобулочные изделия',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Черный и белый хлеб, мини патыр, смит, гриссини, кукурузный хлеб, пряный хлеб.'
    },
    {
        id: 16,
        name: 'Чак чук',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Фисташки и миндаль'
    },
    {
        id: 17,
        name: 'Эклер',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'С фуагра муссом и с зеленым хумусом'
    },
    {
        id: 18,
        name: 'Мазалини из рыбы ',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Дуэт филе судака и форели'
    },
    {
        id: 19,
        name: 'Фруктовое ассорти',
        type: 'cold-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Двухэтажное'
    },
    {
        id: 20,
        name: 'Рикотта',
        type: 'salad',
        src: '/images/food/Hashlama800.webp',
        description: 'С запеченной тыквой и апельсином'
    },
    {
        id: 21,
        name: 'Туна татаки',
        type: 'salad',
        src: '/images/food/Hashlama800.webp',
        description: 'Свежее филе тунца, обжаренная на гриле'
    },
    {
        id: 22,
        name: 'Утиное магре',
        type: 'salad',
        src: '/images/food/Hashlama800.webp',
        description: 'Утиное филе конфи с запеченными яблоками и морковью'
    },
    {
        id: 23,
        name: 'Ягодный салат',
        type: 'salad',
        src: '/images/food/Hashlama800.webp',
        description: 'Микс салат с импортными ягодами'
    },
    {
        id: 24,
        name: 'Афсона?',
        type: 'salad',
        src: '/images/food/Hashlama800.webp',
        description: 'Пикатный салат с зеленым луком, обжареным бон филе и баклажанами, соевый соус'
    },
    {
        id: 25,
        name: 'Тоскано',
        type: 'salad',
        src: '/images/food/Hashlama800.webp',
        description: 'Микс салат, фетаки завернутые в кабачки и пармезан'
    },
    {
        id: 26,
        name: 'Томато моцарелла',
        type: 'salad',
        src: '/images/food/Hashlama800.webp',
        description: 'Сыр и томато'
    },
    {
        id: 27,
        name: 'Страчетти',
        type: 'salad',
        src: '/images/food/Hashlama800.webp',
        description: 'Бон филе с беби корном и шампиньонами'
    },
    {
        id: 28,
        name: 'Самса бульбульча',
        type: 'samsa',
        src: '/images/food/Hashlama800.webp',
        description: 'Слоенное тесто с мысом и овощами, запекается в печке'
    },
    {
        id: 29,
        name: 'Тандыр самса',
        type: 'salad',
        src: '/images/food/Hashlama800.webp',
        description: 'С мысом и овощами'
    },
    {
        id: 30,
        name: 'Тандыр самса',
        type: 'salad',
        src: '/images/food/Hashlama800.webp',
        description: 'С мясом и тыквой'
    },
    {
        id: 31,
        name: 'Хинкали',
        type: 'salad',
        src: '/images/food/Hashlama800.webp',
        description: 'Запеченная самса с говяжим мясом и шампиньонами, в сливочном соусе'
    },
    {
        id: 32,
        name: 'Биф шанк',
        type: 'hot-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'С зеленой чечевицей и овощами'
    },
    {
        id: 33,
        name: 'Перепелка с француским бриошем',
        type: 'hot-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Перепелка без костей'
    },
    {
        id: 34,
        name: 'Перепелка без костей',
        type: 'hot-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'С креветками и имбирным соусом'
    },
    {
        id: 35,
        name: 'Форель Прованс',
        type: 'hot-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'С картофелем крокет и соусом Шафран'
    },
    {
        id: 36,
        name: 'Шепард пай',
        type: 'hot-starter',
        src: '/images/food/Hashlama800.webp',
        description: 'Говядина с картофельным пюре'
    },
    {
        id: 37,
        name: 'Манпар',
        type: 'first',
        src: '/images/food/Hashlama800.webp',
        description: 'Клецки из пресного теста, приготовленные в насыщенном мясном соусе-ваджа с овощами'
    },
    {
        id: 38,
        name: 'Мастава',
        type: 'first',
        src: '/images/food/Hashlama800.webp',
        description: 'Из утки с диким рисом'
    },
    {
        id: 39,
        name: 'Суп из индейки с мятой',
        type: 'first',
        src: '/images/food/Hashlama800.webp',
        description: 'Наваристый бульон с индейкой с сезонными овощами'
    },
    {
        id: 40,
        name: 'Тартилини',
        type: 'first',
        src: '/images/food/Hashlama800.webp',
        description: 'Суп с пельменями и муссовым рожком'
    },
    {
        id: 41,
        name: 'Тыквенный суп',
        type: 'first',
        src: '/images/food/Hashlama800.webp',
        description: 'Крем суп с кокосовым молоком'
    },
    {
        id: 42,
        name: 'Хашлама',
        type: 'first',
        src: '/images/food/Hashlama800.webp',
        description: 'Наваристый бульон из баранины'
    },
    {
        id: 43,
        name: 'Бранзино',
        type: 'second',
        src: '/images/food/Hashlama800.webp',
        description: 'Со спажей и соусом Биск'
    },
    {
        id: 44,
        name: 'Сибас',
        type: 'second',
        src: '/images/food/Hashlama800.webp',
        description: 'Филе сибаса с овощами и соусом Холландез'
    },
    {
        id: 45,
        name: 'Бон-филе на мангале',
        type: 'second',
        src: '/images/food/Hashlama800.webp',
        description: 'С соусом Демиглас и овощным рататуем'
    },
    {
        id: 46,
        name: 'Медальон на мангале',
        type: 'second',
        src: '/images/food/Hashlama800.webp',
        description: 'С трюфельным соусом'
    },
    {
        id: 47,
        name: 'Мясной дуэт',
        type: 'second',
        src: '/images/food/Hashlama800.webp',
        description: 'С кремом из тайского фасоля'
    },
    {
        id: 48,
        name: 'Пайк на мангале',
        type: 'second',
        src: '/images/food/Hashlama800.webp',
        description: 'С картофельным пюре, шпинатом, лимоном и икорным соусом.'
    },
    {
        id: 49,
        name: 'Форель Суви на мангале',
        type: 'second',
        src: '/images/food/Hashlama800.webp',
        description: 'Филе форели обжаривается на мангале, запекается в духовке. Соус Холландез'
    },
    {
        id: 50,
        name: 'Виолин',
        type: 'dessert',
        src: '/images/food/Hashlama800.webp',
        description: 'С шоколадной глазурью и начинкой ягодным кампате'
    },
    {
        id: 51,
        name: 'Фисташковый карлин',
        type: 'dessert',
        src: '/images/food/Hashlama800.webp',
        description: 'Воздушный сливочный мусс с фисташками'
    },
    {
        id: 52,
        name: 'Чизкейк с соусом маракуйя',
        type: 'dessert',
        src: '/images/food/Hashlama800.webp',
        description: 'С карамельным покрытием и с соусом маракуйя'
    },
    {
        id: 53,
        name: 'Шоколадный фондан',
        type: 'dessert',
        src: '/images/food/Hashlama800.webp',
        description: 'Горячий шоколадный кейк с пломбиром'
    },
    {
        id: 54,
        name: 'Юмча',
        type: 'dessert',
        src: '/images/food/Hashlama800.webp',
        description: 'Японский блинчик с муссом из крем чиза и с ягодным соусом'
    }
];

export default dishes;