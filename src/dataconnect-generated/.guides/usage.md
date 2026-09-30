# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createCategory, updateCategory, deleteCategory, getCategory, listCategories, createOrder, updateOrder, deleteOrder, getOrder, listMyOrders } from '@dataconnect/generated';


// Operation CreateCategory: 
const { data } = await CreateCategory(dataConnect);

// Operation UpdateCategory:  For variables, look at type UpdateCategoryVars in ../index.d.ts
const { data } = await UpdateCategory(dataConnect, updateCategoryVars);

// Operation DeleteCategory:  For variables, look at type DeleteCategoryVars in ../index.d.ts
const { data } = await DeleteCategory(dataConnect, deleteCategoryVars);

// Operation GetCategory:  For variables, look at type GetCategoryVars in ../index.d.ts
const { data } = await GetCategory(dataConnect, getCategoryVars);

// Operation ListCategories: 
const { data } = await ListCategories(dataConnect);

// Operation CreateOrder:  For variables, look at type CreateOrderVars in ../index.d.ts
const { data } = await CreateOrder(dataConnect, createOrderVars);

// Operation UpdateOrder:  For variables, look at type UpdateOrderVars in ../index.d.ts
const { data } = await UpdateOrder(dataConnect, updateOrderVars);

// Operation DeleteOrder:  For variables, look at type DeleteOrderVars in ../index.d.ts
const { data } = await DeleteOrder(dataConnect, deleteOrderVars);

// Operation GetOrder:  For variables, look at type GetOrderVars in ../index.d.ts
const { data } = await GetOrder(dataConnect, getOrderVars);

// Operation ListMyOrders: 
const { data } = await ListMyOrders(dataConnect);


```