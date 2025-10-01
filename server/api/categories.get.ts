import { products } from '../utils/db'
export default defineEventHandler(() => Array.from(new Set(products.map((p) => p.category))))
