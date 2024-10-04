import { MusicLinks } from '@/model/music';

/* 
checks if isArray and has at least one member
*/
export const isValidArray = (obj: any): boolean => {
  if (!obj || !Array.isArray(obj) || obj.length < 1) {
    return false;
  }
  return true;
}

/* 
checks if the links object has links
*/
export const hasLinks = (links: MusicLinks | null): boolean => {
  if (!links) { 
    return false;
  }
  const keys = Object.keys(links);
  if (!Array.isArray(keys) || keys.length < 1) {
    return false;
  }
  return true;
}