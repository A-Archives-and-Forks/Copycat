import { plainText } from './utils.js'
import { createTabClient } from '@delight-rpc/webextension'
import { IFrameAPI } from '@src/contract.js'
import { CommandHandler } from './types.js'
import { concatPlainText } from '@utils/concat-plain-text.js'
import { isntNull, isntUndefined } from '@blackglory/prelude'

export const commandSelectionAsConcatenatedPlainText: CommandHandler = async (info, tab) => {
  if (isntUndefined(tab.id)) {
    const tabClient = createTabClient<IFrameAPI>({
      tabId: tab.id
    , frameId: info.frameId
    })

    const text = await tabClient.getSelectionText()
    if (isntNull(text)) {
      return plainText(concatPlainText(text))
    }
  }
}
