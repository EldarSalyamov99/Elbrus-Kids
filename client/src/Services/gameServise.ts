import type { CategoryType, LevelType, QuestType } from '../Types/gameTypes';

import apiClient from './apiConfig';

export async function getGameCategories(): Promise<CategoryType[]> {
  try {
    const { data } = await apiClient.get<CategoryType[]>('/game/categories');
    return data;
  } catch (err) {
    return await Promise.reject(err);
  }
}

export async function getLevel(): Promise<LevelType> {
  return apiClient
    .get<LevelType>('/game/level')
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err));
}

export async function getTHemes(id: number): Promise<CategoryType[]> {
  return apiClient
    .get<CategoryType[]>(`/game/${id}`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err));
}

export async function getQuests(id: number): Promise<QuestType[]> {
  return apiClient
    .post<QuestType[]>(`/game/${id}`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err));
}

export async function getAnswer(id: number): Promise<number> {
  return apiClient
    .get<number>(`/game/question/${id}`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err));
}
