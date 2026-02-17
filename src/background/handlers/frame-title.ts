import { plainText } from './utils.js'
import { createTabClient } from '@delight-rpc/webextension'
import { IFrameAPI } from '@src/contract.js'
import { CommandHandler } from './types.js'
import { isntUndefined } from 'extra-utils'

export const commandFrameTitle: CommandHandler = async (info, tab) => {
  if (info.frameUrl) {
    if (isntUndefined(tab.id) && tab.url) {
      const tabClient = createTabClient<IFrameAPI>({
        tabId: tab.id
      , frameId: info.frameId
      })
      const title = await tabClient.getDocumentTitle()

      return plainText(title)
    }
  }
}
