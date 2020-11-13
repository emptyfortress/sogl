const grey = '#D8D8D8';

const list = [
	{id: 1, group: 'flag', label: '13\nноября', fixed: true, },
	{id: 2, group: 'flag', label: '13\nноября', fixed: true, },
	{id: 3, group: 'flag', label: '15\nноября', fixed: true, },
	{id: 4, group: 'flag', label: '16\nноября', fixed: true, },
	{id: 5, group: 'flag', label: '18\nноября', fixed: true, },
	{id: 6, group: 'flag', label: '19\nноября', fixed: true, },
	{id: 7, group: 'flag', label: '20\nноября', fixed: true, },
	{id: 8, group: 'flag', label: '20\nноября', fixed: true, },
	{id: 9,  group: 'flag', label: 'Старт', fixed: { x: true } },
	{id: 10, group: 'flag', label: 'Согласование\nс производством',  fixed: { x: true } },
	{id: 11, group: 'flag', label: 'Юридический отдел', fixed: { x: true } },
	{id: 12, group: 'flag', label: 'Финансовый отдел', fixed: { x: true } },
	{id: 13, group: 'flag', label: 'Плановый отдел', fixed: { x: true } },
	{id: 14, group: 'flag', label: 'Консолидация', fixed: { x: true } },
	{id: 15, group: 'current', label: 'Согласование\nс акционерами',  fixed: { x: true } },
	{id: 16, group: 'flag', label: 'Подписание', fixed: { x: true } },
	{id: 17, group: 'flag', label: 'Регистрация\nв реестре',  fixed: { x: true } },
	{id: 18, group: 'flag', label: 'Финиш',  fixed: { x: true } },
]

const branches = [
	{ from: 1, to: 2, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{ from: 2, to: 3, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{ from: 3, to: 4, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{ from: 4, to: 5, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{ from: 5, to: 6, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{ from: 6, to: 7, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{ from: 7, to: 8, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{from: 9, to: 10, title: 'Положительно'},
	{from: 10, to: 11, title: 'Положительно'},
	{from: 10, to: 12, title: 'Положительно'},
	{from: 10, to: 13, title: 'Положительно'},
	{from: 11, to: 14, title: 'Положительно'},
	{from: 12, to: 14, title: 'Положительно'},
	{from: 13, to: 14, title: 'Положительно'},
	{from: 14, to: 15, title: 'Положительно'},
	{from: 15, to: 16, title: 'Положительно'},
	{from: 16, to: 17, title: 'Положительно'},
	{from: 17, to: 18, title: 'Положительно'},
]

const table = [
	
]

export { list, branches, table }
