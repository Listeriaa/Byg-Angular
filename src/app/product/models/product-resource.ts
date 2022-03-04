import { Resource } from "src/app/utils/models/resource";

export interface ProductResource extends Resource<number> {
  id: number;
  name: string;
  price: number;
}
