(function($) {
    var cultures = $.cultures,
        en = cultures.en,
        standard = en.calendars.standard,
        culture = cultures["tg"] = $.extend(true, {}, en, {
        name: "tg",
        englishName: "Tajik",
        nativeName: "Тоҷикӣ",
        language: "tg",
        numberFormat: {
            ',': " ",
            '.': ",",
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                groupSizes: [3,0],
                ',': " ",
                '.': ";",
                symbol: "т.р."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                '/': ".",
                days: {
                    names: ["Яш","Душанбе","Сешанбе","Чоршанбе","Панҷшанбе","Ҷумъа","Шанбе"],
                    namesAbbr: ["Яш","Дш","Сш","Чш","Пш","Ҷм","Шн"],
                    namesShort: ["Яш","Дш","Сш","Чш","Пш","Ҷм","Шн"]
                },
                months: {
                    names: ["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр",""],
                    namesAbbr: ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]
                },
                monthsGenitive: {
                    names: ["январи","феврали","марти","апрели","маи","июни","июли","августи","сентябри","октябри","ноябри","декабри",""],
                    namesAbbr: ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]
                },
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["tg"]);
    culture.calendar = culture.calendars.standard;
})(ample.locale);