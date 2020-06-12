import store from '../store'

//Intl.DateTimeFormat
export default function dateFilter(value, format = 'date') {
    //value is the date, format is filter
    const options = {}

    if (format.includes('date')) {
        options.day = '2-digit',
            options.month = 'long',
            options.year = 'numeric'
    }
    if (format.includes('time')) {
        options.hour = '2-digit',
            options.minute = '2-digit',
            options.second = '2-digit'
    }
    const locale = store.getters.info.locale || 'en-US'
    return new Intl.DateTimeFormat(locale, options).format(new Date(value))
}