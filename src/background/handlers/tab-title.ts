import { isntUndefined } from 'extra-utils'
import { CommandHandler } from './types.js'
import { plainText } from './utils.js'

export const commandTabTitle: CommandHandler = async (info, tab) => {
  if (isntUndefined(tab.title)) {
    return plainText(tab.title)
  }
}
