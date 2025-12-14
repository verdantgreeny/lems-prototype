// localStorage 기반 데이터 관리 유틸리티
import type { User } from '../types';

export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Storage set error:', error);
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Storage remove error:', error);
    }
  },

  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Storage clear error:', error);
    }
  },
};

// 현재 로그인한 사용자
export const getCurrentUser = () => {
  return storage.get<User | null>('currentUser', null);
};

export const setCurrentUser = (user: User | null) => {
  if (user) {
    storage.set('currentUser', user);
  } else {
    storage.remove('currentUser');
  }
};
