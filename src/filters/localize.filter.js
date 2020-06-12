import store from '../store'
import de from '../locales/de.json'
import en from '../locales/en.json'

const locales = {
    'en-US': en,
    'de-DE': de
}

export default function localizeFilter(key) {
    const locale = store.getters.info.locale || 'en-US'
    return locales[locale][key] || `[Localize error]: key ${key} not found`
}