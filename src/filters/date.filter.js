import store from '../store'

export default function dateFilter(value, format = 'date'){
    //value is the date, format is filter
    const options = {}
    //includes checks if the string (ar array) has the value
    //var str = 'Быть или не быть вот в чём вопрос.'; console.log(str.includes('вопрос'));    // true
    if(format.includes('date')){
        options.day = '2-digit',
        options.month = 'long',
        options.year = 'numeric'
    }
    if(format.includes('time')){
        options.hour = '2-digit',
        options.minute = '2-digit',
        options.second = '2-digit'
    }
    const locale = store.getters.info.locale || 'ru-RU'
    return new Intl.DateTimeFormat(locale, options).format(new Date(value))
}