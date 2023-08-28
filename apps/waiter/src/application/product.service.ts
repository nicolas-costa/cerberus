import {Injectable} from "@nestjs/common";
import ProductPort from "./ports/product.port";

@Injectable()
export default class ProductService {

    constructor(private readonly products: ProductPort) {
    }

    get(UUID: string) {
        return this.products.get(UUID);
    }
}
