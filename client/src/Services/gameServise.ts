import type { CategoryType, LevelType } from '../Types/gameTypes';
import apiClient from './apiConfig';

export async function getGameCategories(): Promise<CategoryType[]> {
  try {
    const { data } = await apiClient.get<CategoryType[]>('/game/categories');
    return data;
  } catch (err) {
    return await Promise.reject(err);
  }
}

export function getLevel(): Promise<LevelType> {
  return apiClient
    .get<LevelType>('/game/level')
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err));
}
