# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetCategory*](#getcategory)
  - [*ListCategories*](#listcategories)
  - [*GetOrder*](#getorder)
  - [*ListMyOrders*](#listmyorders)
  - [*GetOrderItem*](#getorderitem)
  - [*ListOrderItems*](#listorderitems)
  - [*GetProduct*](#getproduct)
  - [*ListProducts*](#listproducts)
  - [*GetMyProfile*](#getmyprofile)
  - [*ListUsers*](#listusers)
  - [*GetUserPreference*](#getuserpreference)
  - [*ListMyPreferences*](#listmypreferences)
- [**Mutations**](#mutations)
  - [*CreateCategory*](#createcategory)
  - [*UpdateCategory*](#updatecategory)
  - [*DeleteCategory*](#deletecategory)
  - [*CreateOrder*](#createorder)
  - [*UpdateOrder*](#updateorder)
  - [*DeleteOrder*](#deleteorder)
  - [*CreateOrderItem*](#createorderitem)
  - [*UpdateOrderItem*](#updateorderitem)
  - [*DeleteOrderItem*](#deleteorderitem)
  - [*CreateProduct*](#createproduct)
  - [*UpdateProduct*](#updateproduct)
  - [*DeleteProduct*](#deleteproduct)
  - [*CreateUser*](#createuser)
  - [*UpdateUser*](#updateuser)
  - [*DeleteUser*](#deleteuser)
  - [*CreateUserPreference*](#createuserpreference)
  - [*UpdateUserPreference*](#updateuserpreference)
  - [*DeleteUserPreference*](#deleteuserpreference)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetCategory
You can execute the `GetCategory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCategory(vars: GetCategoryVariables, options?: ExecuteQueryOptions): QueryPromise<GetCategoryData, GetCategoryVariables>;

interface GetCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCategoryVariables): QueryRef<GetCategoryData, GetCategoryVariables>;
}
export const getCategoryRef: GetCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCategory(dc: DataConnect, vars: GetCategoryVariables, options?: ExecuteQueryOptions): QueryPromise<GetCategoryData, GetCategoryVariables>;

interface GetCategoryRef {
  ...
  (dc: DataConnect, vars: GetCategoryVariables): QueryRef<GetCategoryData, GetCategoryVariables>;
}
export const getCategoryRef: GetCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCategoryRef:
```typescript
const name = getCategoryRef.operationName;
console.log(name);
```

### Variables
The `GetCategory` query requires an argument of type `GetCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCategoryVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetCategory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCategoryData {
  category?: {
    id: UUIDString;
    name: string;
    slug?: string | null;
  } & Category_Key;
}
```
### Using `GetCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCategory, GetCategoryVariables } from '@dataconnect/generated';

// The `GetCategory` query requires an argument of type `GetCategoryVariables`:
const getCategoryVars: GetCategoryVariables = {
  id: ..., 
};

// Call the `getCategory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCategory(getCategoryVars);
// Variables can be defined inline as well.
const { data } = await getCategory({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCategory(dataConnect, getCategoryVars);

console.log(data.category);

// Or, you can use the `Promise` API.
getCategory(getCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.category);
});
```

### Using `GetCategory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCategoryRef, GetCategoryVariables } from '@dataconnect/generated';

// The `GetCategory` query requires an argument of type `GetCategoryVariables`:
const getCategoryVars: GetCategoryVariables = {
  id: ..., 
};

// Call the `getCategoryRef()` function to get a reference to the query.
const ref = getCategoryRef(getCategoryVars);
// Variables can be defined inline as well.
const ref = getCategoryRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCategoryRef(dataConnect, getCategoryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.category);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.category);
});
```

## ListCategories
You can execute the `ListCategories` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCategories(options?: ExecuteQueryOptions): QueryPromise<ListCategoriesData, undefined>;

interface ListCategoriesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCategoriesData, undefined>;
}
export const listCategoriesRef: ListCategoriesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCategories(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCategoriesData, undefined>;

interface ListCategoriesRef {
  ...
  (dc: DataConnect): QueryRef<ListCategoriesData, undefined>;
}
export const listCategoriesRef: ListCategoriesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCategoriesRef:
```typescript
const name = listCategoriesRef.operationName;
console.log(name);
```

### Variables
The `ListCategories` query has no variables.
### Return Type
Recall that executing the `ListCategories` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCategoriesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    slug?: string | null;
  } & Category_Key)[];
}
```
### Using `ListCategories`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCategories } from '@dataconnect/generated';


// Call the `listCategories()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCategories();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCategories(dataConnect);

console.log(data.categories);

// Or, you can use the `Promise` API.
listCategories().then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

### Using `ListCategories`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCategoriesRef } from '@dataconnect/generated';


// Call the `listCategoriesRef()` function to get a reference to the query.
const ref = listCategoriesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCategoriesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.categories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

## GetOrder
You can execute the `GetOrder` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getOrder(vars: GetOrderVariables, options?: ExecuteQueryOptions): QueryPromise<GetOrderData, GetOrderVariables>;

interface GetOrderRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetOrderVariables): QueryRef<GetOrderData, GetOrderVariables>;
}
export const getOrderRef: GetOrderRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getOrder(dc: DataConnect, vars: GetOrderVariables, options?: ExecuteQueryOptions): QueryPromise<GetOrderData, GetOrderVariables>;

interface GetOrderRef {
  ...
  (dc: DataConnect, vars: GetOrderVariables): QueryRef<GetOrderData, GetOrderVariables>;
}
export const getOrderRef: GetOrderRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getOrderRef:
```typescript
const name = getOrderRef.operationName;
console.log(name);
```

### Variables
The `GetOrder` query requires an argument of type `GetOrderVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetOrderVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetOrder` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetOrderData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetOrderData {
  order?: {
    id: UUIDString;
    totalAmount: number;
    status: string;
    userId: UUIDString;
  } & Order_Key;
}
```
### Using `GetOrder`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getOrder, GetOrderVariables } from '@dataconnect/generated';

// The `GetOrder` query requires an argument of type `GetOrderVariables`:
const getOrderVars: GetOrderVariables = {
  id: ..., 
};

// Call the `getOrder()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getOrder(getOrderVars);
// Variables can be defined inline as well.
const { data } = await getOrder({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getOrder(dataConnect, getOrderVars);

console.log(data.order);

// Or, you can use the `Promise` API.
getOrder(getOrderVars).then((response) => {
  const data = response.data;
  console.log(data.order);
});
```

### Using `GetOrder`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getOrderRef, GetOrderVariables } from '@dataconnect/generated';

// The `GetOrder` query requires an argument of type `GetOrderVariables`:
const getOrderVars: GetOrderVariables = {
  id: ..., 
};

// Call the `getOrderRef()` function to get a reference to the query.
const ref = getOrderRef(getOrderVars);
// Variables can be defined inline as well.
const ref = getOrderRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getOrderRef(dataConnect, getOrderVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.order);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.order);
});
```

## ListMyOrders
You can execute the `ListMyOrders` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyOrders(options?: ExecuteQueryOptions): QueryPromise<ListMyOrdersData, undefined>;

interface ListMyOrdersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyOrdersData, undefined>;
}
export const listMyOrdersRef: ListMyOrdersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyOrders(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyOrdersData, undefined>;

interface ListMyOrdersRef {
  ...
  (dc: DataConnect): QueryRef<ListMyOrdersData, undefined>;
}
export const listMyOrdersRef: ListMyOrdersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyOrdersRef:
```typescript
const name = listMyOrdersRef.operationName;
console.log(name);
```

### Variables
The `ListMyOrders` query has no variables.
### Return Type
Recall that executing the `ListMyOrders` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyOrdersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyOrdersData {
  orders: ({
    id: UUIDString;
    totalAmount: number;
    status: string;
  } & Order_Key)[];
}
```
### Using `ListMyOrders`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyOrders } from '@dataconnect/generated';


// Call the `listMyOrders()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyOrders();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyOrders(dataConnect);

console.log(data.orders);

// Or, you can use the `Promise` API.
listMyOrders().then((response) => {
  const data = response.data;
  console.log(data.orders);
});
```

### Using `ListMyOrders`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyOrdersRef } from '@dataconnect/generated';


// Call the `listMyOrdersRef()` function to get a reference to the query.
const ref = listMyOrdersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyOrdersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.orders);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.orders);
});
```

## GetOrderItem
You can execute the `GetOrderItem` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getOrderItem(vars: GetOrderItemVariables, options?: ExecuteQueryOptions): QueryPromise<GetOrderItemData, GetOrderItemVariables>;

interface GetOrderItemRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetOrderItemVariables): QueryRef<GetOrderItemData, GetOrderItemVariables>;
}
export const getOrderItemRef: GetOrderItemRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getOrderItem(dc: DataConnect, vars: GetOrderItemVariables, options?: ExecuteQueryOptions): QueryPromise<GetOrderItemData, GetOrderItemVariables>;

interface GetOrderItemRef {
  ...
  (dc: DataConnect, vars: GetOrderItemVariables): QueryRef<GetOrderItemData, GetOrderItemVariables>;
}
export const getOrderItemRef: GetOrderItemRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getOrderItemRef:
```typescript
const name = getOrderItemRef.operationName;
console.log(name);
```

### Variables
The `GetOrderItem` query requires an argument of type `GetOrderItemVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetOrderItemVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetOrderItem` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetOrderItemData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetOrderItemData {
  orderItem?: {
    id: UUIDString;
    quantity: number;
    priceAtPurchase: number;
  } & OrderItem_Key;
}
```
### Using `GetOrderItem`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getOrderItem, GetOrderItemVariables } from '@dataconnect/generated';

// The `GetOrderItem` query requires an argument of type `GetOrderItemVariables`:
const getOrderItemVars: GetOrderItemVariables = {
  id: ..., 
};

// Call the `getOrderItem()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getOrderItem(getOrderItemVars);
// Variables can be defined inline as well.
const { data } = await getOrderItem({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getOrderItem(dataConnect, getOrderItemVars);

console.log(data.orderItem);

// Or, you can use the `Promise` API.
getOrderItem(getOrderItemVars).then((response) => {
  const data = response.data;
  console.log(data.orderItem);
});
```

### Using `GetOrderItem`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getOrderItemRef, GetOrderItemVariables } from '@dataconnect/generated';

// The `GetOrderItem` query requires an argument of type `GetOrderItemVariables`:
const getOrderItemVars: GetOrderItemVariables = {
  id: ..., 
};

// Call the `getOrderItemRef()` function to get a reference to the query.
const ref = getOrderItemRef(getOrderItemVars);
// Variables can be defined inline as well.
const ref = getOrderItemRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getOrderItemRef(dataConnect, getOrderItemVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.orderItem);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.orderItem);
});
```

## ListOrderItems
You can execute the `ListOrderItems` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listOrderItems(vars: ListOrderItemsVariables, options?: ExecuteQueryOptions): QueryPromise<ListOrderItemsData, ListOrderItemsVariables>;

interface ListOrderItemsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListOrderItemsVariables): QueryRef<ListOrderItemsData, ListOrderItemsVariables>;
}
export const listOrderItemsRef: ListOrderItemsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listOrderItems(dc: DataConnect, vars: ListOrderItemsVariables, options?: ExecuteQueryOptions): QueryPromise<ListOrderItemsData, ListOrderItemsVariables>;

interface ListOrderItemsRef {
  ...
  (dc: DataConnect, vars: ListOrderItemsVariables): QueryRef<ListOrderItemsData, ListOrderItemsVariables>;
}
export const listOrderItemsRef: ListOrderItemsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listOrderItemsRef:
```typescript
const name = listOrderItemsRef.operationName;
console.log(name);
```

### Variables
The `ListOrderItems` query requires an argument of type `ListOrderItemsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListOrderItemsVariables {
  orderId: UUIDString;
}
```
### Return Type
Recall that executing the `ListOrderItems` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListOrderItemsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListOrderItemsData {
  orderItems: ({
    id: UUIDString;
    quantity: number;
  } & OrderItem_Key)[];
}
```
### Using `ListOrderItems`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listOrderItems, ListOrderItemsVariables } from '@dataconnect/generated';

// The `ListOrderItems` query requires an argument of type `ListOrderItemsVariables`:
const listOrderItemsVars: ListOrderItemsVariables = {
  orderId: ..., 
};

// Call the `listOrderItems()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listOrderItems(listOrderItemsVars);
// Variables can be defined inline as well.
const { data } = await listOrderItems({ orderId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listOrderItems(dataConnect, listOrderItemsVars);

console.log(data.orderItems);

// Or, you can use the `Promise` API.
listOrderItems(listOrderItemsVars).then((response) => {
  const data = response.data;
  console.log(data.orderItems);
});
```

### Using `ListOrderItems`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listOrderItemsRef, ListOrderItemsVariables } from '@dataconnect/generated';

// The `ListOrderItems` query requires an argument of type `ListOrderItemsVariables`:
const listOrderItemsVars: ListOrderItemsVariables = {
  orderId: ..., 
};

// Call the `listOrderItemsRef()` function to get a reference to the query.
const ref = listOrderItemsRef(listOrderItemsVars);
// Variables can be defined inline as well.
const ref = listOrderItemsRef({ orderId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listOrderItemsRef(dataConnect, listOrderItemsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.orderItems);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.orderItems);
});
```

## GetProduct
You can execute the `GetProduct` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getProduct(vars: GetProductVariables, options?: ExecuteQueryOptions): QueryPromise<GetProductData, GetProductVariables>;

interface GetProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductVariables): QueryRef<GetProductData, GetProductVariables>;
}
export const getProductRef: GetProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProduct(dc: DataConnect, vars: GetProductVariables, options?: ExecuteQueryOptions): QueryPromise<GetProductData, GetProductVariables>;

interface GetProductRef {
  ...
  (dc: DataConnect, vars: GetProductVariables): QueryRef<GetProductData, GetProductVariables>;
}
export const getProductRef: GetProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProductRef:
```typescript
const name = getProductRef.operationName;
console.log(name);
```

### Variables
The `GetProduct` query requires an argument of type `GetProductVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetProductVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetProduct` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProductData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetProductData {
  product?: {
    id: UUIDString;
    name: string;
    price: number;
    description?: string | null;
  } & Product_Key;
}
```
### Using `GetProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProduct, GetProductVariables } from '@dataconnect/generated';

// The `GetProduct` query requires an argument of type `GetProductVariables`:
const getProductVars: GetProductVariables = {
  id: ..., 
};

// Call the `getProduct()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProduct(getProductVars);
// Variables can be defined inline as well.
const { data } = await getProduct({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProduct(dataConnect, getProductVars);

console.log(data.product);

// Or, you can use the `Promise` API.
getProduct(getProductVars).then((response) => {
  const data = response.data;
  console.log(data.product);
});
```

### Using `GetProduct`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProductRef, GetProductVariables } from '@dataconnect/generated';

// The `GetProduct` query requires an argument of type `GetProductVariables`:
const getProductVars: GetProductVariables = {
  id: ..., 
};

// Call the `getProductRef()` function to get a reference to the query.
const ref = getProductRef(getProductVars);
// Variables can be defined inline as well.
const ref = getProductRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProductRef(dataConnect, getProductVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.product);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.product);
});
```

## ListProducts
You can execute the `ListProducts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProducts(options?: ExecuteQueryOptions): QueryPromise<ListProductsData, undefined>;

interface ListProductsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProductsData, undefined>;
}
export const listProductsRef: ListProductsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProducts(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProductsData, undefined>;

interface ListProductsRef {
  ...
  (dc: DataConnect): QueryRef<ListProductsData, undefined>;
}
export const listProductsRef: ListProductsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProductsRef:
```typescript
const name = listProductsRef.operationName;
console.log(name);
```

### Variables
The `ListProducts` query has no variables.
### Return Type
Recall that executing the `ListProducts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProductsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListProductsData {
  products: ({
    id: UUIDString;
    name: string;
    price: number;
  } & Product_Key)[];
}
```
### Using `ListProducts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProducts } from '@dataconnect/generated';


// Call the `listProducts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProducts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProducts(dataConnect);

console.log(data.products);

// Or, you can use the `Promise` API.
listProducts().then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `ListProducts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProductsRef } from '@dataconnect/generated';


// Call the `listProductsRef()` function to get a reference to the query.
const ref = listProductsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProductsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetMyProfile
You can execute the `GetMyProfile` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyProfile(options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;

interface GetMyProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProfileData, undefined>;
}
export const getMyProfileRef: GetMyProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyProfile(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;

interface GetMyProfileRef {
  ...
  (dc: DataConnect): QueryRef<GetMyProfileData, undefined>;
}
export const getMyProfileRef: GetMyProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyProfileRef:
```typescript
const name = getMyProfileRef.operationName;
console.log(name);
```

### Variables
The `GetMyProfile` query has no variables.
### Return Type
Recall that executing the `GetMyProfile` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyProfileData {
  user?: {
    id: UUIDString;
    email: string;
    displayName: string;
  } & User_Key;
}
```
### Using `GetMyProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyProfile } from '@dataconnect/generated';


// Call the `getMyProfile()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyProfile();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyProfile(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getMyProfile().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetMyProfile`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyProfileRef } from '@dataconnect/generated';


// Call the `getMyProfileRef()` function to get a reference to the query.
const ref = getMyProfileRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyProfileRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUsersRef:
```typescript
const name = listUsersRef.operationName;
console.log(name);
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUsersData {
  users: ({
    id: UUIDString;
    displayName: string;
  } & User_Key)[];
}
```
### Using `ListUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@dataconnect/generated';


// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@dataconnect/generated';


// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetUserPreference
You can execute the `GetUserPreference` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserPreference(vars: GetUserPreferenceVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserPreferenceData, GetUserPreferenceVariables>;

interface GetUserPreferenceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserPreferenceVariables): QueryRef<GetUserPreferenceData, GetUserPreferenceVariables>;
}
export const getUserPreferenceRef: GetUserPreferenceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserPreference(dc: DataConnect, vars: GetUserPreferenceVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserPreferenceData, GetUserPreferenceVariables>;

interface GetUserPreferenceRef {
  ...
  (dc: DataConnect, vars: GetUserPreferenceVariables): QueryRef<GetUserPreferenceData, GetUserPreferenceVariables>;
}
export const getUserPreferenceRef: GetUserPreferenceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserPreferenceRef:
```typescript
const name = getUserPreferenceRef.operationName;
console.log(name);
```

### Variables
The `GetUserPreference` query requires an argument of type `GetUserPreferenceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserPreferenceVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetUserPreference` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserPreferenceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserPreferenceData {
  userPreference?: {
    id: UUIDString;
    interactionScore?: number | null;
    categoryId: UUIDString;
  } & UserPreference_Key;
}
```
### Using `GetUserPreference`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserPreference, GetUserPreferenceVariables } from '@dataconnect/generated';

// The `GetUserPreference` query requires an argument of type `GetUserPreferenceVariables`:
const getUserPreferenceVars: GetUserPreferenceVariables = {
  id: ..., 
};

// Call the `getUserPreference()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserPreference(getUserPreferenceVars);
// Variables can be defined inline as well.
const { data } = await getUserPreference({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserPreference(dataConnect, getUserPreferenceVars);

console.log(data.userPreference);

// Or, you can use the `Promise` API.
getUserPreference(getUserPreferenceVars).then((response) => {
  const data = response.data;
  console.log(data.userPreference);
});
```

### Using `GetUserPreference`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserPreferenceRef, GetUserPreferenceVariables } from '@dataconnect/generated';

// The `GetUserPreference` query requires an argument of type `GetUserPreferenceVariables`:
const getUserPreferenceVars: GetUserPreferenceVariables = {
  id: ..., 
};

// Call the `getUserPreferenceRef()` function to get a reference to the query.
const ref = getUserPreferenceRef(getUserPreferenceVars);
// Variables can be defined inline as well.
const ref = getUserPreferenceRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserPreferenceRef(dataConnect, getUserPreferenceVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userPreference);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userPreference);
});
```

## ListMyPreferences
You can execute the `ListMyPreferences` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyPreferences(options?: ExecuteQueryOptions): QueryPromise<ListMyPreferencesData, undefined>;

interface ListMyPreferencesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyPreferencesData, undefined>;
}
export const listMyPreferencesRef: ListMyPreferencesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyPreferences(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyPreferencesData, undefined>;

interface ListMyPreferencesRef {
  ...
  (dc: DataConnect): QueryRef<ListMyPreferencesData, undefined>;
}
export const listMyPreferencesRef: ListMyPreferencesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyPreferencesRef:
```typescript
const name = listMyPreferencesRef.operationName;
console.log(name);
```

### Variables
The `ListMyPreferences` query has no variables.
### Return Type
Recall that executing the `ListMyPreferences` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyPreferencesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyPreferencesData {
  userPreferences: ({
    id: UUIDString;
    interactionScore?: number | null;
    categoryId: UUIDString;
  } & UserPreference_Key)[];
}
```
### Using `ListMyPreferences`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyPreferences } from '@dataconnect/generated';


// Call the `listMyPreferences()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyPreferences();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyPreferences(dataConnect);

console.log(data.userPreferences);

// Or, you can use the `Promise` API.
listMyPreferences().then((response) => {
  const data = response.data;
  console.log(data.userPreferences);
});
```

### Using `ListMyPreferences`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyPreferencesRef } from '@dataconnect/generated';


// Call the `listMyPreferencesRef()` function to get a reference to the query.
const ref = listMyPreferencesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyPreferencesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userPreferences);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userPreferences);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateCategory
You can execute the `CreateCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createCategory(): MutationPromise<CreateCategoryData, undefined>;

interface CreateCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateCategoryData, undefined>;
}
export const createCategoryRef: CreateCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCategory(dc: DataConnect): MutationPromise<CreateCategoryData, undefined>;

interface CreateCategoryRef {
  ...
  (dc: DataConnect): MutationRef<CreateCategoryData, undefined>;
}
export const createCategoryRef: CreateCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCategoryRef:
```typescript
const name = createCategoryRef.operationName;
console.log(name);
```

### Variables
The `CreateCategory` mutation has no variables.
### Return Type
Recall that executing the `CreateCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCategoryData {
  category_insert: Category_Key;
}
```
### Using `CreateCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCategory } from '@dataconnect/generated';


// Call the `createCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCategory();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCategory(dataConnect);

console.log(data.category_insert);

// Or, you can use the `Promise` API.
createCategory().then((response) => {
  const data = response.data;
  console.log(data.category_insert);
});
```

### Using `CreateCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCategoryRef } from '@dataconnect/generated';


// Call the `createCategoryRef()` function to get a reference to the mutation.
const ref = createCategoryRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCategoryRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.category_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.category_insert);
});
```

## UpdateCategory
You can execute the `UpdateCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateCategory(vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;

interface UpdateCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
}
export const updateCategoryRef: UpdateCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateCategory(dc: DataConnect, vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;

interface UpdateCategoryRef {
  ...
  (dc: DataConnect, vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
}
export const updateCategoryRef: UpdateCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateCategoryRef:
```typescript
const name = updateCategoryRef.operationName;
console.log(name);
```

### Variables
The `UpdateCategory` mutation requires an argument of type `UpdateCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateCategoryVariables {
  id: UUIDString;
  name?: string | null;
}
```
### Return Type
Recall that executing the `UpdateCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateCategoryData {
  category_update?: Category_Key | null;
}
```
### Using `UpdateCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateCategory, UpdateCategoryVariables } from '@dataconnect/generated';

// The `UpdateCategory` mutation requires an argument of type `UpdateCategoryVariables`:
const updateCategoryVars: UpdateCategoryVariables = {
  id: ..., 
  name: ..., // optional
};

// Call the `updateCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateCategory(updateCategoryVars);
// Variables can be defined inline as well.
const { data } = await updateCategory({ id: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateCategory(dataConnect, updateCategoryVars);

console.log(data.category_update);

// Or, you can use the `Promise` API.
updateCategory(updateCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.category_update);
});
```

### Using `UpdateCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateCategoryRef, UpdateCategoryVariables } from '@dataconnect/generated';

// The `UpdateCategory` mutation requires an argument of type `UpdateCategoryVariables`:
const updateCategoryVars: UpdateCategoryVariables = {
  id: ..., 
  name: ..., // optional
};

// Call the `updateCategoryRef()` function to get a reference to the mutation.
const ref = updateCategoryRef(updateCategoryVars);
// Variables can be defined inline as well.
const ref = updateCategoryRef({ id: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateCategoryRef(dataConnect, updateCategoryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.category_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.category_update);
});
```

## DeleteCategory
You can execute the `DeleteCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteCategory(vars: DeleteCategoryVariables): MutationPromise<DeleteCategoryData, DeleteCategoryVariables>;

interface DeleteCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteCategoryVariables): MutationRef<DeleteCategoryData, DeleteCategoryVariables>;
}
export const deleteCategoryRef: DeleteCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteCategory(dc: DataConnect, vars: DeleteCategoryVariables): MutationPromise<DeleteCategoryData, DeleteCategoryVariables>;

interface DeleteCategoryRef {
  ...
  (dc: DataConnect, vars: DeleteCategoryVariables): MutationRef<DeleteCategoryData, DeleteCategoryVariables>;
}
export const deleteCategoryRef: DeleteCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteCategoryRef:
```typescript
const name = deleteCategoryRef.operationName;
console.log(name);
```

### Variables
The `DeleteCategory` mutation requires an argument of type `DeleteCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteCategoryVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteCategoryData {
  category_delete?: Category_Key | null;
}
```
### Using `DeleteCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteCategory, DeleteCategoryVariables } from '@dataconnect/generated';

// The `DeleteCategory` mutation requires an argument of type `DeleteCategoryVariables`:
const deleteCategoryVars: DeleteCategoryVariables = {
  id: ..., 
};

// Call the `deleteCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteCategory(deleteCategoryVars);
// Variables can be defined inline as well.
const { data } = await deleteCategory({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteCategory(dataConnect, deleteCategoryVars);

console.log(data.category_delete);

// Or, you can use the `Promise` API.
deleteCategory(deleteCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.category_delete);
});
```

### Using `DeleteCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteCategoryRef, DeleteCategoryVariables } from '@dataconnect/generated';

// The `DeleteCategory` mutation requires an argument of type `DeleteCategoryVariables`:
const deleteCategoryVars: DeleteCategoryVariables = {
  id: ..., 
};

// Call the `deleteCategoryRef()` function to get a reference to the mutation.
const ref = deleteCategoryRef(deleteCategoryVars);
// Variables can be defined inline as well.
const ref = deleteCategoryRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteCategoryRef(dataConnect, deleteCategoryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.category_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.category_delete);
});
```

## CreateOrder
You can execute the `CreateOrder` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createOrder(vars: CreateOrderVariables): MutationPromise<CreateOrderData, CreateOrderVariables>;

interface CreateOrderRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateOrderVariables): MutationRef<CreateOrderData, CreateOrderVariables>;
}
export const createOrderRef: CreateOrderRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createOrder(dc: DataConnect, vars: CreateOrderVariables): MutationPromise<CreateOrderData, CreateOrderVariables>;

interface CreateOrderRef {
  ...
  (dc: DataConnect, vars: CreateOrderVariables): MutationRef<CreateOrderData, CreateOrderVariables>;
}
export const createOrderRef: CreateOrderRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createOrderRef:
```typescript
const name = createOrderRef.operationName;
console.log(name);
```

### Variables
The `CreateOrder` mutation requires an argument of type `CreateOrderVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateOrderVariables {
  total: number;
  status: string;
}
```
### Return Type
Recall that executing the `CreateOrder` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateOrderData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateOrderData {
  order_insert: Order_Key;
}
```
### Using `CreateOrder`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createOrder, CreateOrderVariables } from '@dataconnect/generated';

// The `CreateOrder` mutation requires an argument of type `CreateOrderVariables`:
const createOrderVars: CreateOrderVariables = {
  total: ..., 
  status: ..., 
};

// Call the `createOrder()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createOrder(createOrderVars);
// Variables can be defined inline as well.
const { data } = await createOrder({ total: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createOrder(dataConnect, createOrderVars);

console.log(data.order_insert);

// Or, you can use the `Promise` API.
createOrder(createOrderVars).then((response) => {
  const data = response.data;
  console.log(data.order_insert);
});
```

### Using `CreateOrder`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createOrderRef, CreateOrderVariables } from '@dataconnect/generated';

// The `CreateOrder` mutation requires an argument of type `CreateOrderVariables`:
const createOrderVars: CreateOrderVariables = {
  total: ..., 
  status: ..., 
};

// Call the `createOrderRef()` function to get a reference to the mutation.
const ref = createOrderRef(createOrderVars);
// Variables can be defined inline as well.
const ref = createOrderRef({ total: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createOrderRef(dataConnect, createOrderVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.order_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.order_insert);
});
```

## UpdateOrder
You can execute the `UpdateOrder` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateOrder(vars: UpdateOrderVariables): MutationPromise<UpdateOrderData, UpdateOrderVariables>;

interface UpdateOrderRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateOrderVariables): MutationRef<UpdateOrderData, UpdateOrderVariables>;
}
export const updateOrderRef: UpdateOrderRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateOrder(dc: DataConnect, vars: UpdateOrderVariables): MutationPromise<UpdateOrderData, UpdateOrderVariables>;

interface UpdateOrderRef {
  ...
  (dc: DataConnect, vars: UpdateOrderVariables): MutationRef<UpdateOrderData, UpdateOrderVariables>;
}
export const updateOrderRef: UpdateOrderRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateOrderRef:
```typescript
const name = updateOrderRef.operationName;
console.log(name);
```

### Variables
The `UpdateOrder` mutation requires an argument of type `UpdateOrderVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateOrderVariables {
  id: UUIDString;
  status?: string | null;
}
```
### Return Type
Recall that executing the `UpdateOrder` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateOrderData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateOrderData {
  order_update?: Order_Key | null;
}
```
### Using `UpdateOrder`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateOrder, UpdateOrderVariables } from '@dataconnect/generated';

// The `UpdateOrder` mutation requires an argument of type `UpdateOrderVariables`:
const updateOrderVars: UpdateOrderVariables = {
  id: ..., 
  status: ..., // optional
};

// Call the `updateOrder()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateOrder(updateOrderVars);
// Variables can be defined inline as well.
const { data } = await updateOrder({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateOrder(dataConnect, updateOrderVars);

console.log(data.order_update);

// Or, you can use the `Promise` API.
updateOrder(updateOrderVars).then((response) => {
  const data = response.data;
  console.log(data.order_update);
});
```

### Using `UpdateOrder`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateOrderRef, UpdateOrderVariables } from '@dataconnect/generated';

// The `UpdateOrder` mutation requires an argument of type `UpdateOrderVariables`:
const updateOrderVars: UpdateOrderVariables = {
  id: ..., 
  status: ..., // optional
};

// Call the `updateOrderRef()` function to get a reference to the mutation.
const ref = updateOrderRef(updateOrderVars);
// Variables can be defined inline as well.
const ref = updateOrderRef({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateOrderRef(dataConnect, updateOrderVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.order_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.order_update);
});
```

## DeleteOrder
You can execute the `DeleteOrder` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteOrder(vars: DeleteOrderVariables): MutationPromise<DeleteOrderData, DeleteOrderVariables>;

interface DeleteOrderRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteOrderVariables): MutationRef<DeleteOrderData, DeleteOrderVariables>;
}
export const deleteOrderRef: DeleteOrderRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteOrder(dc: DataConnect, vars: DeleteOrderVariables): MutationPromise<DeleteOrderData, DeleteOrderVariables>;

interface DeleteOrderRef {
  ...
  (dc: DataConnect, vars: DeleteOrderVariables): MutationRef<DeleteOrderData, DeleteOrderVariables>;
}
export const deleteOrderRef: DeleteOrderRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteOrderRef:
```typescript
const name = deleteOrderRef.operationName;
console.log(name);
```

### Variables
The `DeleteOrder` mutation requires an argument of type `DeleteOrderVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteOrderVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteOrder` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteOrderData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteOrderData {
  order_delete?: Order_Key | null;
}
```
### Using `DeleteOrder`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteOrder, DeleteOrderVariables } from '@dataconnect/generated';

// The `DeleteOrder` mutation requires an argument of type `DeleteOrderVariables`:
const deleteOrderVars: DeleteOrderVariables = {
  id: ..., 
};

// Call the `deleteOrder()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteOrder(deleteOrderVars);
// Variables can be defined inline as well.
const { data } = await deleteOrder({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteOrder(dataConnect, deleteOrderVars);

console.log(data.order_delete);

// Or, you can use the `Promise` API.
deleteOrder(deleteOrderVars).then((response) => {
  const data = response.data;
  console.log(data.order_delete);
});
```

### Using `DeleteOrder`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteOrderRef, DeleteOrderVariables } from '@dataconnect/generated';

// The `DeleteOrder` mutation requires an argument of type `DeleteOrderVariables`:
const deleteOrderVars: DeleteOrderVariables = {
  id: ..., 
};

// Call the `deleteOrderRef()` function to get a reference to the mutation.
const ref = deleteOrderRef(deleteOrderVars);
// Variables can be defined inline as well.
const ref = deleteOrderRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteOrderRef(dataConnect, deleteOrderVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.order_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.order_delete);
});
```

## CreateOrderItem
You can execute the `CreateOrderItem` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createOrderItem(vars: CreateOrderItemVariables): MutationPromise<CreateOrderItemData, CreateOrderItemVariables>;

interface CreateOrderItemRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateOrderItemVariables): MutationRef<CreateOrderItemData, CreateOrderItemVariables>;
}
export const createOrderItemRef: CreateOrderItemRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createOrderItem(dc: DataConnect, vars: CreateOrderItemVariables): MutationPromise<CreateOrderItemData, CreateOrderItemVariables>;

interface CreateOrderItemRef {
  ...
  (dc: DataConnect, vars: CreateOrderItemVariables): MutationRef<CreateOrderItemData, CreateOrderItemVariables>;
}
export const createOrderItemRef: CreateOrderItemRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createOrderItemRef:
```typescript
const name = createOrderItemRef.operationName;
console.log(name);
```

### Variables
The `CreateOrderItem` mutation requires an argument of type `CreateOrderItemVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateOrderItemVariables {
  qty: number;
  price: number;
  orderId: UUIDString;
  productId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateOrderItem` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateOrderItemData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateOrderItemData {
  orderItem_insert: OrderItem_Key;
}
```
### Using `CreateOrderItem`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createOrderItem, CreateOrderItemVariables } from '@dataconnect/generated';

// The `CreateOrderItem` mutation requires an argument of type `CreateOrderItemVariables`:
const createOrderItemVars: CreateOrderItemVariables = {
  qty: ..., 
  price: ..., 
  orderId: ..., 
  productId: ..., 
};

// Call the `createOrderItem()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createOrderItem(createOrderItemVars);
// Variables can be defined inline as well.
const { data } = await createOrderItem({ qty: ..., price: ..., orderId: ..., productId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createOrderItem(dataConnect, createOrderItemVars);

console.log(data.orderItem_insert);

// Or, you can use the `Promise` API.
createOrderItem(createOrderItemVars).then((response) => {
  const data = response.data;
  console.log(data.orderItem_insert);
});
```

### Using `CreateOrderItem`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createOrderItemRef, CreateOrderItemVariables } from '@dataconnect/generated';

// The `CreateOrderItem` mutation requires an argument of type `CreateOrderItemVariables`:
const createOrderItemVars: CreateOrderItemVariables = {
  qty: ..., 
  price: ..., 
  orderId: ..., 
  productId: ..., 
};

// Call the `createOrderItemRef()` function to get a reference to the mutation.
const ref = createOrderItemRef(createOrderItemVars);
// Variables can be defined inline as well.
const ref = createOrderItemRef({ qty: ..., price: ..., orderId: ..., productId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createOrderItemRef(dataConnect, createOrderItemVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.orderItem_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.orderItem_insert);
});
```

## UpdateOrderItem
You can execute the `UpdateOrderItem` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateOrderItem(vars: UpdateOrderItemVariables): MutationPromise<UpdateOrderItemData, UpdateOrderItemVariables>;

interface UpdateOrderItemRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateOrderItemVariables): MutationRef<UpdateOrderItemData, UpdateOrderItemVariables>;
}
export const updateOrderItemRef: UpdateOrderItemRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateOrderItem(dc: DataConnect, vars: UpdateOrderItemVariables): MutationPromise<UpdateOrderItemData, UpdateOrderItemVariables>;

interface UpdateOrderItemRef {
  ...
  (dc: DataConnect, vars: UpdateOrderItemVariables): MutationRef<UpdateOrderItemData, UpdateOrderItemVariables>;
}
export const updateOrderItemRef: UpdateOrderItemRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateOrderItemRef:
```typescript
const name = updateOrderItemRef.operationName;
console.log(name);
```

### Variables
The `UpdateOrderItem` mutation requires an argument of type `UpdateOrderItemVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateOrderItemVariables {
  id: UUIDString;
  qty?: number | null;
}
```
### Return Type
Recall that executing the `UpdateOrderItem` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateOrderItemData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateOrderItemData {
  orderItem_update?: OrderItem_Key | null;
}
```
### Using `UpdateOrderItem`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateOrderItem, UpdateOrderItemVariables } from '@dataconnect/generated';

// The `UpdateOrderItem` mutation requires an argument of type `UpdateOrderItemVariables`:
const updateOrderItemVars: UpdateOrderItemVariables = {
  id: ..., 
  qty: ..., // optional
};

// Call the `updateOrderItem()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateOrderItem(updateOrderItemVars);
// Variables can be defined inline as well.
const { data } = await updateOrderItem({ id: ..., qty: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateOrderItem(dataConnect, updateOrderItemVars);

console.log(data.orderItem_update);

// Or, you can use the `Promise` API.
updateOrderItem(updateOrderItemVars).then((response) => {
  const data = response.data;
  console.log(data.orderItem_update);
});
```

### Using `UpdateOrderItem`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateOrderItemRef, UpdateOrderItemVariables } from '@dataconnect/generated';

// The `UpdateOrderItem` mutation requires an argument of type `UpdateOrderItemVariables`:
const updateOrderItemVars: UpdateOrderItemVariables = {
  id: ..., 
  qty: ..., // optional
};

// Call the `updateOrderItemRef()` function to get a reference to the mutation.
const ref = updateOrderItemRef(updateOrderItemVars);
// Variables can be defined inline as well.
const ref = updateOrderItemRef({ id: ..., qty: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateOrderItemRef(dataConnect, updateOrderItemVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.orderItem_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.orderItem_update);
});
```

## DeleteOrderItem
You can execute the `DeleteOrderItem` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteOrderItem(vars: DeleteOrderItemVariables): MutationPromise<DeleteOrderItemData, DeleteOrderItemVariables>;

interface DeleteOrderItemRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteOrderItemVariables): MutationRef<DeleteOrderItemData, DeleteOrderItemVariables>;
}
export const deleteOrderItemRef: DeleteOrderItemRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteOrderItem(dc: DataConnect, vars: DeleteOrderItemVariables): MutationPromise<DeleteOrderItemData, DeleteOrderItemVariables>;

interface DeleteOrderItemRef {
  ...
  (dc: DataConnect, vars: DeleteOrderItemVariables): MutationRef<DeleteOrderItemData, DeleteOrderItemVariables>;
}
export const deleteOrderItemRef: DeleteOrderItemRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteOrderItemRef:
```typescript
const name = deleteOrderItemRef.operationName;
console.log(name);
```

### Variables
The `DeleteOrderItem` mutation requires an argument of type `DeleteOrderItemVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteOrderItemVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteOrderItem` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteOrderItemData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteOrderItemData {
  orderItem_delete?: OrderItem_Key | null;
}
```
### Using `DeleteOrderItem`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteOrderItem, DeleteOrderItemVariables } from '@dataconnect/generated';

// The `DeleteOrderItem` mutation requires an argument of type `DeleteOrderItemVariables`:
const deleteOrderItemVars: DeleteOrderItemVariables = {
  id: ..., 
};

// Call the `deleteOrderItem()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteOrderItem(deleteOrderItemVars);
// Variables can be defined inline as well.
const { data } = await deleteOrderItem({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteOrderItem(dataConnect, deleteOrderItemVars);

console.log(data.orderItem_delete);

// Or, you can use the `Promise` API.
deleteOrderItem(deleteOrderItemVars).then((response) => {
  const data = response.data;
  console.log(data.orderItem_delete);
});
```

### Using `DeleteOrderItem`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteOrderItemRef, DeleteOrderItemVariables } from '@dataconnect/generated';

// The `DeleteOrderItem` mutation requires an argument of type `DeleteOrderItemVariables`:
const deleteOrderItemVars: DeleteOrderItemVariables = {
  id: ..., 
};

// Call the `deleteOrderItemRef()` function to get a reference to the mutation.
const ref = deleteOrderItemRef(deleteOrderItemVars);
// Variables can be defined inline as well.
const ref = deleteOrderItemRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteOrderItemRef(dataConnect, deleteOrderItemVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.orderItem_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.orderItem_delete);
});
```

## CreateProduct
You can execute the `CreateProduct` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createProduct(vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface CreateProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
}
export const createProductRef: CreateProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createProduct(dc: DataConnect, vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface CreateProductRef {
  ...
  (dc: DataConnect, vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
}
export const createProductRef: CreateProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createProductRef:
```typescript
const name = createProductRef.operationName;
console.log(name);
```

### Variables
The `CreateProduct` mutation requires an argument of type `CreateProductVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateProductVariables {
  name: string;
  price: number;
  stock: number;
}
```
### Return Type
Recall that executing the `CreateProduct` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateProductData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateProductData {
  product_insert: Product_Key;
}
```
### Using `CreateProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createProduct, CreateProductVariables } from '@dataconnect/generated';

// The `CreateProduct` mutation requires an argument of type `CreateProductVariables`:
const createProductVars: CreateProductVariables = {
  name: ..., 
  price: ..., 
  stock: ..., 
};

// Call the `createProduct()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createProduct(createProductVars);
// Variables can be defined inline as well.
const { data } = await createProduct({ name: ..., price: ..., stock: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createProduct(dataConnect, createProductVars);

console.log(data.product_insert);

// Or, you can use the `Promise` API.
createProduct(createProductVars).then((response) => {
  const data = response.data;
  console.log(data.product_insert);
});
```

### Using `CreateProduct`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createProductRef, CreateProductVariables } from '@dataconnect/generated';

// The `CreateProduct` mutation requires an argument of type `CreateProductVariables`:
const createProductVars: CreateProductVariables = {
  name: ..., 
  price: ..., 
  stock: ..., 
};

// Call the `createProductRef()` function to get a reference to the mutation.
const ref = createProductRef(createProductVars);
// Variables can be defined inline as well.
const ref = createProductRef({ name: ..., price: ..., stock: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createProductRef(dataConnect, createProductVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_insert);
});
```

## UpdateProduct
You can execute the `UpdateProduct` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateProduct(vars: UpdateProductVariables): MutationPromise<UpdateProductData, UpdateProductVariables>;

interface UpdateProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProductVariables): MutationRef<UpdateProductData, UpdateProductVariables>;
}
export const updateProductRef: UpdateProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateProduct(dc: DataConnect, vars: UpdateProductVariables): MutationPromise<UpdateProductData, UpdateProductVariables>;

interface UpdateProductRef {
  ...
  (dc: DataConnect, vars: UpdateProductVariables): MutationRef<UpdateProductData, UpdateProductVariables>;
}
export const updateProductRef: UpdateProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateProductRef:
```typescript
const name = updateProductRef.operationName;
console.log(name);
```

### Variables
The `UpdateProduct` mutation requires an argument of type `UpdateProductVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateProductVariables {
  id: UUIDString;
  price?: number | null;
}
```
### Return Type
Recall that executing the `UpdateProduct` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateProductData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateProductData {
  product_update?: Product_Key | null;
}
```
### Using `UpdateProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateProduct, UpdateProductVariables } from '@dataconnect/generated';

// The `UpdateProduct` mutation requires an argument of type `UpdateProductVariables`:
const updateProductVars: UpdateProductVariables = {
  id: ..., 
  price: ..., // optional
};

// Call the `updateProduct()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateProduct(updateProductVars);
// Variables can be defined inline as well.
const { data } = await updateProduct({ id: ..., price: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateProduct(dataConnect, updateProductVars);

console.log(data.product_update);

// Or, you can use the `Promise` API.
updateProduct(updateProductVars).then((response) => {
  const data = response.data;
  console.log(data.product_update);
});
```

### Using `UpdateProduct`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateProductRef, UpdateProductVariables } from '@dataconnect/generated';

// The `UpdateProduct` mutation requires an argument of type `UpdateProductVariables`:
const updateProductVars: UpdateProductVariables = {
  id: ..., 
  price: ..., // optional
};

// Call the `updateProductRef()` function to get a reference to the mutation.
const ref = updateProductRef(updateProductVars);
// Variables can be defined inline as well.
const ref = updateProductRef({ id: ..., price: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateProductRef(dataConnect, updateProductVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_update);
});
```

## DeleteProduct
You can execute the `DeleteProduct` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteProduct(vars: DeleteProductVariables): MutationPromise<DeleteProductData, DeleteProductVariables>;

interface DeleteProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProductVariables): MutationRef<DeleteProductData, DeleteProductVariables>;
}
export const deleteProductRef: DeleteProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteProduct(dc: DataConnect, vars: DeleteProductVariables): MutationPromise<DeleteProductData, DeleteProductVariables>;

interface DeleteProductRef {
  ...
  (dc: DataConnect, vars: DeleteProductVariables): MutationRef<DeleteProductData, DeleteProductVariables>;
}
export const deleteProductRef: DeleteProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteProductRef:
```typescript
const name = deleteProductRef.operationName;
console.log(name);
```

### Variables
The `DeleteProduct` mutation requires an argument of type `DeleteProductVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteProductVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteProduct` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteProductData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteProductData {
  product_delete?: Product_Key | null;
}
```
### Using `DeleteProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteProduct, DeleteProductVariables } from '@dataconnect/generated';

// The `DeleteProduct` mutation requires an argument of type `DeleteProductVariables`:
const deleteProductVars: DeleteProductVariables = {
  id: ..., 
};

// Call the `deleteProduct()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteProduct(deleteProductVars);
// Variables can be defined inline as well.
const { data } = await deleteProduct({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteProduct(dataConnect, deleteProductVars);

console.log(data.product_delete);

// Or, you can use the `Promise` API.
deleteProduct(deleteProductVars).then((response) => {
  const data = response.data;
  console.log(data.product_delete);
});
```

### Using `DeleteProduct`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteProductRef, DeleteProductVariables } from '@dataconnect/generated';

// The `DeleteProduct` mutation requires an argument of type `DeleteProductVariables`:
const deleteProductVars: DeleteProductVariables = {
  id: ..., 
};

// Call the `deleteProductRef()` function to get a reference to the mutation.
const ref = deleteProductRef(deleteProductVars);
// Variables can be defined inline as well.
const ref = deleteProductRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteProductRef(dataConnect, deleteProductVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_delete);
});
```

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  email: string;
  name: string;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  email: ..., 
  name: ..., 
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ email: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  email: ..., 
  name: ..., 
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ email: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect, vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  (dc: DataConnect, vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation has an optional argument of type `UpdateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserVariables {
  name?: string | null;
}
```
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation has an optional argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  name: ..., // optional
};

// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser(updateUserVars);
// Variables can be defined inline as well.
const { data } = await updateUser({ name: ..., });
// Since all variables are optional for this mutation, you can omit the `UpdateUserVariables` argument.
const { data } = await updateUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect, updateUserVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser(updateUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation has an optional argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  name: ..., // optional
};

// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef(updateUserVars);
// Variables can be defined inline as well.
const ref = updateUserRef({ name: ..., });
// Since all variables are optional for this mutation, you can omit the `UpdateUserVariables` argument.
const ref = updateUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect, updateUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUser(): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation has no variables.
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser } from '@dataconnect/generated';


// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser().then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef } from '@dataconnect/generated';


// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## CreateUserPreference
You can execute the `CreateUserPreference` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUserPreference(vars: CreateUserPreferenceVariables): MutationPromise<CreateUserPreferenceData, CreateUserPreferenceVariables>;

interface CreateUserPreferenceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserPreferenceVariables): MutationRef<CreateUserPreferenceData, CreateUserPreferenceVariables>;
}
export const createUserPreferenceRef: CreateUserPreferenceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUserPreference(dc: DataConnect, vars: CreateUserPreferenceVariables): MutationPromise<CreateUserPreferenceData, CreateUserPreferenceVariables>;

interface CreateUserPreferenceRef {
  ...
  (dc: DataConnect, vars: CreateUserPreferenceVariables): MutationRef<CreateUserPreferenceData, CreateUserPreferenceVariables>;
}
export const createUserPreferenceRef: CreateUserPreferenceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserPreferenceRef:
```typescript
const name = createUserPreferenceRef.operationName;
console.log(name);
```

### Variables
The `CreateUserPreference` mutation requires an argument of type `CreateUserPreferenceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserPreferenceVariables {
  catId: UUIDString;
  score?: number | null;
}
```
### Return Type
Recall that executing the `CreateUserPreference` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserPreferenceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserPreferenceData {
  userPreference_insert: UserPreference_Key;
}
```
### Using `CreateUserPreference`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUserPreference, CreateUserPreferenceVariables } from '@dataconnect/generated';

// The `CreateUserPreference` mutation requires an argument of type `CreateUserPreferenceVariables`:
const createUserPreferenceVars: CreateUserPreferenceVariables = {
  catId: ..., 
  score: ..., // optional
};

// Call the `createUserPreference()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUserPreference(createUserPreferenceVars);
// Variables can be defined inline as well.
const { data } = await createUserPreference({ catId: ..., score: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUserPreference(dataConnect, createUserPreferenceVars);

console.log(data.userPreference_insert);

// Or, you can use the `Promise` API.
createUserPreference(createUserPreferenceVars).then((response) => {
  const data = response.data;
  console.log(data.userPreference_insert);
});
```

### Using `CreateUserPreference`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserPreferenceRef, CreateUserPreferenceVariables } from '@dataconnect/generated';

// The `CreateUserPreference` mutation requires an argument of type `CreateUserPreferenceVariables`:
const createUserPreferenceVars: CreateUserPreferenceVariables = {
  catId: ..., 
  score: ..., // optional
};

// Call the `createUserPreferenceRef()` function to get a reference to the mutation.
const ref = createUserPreferenceRef(createUserPreferenceVars);
// Variables can be defined inline as well.
const ref = createUserPreferenceRef({ catId: ..., score: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserPreferenceRef(dataConnect, createUserPreferenceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userPreference_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userPreference_insert);
});
```

## UpdateUserPreference
You can execute the `UpdateUserPreference` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUserPreference(vars: UpdateUserPreferenceVariables): MutationPromise<UpdateUserPreferenceData, UpdateUserPreferenceVariables>;

interface UpdateUserPreferenceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserPreferenceVariables): MutationRef<UpdateUserPreferenceData, UpdateUserPreferenceVariables>;
}
export const updateUserPreferenceRef: UpdateUserPreferenceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUserPreference(dc: DataConnect, vars: UpdateUserPreferenceVariables): MutationPromise<UpdateUserPreferenceData, UpdateUserPreferenceVariables>;

interface UpdateUserPreferenceRef {
  ...
  (dc: DataConnect, vars: UpdateUserPreferenceVariables): MutationRef<UpdateUserPreferenceData, UpdateUserPreferenceVariables>;
}
export const updateUserPreferenceRef: UpdateUserPreferenceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserPreferenceRef:
```typescript
const name = updateUserPreferenceRef.operationName;
console.log(name);
```

### Variables
The `UpdateUserPreference` mutation requires an argument of type `UpdateUserPreferenceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserPreferenceVariables {
  id: UUIDString;
  score?: number | null;
}
```
### Return Type
Recall that executing the `UpdateUserPreference` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserPreferenceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserPreferenceData {
  userPreference_update?: UserPreference_Key | null;
}
```
### Using `UpdateUserPreference`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUserPreference, UpdateUserPreferenceVariables } from '@dataconnect/generated';

// The `UpdateUserPreference` mutation requires an argument of type `UpdateUserPreferenceVariables`:
const updateUserPreferenceVars: UpdateUserPreferenceVariables = {
  id: ..., 
  score: ..., // optional
};

// Call the `updateUserPreference()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUserPreference(updateUserPreferenceVars);
// Variables can be defined inline as well.
const { data } = await updateUserPreference({ id: ..., score: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUserPreference(dataConnect, updateUserPreferenceVars);

console.log(data.userPreference_update);

// Or, you can use the `Promise` API.
updateUserPreference(updateUserPreferenceVars).then((response) => {
  const data = response.data;
  console.log(data.userPreference_update);
});
```

### Using `UpdateUserPreference`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserPreferenceRef, UpdateUserPreferenceVariables } from '@dataconnect/generated';

// The `UpdateUserPreference` mutation requires an argument of type `UpdateUserPreferenceVariables`:
const updateUserPreferenceVars: UpdateUserPreferenceVariables = {
  id: ..., 
  score: ..., // optional
};

// Call the `updateUserPreferenceRef()` function to get a reference to the mutation.
const ref = updateUserPreferenceRef(updateUserPreferenceVars);
// Variables can be defined inline as well.
const ref = updateUserPreferenceRef({ id: ..., score: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserPreferenceRef(dataConnect, updateUserPreferenceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userPreference_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userPreference_update);
});
```

## DeleteUserPreference
You can execute the `DeleteUserPreference` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUserPreference(vars: DeleteUserPreferenceVariables): MutationPromise<DeleteUserPreferenceData, DeleteUserPreferenceVariables>;

interface DeleteUserPreferenceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserPreferenceVariables): MutationRef<DeleteUserPreferenceData, DeleteUserPreferenceVariables>;
}
export const deleteUserPreferenceRef: DeleteUserPreferenceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUserPreference(dc: DataConnect, vars: DeleteUserPreferenceVariables): MutationPromise<DeleteUserPreferenceData, DeleteUserPreferenceVariables>;

interface DeleteUserPreferenceRef {
  ...
  (dc: DataConnect, vars: DeleteUserPreferenceVariables): MutationRef<DeleteUserPreferenceData, DeleteUserPreferenceVariables>;
}
export const deleteUserPreferenceRef: DeleteUserPreferenceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserPreferenceRef:
```typescript
const name = deleteUserPreferenceRef.operationName;
console.log(name);
```

### Variables
The `DeleteUserPreference` mutation requires an argument of type `DeleteUserPreferenceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteUserPreferenceVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteUserPreference` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserPreferenceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserPreferenceData {
  userPreference_delete?: UserPreference_Key | null;
}
```
### Using `DeleteUserPreference`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUserPreference, DeleteUserPreferenceVariables } from '@dataconnect/generated';

// The `DeleteUserPreference` mutation requires an argument of type `DeleteUserPreferenceVariables`:
const deleteUserPreferenceVars: DeleteUserPreferenceVariables = {
  id: ..., 
};

// Call the `deleteUserPreference()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUserPreference(deleteUserPreferenceVars);
// Variables can be defined inline as well.
const { data } = await deleteUserPreference({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUserPreference(dataConnect, deleteUserPreferenceVars);

console.log(data.userPreference_delete);

// Or, you can use the `Promise` API.
deleteUserPreference(deleteUserPreferenceVars).then((response) => {
  const data = response.data;
  console.log(data.userPreference_delete);
});
```

### Using `DeleteUserPreference`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserPreferenceRef, DeleteUserPreferenceVariables } from '@dataconnect/generated';

// The `DeleteUserPreference` mutation requires an argument of type `DeleteUserPreferenceVariables`:
const deleteUserPreferenceVars: DeleteUserPreferenceVariables = {
  id: ..., 
};

// Call the `deleteUserPreferenceRef()` function to get a reference to the mutation.
const ref = deleteUserPreferenceRef(deleteUserPreferenceVars);
// Variables can be defined inline as well.
const ref = deleteUserPreferenceRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserPreferenceRef(dataConnect, deleteUserPreferenceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userPreference_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userPreference_delete);
});
```

