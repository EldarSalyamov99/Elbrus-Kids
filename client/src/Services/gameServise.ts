import { CategoryType } from '../Types/gameTypes';
import apiClient from './apiConfig';

export function getGameCategories(): Promise<CategoryType[]> {
  return apiClient
    .get<CategoryType[]>('/game/categories')
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err));
}

export function getGameCategories(): Promise<CategoryType[]> {
  return apiClient
    .get<CategoryType[]>('/game/categories')
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err));
}
