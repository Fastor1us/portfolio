export const data = {
  projects: [
    {
      title: 'game2cube',
      link: 'https://game2cube.onrender.com',
      created: 'конец 2023',
      images: [
        'create-level.png',
        'game-logic.gif',
        'search.gif',
        'width.gif',
        'registration.png',
      ],
      libraries: ['React', 'RTK Query', 'Express', 'PostgreSQL', 'Webpack'],
      descriptions: [
        `Клиент-серверное приложение - логическая игра.`,
        `Сайт адаптирован на работу с разными разрешениями экрана, 
      полная поддержка мобильных устройств (адаптив + резина).`,
        `Реализована сложная игровая логика, защищённые маршруты, компоненты высшего порядка,
      кастомные хуки, система авторизации, регистрации, лайков, загрузки и сохранения уровней в БД.`,
        `Все части приложения написаны мной. Фронт (самописный вебпак конфиг - 
      транспиляция, минификация, абфускация, хотрелоад, работа с модулями CSS, шрифтами и т.д. и т.п.), 
      сервер, работа с БД (процедуры, таблицы, настройка)`,
      ],
    },
    {
      title: 'portfolio',
      link: 'https://portfolio-okir.onrender.com',
      created: 'начало 2024',
      images: ['title.png', 'theme-toggler.gif', 'width.gif'],
      libraries: ['Vue3', 'Pinia', 'Vite'],
      descriptions: [
        `Сайт адаптирован на работу с разными разрешениями экрана, 
      полная поддержка мобильных устройств (адаптив + резина).`,
        `Все элементы приложения - кастомные компоненты (переключатель темы, слайдер картинок и т.д.)`,
      ],
    },
  ],
  images: {
    gbu: ['gbu-01.jpg', 'gbu-02.jpg'],
    music: [
      'music-00.jpg',
      'music-01.jpg',
      'music-02.jpg',
      'music-03.jpg',
      'music-04.jpg',
      'music-06.jpg',
      'music-07.jpg',
      'music-08.jpg',
      'music-11.jpg',
      'music-09.jpg',
    ],
  },
  videos: [
    {
      'I Hate myself for loving you':
        'https://www.youtube.com/watch?v=vexbrLkSivo',
    },
    { 'Господин горных дорог': 'https://vk.com/video796268_456240149' },
    // { 'Всадник Из Льда': 'https://vk.com/video796268_456240150' },
    // { 'Blood Bound': 'https://vk.com/video-167307197_456239023' },
    // { 'Prima Victoria': 'https://vk.com/video16543317_456239230' },
    // { 'I love Rock and Roll': 'https://vk.com/video97889238_456239419' },
    // { ['Ром']: 'https://vk.com/video-167307197_456239025' },
  ],
  stack: [
    'GIT',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'React',
    'Redux (RTK Query)',
    'Vue3',
    'Pinia',
    'Webpack',
    'Express.js',
    'SQL',
    '.NET',
    'ASP.NET Core',
    'MSSQL',
    'MySQL',
    'PostgreSQL',
    'Sqlite',
    'RabbitMQ',
    'Grafana',
  ],
};
