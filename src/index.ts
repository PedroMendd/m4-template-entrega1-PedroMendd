import { IProduct, IProductServices } from "./interfaces";

class ProductList implements IProductServices {
  private productList: IProduct[] = [];
  private id: number = 1;

  createProduct(data: { name: string; price: number }): IProduct {
    const newProduct: IProduct = {
      id: this.id,
      name: data.name,
      price: data.price,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.productList.push(newProduct);
    this.id++;
    return newProduct;
  }

  getProducts(): IProduct[] {
    return this.productList;
  }

  getOneProduct(id: number): IProduct | undefined {
    return this.productList.find((product) => product.id === id);
  }

  updateProduct(
    id: number,
    data: { name?: string | undefined; price?: number | undefined }
  ): IProduct {
    const index = this.productList.findIndex((product) => product.id === id);

    const oldProduct = this.productList[index];
    const newProduct: IProduct = {
      ...oldProduct,
      ...data,
      updatedAt: new Date(),
    };

    this.productList[index] = newProduct;

    return newProduct;
  }

  deleteProduct(id: number): { message: string } {
    const index = this.productList.findIndex((product) => product.id === id);

    this.productList.splice(index, 1);

    return { message: "Product successfully deleted." };
  }
}

export const productList = new ProductList();
