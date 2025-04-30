
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductWholesaler
 * 
 */
export type ProductWholesaler = $Result.DefaultSelection<Prisma.$ProductWholesalerPayload>
/**
 * Model ProductPrice
 * 
 */
export type ProductPrice = $Result.DefaultSelection<Prisma.$ProductPricePayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderDetail
 * 
 */
export type OrderDetail = $Result.DefaultSelection<Prisma.$OrderDetailPayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>
/**
 * Model DeliveryPlace
 * 
 */
export type DeliveryPlace = $Result.DefaultSelection<Prisma.$DeliveryPlacePayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model ShopSetting
 * 
 */
export type ShopSetting = $Result.DefaultSelection<Prisma.$ShopSettingPayload>
/**
 * Model SalesChannel
 * 
 */
export type SalesChannel = $Result.DefaultSelection<Prisma.$SalesChannelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Roles: {
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

export type Roles = (typeof Roles)[keyof typeof Roles]


export const PaymentStatus: {
  settlement: 'settlement',
  pending: 'pending',
  cancel: 'cancel',
  installments: 'installments'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const ProductTypes: {
  BARANG_STOK_SENDIRI: 'BARANG_STOK_SENDIRI',
  BARANG_SUPPLIER_LAIN: 'BARANG_SUPPLIER_LAIN',
  BARANG_PRE_ORDER: 'BARANG_PRE_ORDER'
};

export type ProductTypes = (typeof ProductTypes)[keyof typeof ProductTypes]


export const CustomerCategories: {
  CUSTOMER: 'CUSTOMER',
  RESELLER: 'RESELLER',
  DROPSHIPPER: 'DROPSHIPPER',
  MEMBER: 'MEMBER',
  AGENT: 'AGENT'
};

export type CustomerCategories = (typeof CustomerCategories)[keyof typeof CustomerCategories]


export const CustomerStatuses: {
  ACTIVE: 'ACTIVE',
  NONACTIVE: 'NONACTIVE'
};

export type CustomerStatuses = (typeof CustomerStatuses)[keyof typeof CustomerStatuses]

}

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type ProductTypes = $Enums.ProductTypes

export const ProductTypes: typeof $Enums.ProductTypes

export type CustomerCategories = $Enums.CustomerCategories

export const CustomerCategories: typeof $Enums.CustomerCategories

export type CustomerStatuses = $Enums.CustomerStatuses

export const CustomerStatuses: typeof $Enums.CustomerStatuses

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productWholesaler`: Exposes CRUD operations for the **ProductWholesaler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductWholesalers
    * const productWholesalers = await prisma.productWholesaler.findMany()
    * ```
    */
  get productWholesaler(): Prisma.ProductWholesalerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productPrice`: Exposes CRUD operations for the **ProductPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPrices
    * const productPrices = await prisma.productPrice.findMany()
    * ```
    */
  get productPrice(): Prisma.ProductPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderDetail`: Exposes CRUD operations for the **OrderDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetail.findMany()
    * ```
    */
  get orderDetail(): Prisma.OrderDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryPlace`: Exposes CRUD operations for the **DeliveryPlace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryPlaces
    * const deliveryPlaces = await prisma.deliveryPlace.findMany()
    * ```
    */
  get deliveryPlace(): Prisma.DeliveryPlaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopSetting`: Exposes CRUD operations for the **ShopSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopSettings
    * const shopSettings = await prisma.shopSetting.findMany()
    * ```
    */
  get shopSetting(): Prisma.ShopSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesChannel`: Exposes CRUD operations for the **SalesChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesChannels
    * const salesChannels = await prisma.salesChannel.findMany()
    * ```
    */
  get salesChannel(): Prisma.SalesChannelDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Category: 'Category',
    Product: 'Product',
    ProductWholesaler: 'ProductWholesaler',
    ProductPrice: 'ProductPrice',
    ProductVariant: 'ProductVariant',
    Customer: 'Customer',
    Order: 'Order',
    OrderDetail: 'OrderDetail',
    PaymentMethod: 'PaymentMethod',
    DeliveryPlace: 'DeliveryPlace',
    Expense: 'Expense',
    ShopSetting: 'ShopSetting',
    SalesChannel: 'SalesChannel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "category" | "product" | "productWholesaler" | "productPrice" | "productVariant" | "customer" | "order" | "orderDetail" | "paymentMethod" | "deliveryPlace" | "expense" | "shopSetting" | "salesChannel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductWholesaler: {
        payload: Prisma.$ProductWholesalerPayload<ExtArgs>
        fields: Prisma.ProductWholesalerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductWholesalerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductWholesalerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductWholesalerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductWholesalerPayload>
          }
          findFirst: {
            args: Prisma.ProductWholesalerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductWholesalerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductWholesalerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductWholesalerPayload>
          }
          findMany: {
            args: Prisma.ProductWholesalerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductWholesalerPayload>[]
          }
          create: {
            args: Prisma.ProductWholesalerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductWholesalerPayload>
          }
          createMany: {
            args: Prisma.ProductWholesalerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductWholesalerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductWholesalerPayload>[]
          }
          delete: {
            args: Prisma.ProductWholesalerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductWholesalerPayload>
          }
          update: {
            args: Prisma.ProductWholesalerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductWholesalerPayload>
          }
          deleteMany: {
            args: Prisma.ProductWholesalerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductWholesalerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductWholesalerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductWholesalerPayload>[]
          }
          upsert: {
            args: Prisma.ProductWholesalerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductWholesalerPayload>
          }
          aggregate: {
            args: Prisma.ProductWholesalerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductWholesaler>
          }
          groupBy: {
            args: Prisma.ProductWholesalerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductWholesalerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductWholesalerCountArgs<ExtArgs>
            result: $Utils.Optional<ProductWholesalerCountAggregateOutputType> | number
          }
        }
      }
      ProductPrice: {
        payload: Prisma.$ProductPricePayload<ExtArgs>
        fields: Prisma.ProductPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          findFirst: {
            args: Prisma.ProductPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          findMany: {
            args: Prisma.ProductPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>[]
          }
          create: {
            args: Prisma.ProductPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          createMany: {
            args: Prisma.ProductPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>[]
          }
          delete: {
            args: Prisma.ProductPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          update: {
            args: Prisma.ProductPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          deleteMany: {
            args: Prisma.ProductPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>[]
          }
          upsert: {
            args: Prisma.ProductPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          aggregate: {
            args: Prisma.ProductPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPrice>
          }
          groupBy: {
            args: Prisma.ProductPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPriceCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderDetail: {
        payload: Prisma.$OrderDetailPayload<ExtArgs>
        fields: Prisma.OrderDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          findMany: {
            args: Prisma.OrderDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[]
          }
          create: {
            args: Prisma.OrderDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          createMany: {
            args: Prisma.OrderDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[]
          }
          delete: {
            args: Prisma.OrderDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          update: {
            args: Prisma.OrderDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[]
          }
          upsert: {
            args: Prisma.OrderDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderDetail>
          }
          groupBy: {
            args: Prisma.OrderDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailCountArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentMethodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
      DeliveryPlace: {
        payload: Prisma.$DeliveryPlacePayload<ExtArgs>
        fields: Prisma.DeliveryPlaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryPlaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryPlaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlacePayload>
          }
          findFirst: {
            args: Prisma.DeliveryPlaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryPlaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlacePayload>
          }
          findMany: {
            args: Prisma.DeliveryPlaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlacePayload>[]
          }
          create: {
            args: Prisma.DeliveryPlaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlacePayload>
          }
          createMany: {
            args: Prisma.DeliveryPlaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryPlaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlacePayload>[]
          }
          delete: {
            args: Prisma.DeliveryPlaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlacePayload>
          }
          update: {
            args: Prisma.DeliveryPlaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlacePayload>
          }
          deleteMany: {
            args: Prisma.DeliveryPlaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryPlaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryPlaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlacePayload>[]
          }
          upsert: {
            args: Prisma.DeliveryPlaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPlacePayload>
          }
          aggregate: {
            args: Prisma.DeliveryPlaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryPlace>
          }
          groupBy: {
            args: Prisma.DeliveryPlaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryPlaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryPlaceCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryPlaceCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      ShopSetting: {
        payload: Prisma.$ShopSettingPayload<ExtArgs>
        fields: Prisma.ShopSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopSettingPayload>
          }
          findFirst: {
            args: Prisma.ShopSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopSettingPayload>
          }
          findMany: {
            args: Prisma.ShopSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopSettingPayload>[]
          }
          create: {
            args: Prisma.ShopSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopSettingPayload>
          }
          createMany: {
            args: Prisma.ShopSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopSettingPayload>[]
          }
          delete: {
            args: Prisma.ShopSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopSettingPayload>
          }
          update: {
            args: Prisma.ShopSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopSettingPayload>
          }
          deleteMany: {
            args: Prisma.ShopSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopSettingPayload>[]
          }
          upsert: {
            args: Prisma.ShopSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopSettingPayload>
          }
          aggregate: {
            args: Prisma.ShopSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopSetting>
          }
          groupBy: {
            args: Prisma.ShopSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopSettingCountArgs<ExtArgs>
            result: $Utils.Optional<ShopSettingCountAggregateOutputType> | number
          }
        }
      }
      SalesChannel: {
        payload: Prisma.$SalesChannelPayload<ExtArgs>
        fields: Prisma.SalesChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesChannelPayload>
          }
          findFirst: {
            args: Prisma.SalesChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesChannelPayload>
          }
          findMany: {
            args: Prisma.SalesChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesChannelPayload>[]
          }
          create: {
            args: Prisma.SalesChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesChannelPayload>
          }
          createMany: {
            args: Prisma.SalesChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesChannelPayload>[]
          }
          delete: {
            args: Prisma.SalesChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesChannelPayload>
          }
          update: {
            args: Prisma.SalesChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesChannelPayload>
          }
          deleteMany: {
            args: Prisma.SalesChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesChannelPayload>[]
          }
          upsert: {
            args: Prisma.SalesChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesChannelPayload>
          }
          aggregate: {
            args: Prisma.SalesChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesChannel>
          }
          groupBy: {
            args: Prisma.SalesChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesChannelCountArgs<ExtArgs>
            result: $Utils.Optional<SalesChannelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    category?: CategoryOmit
    product?: ProductOmit
    productWholesaler?: ProductWholesalerOmit
    productPrice?: ProductPriceOmit
    productVariant?: ProductVariantOmit
    customer?: CustomerOmit
    order?: OrderOmit
    orderDetail?: OrderDetailOmit
    paymentMethod?: PaymentMethodOmit
    deliveryPlace?: DeliveryPlaceOmit
    expense?: ExpenseOmit
    shopSetting?: ShopSettingOmit
    salesChannel?: SalesChannelOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    productVariants: number
    orderDetails: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariants?: boolean | ProductCountOutputTypeCountProductVariantsArgs
    orderDetails?: boolean | ProductCountOutputTypeCountOrderDetailsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailWhereInput
  }


  /**
   * Count Type ProductVariantCountOutputType
   */

  export type ProductVariantCountOutputType = {
    productPrices: number
    ProductWholesaler: number
  }

  export type ProductVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productPrices?: boolean | ProductVariantCountOutputTypeCountProductPricesArgs
    ProductWholesaler?: boolean | ProductVariantCountOutputTypeCountProductWholesalerArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantCountOutputType
     */
    select?: ProductVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountProductPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceWhereInput
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountProductWholesalerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWholesalerWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    ordersAsOrderer: number
    ordersAsDeliveryTarget: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordersAsOrderer?: boolean | CustomerCountOutputTypeCountOrdersAsOrdererArgs
    ordersAsDeliveryTarget?: boolean | CustomerCountOutputTypeCountOrdersAsDeliveryTargetArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersAsOrdererArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersAsDeliveryTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type PaymentMethodCountOutputType
   */

  export type PaymentMethodCountOutputType = {
    orderDetails: number
  }

  export type PaymentMethodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | PaymentMethodCountOutputTypeCountOrderDetailsArgs
  }

  // Custom InputTypes
  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodCountOutputType
     */
    select?: PaymentMethodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountOrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    password: string | null
    role: $Enums.Roles | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    password: string | null
    role: $Enums.Roles | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullname: string | null
    email: string | null
    password: string | null
    role: $Enums.Roles | null
    createdAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullname: string | null
      email: string | null
      password: string | null
      role: $Enums.Roles | null
      createdAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Roles'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data?: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    weight: number | null
  }

  export type ProductSumAggregateOutputType = {
    weight: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    type: $Enums.ProductTypes | null
    description: string | null
    weight: number | null
    isPublish: boolean | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    type: $Enums.ProductTypes | null
    description: string | null
    weight: number | null
    isPublish: boolean | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    type: number
    description: number
    weight: number
    isPublish: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    weight?: true
  }

  export type ProductSumAggregateInputType = {
    weight?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    type?: true
    description?: true
    weight?: true
    isPublish?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    type?: true
    description?: true
    weight?: true
    isPublish?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    type?: true
    description?: true
    weight?: true
    isPublish?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    categoryId: string | null
    name: string | null
    type: $Enums.ProductTypes | null
    description: string | null
    weight: number | null
    isPublish: boolean | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    weight?: boolean
    isPublish?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    productVariants?: boolean | Product$productVariantsArgs<ExtArgs>
    orderDetails?: boolean | Product$orderDetailsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    weight?: boolean
    isPublish?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    weight?: boolean
    isPublish?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    categoryId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    weight?: boolean
    isPublish?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "name" | "type" | "description" | "weight" | "isPublish", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    productVariants?: boolean | Product$productVariantsArgs<ExtArgs>
    orderDetails?: boolean | Product$orderDetailsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      productVariants: Prisma.$ProductVariantPayload<ExtArgs>[]
      orderDetails: Prisma.$OrderDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string | null
      name: string | null
      type: $Enums.ProductTypes | null
      description: string | null
      weight: number | null
      isPublish: boolean | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    productVariants<T extends Product$productVariantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$productVariantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderDetails<T extends Product$orderDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly type: FieldRef<"Product", 'ProductTypes'>
    readonly description: FieldRef<"Product", 'String'>
    readonly weight: FieldRef<"Product", 'Float'>
    readonly isPublish: FieldRef<"Product", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data?: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.productVariants
   */
  export type Product$productVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * Product.orderDetails
   */
  export type Product$orderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    where?: OrderDetailWhereInput
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    cursor?: OrderDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductWholesaler
   */

  export type AggregateProductWholesaler = {
    _count: ProductWholesalerCountAggregateOutputType | null
    _avg: ProductWholesalerAvgAggregateOutputType | null
    _sum: ProductWholesalerSumAggregateOutputType | null
    _min: ProductWholesalerMinAggregateOutputType | null
    _max: ProductWholesalerMaxAggregateOutputType | null
  }

  export type ProductWholesalerAvgAggregateOutputType = {
    lowerLimitItem: number | null
    upperLimitItem: number | null
    unitPrice: number | null
    wholesalerPrice: number | null
  }

  export type ProductWholesalerSumAggregateOutputType = {
    lowerLimitItem: number | null
    upperLimitItem: number | null
    unitPrice: number | null
    wholesalerPrice: number | null
  }

  export type ProductWholesalerMinAggregateOutputType = {
    id: string | null
    productVariantId: string | null
    lowerLimitItem: number | null
    upperLimitItem: number | null
    unitPrice: number | null
    wholesalerPrice: number | null
  }

  export type ProductWholesalerMaxAggregateOutputType = {
    id: string | null
    productVariantId: string | null
    lowerLimitItem: number | null
    upperLimitItem: number | null
    unitPrice: number | null
    wholesalerPrice: number | null
  }

  export type ProductWholesalerCountAggregateOutputType = {
    id: number
    productVariantId: number
    lowerLimitItem: number
    upperLimitItem: number
    unitPrice: number
    wholesalerPrice: number
    _all: number
  }


  export type ProductWholesalerAvgAggregateInputType = {
    lowerLimitItem?: true
    upperLimitItem?: true
    unitPrice?: true
    wholesalerPrice?: true
  }

  export type ProductWholesalerSumAggregateInputType = {
    lowerLimitItem?: true
    upperLimitItem?: true
    unitPrice?: true
    wholesalerPrice?: true
  }

  export type ProductWholesalerMinAggregateInputType = {
    id?: true
    productVariantId?: true
    lowerLimitItem?: true
    upperLimitItem?: true
    unitPrice?: true
    wholesalerPrice?: true
  }

  export type ProductWholesalerMaxAggregateInputType = {
    id?: true
    productVariantId?: true
    lowerLimitItem?: true
    upperLimitItem?: true
    unitPrice?: true
    wholesalerPrice?: true
  }

  export type ProductWholesalerCountAggregateInputType = {
    id?: true
    productVariantId?: true
    lowerLimitItem?: true
    upperLimitItem?: true
    unitPrice?: true
    wholesalerPrice?: true
    _all?: true
  }

  export type ProductWholesalerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductWholesaler to aggregate.
     */
    where?: ProductWholesalerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductWholesalers to fetch.
     */
    orderBy?: ProductWholesalerOrderByWithRelationInput | ProductWholesalerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWholesalerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductWholesalers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductWholesalers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductWholesalers
    **/
    _count?: true | ProductWholesalerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductWholesalerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductWholesalerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductWholesalerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductWholesalerMaxAggregateInputType
  }

  export type GetProductWholesalerAggregateType<T extends ProductWholesalerAggregateArgs> = {
        [P in keyof T & keyof AggregateProductWholesaler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductWholesaler[P]>
      : GetScalarType<T[P], AggregateProductWholesaler[P]>
  }




  export type ProductWholesalerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWholesalerWhereInput
    orderBy?: ProductWholesalerOrderByWithAggregationInput | ProductWholesalerOrderByWithAggregationInput[]
    by: ProductWholesalerScalarFieldEnum[] | ProductWholesalerScalarFieldEnum
    having?: ProductWholesalerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductWholesalerCountAggregateInputType | true
    _avg?: ProductWholesalerAvgAggregateInputType
    _sum?: ProductWholesalerSumAggregateInputType
    _min?: ProductWholesalerMinAggregateInputType
    _max?: ProductWholesalerMaxAggregateInputType
  }

  export type ProductWholesalerGroupByOutputType = {
    id: string
    productVariantId: string | null
    lowerLimitItem: number | null
    upperLimitItem: number | null
    unitPrice: number | null
    wholesalerPrice: number | null
    _count: ProductWholesalerCountAggregateOutputType | null
    _avg: ProductWholesalerAvgAggregateOutputType | null
    _sum: ProductWholesalerSumAggregateOutputType | null
    _min: ProductWholesalerMinAggregateOutputType | null
    _max: ProductWholesalerMaxAggregateOutputType | null
  }

  type GetProductWholesalerGroupByPayload<T extends ProductWholesalerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductWholesalerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductWholesalerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductWholesalerGroupByOutputType[P]>
            : GetScalarType<T[P], ProductWholesalerGroupByOutputType[P]>
        }
      >
    >


  export type ProductWholesalerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productVariantId?: boolean
    lowerLimitItem?: boolean
    upperLimitItem?: boolean
    unitPrice?: boolean
    wholesalerPrice?: boolean
    productVariant?: boolean | ProductWholesaler$productVariantArgs<ExtArgs>
  }, ExtArgs["result"]["productWholesaler"]>

  export type ProductWholesalerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productVariantId?: boolean
    lowerLimitItem?: boolean
    upperLimitItem?: boolean
    unitPrice?: boolean
    wholesalerPrice?: boolean
    productVariant?: boolean | ProductWholesaler$productVariantArgs<ExtArgs>
  }, ExtArgs["result"]["productWholesaler"]>

  export type ProductWholesalerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productVariantId?: boolean
    lowerLimitItem?: boolean
    upperLimitItem?: boolean
    unitPrice?: boolean
    wholesalerPrice?: boolean
    productVariant?: boolean | ProductWholesaler$productVariantArgs<ExtArgs>
  }, ExtArgs["result"]["productWholesaler"]>

  export type ProductWholesalerSelectScalar = {
    id?: boolean
    productVariantId?: boolean
    lowerLimitItem?: boolean
    upperLimitItem?: boolean
    unitPrice?: boolean
    wholesalerPrice?: boolean
  }

  export type ProductWholesalerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productVariantId" | "lowerLimitItem" | "upperLimitItem" | "unitPrice" | "wholesalerPrice", ExtArgs["result"]["productWholesaler"]>
  export type ProductWholesalerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductWholesaler$productVariantArgs<ExtArgs>
  }
  export type ProductWholesalerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductWholesaler$productVariantArgs<ExtArgs>
  }
  export type ProductWholesalerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductWholesaler$productVariantArgs<ExtArgs>
  }

  export type $ProductWholesalerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductWholesaler"
    objects: {
      productVariant: Prisma.$ProductVariantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productVariantId: string | null
      lowerLimitItem: number | null
      upperLimitItem: number | null
      unitPrice: number | null
      wholesalerPrice: number | null
    }, ExtArgs["result"]["productWholesaler"]>
    composites: {}
  }

  type ProductWholesalerGetPayload<S extends boolean | null | undefined | ProductWholesalerDefaultArgs> = $Result.GetResult<Prisma.$ProductWholesalerPayload, S>

  type ProductWholesalerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductWholesalerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductWholesalerCountAggregateInputType | true
    }

  export interface ProductWholesalerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductWholesaler'], meta: { name: 'ProductWholesaler' } }
    /**
     * Find zero or one ProductWholesaler that matches the filter.
     * @param {ProductWholesalerFindUniqueArgs} args - Arguments to find a ProductWholesaler
     * @example
     * // Get one ProductWholesaler
     * const productWholesaler = await prisma.productWholesaler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductWholesalerFindUniqueArgs>(args: SelectSubset<T, ProductWholesalerFindUniqueArgs<ExtArgs>>): Prisma__ProductWholesalerClient<$Result.GetResult<Prisma.$ProductWholesalerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductWholesaler that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductWholesalerFindUniqueOrThrowArgs} args - Arguments to find a ProductWholesaler
     * @example
     * // Get one ProductWholesaler
     * const productWholesaler = await prisma.productWholesaler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductWholesalerFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductWholesalerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductWholesalerClient<$Result.GetResult<Prisma.$ProductWholesalerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductWholesaler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductWholesalerFindFirstArgs} args - Arguments to find a ProductWholesaler
     * @example
     * // Get one ProductWholesaler
     * const productWholesaler = await prisma.productWholesaler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductWholesalerFindFirstArgs>(args?: SelectSubset<T, ProductWholesalerFindFirstArgs<ExtArgs>>): Prisma__ProductWholesalerClient<$Result.GetResult<Prisma.$ProductWholesalerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductWholesaler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductWholesalerFindFirstOrThrowArgs} args - Arguments to find a ProductWholesaler
     * @example
     * // Get one ProductWholesaler
     * const productWholesaler = await prisma.productWholesaler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductWholesalerFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductWholesalerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductWholesalerClient<$Result.GetResult<Prisma.$ProductWholesalerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductWholesalers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductWholesalerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductWholesalers
     * const productWholesalers = await prisma.productWholesaler.findMany()
     * 
     * // Get first 10 ProductWholesalers
     * const productWholesalers = await prisma.productWholesaler.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWholesalerWithIdOnly = await prisma.productWholesaler.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductWholesalerFindManyArgs>(args?: SelectSubset<T, ProductWholesalerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductWholesalerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductWholesaler.
     * @param {ProductWholesalerCreateArgs} args - Arguments to create a ProductWholesaler.
     * @example
     * // Create one ProductWholesaler
     * const ProductWholesaler = await prisma.productWholesaler.create({
     *   data: {
     *     // ... data to create a ProductWholesaler
     *   }
     * })
     * 
     */
    create<T extends ProductWholesalerCreateArgs>(args: SelectSubset<T, ProductWholesalerCreateArgs<ExtArgs>>): Prisma__ProductWholesalerClient<$Result.GetResult<Prisma.$ProductWholesalerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductWholesalers.
     * @param {ProductWholesalerCreateManyArgs} args - Arguments to create many ProductWholesalers.
     * @example
     * // Create many ProductWholesalers
     * const productWholesaler = await prisma.productWholesaler.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductWholesalerCreateManyArgs>(args?: SelectSubset<T, ProductWholesalerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductWholesalers and returns the data saved in the database.
     * @param {ProductWholesalerCreateManyAndReturnArgs} args - Arguments to create many ProductWholesalers.
     * @example
     * // Create many ProductWholesalers
     * const productWholesaler = await prisma.productWholesaler.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductWholesalers and only return the `id`
     * const productWholesalerWithIdOnly = await prisma.productWholesaler.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductWholesalerCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductWholesalerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductWholesalerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductWholesaler.
     * @param {ProductWholesalerDeleteArgs} args - Arguments to delete one ProductWholesaler.
     * @example
     * // Delete one ProductWholesaler
     * const ProductWholesaler = await prisma.productWholesaler.delete({
     *   where: {
     *     // ... filter to delete one ProductWholesaler
     *   }
     * })
     * 
     */
    delete<T extends ProductWholesalerDeleteArgs>(args: SelectSubset<T, ProductWholesalerDeleteArgs<ExtArgs>>): Prisma__ProductWholesalerClient<$Result.GetResult<Prisma.$ProductWholesalerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductWholesaler.
     * @param {ProductWholesalerUpdateArgs} args - Arguments to update one ProductWholesaler.
     * @example
     * // Update one ProductWholesaler
     * const productWholesaler = await prisma.productWholesaler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductWholesalerUpdateArgs>(args: SelectSubset<T, ProductWholesalerUpdateArgs<ExtArgs>>): Prisma__ProductWholesalerClient<$Result.GetResult<Prisma.$ProductWholesalerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductWholesalers.
     * @param {ProductWholesalerDeleteManyArgs} args - Arguments to filter ProductWholesalers to delete.
     * @example
     * // Delete a few ProductWholesalers
     * const { count } = await prisma.productWholesaler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductWholesalerDeleteManyArgs>(args?: SelectSubset<T, ProductWholesalerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductWholesalers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductWholesalerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductWholesalers
     * const productWholesaler = await prisma.productWholesaler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductWholesalerUpdateManyArgs>(args: SelectSubset<T, ProductWholesalerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductWholesalers and returns the data updated in the database.
     * @param {ProductWholesalerUpdateManyAndReturnArgs} args - Arguments to update many ProductWholesalers.
     * @example
     * // Update many ProductWholesalers
     * const productWholesaler = await prisma.productWholesaler.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductWholesalers and only return the `id`
     * const productWholesalerWithIdOnly = await prisma.productWholesaler.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductWholesalerUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductWholesalerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductWholesalerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductWholesaler.
     * @param {ProductWholesalerUpsertArgs} args - Arguments to update or create a ProductWholesaler.
     * @example
     * // Update or create a ProductWholesaler
     * const productWholesaler = await prisma.productWholesaler.upsert({
     *   create: {
     *     // ... data to create a ProductWholesaler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductWholesaler we want to update
     *   }
     * })
     */
    upsert<T extends ProductWholesalerUpsertArgs>(args: SelectSubset<T, ProductWholesalerUpsertArgs<ExtArgs>>): Prisma__ProductWholesalerClient<$Result.GetResult<Prisma.$ProductWholesalerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductWholesalers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductWholesalerCountArgs} args - Arguments to filter ProductWholesalers to count.
     * @example
     * // Count the number of ProductWholesalers
     * const count = await prisma.productWholesaler.count({
     *   where: {
     *     // ... the filter for the ProductWholesalers we want to count
     *   }
     * })
    **/
    count<T extends ProductWholesalerCountArgs>(
      args?: Subset<T, ProductWholesalerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductWholesalerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductWholesaler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductWholesalerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductWholesalerAggregateArgs>(args: Subset<T, ProductWholesalerAggregateArgs>): Prisma.PrismaPromise<GetProductWholesalerAggregateType<T>>

    /**
     * Group by ProductWholesaler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductWholesalerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductWholesalerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductWholesalerGroupByArgs['orderBy'] }
        : { orderBy?: ProductWholesalerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductWholesalerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductWholesalerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductWholesaler model
   */
  readonly fields: ProductWholesalerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductWholesaler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductWholesalerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productVariant<T extends ProductWholesaler$productVariantArgs<ExtArgs> = {}>(args?: Subset<T, ProductWholesaler$productVariantArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductWholesaler model
   */
  interface ProductWholesalerFieldRefs {
    readonly id: FieldRef<"ProductWholesaler", 'String'>
    readonly productVariantId: FieldRef<"ProductWholesaler", 'String'>
    readonly lowerLimitItem: FieldRef<"ProductWholesaler", 'Int'>
    readonly upperLimitItem: FieldRef<"ProductWholesaler", 'Int'>
    readonly unitPrice: FieldRef<"ProductWholesaler", 'Float'>
    readonly wholesalerPrice: FieldRef<"ProductWholesaler", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProductWholesaler findUnique
   */
  export type ProductWholesalerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerInclude<ExtArgs> | null
    /**
     * Filter, which ProductWholesaler to fetch.
     */
    where: ProductWholesalerWhereUniqueInput
  }

  /**
   * ProductWholesaler findUniqueOrThrow
   */
  export type ProductWholesalerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerInclude<ExtArgs> | null
    /**
     * Filter, which ProductWholesaler to fetch.
     */
    where: ProductWholesalerWhereUniqueInput
  }

  /**
   * ProductWholesaler findFirst
   */
  export type ProductWholesalerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerInclude<ExtArgs> | null
    /**
     * Filter, which ProductWholesaler to fetch.
     */
    where?: ProductWholesalerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductWholesalers to fetch.
     */
    orderBy?: ProductWholesalerOrderByWithRelationInput | ProductWholesalerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductWholesalers.
     */
    cursor?: ProductWholesalerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductWholesalers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductWholesalers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductWholesalers.
     */
    distinct?: ProductWholesalerScalarFieldEnum | ProductWholesalerScalarFieldEnum[]
  }

  /**
   * ProductWholesaler findFirstOrThrow
   */
  export type ProductWholesalerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerInclude<ExtArgs> | null
    /**
     * Filter, which ProductWholesaler to fetch.
     */
    where?: ProductWholesalerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductWholesalers to fetch.
     */
    orderBy?: ProductWholesalerOrderByWithRelationInput | ProductWholesalerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductWholesalers.
     */
    cursor?: ProductWholesalerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductWholesalers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductWholesalers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductWholesalers.
     */
    distinct?: ProductWholesalerScalarFieldEnum | ProductWholesalerScalarFieldEnum[]
  }

  /**
   * ProductWholesaler findMany
   */
  export type ProductWholesalerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerInclude<ExtArgs> | null
    /**
     * Filter, which ProductWholesalers to fetch.
     */
    where?: ProductWholesalerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductWholesalers to fetch.
     */
    orderBy?: ProductWholesalerOrderByWithRelationInput | ProductWholesalerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductWholesalers.
     */
    cursor?: ProductWholesalerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductWholesalers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductWholesalers.
     */
    skip?: number
    distinct?: ProductWholesalerScalarFieldEnum | ProductWholesalerScalarFieldEnum[]
  }

  /**
   * ProductWholesaler create
   */
  export type ProductWholesalerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductWholesaler.
     */
    data?: XOR<ProductWholesalerCreateInput, ProductWholesalerUncheckedCreateInput>
  }

  /**
   * ProductWholesaler createMany
   */
  export type ProductWholesalerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductWholesalers.
     */
    data: ProductWholesalerCreateManyInput | ProductWholesalerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductWholesaler createManyAndReturn
   */
  export type ProductWholesalerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * The data used to create many ProductWholesalers.
     */
    data: ProductWholesalerCreateManyInput | ProductWholesalerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductWholesaler update
   */
  export type ProductWholesalerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductWholesaler.
     */
    data: XOR<ProductWholesalerUpdateInput, ProductWholesalerUncheckedUpdateInput>
    /**
     * Choose, which ProductWholesaler to update.
     */
    where: ProductWholesalerWhereUniqueInput
  }

  /**
   * ProductWholesaler updateMany
   */
  export type ProductWholesalerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductWholesalers.
     */
    data: XOR<ProductWholesalerUpdateManyMutationInput, ProductWholesalerUncheckedUpdateManyInput>
    /**
     * Filter which ProductWholesalers to update
     */
    where?: ProductWholesalerWhereInput
    /**
     * Limit how many ProductWholesalers to update.
     */
    limit?: number
  }

  /**
   * ProductWholesaler updateManyAndReturn
   */
  export type ProductWholesalerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * The data used to update ProductWholesalers.
     */
    data: XOR<ProductWholesalerUpdateManyMutationInput, ProductWholesalerUncheckedUpdateManyInput>
    /**
     * Filter which ProductWholesalers to update
     */
    where?: ProductWholesalerWhereInput
    /**
     * Limit how many ProductWholesalers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductWholesaler upsert
   */
  export type ProductWholesalerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductWholesaler to update in case it exists.
     */
    where: ProductWholesalerWhereUniqueInput
    /**
     * In case the ProductWholesaler found by the `where` argument doesn't exist, create a new ProductWholesaler with this data.
     */
    create: XOR<ProductWholesalerCreateInput, ProductWholesalerUncheckedCreateInput>
    /**
     * In case the ProductWholesaler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductWholesalerUpdateInput, ProductWholesalerUncheckedUpdateInput>
  }

  /**
   * ProductWholesaler delete
   */
  export type ProductWholesalerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerInclude<ExtArgs> | null
    /**
     * Filter which ProductWholesaler to delete.
     */
    where: ProductWholesalerWhereUniqueInput
  }

  /**
   * ProductWholesaler deleteMany
   */
  export type ProductWholesalerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductWholesalers to delete
     */
    where?: ProductWholesalerWhereInput
    /**
     * Limit how many ProductWholesalers to delete.
     */
    limit?: number
  }

  /**
   * ProductWholesaler.productVariant
   */
  export type ProductWholesaler$productVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
  }

  /**
   * ProductWholesaler without action
   */
  export type ProductWholesalerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerInclude<ExtArgs> | null
  }


  /**
   * Model ProductPrice
   */

  export type AggregateProductPrice = {
    _count: ProductPriceCountAggregateOutputType | null
    _avg: ProductPriceAvgAggregateOutputType | null
    _sum: ProductPriceSumAggregateOutputType | null
    _min: ProductPriceMinAggregateOutputType | null
    _max: ProductPriceMaxAggregateOutputType | null
  }

  export type ProductPriceAvgAggregateOutputType = {
    normal: number | null
    buy: number | null
    reseller: number | null
    agent: number | null
    member: number | null
  }

  export type ProductPriceSumAggregateOutputType = {
    normal: number | null
    buy: number | null
    reseller: number | null
    agent: number | null
    member: number | null
  }

  export type ProductPriceMinAggregateOutputType = {
    id: string | null
    productVariantId: string | null
    normal: number | null
    buy: number | null
    reseller: number | null
    agent: number | null
    member: number | null
  }

  export type ProductPriceMaxAggregateOutputType = {
    id: string | null
    productVariantId: string | null
    normal: number | null
    buy: number | null
    reseller: number | null
    agent: number | null
    member: number | null
  }

  export type ProductPriceCountAggregateOutputType = {
    id: number
    productVariantId: number
    normal: number
    buy: number
    reseller: number
    agent: number
    member: number
    _all: number
  }


  export type ProductPriceAvgAggregateInputType = {
    normal?: true
    buy?: true
    reseller?: true
    agent?: true
    member?: true
  }

  export type ProductPriceSumAggregateInputType = {
    normal?: true
    buy?: true
    reseller?: true
    agent?: true
    member?: true
  }

  export type ProductPriceMinAggregateInputType = {
    id?: true
    productVariantId?: true
    normal?: true
    buy?: true
    reseller?: true
    agent?: true
    member?: true
  }

  export type ProductPriceMaxAggregateInputType = {
    id?: true
    productVariantId?: true
    normal?: true
    buy?: true
    reseller?: true
    agent?: true
    member?: true
  }

  export type ProductPriceCountAggregateInputType = {
    id?: true
    productVariantId?: true
    normal?: true
    buy?: true
    reseller?: true
    agent?: true
    member?: true
    _all?: true
  }

  export type ProductPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPrice to aggregate.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPrices
    **/
    _count?: true | ProductPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPriceMaxAggregateInputType
  }

  export type GetProductPriceAggregateType<T extends ProductPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPrice[P]>
      : GetScalarType<T[P], AggregateProductPrice[P]>
  }




  export type ProductPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceWhereInput
    orderBy?: ProductPriceOrderByWithAggregationInput | ProductPriceOrderByWithAggregationInput[]
    by: ProductPriceScalarFieldEnum[] | ProductPriceScalarFieldEnum
    having?: ProductPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPriceCountAggregateInputType | true
    _avg?: ProductPriceAvgAggregateInputType
    _sum?: ProductPriceSumAggregateInputType
    _min?: ProductPriceMinAggregateInputType
    _max?: ProductPriceMaxAggregateInputType
  }

  export type ProductPriceGroupByOutputType = {
    id: string
    productVariantId: string | null
    normal: number | null
    buy: number | null
    reseller: number | null
    agent: number | null
    member: number | null
    _count: ProductPriceCountAggregateOutputType | null
    _avg: ProductPriceAvgAggregateOutputType | null
    _sum: ProductPriceSumAggregateOutputType | null
    _min: ProductPriceMinAggregateOutputType | null
    _max: ProductPriceMaxAggregateOutputType | null
  }

  type GetProductPriceGroupByPayload<T extends ProductPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPriceGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPriceGroupByOutputType[P]>
        }
      >
    >


  export type ProductPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productVariantId?: boolean
    normal?: boolean
    buy?: boolean
    reseller?: boolean
    agent?: boolean
    member?: boolean
    productVariant?: boolean | ProductPrice$productVariantArgs<ExtArgs>
  }, ExtArgs["result"]["productPrice"]>

  export type ProductPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productVariantId?: boolean
    normal?: boolean
    buy?: boolean
    reseller?: boolean
    agent?: boolean
    member?: boolean
    productVariant?: boolean | ProductPrice$productVariantArgs<ExtArgs>
  }, ExtArgs["result"]["productPrice"]>

  export type ProductPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productVariantId?: boolean
    normal?: boolean
    buy?: boolean
    reseller?: boolean
    agent?: boolean
    member?: boolean
    productVariant?: boolean | ProductPrice$productVariantArgs<ExtArgs>
  }, ExtArgs["result"]["productPrice"]>

  export type ProductPriceSelectScalar = {
    id?: boolean
    productVariantId?: boolean
    normal?: boolean
    buy?: boolean
    reseller?: boolean
    agent?: boolean
    member?: boolean
  }

  export type ProductPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productVariantId" | "normal" | "buy" | "reseller" | "agent" | "member", ExtArgs["result"]["productPrice"]>
  export type ProductPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductPrice$productVariantArgs<ExtArgs>
  }
  export type ProductPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductPrice$productVariantArgs<ExtArgs>
  }
  export type ProductPriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductPrice$productVariantArgs<ExtArgs>
  }

  export type $ProductPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPrice"
    objects: {
      productVariant: Prisma.$ProductVariantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productVariantId: string | null
      normal: number | null
      buy: number | null
      reseller: number | null
      agent: number | null
      member: number | null
    }, ExtArgs["result"]["productPrice"]>
    composites: {}
  }

  type ProductPriceGetPayload<S extends boolean | null | undefined | ProductPriceDefaultArgs> = $Result.GetResult<Prisma.$ProductPricePayload, S>

  type ProductPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductPriceCountAggregateInputType | true
    }

  export interface ProductPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPrice'], meta: { name: 'ProductPrice' } }
    /**
     * Find zero or one ProductPrice that matches the filter.
     * @param {ProductPriceFindUniqueArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPriceFindUniqueArgs>(args: SelectSubset<T, ProductPriceFindUniqueArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductPriceFindUniqueOrThrowArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceFindFirstArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPriceFindFirstArgs>(args?: SelectSubset<T, ProductPriceFindFirstArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceFindFirstOrThrowArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPrices
     * const productPrices = await prisma.productPrice.findMany()
     * 
     * // Get first 10 ProductPrices
     * const productPrices = await prisma.productPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPriceWithIdOnly = await prisma.productPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPriceFindManyArgs>(args?: SelectSubset<T, ProductPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductPrice.
     * @param {ProductPriceCreateArgs} args - Arguments to create a ProductPrice.
     * @example
     * // Create one ProductPrice
     * const ProductPrice = await prisma.productPrice.create({
     *   data: {
     *     // ... data to create a ProductPrice
     *   }
     * })
     * 
     */
    create<T extends ProductPriceCreateArgs>(args: SelectSubset<T, ProductPriceCreateArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductPrices.
     * @param {ProductPriceCreateManyArgs} args - Arguments to create many ProductPrices.
     * @example
     * // Create many ProductPrices
     * const productPrice = await prisma.productPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPriceCreateManyArgs>(args?: SelectSubset<T, ProductPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductPrices and returns the data saved in the database.
     * @param {ProductPriceCreateManyAndReturnArgs} args - Arguments to create many ProductPrices.
     * @example
     * // Create many ProductPrices
     * const productPrice = await prisma.productPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductPrices and only return the `id`
     * const productPriceWithIdOnly = await prisma.productPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductPrice.
     * @param {ProductPriceDeleteArgs} args - Arguments to delete one ProductPrice.
     * @example
     * // Delete one ProductPrice
     * const ProductPrice = await prisma.productPrice.delete({
     *   where: {
     *     // ... filter to delete one ProductPrice
     *   }
     * })
     * 
     */
    delete<T extends ProductPriceDeleteArgs>(args: SelectSubset<T, ProductPriceDeleteArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductPrice.
     * @param {ProductPriceUpdateArgs} args - Arguments to update one ProductPrice.
     * @example
     * // Update one ProductPrice
     * const productPrice = await prisma.productPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPriceUpdateArgs>(args: SelectSubset<T, ProductPriceUpdateArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductPrices.
     * @param {ProductPriceDeleteManyArgs} args - Arguments to filter ProductPrices to delete.
     * @example
     * // Delete a few ProductPrices
     * const { count } = await prisma.productPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPriceDeleteManyArgs>(args?: SelectSubset<T, ProductPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPrices
     * const productPrice = await prisma.productPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPriceUpdateManyArgs>(args: SelectSubset<T, ProductPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPrices and returns the data updated in the database.
     * @param {ProductPriceUpdateManyAndReturnArgs} args - Arguments to update many ProductPrices.
     * @example
     * // Update many ProductPrices
     * const productPrice = await prisma.productPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductPrices and only return the `id`
     * const productPriceWithIdOnly = await prisma.productPrice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductPrice.
     * @param {ProductPriceUpsertArgs} args - Arguments to update or create a ProductPrice.
     * @example
     * // Update or create a ProductPrice
     * const productPrice = await prisma.productPrice.upsert({
     *   create: {
     *     // ... data to create a ProductPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPrice we want to update
     *   }
     * })
     */
    upsert<T extends ProductPriceUpsertArgs>(args: SelectSubset<T, ProductPriceUpsertArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceCountArgs} args - Arguments to filter ProductPrices to count.
     * @example
     * // Count the number of ProductPrices
     * const count = await prisma.productPrice.count({
     *   where: {
     *     // ... the filter for the ProductPrices we want to count
     *   }
     * })
    **/
    count<T extends ProductPriceCountArgs>(
      args?: Subset<T, ProductPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductPriceAggregateArgs>(args: Subset<T, ProductPriceAggregateArgs>): Prisma.PrismaPromise<GetProductPriceAggregateType<T>>

    /**
     * Group by ProductPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPriceGroupByArgs['orderBy'] }
        : { orderBy?: ProductPriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPrice model
   */
  readonly fields: ProductPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productVariant<T extends ProductPrice$productVariantArgs<ExtArgs> = {}>(args?: Subset<T, ProductPrice$productVariantArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductPrice model
   */
  interface ProductPriceFieldRefs {
    readonly id: FieldRef<"ProductPrice", 'String'>
    readonly productVariantId: FieldRef<"ProductPrice", 'String'>
    readonly normal: FieldRef<"ProductPrice", 'Float'>
    readonly buy: FieldRef<"ProductPrice", 'Float'>
    readonly reseller: FieldRef<"ProductPrice", 'Float'>
    readonly agent: FieldRef<"ProductPrice", 'Float'>
    readonly member: FieldRef<"ProductPrice", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProductPrice findUnique
   */
  export type ProductPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice findUniqueOrThrow
   */
  export type ProductPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice findFirst
   */
  export type ProductPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPrices.
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPrices.
     */
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductPrice findFirstOrThrow
   */
  export type ProductPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPrices.
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPrices.
     */
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductPrice findMany
   */
  export type ProductPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrices to fetch.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPrices.
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductPrice create
   */
  export type ProductPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPrice.
     */
    data?: XOR<ProductPriceCreateInput, ProductPriceUncheckedCreateInput>
  }

  /**
   * ProductPrice createMany
   */
  export type ProductPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPrices.
     */
    data: ProductPriceCreateManyInput | ProductPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductPrice createManyAndReturn
   */
  export type ProductPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * The data used to create many ProductPrices.
     */
    data: ProductPriceCreateManyInput | ProductPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPrice update
   */
  export type ProductPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPrice.
     */
    data: XOR<ProductPriceUpdateInput, ProductPriceUncheckedUpdateInput>
    /**
     * Choose, which ProductPrice to update.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice updateMany
   */
  export type ProductPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPrices.
     */
    data: XOR<ProductPriceUpdateManyMutationInput, ProductPriceUncheckedUpdateManyInput>
    /**
     * Filter which ProductPrices to update
     */
    where?: ProductPriceWhereInput
    /**
     * Limit how many ProductPrices to update.
     */
    limit?: number
  }

  /**
   * ProductPrice updateManyAndReturn
   */
  export type ProductPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * The data used to update ProductPrices.
     */
    data: XOR<ProductPriceUpdateManyMutationInput, ProductPriceUncheckedUpdateManyInput>
    /**
     * Filter which ProductPrices to update
     */
    where?: ProductPriceWhereInput
    /**
     * Limit how many ProductPrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPrice upsert
   */
  export type ProductPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPrice to update in case it exists.
     */
    where: ProductPriceWhereUniqueInput
    /**
     * In case the ProductPrice found by the `where` argument doesn't exist, create a new ProductPrice with this data.
     */
    create: XOR<ProductPriceCreateInput, ProductPriceUncheckedCreateInput>
    /**
     * In case the ProductPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPriceUpdateInput, ProductPriceUncheckedUpdateInput>
  }

  /**
   * ProductPrice delete
   */
  export type ProductPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter which ProductPrice to delete.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice deleteMany
   */
  export type ProductPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPrices to delete
     */
    where?: ProductPriceWhereInput
    /**
     * Limit how many ProductPrices to delete.
     */
    limit?: number
  }

  /**
   * ProductPrice.productVariant
   */
  export type ProductPrice$productVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
  }

  /**
   * ProductPrice without action
   */
  export type ProductPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantAvgAggregateOutputType = {
    stock: number | null
  }

  export type ProductVariantSumAggregateOutputType = {
    stock: number | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: string | null
    productId: string | null
    sku: string | null
    stock: number | null
    size: string | null
    color: string | null
    imageUrl: string | null
    barcode: string | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    sku: string | null
    stock: number | null
    size: string | null
    color: string | null
    imageUrl: string | null
    barcode: string | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    productId: number
    sku: number
    stock: number
    size: number
    color: number
    imageUrl: number
    barcode: number
    _all: number
  }


  export type ProductVariantAvgAggregateInputType = {
    stock?: true
  }

  export type ProductVariantSumAggregateInputType = {
    stock?: true
  }

  export type ProductVariantMinAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    stock?: true
    size?: true
    color?: true
    imageUrl?: true
    barcode?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    stock?: true
    size?: true
    color?: true
    imageUrl?: true
    barcode?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    stock?: true
    size?: true
    color?: true
    imageUrl?: true
    barcode?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _avg?: ProductVariantAvgAggregateInputType
    _sum?: ProductVariantSumAggregateInputType
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: string
    productId: string | null
    sku: string | null
    stock: number | null
    size: string | null
    color: string | null
    imageUrl: string | null
    barcode: string | null
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sku?: boolean
    stock?: boolean
    size?: boolean
    color?: boolean
    imageUrl?: boolean
    barcode?: boolean
    product?: boolean | ProductVariant$productArgs<ExtArgs>
    productPrices?: boolean | ProductVariant$productPricesArgs<ExtArgs>
    ProductWholesaler?: boolean | ProductVariant$ProductWholesalerArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sku?: boolean
    stock?: boolean
    size?: boolean
    color?: boolean
    imageUrl?: boolean
    barcode?: boolean
    product?: boolean | ProductVariant$productArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sku?: boolean
    stock?: boolean
    size?: boolean
    color?: boolean
    imageUrl?: boolean
    barcode?: boolean
    product?: boolean | ProductVariant$productArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectScalar = {
    id?: boolean
    productId?: boolean
    sku?: boolean
    stock?: boolean
    size?: boolean
    color?: boolean
    imageUrl?: boolean
    barcode?: boolean
  }

  export type ProductVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "sku" | "stock" | "size" | "color" | "imageUrl" | "barcode", ExtArgs["result"]["productVariant"]>
  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductVariant$productArgs<ExtArgs>
    productPrices?: boolean | ProductVariant$productPricesArgs<ExtArgs>
    ProductWholesaler?: boolean | ProductVariant$ProductWholesalerArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductVariant$productArgs<ExtArgs>
  }
  export type ProductVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductVariant$productArgs<ExtArgs>
  }

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
      productPrices: Prisma.$ProductPricePayload<ExtArgs>[]
      ProductWholesaler: Prisma.$ProductWholesalerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string | null
      sku: string | null
      stock: number | null
      size: string | null
      color: string | null
      imageUrl: string | null
      barcode: string | null
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariants and returns the data saved in the database.
     * @param {ProductVariantCreateManyAndReturnArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants and returns the data updated in the database.
     * @param {ProductVariantUpdateManyAndReturnArgs} args - Arguments to update many ProductVariants.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductVariant$productArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    productPrices<T extends ProductVariant$productPricesArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$productPricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProductWholesaler<T extends ProductVariant$ProductWholesalerArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$ProductWholesalerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductWholesalerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductVariant model
   */
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'String'>
    readonly productId: FieldRef<"ProductVariant", 'String'>
    readonly sku: FieldRef<"ProductVariant", 'String'>
    readonly stock: FieldRef<"ProductVariant", 'Int'>
    readonly size: FieldRef<"ProductVariant", 'String'>
    readonly color: FieldRef<"ProductVariant", 'String'>
    readonly imageUrl: FieldRef<"ProductVariant", 'String'>
    readonly barcode: FieldRef<"ProductVariant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data?: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariant createManyAndReturn
   */
  export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
  }

  /**
   * ProductVariant updateManyAndReturn
   */
  export type ProductVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to delete.
     */
    limit?: number
  }

  /**
   * ProductVariant.product
   */
  export type ProductVariant$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * ProductVariant.productPrices
   */
  export type ProductVariant$productPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPrice
     */
    omit?: ProductPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    where?: ProductPriceWhereInput
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    cursor?: ProductPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductVariant.ProductWholesaler
   */
  export type ProductVariant$ProductWholesalerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductWholesaler
     */
    select?: ProductWholesalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductWholesaler
     */
    omit?: ProductWholesalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductWholesalerInclude<ExtArgs> | null
    where?: ProductWholesalerWhereInput
    orderBy?: ProductWholesalerOrderByWithRelationInput | ProductWholesalerOrderByWithRelationInput[]
    cursor?: ProductWholesalerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductWholesalerScalarFieldEnum | ProductWholesalerScalarFieldEnum[]
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.CustomerCategories | null
    address: string | null
    subdistrict: string | null
    postalCode: string | null
    phoneNumber: string | null
    email: string | null
    status: $Enums.CustomerStatuses | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.CustomerCategories | null
    address: string | null
    subdistrict: string | null
    postalCode: string | null
    phoneNumber: string | null
    email: string | null
    status: $Enums.CustomerStatuses | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    category: number
    address: number
    subdistrict: number
    postalCode: number
    phoneNumber: number
    email: number
    status: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    address?: true
    subdistrict?: true
    postalCode?: true
    phoneNumber?: true
    email?: true
    status?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    address?: true
    subdistrict?: true
    postalCode?: true
    phoneNumber?: true
    email?: true
    status?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    address?: true
    subdistrict?: true
    postalCode?: true
    phoneNumber?: true
    email?: true
    status?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string | null
    category: $Enums.CustomerCategories | null
    address: string | null
    subdistrict: string | null
    postalCode: string | null
    phoneNumber: string | null
    email: string | null
    status: $Enums.CustomerStatuses | null
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    subdistrict?: boolean
    postalCode?: boolean
    phoneNumber?: boolean
    email?: boolean
    status?: boolean
    ordersAsOrderer?: boolean | Customer$ordersAsOrdererArgs<ExtArgs>
    ordersAsDeliveryTarget?: boolean | Customer$ordersAsDeliveryTargetArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    subdistrict?: boolean
    postalCode?: boolean
    phoneNumber?: boolean
    email?: boolean
    status?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    subdistrict?: boolean
    postalCode?: boolean
    phoneNumber?: boolean
    email?: boolean
    status?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    subdistrict?: boolean
    postalCode?: boolean
    phoneNumber?: boolean
    email?: boolean
    status?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "address" | "subdistrict" | "postalCode" | "phoneNumber" | "email" | "status", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordersAsOrderer?: boolean | Customer$ordersAsOrdererArgs<ExtArgs>
    ordersAsDeliveryTarget?: boolean | Customer$ordersAsDeliveryTargetArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      ordersAsOrderer: Prisma.$OrderPayload<ExtArgs>[]
      ordersAsDeliveryTarget: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      category: $Enums.CustomerCategories | null
      address: string | null
      subdistrict: string | null
      postalCode: string | null
      phoneNumber: string | null
      email: string | null
      status: $Enums.CustomerStatuses | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordersAsOrderer<T extends Customer$ordersAsOrdererArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersAsOrdererArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordersAsDeliveryTarget<T extends Customer$ordersAsDeliveryTargetArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersAsDeliveryTargetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly category: FieldRef<"Customer", 'CustomerCategories'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly subdistrict: FieldRef<"Customer", 'String'>
    readonly postalCode: FieldRef<"Customer", 'String'>
    readonly phoneNumber: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly status: FieldRef<"Customer", 'CustomerStatuses'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data?: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.ordersAsOrderer
   */
  export type Customer$ordersAsOrdererArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer.ordersAsDeliveryTarget
   */
  export type Customer$ordersAsDeliveryTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    ordererCustomerId: string | null
    deliveryTargetCustomerId: string | null
    senderPlace: string | null
    orderDate: Date | null
    salesChannel: string | null
    note: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    ordererCustomerId: string | null
    deliveryTargetCustomerId: string | null
    senderPlace: string | null
    orderDate: Date | null
    salesChannel: string | null
    note: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    ordererCustomerId: number
    deliveryTargetCustomerId: number
    senderPlace: number
    orderDate: number
    salesChannel: number
    note: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    ordererCustomerId?: true
    deliveryTargetCustomerId?: true
    senderPlace?: true
    orderDate?: true
    salesChannel?: true
    note?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    ordererCustomerId?: true
    deliveryTargetCustomerId?: true
    senderPlace?: true
    orderDate?: true
    salesChannel?: true
    note?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    ordererCustomerId?: true
    deliveryTargetCustomerId?: true
    senderPlace?: true
    orderDate?: true
    salesChannel?: true
    note?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    ordererCustomerId: string | null
    deliveryTargetCustomerId: string | null
    senderPlace: string | null
    orderDate: Date | null
    salesChannel: string | null
    note: string | null
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordererCustomerId?: boolean
    deliveryTargetCustomerId?: boolean
    senderPlace?: boolean
    orderDate?: boolean
    salesChannel?: boolean
    note?: boolean
    ordererCustomer?: boolean | Order$ordererCustomerArgs<ExtArgs>
    deliveryTargetCustomer?: boolean | Order$deliveryTargetCustomerArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordererCustomerId?: boolean
    deliveryTargetCustomerId?: boolean
    senderPlace?: boolean
    orderDate?: boolean
    salesChannel?: boolean
    note?: boolean
    ordererCustomer?: boolean | Order$ordererCustomerArgs<ExtArgs>
    deliveryTargetCustomer?: boolean | Order$deliveryTargetCustomerArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordererCustomerId?: boolean
    deliveryTargetCustomerId?: boolean
    senderPlace?: boolean
    orderDate?: boolean
    salesChannel?: boolean
    note?: boolean
    ordererCustomer?: boolean | Order$ordererCustomerArgs<ExtArgs>
    deliveryTargetCustomer?: boolean | Order$deliveryTargetCustomerArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    ordererCustomerId?: boolean
    deliveryTargetCustomerId?: boolean
    senderPlace?: boolean
    orderDate?: boolean
    salesChannel?: boolean
    note?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ordererCustomerId" | "deliveryTargetCustomerId" | "senderPlace" | "orderDate" | "salesChannel" | "note", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordererCustomer?: boolean | Order$ordererCustomerArgs<ExtArgs>
    deliveryTargetCustomer?: boolean | Order$deliveryTargetCustomerArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordererCustomer?: boolean | Order$ordererCustomerArgs<ExtArgs>
    deliveryTargetCustomer?: boolean | Order$deliveryTargetCustomerArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordererCustomer?: boolean | Order$ordererCustomerArgs<ExtArgs>
    deliveryTargetCustomer?: boolean | Order$deliveryTargetCustomerArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      ordererCustomer: Prisma.$CustomerPayload<ExtArgs> | null
      deliveryTargetCustomer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ordererCustomerId: string | null
      deliveryTargetCustomerId: string | null
      senderPlace: string | null
      orderDate: Date | null
      salesChannel: string | null
      note: string | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordererCustomer<T extends Order$ordererCustomerArgs<ExtArgs> = {}>(args?: Subset<T, Order$ordererCustomerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deliveryTargetCustomer<T extends Order$deliveryTargetCustomerArgs<ExtArgs> = {}>(args?: Subset<T, Order$deliveryTargetCustomerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly ordererCustomerId: FieldRef<"Order", 'String'>
    readonly deliveryTargetCustomerId: FieldRef<"Order", 'String'>
    readonly senderPlace: FieldRef<"Order", 'String'>
    readonly orderDate: FieldRef<"Order", 'DateTime'>
    readonly salesChannel: FieldRef<"Order", 'String'>
    readonly note: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data?: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.ordererCustomer
   */
  export type Order$ordererCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Order.deliveryTargetCustomer
   */
  export type Order$deliveryTargetCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderDetail
   */

  export type AggregateOrderDetail = {
    _count: OrderDetailCountAggregateOutputType | null
    _avg: OrderDetailAvgAggregateOutputType | null
    _sum: OrderDetailSumAggregateOutputType | null
    _min: OrderDetailMinAggregateOutputType | null
    _max: OrderDetailMaxAggregateOutputType | null
  }

  export type OrderDetailAvgAggregateOutputType = {
    productQty: number | null
    finalPrice: number | null
  }

  export type OrderDetailSumAggregateOutputType = {
    productQty: number | null
    finalPrice: number | null
  }

  export type OrderDetailMinAggregateOutputType = {
    id: string | null
    productId: string | null
    paymentMethodId: string | null
    code: string | null
    productQty: number | null
    courierName: string | null
    courierCategory: string | null
    courierEta: string | null
    courierCost: string | null
    finalPrice: number | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentDate: Date | null
    receiptNumber: string | null
  }

  export type OrderDetailMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    paymentMethodId: string | null
    code: string | null
    productQty: number | null
    courierName: string | null
    courierCategory: string | null
    courierEta: string | null
    courierCost: string | null
    finalPrice: number | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentDate: Date | null
    receiptNumber: string | null
  }

  export type OrderDetailCountAggregateOutputType = {
    id: number
    productId: number
    paymentMethodId: number
    code: number
    productQty: number
    courierName: number
    courierCategory: number
    courierEta: number
    courierCost: number
    otherFees: number
    finalPrice: number
    paymentStatus: number
    paymentDate: number
    receiptNumber: number
    _all: number
  }


  export type OrderDetailAvgAggregateInputType = {
    productQty?: true
    finalPrice?: true
  }

  export type OrderDetailSumAggregateInputType = {
    productQty?: true
    finalPrice?: true
  }

  export type OrderDetailMinAggregateInputType = {
    id?: true
    productId?: true
    paymentMethodId?: true
    code?: true
    productQty?: true
    courierName?: true
    courierCategory?: true
    courierEta?: true
    courierCost?: true
    finalPrice?: true
    paymentStatus?: true
    paymentDate?: true
    receiptNumber?: true
  }

  export type OrderDetailMaxAggregateInputType = {
    id?: true
    productId?: true
    paymentMethodId?: true
    code?: true
    productQty?: true
    courierName?: true
    courierCategory?: true
    courierEta?: true
    courierCost?: true
    finalPrice?: true
    paymentStatus?: true
    paymentDate?: true
    receiptNumber?: true
  }

  export type OrderDetailCountAggregateInputType = {
    id?: true
    productId?: true
    paymentMethodId?: true
    code?: true
    productQty?: true
    courierName?: true
    courierCategory?: true
    courierEta?: true
    courierCost?: true
    otherFees?: true
    finalPrice?: true
    paymentStatus?: true
    paymentDate?: true
    receiptNumber?: true
    _all?: true
  }

  export type OrderDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetail to aggregate.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailMaxAggregateInputType
  }

  export type GetOrderDetailAggregateType<T extends OrderDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetail[P]>
      : GetScalarType<T[P], AggregateOrderDetail[P]>
  }




  export type OrderDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailWhereInput
    orderBy?: OrderDetailOrderByWithAggregationInput | OrderDetailOrderByWithAggregationInput[]
    by: OrderDetailScalarFieldEnum[] | OrderDetailScalarFieldEnum
    having?: OrderDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailCountAggregateInputType | true
    _avg?: OrderDetailAvgAggregateInputType
    _sum?: OrderDetailSumAggregateInputType
    _min?: OrderDetailMinAggregateInputType
    _max?: OrderDetailMaxAggregateInputType
  }

  export type OrderDetailGroupByOutputType = {
    id: string
    productId: string | null
    paymentMethodId: string | null
    code: string | null
    productQty: number | null
    courierName: string | null
    courierCategory: string | null
    courierEta: string | null
    courierCost: string | null
    otherFees: JsonValue | null
    finalPrice: number | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentDate: Date | null
    receiptNumber: string | null
    _count: OrderDetailCountAggregateOutputType | null
    _avg: OrderDetailAvgAggregateOutputType | null
    _sum: OrderDetailSumAggregateOutputType | null
    _min: OrderDetailMinAggregateOutputType | null
    _max: OrderDetailMaxAggregateOutputType | null
  }

  type GetOrderDetailGroupByPayload<T extends OrderDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    paymentMethodId?: boolean
    code?: boolean
    productQty?: boolean
    courierName?: boolean
    courierCategory?: boolean
    courierEta?: boolean
    courierCost?: boolean
    otherFees?: boolean
    finalPrice?: boolean
    paymentStatus?: boolean
    paymentDate?: boolean
    receiptNumber?: boolean
    product?: boolean | OrderDetail$productArgs<ExtArgs>
    paymentMethod?: boolean | OrderDetail$paymentMethodArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetail"]>

  export type OrderDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    paymentMethodId?: boolean
    code?: boolean
    productQty?: boolean
    courierName?: boolean
    courierCategory?: boolean
    courierEta?: boolean
    courierCost?: boolean
    otherFees?: boolean
    finalPrice?: boolean
    paymentStatus?: boolean
    paymentDate?: boolean
    receiptNumber?: boolean
    product?: boolean | OrderDetail$productArgs<ExtArgs>
    paymentMethod?: boolean | OrderDetail$paymentMethodArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetail"]>

  export type OrderDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    paymentMethodId?: boolean
    code?: boolean
    productQty?: boolean
    courierName?: boolean
    courierCategory?: boolean
    courierEta?: boolean
    courierCost?: boolean
    otherFees?: boolean
    finalPrice?: boolean
    paymentStatus?: boolean
    paymentDate?: boolean
    receiptNumber?: boolean
    product?: boolean | OrderDetail$productArgs<ExtArgs>
    paymentMethod?: boolean | OrderDetail$paymentMethodArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetail"]>

  export type OrderDetailSelectScalar = {
    id?: boolean
    productId?: boolean
    paymentMethodId?: boolean
    code?: boolean
    productQty?: boolean
    courierName?: boolean
    courierCategory?: boolean
    courierEta?: boolean
    courierCost?: boolean
    otherFees?: boolean
    finalPrice?: boolean
    paymentStatus?: boolean
    paymentDate?: boolean
    receiptNumber?: boolean
  }

  export type OrderDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "paymentMethodId" | "code" | "productQty" | "courierName" | "courierCategory" | "courierEta" | "courierCost" | "otherFees" | "finalPrice" | "paymentStatus" | "paymentDate" | "receiptNumber", ExtArgs["result"]["orderDetail"]>
  export type OrderDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | OrderDetail$productArgs<ExtArgs>
    paymentMethod?: boolean | OrderDetail$paymentMethodArgs<ExtArgs>
  }
  export type OrderDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | OrderDetail$productArgs<ExtArgs>
    paymentMethod?: boolean | OrderDetail$paymentMethodArgs<ExtArgs>
  }
  export type OrderDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | OrderDetail$productArgs<ExtArgs>
    paymentMethod?: boolean | OrderDetail$paymentMethodArgs<ExtArgs>
  }

  export type $OrderDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetail"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
      paymentMethod: Prisma.$PaymentMethodPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string | null
      paymentMethodId: string | null
      code: string | null
      productQty: number | null
      courierName: string | null
      courierCategory: string | null
      courierEta: string | null
      courierCost: string | null
      otherFees: Prisma.JsonValue | null
      finalPrice: number | null
      paymentStatus: $Enums.PaymentStatus | null
      paymentDate: Date | null
      receiptNumber: string | null
    }, ExtArgs["result"]["orderDetail"]>
    composites: {}
  }

  type OrderDetailGetPayload<S extends boolean | null | undefined | OrderDetailDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailPayload, S>

  type OrderDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderDetailCountAggregateInputType | true
    }

  export interface OrderDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetail'], meta: { name: 'OrderDetail' } }
    /**
     * Find zero or one OrderDetail that matches the filter.
     * @param {OrderDetailFindUniqueArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDetailFindUniqueArgs>(args: SelectSubset<T, OrderDetailFindUniqueArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderDetailFindUniqueOrThrowArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindFirstArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDetailFindFirstArgs>(args?: SelectSubset<T, OrderDetailFindFirstArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindFirstOrThrowArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetail.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderDetailWithIdOnly = await prisma.orderDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderDetailFindManyArgs>(args?: SelectSubset<T, OrderDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderDetail.
     * @param {OrderDetailCreateArgs} args - Arguments to create a OrderDetail.
     * @example
     * // Create one OrderDetail
     * const OrderDetail = await prisma.orderDetail.create({
     *   data: {
     *     // ... data to create a OrderDetail
     *   }
     * })
     * 
     */
    create<T extends OrderDetailCreateArgs>(args: SelectSubset<T, OrderDetailCreateArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderDetails.
     * @param {OrderDetailCreateManyArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetail = await prisma.orderDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderDetailCreateManyArgs>(args?: SelectSubset<T, OrderDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderDetails and returns the data saved in the database.
     * @param {OrderDetailCreateManyAndReturnArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetail = await prisma.orderDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderDetails and only return the `id`
     * const orderDetailWithIdOnly = await prisma.orderDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderDetail.
     * @param {OrderDetailDeleteArgs} args - Arguments to delete one OrderDetail.
     * @example
     * // Delete one OrderDetail
     * const OrderDetail = await prisma.orderDetail.delete({
     *   where: {
     *     // ... filter to delete one OrderDetail
     *   }
     * })
     * 
     */
    delete<T extends OrderDetailDeleteArgs>(args: SelectSubset<T, OrderDetailDeleteArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderDetail.
     * @param {OrderDetailUpdateArgs} args - Arguments to update one OrderDetail.
     * @example
     * // Update one OrderDetail
     * const orderDetail = await prisma.orderDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderDetailUpdateArgs>(args: SelectSubset<T, OrderDetailUpdateArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDetailDeleteManyArgs>(args?: SelectSubset<T, OrderDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetail = await prisma.orderDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderDetailUpdateManyArgs>(args: SelectSubset<T, OrderDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails and returns the data updated in the database.
     * @param {OrderDetailUpdateManyAndReturnArgs} args - Arguments to update many OrderDetails.
     * @example
     * // Update many OrderDetails
     * const orderDetail = await prisma.orderDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderDetails and only return the `id`
     * const orderDetailWithIdOnly = await prisma.orderDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderDetail.
     * @param {OrderDetailUpsertArgs} args - Arguments to update or create a OrderDetail.
     * @example
     * // Update or create a OrderDetail
     * const orderDetail = await prisma.orderDetail.upsert({
     *   create: {
     *     // ... data to create a OrderDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetail we want to update
     *   }
     * })
     */
    upsert<T extends OrderDetailUpsertArgs>(args: SelectSubset<T, OrderDetailUpsertArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetail.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailCountArgs>(
      args?: Subset<T, OrderDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderDetailAggregateArgs>(args: Subset<T, OrderDetailAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailAggregateType<T>>

    /**
     * Group by OrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetail model
   */
  readonly fields: OrderDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends OrderDetail$productArgs<ExtArgs> = {}>(args?: Subset<T, OrderDetail$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paymentMethod<T extends OrderDetail$paymentMethodArgs<ExtArgs> = {}>(args?: Subset<T, OrderDetail$paymentMethodArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderDetail model
   */
  interface OrderDetailFieldRefs {
    readonly id: FieldRef<"OrderDetail", 'String'>
    readonly productId: FieldRef<"OrderDetail", 'String'>
    readonly paymentMethodId: FieldRef<"OrderDetail", 'String'>
    readonly code: FieldRef<"OrderDetail", 'String'>
    readonly productQty: FieldRef<"OrderDetail", 'Int'>
    readonly courierName: FieldRef<"OrderDetail", 'String'>
    readonly courierCategory: FieldRef<"OrderDetail", 'String'>
    readonly courierEta: FieldRef<"OrderDetail", 'String'>
    readonly courierCost: FieldRef<"OrderDetail", 'String'>
    readonly otherFees: FieldRef<"OrderDetail", 'Json'>
    readonly finalPrice: FieldRef<"OrderDetail", 'Float'>
    readonly paymentStatus: FieldRef<"OrderDetail", 'PaymentStatus'>
    readonly paymentDate: FieldRef<"OrderDetail", 'DateTime'>
    readonly receiptNumber: FieldRef<"OrderDetail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderDetail findUnique
   */
  export type OrderDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail findUniqueOrThrow
   */
  export type OrderDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail findFirst
   */
  export type OrderDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * OrderDetail findFirstOrThrow
   */
  export type OrderDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * OrderDetail findMany
   */
  export type OrderDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * OrderDetail create
   */
  export type OrderDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetail.
     */
    data?: XOR<OrderDetailCreateInput, OrderDetailUncheckedCreateInput>
  }

  /**
   * OrderDetail createMany
   */
  export type OrderDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailCreateManyInput | OrderDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderDetail createManyAndReturn
   */
  export type OrderDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailCreateManyInput | OrderDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetail update
   */
  export type OrderDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetail.
     */
    data: XOR<OrderDetailUpdateInput, OrderDetailUncheckedUpdateInput>
    /**
     * Choose, which OrderDetail to update.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail updateMany
   */
  export type OrderDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailWhereInput
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number
  }

  /**
   * OrderDetail updateManyAndReturn
   */
  export type OrderDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailWhereInput
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetail upsert
   */
  export type OrderDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetail to update in case it exists.
     */
    where: OrderDetailWhereUniqueInput
    /**
     * In case the OrderDetail found by the `where` argument doesn't exist, create a new OrderDetail with this data.
     */
    create: XOR<OrderDetailCreateInput, OrderDetailUncheckedCreateInput>
    /**
     * In case the OrderDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailUpdateInput, OrderDetailUncheckedUpdateInput>
  }

  /**
   * OrderDetail delete
   */
  export type OrderDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter which OrderDetail to delete.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail deleteMany
   */
  export type OrderDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailWhereInput
    /**
     * Limit how many OrderDetails to delete.
     */
    limit?: number
  }

  /**
   * OrderDetail.product
   */
  export type OrderDetail$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * OrderDetail.paymentMethod
   */
  export type OrderDetail$paymentMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
  }

  /**
   * OrderDetail without action
   */
  export type OrderDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: string | null
    name: string | null
    bankName: string | null
    bankBranch: string | null
    accountNumber: string | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    bankName: string | null
    bankBranch: string | null
    accountNumber: string | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    name: number
    bankName: number
    bankBranch: number
    accountNumber: number
    _all: number
  }


  export type PaymentMethodMinAggregateInputType = {
    id?: true
    name?: true
    bankName?: true
    bankBranch?: true
    accountNumber?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true
    name?: true
    bankName?: true
    bankBranch?: true
    accountNumber?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true
    name?: true
    bankName?: true
    bankBranch?: true
    accountNumber?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    id: string
    name: string | null
    bankName: string | null
    bankBranch: string | null
    accountNumber: string | null
    _count: PaymentMethodCountAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bankName?: boolean
    bankBranch?: boolean
    accountNumber?: boolean
    orderDetails?: boolean | PaymentMethod$orderDetailsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bankName?: boolean
    bankBranch?: boolean
    accountNumber?: boolean
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bankName?: boolean
    bankBranch?: boolean
    accountNumber?: boolean
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    id?: boolean
    name?: boolean
    bankName?: boolean
    bankBranch?: boolean
    accountNumber?: boolean
  }

  export type PaymentMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bankName" | "bankBranch" | "accountNumber", ExtArgs["result"]["paymentMethod"]>
  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | PaymentMethod$orderDetailsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PaymentMethodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      orderDetails: Prisma.$OrderDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      bankName: string | null
      bankBranch: string | null
      accountNumber: string | null
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethods and returns the data saved in the database.
     * @param {PaymentMethodCreateManyAndReturnArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods and returns the data updated in the database.
     * @param {PaymentMethodUpdateManyAndReturnArgs} args - Arguments to update many PaymentMethods.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentMethodUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderDetails<T extends PaymentMethod$orderDetailsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$orderDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentMethod model
   */
  interface PaymentMethodFieldRefs {
    readonly id: FieldRef<"PaymentMethod", 'String'>
    readonly name: FieldRef<"PaymentMethod", 'String'>
    readonly bankName: FieldRef<"PaymentMethod", 'String'>
    readonly bankBranch: FieldRef<"PaymentMethod", 'String'>
    readonly accountNumber: FieldRef<"PaymentMethod", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data?: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod createManyAndReturn
   */
  export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethod updateManyAndReturn
   */
  export type PaymentMethodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to delete.
     */
    limit?: number
  }

  /**
   * PaymentMethod.orderDetails
   */
  export type PaymentMethod$orderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    where?: OrderDetailWhereInput
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    cursor?: OrderDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryPlace
   */

  export type AggregateDeliveryPlace = {
    _count: DeliveryPlaceCountAggregateOutputType | null
    _min: DeliveryPlaceMinAggregateOutputType | null
    _max: DeliveryPlaceMaxAggregateOutputType | null
  }

  export type DeliveryPlaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    subdistrict: string | null
    phoneNumber: string | null
    email: string | null
  }

  export type DeliveryPlaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    subdistrict: string | null
    phoneNumber: string | null
    email: string | null
  }

  export type DeliveryPlaceCountAggregateOutputType = {
    id: number
    name: number
    address: number
    subdistrict: number
    phoneNumber: number
    email: number
    _all: number
  }


  export type DeliveryPlaceMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    subdistrict?: true
    phoneNumber?: true
    email?: true
  }

  export type DeliveryPlaceMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    subdistrict?: true
    phoneNumber?: true
    email?: true
  }

  export type DeliveryPlaceCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    subdistrict?: true
    phoneNumber?: true
    email?: true
    _all?: true
  }

  export type DeliveryPlaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryPlace to aggregate.
     */
    where?: DeliveryPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPlaces to fetch.
     */
    orderBy?: DeliveryPlaceOrderByWithRelationInput | DeliveryPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryPlaces
    **/
    _count?: true | DeliveryPlaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryPlaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryPlaceMaxAggregateInputType
  }

  export type GetDeliveryPlaceAggregateType<T extends DeliveryPlaceAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryPlace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryPlace[P]>
      : GetScalarType<T[P], AggregateDeliveryPlace[P]>
  }




  export type DeliveryPlaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryPlaceWhereInput
    orderBy?: DeliveryPlaceOrderByWithAggregationInput | DeliveryPlaceOrderByWithAggregationInput[]
    by: DeliveryPlaceScalarFieldEnum[] | DeliveryPlaceScalarFieldEnum
    having?: DeliveryPlaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryPlaceCountAggregateInputType | true
    _min?: DeliveryPlaceMinAggregateInputType
    _max?: DeliveryPlaceMaxAggregateInputType
  }

  export type DeliveryPlaceGroupByOutputType = {
    id: string
    name: string | null
    address: string | null
    subdistrict: string | null
    phoneNumber: string | null
    email: string | null
    _count: DeliveryPlaceCountAggregateOutputType | null
    _min: DeliveryPlaceMinAggregateOutputType | null
    _max: DeliveryPlaceMaxAggregateOutputType | null
  }

  type GetDeliveryPlaceGroupByPayload<T extends DeliveryPlaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryPlaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryPlaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryPlaceGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryPlaceGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryPlaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    subdistrict?: boolean
    phoneNumber?: boolean
    email?: boolean
  }, ExtArgs["result"]["deliveryPlace"]>

  export type DeliveryPlaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    subdistrict?: boolean
    phoneNumber?: boolean
    email?: boolean
  }, ExtArgs["result"]["deliveryPlace"]>

  export type DeliveryPlaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    subdistrict?: boolean
    phoneNumber?: boolean
    email?: boolean
  }, ExtArgs["result"]["deliveryPlace"]>

  export type DeliveryPlaceSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    subdistrict?: boolean
    phoneNumber?: boolean
    email?: boolean
  }

  export type DeliveryPlaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "subdistrict" | "phoneNumber" | "email", ExtArgs["result"]["deliveryPlace"]>

  export type $DeliveryPlacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryPlace"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      address: string | null
      subdistrict: string | null
      phoneNumber: string | null
      email: string | null
    }, ExtArgs["result"]["deliveryPlace"]>
    composites: {}
  }

  type DeliveryPlaceGetPayload<S extends boolean | null | undefined | DeliveryPlaceDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPlacePayload, S>

  type DeliveryPlaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryPlaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryPlaceCountAggregateInputType | true
    }

  export interface DeliveryPlaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryPlace'], meta: { name: 'DeliveryPlace' } }
    /**
     * Find zero or one DeliveryPlace that matches the filter.
     * @param {DeliveryPlaceFindUniqueArgs} args - Arguments to find a DeliveryPlace
     * @example
     * // Get one DeliveryPlace
     * const deliveryPlace = await prisma.deliveryPlace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryPlaceFindUniqueArgs>(args: SelectSubset<T, DeliveryPlaceFindUniqueArgs<ExtArgs>>): Prisma__DeliveryPlaceClient<$Result.GetResult<Prisma.$DeliveryPlacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeliveryPlace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryPlaceFindUniqueOrThrowArgs} args - Arguments to find a DeliveryPlace
     * @example
     * // Get one DeliveryPlace
     * const deliveryPlace = await prisma.deliveryPlace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryPlaceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryPlaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryPlaceClient<$Result.GetResult<Prisma.$DeliveryPlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryPlace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlaceFindFirstArgs} args - Arguments to find a DeliveryPlace
     * @example
     * // Get one DeliveryPlace
     * const deliveryPlace = await prisma.deliveryPlace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryPlaceFindFirstArgs>(args?: SelectSubset<T, DeliveryPlaceFindFirstArgs<ExtArgs>>): Prisma__DeliveryPlaceClient<$Result.GetResult<Prisma.$DeliveryPlacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryPlace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlaceFindFirstOrThrowArgs} args - Arguments to find a DeliveryPlace
     * @example
     * // Get one DeliveryPlace
     * const deliveryPlace = await prisma.deliveryPlace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryPlaceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryPlaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryPlaceClient<$Result.GetResult<Prisma.$DeliveryPlacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeliveryPlaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryPlaces
     * const deliveryPlaces = await prisma.deliveryPlace.findMany()
     * 
     * // Get first 10 DeliveryPlaces
     * const deliveryPlaces = await prisma.deliveryPlace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryPlaceWithIdOnly = await prisma.deliveryPlace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryPlaceFindManyArgs>(args?: SelectSubset<T, DeliveryPlaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeliveryPlace.
     * @param {DeliveryPlaceCreateArgs} args - Arguments to create a DeliveryPlace.
     * @example
     * // Create one DeliveryPlace
     * const DeliveryPlace = await prisma.deliveryPlace.create({
     *   data: {
     *     // ... data to create a DeliveryPlace
     *   }
     * })
     * 
     */
    create<T extends DeliveryPlaceCreateArgs>(args: SelectSubset<T, DeliveryPlaceCreateArgs<ExtArgs>>): Prisma__DeliveryPlaceClient<$Result.GetResult<Prisma.$DeliveryPlacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeliveryPlaces.
     * @param {DeliveryPlaceCreateManyArgs} args - Arguments to create many DeliveryPlaces.
     * @example
     * // Create many DeliveryPlaces
     * const deliveryPlace = await prisma.deliveryPlace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryPlaceCreateManyArgs>(args?: SelectSubset<T, DeliveryPlaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryPlaces and returns the data saved in the database.
     * @param {DeliveryPlaceCreateManyAndReturnArgs} args - Arguments to create many DeliveryPlaces.
     * @example
     * // Create many DeliveryPlaces
     * const deliveryPlace = await prisma.deliveryPlace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryPlaces and only return the `id`
     * const deliveryPlaceWithIdOnly = await prisma.deliveryPlace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryPlaceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryPlaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPlacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeliveryPlace.
     * @param {DeliveryPlaceDeleteArgs} args - Arguments to delete one DeliveryPlace.
     * @example
     * // Delete one DeliveryPlace
     * const DeliveryPlace = await prisma.deliveryPlace.delete({
     *   where: {
     *     // ... filter to delete one DeliveryPlace
     *   }
     * })
     * 
     */
    delete<T extends DeliveryPlaceDeleteArgs>(args: SelectSubset<T, DeliveryPlaceDeleteArgs<ExtArgs>>): Prisma__DeliveryPlaceClient<$Result.GetResult<Prisma.$DeliveryPlacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeliveryPlace.
     * @param {DeliveryPlaceUpdateArgs} args - Arguments to update one DeliveryPlace.
     * @example
     * // Update one DeliveryPlace
     * const deliveryPlace = await prisma.deliveryPlace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryPlaceUpdateArgs>(args: SelectSubset<T, DeliveryPlaceUpdateArgs<ExtArgs>>): Prisma__DeliveryPlaceClient<$Result.GetResult<Prisma.$DeliveryPlacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeliveryPlaces.
     * @param {DeliveryPlaceDeleteManyArgs} args - Arguments to filter DeliveryPlaces to delete.
     * @example
     * // Delete a few DeliveryPlaces
     * const { count } = await prisma.deliveryPlace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryPlaceDeleteManyArgs>(args?: SelectSubset<T, DeliveryPlaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryPlaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryPlaces
     * const deliveryPlace = await prisma.deliveryPlace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryPlaceUpdateManyArgs>(args: SelectSubset<T, DeliveryPlaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryPlaces and returns the data updated in the database.
     * @param {DeliveryPlaceUpdateManyAndReturnArgs} args - Arguments to update many DeliveryPlaces.
     * @example
     * // Update many DeliveryPlaces
     * const deliveryPlace = await prisma.deliveryPlace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeliveryPlaces and only return the `id`
     * const deliveryPlaceWithIdOnly = await prisma.deliveryPlace.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryPlaceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryPlaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPlacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeliveryPlace.
     * @param {DeliveryPlaceUpsertArgs} args - Arguments to update or create a DeliveryPlace.
     * @example
     * // Update or create a DeliveryPlace
     * const deliveryPlace = await prisma.deliveryPlace.upsert({
     *   create: {
     *     // ... data to create a DeliveryPlace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryPlace we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryPlaceUpsertArgs>(args: SelectSubset<T, DeliveryPlaceUpsertArgs<ExtArgs>>): Prisma__DeliveryPlaceClient<$Result.GetResult<Prisma.$DeliveryPlacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeliveryPlaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlaceCountArgs} args - Arguments to filter DeliveryPlaces to count.
     * @example
     * // Count the number of DeliveryPlaces
     * const count = await prisma.deliveryPlace.count({
     *   where: {
     *     // ... the filter for the DeliveryPlaces we want to count
     *   }
     * })
    **/
    count<T extends DeliveryPlaceCountArgs>(
      args?: Subset<T, DeliveryPlaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryPlaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryPlace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryPlaceAggregateArgs>(args: Subset<T, DeliveryPlaceAggregateArgs>): Prisma.PrismaPromise<GetDeliveryPlaceAggregateType<T>>

    /**
     * Group by DeliveryPlace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPlaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryPlaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryPlaceGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryPlaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryPlaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryPlaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryPlace model
   */
  readonly fields: DeliveryPlaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryPlace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryPlaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeliveryPlace model
   */
  interface DeliveryPlaceFieldRefs {
    readonly id: FieldRef<"DeliveryPlace", 'String'>
    readonly name: FieldRef<"DeliveryPlace", 'String'>
    readonly address: FieldRef<"DeliveryPlace", 'String'>
    readonly subdistrict: FieldRef<"DeliveryPlace", 'String'>
    readonly phoneNumber: FieldRef<"DeliveryPlace", 'String'>
    readonly email: FieldRef<"DeliveryPlace", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryPlace findUnique
   */
  export type DeliveryPlaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlace
     */
    select?: DeliveryPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlace
     */
    omit?: DeliveryPlaceOmit<ExtArgs> | null
    /**
     * Filter, which DeliveryPlace to fetch.
     */
    where: DeliveryPlaceWhereUniqueInput
  }

  /**
   * DeliveryPlace findUniqueOrThrow
   */
  export type DeliveryPlaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlace
     */
    select?: DeliveryPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlace
     */
    omit?: DeliveryPlaceOmit<ExtArgs> | null
    /**
     * Filter, which DeliveryPlace to fetch.
     */
    where: DeliveryPlaceWhereUniqueInput
  }

  /**
   * DeliveryPlace findFirst
   */
  export type DeliveryPlaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlace
     */
    select?: DeliveryPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlace
     */
    omit?: DeliveryPlaceOmit<ExtArgs> | null
    /**
     * Filter, which DeliveryPlace to fetch.
     */
    where?: DeliveryPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPlaces to fetch.
     */
    orderBy?: DeliveryPlaceOrderByWithRelationInput | DeliveryPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryPlaces.
     */
    cursor?: DeliveryPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryPlaces.
     */
    distinct?: DeliveryPlaceScalarFieldEnum | DeliveryPlaceScalarFieldEnum[]
  }

  /**
   * DeliveryPlace findFirstOrThrow
   */
  export type DeliveryPlaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlace
     */
    select?: DeliveryPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlace
     */
    omit?: DeliveryPlaceOmit<ExtArgs> | null
    /**
     * Filter, which DeliveryPlace to fetch.
     */
    where?: DeliveryPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPlaces to fetch.
     */
    orderBy?: DeliveryPlaceOrderByWithRelationInput | DeliveryPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryPlaces.
     */
    cursor?: DeliveryPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryPlaces.
     */
    distinct?: DeliveryPlaceScalarFieldEnum | DeliveryPlaceScalarFieldEnum[]
  }

  /**
   * DeliveryPlace findMany
   */
  export type DeliveryPlaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlace
     */
    select?: DeliveryPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlace
     */
    omit?: DeliveryPlaceOmit<ExtArgs> | null
    /**
     * Filter, which DeliveryPlaces to fetch.
     */
    where?: DeliveryPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPlaces to fetch.
     */
    orderBy?: DeliveryPlaceOrderByWithRelationInput | DeliveryPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryPlaces.
     */
    cursor?: DeliveryPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPlaces.
     */
    skip?: number
    distinct?: DeliveryPlaceScalarFieldEnum | DeliveryPlaceScalarFieldEnum[]
  }

  /**
   * DeliveryPlace create
   */
  export type DeliveryPlaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlace
     */
    select?: DeliveryPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlace
     */
    omit?: DeliveryPlaceOmit<ExtArgs> | null
    /**
     * The data needed to create a DeliveryPlace.
     */
    data?: XOR<DeliveryPlaceCreateInput, DeliveryPlaceUncheckedCreateInput>
  }

  /**
   * DeliveryPlace createMany
   */
  export type DeliveryPlaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryPlaces.
     */
    data: DeliveryPlaceCreateManyInput | DeliveryPlaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryPlace createManyAndReturn
   */
  export type DeliveryPlaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlace
     */
    select?: DeliveryPlaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlace
     */
    omit?: DeliveryPlaceOmit<ExtArgs> | null
    /**
     * The data used to create many DeliveryPlaces.
     */
    data: DeliveryPlaceCreateManyInput | DeliveryPlaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryPlace update
   */
  export type DeliveryPlaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlace
     */
    select?: DeliveryPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlace
     */
    omit?: DeliveryPlaceOmit<ExtArgs> | null
    /**
     * The data needed to update a DeliveryPlace.
     */
    data: XOR<DeliveryPlaceUpdateInput, DeliveryPlaceUncheckedUpdateInput>
    /**
     * Choose, which DeliveryPlace to update.
     */
    where: DeliveryPlaceWhereUniqueInput
  }

  /**
   * DeliveryPlace updateMany
   */
  export type DeliveryPlaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryPlaces.
     */
    data: XOR<DeliveryPlaceUpdateManyMutationInput, DeliveryPlaceUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryPlaces to update
     */
    where?: DeliveryPlaceWhereInput
    /**
     * Limit how many DeliveryPlaces to update.
     */
    limit?: number
  }

  /**
   * DeliveryPlace updateManyAndReturn
   */
  export type DeliveryPlaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlace
     */
    select?: DeliveryPlaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlace
     */
    omit?: DeliveryPlaceOmit<ExtArgs> | null
    /**
     * The data used to update DeliveryPlaces.
     */
    data: XOR<DeliveryPlaceUpdateManyMutationInput, DeliveryPlaceUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryPlaces to update
     */
    where?: DeliveryPlaceWhereInput
    /**
     * Limit how many DeliveryPlaces to update.
     */
    limit?: number
  }

  /**
   * DeliveryPlace upsert
   */
  export type DeliveryPlaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlace
     */
    select?: DeliveryPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlace
     */
    omit?: DeliveryPlaceOmit<ExtArgs> | null
    /**
     * The filter to search for the DeliveryPlace to update in case it exists.
     */
    where: DeliveryPlaceWhereUniqueInput
    /**
     * In case the DeliveryPlace found by the `where` argument doesn't exist, create a new DeliveryPlace with this data.
     */
    create: XOR<DeliveryPlaceCreateInput, DeliveryPlaceUncheckedCreateInput>
    /**
     * In case the DeliveryPlace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryPlaceUpdateInput, DeliveryPlaceUncheckedUpdateInput>
  }

  /**
   * DeliveryPlace delete
   */
  export type DeliveryPlaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlace
     */
    select?: DeliveryPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlace
     */
    omit?: DeliveryPlaceOmit<ExtArgs> | null
    /**
     * Filter which DeliveryPlace to delete.
     */
    where: DeliveryPlaceWhereUniqueInput
  }

  /**
   * DeliveryPlace deleteMany
   */
  export type DeliveryPlaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryPlaces to delete
     */
    where?: DeliveryPlaceWhereInput
    /**
     * Limit how many DeliveryPlaces to delete.
     */
    limit?: number
  }

  /**
   * DeliveryPlace without action
   */
  export type DeliveryPlaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPlace
     */
    select?: DeliveryPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPlace
     */
    omit?: DeliveryPlaceOmit<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    itemTotal: number | null
    totalPrice: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    itemTotal: number | null
    totalPrice: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    itemName: string | null
    itemPrice: string | null
    itemTotal: number | null
    totalPrice: number | null
    personResponsible: string | null
    note: string | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    itemName: string | null
    itemPrice: string | null
    itemTotal: number | null
    totalPrice: number | null
    personResponsible: string | null
    note: string | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    itemName: number
    itemPrice: number
    itemTotal: number
    totalPrice: number
    personResponsible: number
    note: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    itemTotal?: true
    totalPrice?: true
  }

  export type ExpenseSumAggregateInputType = {
    itemTotal?: true
    totalPrice?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    itemName?: true
    itemPrice?: true
    itemTotal?: true
    totalPrice?: true
    personResponsible?: true
    note?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    itemName?: true
    itemPrice?: true
    itemTotal?: true
    totalPrice?: true
    personResponsible?: true
    note?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    itemName?: true
    itemPrice?: true
    itemTotal?: true
    totalPrice?: true
    personResponsible?: true
    note?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    itemName: string | null
    itemPrice: string | null
    itemTotal: number | null
    totalPrice: number | null
    personResponsible: string | null
    note: string | null
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemName?: boolean
    itemPrice?: boolean
    itemTotal?: boolean
    totalPrice?: boolean
    personResponsible?: boolean
    note?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemName?: boolean
    itemPrice?: boolean
    itemTotal?: boolean
    totalPrice?: boolean
    personResponsible?: boolean
    note?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemName?: boolean
    itemPrice?: boolean
    itemTotal?: boolean
    totalPrice?: boolean
    personResponsible?: boolean
    note?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    itemName?: boolean
    itemPrice?: boolean
    itemTotal?: boolean
    totalPrice?: boolean
    personResponsible?: boolean
    note?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemName" | "itemPrice" | "itemTotal" | "totalPrice" | "personResponsible" | "note", ExtArgs["result"]["expense"]>

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemName: string | null
      itemPrice: string | null
      itemTotal: number | null
      totalPrice: number | null
      personResponsible: string | null
      note: string | null
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly itemName: FieldRef<"Expense", 'String'>
    readonly itemPrice: FieldRef<"Expense", 'String'>
    readonly itemTotal: FieldRef<"Expense", 'Int'>
    readonly totalPrice: FieldRef<"Expense", 'Float'>
    readonly personResponsible: FieldRef<"Expense", 'String'>
    readonly note: FieldRef<"Expense", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data?: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
  }


  /**
   * Model ShopSetting
   */

  export type AggregateShopSetting = {
    _count: ShopSettingCountAggregateOutputType | null
    _min: ShopSettingMinAggregateOutputType | null
    _max: ShopSettingMaxAggregateOutputType | null
  }

  export type ShopSettingMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    email: string | null
    phoneNumber: string | null
    address: string | null
    owner: string | null
    logo: string | null
    banner: string | null
  }

  export type ShopSettingMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    email: string | null
    phoneNumber: string | null
    address: string | null
    owner: string | null
    logo: string | null
    banner: string | null
  }

  export type ShopSettingCountAggregateOutputType = {
    id: number
    name: number
    description: number
    email: number
    phoneNumber: number
    address: number
    owner: number
    logo: number
    banner: number
    _all: number
  }


  export type ShopSettingMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    email?: true
    phoneNumber?: true
    address?: true
    owner?: true
    logo?: true
    banner?: true
  }

  export type ShopSettingMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    email?: true
    phoneNumber?: true
    address?: true
    owner?: true
    logo?: true
    banner?: true
  }

  export type ShopSettingCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    email?: true
    phoneNumber?: true
    address?: true
    owner?: true
    logo?: true
    banner?: true
    _all?: true
  }

  export type ShopSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopSetting to aggregate.
     */
    where?: ShopSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopSettings to fetch.
     */
    orderBy?: ShopSettingOrderByWithRelationInput | ShopSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopSettings
    **/
    _count?: true | ShopSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopSettingMaxAggregateInputType
  }

  export type GetShopSettingAggregateType<T extends ShopSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateShopSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopSetting[P]>
      : GetScalarType<T[P], AggregateShopSetting[P]>
  }




  export type ShopSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopSettingWhereInput
    orderBy?: ShopSettingOrderByWithAggregationInput | ShopSettingOrderByWithAggregationInput[]
    by: ShopSettingScalarFieldEnum[] | ShopSettingScalarFieldEnum
    having?: ShopSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopSettingCountAggregateInputType | true
    _min?: ShopSettingMinAggregateInputType
    _max?: ShopSettingMaxAggregateInputType
  }

  export type ShopSettingGroupByOutputType = {
    id: string
    name: string | null
    description: string | null
    email: string | null
    phoneNumber: string | null
    address: string | null
    owner: string | null
    logo: string | null
    banner: string | null
    _count: ShopSettingCountAggregateOutputType | null
    _min: ShopSettingMinAggregateOutputType | null
    _max: ShopSettingMaxAggregateOutputType | null
  }

  type GetShopSettingGroupByPayload<T extends ShopSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopSettingGroupByOutputType[P]>
            : GetScalarType<T[P], ShopSettingGroupByOutputType[P]>
        }
      >
    >


  export type ShopSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    email?: boolean
    phoneNumber?: boolean
    address?: boolean
    owner?: boolean
    logo?: boolean
    banner?: boolean
  }, ExtArgs["result"]["shopSetting"]>

  export type ShopSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    email?: boolean
    phoneNumber?: boolean
    address?: boolean
    owner?: boolean
    logo?: boolean
    banner?: boolean
  }, ExtArgs["result"]["shopSetting"]>

  export type ShopSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    email?: boolean
    phoneNumber?: boolean
    address?: boolean
    owner?: boolean
    logo?: boolean
    banner?: boolean
  }, ExtArgs["result"]["shopSetting"]>

  export type ShopSettingSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    email?: boolean
    phoneNumber?: boolean
    address?: boolean
    owner?: boolean
    logo?: boolean
    banner?: boolean
  }

  export type ShopSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "email" | "phoneNumber" | "address" | "owner" | "logo" | "banner", ExtArgs["result"]["shopSetting"]>

  export type $ShopSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      description: string | null
      email: string | null
      phoneNumber: string | null
      address: string | null
      owner: string | null
      logo: string | null
      banner: string | null
    }, ExtArgs["result"]["shopSetting"]>
    composites: {}
  }

  type ShopSettingGetPayload<S extends boolean | null | undefined | ShopSettingDefaultArgs> = $Result.GetResult<Prisma.$ShopSettingPayload, S>

  type ShopSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopSettingCountAggregateInputType | true
    }

  export interface ShopSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopSetting'], meta: { name: 'ShopSetting' } }
    /**
     * Find zero or one ShopSetting that matches the filter.
     * @param {ShopSettingFindUniqueArgs} args - Arguments to find a ShopSetting
     * @example
     * // Get one ShopSetting
     * const shopSetting = await prisma.shopSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopSettingFindUniqueArgs>(args: SelectSubset<T, ShopSettingFindUniqueArgs<ExtArgs>>): Prisma__ShopSettingClient<$Result.GetResult<Prisma.$ShopSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopSettingFindUniqueOrThrowArgs} args - Arguments to find a ShopSetting
     * @example
     * // Get one ShopSetting
     * const shopSetting = await prisma.shopSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopSettingClient<$Result.GetResult<Prisma.$ShopSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSettingFindFirstArgs} args - Arguments to find a ShopSetting
     * @example
     * // Get one ShopSetting
     * const shopSetting = await prisma.shopSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopSettingFindFirstArgs>(args?: SelectSubset<T, ShopSettingFindFirstArgs<ExtArgs>>): Prisma__ShopSettingClient<$Result.GetResult<Prisma.$ShopSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSettingFindFirstOrThrowArgs} args - Arguments to find a ShopSetting
     * @example
     * // Get one ShopSetting
     * const shopSetting = await prisma.shopSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopSettingClient<$Result.GetResult<Prisma.$ShopSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopSettings
     * const shopSettings = await prisma.shopSetting.findMany()
     * 
     * // Get first 10 ShopSettings
     * const shopSettings = await prisma.shopSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopSettingWithIdOnly = await prisma.shopSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopSettingFindManyArgs>(args?: SelectSubset<T, ShopSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopSetting.
     * @param {ShopSettingCreateArgs} args - Arguments to create a ShopSetting.
     * @example
     * // Create one ShopSetting
     * const ShopSetting = await prisma.shopSetting.create({
     *   data: {
     *     // ... data to create a ShopSetting
     *   }
     * })
     * 
     */
    create<T extends ShopSettingCreateArgs>(args: SelectSubset<T, ShopSettingCreateArgs<ExtArgs>>): Prisma__ShopSettingClient<$Result.GetResult<Prisma.$ShopSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopSettings.
     * @param {ShopSettingCreateManyArgs} args - Arguments to create many ShopSettings.
     * @example
     * // Create many ShopSettings
     * const shopSetting = await prisma.shopSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopSettingCreateManyArgs>(args?: SelectSubset<T, ShopSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopSettings and returns the data saved in the database.
     * @param {ShopSettingCreateManyAndReturnArgs} args - Arguments to create many ShopSettings.
     * @example
     * // Create many ShopSettings
     * const shopSetting = await prisma.shopSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopSettings and only return the `id`
     * const shopSettingWithIdOnly = await prisma.shopSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShopSetting.
     * @param {ShopSettingDeleteArgs} args - Arguments to delete one ShopSetting.
     * @example
     * // Delete one ShopSetting
     * const ShopSetting = await prisma.shopSetting.delete({
     *   where: {
     *     // ... filter to delete one ShopSetting
     *   }
     * })
     * 
     */
    delete<T extends ShopSettingDeleteArgs>(args: SelectSubset<T, ShopSettingDeleteArgs<ExtArgs>>): Prisma__ShopSettingClient<$Result.GetResult<Prisma.$ShopSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopSetting.
     * @param {ShopSettingUpdateArgs} args - Arguments to update one ShopSetting.
     * @example
     * // Update one ShopSetting
     * const shopSetting = await prisma.shopSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopSettingUpdateArgs>(args: SelectSubset<T, ShopSettingUpdateArgs<ExtArgs>>): Prisma__ShopSettingClient<$Result.GetResult<Prisma.$ShopSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopSettings.
     * @param {ShopSettingDeleteManyArgs} args - Arguments to filter ShopSettings to delete.
     * @example
     * // Delete a few ShopSettings
     * const { count } = await prisma.shopSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopSettingDeleteManyArgs>(args?: SelectSubset<T, ShopSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopSettings
     * const shopSetting = await prisma.shopSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopSettingUpdateManyArgs>(args: SelectSubset<T, ShopSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopSettings and returns the data updated in the database.
     * @param {ShopSettingUpdateManyAndReturnArgs} args - Arguments to update many ShopSettings.
     * @example
     * // Update many ShopSettings
     * const shopSetting = await prisma.shopSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShopSettings and only return the `id`
     * const shopSettingWithIdOnly = await prisma.shopSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShopSetting.
     * @param {ShopSettingUpsertArgs} args - Arguments to update or create a ShopSetting.
     * @example
     * // Update or create a ShopSetting
     * const shopSetting = await prisma.shopSetting.upsert({
     *   create: {
     *     // ... data to create a ShopSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopSetting we want to update
     *   }
     * })
     */
    upsert<T extends ShopSettingUpsertArgs>(args: SelectSubset<T, ShopSettingUpsertArgs<ExtArgs>>): Prisma__ShopSettingClient<$Result.GetResult<Prisma.$ShopSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSettingCountArgs} args - Arguments to filter ShopSettings to count.
     * @example
     * // Count the number of ShopSettings
     * const count = await prisma.shopSetting.count({
     *   where: {
     *     // ... the filter for the ShopSettings we want to count
     *   }
     * })
    **/
    count<T extends ShopSettingCountArgs>(
      args?: Subset<T, ShopSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopSettingAggregateArgs>(args: Subset<T, ShopSettingAggregateArgs>): Prisma.PrismaPromise<GetShopSettingAggregateType<T>>

    /**
     * Group by ShopSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopSettingGroupByArgs['orderBy'] }
        : { orderBy?: ShopSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopSetting model
   */
  readonly fields: ShopSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopSetting model
   */
  interface ShopSettingFieldRefs {
    readonly id: FieldRef<"ShopSetting", 'String'>
    readonly name: FieldRef<"ShopSetting", 'String'>
    readonly description: FieldRef<"ShopSetting", 'String'>
    readonly email: FieldRef<"ShopSetting", 'String'>
    readonly phoneNumber: FieldRef<"ShopSetting", 'String'>
    readonly address: FieldRef<"ShopSetting", 'String'>
    readonly owner: FieldRef<"ShopSetting", 'String'>
    readonly logo: FieldRef<"ShopSetting", 'String'>
    readonly banner: FieldRef<"ShopSetting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShopSetting findUnique
   */
  export type ShopSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSetting
     */
    select?: ShopSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopSetting
     */
    omit?: ShopSettingOmit<ExtArgs> | null
    /**
     * Filter, which ShopSetting to fetch.
     */
    where: ShopSettingWhereUniqueInput
  }

  /**
   * ShopSetting findUniqueOrThrow
   */
  export type ShopSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSetting
     */
    select?: ShopSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopSetting
     */
    omit?: ShopSettingOmit<ExtArgs> | null
    /**
     * Filter, which ShopSetting to fetch.
     */
    where: ShopSettingWhereUniqueInput
  }

  /**
   * ShopSetting findFirst
   */
  export type ShopSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSetting
     */
    select?: ShopSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopSetting
     */
    omit?: ShopSettingOmit<ExtArgs> | null
    /**
     * Filter, which ShopSetting to fetch.
     */
    where?: ShopSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopSettings to fetch.
     */
    orderBy?: ShopSettingOrderByWithRelationInput | ShopSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopSettings.
     */
    cursor?: ShopSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopSettings.
     */
    distinct?: ShopSettingScalarFieldEnum | ShopSettingScalarFieldEnum[]
  }

  /**
   * ShopSetting findFirstOrThrow
   */
  export type ShopSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSetting
     */
    select?: ShopSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopSetting
     */
    omit?: ShopSettingOmit<ExtArgs> | null
    /**
     * Filter, which ShopSetting to fetch.
     */
    where?: ShopSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopSettings to fetch.
     */
    orderBy?: ShopSettingOrderByWithRelationInput | ShopSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopSettings.
     */
    cursor?: ShopSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopSettings.
     */
    distinct?: ShopSettingScalarFieldEnum | ShopSettingScalarFieldEnum[]
  }

  /**
   * ShopSetting findMany
   */
  export type ShopSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSetting
     */
    select?: ShopSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopSetting
     */
    omit?: ShopSettingOmit<ExtArgs> | null
    /**
     * Filter, which ShopSettings to fetch.
     */
    where?: ShopSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopSettings to fetch.
     */
    orderBy?: ShopSettingOrderByWithRelationInput | ShopSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopSettings.
     */
    cursor?: ShopSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopSettings.
     */
    skip?: number
    distinct?: ShopSettingScalarFieldEnum | ShopSettingScalarFieldEnum[]
  }

  /**
   * ShopSetting create
   */
  export type ShopSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSetting
     */
    select?: ShopSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopSetting
     */
    omit?: ShopSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a ShopSetting.
     */
    data?: XOR<ShopSettingCreateInput, ShopSettingUncheckedCreateInput>
  }

  /**
   * ShopSetting createMany
   */
  export type ShopSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopSettings.
     */
    data: ShopSettingCreateManyInput | ShopSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopSetting createManyAndReturn
   */
  export type ShopSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSetting
     */
    select?: ShopSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopSetting
     */
    omit?: ShopSettingOmit<ExtArgs> | null
    /**
     * The data used to create many ShopSettings.
     */
    data: ShopSettingCreateManyInput | ShopSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopSetting update
   */
  export type ShopSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSetting
     */
    select?: ShopSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopSetting
     */
    omit?: ShopSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a ShopSetting.
     */
    data: XOR<ShopSettingUpdateInput, ShopSettingUncheckedUpdateInput>
    /**
     * Choose, which ShopSetting to update.
     */
    where: ShopSettingWhereUniqueInput
  }

  /**
   * ShopSetting updateMany
   */
  export type ShopSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopSettings.
     */
    data: XOR<ShopSettingUpdateManyMutationInput, ShopSettingUncheckedUpdateManyInput>
    /**
     * Filter which ShopSettings to update
     */
    where?: ShopSettingWhereInput
    /**
     * Limit how many ShopSettings to update.
     */
    limit?: number
  }

  /**
   * ShopSetting updateManyAndReturn
   */
  export type ShopSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSetting
     */
    select?: ShopSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopSetting
     */
    omit?: ShopSettingOmit<ExtArgs> | null
    /**
     * The data used to update ShopSettings.
     */
    data: XOR<ShopSettingUpdateManyMutationInput, ShopSettingUncheckedUpdateManyInput>
    /**
     * Filter which ShopSettings to update
     */
    where?: ShopSettingWhereInput
    /**
     * Limit how many ShopSettings to update.
     */
    limit?: number
  }

  /**
   * ShopSetting upsert
   */
  export type ShopSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSetting
     */
    select?: ShopSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopSetting
     */
    omit?: ShopSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the ShopSetting to update in case it exists.
     */
    where: ShopSettingWhereUniqueInput
    /**
     * In case the ShopSetting found by the `where` argument doesn't exist, create a new ShopSetting with this data.
     */
    create: XOR<ShopSettingCreateInput, ShopSettingUncheckedCreateInput>
    /**
     * In case the ShopSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopSettingUpdateInput, ShopSettingUncheckedUpdateInput>
  }

  /**
   * ShopSetting delete
   */
  export type ShopSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSetting
     */
    select?: ShopSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopSetting
     */
    omit?: ShopSettingOmit<ExtArgs> | null
    /**
     * Filter which ShopSetting to delete.
     */
    where: ShopSettingWhereUniqueInput
  }

  /**
   * ShopSetting deleteMany
   */
  export type ShopSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopSettings to delete
     */
    where?: ShopSettingWhereInput
    /**
     * Limit how many ShopSettings to delete.
     */
    limit?: number
  }

  /**
   * ShopSetting without action
   */
  export type ShopSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSetting
     */
    select?: ShopSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopSetting
     */
    omit?: ShopSettingOmit<ExtArgs> | null
  }


  /**
   * Model SalesChannel
   */

  export type AggregateSalesChannel = {
    _count: SalesChannelCountAggregateOutputType | null
    _min: SalesChannelMinAggregateOutputType | null
    _max: SalesChannelMaxAggregateOutputType | null
  }

  export type SalesChannelMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
  }

  export type SalesChannelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
  }

  export type SalesChannelCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    _all: number
  }


  export type SalesChannelMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
  }

  export type SalesChannelMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
  }

  export type SalesChannelCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    _all?: true
  }

  export type SalesChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesChannel to aggregate.
     */
    where?: SalesChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesChannels to fetch.
     */
    orderBy?: SalesChannelOrderByWithRelationInput | SalesChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesChannels
    **/
    _count?: true | SalesChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesChannelMaxAggregateInputType
  }

  export type GetSalesChannelAggregateType<T extends SalesChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesChannel[P]>
      : GetScalarType<T[P], AggregateSalesChannel[P]>
  }




  export type SalesChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesChannelWhereInput
    orderBy?: SalesChannelOrderByWithAggregationInput | SalesChannelOrderByWithAggregationInput[]
    by: SalesChannelScalarFieldEnum[] | SalesChannelScalarFieldEnum
    having?: SalesChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesChannelCountAggregateInputType | true
    _min?: SalesChannelMinAggregateInputType
    _max?: SalesChannelMaxAggregateInputType
  }

  export type SalesChannelGroupByOutputType = {
    id: string
    name: string | null
    isActive: boolean | null
    _count: SalesChannelCountAggregateOutputType | null
    _min: SalesChannelMinAggregateOutputType | null
    _max: SalesChannelMaxAggregateOutputType | null
  }

  type GetSalesChannelGroupByPayload<T extends SalesChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesChannelGroupByOutputType[P]>
            : GetScalarType<T[P], SalesChannelGroupByOutputType[P]>
        }
      >
    >


  export type SalesChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["salesChannel"]>

  export type SalesChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["salesChannel"]>

  export type SalesChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["salesChannel"]>

  export type SalesChannelSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
  }

  export type SalesChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive", ExtArgs["result"]["salesChannel"]>

  export type $SalesChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesChannel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      isActive: boolean | null
    }, ExtArgs["result"]["salesChannel"]>
    composites: {}
  }

  type SalesChannelGetPayload<S extends boolean | null | undefined | SalesChannelDefaultArgs> = $Result.GetResult<Prisma.$SalesChannelPayload, S>

  type SalesChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesChannelCountAggregateInputType | true
    }

  export interface SalesChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesChannel'], meta: { name: 'SalesChannel' } }
    /**
     * Find zero or one SalesChannel that matches the filter.
     * @param {SalesChannelFindUniqueArgs} args - Arguments to find a SalesChannel
     * @example
     * // Get one SalesChannel
     * const salesChannel = await prisma.salesChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesChannelFindUniqueArgs>(args: SelectSubset<T, SalesChannelFindUniqueArgs<ExtArgs>>): Prisma__SalesChannelClient<$Result.GetResult<Prisma.$SalesChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesChannel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesChannelFindUniqueOrThrowArgs} args - Arguments to find a SalesChannel
     * @example
     * // Get one SalesChannel
     * const salesChannel = await prisma.salesChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesChannelClient<$Result.GetResult<Prisma.$SalesChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesChannelFindFirstArgs} args - Arguments to find a SalesChannel
     * @example
     * // Get one SalesChannel
     * const salesChannel = await prisma.salesChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesChannelFindFirstArgs>(args?: SelectSubset<T, SalesChannelFindFirstArgs<ExtArgs>>): Prisma__SalesChannelClient<$Result.GetResult<Prisma.$SalesChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesChannelFindFirstOrThrowArgs} args - Arguments to find a SalesChannel
     * @example
     * // Get one SalesChannel
     * const salesChannel = await prisma.salesChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesChannelClient<$Result.GetResult<Prisma.$SalesChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesChannels
     * const salesChannels = await prisma.salesChannel.findMany()
     * 
     * // Get first 10 SalesChannels
     * const salesChannels = await prisma.salesChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesChannelWithIdOnly = await prisma.salesChannel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesChannelFindManyArgs>(args?: SelectSubset<T, SalesChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesChannel.
     * @param {SalesChannelCreateArgs} args - Arguments to create a SalesChannel.
     * @example
     * // Create one SalesChannel
     * const SalesChannel = await prisma.salesChannel.create({
     *   data: {
     *     // ... data to create a SalesChannel
     *   }
     * })
     * 
     */
    create<T extends SalesChannelCreateArgs>(args: SelectSubset<T, SalesChannelCreateArgs<ExtArgs>>): Prisma__SalesChannelClient<$Result.GetResult<Prisma.$SalesChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesChannels.
     * @param {SalesChannelCreateManyArgs} args - Arguments to create many SalesChannels.
     * @example
     * // Create many SalesChannels
     * const salesChannel = await prisma.salesChannel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesChannelCreateManyArgs>(args?: SelectSubset<T, SalesChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesChannels and returns the data saved in the database.
     * @param {SalesChannelCreateManyAndReturnArgs} args - Arguments to create many SalesChannels.
     * @example
     * // Create many SalesChannels
     * const salesChannel = await prisma.salesChannel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesChannels and only return the `id`
     * const salesChannelWithIdOnly = await prisma.salesChannel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalesChannel.
     * @param {SalesChannelDeleteArgs} args - Arguments to delete one SalesChannel.
     * @example
     * // Delete one SalesChannel
     * const SalesChannel = await prisma.salesChannel.delete({
     *   where: {
     *     // ... filter to delete one SalesChannel
     *   }
     * })
     * 
     */
    delete<T extends SalesChannelDeleteArgs>(args: SelectSubset<T, SalesChannelDeleteArgs<ExtArgs>>): Prisma__SalesChannelClient<$Result.GetResult<Prisma.$SalesChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesChannel.
     * @param {SalesChannelUpdateArgs} args - Arguments to update one SalesChannel.
     * @example
     * // Update one SalesChannel
     * const salesChannel = await prisma.salesChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesChannelUpdateArgs>(args: SelectSubset<T, SalesChannelUpdateArgs<ExtArgs>>): Prisma__SalesChannelClient<$Result.GetResult<Prisma.$SalesChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesChannels.
     * @param {SalesChannelDeleteManyArgs} args - Arguments to filter SalesChannels to delete.
     * @example
     * // Delete a few SalesChannels
     * const { count } = await prisma.salesChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesChannelDeleteManyArgs>(args?: SelectSubset<T, SalesChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesChannels
     * const salesChannel = await prisma.salesChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesChannelUpdateManyArgs>(args: SelectSubset<T, SalesChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesChannels and returns the data updated in the database.
     * @param {SalesChannelUpdateManyAndReturnArgs} args - Arguments to update many SalesChannels.
     * @example
     * // Update many SalesChannels
     * const salesChannel = await prisma.salesChannel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalesChannels and only return the `id`
     * const salesChannelWithIdOnly = await prisma.salesChannel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalesChannel.
     * @param {SalesChannelUpsertArgs} args - Arguments to update or create a SalesChannel.
     * @example
     * // Update or create a SalesChannel
     * const salesChannel = await prisma.salesChannel.upsert({
     *   create: {
     *     // ... data to create a SalesChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesChannel we want to update
     *   }
     * })
     */
    upsert<T extends SalesChannelUpsertArgs>(args: SelectSubset<T, SalesChannelUpsertArgs<ExtArgs>>): Prisma__SalesChannelClient<$Result.GetResult<Prisma.$SalesChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalesChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesChannelCountArgs} args - Arguments to filter SalesChannels to count.
     * @example
     * // Count the number of SalesChannels
     * const count = await prisma.salesChannel.count({
     *   where: {
     *     // ... the filter for the SalesChannels we want to count
     *   }
     * })
    **/
    count<T extends SalesChannelCountArgs>(
      args?: Subset<T, SalesChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesChannelAggregateArgs>(args: Subset<T, SalesChannelAggregateArgs>): Prisma.PrismaPromise<GetSalesChannelAggregateType<T>>

    /**
     * Group by SalesChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesChannelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesChannelGroupByArgs['orderBy'] }
        : { orderBy?: SalesChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesChannel model
   */
  readonly fields: SalesChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesChannel model
   */
  interface SalesChannelFieldRefs {
    readonly id: FieldRef<"SalesChannel", 'String'>
    readonly name: FieldRef<"SalesChannel", 'String'>
    readonly isActive: FieldRef<"SalesChannel", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SalesChannel findUnique
   */
  export type SalesChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesChannel
     */
    select?: SalesChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesChannel
     */
    omit?: SalesChannelOmit<ExtArgs> | null
    /**
     * Filter, which SalesChannel to fetch.
     */
    where: SalesChannelWhereUniqueInput
  }

  /**
   * SalesChannel findUniqueOrThrow
   */
  export type SalesChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesChannel
     */
    select?: SalesChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesChannel
     */
    omit?: SalesChannelOmit<ExtArgs> | null
    /**
     * Filter, which SalesChannel to fetch.
     */
    where: SalesChannelWhereUniqueInput
  }

  /**
   * SalesChannel findFirst
   */
  export type SalesChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesChannel
     */
    select?: SalesChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesChannel
     */
    omit?: SalesChannelOmit<ExtArgs> | null
    /**
     * Filter, which SalesChannel to fetch.
     */
    where?: SalesChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesChannels to fetch.
     */
    orderBy?: SalesChannelOrderByWithRelationInput | SalesChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesChannels.
     */
    cursor?: SalesChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesChannels.
     */
    distinct?: SalesChannelScalarFieldEnum | SalesChannelScalarFieldEnum[]
  }

  /**
   * SalesChannel findFirstOrThrow
   */
  export type SalesChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesChannel
     */
    select?: SalesChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesChannel
     */
    omit?: SalesChannelOmit<ExtArgs> | null
    /**
     * Filter, which SalesChannel to fetch.
     */
    where?: SalesChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesChannels to fetch.
     */
    orderBy?: SalesChannelOrderByWithRelationInput | SalesChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesChannels.
     */
    cursor?: SalesChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesChannels.
     */
    distinct?: SalesChannelScalarFieldEnum | SalesChannelScalarFieldEnum[]
  }

  /**
   * SalesChannel findMany
   */
  export type SalesChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesChannel
     */
    select?: SalesChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesChannel
     */
    omit?: SalesChannelOmit<ExtArgs> | null
    /**
     * Filter, which SalesChannels to fetch.
     */
    where?: SalesChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesChannels to fetch.
     */
    orderBy?: SalesChannelOrderByWithRelationInput | SalesChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesChannels.
     */
    cursor?: SalesChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesChannels.
     */
    skip?: number
    distinct?: SalesChannelScalarFieldEnum | SalesChannelScalarFieldEnum[]
  }

  /**
   * SalesChannel create
   */
  export type SalesChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesChannel
     */
    select?: SalesChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesChannel
     */
    omit?: SalesChannelOmit<ExtArgs> | null
    /**
     * The data needed to create a SalesChannel.
     */
    data?: XOR<SalesChannelCreateInput, SalesChannelUncheckedCreateInput>
  }

  /**
   * SalesChannel createMany
   */
  export type SalesChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesChannels.
     */
    data: SalesChannelCreateManyInput | SalesChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesChannel createManyAndReturn
   */
  export type SalesChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesChannel
     */
    select?: SalesChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesChannel
     */
    omit?: SalesChannelOmit<ExtArgs> | null
    /**
     * The data used to create many SalesChannels.
     */
    data: SalesChannelCreateManyInput | SalesChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesChannel update
   */
  export type SalesChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesChannel
     */
    select?: SalesChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesChannel
     */
    omit?: SalesChannelOmit<ExtArgs> | null
    /**
     * The data needed to update a SalesChannel.
     */
    data: XOR<SalesChannelUpdateInput, SalesChannelUncheckedUpdateInput>
    /**
     * Choose, which SalesChannel to update.
     */
    where: SalesChannelWhereUniqueInput
  }

  /**
   * SalesChannel updateMany
   */
  export type SalesChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesChannels.
     */
    data: XOR<SalesChannelUpdateManyMutationInput, SalesChannelUncheckedUpdateManyInput>
    /**
     * Filter which SalesChannels to update
     */
    where?: SalesChannelWhereInput
    /**
     * Limit how many SalesChannels to update.
     */
    limit?: number
  }

  /**
   * SalesChannel updateManyAndReturn
   */
  export type SalesChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesChannel
     */
    select?: SalesChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesChannel
     */
    omit?: SalesChannelOmit<ExtArgs> | null
    /**
     * The data used to update SalesChannels.
     */
    data: XOR<SalesChannelUpdateManyMutationInput, SalesChannelUncheckedUpdateManyInput>
    /**
     * Filter which SalesChannels to update
     */
    where?: SalesChannelWhereInput
    /**
     * Limit how many SalesChannels to update.
     */
    limit?: number
  }

  /**
   * SalesChannel upsert
   */
  export type SalesChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesChannel
     */
    select?: SalesChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesChannel
     */
    omit?: SalesChannelOmit<ExtArgs> | null
    /**
     * The filter to search for the SalesChannel to update in case it exists.
     */
    where: SalesChannelWhereUniqueInput
    /**
     * In case the SalesChannel found by the `where` argument doesn't exist, create a new SalesChannel with this data.
     */
    create: XOR<SalesChannelCreateInput, SalesChannelUncheckedCreateInput>
    /**
     * In case the SalesChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesChannelUpdateInput, SalesChannelUncheckedUpdateInput>
  }

  /**
   * SalesChannel delete
   */
  export type SalesChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesChannel
     */
    select?: SalesChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesChannel
     */
    omit?: SalesChannelOmit<ExtArgs> | null
    /**
     * Filter which SalesChannel to delete.
     */
    where: SalesChannelWhereUniqueInput
  }

  /**
   * SalesChannel deleteMany
   */
  export type SalesChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesChannels to delete
     */
    where?: SalesChannelWhereInput
    /**
     * Limit how many SalesChannels to delete.
     */
    limit?: number
  }

  /**
   * SalesChannel without action
   */
  export type SalesChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesChannel
     */
    select?: SalesChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesChannel
     */
    omit?: SalesChannelOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    type: 'type',
    description: 'description',
    weight: 'weight',
    isPublish: 'isPublish'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductWholesalerScalarFieldEnum: {
    id: 'id',
    productVariantId: 'productVariantId',
    lowerLimitItem: 'lowerLimitItem',
    upperLimitItem: 'upperLimitItem',
    unitPrice: 'unitPrice',
    wholesalerPrice: 'wholesalerPrice'
  };

  export type ProductWholesalerScalarFieldEnum = (typeof ProductWholesalerScalarFieldEnum)[keyof typeof ProductWholesalerScalarFieldEnum]


  export const ProductPriceScalarFieldEnum: {
    id: 'id',
    productVariantId: 'productVariantId',
    normal: 'normal',
    buy: 'buy',
    reseller: 'reseller',
    agent: 'agent',
    member: 'member'
  };

  export type ProductPriceScalarFieldEnum = (typeof ProductPriceScalarFieldEnum)[keyof typeof ProductPriceScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    sku: 'sku',
    stock: 'stock',
    size: 'size',
    color: 'color',
    imageUrl: 'imageUrl',
    barcode: 'barcode'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    address: 'address',
    subdistrict: 'subdistrict',
    postalCode: 'postalCode',
    phoneNumber: 'phoneNumber',
    email: 'email',
    status: 'status'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    ordererCustomerId: 'ordererCustomerId',
    deliveryTargetCustomerId: 'deliveryTargetCustomerId',
    senderPlace: 'senderPlace',
    orderDate: 'orderDate',
    salesChannel: 'salesChannel',
    note: 'note'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderDetailScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    paymentMethodId: 'paymentMethodId',
    code: 'code',
    productQty: 'productQty',
    courierName: 'courierName',
    courierCategory: 'courierCategory',
    courierEta: 'courierEta',
    courierCost: 'courierCost',
    otherFees: 'otherFees',
    finalPrice: 'finalPrice',
    paymentStatus: 'paymentStatus',
    paymentDate: 'paymentDate',
    receiptNumber: 'receiptNumber'
  };

  export type OrderDetailScalarFieldEnum = (typeof OrderDetailScalarFieldEnum)[keyof typeof OrderDetailScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bankName: 'bankName',
    bankBranch: 'bankBranch',
    accountNumber: 'accountNumber'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const DeliveryPlaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    subdistrict: 'subdistrict',
    phoneNumber: 'phoneNumber',
    email: 'email'
  };

  export type DeliveryPlaceScalarFieldEnum = (typeof DeliveryPlaceScalarFieldEnum)[keyof typeof DeliveryPlaceScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    itemName: 'itemName',
    itemPrice: 'itemPrice',
    itemTotal: 'itemTotal',
    totalPrice: 'totalPrice',
    personResponsible: 'personResponsible',
    note: 'note'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const ShopSettingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    email: 'email',
    phoneNumber: 'phoneNumber',
    address: 'address',
    owner: 'owner',
    logo: 'logo',
    banner: 'banner'
  };

  export type ShopSettingScalarFieldEnum = (typeof ShopSettingScalarFieldEnum)[keyof typeof ShopSettingScalarFieldEnum]


  export const SalesChannelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive'
  };

  export type SalesChannelScalarFieldEnum = (typeof SalesChannelScalarFieldEnum)[keyof typeof SalesChannelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'Roles[]'
   */
  export type ListEnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ProductTypes'
   */
  export type EnumProductTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductTypes'>
    


  /**
   * Reference to a field of type 'ProductTypes[]'
   */
  export type ListEnumProductTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductTypes[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CustomerCategories'
   */
  export type EnumCustomerCategoriesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerCategories'>
    


  /**
   * Reference to a field of type 'CustomerCategories[]'
   */
  export type ListEnumCustomerCategoriesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerCategories[]'>
    


  /**
   * Reference to a field of type 'CustomerStatuses'
   */
  export type EnumCustomerStatusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerStatuses'>
    


  /**
   * Reference to a field of type 'CustomerStatuses[]'
   */
  export type ListEnumCustomerStatusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerStatuses[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    fullname?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRolesNullableFilter<"User"> | $Enums.Roles | null
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRolesNullableFilter<"User"> | $Enums.Roles | null
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    fullname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRolesNullableWithAggregatesFilter<"User"> | $Enums.Roles | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: UuidFilter<"Category"> | string
    name?: StringNullableFilter<"Category"> | string | null
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringNullableFilter<"Category"> | string | null
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Category"> | string
    name?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: UuidFilter<"Product"> | string
    categoryId?: UuidNullableFilter<"Product"> | string | null
    name?: StringNullableFilter<"Product"> | string | null
    type?: EnumProductTypesNullableFilter<"Product"> | $Enums.ProductTypes | null
    description?: StringNullableFilter<"Product"> | string | null
    weight?: FloatNullableFilter<"Product"> | number | null
    isPublish?: BoolNullableFilter<"Product"> | boolean | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    productVariants?: ProductVariantListRelationFilter
    orderDetails?: OrderDetailListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    isPublish?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    productVariants?: ProductVariantOrderByRelationAggregateInput
    orderDetails?: OrderDetailOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    categoryId?: UuidNullableFilter<"Product"> | string | null
    name?: StringNullableFilter<"Product"> | string | null
    type?: EnumProductTypesNullableFilter<"Product"> | $Enums.ProductTypes | null
    description?: StringNullableFilter<"Product"> | string | null
    weight?: FloatNullableFilter<"Product"> | number | null
    isPublish?: BoolNullableFilter<"Product"> | boolean | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    productVariants?: ProductVariantListRelationFilter
    orderDetails?: OrderDetailListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    isPublish?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Product"> | string
    categoryId?: UuidNullableWithAggregatesFilter<"Product"> | string | null
    name?: StringNullableWithAggregatesFilter<"Product"> | string | null
    type?: EnumProductTypesNullableWithAggregatesFilter<"Product"> | $Enums.ProductTypes | null
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    weight?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    isPublish?: BoolNullableWithAggregatesFilter<"Product"> | boolean | null
  }

  export type ProductWholesalerWhereInput = {
    AND?: ProductWholesalerWhereInput | ProductWholesalerWhereInput[]
    OR?: ProductWholesalerWhereInput[]
    NOT?: ProductWholesalerWhereInput | ProductWholesalerWhereInput[]
    id?: UuidFilter<"ProductWholesaler"> | string
    productVariantId?: UuidNullableFilter<"ProductWholesaler"> | string | null
    lowerLimitItem?: IntNullableFilter<"ProductWholesaler"> | number | null
    upperLimitItem?: IntNullableFilter<"ProductWholesaler"> | number | null
    unitPrice?: FloatNullableFilter<"ProductWholesaler"> | number | null
    wholesalerPrice?: FloatNullableFilter<"ProductWholesaler"> | number | null
    productVariant?: XOR<ProductVariantNullableScalarRelationFilter, ProductVariantWhereInput> | null
  }

  export type ProductWholesalerOrderByWithRelationInput = {
    id?: SortOrder
    productVariantId?: SortOrderInput | SortOrder
    lowerLimitItem?: SortOrderInput | SortOrder
    upperLimitItem?: SortOrderInput | SortOrder
    unitPrice?: SortOrderInput | SortOrder
    wholesalerPrice?: SortOrderInput | SortOrder
    productVariant?: ProductVariantOrderByWithRelationInput
  }

  export type ProductWholesalerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWholesalerWhereInput | ProductWholesalerWhereInput[]
    OR?: ProductWholesalerWhereInput[]
    NOT?: ProductWholesalerWhereInput | ProductWholesalerWhereInput[]
    productVariantId?: UuidNullableFilter<"ProductWholesaler"> | string | null
    lowerLimitItem?: IntNullableFilter<"ProductWholesaler"> | number | null
    upperLimitItem?: IntNullableFilter<"ProductWholesaler"> | number | null
    unitPrice?: FloatNullableFilter<"ProductWholesaler"> | number | null
    wholesalerPrice?: FloatNullableFilter<"ProductWholesaler"> | number | null
    productVariant?: XOR<ProductVariantNullableScalarRelationFilter, ProductVariantWhereInput> | null
  }, "id">

  export type ProductWholesalerOrderByWithAggregationInput = {
    id?: SortOrder
    productVariantId?: SortOrderInput | SortOrder
    lowerLimitItem?: SortOrderInput | SortOrder
    upperLimitItem?: SortOrderInput | SortOrder
    unitPrice?: SortOrderInput | SortOrder
    wholesalerPrice?: SortOrderInput | SortOrder
    _count?: ProductWholesalerCountOrderByAggregateInput
    _avg?: ProductWholesalerAvgOrderByAggregateInput
    _max?: ProductWholesalerMaxOrderByAggregateInput
    _min?: ProductWholesalerMinOrderByAggregateInput
    _sum?: ProductWholesalerSumOrderByAggregateInput
  }

  export type ProductWholesalerScalarWhereWithAggregatesInput = {
    AND?: ProductWholesalerScalarWhereWithAggregatesInput | ProductWholesalerScalarWhereWithAggregatesInput[]
    OR?: ProductWholesalerScalarWhereWithAggregatesInput[]
    NOT?: ProductWholesalerScalarWhereWithAggregatesInput | ProductWholesalerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductWholesaler"> | string
    productVariantId?: UuidNullableWithAggregatesFilter<"ProductWholesaler"> | string | null
    lowerLimitItem?: IntNullableWithAggregatesFilter<"ProductWholesaler"> | number | null
    upperLimitItem?: IntNullableWithAggregatesFilter<"ProductWholesaler"> | number | null
    unitPrice?: FloatNullableWithAggregatesFilter<"ProductWholesaler"> | number | null
    wholesalerPrice?: FloatNullableWithAggregatesFilter<"ProductWholesaler"> | number | null
  }

  export type ProductPriceWhereInput = {
    AND?: ProductPriceWhereInput | ProductPriceWhereInput[]
    OR?: ProductPriceWhereInput[]
    NOT?: ProductPriceWhereInput | ProductPriceWhereInput[]
    id?: UuidFilter<"ProductPrice"> | string
    productVariantId?: UuidNullableFilter<"ProductPrice"> | string | null
    normal?: FloatNullableFilter<"ProductPrice"> | number | null
    buy?: FloatNullableFilter<"ProductPrice"> | number | null
    reseller?: FloatNullableFilter<"ProductPrice"> | number | null
    agent?: FloatNullableFilter<"ProductPrice"> | number | null
    member?: FloatNullableFilter<"ProductPrice"> | number | null
    productVariant?: XOR<ProductVariantNullableScalarRelationFilter, ProductVariantWhereInput> | null
  }

  export type ProductPriceOrderByWithRelationInput = {
    id?: SortOrder
    productVariantId?: SortOrderInput | SortOrder
    normal?: SortOrderInput | SortOrder
    buy?: SortOrderInput | SortOrder
    reseller?: SortOrderInput | SortOrder
    agent?: SortOrderInput | SortOrder
    member?: SortOrderInput | SortOrder
    productVariant?: ProductVariantOrderByWithRelationInput
  }

  export type ProductPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductPriceWhereInput | ProductPriceWhereInput[]
    OR?: ProductPriceWhereInput[]
    NOT?: ProductPriceWhereInput | ProductPriceWhereInput[]
    productVariantId?: UuidNullableFilter<"ProductPrice"> | string | null
    normal?: FloatNullableFilter<"ProductPrice"> | number | null
    buy?: FloatNullableFilter<"ProductPrice"> | number | null
    reseller?: FloatNullableFilter<"ProductPrice"> | number | null
    agent?: FloatNullableFilter<"ProductPrice"> | number | null
    member?: FloatNullableFilter<"ProductPrice"> | number | null
    productVariant?: XOR<ProductVariantNullableScalarRelationFilter, ProductVariantWhereInput> | null
  }, "id">

  export type ProductPriceOrderByWithAggregationInput = {
    id?: SortOrder
    productVariantId?: SortOrderInput | SortOrder
    normal?: SortOrderInput | SortOrder
    buy?: SortOrderInput | SortOrder
    reseller?: SortOrderInput | SortOrder
    agent?: SortOrderInput | SortOrder
    member?: SortOrderInput | SortOrder
    _count?: ProductPriceCountOrderByAggregateInput
    _avg?: ProductPriceAvgOrderByAggregateInput
    _max?: ProductPriceMaxOrderByAggregateInput
    _min?: ProductPriceMinOrderByAggregateInput
    _sum?: ProductPriceSumOrderByAggregateInput
  }

  export type ProductPriceScalarWhereWithAggregatesInput = {
    AND?: ProductPriceScalarWhereWithAggregatesInput | ProductPriceScalarWhereWithAggregatesInput[]
    OR?: ProductPriceScalarWhereWithAggregatesInput[]
    NOT?: ProductPriceScalarWhereWithAggregatesInput | ProductPriceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductPrice"> | string
    productVariantId?: UuidNullableWithAggregatesFilter<"ProductPrice"> | string | null
    normal?: FloatNullableWithAggregatesFilter<"ProductPrice"> | number | null
    buy?: FloatNullableWithAggregatesFilter<"ProductPrice"> | number | null
    reseller?: FloatNullableWithAggregatesFilter<"ProductPrice"> | number | null
    agent?: FloatNullableWithAggregatesFilter<"ProductPrice"> | number | null
    member?: FloatNullableWithAggregatesFilter<"ProductPrice"> | number | null
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: UuidFilter<"ProductVariant"> | string
    productId?: UuidNullableFilter<"ProductVariant"> | string | null
    sku?: StringNullableFilter<"ProductVariant"> | string | null
    stock?: IntNullableFilter<"ProductVariant"> | number | null
    size?: StringNullableFilter<"ProductVariant"> | string | null
    color?: StringNullableFilter<"ProductVariant"> | string | null
    imageUrl?: StringNullableFilter<"ProductVariant"> | string | null
    barcode?: StringNullableFilter<"ProductVariant"> | string | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    productPrices?: ProductPriceListRelationFilter
    ProductWholesaler?: ProductWholesalerListRelationFilter
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    productPrices?: ProductPriceOrderByRelationAggregateInput
    ProductWholesaler?: ProductWholesalerOrderByRelationAggregateInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    productId?: UuidNullableFilter<"ProductVariant"> | string | null
    sku?: StringNullableFilter<"ProductVariant"> | string | null
    stock?: IntNullableFilter<"ProductVariant"> | number | null
    size?: StringNullableFilter<"ProductVariant"> | string | null
    color?: StringNullableFilter<"ProductVariant"> | string | null
    imageUrl?: StringNullableFilter<"ProductVariant"> | string | null
    barcode?: StringNullableFilter<"ProductVariant"> | string | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    productPrices?: ProductPriceListRelationFilter
    ProductWholesaler?: ProductWholesalerListRelationFilter
  }, "id">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _avg?: ProductVariantAvgOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
    _sum?: ProductVariantSumOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductVariant"> | string
    productId?: UuidNullableWithAggregatesFilter<"ProductVariant"> | string | null
    sku?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    stock?: IntNullableWithAggregatesFilter<"ProductVariant"> | number | null
    size?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    color?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    barcode?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: UuidFilter<"Customer"> | string
    name?: StringNullableFilter<"Customer"> | string | null
    category?: EnumCustomerCategoriesNullableFilter<"Customer"> | $Enums.CustomerCategories | null
    address?: StringNullableFilter<"Customer"> | string | null
    subdistrict?: StringNullableFilter<"Customer"> | string | null
    postalCode?: StringNullableFilter<"Customer"> | string | null
    phoneNumber?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    status?: EnumCustomerStatusesNullableFilter<"Customer"> | $Enums.CustomerStatuses | null
    ordersAsOrderer?: OrderListRelationFilter
    ordersAsDeliveryTarget?: OrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    subdistrict?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    ordersAsOrderer?: OrderOrderByRelationAggregateInput
    ordersAsDeliveryTarget?: OrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringNullableFilter<"Customer"> | string | null
    category?: EnumCustomerCategoriesNullableFilter<"Customer"> | $Enums.CustomerCategories | null
    address?: StringNullableFilter<"Customer"> | string | null
    subdistrict?: StringNullableFilter<"Customer"> | string | null
    postalCode?: StringNullableFilter<"Customer"> | string | null
    phoneNumber?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    status?: EnumCustomerStatusesNullableFilter<"Customer"> | $Enums.CustomerStatuses | null
    ordersAsOrderer?: OrderListRelationFilter
    ordersAsDeliveryTarget?: OrderListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    subdistrict?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Customer"> | string
    name?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    category?: EnumCustomerCategoriesNullableWithAggregatesFilter<"Customer"> | $Enums.CustomerCategories | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    subdistrict?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    status?: EnumCustomerStatusesNullableWithAggregatesFilter<"Customer"> | $Enums.CustomerStatuses | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: UuidFilter<"Order"> | string
    ordererCustomerId?: UuidNullableFilter<"Order"> | string | null
    deliveryTargetCustomerId?: UuidNullableFilter<"Order"> | string | null
    senderPlace?: StringNullableFilter<"Order"> | string | null
    orderDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    salesChannel?: StringNullableFilter<"Order"> | string | null
    note?: StringNullableFilter<"Order"> | string | null
    ordererCustomer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    deliveryTargetCustomer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    ordererCustomerId?: SortOrderInput | SortOrder
    deliveryTargetCustomerId?: SortOrderInput | SortOrder
    senderPlace?: SortOrderInput | SortOrder
    orderDate?: SortOrderInput | SortOrder
    salesChannel?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    ordererCustomer?: CustomerOrderByWithRelationInput
    deliveryTargetCustomer?: CustomerOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    ordererCustomerId?: UuidNullableFilter<"Order"> | string | null
    deliveryTargetCustomerId?: UuidNullableFilter<"Order"> | string | null
    senderPlace?: StringNullableFilter<"Order"> | string | null
    orderDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    salesChannel?: StringNullableFilter<"Order"> | string | null
    note?: StringNullableFilter<"Order"> | string | null
    ordererCustomer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    deliveryTargetCustomer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    ordererCustomerId?: SortOrderInput | SortOrder
    deliveryTargetCustomerId?: SortOrderInput | SortOrder
    senderPlace?: SortOrderInput | SortOrder
    orderDate?: SortOrderInput | SortOrder
    salesChannel?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Order"> | string
    ordererCustomerId?: UuidNullableWithAggregatesFilter<"Order"> | string | null
    deliveryTargetCustomerId?: UuidNullableWithAggregatesFilter<"Order"> | string | null
    senderPlace?: StringNullableWithAggregatesFilter<"Order"> | string | null
    orderDate?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    salesChannel?: StringNullableWithAggregatesFilter<"Order"> | string | null
    note?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type OrderDetailWhereInput = {
    AND?: OrderDetailWhereInput | OrderDetailWhereInput[]
    OR?: OrderDetailWhereInput[]
    NOT?: OrderDetailWhereInput | OrderDetailWhereInput[]
    id?: UuidFilter<"OrderDetail"> | string
    productId?: UuidNullableFilter<"OrderDetail"> | string | null
    paymentMethodId?: UuidNullableFilter<"OrderDetail"> | string | null
    code?: StringNullableFilter<"OrderDetail"> | string | null
    productQty?: IntNullableFilter<"OrderDetail"> | number | null
    courierName?: StringNullableFilter<"OrderDetail"> | string | null
    courierCategory?: StringNullableFilter<"OrderDetail"> | string | null
    courierEta?: StringNullableFilter<"OrderDetail"> | string | null
    courierCost?: StringNullableFilter<"OrderDetail"> | string | null
    otherFees?: JsonNullableFilter<"OrderDetail">
    finalPrice?: FloatNullableFilter<"OrderDetail"> | number | null
    paymentStatus?: EnumPaymentStatusNullableFilter<"OrderDetail"> | $Enums.PaymentStatus | null
    paymentDate?: DateTimeNullableFilter<"OrderDetail"> | Date | string | null
    receiptNumber?: StringNullableFilter<"OrderDetail"> | string | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    paymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
  }

  export type OrderDetailOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    paymentMethodId?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    productQty?: SortOrderInput | SortOrder
    courierName?: SortOrderInput | SortOrder
    courierCategory?: SortOrderInput | SortOrder
    courierEta?: SortOrderInput | SortOrder
    courierCost?: SortOrderInput | SortOrder
    otherFees?: SortOrderInput | SortOrder
    finalPrice?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    receiptNumber?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    paymentMethod?: PaymentMethodOrderByWithRelationInput
  }

  export type OrderDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderDetailWhereInput | OrderDetailWhereInput[]
    OR?: OrderDetailWhereInput[]
    NOT?: OrderDetailWhereInput | OrderDetailWhereInput[]
    productId?: UuidNullableFilter<"OrderDetail"> | string | null
    paymentMethodId?: UuidNullableFilter<"OrderDetail"> | string | null
    code?: StringNullableFilter<"OrderDetail"> | string | null
    productQty?: IntNullableFilter<"OrderDetail"> | number | null
    courierName?: StringNullableFilter<"OrderDetail"> | string | null
    courierCategory?: StringNullableFilter<"OrderDetail"> | string | null
    courierEta?: StringNullableFilter<"OrderDetail"> | string | null
    courierCost?: StringNullableFilter<"OrderDetail"> | string | null
    otherFees?: JsonNullableFilter<"OrderDetail">
    finalPrice?: FloatNullableFilter<"OrderDetail"> | number | null
    paymentStatus?: EnumPaymentStatusNullableFilter<"OrderDetail"> | $Enums.PaymentStatus | null
    paymentDate?: DateTimeNullableFilter<"OrderDetail"> | Date | string | null
    receiptNumber?: StringNullableFilter<"OrderDetail"> | string | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    paymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
  }, "id">

  export type OrderDetailOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    paymentMethodId?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    productQty?: SortOrderInput | SortOrder
    courierName?: SortOrderInput | SortOrder
    courierCategory?: SortOrderInput | SortOrder
    courierEta?: SortOrderInput | SortOrder
    courierCost?: SortOrderInput | SortOrder
    otherFees?: SortOrderInput | SortOrder
    finalPrice?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    receiptNumber?: SortOrderInput | SortOrder
    _count?: OrderDetailCountOrderByAggregateInput
    _avg?: OrderDetailAvgOrderByAggregateInput
    _max?: OrderDetailMaxOrderByAggregateInput
    _min?: OrderDetailMinOrderByAggregateInput
    _sum?: OrderDetailSumOrderByAggregateInput
  }

  export type OrderDetailScalarWhereWithAggregatesInput = {
    AND?: OrderDetailScalarWhereWithAggregatesInput | OrderDetailScalarWhereWithAggregatesInput[]
    OR?: OrderDetailScalarWhereWithAggregatesInput[]
    NOT?: OrderDetailScalarWhereWithAggregatesInput | OrderDetailScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OrderDetail"> | string
    productId?: UuidNullableWithAggregatesFilter<"OrderDetail"> | string | null
    paymentMethodId?: UuidNullableWithAggregatesFilter<"OrderDetail"> | string | null
    code?: StringNullableWithAggregatesFilter<"OrderDetail"> | string | null
    productQty?: IntNullableWithAggregatesFilter<"OrderDetail"> | number | null
    courierName?: StringNullableWithAggregatesFilter<"OrderDetail"> | string | null
    courierCategory?: StringNullableWithAggregatesFilter<"OrderDetail"> | string | null
    courierEta?: StringNullableWithAggregatesFilter<"OrderDetail"> | string | null
    courierCost?: StringNullableWithAggregatesFilter<"OrderDetail"> | string | null
    otherFees?: JsonNullableWithAggregatesFilter<"OrderDetail">
    finalPrice?: FloatNullableWithAggregatesFilter<"OrderDetail"> | number | null
    paymentStatus?: EnumPaymentStatusNullableWithAggregatesFilter<"OrderDetail"> | $Enums.PaymentStatus | null
    paymentDate?: DateTimeNullableWithAggregatesFilter<"OrderDetail"> | Date | string | null
    receiptNumber?: StringNullableWithAggregatesFilter<"OrderDetail"> | string | null
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    id?: UuidFilter<"PaymentMethod"> | string
    name?: StringNullableFilter<"PaymentMethod"> | string | null
    bankName?: StringNullableFilter<"PaymentMethod"> | string | null
    bankBranch?: StringNullableFilter<"PaymentMethod"> | string | null
    accountNumber?: StringNullableFilter<"PaymentMethod"> | string | null
    orderDetails?: OrderDetailListRelationFilter
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankBranch?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    orderDetails?: OrderDetailOrderByRelationAggregateInput
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    name?: StringNullableFilter<"PaymentMethod"> | string | null
    bankName?: StringNullableFilter<"PaymentMethod"> | string | null
    bankBranch?: StringNullableFilter<"PaymentMethod"> | string | null
    accountNumber?: StringNullableFilter<"PaymentMethod"> | string | null
    orderDetails?: OrderDetailListRelationFilter
  }, "id">

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankBranch?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PaymentMethod"> | string
    name?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    bankBranch?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    accountNumber?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
  }

  export type DeliveryPlaceWhereInput = {
    AND?: DeliveryPlaceWhereInput | DeliveryPlaceWhereInput[]
    OR?: DeliveryPlaceWhereInput[]
    NOT?: DeliveryPlaceWhereInput | DeliveryPlaceWhereInput[]
    id?: UuidFilter<"DeliveryPlace"> | string
    name?: StringNullableFilter<"DeliveryPlace"> | string | null
    address?: StringNullableFilter<"DeliveryPlace"> | string | null
    subdistrict?: StringNullableFilter<"DeliveryPlace"> | string | null
    phoneNumber?: StringNullableFilter<"DeliveryPlace"> | string | null
    email?: StringNullableFilter<"DeliveryPlace"> | string | null
  }

  export type DeliveryPlaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    subdistrict?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
  }

  export type DeliveryPlaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeliveryPlaceWhereInput | DeliveryPlaceWhereInput[]
    OR?: DeliveryPlaceWhereInput[]
    NOT?: DeliveryPlaceWhereInput | DeliveryPlaceWhereInput[]
    name?: StringNullableFilter<"DeliveryPlace"> | string | null
    address?: StringNullableFilter<"DeliveryPlace"> | string | null
    subdistrict?: StringNullableFilter<"DeliveryPlace"> | string | null
    phoneNumber?: StringNullableFilter<"DeliveryPlace"> | string | null
    email?: StringNullableFilter<"DeliveryPlace"> | string | null
  }, "id">

  export type DeliveryPlaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    subdistrict?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: DeliveryPlaceCountOrderByAggregateInput
    _max?: DeliveryPlaceMaxOrderByAggregateInput
    _min?: DeliveryPlaceMinOrderByAggregateInput
  }

  export type DeliveryPlaceScalarWhereWithAggregatesInput = {
    AND?: DeliveryPlaceScalarWhereWithAggregatesInput | DeliveryPlaceScalarWhereWithAggregatesInput[]
    OR?: DeliveryPlaceScalarWhereWithAggregatesInput[]
    NOT?: DeliveryPlaceScalarWhereWithAggregatesInput | DeliveryPlaceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DeliveryPlace"> | string
    name?: StringNullableWithAggregatesFilter<"DeliveryPlace"> | string | null
    address?: StringNullableWithAggregatesFilter<"DeliveryPlace"> | string | null
    subdistrict?: StringNullableWithAggregatesFilter<"DeliveryPlace"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"DeliveryPlace"> | string | null
    email?: StringNullableWithAggregatesFilter<"DeliveryPlace"> | string | null
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: UuidFilter<"Expense"> | string
    itemName?: StringNullableFilter<"Expense"> | string | null
    itemPrice?: StringNullableFilter<"Expense"> | string | null
    itemTotal?: IntNullableFilter<"Expense"> | number | null
    totalPrice?: FloatNullableFilter<"Expense"> | number | null
    personResponsible?: StringNullableFilter<"Expense"> | string | null
    note?: StringNullableFilter<"Expense"> | string | null
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    itemName?: SortOrderInput | SortOrder
    itemPrice?: SortOrderInput | SortOrder
    itemTotal?: SortOrderInput | SortOrder
    totalPrice?: SortOrderInput | SortOrder
    personResponsible?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    itemName?: StringNullableFilter<"Expense"> | string | null
    itemPrice?: StringNullableFilter<"Expense"> | string | null
    itemTotal?: IntNullableFilter<"Expense"> | number | null
    totalPrice?: FloatNullableFilter<"Expense"> | number | null
    personResponsible?: StringNullableFilter<"Expense"> | string | null
    note?: StringNullableFilter<"Expense"> | string | null
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    itemName?: SortOrderInput | SortOrder
    itemPrice?: SortOrderInput | SortOrder
    itemTotal?: SortOrderInput | SortOrder
    totalPrice?: SortOrderInput | SortOrder
    personResponsible?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Expense"> | string
    itemName?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    itemPrice?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    itemTotal?: IntNullableWithAggregatesFilter<"Expense"> | number | null
    totalPrice?: FloatNullableWithAggregatesFilter<"Expense"> | number | null
    personResponsible?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    note?: StringNullableWithAggregatesFilter<"Expense"> | string | null
  }

  export type ShopSettingWhereInput = {
    AND?: ShopSettingWhereInput | ShopSettingWhereInput[]
    OR?: ShopSettingWhereInput[]
    NOT?: ShopSettingWhereInput | ShopSettingWhereInput[]
    id?: UuidFilter<"ShopSetting"> | string
    name?: StringNullableFilter<"ShopSetting"> | string | null
    description?: StringNullableFilter<"ShopSetting"> | string | null
    email?: StringNullableFilter<"ShopSetting"> | string | null
    phoneNumber?: StringNullableFilter<"ShopSetting"> | string | null
    address?: StringNullableFilter<"ShopSetting"> | string | null
    owner?: StringNullableFilter<"ShopSetting"> | string | null
    logo?: StringNullableFilter<"ShopSetting"> | string | null
    banner?: StringNullableFilter<"ShopSetting"> | string | null
  }

  export type ShopSettingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    owner?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
  }

  export type ShopSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopSettingWhereInput | ShopSettingWhereInput[]
    OR?: ShopSettingWhereInput[]
    NOT?: ShopSettingWhereInput | ShopSettingWhereInput[]
    name?: StringNullableFilter<"ShopSetting"> | string | null
    description?: StringNullableFilter<"ShopSetting"> | string | null
    email?: StringNullableFilter<"ShopSetting"> | string | null
    phoneNumber?: StringNullableFilter<"ShopSetting"> | string | null
    address?: StringNullableFilter<"ShopSetting"> | string | null
    owner?: StringNullableFilter<"ShopSetting"> | string | null
    logo?: StringNullableFilter<"ShopSetting"> | string | null
    banner?: StringNullableFilter<"ShopSetting"> | string | null
  }, "id">

  export type ShopSettingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    owner?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    _count?: ShopSettingCountOrderByAggregateInput
    _max?: ShopSettingMaxOrderByAggregateInput
    _min?: ShopSettingMinOrderByAggregateInput
  }

  export type ShopSettingScalarWhereWithAggregatesInput = {
    AND?: ShopSettingScalarWhereWithAggregatesInput | ShopSettingScalarWhereWithAggregatesInput[]
    OR?: ShopSettingScalarWhereWithAggregatesInput[]
    NOT?: ShopSettingScalarWhereWithAggregatesInput | ShopSettingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ShopSetting"> | string
    name?: StringNullableWithAggregatesFilter<"ShopSetting"> | string | null
    description?: StringNullableWithAggregatesFilter<"ShopSetting"> | string | null
    email?: StringNullableWithAggregatesFilter<"ShopSetting"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"ShopSetting"> | string | null
    address?: StringNullableWithAggregatesFilter<"ShopSetting"> | string | null
    owner?: StringNullableWithAggregatesFilter<"ShopSetting"> | string | null
    logo?: StringNullableWithAggregatesFilter<"ShopSetting"> | string | null
    banner?: StringNullableWithAggregatesFilter<"ShopSetting"> | string | null
  }

  export type SalesChannelWhereInput = {
    AND?: SalesChannelWhereInput | SalesChannelWhereInput[]
    OR?: SalesChannelWhereInput[]
    NOT?: SalesChannelWhereInput | SalesChannelWhereInput[]
    id?: UuidFilter<"SalesChannel"> | string
    name?: StringNullableFilter<"SalesChannel"> | string | null
    isActive?: BoolNullableFilter<"SalesChannel"> | boolean | null
  }

  export type SalesChannelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
  }

  export type SalesChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesChannelWhereInput | SalesChannelWhereInput[]
    OR?: SalesChannelWhereInput[]
    NOT?: SalesChannelWhereInput | SalesChannelWhereInput[]
    name?: StringNullableFilter<"SalesChannel"> | string | null
    isActive?: BoolNullableFilter<"SalesChannel"> | boolean | null
  }, "id">

  export type SalesChannelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    _count?: SalesChannelCountOrderByAggregateInput
    _max?: SalesChannelMaxOrderByAggregateInput
    _min?: SalesChannelMinOrderByAggregateInput
  }

  export type SalesChannelScalarWhereWithAggregatesInput = {
    AND?: SalesChannelScalarWhereWithAggregatesInput | SalesChannelScalarWhereWithAggregatesInput[]
    OR?: SalesChannelScalarWhereWithAggregatesInput[]
    NOT?: SalesChannelScalarWhereWithAggregatesInput | SalesChannelScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SalesChannel"> | string
    name?: StringNullableWithAggregatesFilter<"SalesChannel"> | string | null
    isActive?: BoolNullableWithAggregatesFilter<"SalesChannel"> | boolean | null
  }

  export type UserCreateInput = {
    id?: string
    fullname?: string | null
    email?: string | null
    password?: string | null
    role?: $Enums.Roles | null
    createdAt?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullname?: string | null
    email?: string | null
    password?: string | null
    role?: $Enums.Roles | null
    createdAt?: Date | string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | $Enums.Roles | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | $Enums.Roles | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    fullname?: string | null
    email?: string | null
    password?: string | null
    role?: $Enums.Roles | null
    createdAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | $Enums.Roles | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | $Enums.Roles | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name?: string | null
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateInput = {
    id?: string
    name?: string | null
    type?: $Enums.ProductTypes | null
    description?: string | null
    weight?: number | null
    isPublish?: boolean | null
    category?: CategoryCreateNestedOneWithoutProductsInput
    productVariants?: ProductVariantCreateNestedManyWithoutProductInput
    orderDetails?: OrderDetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    categoryId?: string | null
    name?: string | null
    type?: $Enums.ProductTypes | null
    description?: string | null
    weight?: number | null
    isPublish?: boolean | null
    productVariants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    orderDetails?: OrderDetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumProductTypesFieldUpdateOperationsInput | $Enums.ProductTypes | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    isPublish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: CategoryUpdateOneWithoutProductsNestedInput
    productVariants?: ProductVariantUpdateManyWithoutProductNestedInput
    orderDetails?: OrderDetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumProductTypesFieldUpdateOperationsInput | $Enums.ProductTypes | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    isPublish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productVariants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    orderDetails?: OrderDetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    categoryId?: string | null
    name?: string | null
    type?: $Enums.ProductTypes | null
    description?: string | null
    weight?: number | null
    isPublish?: boolean | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumProductTypesFieldUpdateOperationsInput | $Enums.ProductTypes | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    isPublish?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumProductTypesFieldUpdateOperationsInput | $Enums.ProductTypes | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    isPublish?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductWholesalerCreateInput = {
    id?: string
    lowerLimitItem?: number | null
    upperLimitItem?: number | null
    unitPrice?: number | null
    wholesalerPrice?: number | null
    productVariant?: ProductVariantCreateNestedOneWithoutProductWholesalerInput
  }

  export type ProductWholesalerUncheckedCreateInput = {
    id?: string
    productVariantId?: string | null
    lowerLimitItem?: number | null
    upperLimitItem?: number | null
    unitPrice?: number | null
    wholesalerPrice?: number | null
  }

  export type ProductWholesalerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lowerLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    upperLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    wholesalerPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    productVariant?: ProductVariantUpdateOneWithoutProductWholesalerNestedInput
  }

  export type ProductWholesalerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    lowerLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    upperLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    wholesalerPrice?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductWholesalerCreateManyInput = {
    id?: string
    productVariantId?: string | null
    lowerLimitItem?: number | null
    upperLimitItem?: number | null
    unitPrice?: number | null
    wholesalerPrice?: number | null
  }

  export type ProductWholesalerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lowerLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    upperLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    wholesalerPrice?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductWholesalerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    lowerLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    upperLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    wholesalerPrice?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductPriceCreateInput = {
    id?: string
    normal?: number | null
    buy?: number | null
    reseller?: number | null
    agent?: number | null
    member?: number | null
    productVariant?: ProductVariantCreateNestedOneWithoutProductPricesInput
  }

  export type ProductPriceUncheckedCreateInput = {
    id?: string
    productVariantId?: string | null
    normal?: number | null
    buy?: number | null
    reseller?: number | null
    agent?: number | null
    member?: number | null
  }

  export type ProductPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    normal?: NullableFloatFieldUpdateOperationsInput | number | null
    buy?: NullableFloatFieldUpdateOperationsInput | number | null
    reseller?: NullableFloatFieldUpdateOperationsInput | number | null
    agent?: NullableFloatFieldUpdateOperationsInput | number | null
    member?: NullableFloatFieldUpdateOperationsInput | number | null
    productVariant?: ProductVariantUpdateOneWithoutProductPricesNestedInput
  }

  export type ProductPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    normal?: NullableFloatFieldUpdateOperationsInput | number | null
    buy?: NullableFloatFieldUpdateOperationsInput | number | null
    reseller?: NullableFloatFieldUpdateOperationsInput | number | null
    agent?: NullableFloatFieldUpdateOperationsInput | number | null
    member?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductPriceCreateManyInput = {
    id?: string
    productVariantId?: string | null
    normal?: number | null
    buy?: number | null
    reseller?: number | null
    agent?: number | null
    member?: number | null
  }

  export type ProductPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    normal?: NullableFloatFieldUpdateOperationsInput | number | null
    buy?: NullableFloatFieldUpdateOperationsInput | number | null
    reseller?: NullableFloatFieldUpdateOperationsInput | number | null
    agent?: NullableFloatFieldUpdateOperationsInput | number | null
    member?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    normal?: NullableFloatFieldUpdateOperationsInput | number | null
    buy?: NullableFloatFieldUpdateOperationsInput | number | null
    reseller?: NullableFloatFieldUpdateOperationsInput | number | null
    agent?: NullableFloatFieldUpdateOperationsInput | number | null
    member?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductVariantCreateInput = {
    id?: string
    sku?: string | null
    stock?: number | null
    size?: string | null
    color?: string | null
    imageUrl?: string | null
    barcode?: string | null
    product?: ProductCreateNestedOneWithoutProductVariantsInput
    productPrices?: ProductPriceCreateNestedManyWithoutProductVariantInput
    ProductWholesaler?: ProductWholesalerCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: string
    productId?: string | null
    sku?: string | null
    stock?: number | null
    size?: string | null
    color?: string | null
    imageUrl?: string | null
    barcode?: string | null
    productPrices?: ProductPriceUncheckedCreateNestedManyWithoutProductVariantInput
    ProductWholesaler?: ProductWholesalerUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneWithoutProductVariantsNestedInput
    productPrices?: ProductPriceUpdateManyWithoutProductVariantNestedInput
    ProductWholesaler?: ProductWholesalerUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productPrices?: ProductPriceUncheckedUpdateManyWithoutProductVariantNestedInput
    ProductWholesaler?: ProductWholesalerUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantCreateManyInput = {
    id?: string
    productId?: string | null
    sku?: string | null
    stock?: number | null
    size?: string | null
    color?: string | null
    imageUrl?: string | null
    barcode?: string | null
  }

  export type ProductVariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerCreateInput = {
    id?: string
    name?: string | null
    category?: $Enums.CustomerCategories | null
    address?: string | null
    subdistrict?: string | null
    postalCode?: string | null
    phoneNumber?: string | null
    email?: string | null
    status?: $Enums.CustomerStatuses | null
    ordersAsOrderer?: OrderCreateNestedManyWithoutOrdererCustomerInput
    ordersAsDeliveryTarget?: OrderCreateNestedManyWithoutDeliveryTargetCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name?: string | null
    category?: $Enums.CustomerCategories | null
    address?: string | null
    subdistrict?: string | null
    postalCode?: string | null
    phoneNumber?: string | null
    email?: string | null
    status?: $Enums.CustomerStatuses | null
    ordersAsOrderer?: OrderUncheckedCreateNestedManyWithoutOrdererCustomerInput
    ordersAsDeliveryTarget?: OrderUncheckedCreateNestedManyWithoutDeliveryTargetCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCustomerCategoriesFieldUpdateOperationsInput | $Enums.CustomerCategories | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCustomerStatusesFieldUpdateOperationsInput | $Enums.CustomerStatuses | null
    ordersAsOrderer?: OrderUpdateManyWithoutOrdererCustomerNestedInput
    ordersAsDeliveryTarget?: OrderUpdateManyWithoutDeliveryTargetCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCustomerCategoriesFieldUpdateOperationsInput | $Enums.CustomerCategories | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCustomerStatusesFieldUpdateOperationsInput | $Enums.CustomerStatuses | null
    ordersAsOrderer?: OrderUncheckedUpdateManyWithoutOrdererCustomerNestedInput
    ordersAsDeliveryTarget?: OrderUncheckedUpdateManyWithoutDeliveryTargetCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name?: string | null
    category?: $Enums.CustomerCategories | null
    address?: string | null
    subdistrict?: string | null
    postalCode?: string | null
    phoneNumber?: string | null
    email?: string | null
    status?: $Enums.CustomerStatuses | null
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCustomerCategoriesFieldUpdateOperationsInput | $Enums.CustomerCategories | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCustomerStatusesFieldUpdateOperationsInput | $Enums.CustomerStatuses | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCustomerCategoriesFieldUpdateOperationsInput | $Enums.CustomerCategories | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCustomerStatusesFieldUpdateOperationsInput | $Enums.CustomerStatuses | null
  }

  export type OrderCreateInput = {
    id?: string
    senderPlace?: string | null
    orderDate?: Date | string | null
    salesChannel?: string | null
    note?: string | null
    ordererCustomer?: CustomerCreateNestedOneWithoutOrdersAsOrdererInput
    deliveryTargetCustomer?: CustomerCreateNestedOneWithoutOrdersAsDeliveryTargetInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    ordererCustomerId?: string | null
    deliveryTargetCustomerId?: string | null
    senderPlace?: string | null
    orderDate?: Date | string | null
    salesChannel?: string | null
    note?: string | null
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderPlace?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    ordererCustomer?: CustomerUpdateOneWithoutOrdersAsOrdererNestedInput
    deliveryTargetCustomer?: CustomerUpdateOneWithoutOrdersAsDeliveryTargetNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordererCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTargetCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    senderPlace?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateManyInput = {
    id?: string
    ordererCustomerId?: string | null
    deliveryTargetCustomerId?: string | null
    senderPlace?: string | null
    orderDate?: Date | string | null
    salesChannel?: string | null
    note?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderPlace?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordererCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTargetCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    senderPlace?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailCreateInput = {
    id?: string
    code?: string | null
    productQty?: number | null
    courierName?: string | null
    courierCategory?: string | null
    courierEta?: string | null
    courierCost?: string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: number | null
    paymentStatus?: $Enums.PaymentStatus | null
    paymentDate?: Date | string | null
    receiptNumber?: string | null
    product?: ProductCreateNestedOneWithoutOrderDetailsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailUncheckedCreateInput = {
    id?: string
    productId?: string | null
    paymentMethodId?: string | null
    code?: string | null
    productQty?: number | null
    courierName?: string | null
    courierCategory?: string | null
    courierEta?: string | null
    courierCost?: string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: number | null
    paymentStatus?: $Enums.PaymentStatus | null
    paymentDate?: Date | string | null
    receiptNumber?: string | null
  }

  export type OrderDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    productQty?: NullableIntFieldUpdateOperationsInput | number | null
    courierName?: NullableStringFieldUpdateOperationsInput | string | null
    courierCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courierEta?: NullableStringFieldUpdateOperationsInput | string | null
    courierCost?: NullableStringFieldUpdateOperationsInput | string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneWithoutOrderDetailsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutOrderDetailsNestedInput
  }

  export type OrderDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    productQty?: NullableIntFieldUpdateOperationsInput | number | null
    courierName?: NullableStringFieldUpdateOperationsInput | string | null
    courierCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courierEta?: NullableStringFieldUpdateOperationsInput | string | null
    courierCost?: NullableStringFieldUpdateOperationsInput | string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailCreateManyInput = {
    id?: string
    productId?: string | null
    paymentMethodId?: string | null
    code?: string | null
    productQty?: number | null
    courierName?: string | null
    courierCategory?: string | null
    courierEta?: string | null
    courierCost?: string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: number | null
    paymentStatus?: $Enums.PaymentStatus | null
    paymentDate?: Date | string | null
    receiptNumber?: string | null
  }

  export type OrderDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    productQty?: NullableIntFieldUpdateOperationsInput | number | null
    courierName?: NullableStringFieldUpdateOperationsInput | string | null
    courierCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courierEta?: NullableStringFieldUpdateOperationsInput | string | null
    courierCost?: NullableStringFieldUpdateOperationsInput | string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    productQty?: NullableIntFieldUpdateOperationsInput | number | null
    courierName?: NullableStringFieldUpdateOperationsInput | string | null
    courierCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courierEta?: NullableStringFieldUpdateOperationsInput | string | null
    courierCost?: NullableStringFieldUpdateOperationsInput | string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentMethodCreateInput = {
    id?: string
    name?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountNumber?: string | null
    orderDetails?: OrderDetailCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    id?: string
    name?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountNumber?: string | null
    orderDetails?: OrderDetailUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderDetails?: OrderDetailUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderDetails?: OrderDetailUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodCreateManyInput = {
    id?: string
    name?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountNumber?: string | null
  }

  export type PaymentMethodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryPlaceCreateInput = {
    id?: string
    name?: string | null
    address?: string | null
    subdistrict?: string | null
    phoneNumber?: string | null
    email?: string | null
  }

  export type DeliveryPlaceUncheckedCreateInput = {
    id?: string
    name?: string | null
    address?: string | null
    subdistrict?: string | null
    phoneNumber?: string | null
    email?: string | null
  }

  export type DeliveryPlaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryPlaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryPlaceCreateManyInput = {
    id?: string
    name?: string | null
    address?: string | null
    subdistrict?: string | null
    phoneNumber?: string | null
    email?: string | null
  }

  export type DeliveryPlaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryPlaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseCreateInput = {
    id?: string
    itemName?: string | null
    itemPrice?: string | null
    itemTotal?: number | null
    totalPrice?: number | null
    personResponsible?: string | null
    note?: string | null
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    itemName?: string | null
    itemPrice?: string | null
    itemTotal?: number | null
    totalPrice?: number | null
    personResponsible?: string | null
    note?: string | null
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: NullableStringFieldUpdateOperationsInput | string | null
    itemPrice?: NullableStringFieldUpdateOperationsInput | string | null
    itemTotal?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    personResponsible?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: NullableStringFieldUpdateOperationsInput | string | null
    itemPrice?: NullableStringFieldUpdateOperationsInput | string | null
    itemTotal?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    personResponsible?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseCreateManyInput = {
    id?: string
    itemName?: string | null
    itemPrice?: string | null
    itemTotal?: number | null
    totalPrice?: number | null
    personResponsible?: string | null
    note?: string | null
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: NullableStringFieldUpdateOperationsInput | string | null
    itemPrice?: NullableStringFieldUpdateOperationsInput | string | null
    itemTotal?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    personResponsible?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: NullableStringFieldUpdateOperationsInput | string | null
    itemPrice?: NullableStringFieldUpdateOperationsInput | string | null
    itemTotal?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    personResponsible?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopSettingCreateInput = {
    id?: string
    name?: string | null
    description?: string | null
    email?: string | null
    phoneNumber?: string | null
    address?: string | null
    owner?: string | null
    logo?: string | null
    banner?: string | null
  }

  export type ShopSettingUncheckedCreateInput = {
    id?: string
    name?: string | null
    description?: string | null
    email?: string | null
    phoneNumber?: string | null
    address?: string | null
    owner?: string | null
    logo?: string | null
    banner?: string | null
  }

  export type ShopSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopSettingCreateManyInput = {
    id?: string
    name?: string | null
    description?: string | null
    email?: string | null
    phoneNumber?: string | null
    address?: string | null
    owner?: string | null
    logo?: string | null
    banner?: string | null
  }

  export type ShopSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalesChannelCreateInput = {
    id?: string
    name?: string | null
    isActive?: boolean | null
  }

  export type SalesChannelUncheckedCreateInput = {
    id?: string
    name?: string | null
    isActive?: boolean | null
  }

  export type SalesChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SalesChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SalesChannelCreateManyInput = {
    id?: string
    name?: string | null
    isActive?: boolean | null
  }

  export type SalesChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SalesChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRolesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel> | null
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRolesNullableFilter<$PrismaModel> | $Enums.Roles | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRolesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel> | null
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRolesNullableWithAggregatesFilter<$PrismaModel> | $Enums.Roles | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRolesNullableFilter<$PrismaModel>
    _max?: NestedEnumRolesNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumProductTypesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductTypes | EnumProductTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductTypes[] | ListEnumProductTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductTypes[] | ListEnumProductTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductTypesNullableFilter<$PrismaModel> | $Enums.ProductTypes | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type OrderDetailListRelationFilter = {
    every?: OrderDetailWhereInput
    some?: OrderDetailWhereInput
    none?: OrderDetailWhereInput
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    isPublish?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    isPublish?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    isPublish?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumProductTypesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductTypes | EnumProductTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductTypes[] | ListEnumProductTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductTypes[] | ListEnumProductTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductTypesNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProductTypes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProductTypesNullableFilter<$PrismaModel>
    _max?: NestedEnumProductTypesNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductVariantNullableScalarRelationFilter = {
    is?: ProductVariantWhereInput | null
    isNot?: ProductVariantWhereInput | null
  }

  export type ProductWholesalerCountOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    lowerLimitItem?: SortOrder
    upperLimitItem?: SortOrder
    unitPrice?: SortOrder
    wholesalerPrice?: SortOrder
  }

  export type ProductWholesalerAvgOrderByAggregateInput = {
    lowerLimitItem?: SortOrder
    upperLimitItem?: SortOrder
    unitPrice?: SortOrder
    wholesalerPrice?: SortOrder
  }

  export type ProductWholesalerMaxOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    lowerLimitItem?: SortOrder
    upperLimitItem?: SortOrder
    unitPrice?: SortOrder
    wholesalerPrice?: SortOrder
  }

  export type ProductWholesalerMinOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    lowerLimitItem?: SortOrder
    upperLimitItem?: SortOrder
    unitPrice?: SortOrder
    wholesalerPrice?: SortOrder
  }

  export type ProductWholesalerSumOrderByAggregateInput = {
    lowerLimitItem?: SortOrder
    upperLimitItem?: SortOrder
    unitPrice?: SortOrder
    wholesalerPrice?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductPriceCountOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    normal?: SortOrder
    buy?: SortOrder
    reseller?: SortOrder
    agent?: SortOrder
    member?: SortOrder
  }

  export type ProductPriceAvgOrderByAggregateInput = {
    normal?: SortOrder
    buy?: SortOrder
    reseller?: SortOrder
    agent?: SortOrder
    member?: SortOrder
  }

  export type ProductPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    normal?: SortOrder
    buy?: SortOrder
    reseller?: SortOrder
    agent?: SortOrder
    member?: SortOrder
  }

  export type ProductPriceMinOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
    normal?: SortOrder
    buy?: SortOrder
    reseller?: SortOrder
    agent?: SortOrder
    member?: SortOrder
  }

  export type ProductPriceSumOrderByAggregateInput = {
    normal?: SortOrder
    buy?: SortOrder
    reseller?: SortOrder
    agent?: SortOrder
    member?: SortOrder
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type ProductPriceListRelationFilter = {
    every?: ProductPriceWhereInput
    some?: ProductPriceWhereInput
    none?: ProductPriceWhereInput
  }

  export type ProductWholesalerListRelationFilter = {
    every?: ProductWholesalerWhereInput
    some?: ProductWholesalerWhereInput
    none?: ProductWholesalerWhereInput
  }

  export type ProductPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductWholesalerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    stock?: SortOrder
    size?: SortOrder
    color?: SortOrder
    imageUrl?: SortOrder
    barcode?: SortOrder
  }

  export type ProductVariantAvgOrderByAggregateInput = {
    stock?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    stock?: SortOrder
    size?: SortOrder
    color?: SortOrder
    imageUrl?: SortOrder
    barcode?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    stock?: SortOrder
    size?: SortOrder
    color?: SortOrder
    imageUrl?: SortOrder
    barcode?: SortOrder
  }

  export type ProductVariantSumOrderByAggregateInput = {
    stock?: SortOrder
  }

  export type EnumCustomerCategoriesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerCategories | EnumCustomerCategoriesFieldRefInput<$PrismaModel> | null
    in?: $Enums.CustomerCategories[] | ListEnumCustomerCategoriesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CustomerCategories[] | ListEnumCustomerCategoriesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCustomerCategoriesNullableFilter<$PrismaModel> | $Enums.CustomerCategories | null
  }

  export type EnumCustomerStatusesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerStatuses | EnumCustomerStatusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.CustomerStatuses[] | ListEnumCustomerStatusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CustomerStatuses[] | ListEnumCustomerStatusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCustomerStatusesNullableFilter<$PrismaModel> | $Enums.CustomerStatuses | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    postalCode?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    postalCode?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    postalCode?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type EnumCustomerCategoriesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerCategories | EnumCustomerCategoriesFieldRefInput<$PrismaModel> | null
    in?: $Enums.CustomerCategories[] | ListEnumCustomerCategoriesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CustomerCategories[] | ListEnumCustomerCategoriesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCustomerCategoriesNullableWithAggregatesFilter<$PrismaModel> | $Enums.CustomerCategories | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCustomerCategoriesNullableFilter<$PrismaModel>
    _max?: NestedEnumCustomerCategoriesNullableFilter<$PrismaModel>
  }

  export type EnumCustomerStatusesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerStatuses | EnumCustomerStatusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.CustomerStatuses[] | ListEnumCustomerStatusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CustomerStatuses[] | ListEnumCustomerStatusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCustomerStatusesNullableWithAggregatesFilter<$PrismaModel> | $Enums.CustomerStatuses | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCustomerStatusesNullableFilter<$PrismaModel>
    _max?: NestedEnumCustomerStatusesNullableFilter<$PrismaModel>
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    ordererCustomerId?: SortOrder
    deliveryTargetCustomerId?: SortOrder
    senderPlace?: SortOrder
    orderDate?: SortOrder
    salesChannel?: SortOrder
    note?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    ordererCustomerId?: SortOrder
    deliveryTargetCustomerId?: SortOrder
    senderPlace?: SortOrder
    orderDate?: SortOrder
    salesChannel?: SortOrder
    note?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    ordererCustomerId?: SortOrder
    deliveryTargetCustomerId?: SortOrder
    senderPlace?: SortOrder
    orderDate?: SortOrder
    salesChannel?: SortOrder
    note?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumPaymentStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentStatusNullableFilter<$PrismaModel> | $Enums.PaymentStatus | null
  }

  export type PaymentMethodNullableScalarRelationFilter = {
    is?: PaymentMethodWhereInput | null
    isNot?: PaymentMethodWhereInput | null
  }

  export type OrderDetailCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    paymentMethodId?: SortOrder
    code?: SortOrder
    productQty?: SortOrder
    courierName?: SortOrder
    courierCategory?: SortOrder
    courierEta?: SortOrder
    courierCost?: SortOrder
    otherFees?: SortOrder
    finalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentDate?: SortOrder
    receiptNumber?: SortOrder
  }

  export type OrderDetailAvgOrderByAggregateInput = {
    productQty?: SortOrder
    finalPrice?: SortOrder
  }

  export type OrderDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    paymentMethodId?: SortOrder
    code?: SortOrder
    productQty?: SortOrder
    courierName?: SortOrder
    courierCategory?: SortOrder
    courierEta?: SortOrder
    courierCost?: SortOrder
    finalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentDate?: SortOrder
    receiptNumber?: SortOrder
  }

  export type OrderDetailMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    paymentMethodId?: SortOrder
    code?: SortOrder
    productQty?: SortOrder
    courierName?: SortOrder
    courierCategory?: SortOrder
    courierEta?: SortOrder
    courierCost?: SortOrder
    finalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentDate?: SortOrder
    receiptNumber?: SortOrder
  }

  export type OrderDetailSumOrderByAggregateInput = {
    productQty?: SortOrder
    finalPrice?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bankName?: SortOrder
    bankBranch?: SortOrder
    accountNumber?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bankName?: SortOrder
    bankBranch?: SortOrder
    accountNumber?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bankName?: SortOrder
    bankBranch?: SortOrder
    accountNumber?: SortOrder
  }

  export type DeliveryPlaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
  }

  export type DeliveryPlaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
  }

  export type DeliveryPlaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    itemPrice?: SortOrder
    itemTotal?: SortOrder
    totalPrice?: SortOrder
    personResponsible?: SortOrder
    note?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    itemTotal?: SortOrder
    totalPrice?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    itemPrice?: SortOrder
    itemTotal?: SortOrder
    totalPrice?: SortOrder
    personResponsible?: SortOrder
    note?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    itemPrice?: SortOrder
    itemTotal?: SortOrder
    totalPrice?: SortOrder
    personResponsible?: SortOrder
    note?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    itemTotal?: SortOrder
    totalPrice?: SortOrder
  }

  export type ShopSettingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    owner?: SortOrder
    logo?: SortOrder
    banner?: SortOrder
  }

  export type ShopSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    owner?: SortOrder
    logo?: SortOrder
    banner?: SortOrder
  }

  export type ShopSettingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    owner?: SortOrder
    logo?: SortOrder
    banner?: SortOrder
  }

  export type SalesChannelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type SalesChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type SalesChannelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type OrderDetailCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderDetailCreateWithoutProductInput, OrderDetailUncheckedCreateWithoutProductInput> | OrderDetailCreateWithoutProductInput[] | OrderDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutProductInput | OrderDetailCreateOrConnectWithoutProductInput[]
    createMany?: OrderDetailCreateManyProductInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type OrderDetailUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderDetailCreateWithoutProductInput, OrderDetailUncheckedCreateWithoutProductInput> | OrderDetailCreateWithoutProductInput[] | OrderDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutProductInput | OrderDetailCreateOrConnectWithoutProductInput[]
    createMany?: OrderDetailCreateManyProductInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type NullableEnumProductTypesFieldUpdateOperationsInput = {
    set?: $Enums.ProductTypes | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type OrderDetailUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderDetailCreateWithoutProductInput, OrderDetailUncheckedCreateWithoutProductInput> | OrderDetailCreateWithoutProductInput[] | OrderDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutProductInput | OrderDetailCreateOrConnectWithoutProductInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutProductInput | OrderDetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderDetailCreateManyProductInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutProductInput | OrderDetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutProductInput | OrderDetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type OrderDetailUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderDetailCreateWithoutProductInput, OrderDetailUncheckedCreateWithoutProductInput> | OrderDetailCreateWithoutProductInput[] | OrderDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutProductInput | OrderDetailCreateOrConnectWithoutProductInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutProductInput | OrderDetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderDetailCreateManyProductInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutProductInput | OrderDetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutProductInput | OrderDetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type ProductVariantCreateNestedOneWithoutProductWholesalerInput = {
    create?: XOR<ProductVariantCreateWithoutProductWholesalerInput, ProductVariantUncheckedCreateWithoutProductWholesalerInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductWholesalerInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductVariantUpdateOneWithoutProductWholesalerNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductWholesalerInput, ProductVariantUncheckedCreateWithoutProductWholesalerInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductWholesalerInput
    upsert?: ProductVariantUpsertWithoutProductWholesalerInput
    disconnect?: ProductVariantWhereInput | boolean
    delete?: ProductVariantWhereInput | boolean
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutProductWholesalerInput, ProductVariantUpdateWithoutProductWholesalerInput>, ProductVariantUncheckedUpdateWithoutProductWholesalerInput>
  }

  export type ProductVariantCreateNestedOneWithoutProductPricesInput = {
    create?: XOR<ProductVariantCreateWithoutProductPricesInput, ProductVariantUncheckedCreateWithoutProductPricesInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductPricesInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type ProductVariantUpdateOneWithoutProductPricesNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductPricesInput, ProductVariantUncheckedCreateWithoutProductPricesInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductPricesInput
    upsert?: ProductVariantUpsertWithoutProductPricesInput
    disconnect?: ProductVariantWhereInput | boolean
    delete?: ProductVariantWhereInput | boolean
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutProductPricesInput, ProductVariantUpdateWithoutProductPricesInput>, ProductVariantUncheckedUpdateWithoutProductPricesInput>
  }

  export type ProductCreateNestedOneWithoutProductVariantsInput = {
    create?: XOR<ProductCreateWithoutProductVariantsInput, ProductUncheckedCreateWithoutProductVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductVariantsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductPriceCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<ProductPriceCreateWithoutProductVariantInput, ProductPriceUncheckedCreateWithoutProductVariantInput> | ProductPriceCreateWithoutProductVariantInput[] | ProductPriceUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutProductVariantInput | ProductPriceCreateOrConnectWithoutProductVariantInput[]
    createMany?: ProductPriceCreateManyProductVariantInputEnvelope
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
  }

  export type ProductWholesalerCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<ProductWholesalerCreateWithoutProductVariantInput, ProductWholesalerUncheckedCreateWithoutProductVariantInput> | ProductWholesalerCreateWithoutProductVariantInput[] | ProductWholesalerUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: ProductWholesalerCreateOrConnectWithoutProductVariantInput | ProductWholesalerCreateOrConnectWithoutProductVariantInput[]
    createMany?: ProductWholesalerCreateManyProductVariantInputEnvelope
    connect?: ProductWholesalerWhereUniqueInput | ProductWholesalerWhereUniqueInput[]
  }

  export type ProductPriceUncheckedCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<ProductPriceCreateWithoutProductVariantInput, ProductPriceUncheckedCreateWithoutProductVariantInput> | ProductPriceCreateWithoutProductVariantInput[] | ProductPriceUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutProductVariantInput | ProductPriceCreateOrConnectWithoutProductVariantInput[]
    createMany?: ProductPriceCreateManyProductVariantInputEnvelope
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
  }

  export type ProductWholesalerUncheckedCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<ProductWholesalerCreateWithoutProductVariantInput, ProductWholesalerUncheckedCreateWithoutProductVariantInput> | ProductWholesalerCreateWithoutProductVariantInput[] | ProductWholesalerUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: ProductWholesalerCreateOrConnectWithoutProductVariantInput | ProductWholesalerCreateOrConnectWithoutProductVariantInput[]
    createMany?: ProductWholesalerCreateManyProductVariantInputEnvelope
    connect?: ProductWholesalerWhereUniqueInput | ProductWholesalerWhereUniqueInput[]
  }

  export type ProductUpdateOneWithoutProductVariantsNestedInput = {
    create?: XOR<ProductCreateWithoutProductVariantsInput, ProductUncheckedCreateWithoutProductVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductVariantsInput
    upsert?: ProductUpsertWithoutProductVariantsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductVariantsInput, ProductUpdateWithoutProductVariantsInput>, ProductUncheckedUpdateWithoutProductVariantsInput>
  }

  export type ProductPriceUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<ProductPriceCreateWithoutProductVariantInput, ProductPriceUncheckedCreateWithoutProductVariantInput> | ProductPriceCreateWithoutProductVariantInput[] | ProductPriceUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutProductVariantInput | ProductPriceCreateOrConnectWithoutProductVariantInput[]
    upsert?: ProductPriceUpsertWithWhereUniqueWithoutProductVariantInput | ProductPriceUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: ProductPriceCreateManyProductVariantInputEnvelope
    set?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    disconnect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    delete?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    update?: ProductPriceUpdateWithWhereUniqueWithoutProductVariantInput | ProductPriceUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: ProductPriceUpdateManyWithWhereWithoutProductVariantInput | ProductPriceUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
  }

  export type ProductWholesalerUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<ProductWholesalerCreateWithoutProductVariantInput, ProductWholesalerUncheckedCreateWithoutProductVariantInput> | ProductWholesalerCreateWithoutProductVariantInput[] | ProductWholesalerUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: ProductWholesalerCreateOrConnectWithoutProductVariantInput | ProductWholesalerCreateOrConnectWithoutProductVariantInput[]
    upsert?: ProductWholesalerUpsertWithWhereUniqueWithoutProductVariantInput | ProductWholesalerUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: ProductWholesalerCreateManyProductVariantInputEnvelope
    set?: ProductWholesalerWhereUniqueInput | ProductWholesalerWhereUniqueInput[]
    disconnect?: ProductWholesalerWhereUniqueInput | ProductWholesalerWhereUniqueInput[]
    delete?: ProductWholesalerWhereUniqueInput | ProductWholesalerWhereUniqueInput[]
    connect?: ProductWholesalerWhereUniqueInput | ProductWholesalerWhereUniqueInput[]
    update?: ProductWholesalerUpdateWithWhereUniqueWithoutProductVariantInput | ProductWholesalerUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: ProductWholesalerUpdateManyWithWhereWithoutProductVariantInput | ProductWholesalerUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: ProductWholesalerScalarWhereInput | ProductWholesalerScalarWhereInput[]
  }

  export type ProductPriceUncheckedUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<ProductPriceCreateWithoutProductVariantInput, ProductPriceUncheckedCreateWithoutProductVariantInput> | ProductPriceCreateWithoutProductVariantInput[] | ProductPriceUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutProductVariantInput | ProductPriceCreateOrConnectWithoutProductVariantInput[]
    upsert?: ProductPriceUpsertWithWhereUniqueWithoutProductVariantInput | ProductPriceUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: ProductPriceCreateManyProductVariantInputEnvelope
    set?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    disconnect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    delete?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    update?: ProductPriceUpdateWithWhereUniqueWithoutProductVariantInput | ProductPriceUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: ProductPriceUpdateManyWithWhereWithoutProductVariantInput | ProductPriceUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
  }

  export type ProductWholesalerUncheckedUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<ProductWholesalerCreateWithoutProductVariantInput, ProductWholesalerUncheckedCreateWithoutProductVariantInput> | ProductWholesalerCreateWithoutProductVariantInput[] | ProductWholesalerUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: ProductWholesalerCreateOrConnectWithoutProductVariantInput | ProductWholesalerCreateOrConnectWithoutProductVariantInput[]
    upsert?: ProductWholesalerUpsertWithWhereUniqueWithoutProductVariantInput | ProductWholesalerUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: ProductWholesalerCreateManyProductVariantInputEnvelope
    set?: ProductWholesalerWhereUniqueInput | ProductWholesalerWhereUniqueInput[]
    disconnect?: ProductWholesalerWhereUniqueInput | ProductWholesalerWhereUniqueInput[]
    delete?: ProductWholesalerWhereUniqueInput | ProductWholesalerWhereUniqueInput[]
    connect?: ProductWholesalerWhereUniqueInput | ProductWholesalerWhereUniqueInput[]
    update?: ProductWholesalerUpdateWithWhereUniqueWithoutProductVariantInput | ProductWholesalerUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: ProductWholesalerUpdateManyWithWhereWithoutProductVariantInput | ProductWholesalerUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: ProductWholesalerScalarWhereInput | ProductWholesalerScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutOrdererCustomerInput = {
    create?: XOR<OrderCreateWithoutOrdererCustomerInput, OrderUncheckedCreateWithoutOrdererCustomerInput> | OrderCreateWithoutOrdererCustomerInput[] | OrderUncheckedCreateWithoutOrdererCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOrdererCustomerInput | OrderCreateOrConnectWithoutOrdererCustomerInput[]
    createMany?: OrderCreateManyOrdererCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutDeliveryTargetCustomerInput = {
    create?: XOR<OrderCreateWithoutDeliveryTargetCustomerInput, OrderUncheckedCreateWithoutDeliveryTargetCustomerInput> | OrderCreateWithoutDeliveryTargetCustomerInput[] | OrderUncheckedCreateWithoutDeliveryTargetCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryTargetCustomerInput | OrderCreateOrConnectWithoutDeliveryTargetCustomerInput[]
    createMany?: OrderCreateManyDeliveryTargetCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutOrdererCustomerInput = {
    create?: XOR<OrderCreateWithoutOrdererCustomerInput, OrderUncheckedCreateWithoutOrdererCustomerInput> | OrderCreateWithoutOrdererCustomerInput[] | OrderUncheckedCreateWithoutOrdererCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOrdererCustomerInput | OrderCreateOrConnectWithoutOrdererCustomerInput[]
    createMany?: OrderCreateManyOrdererCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutDeliveryTargetCustomerInput = {
    create?: XOR<OrderCreateWithoutDeliveryTargetCustomerInput, OrderUncheckedCreateWithoutDeliveryTargetCustomerInput> | OrderCreateWithoutDeliveryTargetCustomerInput[] | OrderUncheckedCreateWithoutDeliveryTargetCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryTargetCustomerInput | OrderCreateOrConnectWithoutDeliveryTargetCustomerInput[]
    createMany?: OrderCreateManyDeliveryTargetCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type NullableEnumCustomerCategoriesFieldUpdateOperationsInput = {
    set?: $Enums.CustomerCategories | null
  }

  export type NullableEnumCustomerStatusesFieldUpdateOperationsInput = {
    set?: $Enums.CustomerStatuses | null
  }

  export type OrderUpdateManyWithoutOrdererCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutOrdererCustomerInput, OrderUncheckedCreateWithoutOrdererCustomerInput> | OrderCreateWithoutOrdererCustomerInput[] | OrderUncheckedCreateWithoutOrdererCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOrdererCustomerInput | OrderCreateOrConnectWithoutOrdererCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutOrdererCustomerInput | OrderUpsertWithWhereUniqueWithoutOrdererCustomerInput[]
    createMany?: OrderCreateManyOrdererCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutOrdererCustomerInput | OrderUpdateWithWhereUniqueWithoutOrdererCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutOrdererCustomerInput | OrderUpdateManyWithWhereWithoutOrdererCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutDeliveryTargetCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutDeliveryTargetCustomerInput, OrderUncheckedCreateWithoutDeliveryTargetCustomerInput> | OrderCreateWithoutDeliveryTargetCustomerInput[] | OrderUncheckedCreateWithoutDeliveryTargetCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryTargetCustomerInput | OrderCreateOrConnectWithoutDeliveryTargetCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDeliveryTargetCustomerInput | OrderUpsertWithWhereUniqueWithoutDeliveryTargetCustomerInput[]
    createMany?: OrderCreateManyDeliveryTargetCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDeliveryTargetCustomerInput | OrderUpdateWithWhereUniqueWithoutDeliveryTargetCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDeliveryTargetCustomerInput | OrderUpdateManyWithWhereWithoutDeliveryTargetCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutOrdererCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutOrdererCustomerInput, OrderUncheckedCreateWithoutOrdererCustomerInput> | OrderCreateWithoutOrdererCustomerInput[] | OrderUncheckedCreateWithoutOrdererCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOrdererCustomerInput | OrderCreateOrConnectWithoutOrdererCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutOrdererCustomerInput | OrderUpsertWithWhereUniqueWithoutOrdererCustomerInput[]
    createMany?: OrderCreateManyOrdererCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutOrdererCustomerInput | OrderUpdateWithWhereUniqueWithoutOrdererCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutOrdererCustomerInput | OrderUpdateManyWithWhereWithoutOrdererCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutDeliveryTargetCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutDeliveryTargetCustomerInput, OrderUncheckedCreateWithoutDeliveryTargetCustomerInput> | OrderCreateWithoutDeliveryTargetCustomerInput[] | OrderUncheckedCreateWithoutDeliveryTargetCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryTargetCustomerInput | OrderCreateOrConnectWithoutDeliveryTargetCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDeliveryTargetCustomerInput | OrderUpsertWithWhereUniqueWithoutDeliveryTargetCustomerInput[]
    createMany?: OrderCreateManyDeliveryTargetCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDeliveryTargetCustomerInput | OrderUpdateWithWhereUniqueWithoutDeliveryTargetCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDeliveryTargetCustomerInput | OrderUpdateManyWithWhereWithoutDeliveryTargetCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutOrdersAsOrdererInput = {
    create?: XOR<CustomerCreateWithoutOrdersAsOrdererInput, CustomerUncheckedCreateWithoutOrdersAsOrdererInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersAsOrdererInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutOrdersAsDeliveryTargetInput = {
    create?: XOR<CustomerCreateWithoutOrdersAsDeliveryTargetInput, CustomerUncheckedCreateWithoutOrdersAsDeliveryTargetInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersAsDeliveryTargetInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneWithoutOrdersAsOrdererNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersAsOrdererInput, CustomerUncheckedCreateWithoutOrdersAsOrdererInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersAsOrdererInput
    upsert?: CustomerUpsertWithoutOrdersAsOrdererInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersAsOrdererInput, CustomerUpdateWithoutOrdersAsOrdererInput>, CustomerUncheckedUpdateWithoutOrdersAsOrdererInput>
  }

  export type CustomerUpdateOneWithoutOrdersAsDeliveryTargetNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersAsDeliveryTargetInput, CustomerUncheckedCreateWithoutOrdersAsDeliveryTargetInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersAsDeliveryTargetInput
    upsert?: CustomerUpsertWithoutOrdersAsDeliveryTargetInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersAsDeliveryTargetInput, CustomerUpdateWithoutOrdersAsDeliveryTargetInput>, CustomerUncheckedUpdateWithoutOrdersAsDeliveryTargetInput>
  }

  export type ProductCreateNestedOneWithoutOrderDetailsInput = {
    create?: XOR<ProductCreateWithoutOrderDetailsInput, ProductUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderDetailsInput
    connect?: ProductWhereUniqueInput
  }

  export type PaymentMethodCreateNestedOneWithoutOrderDetailsInput = {
    create?: XOR<PaymentMethodCreateWithoutOrderDetailsInput, PaymentMethodUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutOrderDetailsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type NullableEnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus | null
  }

  export type ProductUpdateOneWithoutOrderDetailsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderDetailsInput, ProductUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderDetailsInput
    upsert?: ProductUpsertWithoutOrderDetailsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderDetailsInput, ProductUpdateWithoutOrderDetailsInput>, ProductUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type PaymentMethodUpdateOneWithoutOrderDetailsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutOrderDetailsInput, PaymentMethodUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutOrderDetailsInput
    upsert?: PaymentMethodUpsertWithoutOrderDetailsInput
    disconnect?: PaymentMethodWhereInput | boolean
    delete?: PaymentMethodWhereInput | boolean
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutOrderDetailsInput, PaymentMethodUpdateWithoutOrderDetailsInput>, PaymentMethodUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type OrderDetailCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<OrderDetailCreateWithoutPaymentMethodInput, OrderDetailUncheckedCreateWithoutPaymentMethodInput> | OrderDetailCreateWithoutPaymentMethodInput[] | OrderDetailUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutPaymentMethodInput | OrderDetailCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: OrderDetailCreateManyPaymentMethodInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type OrderDetailUncheckedCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<OrderDetailCreateWithoutPaymentMethodInput, OrderDetailUncheckedCreateWithoutPaymentMethodInput> | OrderDetailCreateWithoutPaymentMethodInput[] | OrderDetailUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutPaymentMethodInput | OrderDetailCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: OrderDetailCreateManyPaymentMethodInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type OrderDetailUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<OrderDetailCreateWithoutPaymentMethodInput, OrderDetailUncheckedCreateWithoutPaymentMethodInput> | OrderDetailCreateWithoutPaymentMethodInput[] | OrderDetailUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutPaymentMethodInput | OrderDetailCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutPaymentMethodInput | OrderDetailUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: OrderDetailCreateManyPaymentMethodInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutPaymentMethodInput | OrderDetailUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutPaymentMethodInput | OrderDetailUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type OrderDetailUncheckedUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<OrderDetailCreateWithoutPaymentMethodInput, OrderDetailUncheckedCreateWithoutPaymentMethodInput> | OrderDetailCreateWithoutPaymentMethodInput[] | OrderDetailUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutPaymentMethodInput | OrderDetailCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutPaymentMethodInput | OrderDetailUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: OrderDetailCreateManyPaymentMethodInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutPaymentMethodInput | OrderDetailUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutPaymentMethodInput | OrderDetailUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRolesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel> | null
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRolesNullableFilter<$PrismaModel> | $Enums.Roles | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRolesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel> | null
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRolesNullableWithAggregatesFilter<$PrismaModel> | $Enums.Roles | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRolesNullableFilter<$PrismaModel>
    _max?: NestedEnumRolesNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumProductTypesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductTypes | EnumProductTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductTypes[] | ListEnumProductTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductTypes[] | ListEnumProductTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductTypesNullableFilter<$PrismaModel> | $Enums.ProductTypes | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumProductTypesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductTypes | EnumProductTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductTypes[] | ListEnumProductTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductTypes[] | ListEnumProductTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductTypesNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProductTypes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProductTypesNullableFilter<$PrismaModel>
    _max?: NestedEnumProductTypesNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumCustomerCategoriesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerCategories | EnumCustomerCategoriesFieldRefInput<$PrismaModel> | null
    in?: $Enums.CustomerCategories[] | ListEnumCustomerCategoriesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CustomerCategories[] | ListEnumCustomerCategoriesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCustomerCategoriesNullableFilter<$PrismaModel> | $Enums.CustomerCategories | null
  }

  export type NestedEnumCustomerStatusesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerStatuses | EnumCustomerStatusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.CustomerStatuses[] | ListEnumCustomerStatusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CustomerStatuses[] | ListEnumCustomerStatusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCustomerStatusesNullableFilter<$PrismaModel> | $Enums.CustomerStatuses | null
  }

  export type NestedEnumCustomerCategoriesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerCategories | EnumCustomerCategoriesFieldRefInput<$PrismaModel> | null
    in?: $Enums.CustomerCategories[] | ListEnumCustomerCategoriesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CustomerCategories[] | ListEnumCustomerCategoriesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCustomerCategoriesNullableWithAggregatesFilter<$PrismaModel> | $Enums.CustomerCategories | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCustomerCategoriesNullableFilter<$PrismaModel>
    _max?: NestedEnumCustomerCategoriesNullableFilter<$PrismaModel>
  }

  export type NestedEnumCustomerStatusesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerStatuses | EnumCustomerStatusesFieldRefInput<$PrismaModel> | null
    in?: $Enums.CustomerStatuses[] | ListEnumCustomerStatusesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CustomerStatuses[] | ListEnumCustomerStatusesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCustomerStatusesNullableWithAggregatesFilter<$PrismaModel> | $Enums.CustomerStatuses | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCustomerStatusesNullableFilter<$PrismaModel>
    _max?: NestedEnumCustomerStatusesNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentStatusNullableFilter<$PrismaModel> | $Enums.PaymentStatus | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name?: string | null
    type?: $Enums.ProductTypes | null
    description?: string | null
    weight?: number | null
    isPublish?: boolean | null
    productVariants?: ProductVariantCreateNestedManyWithoutProductInput
    orderDetails?: OrderDetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name?: string | null
    type?: $Enums.ProductTypes | null
    description?: string | null
    weight?: number | null
    isPublish?: boolean | null
    productVariants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    orderDetails?: OrderDetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: UuidFilter<"Product"> | string
    categoryId?: UuidNullableFilter<"Product"> | string | null
    name?: StringNullableFilter<"Product"> | string | null
    type?: EnumProductTypesNullableFilter<"Product"> | $Enums.ProductTypes | null
    description?: StringNullableFilter<"Product"> | string | null
    weight?: FloatNullableFilter<"Product"> | number | null
    isPublish?: BoolNullableFilter<"Product"> | boolean | null
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name?: string | null
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name?: string | null
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductVariantCreateWithoutProductInput = {
    id?: string
    sku?: string | null
    stock?: number | null
    size?: string | null
    color?: string | null
    imageUrl?: string | null
    barcode?: string | null
    productPrices?: ProductPriceCreateNestedManyWithoutProductVariantInput
    ProductWholesaler?: ProductWholesalerCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutProductInput = {
    id?: string
    sku?: string | null
    stock?: number | null
    size?: string | null
    color?: string | null
    imageUrl?: string | null
    barcode?: string | null
    productPrices?: ProductPriceUncheckedCreateNestedManyWithoutProductVariantInput
    ProductWholesaler?: ProductWholesalerUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantCreateManyProductInputEnvelope = {
    data: ProductVariantCreateManyProductInput | ProductVariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderDetailCreateWithoutProductInput = {
    id?: string
    code?: string | null
    productQty?: number | null
    courierName?: string | null
    courierCategory?: string | null
    courierEta?: string | null
    courierCost?: string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: number | null
    paymentStatus?: $Enums.PaymentStatus | null
    paymentDate?: Date | string | null
    receiptNumber?: string | null
    paymentMethod?: PaymentMethodCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailUncheckedCreateWithoutProductInput = {
    id?: string
    paymentMethodId?: string | null
    code?: string | null
    productQty?: number | null
    courierName?: string | null
    courierCategory?: string | null
    courierEta?: string | null
    courierCost?: string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: number | null
    paymentStatus?: $Enums.PaymentStatus | null
    paymentDate?: Date | string | null
    receiptNumber?: string | null
  }

  export type OrderDetailCreateOrConnectWithoutProductInput = {
    where: OrderDetailWhereUniqueInput
    create: XOR<OrderDetailCreateWithoutProductInput, OrderDetailUncheckedCreateWithoutProductInput>
  }

  export type OrderDetailCreateManyProductInputEnvelope = {
    data: OrderDetailCreateManyProductInput | OrderDetailCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    id?: UuidFilter<"ProductVariant"> | string
    productId?: UuidNullableFilter<"ProductVariant"> | string | null
    sku?: StringNullableFilter<"ProductVariant"> | string | null
    stock?: IntNullableFilter<"ProductVariant"> | number | null
    size?: StringNullableFilter<"ProductVariant"> | string | null
    color?: StringNullableFilter<"ProductVariant"> | string | null
    imageUrl?: StringNullableFilter<"ProductVariant"> | string | null
    barcode?: StringNullableFilter<"ProductVariant"> | string | null
  }

  export type OrderDetailUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderDetailWhereUniqueInput
    update: XOR<OrderDetailUpdateWithoutProductInput, OrderDetailUncheckedUpdateWithoutProductInput>
    create: XOR<OrderDetailCreateWithoutProductInput, OrderDetailUncheckedCreateWithoutProductInput>
  }

  export type OrderDetailUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderDetailWhereUniqueInput
    data: XOR<OrderDetailUpdateWithoutProductInput, OrderDetailUncheckedUpdateWithoutProductInput>
  }

  export type OrderDetailUpdateManyWithWhereWithoutProductInput = {
    where: OrderDetailScalarWhereInput
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderDetailScalarWhereInput = {
    AND?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
    OR?: OrderDetailScalarWhereInput[]
    NOT?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
    id?: UuidFilter<"OrderDetail"> | string
    productId?: UuidNullableFilter<"OrderDetail"> | string | null
    paymentMethodId?: UuidNullableFilter<"OrderDetail"> | string | null
    code?: StringNullableFilter<"OrderDetail"> | string | null
    productQty?: IntNullableFilter<"OrderDetail"> | number | null
    courierName?: StringNullableFilter<"OrderDetail"> | string | null
    courierCategory?: StringNullableFilter<"OrderDetail"> | string | null
    courierEta?: StringNullableFilter<"OrderDetail"> | string | null
    courierCost?: StringNullableFilter<"OrderDetail"> | string | null
    otherFees?: JsonNullableFilter<"OrderDetail">
    finalPrice?: FloatNullableFilter<"OrderDetail"> | number | null
    paymentStatus?: EnumPaymentStatusNullableFilter<"OrderDetail"> | $Enums.PaymentStatus | null
    paymentDate?: DateTimeNullableFilter<"OrderDetail"> | Date | string | null
    receiptNumber?: StringNullableFilter<"OrderDetail"> | string | null
  }

  export type ProductVariantCreateWithoutProductWholesalerInput = {
    id?: string
    sku?: string | null
    stock?: number | null
    size?: string | null
    color?: string | null
    imageUrl?: string | null
    barcode?: string | null
    product?: ProductCreateNestedOneWithoutProductVariantsInput
    productPrices?: ProductPriceCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutProductWholesalerInput = {
    id?: string
    productId?: string | null
    sku?: string | null
    stock?: number | null
    size?: string | null
    color?: string | null
    imageUrl?: string | null
    barcode?: string | null
    productPrices?: ProductPriceUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutProductWholesalerInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductWholesalerInput, ProductVariantUncheckedCreateWithoutProductWholesalerInput>
  }

  export type ProductVariantUpsertWithoutProductWholesalerInput = {
    update: XOR<ProductVariantUpdateWithoutProductWholesalerInput, ProductVariantUncheckedUpdateWithoutProductWholesalerInput>
    create: XOR<ProductVariantCreateWithoutProductWholesalerInput, ProductVariantUncheckedCreateWithoutProductWholesalerInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutProductWholesalerInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutProductWholesalerInput, ProductVariantUncheckedUpdateWithoutProductWholesalerInput>
  }

  export type ProductVariantUpdateWithoutProductWholesalerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneWithoutProductVariantsNestedInput
    productPrices?: ProductPriceUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutProductWholesalerInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productPrices?: ProductPriceUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantCreateWithoutProductPricesInput = {
    id?: string
    sku?: string | null
    stock?: number | null
    size?: string | null
    color?: string | null
    imageUrl?: string | null
    barcode?: string | null
    product?: ProductCreateNestedOneWithoutProductVariantsInput
    ProductWholesaler?: ProductWholesalerCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutProductPricesInput = {
    id?: string
    productId?: string | null
    sku?: string | null
    stock?: number | null
    size?: string | null
    color?: string | null
    imageUrl?: string | null
    barcode?: string | null
    ProductWholesaler?: ProductWholesalerUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutProductPricesInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductPricesInput, ProductVariantUncheckedCreateWithoutProductPricesInput>
  }

  export type ProductVariantUpsertWithoutProductPricesInput = {
    update: XOR<ProductVariantUpdateWithoutProductPricesInput, ProductVariantUncheckedUpdateWithoutProductPricesInput>
    create: XOR<ProductVariantCreateWithoutProductPricesInput, ProductVariantUncheckedCreateWithoutProductPricesInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutProductPricesInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutProductPricesInput, ProductVariantUncheckedUpdateWithoutProductPricesInput>
  }

  export type ProductVariantUpdateWithoutProductPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneWithoutProductVariantsNestedInput
    ProductWholesaler?: ProductWholesalerUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutProductPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    ProductWholesaler?: ProductWholesalerUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductCreateWithoutProductVariantsInput = {
    id?: string
    name?: string | null
    type?: $Enums.ProductTypes | null
    description?: string | null
    weight?: number | null
    isPublish?: boolean | null
    category?: CategoryCreateNestedOneWithoutProductsInput
    orderDetails?: OrderDetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductVariantsInput = {
    id?: string
    categoryId?: string | null
    name?: string | null
    type?: $Enums.ProductTypes | null
    description?: string | null
    weight?: number | null
    isPublish?: boolean | null
    orderDetails?: OrderDetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductVariantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductVariantsInput, ProductUncheckedCreateWithoutProductVariantsInput>
  }

  export type ProductPriceCreateWithoutProductVariantInput = {
    id?: string
    normal?: number | null
    buy?: number | null
    reseller?: number | null
    agent?: number | null
    member?: number | null
  }

  export type ProductPriceUncheckedCreateWithoutProductVariantInput = {
    id?: string
    normal?: number | null
    buy?: number | null
    reseller?: number | null
    agent?: number | null
    member?: number | null
  }

  export type ProductPriceCreateOrConnectWithoutProductVariantInput = {
    where: ProductPriceWhereUniqueInput
    create: XOR<ProductPriceCreateWithoutProductVariantInput, ProductPriceUncheckedCreateWithoutProductVariantInput>
  }

  export type ProductPriceCreateManyProductVariantInputEnvelope = {
    data: ProductPriceCreateManyProductVariantInput | ProductPriceCreateManyProductVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductWholesalerCreateWithoutProductVariantInput = {
    id?: string
    lowerLimitItem?: number | null
    upperLimitItem?: number | null
    unitPrice?: number | null
    wholesalerPrice?: number | null
  }

  export type ProductWholesalerUncheckedCreateWithoutProductVariantInput = {
    id?: string
    lowerLimitItem?: number | null
    upperLimitItem?: number | null
    unitPrice?: number | null
    wholesalerPrice?: number | null
  }

  export type ProductWholesalerCreateOrConnectWithoutProductVariantInput = {
    where: ProductWholesalerWhereUniqueInput
    create: XOR<ProductWholesalerCreateWithoutProductVariantInput, ProductWholesalerUncheckedCreateWithoutProductVariantInput>
  }

  export type ProductWholesalerCreateManyProductVariantInputEnvelope = {
    data: ProductWholesalerCreateManyProductVariantInput | ProductWholesalerCreateManyProductVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutProductVariantsInput = {
    update: XOR<ProductUpdateWithoutProductVariantsInput, ProductUncheckedUpdateWithoutProductVariantsInput>
    create: XOR<ProductCreateWithoutProductVariantsInput, ProductUncheckedCreateWithoutProductVariantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductVariantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductVariantsInput, ProductUncheckedUpdateWithoutProductVariantsInput>
  }

  export type ProductUpdateWithoutProductVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumProductTypesFieldUpdateOperationsInput | $Enums.ProductTypes | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    isPublish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: CategoryUpdateOneWithoutProductsNestedInput
    orderDetails?: OrderDetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumProductTypesFieldUpdateOperationsInput | $Enums.ProductTypes | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    isPublish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orderDetails?: OrderDetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductPriceUpsertWithWhereUniqueWithoutProductVariantInput = {
    where: ProductPriceWhereUniqueInput
    update: XOR<ProductPriceUpdateWithoutProductVariantInput, ProductPriceUncheckedUpdateWithoutProductVariantInput>
    create: XOR<ProductPriceCreateWithoutProductVariantInput, ProductPriceUncheckedCreateWithoutProductVariantInput>
  }

  export type ProductPriceUpdateWithWhereUniqueWithoutProductVariantInput = {
    where: ProductPriceWhereUniqueInput
    data: XOR<ProductPriceUpdateWithoutProductVariantInput, ProductPriceUncheckedUpdateWithoutProductVariantInput>
  }

  export type ProductPriceUpdateManyWithWhereWithoutProductVariantInput = {
    where: ProductPriceScalarWhereInput
    data: XOR<ProductPriceUpdateManyMutationInput, ProductPriceUncheckedUpdateManyWithoutProductVariantInput>
  }

  export type ProductPriceScalarWhereInput = {
    AND?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
    OR?: ProductPriceScalarWhereInput[]
    NOT?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
    id?: UuidFilter<"ProductPrice"> | string
    productVariantId?: UuidNullableFilter<"ProductPrice"> | string | null
    normal?: FloatNullableFilter<"ProductPrice"> | number | null
    buy?: FloatNullableFilter<"ProductPrice"> | number | null
    reseller?: FloatNullableFilter<"ProductPrice"> | number | null
    agent?: FloatNullableFilter<"ProductPrice"> | number | null
    member?: FloatNullableFilter<"ProductPrice"> | number | null
  }

  export type ProductWholesalerUpsertWithWhereUniqueWithoutProductVariantInput = {
    where: ProductWholesalerWhereUniqueInput
    update: XOR<ProductWholesalerUpdateWithoutProductVariantInput, ProductWholesalerUncheckedUpdateWithoutProductVariantInput>
    create: XOR<ProductWholesalerCreateWithoutProductVariantInput, ProductWholesalerUncheckedCreateWithoutProductVariantInput>
  }

  export type ProductWholesalerUpdateWithWhereUniqueWithoutProductVariantInput = {
    where: ProductWholesalerWhereUniqueInput
    data: XOR<ProductWholesalerUpdateWithoutProductVariantInput, ProductWholesalerUncheckedUpdateWithoutProductVariantInput>
  }

  export type ProductWholesalerUpdateManyWithWhereWithoutProductVariantInput = {
    where: ProductWholesalerScalarWhereInput
    data: XOR<ProductWholesalerUpdateManyMutationInput, ProductWholesalerUncheckedUpdateManyWithoutProductVariantInput>
  }

  export type ProductWholesalerScalarWhereInput = {
    AND?: ProductWholesalerScalarWhereInput | ProductWholesalerScalarWhereInput[]
    OR?: ProductWholesalerScalarWhereInput[]
    NOT?: ProductWholesalerScalarWhereInput | ProductWholesalerScalarWhereInput[]
    id?: UuidFilter<"ProductWholesaler"> | string
    productVariantId?: UuidNullableFilter<"ProductWholesaler"> | string | null
    lowerLimitItem?: IntNullableFilter<"ProductWholesaler"> | number | null
    upperLimitItem?: IntNullableFilter<"ProductWholesaler"> | number | null
    unitPrice?: FloatNullableFilter<"ProductWholesaler"> | number | null
    wholesalerPrice?: FloatNullableFilter<"ProductWholesaler"> | number | null
  }

  export type OrderCreateWithoutOrdererCustomerInput = {
    id?: string
    senderPlace?: string | null
    orderDate?: Date | string | null
    salesChannel?: string | null
    note?: string | null
    deliveryTargetCustomer?: CustomerCreateNestedOneWithoutOrdersAsDeliveryTargetInput
  }

  export type OrderUncheckedCreateWithoutOrdererCustomerInput = {
    id?: string
    deliveryTargetCustomerId?: string | null
    senderPlace?: string | null
    orderDate?: Date | string | null
    salesChannel?: string | null
    note?: string | null
  }

  export type OrderCreateOrConnectWithoutOrdererCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrdererCustomerInput, OrderUncheckedCreateWithoutOrdererCustomerInput>
  }

  export type OrderCreateManyOrdererCustomerInputEnvelope = {
    data: OrderCreateManyOrdererCustomerInput | OrderCreateManyOrdererCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutDeliveryTargetCustomerInput = {
    id?: string
    senderPlace?: string | null
    orderDate?: Date | string | null
    salesChannel?: string | null
    note?: string | null
    ordererCustomer?: CustomerCreateNestedOneWithoutOrdersAsOrdererInput
  }

  export type OrderUncheckedCreateWithoutDeliveryTargetCustomerInput = {
    id?: string
    ordererCustomerId?: string | null
    senderPlace?: string | null
    orderDate?: Date | string | null
    salesChannel?: string | null
    note?: string | null
  }

  export type OrderCreateOrConnectWithoutDeliveryTargetCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDeliveryTargetCustomerInput, OrderUncheckedCreateWithoutDeliveryTargetCustomerInput>
  }

  export type OrderCreateManyDeliveryTargetCustomerInputEnvelope = {
    data: OrderCreateManyDeliveryTargetCustomerInput | OrderCreateManyDeliveryTargetCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutOrdererCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutOrdererCustomerInput, OrderUncheckedUpdateWithoutOrdererCustomerInput>
    create: XOR<OrderCreateWithoutOrdererCustomerInput, OrderUncheckedCreateWithoutOrdererCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutOrdererCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutOrdererCustomerInput, OrderUncheckedUpdateWithoutOrdererCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutOrdererCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrdererCustomerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: UuidFilter<"Order"> | string
    ordererCustomerId?: UuidNullableFilter<"Order"> | string | null
    deliveryTargetCustomerId?: UuidNullableFilter<"Order"> | string | null
    senderPlace?: StringNullableFilter<"Order"> | string | null
    orderDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    salesChannel?: StringNullableFilter<"Order"> | string | null
    note?: StringNullableFilter<"Order"> | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutDeliveryTargetCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutDeliveryTargetCustomerInput, OrderUncheckedUpdateWithoutDeliveryTargetCustomerInput>
    create: XOR<OrderCreateWithoutDeliveryTargetCustomerInput, OrderUncheckedCreateWithoutDeliveryTargetCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutDeliveryTargetCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutDeliveryTargetCustomerInput, OrderUncheckedUpdateWithoutDeliveryTargetCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutDeliveryTargetCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutDeliveryTargetCustomerInput>
  }

  export type CustomerCreateWithoutOrdersAsOrdererInput = {
    id?: string
    name?: string | null
    category?: $Enums.CustomerCategories | null
    address?: string | null
    subdistrict?: string | null
    postalCode?: string | null
    phoneNumber?: string | null
    email?: string | null
    status?: $Enums.CustomerStatuses | null
    ordersAsDeliveryTarget?: OrderCreateNestedManyWithoutDeliveryTargetCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrdersAsOrdererInput = {
    id?: string
    name?: string | null
    category?: $Enums.CustomerCategories | null
    address?: string | null
    subdistrict?: string | null
    postalCode?: string | null
    phoneNumber?: string | null
    email?: string | null
    status?: $Enums.CustomerStatuses | null
    ordersAsDeliveryTarget?: OrderUncheckedCreateNestedManyWithoutDeliveryTargetCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrdersAsOrdererInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersAsOrdererInput, CustomerUncheckedCreateWithoutOrdersAsOrdererInput>
  }

  export type CustomerCreateWithoutOrdersAsDeliveryTargetInput = {
    id?: string
    name?: string | null
    category?: $Enums.CustomerCategories | null
    address?: string | null
    subdistrict?: string | null
    postalCode?: string | null
    phoneNumber?: string | null
    email?: string | null
    status?: $Enums.CustomerStatuses | null
    ordersAsOrderer?: OrderCreateNestedManyWithoutOrdererCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrdersAsDeliveryTargetInput = {
    id?: string
    name?: string | null
    category?: $Enums.CustomerCategories | null
    address?: string | null
    subdistrict?: string | null
    postalCode?: string | null
    phoneNumber?: string | null
    email?: string | null
    status?: $Enums.CustomerStatuses | null
    ordersAsOrderer?: OrderUncheckedCreateNestedManyWithoutOrdererCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrdersAsDeliveryTargetInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersAsDeliveryTargetInput, CustomerUncheckedCreateWithoutOrdersAsDeliveryTargetInput>
  }

  export type CustomerUpsertWithoutOrdersAsOrdererInput = {
    update: XOR<CustomerUpdateWithoutOrdersAsOrdererInput, CustomerUncheckedUpdateWithoutOrdersAsOrdererInput>
    create: XOR<CustomerCreateWithoutOrdersAsOrdererInput, CustomerUncheckedCreateWithoutOrdersAsOrdererInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersAsOrdererInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersAsOrdererInput, CustomerUncheckedUpdateWithoutOrdersAsOrdererInput>
  }

  export type CustomerUpdateWithoutOrdersAsOrdererInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCustomerCategoriesFieldUpdateOperationsInput | $Enums.CustomerCategories | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCustomerStatusesFieldUpdateOperationsInput | $Enums.CustomerStatuses | null
    ordersAsDeliveryTarget?: OrderUpdateManyWithoutDeliveryTargetCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersAsOrdererInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCustomerCategoriesFieldUpdateOperationsInput | $Enums.CustomerCategories | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCustomerStatusesFieldUpdateOperationsInput | $Enums.CustomerStatuses | null
    ordersAsDeliveryTarget?: OrderUncheckedUpdateManyWithoutDeliveryTargetCustomerNestedInput
  }

  export type CustomerUpsertWithoutOrdersAsDeliveryTargetInput = {
    update: XOR<CustomerUpdateWithoutOrdersAsDeliveryTargetInput, CustomerUncheckedUpdateWithoutOrdersAsDeliveryTargetInput>
    create: XOR<CustomerCreateWithoutOrdersAsDeliveryTargetInput, CustomerUncheckedCreateWithoutOrdersAsDeliveryTargetInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersAsDeliveryTargetInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersAsDeliveryTargetInput, CustomerUncheckedUpdateWithoutOrdersAsDeliveryTargetInput>
  }

  export type CustomerUpdateWithoutOrdersAsDeliveryTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCustomerCategoriesFieldUpdateOperationsInput | $Enums.CustomerCategories | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCustomerStatusesFieldUpdateOperationsInput | $Enums.CustomerStatuses | null
    ordersAsOrderer?: OrderUpdateManyWithoutOrdererCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersAsDeliveryTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCustomerCategoriesFieldUpdateOperationsInput | $Enums.CustomerCategories | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCustomerStatusesFieldUpdateOperationsInput | $Enums.CustomerStatuses | null
    ordersAsOrderer?: OrderUncheckedUpdateManyWithoutOrdererCustomerNestedInput
  }

  export type ProductCreateWithoutOrderDetailsInput = {
    id?: string
    name?: string | null
    type?: $Enums.ProductTypes | null
    description?: string | null
    weight?: number | null
    isPublish?: boolean | null
    category?: CategoryCreateNestedOneWithoutProductsInput
    productVariants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderDetailsInput = {
    id?: string
    categoryId?: string | null
    name?: string | null
    type?: $Enums.ProductTypes | null
    description?: string | null
    weight?: number | null
    isPublish?: boolean | null
    productVariants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderDetailsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderDetailsInput, ProductUncheckedCreateWithoutOrderDetailsInput>
  }

  export type PaymentMethodCreateWithoutOrderDetailsInput = {
    id?: string
    name?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountNumber?: string | null
  }

  export type PaymentMethodUncheckedCreateWithoutOrderDetailsInput = {
    id?: string
    name?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountNumber?: string | null
  }

  export type PaymentMethodCreateOrConnectWithoutOrderDetailsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutOrderDetailsInput, PaymentMethodUncheckedCreateWithoutOrderDetailsInput>
  }

  export type ProductUpsertWithoutOrderDetailsInput = {
    update: XOR<ProductUpdateWithoutOrderDetailsInput, ProductUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<ProductCreateWithoutOrderDetailsInput, ProductUncheckedCreateWithoutOrderDetailsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderDetailsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderDetailsInput, ProductUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type ProductUpdateWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumProductTypesFieldUpdateOperationsInput | $Enums.ProductTypes | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    isPublish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: CategoryUpdateOneWithoutProductsNestedInput
    productVariants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumProductTypesFieldUpdateOperationsInput | $Enums.ProductTypes | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    isPublish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productVariants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PaymentMethodUpsertWithoutOrderDetailsInput = {
    update: XOR<PaymentMethodUpdateWithoutOrderDetailsInput, PaymentMethodUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<PaymentMethodCreateWithoutOrderDetailsInput, PaymentMethodUncheckedCreateWithoutOrderDetailsInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutOrderDetailsInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutOrderDetailsInput, PaymentMethodUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type PaymentMethodUpdateWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentMethodUncheckedUpdateWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailCreateWithoutPaymentMethodInput = {
    id?: string
    code?: string | null
    productQty?: number | null
    courierName?: string | null
    courierCategory?: string | null
    courierEta?: string | null
    courierCost?: string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: number | null
    paymentStatus?: $Enums.PaymentStatus | null
    paymentDate?: Date | string | null
    receiptNumber?: string | null
    product?: ProductCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailUncheckedCreateWithoutPaymentMethodInput = {
    id?: string
    productId?: string | null
    code?: string | null
    productQty?: number | null
    courierName?: string | null
    courierCategory?: string | null
    courierEta?: string | null
    courierCost?: string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: number | null
    paymentStatus?: $Enums.PaymentStatus | null
    paymentDate?: Date | string | null
    receiptNumber?: string | null
  }

  export type OrderDetailCreateOrConnectWithoutPaymentMethodInput = {
    where: OrderDetailWhereUniqueInput
    create: XOR<OrderDetailCreateWithoutPaymentMethodInput, OrderDetailUncheckedCreateWithoutPaymentMethodInput>
  }

  export type OrderDetailCreateManyPaymentMethodInputEnvelope = {
    data: OrderDetailCreateManyPaymentMethodInput | OrderDetailCreateManyPaymentMethodInput[]
    skipDuplicates?: boolean
  }

  export type OrderDetailUpsertWithWhereUniqueWithoutPaymentMethodInput = {
    where: OrderDetailWhereUniqueInput
    update: XOR<OrderDetailUpdateWithoutPaymentMethodInput, OrderDetailUncheckedUpdateWithoutPaymentMethodInput>
    create: XOR<OrderDetailCreateWithoutPaymentMethodInput, OrderDetailUncheckedCreateWithoutPaymentMethodInput>
  }

  export type OrderDetailUpdateWithWhereUniqueWithoutPaymentMethodInput = {
    where: OrderDetailWhereUniqueInput
    data: XOR<OrderDetailUpdateWithoutPaymentMethodInput, OrderDetailUncheckedUpdateWithoutPaymentMethodInput>
  }

  export type OrderDetailUpdateManyWithWhereWithoutPaymentMethodInput = {
    where: OrderDetailScalarWhereInput
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyWithoutPaymentMethodInput>
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name?: string | null
    type?: $Enums.ProductTypes | null
    description?: string | null
    weight?: number | null
    isPublish?: boolean | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumProductTypesFieldUpdateOperationsInput | $Enums.ProductTypes | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    isPublish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productVariants?: ProductVariantUpdateManyWithoutProductNestedInput
    orderDetails?: OrderDetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumProductTypesFieldUpdateOperationsInput | $Enums.ProductTypes | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    isPublish?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productVariants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    orderDetails?: OrderDetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumProductTypesFieldUpdateOperationsInput | $Enums.ProductTypes | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    isPublish?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductVariantCreateManyProductInput = {
    id?: string
    sku?: string | null
    stock?: number | null
    size?: string | null
    color?: string | null
    imageUrl?: string | null
    barcode?: string | null
  }

  export type OrderDetailCreateManyProductInput = {
    id?: string
    paymentMethodId?: string | null
    code?: string | null
    productQty?: number | null
    courierName?: string | null
    courierCategory?: string | null
    courierEta?: string | null
    courierCost?: string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: number | null
    paymentStatus?: $Enums.PaymentStatus | null
    paymentDate?: Date | string | null
    receiptNumber?: string | null
  }

  export type ProductVariantUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productPrices?: ProductPriceUpdateManyWithoutProductVariantNestedInput
    ProductWholesaler?: ProductWholesalerUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productPrices?: ProductPriceUncheckedUpdateManyWithoutProductVariantNestedInput
    ProductWholesaler?: ProductWholesalerUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    productQty?: NullableIntFieldUpdateOperationsInput | number | null
    courierName?: NullableStringFieldUpdateOperationsInput | string | null
    courierCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courierEta?: NullableStringFieldUpdateOperationsInput | string | null
    courierCost?: NullableStringFieldUpdateOperationsInput | string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: PaymentMethodUpdateOneWithoutOrderDetailsNestedInput
  }

  export type OrderDetailUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    productQty?: NullableIntFieldUpdateOperationsInput | number | null
    courierName?: NullableStringFieldUpdateOperationsInput | string | null
    courierCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courierEta?: NullableStringFieldUpdateOperationsInput | string | null
    courierCost?: NullableStringFieldUpdateOperationsInput | string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    productQty?: NullableIntFieldUpdateOperationsInput | number | null
    courierName?: NullableStringFieldUpdateOperationsInput | string | null
    courierCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courierEta?: NullableStringFieldUpdateOperationsInput | string | null
    courierCost?: NullableStringFieldUpdateOperationsInput | string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductPriceCreateManyProductVariantInput = {
    id?: string
    normal?: number | null
    buy?: number | null
    reseller?: number | null
    agent?: number | null
    member?: number | null
  }

  export type ProductWholesalerCreateManyProductVariantInput = {
    id?: string
    lowerLimitItem?: number | null
    upperLimitItem?: number | null
    unitPrice?: number | null
    wholesalerPrice?: number | null
  }

  export type ProductPriceUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    normal?: NullableFloatFieldUpdateOperationsInput | number | null
    buy?: NullableFloatFieldUpdateOperationsInput | number | null
    reseller?: NullableFloatFieldUpdateOperationsInput | number | null
    agent?: NullableFloatFieldUpdateOperationsInput | number | null
    member?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductPriceUncheckedUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    normal?: NullableFloatFieldUpdateOperationsInput | number | null
    buy?: NullableFloatFieldUpdateOperationsInput | number | null
    reseller?: NullableFloatFieldUpdateOperationsInput | number | null
    agent?: NullableFloatFieldUpdateOperationsInput | number | null
    member?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductPriceUncheckedUpdateManyWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    normal?: NullableFloatFieldUpdateOperationsInput | number | null
    buy?: NullableFloatFieldUpdateOperationsInput | number | null
    reseller?: NullableFloatFieldUpdateOperationsInput | number | null
    agent?: NullableFloatFieldUpdateOperationsInput | number | null
    member?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductWholesalerUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    lowerLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    upperLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    wholesalerPrice?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductWholesalerUncheckedUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    lowerLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    upperLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    wholesalerPrice?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductWholesalerUncheckedUpdateManyWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    lowerLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    upperLimitItem?: NullableIntFieldUpdateOperationsInput | number | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    wholesalerPrice?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateManyOrdererCustomerInput = {
    id?: string
    deliveryTargetCustomerId?: string | null
    senderPlace?: string | null
    orderDate?: Date | string | null
    salesChannel?: string | null
    note?: string | null
  }

  export type OrderCreateManyDeliveryTargetCustomerInput = {
    id?: string
    ordererCustomerId?: string | null
    senderPlace?: string | null
    orderDate?: Date | string | null
    salesChannel?: string | null
    note?: string | null
  }

  export type OrderUpdateWithoutOrdererCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderPlace?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTargetCustomer?: CustomerUpdateOneWithoutOrdersAsDeliveryTargetNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrdererCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryTargetCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    senderPlace?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateManyWithoutOrdererCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryTargetCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    senderPlace?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutDeliveryTargetCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderPlace?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    ordererCustomer?: CustomerUpdateOneWithoutOrdersAsOrdererNestedInput
  }

  export type OrderUncheckedUpdateWithoutDeliveryTargetCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordererCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    senderPlace?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateManyWithoutDeliveryTargetCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordererCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    senderPlace?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailCreateManyPaymentMethodInput = {
    id?: string
    productId?: string | null
    code?: string | null
    productQty?: number | null
    courierName?: string | null
    courierCategory?: string | null
    courierEta?: string | null
    courierCost?: string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: number | null
    paymentStatus?: $Enums.PaymentStatus | null
    paymentDate?: Date | string | null
    receiptNumber?: string | null
  }

  export type OrderDetailUpdateWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    productQty?: NullableIntFieldUpdateOperationsInput | number | null
    courierName?: NullableStringFieldUpdateOperationsInput | string | null
    courierCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courierEta?: NullableStringFieldUpdateOperationsInput | string | null
    courierCost?: NullableStringFieldUpdateOperationsInput | string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneWithoutOrderDetailsNestedInput
  }

  export type OrderDetailUncheckedUpdateWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    productQty?: NullableIntFieldUpdateOperationsInput | number | null
    courierName?: NullableStringFieldUpdateOperationsInput | string | null
    courierCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courierEta?: NullableStringFieldUpdateOperationsInput | string | null
    courierCost?: NullableStringFieldUpdateOperationsInput | string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailUncheckedUpdateManyWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    productQty?: NullableIntFieldUpdateOperationsInput | number | null
    courierName?: NullableStringFieldUpdateOperationsInput | string | null
    courierCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courierEta?: NullableStringFieldUpdateOperationsInput | string | null
    courierCost?: NullableStringFieldUpdateOperationsInput | string | null
    otherFees?: NullableJsonNullValueInput | InputJsonValue
    finalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}