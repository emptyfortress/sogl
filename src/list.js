const grey = '#fff';

const list = [
	{id:  0, group: 'date', label: '13\nноября', fixed: true, },
	{id:  1, group: 'date', label: '13\nноября', fixed: true, },
	{id:  2, group: 'date', label: '15\nноября', fixed: true, },
	{id:  3, group: 'date', label: '16\nноября', fixed: true, },
	{id:  4, group: 'date', label: '18\nноября', fixed: true, },
	{id:  5, group: 'date', label: '19\nноября', fixed: true, },
	{id:  6, group: 'date', label: '20\nноября', fixed: true, },
	{id:  7, group: 'date', label: '20\nноября', fixed: true, },
	{id:  8,  group: 'flag', label: 'Старт', fixed: { x: true } },
	{id:  9, group: 'finished', label: 'Согласование\nс производством',  fixed: { x: true } },
	{id: 10, group: 'finished', label: 'Юридический отдел', fixed: { x: true } },
	{id: 11, group: 'finished', label: 'Финансовый отдел', fixed: { x: true } },
	{id: 12, group: 'finished', label: 'Плановый отдел', fixed: { x: true } },
	{id: 13, group: 'overdue', label: 'Консолидация', fixed: { x: true } },
	{id: 14, group: 'current', label: 'Согласование\nс акционерами',  fixed: { x: true } },
	{id: 15, group: 'notStart', label: 'Подписание', fixed: { x: true } },
	{id: 16, group: 'notStart', label: 'Регистрация\nв реестре',  fixed: { x: true } },
	{id: 17, group: 'flag', label: 'Финиш',  fixed: { x: true } },
]

const branches = [
	{ from: 0, to: 1, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{ from: 1, to: 2, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{ from: 2, to: 3, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{ from: 3, to: 4, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{ from: 4, to: 5, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{ from: 5, to: 6, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{ from: 6, to: 7, hidden: false, chosen: false, color: grey, arrows: {to: {enabled: false}}, },
	{from: 8, to: 9, title: 'Положительно'},
	{from: 9, to: 10, title: 'Положительно'},
	{from: 9, to: 11, title: 'Положительно'},
	{from: 9, to: 12, title: 'Положительно'},
	{from: 10, to: 13, title: 'Положительно'},
	{from: 11, to: 13, title: 'Положительно'},
	{from: 12, to: 13, title: 'Положительно'},
	{from: 13, to: 14, title: 'Положительно'},
	{from: 14, to: 15, title: 'Положительно'},
	{from: 15, to: 16, title: 'Положительно'},
	{from: 16, to: 17, title: 'Положительно'},
]

const table = [
	{ id: 9, title: 'Старт', etap: 'Этап 2', dates: '13 ноября - 14 ноября', status: 'Завершено', color: 'green', icon: 'check',
	},
	{ id: 10, title: 'Согласование с производством', etap: 'Этап 2', dates: '13 ноября - 14 ноября', status: 'Завершено', color: 'green', icon: 'check',
		names: [
			{ fio: 'Орлов П.С.', decision: 'Согласовано', color: 'sogl', date: '13.10.2020', comment: '' },
			{ fio: 'Журавлева И.П.', decision: 'Согласовано', color: 'sogl', date: '13.10.2020', comment: '' },
			{ fio: 'Галкин К.К.', decision: 'Согласовано', color: 'sogl', date: '13.10.2020', comment: '' },
			{ fio: 'Гусев А.В.', decision: 'Согласовано', color: 'sogl', date: '13.10.2020', comment: '' },
		],
	},
	{ id: 11, title: 'Юридический отдел', etap: 'Этап 3', dates: '14 ноября - 15 ноября', status: 'Завершено', color: 'green', icon: 'check',
		names: [
			{ fio: 'Воробьев П.П', decision: 'Согласовано с замечаниями', color: 'soglas', date: '13.10.2020', comment: 'Доработать формулировку по аренде' },
			{ fio: 'Скворцов Ш.А.', decision: 'Согласовано', color: 'sogl', date: '13.10.2020', comment: '' },
		],
	},
	{ id: 12, title: 'Финансовый отдел', etap: 'Этап 4', dates: '14 ноября - 15 ноября', status: 'Завершено', color: 'green', icon: 'check',
		names: [
			{ fio: 'Орлов П.С.', decision: 'Согласовано', color: 'sogl', date: '13.10.2020', comment: '' },
			{ fio: 'Журавлева И.П.', decision: 'Отказано', color: 'reject', date: '13.10.2020', comment: '' },
			{ fio: 'Галкин К.К.', decision: 'В работе', color: 'work', date: '13.10.2020', comment: '' },
			{ fio: 'Гусев А.В.', decision: 'Согласовано', color: 'sogl', date: '13.10.2020', comment: '' },
		],
	},
	{ id: 13, title: 'Плановый отдел', etap: 'Этап 5', dates: '14 ноября - 15 ноября', status: 'Завершено', color: 'green', icon: 'check',
		names: [
			{ fio: 'Севостьянов А.В.', decision: 'Согласовано', color: 'sogl', date: '13.10.2020', comment: '' },
			{ fio: 'Никитон П.П.', decision: 'Отказано', color: 'reject', date: '13.10.2020', comment: '' },
		],
	},
	{ id: 14, title: 'Консолидация', etap: 'Этап 6', dates: '15 ноября - 16 ноября', status: 'Завершено с просрочкой', color: 'amber', icon: 'check',
		names: [
			{ fio: 'Орлов П.С.', decision: 'Согласовано', color: 'sogl', date: '13.10.2020', comment: '' },
			{ fio: 'Журавлева И.П.', decision: 'Отказано', color: 'reject', date: '13.10.2020', comment: '' },
			{ fio: 'Галкин К.К.', decision: 'В работе', color: 'work', date: '13.10.2020', comment: '' },
			{ fio: 'Гусев А.В.', decision: 'Согласовано', color: 'sogl', date: '13.10.2020', comment: '' },
		],
	},
	{ id: 15, title: 'Согласование с акционерами', etap: 'Этап 7', dates: '17 ноября - 18 ноября', status: 'В работе', color: '#008AD1', icon: 'run',
		names: [
			{ fio: 'Bill Gates', decision: 'Согласовано', color: 'sogl', date: '17.10.2020', comment: '' },
			{ fio: 'Elon Mask', decision: 'В рабoте', color: 'work', date: '', comment: '' },
			{ fio: 'Jeff Bezos', decision: 'В работе', color: 'work', date: '', comment: '' },
			{ fio: 'John Rockfeller', decision: 'Согласовано', color: 'sogl', date: '17.10.2020', comment: '' },
		],
	},
	{ id: 16, title: 'Подписание', etap: 'Этап 8', dates: '19 ноября - 19 ноября', status: 'Не начато', color: 'grey', icon: 'stand',
		names: [
			{ fio: 'Соловьев П.К.', decision: 'Не начато', },
			{ fio: 'Жаворонкова И.С.', decision: 'Не начато', },
			{ fio: 'Уткин Г.А.', decision: 'Не начато', },
		],
	},
	{ id: 17, title: 'Регистрация в реестре', etap: 'Этап 9', dates: '20 ноября', status: 'Не начато', color: 'grey', icon: 'stand',
		names: [
			{ fio: 'Пичугина М.Н.', decision: 'Не начато', },
		],
	},
	{ id: 18, }
]

export { list, branches, table }
