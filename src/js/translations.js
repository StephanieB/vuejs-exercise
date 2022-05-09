import defaultEn from '../locales/default/en'
import defaultFr from '../locales/default/fr'
import messagesEn from '../locales/messages/en'
import messagesFr from '../locales/messages/fr'

const translations = {
    en: Object.assign({}, defaultEn, messagesEn),
    fr: Object.assign({}, defaultFr, messagesFr)
}

export default translations
