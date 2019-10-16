import { MemoryStorage } from "../services/MemoryStorage";
import { LocalStorage } from "../services/LocalStorage";

export const storages = {
  memory: MemoryStorage,
  localStorage: LocalStorage
}