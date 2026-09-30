import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateCategoryData {
  category_insert: Category_Key;
}

export interface CreateOrderData {
  order_insert: Order_Key;
}

export interface CreateOrderItemData {
  orderItem_insert: OrderItem_Key;
}

export interface CreateOrderItemVariables {
  qty: number;
  price: number;
  orderId: UUIDString;
  productId: UUIDString;
}

export interface CreateOrderVariables {
  total: number;
  status: string;
}

export interface CreateProductData {
  product_insert: Product_Key;
}

export interface CreateProductVariables {
  name: string;
  price: number;
  stock: number;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserPreferenceData {
  userPreference_insert: UserPreference_Key;
}

export interface CreateUserPreferenceVariables {
  catId: UUIDString;
  score?: number | null;
}

export interface CreateUserVariables {
  email: string;
  name: string;
}

export interface DeleteCategoryData {
  category_delete?: Category_Key | null;
}

export interface DeleteCategoryVariables {
  id: UUIDString;
}

export interface DeleteOrderData {
  order_delete?: Order_Key | null;
}

export interface DeleteOrderItemData {
  orderItem_delete?: OrderItem_Key | null;
}

export interface DeleteOrderItemVariables {
  id: UUIDString;
}

export interface DeleteOrderVariables {
  id: UUIDString;
}

export interface DeleteProductData {
  product_delete?: Product_Key | null;
}

export interface DeleteProductVariables {
  id: UUIDString;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface DeleteUserPreferenceData {
  userPreference_delete?: UserPreference_Key | null;
}

export interface DeleteUserPreferenceVariables {
  id: UUIDString;
}

export interface GetCategoryData {
  category?: {
    id: UUIDString;
    name: string;
    slug?: string | null;
  } & Category_Key;
}

export interface GetCategoryVariables {
  id: UUIDString;
}

export interface GetMyProfileData {
  user?: {
    id: UUIDString;
    email: string;
    displayName: string;
  } & User_Key;
}

export interface GetOrderData {
  order?: {
    id: UUIDString;
    totalAmount: number;
    status: string;
    userId: UUIDString;
  } & Order_Key;
}

export interface GetOrderItemData {
  orderItem?: {
    id: UUIDString;
    quantity: number;
    priceAtPurchase: number;
  } & OrderItem_Key;
}

export interface GetOrderItemVariables {
  id: UUIDString;
}

export interface GetOrderVariables {
  id: UUIDString;
}

export interface GetProductData {
  product?: {
    id: UUIDString;
    name: string;
    price: number;
    description?: string | null;
  } & Product_Key;
}

export interface GetProductVariables {
  id: UUIDString;
}

export interface GetUserPreferenceData {
  userPreference?: {
    id: UUIDString;
    interactionScore?: number | null;
    categoryId: UUIDString;
  } & UserPreference_Key;
}

export interface GetUserPreferenceVariables {
  id: UUIDString;
}

export interface ListCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    slug?: string | null;
  } & Category_Key)[];
}

export interface ListMyOrdersData {
  orders: ({
    id: UUIDString;
    totalAmount: number;
    status: string;
  } & Order_Key)[];
}

export interface ListMyPreferencesData {
  userPreferences: ({
    id: UUIDString;
    interactionScore?: number | null;
    categoryId: UUIDString;
  } & UserPreference_Key)[];
}

export interface ListOrderItemsData {
  orderItems: ({
    id: UUIDString;
    quantity: number;
  } & OrderItem_Key)[];
}

export interface ListOrderItemsVariables {
  orderId: UUIDString;
}

export interface ListProductsData {
  products: ({
    id: UUIDString;
    name: string;
    price: number;
  } & Product_Key)[];
}

export interface ListUsersData {
  users: ({
    id: UUIDString;
    displayName: string;
  } & User_Key)[];
}

export interface OrderItem_Key {
  id: UUIDString;
  __typename?: 'OrderItem_Key';
}

export interface Order_Key {
  id: UUIDString;
  __typename?: 'Order_Key';
}

export interface Product_Key {
  id: UUIDString;
  __typename?: 'Product_Key';
}

export interface UpdateCategoryData {
  category_update?: Category_Key | null;
}

export interface UpdateCategoryVariables {
  id: UUIDString;
  name?: string | null;
}

export interface UpdateOrderData {
  order_update?: Order_Key | null;
}

export interface UpdateOrderItemData {
  orderItem_update?: OrderItem_Key | null;
}

export interface UpdateOrderItemVariables {
  id: UUIDString;
  qty?: number | null;
}

export interface UpdateOrderVariables {
  id: UUIDString;
  status?: string | null;
}

export interface UpdateProductData {
  product_update?: Product_Key | null;
}

export interface UpdateProductVariables {
  id: UUIDString;
  price?: number | null;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface UpdateUserPreferenceData {
  userPreference_update?: UserPreference_Key | null;
}

export interface UpdateUserPreferenceVariables {
  id: UUIDString;
  score?: number | null;
}

export interface UpdateUserVariables {
  name?: string | null;
}

export interface UserPreference_Key {
  id: UUIDString;
  __typename?: 'UserPreference_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateCategoryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateCategoryData, undefined>;
  operationName: string;
}
export const createCategoryRef: CreateCategoryRef;

export function createCategory(): MutationPromise<CreateCategoryData, undefined>;
export function createCategory(dc: DataConnect): MutationPromise<CreateCategoryData, undefined>;

interface UpdateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
  operationName: string;
}
export const updateCategoryRef: UpdateCategoryRef;

export function updateCategory(vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;
export function updateCategory(dc: DataConnect, vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;

interface DeleteCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteCategoryVariables): MutationRef<DeleteCategoryData, DeleteCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteCategoryVariables): MutationRef<DeleteCategoryData, DeleteCategoryVariables>;
  operationName: string;
}
export const deleteCategoryRef: DeleteCategoryRef;

export function deleteCategory(vars: DeleteCategoryVariables): MutationPromise<DeleteCategoryData, DeleteCategoryVariables>;
export function deleteCategory(dc: DataConnect, vars: DeleteCategoryVariables): MutationPromise<DeleteCategoryData, DeleteCategoryVariables>;

interface GetCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCategoryVariables): QueryRef<GetCategoryData, GetCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCategoryVariables): QueryRef<GetCategoryData, GetCategoryVariables>;
  operationName: string;
}
export const getCategoryRef: GetCategoryRef;

export function getCategory(vars: GetCategoryVariables, options?: ExecuteQueryOptions): QueryPromise<GetCategoryData, GetCategoryVariables>;
export function getCategory(dc: DataConnect, vars: GetCategoryVariables, options?: ExecuteQueryOptions): QueryPromise<GetCategoryData, GetCategoryVariables>;

interface ListCategoriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCategoriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCategoriesData, undefined>;
  operationName: string;
}
export const listCategoriesRef: ListCategoriesRef;

export function listCategories(options?: ExecuteQueryOptions): QueryPromise<ListCategoriesData, undefined>;
export function listCategories(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCategoriesData, undefined>;

interface CreateOrderRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateOrderVariables): MutationRef<CreateOrderData, CreateOrderVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateOrderVariables): MutationRef<CreateOrderData, CreateOrderVariables>;
  operationName: string;
}
export const createOrderRef: CreateOrderRef;

export function createOrder(vars: CreateOrderVariables): MutationPromise<CreateOrderData, CreateOrderVariables>;
export function createOrder(dc: DataConnect, vars: CreateOrderVariables): MutationPromise<CreateOrderData, CreateOrderVariables>;

interface UpdateOrderRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateOrderVariables): MutationRef<UpdateOrderData, UpdateOrderVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateOrderVariables): MutationRef<UpdateOrderData, UpdateOrderVariables>;
  operationName: string;
}
export const updateOrderRef: UpdateOrderRef;

export function updateOrder(vars: UpdateOrderVariables): MutationPromise<UpdateOrderData, UpdateOrderVariables>;
export function updateOrder(dc: DataConnect, vars: UpdateOrderVariables): MutationPromise<UpdateOrderData, UpdateOrderVariables>;

interface DeleteOrderRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteOrderVariables): MutationRef<DeleteOrderData, DeleteOrderVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteOrderVariables): MutationRef<DeleteOrderData, DeleteOrderVariables>;
  operationName: string;
}
export const deleteOrderRef: DeleteOrderRef;

export function deleteOrder(vars: DeleteOrderVariables): MutationPromise<DeleteOrderData, DeleteOrderVariables>;
export function deleteOrder(dc: DataConnect, vars: DeleteOrderVariables): MutationPromise<DeleteOrderData, DeleteOrderVariables>;

interface GetOrderRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetOrderVariables): QueryRef<GetOrderData, GetOrderVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetOrderVariables): QueryRef<GetOrderData, GetOrderVariables>;
  operationName: string;
}
export const getOrderRef: GetOrderRef;

export function getOrder(vars: GetOrderVariables, options?: ExecuteQueryOptions): QueryPromise<GetOrderData, GetOrderVariables>;
export function getOrder(dc: DataConnect, vars: GetOrderVariables, options?: ExecuteQueryOptions): QueryPromise<GetOrderData, GetOrderVariables>;

interface ListMyOrdersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyOrdersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyOrdersData, undefined>;
  operationName: string;
}
export const listMyOrdersRef: ListMyOrdersRef;

export function listMyOrders(options?: ExecuteQueryOptions): QueryPromise<ListMyOrdersData, undefined>;
export function listMyOrders(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyOrdersData, undefined>;

interface CreateOrderItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateOrderItemVariables): MutationRef<CreateOrderItemData, CreateOrderItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateOrderItemVariables): MutationRef<CreateOrderItemData, CreateOrderItemVariables>;
  operationName: string;
}
export const createOrderItemRef: CreateOrderItemRef;

export function createOrderItem(vars: CreateOrderItemVariables): MutationPromise<CreateOrderItemData, CreateOrderItemVariables>;
export function createOrderItem(dc: DataConnect, vars: CreateOrderItemVariables): MutationPromise<CreateOrderItemData, CreateOrderItemVariables>;

interface UpdateOrderItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateOrderItemVariables): MutationRef<UpdateOrderItemData, UpdateOrderItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateOrderItemVariables): MutationRef<UpdateOrderItemData, UpdateOrderItemVariables>;
  operationName: string;
}
export const updateOrderItemRef: UpdateOrderItemRef;

export function updateOrderItem(vars: UpdateOrderItemVariables): MutationPromise<UpdateOrderItemData, UpdateOrderItemVariables>;
export function updateOrderItem(dc: DataConnect, vars: UpdateOrderItemVariables): MutationPromise<UpdateOrderItemData, UpdateOrderItemVariables>;

interface DeleteOrderItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteOrderItemVariables): MutationRef<DeleteOrderItemData, DeleteOrderItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteOrderItemVariables): MutationRef<DeleteOrderItemData, DeleteOrderItemVariables>;
  operationName: string;
}
export const deleteOrderItemRef: DeleteOrderItemRef;

export function deleteOrderItem(vars: DeleteOrderItemVariables): MutationPromise<DeleteOrderItemData, DeleteOrderItemVariables>;
export function deleteOrderItem(dc: DataConnect, vars: DeleteOrderItemVariables): MutationPromise<DeleteOrderItemData, DeleteOrderItemVariables>;

interface GetOrderItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetOrderItemVariables): QueryRef<GetOrderItemData, GetOrderItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetOrderItemVariables): QueryRef<GetOrderItemData, GetOrderItemVariables>;
  operationName: string;
}
export const getOrderItemRef: GetOrderItemRef;

export function getOrderItem(vars: GetOrderItemVariables, options?: ExecuteQueryOptions): QueryPromise<GetOrderItemData, GetOrderItemVariables>;
export function getOrderItem(dc: DataConnect, vars: GetOrderItemVariables, options?: ExecuteQueryOptions): QueryPromise<GetOrderItemData, GetOrderItemVariables>;

interface ListOrderItemsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListOrderItemsVariables): QueryRef<ListOrderItemsData, ListOrderItemsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListOrderItemsVariables): QueryRef<ListOrderItemsData, ListOrderItemsVariables>;
  operationName: string;
}
export const listOrderItemsRef: ListOrderItemsRef;

export function listOrderItems(vars: ListOrderItemsVariables, options?: ExecuteQueryOptions): QueryPromise<ListOrderItemsData, ListOrderItemsVariables>;
export function listOrderItems(dc: DataConnect, vars: ListOrderItemsVariables, options?: ExecuteQueryOptions): QueryPromise<ListOrderItemsData, ListOrderItemsVariables>;

interface CreateProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
  operationName: string;
}
export const createProductRef: CreateProductRef;

export function createProduct(vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;
export function createProduct(dc: DataConnect, vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface UpdateProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProductVariables): MutationRef<UpdateProductData, UpdateProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProductVariables): MutationRef<UpdateProductData, UpdateProductVariables>;
  operationName: string;
}
export const updateProductRef: UpdateProductRef;

export function updateProduct(vars: UpdateProductVariables): MutationPromise<UpdateProductData, UpdateProductVariables>;
export function updateProduct(dc: DataConnect, vars: UpdateProductVariables): MutationPromise<UpdateProductData, UpdateProductVariables>;

interface DeleteProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProductVariables): MutationRef<DeleteProductData, DeleteProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteProductVariables): MutationRef<DeleteProductData, DeleteProductVariables>;
  operationName: string;
}
export const deleteProductRef: DeleteProductRef;

export function deleteProduct(vars: DeleteProductVariables): MutationPromise<DeleteProductData, DeleteProductVariables>;
export function deleteProduct(dc: DataConnect, vars: DeleteProductVariables): MutationPromise<DeleteProductData, DeleteProductVariables>;

interface GetProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductVariables): QueryRef<GetProductData, GetProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetProductVariables): QueryRef<GetProductData, GetProductVariables>;
  operationName: string;
}
export const getProductRef: GetProductRef;

export function getProduct(vars: GetProductVariables, options?: ExecuteQueryOptions): QueryPromise<GetProductData, GetProductVariables>;
export function getProduct(dc: DataConnect, vars: GetProductVariables, options?: ExecuteQueryOptions): QueryPromise<GetProductData, GetProductVariables>;

interface ListProductsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProductsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProductsData, undefined>;
  operationName: string;
}
export const listProductsRef: ListProductsRef;

export function listProducts(options?: ExecuteQueryOptions): QueryPromise<ListProductsData, undefined>;
export function listProducts(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProductsData, undefined>;

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(): MutationPromise<DeleteUserData, undefined>;
export function deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface GetMyProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProfileData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyProfileData, undefined>;
  operationName: string;
}
export const getMyProfileRef: GetMyProfileRef;

export function getMyProfile(options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;
export function getMyProfile(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface CreateUserPreferenceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserPreferenceVariables): MutationRef<CreateUserPreferenceData, CreateUserPreferenceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserPreferenceVariables): MutationRef<CreateUserPreferenceData, CreateUserPreferenceVariables>;
  operationName: string;
}
export const createUserPreferenceRef: CreateUserPreferenceRef;

export function createUserPreference(vars: CreateUserPreferenceVariables): MutationPromise<CreateUserPreferenceData, CreateUserPreferenceVariables>;
export function createUserPreference(dc: DataConnect, vars: CreateUserPreferenceVariables): MutationPromise<CreateUserPreferenceData, CreateUserPreferenceVariables>;

interface UpdateUserPreferenceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserPreferenceVariables): MutationRef<UpdateUserPreferenceData, UpdateUserPreferenceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserPreferenceVariables): MutationRef<UpdateUserPreferenceData, UpdateUserPreferenceVariables>;
  operationName: string;
}
export const updateUserPreferenceRef: UpdateUserPreferenceRef;

export function updateUserPreference(vars: UpdateUserPreferenceVariables): MutationPromise<UpdateUserPreferenceData, UpdateUserPreferenceVariables>;
export function updateUserPreference(dc: DataConnect, vars: UpdateUserPreferenceVariables): MutationPromise<UpdateUserPreferenceData, UpdateUserPreferenceVariables>;

interface DeleteUserPreferenceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserPreferenceVariables): MutationRef<DeleteUserPreferenceData, DeleteUserPreferenceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteUserPreferenceVariables): MutationRef<DeleteUserPreferenceData, DeleteUserPreferenceVariables>;
  operationName: string;
}
export const deleteUserPreferenceRef: DeleteUserPreferenceRef;

export function deleteUserPreference(vars: DeleteUserPreferenceVariables): MutationPromise<DeleteUserPreferenceData, DeleteUserPreferenceVariables>;
export function deleteUserPreference(dc: DataConnect, vars: DeleteUserPreferenceVariables): MutationPromise<DeleteUserPreferenceData, DeleteUserPreferenceVariables>;

interface GetUserPreferenceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserPreferenceVariables): QueryRef<GetUserPreferenceData, GetUserPreferenceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserPreferenceVariables): QueryRef<GetUserPreferenceData, GetUserPreferenceVariables>;
  operationName: string;
}
export const getUserPreferenceRef: GetUserPreferenceRef;

export function getUserPreference(vars: GetUserPreferenceVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserPreferenceData, GetUserPreferenceVariables>;
export function getUserPreference(dc: DataConnect, vars: GetUserPreferenceVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserPreferenceData, GetUserPreferenceVariables>;

interface ListMyPreferencesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyPreferencesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyPreferencesData, undefined>;
  operationName: string;
}
export const listMyPreferencesRef: ListMyPreferencesRef;

export function listMyPreferences(options?: ExecuteQueryOptions): QueryPromise<ListMyPreferencesData, undefined>;
export function listMyPreferences(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyPreferencesData, undefined>;

