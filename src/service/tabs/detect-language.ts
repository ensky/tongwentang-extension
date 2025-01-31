import { toLower } from 'ramda';
import { tabs } from './tabs';
import { chsTypes, chtTypes, ZhType } from './tabs.constant';

const langToZhtype = (lang: string): ZhType =>
  chsTypes.find(tag => tag === lang) ? ZhType.hans : chtTypes.find(tag => tag === lang) ? ZhType.hant : ZhType.und;

export const detectLanguage = (tabId?: number): Promise<ZhType> =>
  tabs.detectLanguage(tabId).then(toLower).then(langToZhtype);
