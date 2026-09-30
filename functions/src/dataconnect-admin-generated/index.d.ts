import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

export const connectorConfig: ConnectorConfig;

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

/** Generated Node Admin SDK operation action function for the 'CreateCategory' Mutation. Allow users to execute without passing in DataConnect. */
export function createCategory(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateCategoryData>>;
/** Generated Node Admin SDK operation action function for the 'CreateCategory' Mutation. Allow users to pass in custom DataConnect instances. */
export function createCategory(options?: OperationOptions): Promise<ExecuteOperationResponse<CreateCategoryData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateCategory' Mutation. Allow users to execute without passing in DataConnect. */
export function updateCategory(dc: DataConnect, vars: UpdateCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateCategoryData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateCategory' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateCategory(vars: UpdateCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateCategoryData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteCategory' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteCategory(dc: DataConnect, vars: DeleteCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteCategoryData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteCategory' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteCategory(vars: DeleteCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteCategoryData>>;

/** Generated Node Admin SDK operation action function for the 'GetCategory' Query. Allow users to execute without passing in DataConnect. */
export function getCategory(dc: DataConnect, vars: GetCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetCategoryData>>;
/** Generated Node Admin SDK operation action function for the 'GetCategory' Query. Allow users to pass in custom DataConnect instances. */
export function getCategory(vars: GetCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetCategoryData>>;

/** Generated Node Admin SDK operation action function for the 'ListCategories' Query. Allow users to execute without passing in DataConnect. */
export function listCategories(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListCategoriesData>>;
/** Generated Node Admin SDK operation action function for the 'ListCategories' Query. Allow users to pass in custom DataConnect instances. */
export function listCategories(options?: OperationOptions): Promise<ExecuteOperationResponse<ListCategoriesData>>;

/** Generated Node Admin SDK operation action function for the 'CreateOrder' Mutation. Allow users to execute without passing in DataConnect. */
export function createOrder(dc: DataConnect, vars: CreateOrderVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateOrderData>>;
/** Generated Node Admin SDK operation action function for the 'CreateOrder' Mutation. Allow users to pass in custom DataConnect instances. */
export function createOrder(vars: CreateOrderVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateOrderData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateOrder' Mutation. Allow users to execute without passing in DataConnect. */
export function updateOrder(dc: DataConnect, vars: UpdateOrderVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateOrderData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateOrder' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateOrder(vars: UpdateOrderVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateOrderData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteOrder' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteOrder(dc: DataConnect, vars: DeleteOrderVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteOrderData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteOrder' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteOrder(vars: DeleteOrderVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteOrderData>>;

/** Generated Node Admin SDK operation action function for the 'GetOrder' Query. Allow users to execute without passing in DataConnect. */
export function getOrder(dc: DataConnect, vars: GetOrderVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetOrderData>>;
/** Generated Node Admin SDK operation action function for the 'GetOrder' Query. Allow users to pass in custom DataConnect instances. */
export function getOrder(vars: GetOrderVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetOrderData>>;

/** Generated Node Admin SDK operation action function for the 'ListMyOrders' Query. Allow users to execute without passing in DataConnect. */
export function listMyOrders(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListMyOrdersData>>;
/** Generated Node Admin SDK operation action function for the 'ListMyOrders' Query. Allow users to pass in custom DataConnect instances. */
export function listMyOrders(options?: OperationOptions): Promise<ExecuteOperationResponse<ListMyOrdersData>>;

/** Generated Node Admin SDK operation action function for the 'CreateOrderItem' Mutation. Allow users to execute without passing in DataConnect. */
export function createOrderItem(dc: DataConnect, vars: CreateOrderItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateOrderItemData>>;
/** Generated Node Admin SDK operation action function for the 'CreateOrderItem' Mutation. Allow users to pass in custom DataConnect instances. */
export function createOrderItem(vars: CreateOrderItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateOrderItemData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateOrderItem' Mutation. Allow users to execute without passing in DataConnect. */
export function updateOrderItem(dc: DataConnect, vars: UpdateOrderItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateOrderItemData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateOrderItem' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateOrderItem(vars: UpdateOrderItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateOrderItemData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteOrderItem' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteOrderItem(dc: DataConnect, vars: DeleteOrderItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteOrderItemData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteOrderItem' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteOrderItem(vars: DeleteOrderItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteOrderItemData>>;

/** Generated Node Admin SDK operation action function for the 'GetOrderItem' Query. Allow users to execute without passing in DataConnect. */
export function getOrderItem(dc: DataConnect, vars: GetOrderItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetOrderItemData>>;
/** Generated Node Admin SDK operation action function for the 'GetOrderItem' Query. Allow users to pass in custom DataConnect instances. */
export function getOrderItem(vars: GetOrderItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetOrderItemData>>;

/** Generated Node Admin SDK operation action function for the 'ListOrderItems' Query. Allow users to execute without passing in DataConnect. */
export function listOrderItems(dc: DataConnect, vars: ListOrderItemsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListOrderItemsData>>;
/** Generated Node Admin SDK operation action function for the 'ListOrderItems' Query. Allow users to pass in custom DataConnect instances. */
export function listOrderItems(vars: ListOrderItemsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListOrderItemsData>>;

/** Generated Node Admin SDK operation action function for the 'CreateProduct' Mutation. Allow users to execute without passing in DataConnect. */
export function createProduct(dc: DataConnect, vars: CreateProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateProductData>>;
/** Generated Node Admin SDK operation action function for the 'CreateProduct' Mutation. Allow users to pass in custom DataConnect instances. */
export function createProduct(vars: CreateProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateProductData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateProduct' Mutation. Allow users to execute without passing in DataConnect. */
export function updateProduct(dc: DataConnect, vars: UpdateProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateProductData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateProduct' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateProduct(vars: UpdateProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateProductData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteProduct' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteProduct(dc: DataConnect, vars: DeleteProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteProductData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteProduct' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteProduct(vars: DeleteProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteProductData>>;

/** Generated Node Admin SDK operation action function for the 'GetProduct' Query. Allow users to execute without passing in DataConnect. */
export function getProduct(dc: DataConnect, vars: GetProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetProductData>>;
/** Generated Node Admin SDK operation action function for the 'GetProduct' Query. Allow users to pass in custom DataConnect instances. */
export function getProduct(vars: GetProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetProductData>>;

/** Generated Node Admin SDK operation action function for the 'ListProducts' Query. Allow users to execute without passing in DataConnect. */
export function listProducts(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListProductsData>>;
/** Generated Node Admin SDK operation action function for the 'ListProducts' Query. Allow users to pass in custom DataConnect instances. */
export function listProducts(options?: OperationOptions): Promise<ExecuteOperationResponse<ListProductsData>>;

/** Generated Node Admin SDK operation action function for the 'CreateUser' Mutation. Allow users to execute without passing in DataConnect. */
export function createUser(dc: DataConnect, vars: CreateUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateUserData>>;
/** Generated Node Admin SDK operation action function for the 'CreateUser' Mutation. Allow users to pass in custom DataConnect instances. */
export function createUser(vars: CreateUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateUserData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateUser' Mutation. Allow users to execute without passing in DataConnect. */
export function updateUser(dc: DataConnect, vars?: UpdateUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateUserData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateUser' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateUser(vars?: UpdateUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateUserData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteUser' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteUser(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteUserData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteUser' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteUser(options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteUserData>>;

/** Generated Node Admin SDK operation action function for the 'GetMyProfile' Query. Allow users to execute without passing in DataConnect. */
export function getMyProfile(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetMyProfileData>>;
/** Generated Node Admin SDK operation action function for the 'GetMyProfile' Query. Allow users to pass in custom DataConnect instances. */
export function getMyProfile(options?: OperationOptions): Promise<ExecuteOperationResponse<GetMyProfileData>>;

/** Generated Node Admin SDK operation action function for the 'ListUsers' Query. Allow users to execute without passing in DataConnect. */
export function listUsers(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListUsersData>>;
/** Generated Node Admin SDK operation action function for the 'ListUsers' Query. Allow users to pass in custom DataConnect instances. */
export function listUsers(options?: OperationOptions): Promise<ExecuteOperationResponse<ListUsersData>>;

/** Generated Node Admin SDK operation action function for the 'CreateUserPreference' Mutation. Allow users to execute without passing in DataConnect. */
export function createUserPreference(dc: DataConnect, vars: CreateUserPreferenceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateUserPreferenceData>>;
/** Generated Node Admin SDK operation action function for the 'CreateUserPreference' Mutation. Allow users to pass in custom DataConnect instances. */
export function createUserPreference(vars: CreateUserPreferenceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateUserPreferenceData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateUserPreference' Mutation. Allow users to execute without passing in DataConnect. */
export function updateUserPreference(dc: DataConnect, vars: UpdateUserPreferenceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateUserPreferenceData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateUserPreference' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateUserPreference(vars: UpdateUserPreferenceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateUserPreferenceData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteUserPreference' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteUserPreference(dc: DataConnect, vars: DeleteUserPreferenceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteUserPreferenceData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteUserPreference' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteUserPreference(vars: DeleteUserPreferenceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteUserPreferenceData>>;

/** Generated Node Admin SDK operation action function for the 'GetUserPreference' Query. Allow users to execute without passing in DataConnect. */
export function getUserPreference(dc: DataConnect, vars: GetUserPreferenceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetUserPreferenceData>>;
/** Generated Node Admin SDK operation action function for the 'GetUserPreference' Query. Allow users to pass in custom DataConnect instances. */
export function getUserPreference(vars: GetUserPreferenceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetUserPreferenceData>>;

/** Generated Node Admin SDK operation action function for the 'ListMyPreferences' Query. Allow users to execute without passing in DataConnect. */
export function listMyPreferences(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListMyPreferencesData>>;
/** Generated Node Admin SDK operation action function for the 'ListMyPreferences' Query. Allow users to pass in custom DataConnect instances. */
export function listMyPreferences(options?: OperationOptions): Promise<ExecuteOperationResponse<ListMyPreferencesData>>;

