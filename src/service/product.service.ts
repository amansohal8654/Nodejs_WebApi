import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductModel, { ProductDocument, ProductInfo } from "../models/product.model";

export async function createProduct(input: ProductInfo){
    return ProductModel.create(input);
}

export async function findProduct(
    query: FilterQuery<ProductDocument>,
    options: QueryOptions = {lean: true})
{
    return ProductModel.findOne(query, {}, options)
}

export async function findAndUpdateProduct(
    query: FilterQuery<ProductDocument>, 
    options: QueryOptions,
    update: UpdateQuery<ProductDocument>)
{
    return ProductModel.findOneAndUpdate(query, update, options);
}

export async function deleteProduct(query: FilterQuery<ProductDocument>){
    return ProductModel.deleteOne(query);
}