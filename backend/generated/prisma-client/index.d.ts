
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
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model PropertyImage
 * 
 */
export type PropertyImage = $Result.DefaultSelection<Prisma.$PropertyImagePayload>
/**
 * Model Feature
 * 
 */
export type Feature = $Result.DefaultSelection<Prisma.$FeaturePayload>
/**
 * Model PropertyFeature
 * 
 */
export type PropertyFeature = $Result.DefaultSelection<Prisma.$PropertyFeaturePayload>
/**
 * Model Inquiry
 * 
 */
export type Inquiry = $Result.DefaultSelection<Prisma.$InquiryPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model AdminConfig
 * 
 */
export type AdminConfig = $Result.DefaultSelection<Prisma.$AdminConfigPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model AdminSettings
 * 
 */
export type AdminSettings = $Result.DefaultSelection<Prisma.$AdminSettingsPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyImage`: Exposes CRUD operations for the **PropertyImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyImages
    * const propertyImages = await prisma.propertyImage.findMany()
    * ```
    */
  get propertyImage(): Prisma.PropertyImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feature`: Exposes CRUD operations for the **Feature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Features
    * const features = await prisma.feature.findMany()
    * ```
    */
  get feature(): Prisma.FeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyFeature`: Exposes CRUD operations for the **PropertyFeature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyFeatures
    * const propertyFeatures = await prisma.propertyFeature.findMany()
    * ```
    */
  get propertyFeature(): Prisma.PropertyFeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.InquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminConfig`: Exposes CRUD operations for the **AdminConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminConfigs
    * const adminConfigs = await prisma.adminConfig.findMany()
    * ```
    */
  get adminConfig(): Prisma.AdminConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminSettings`: Exposes CRUD operations for the **AdminSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminSettings
    * const adminSettings = await prisma.adminSettings.findMany()
    * ```
    */
  get adminSettings(): Prisma.AdminSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Property: 'Property',
    Address: 'Address',
    PropertyImage: 'PropertyImage',
    Feature: 'Feature',
    PropertyFeature: 'PropertyFeature',
    Inquiry: 'Inquiry',
    Favorite: 'Favorite',
    AdminConfig: 'AdminConfig',
    Conversation: 'Conversation',
    Message: 'Message',
    AdminSettings: 'AdminSettings',
    Review: 'Review'
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
      modelProps: "user" | "property" | "address" | "propertyImage" | "feature" | "propertyFeature" | "inquiry" | "favorite" | "adminConfig" | "conversation" | "message" | "adminSettings" | "review"
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
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      PropertyImage: {
        payload: Prisma.$PropertyImagePayload<ExtArgs>
        fields: Prisma.PropertyImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findFirst: {
            args: Prisma.PropertyImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findMany: {
            args: Prisma.PropertyImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          create: {
            args: Prisma.PropertyImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          createMany: {
            args: Prisma.PropertyImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          delete: {
            args: Prisma.PropertyImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          update: {
            args: Prisma.PropertyImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          deleteMany: {
            args: Prisma.PropertyImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          upsert: {
            args: Prisma.PropertyImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          aggregate: {
            args: Prisma.PropertyImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyImage>
          }
          groupBy: {
            args: Prisma.PropertyImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyImageCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageCountAggregateOutputType> | number
          }
        }
      }
      Feature: {
        payload: Prisma.$FeaturePayload<ExtArgs>
        fields: Prisma.FeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findFirst: {
            args: Prisma.FeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findMany: {
            args: Prisma.FeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          create: {
            args: Prisma.FeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          createMany: {
            args: Prisma.FeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          delete: {
            args: Prisma.FeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          update: {
            args: Prisma.FeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          deleteMany: {
            args: Prisma.FeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          upsert: {
            args: Prisma.FeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          aggregate: {
            args: Prisma.FeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeature>
          }
          groupBy: {
            args: Prisma.FeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureCountAggregateOutputType> | number
          }
        }
      }
      PropertyFeature: {
        payload: Prisma.$PropertyFeaturePayload<ExtArgs>
        fields: Prisma.PropertyFeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFeaturePayload>
          }
          findFirst: {
            args: Prisma.PropertyFeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFeaturePayload>
          }
          findMany: {
            args: Prisma.PropertyFeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFeaturePayload>[]
          }
          create: {
            args: Prisma.PropertyFeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFeaturePayload>
          }
          createMany: {
            args: Prisma.PropertyFeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyFeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFeaturePayload>[]
          }
          delete: {
            args: Prisma.PropertyFeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFeaturePayload>
          }
          update: {
            args: Prisma.PropertyFeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFeaturePayload>
          }
          deleteMany: {
            args: Prisma.PropertyFeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyFeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyFeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFeaturePayload>[]
          }
          upsert: {
            args: Prisma.PropertyFeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyFeaturePayload>
          }
          aggregate: {
            args: Prisma.PropertyFeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyFeature>
          }
          groupBy: {
            args: Prisma.PropertyFeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyFeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyFeatureCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyFeatureCountAggregateOutputType> | number
          }
        }
      }
      Inquiry: {
        payload: Prisma.$InquiryPayload<ExtArgs>
        fields: Prisma.InquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findFirst: {
            args: Prisma.InquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findMany: {
            args: Prisma.InquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          create: {
            args: Prisma.InquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          createMany: {
            args: Prisma.InquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          delete: {
            args: Prisma.InquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          update: {
            args: Prisma.InquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          deleteMany: {
            args: Prisma.InquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          upsert: {
            args: Prisma.InquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.InquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      AdminConfig: {
        payload: Prisma.$AdminConfigPayload<ExtArgs>
        fields: Prisma.AdminConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>
          }
          findFirst: {
            args: Prisma.AdminConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>
          }
          findMany: {
            args: Prisma.AdminConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>[]
          }
          create: {
            args: Prisma.AdminConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>
          }
          createMany: {
            args: Prisma.AdminConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>[]
          }
          delete: {
            args: Prisma.AdminConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>
          }
          update: {
            args: Prisma.AdminConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>
          }
          deleteMany: {
            args: Prisma.AdminConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>[]
          }
          upsert: {
            args: Prisma.AdminConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>
          }
          aggregate: {
            args: Prisma.AdminConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminConfig>
          }
          groupBy: {
            args: Prisma.AdminConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminConfigCountArgs<ExtArgs>
            result: $Utils.Optional<AdminConfigCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      AdminSettings: {
        payload: Prisma.$AdminSettingsPayload<ExtArgs>
        fields: Prisma.AdminSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminSettingsPayload>
          }
          findFirst: {
            args: Prisma.AdminSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminSettingsPayload>
          }
          findMany: {
            args: Prisma.AdminSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminSettingsPayload>[]
          }
          create: {
            args: Prisma.AdminSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminSettingsPayload>
          }
          createMany: {
            args: Prisma.AdminSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminSettingsPayload>[]
          }
          delete: {
            args: Prisma.AdminSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminSettingsPayload>
          }
          update: {
            args: Prisma.AdminSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminSettingsPayload>
          }
          deleteMany: {
            args: Prisma.AdminSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminSettingsPayload>[]
          }
          upsert: {
            args: Prisma.AdminSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminSettingsPayload>
          }
          aggregate: {
            args: Prisma.AdminSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminSettings>
          }
          groupBy: {
            args: Prisma.AdminSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminSettingsCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    property?: PropertyOmit
    address?: AddressOmit
    propertyImage?: PropertyImageOmit
    feature?: FeatureOmit
    propertyFeature?: PropertyFeatureOmit
    inquiry?: InquiryOmit
    favorite?: FavoriteOmit
    adminConfig?: AdminConfigOmit
    conversation?: ConversationOmit
    message?: MessageOmit
    adminSettings?: AdminSettingsOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    buyerConversations: number
    sellerConversations: number
    favorites: number
    inquiries: number
    sentMessages: number
    properties: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyerConversations?: boolean | UserCountOutputTypeCountBuyerConversationsArgs
    sellerConversations?: boolean | UserCountOutputTypeCountSellerConversationsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    inquiries?: boolean | UserCountOutputTypeCountInquiriesArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    properties?: boolean | UserCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBuyerConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSellerConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    conversations: number
    favorites: number
    inquiries: number
    features: number
    images: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | PropertyCountOutputTypeCountConversationsArgs
    favorites?: boolean | PropertyCountOutputTypeCountFavoritesArgs
    inquiries?: boolean | PropertyCountOutputTypeCountInquiriesArgs
    features?: boolean | PropertyCountOutputTypeCountFeaturesArgs
    images?: boolean | PropertyCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyFeatureWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
  }


  /**
   * Count Type FeatureCountOutputType
   */

  export type FeatureCountOutputType = {
    properties: number
  }

  export type FeatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | FeatureCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureCountOutputType
     */
    select?: FeatureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyFeatureWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
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
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    googleId: string | null
    lastName: string | null
    provider: string | null
    avatar: string | null
    bio: string | null
    location: string | null
    phone: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    googleId: string | null
    lastName: string | null
    provider: string | null
    avatar: string | null
    bio: string | null
    location: string | null
    phone: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    firstName: number
    googleId: number
    lastName: number
    provider: number
    avatar: number
    bio: number
    location: number
    phone: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    googleId?: true
    lastName?: true
    provider?: true
    avatar?: true
    bio?: true
    location?: true
    phone?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    googleId?: true
    lastName?: true
    provider?: true
    avatar?: true
    bio?: true
    location?: true
    phone?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    googleId?: true
    lastName?: true
    provider?: true
    avatar?: true
    bio?: true
    location?: true
    phone?: true
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
    username: string | null
    email: string
    password: string | null
    createdAt: Date
    updatedAt: Date
    firstName: string | null
    googleId: string | null
    lastName: string | null
    provider: string
    avatar: string | null
    bio: string | null
    location: string | null
    phone: string | null
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
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    googleId?: boolean
    lastName?: boolean
    provider?: boolean
    avatar?: boolean
    bio?: boolean
    location?: boolean
    phone?: boolean
    buyerConversations?: boolean | User$buyerConversationsArgs<ExtArgs>
    sellerConversations?: boolean | User$sellerConversationsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    inquiries?: boolean | User$inquiriesArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    properties?: boolean | User$propertiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    googleId?: boolean
    lastName?: boolean
    provider?: boolean
    avatar?: boolean
    bio?: boolean
    location?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    googleId?: boolean
    lastName?: boolean
    provider?: boolean
    avatar?: boolean
    bio?: boolean
    location?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    googleId?: boolean
    lastName?: boolean
    provider?: boolean
    avatar?: boolean
    bio?: boolean
    location?: boolean
    phone?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt" | "updatedAt" | "firstName" | "googleId" | "lastName" | "provider" | "avatar" | "bio" | "location" | "phone", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyerConversations?: boolean | User$buyerConversationsArgs<ExtArgs>
    sellerConversations?: boolean | User$sellerConversationsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    inquiries?: boolean | User$inquiriesArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    properties?: boolean | User$propertiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      buyerConversations: Prisma.$ConversationPayload<ExtArgs>[]
      sellerConversations: Prisma.$ConversationPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      inquiries: Prisma.$InquiryPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string | null
      email: string
      password: string | null
      createdAt: Date
      updatedAt: Date
      firstName: string | null
      googleId: string | null
      lastName: string | null
      provider: string
      avatar: string | null
      bio: string | null
      location: string | null
      phone: string | null
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
    buyerConversations<T extends User$buyerConversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$buyerConversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sellerConversations<T extends User$sellerConversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$sellerConversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inquiries<T extends User$inquiriesArgs<ExtArgs> = {}>(args?: Subset<T, User$inquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    properties<T extends User$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, User$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.buyerConversations
   */
  export type User$buyerConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.sellerConversations
   */
  export type User$sellerConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User.inquiries
   */
  export type User$inquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    cursor?: InquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.properties
   */
  export type User$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type PropertySumAggregateOutputType = {
    price: Decimal | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: Decimal | null
    propertyType: string | null
    verificationStatus: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    instagram: string | null
    youtube: string | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: Decimal | null
    propertyType: string | null
    verificationStatus: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    instagram: string | null
    youtube: string | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    propertyType: number
    verificationStatus: number
    ownerId: number
    createdAt: number
    updatedAt: number
    instagram: number
    youtube: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    price?: true
  }

  export type PropertySumAggregateInputType = {
    price?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    propertyType?: true
    verificationStatus?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    instagram?: true
    youtube?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    propertyType?: true
    verificationStatus?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    instagram?: true
    youtube?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    propertyType?: true
    verificationStatus?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    instagram?: true
    youtube?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    title: string | null
    description: string | null
    price: Decimal | null
    propertyType: string | null
    verificationStatus: string
    ownerId: string | null
    createdAt: Date
    updatedAt: Date
    instagram: string | null
    youtube: string | null
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    propertyType?: boolean
    verificationStatus?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instagram?: boolean
    youtube?: boolean
    address?: boolean | Property$addressArgs<ExtArgs>
    conversations?: boolean | Property$conversationsArgs<ExtArgs>
    favorites?: boolean | Property$favoritesArgs<ExtArgs>
    inquiries?: boolean | Property$inquiriesArgs<ExtArgs>
    owner?: boolean | Property$ownerArgs<ExtArgs>
    features?: boolean | Property$featuresArgs<ExtArgs>
    images?: boolean | Property$imagesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    propertyType?: boolean
    verificationStatus?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instagram?: boolean
    youtube?: boolean
    owner?: boolean | Property$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    propertyType?: boolean
    verificationStatus?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instagram?: boolean
    youtube?: boolean
    owner?: boolean | Property$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    propertyType?: boolean
    verificationStatus?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instagram?: boolean
    youtube?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "propertyType" | "verificationStatus" | "ownerId" | "createdAt" | "updatedAt" | "instagram" | "youtube", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Property$addressArgs<ExtArgs>
    conversations?: boolean | Property$conversationsArgs<ExtArgs>
    favorites?: boolean | Property$favoritesArgs<ExtArgs>
    inquiries?: boolean | Property$inquiriesArgs<ExtArgs>
    owner?: boolean | Property$ownerArgs<ExtArgs>
    features?: boolean | Property$featuresArgs<ExtArgs>
    images?: boolean | Property$imagesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Property$ownerArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Property$ownerArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs> | null
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      inquiries: Prisma.$InquiryPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs> | null
      features: Prisma.$PropertyFeaturePayload<ExtArgs>[]
      images: Prisma.$PropertyImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      description: string | null
      price: Prisma.Decimal | null
      propertyType: string | null
      verificationStatus: string
      ownerId: string | null
      createdAt: Date
      updatedAt: Date
      instagram: string | null
      youtube: string | null
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends Property$addressArgs<ExtArgs> = {}>(args?: Subset<T, Property$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    conversations<T extends Property$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Property$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Property$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Property$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inquiries<T extends Property$inquiriesArgs<ExtArgs> = {}>(args?: Subset<T, Property$inquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends Property$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Property$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    features<T extends Property$featuresArgs<ExtArgs> = {}>(args?: Subset<T, Property$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Property$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Property$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly title: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly price: FieldRef<"Property", 'Decimal'>
    readonly propertyType: FieldRef<"Property", 'String'>
    readonly verificationStatus: FieldRef<"Property", 'String'>
    readonly ownerId: FieldRef<"Property", 'String'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
    readonly instagram: FieldRef<"Property", 'String'>
    readonly youtube: FieldRef<"Property", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.address
   */
  export type Property$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Property.conversations
   */
  export type Property$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Property.favorites
   */
  export type Property$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Property.inquiries
   */
  export type Property$inquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    cursor?: InquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Property.owner
   */
  export type Property$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Property.features
   */
  export type Property$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureInclude<ExtArgs> | null
    where?: PropertyFeatureWhereInput
    orderBy?: PropertyFeatureOrderByWithRelationInput | PropertyFeatureOrderByWithRelationInput[]
    cursor?: PropertyFeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyFeatureScalarFieldEnum | PropertyFeatureScalarFieldEnum[]
  }

  /**
   * Property.images
   */
  export type Property$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    cursor?: PropertyImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    street: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    street: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    propertyId: number
    street: number
    city: number
    state: number
    zipCode: number
    country: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    propertyId?: true
    street?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    propertyId?: true
    street?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    propertyId?: true
    street?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    propertyId: string
    street: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    propertyId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "street" | "city" | "state" | "zipCode" | "country", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      street: string | null
      city: string | null
      state: string | null
      zipCode: string | null
      country: string | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly propertyId: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly zipCode: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model PropertyImage
   */

  export type AggregatePropertyImage = {
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  export type PropertyImageAvgAggregateOutputType = {
    order: number | null
  }

  export type PropertyImageSumAggregateOutputType = {
    order: number | null
  }

  export type PropertyImageMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    url: string | null
    order: number | null
    isPrimary: boolean | null
    createdAt: Date | null
  }

  export type PropertyImageMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    url: string | null
    order: number | null
    isPrimary: boolean | null
    createdAt: Date | null
  }

  export type PropertyImageCountAggregateOutputType = {
    id: number
    propertyId: number
    url: number
    order: number
    isPrimary: number
    createdAt: number
    _all: number
  }


  export type PropertyImageAvgAggregateInputType = {
    order?: true
  }

  export type PropertyImageSumAggregateInputType = {
    order?: true
  }

  export type PropertyImageMinAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    order?: true
    isPrimary?: true
    createdAt?: true
  }

  export type PropertyImageMaxAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    order?: true
    isPrimary?: true
    createdAt?: true
  }

  export type PropertyImageCountAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    order?: true
    isPrimary?: true
    createdAt?: true
    _all?: true
  }

  export type PropertyImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImage to aggregate.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyImages
    **/
    _count?: true | PropertyImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyImageMaxAggregateInputType
  }

  export type GetPropertyImageAggregateType<T extends PropertyImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyImage[P]>
      : GetScalarType<T[P], AggregatePropertyImage[P]>
  }




  export type PropertyImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithAggregationInput | PropertyImageOrderByWithAggregationInput[]
    by: PropertyImageScalarFieldEnum[] | PropertyImageScalarFieldEnum
    having?: PropertyImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyImageCountAggregateInputType | true
    _avg?: PropertyImageAvgAggregateInputType
    _sum?: PropertyImageSumAggregateInputType
    _min?: PropertyImageMinAggregateInputType
    _max?: PropertyImageMaxAggregateInputType
  }

  export type PropertyImageGroupByOutputType = {
    id: string
    propertyId: string
    url: string
    order: number
    isPrimary: boolean
    createdAt: Date
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  type GetPropertyImageGroupByPayload<T extends PropertyImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
        }
      >
    >


  export type PropertyImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    order?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    order?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    order?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectScalar = {
    id?: boolean
    propertyId?: boolean
    url?: boolean
    order?: boolean
    isPrimary?: boolean
    createdAt?: boolean
  }

  export type PropertyImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "url" | "order" | "isPrimary" | "createdAt", ExtArgs["result"]["propertyImage"]>
  export type PropertyImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyImage"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      url: string
      order: number
      isPrimary: boolean
      createdAt: Date
    }, ExtArgs["result"]["propertyImage"]>
    composites: {}
  }

  type PropertyImageGetPayload<S extends boolean | null | undefined | PropertyImageDefaultArgs> = $Result.GetResult<Prisma.$PropertyImagePayload, S>

  type PropertyImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyImageCountAggregateInputType | true
    }

  export interface PropertyImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyImage'], meta: { name: 'PropertyImage' } }
    /**
     * Find zero or one PropertyImage that matches the filter.
     * @param {PropertyImageFindUniqueArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyImageFindUniqueArgs>(args: SelectSubset<T, PropertyImageFindUniqueArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyImageFindUniqueOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyImageFindFirstArgs>(args?: SelectSubset<T, PropertyImageFindFirstArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany()
     * 
     * // Get first 10 PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyImageFindManyArgs>(args?: SelectSubset<T, PropertyImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyImage.
     * @param {PropertyImageCreateArgs} args - Arguments to create a PropertyImage.
     * @example
     * // Create one PropertyImage
     * const PropertyImage = await prisma.propertyImage.create({
     *   data: {
     *     // ... data to create a PropertyImage
     *   }
     * })
     * 
     */
    create<T extends PropertyImageCreateArgs>(args: SelectSubset<T, PropertyImageCreateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyImages.
     * @param {PropertyImageCreateManyArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyImageCreateManyArgs>(args?: SelectSubset<T, PropertyImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyImages and returns the data saved in the database.
     * @param {PropertyImageCreateManyAndReturnArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyImage.
     * @param {PropertyImageDeleteArgs} args - Arguments to delete one PropertyImage.
     * @example
     * // Delete one PropertyImage
     * const PropertyImage = await prisma.propertyImage.delete({
     *   where: {
     *     // ... filter to delete one PropertyImage
     *   }
     * })
     * 
     */
    delete<T extends PropertyImageDeleteArgs>(args: SelectSubset<T, PropertyImageDeleteArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyImage.
     * @param {PropertyImageUpdateArgs} args - Arguments to update one PropertyImage.
     * @example
     * // Update one PropertyImage
     * const propertyImage = await prisma.propertyImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyImageUpdateArgs>(args: SelectSubset<T, PropertyImageUpdateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyImages.
     * @param {PropertyImageDeleteManyArgs} args - Arguments to filter PropertyImages to delete.
     * @example
     * // Delete a few PropertyImages
     * const { count } = await prisma.propertyImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyImageDeleteManyArgs>(args?: SelectSubset<T, PropertyImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyImageUpdateManyArgs>(args: SelectSubset<T, PropertyImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages and returns the data updated in the database.
     * @param {PropertyImageUpdateManyAndReturnArgs} args - Arguments to update many PropertyImages.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyImageUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyImage.
     * @param {PropertyImageUpsertArgs} args - Arguments to update or create a PropertyImage.
     * @example
     * // Update or create a PropertyImage
     * const propertyImage = await prisma.propertyImage.upsert({
     *   create: {
     *     // ... data to create a PropertyImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyImage we want to update
     *   }
     * })
     */
    upsert<T extends PropertyImageUpsertArgs>(args: SelectSubset<T, PropertyImageUpsertArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageCountArgs} args - Arguments to filter PropertyImages to count.
     * @example
     * // Count the number of PropertyImages
     * const count = await prisma.propertyImage.count({
     *   where: {
     *     // ... the filter for the PropertyImages we want to count
     *   }
     * })
    **/
    count<T extends PropertyImageCountArgs>(
      args?: Subset<T, PropertyImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyImageAggregateArgs>(args: Subset<T, PropertyImageAggregateArgs>): Prisma.PrismaPromise<GetPropertyImageAggregateType<T>>

    /**
     * Group by PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageGroupByArgs} args - Group by arguments.
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
      T extends PropertyImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyImageGroupByArgs['orderBy'] }
        : { orderBy?: PropertyImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyImage model
   */
  readonly fields: PropertyImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropertyImage model
   */
  interface PropertyImageFieldRefs {
    readonly id: FieldRef<"PropertyImage", 'String'>
    readonly propertyId: FieldRef<"PropertyImage", 'String'>
    readonly url: FieldRef<"PropertyImage", 'String'>
    readonly order: FieldRef<"PropertyImage", 'Int'>
    readonly isPrimary: FieldRef<"PropertyImage", 'Boolean'>
    readonly createdAt: FieldRef<"PropertyImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyImage findUnique
   */
  export type PropertyImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findUniqueOrThrow
   */
  export type PropertyImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findFirst
   */
  export type PropertyImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findFirstOrThrow
   */
  export type PropertyImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findMany
   */
  export type PropertyImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage create
   */
  export type PropertyImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyImage.
     */
    data: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
  }

  /**
   * PropertyImage createMany
   */
  export type PropertyImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyImage createManyAndReturn
   */
  export type PropertyImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage update
   */
  export type PropertyImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyImage.
     */
    data: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
    /**
     * Choose, which PropertyImage to update.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage updateMany
   */
  export type PropertyImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to update.
     */
    limit?: number
  }

  /**
   * PropertyImage updateManyAndReturn
   */
  export type PropertyImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage upsert
   */
  export type PropertyImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyImage to update in case it exists.
     */
    where: PropertyImageWhereUniqueInput
    /**
     * In case the PropertyImage found by the `where` argument doesn't exist, create a new PropertyImage with this data.
     */
    create: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
    /**
     * In case the PropertyImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
  }

  /**
   * PropertyImage delete
   */
  export type PropertyImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter which PropertyImage to delete.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage deleteMany
   */
  export type PropertyImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImages to delete
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to delete.
     */
    limit?: number
  }

  /**
   * PropertyImage without action
   */
  export type PropertyImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
  }


  /**
   * Model Feature
   */

  export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  export type FeatureMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FeatureMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FeatureCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FeatureMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FeatureMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FeatureCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feature to aggregate.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Features
    **/
    _count?: true | FeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMaxAggregateInputType
  }

  export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature[P]>
      : GetScalarType<T[P], AggregateFeature[P]>
  }




  export type FeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithAggregationInput | FeatureOrderByWithAggregationInput[]
    by: FeatureScalarFieldEnum[] | FeatureScalarFieldEnum
    having?: FeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureCountAggregateInputType | true
    _min?: FeatureMinAggregateInputType
    _max?: FeatureMaxAggregateInputType
  }

  export type FeatureGroupByOutputType = {
    id: string
    name: string
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureGroupByOutputType[P]>
        }
      >
    >


  export type FeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    properties?: boolean | Feature$propertiesArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["feature"]>
  export type FeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | Feature$propertiesArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feature"
    objects: {
      properties: Prisma.$PropertyFeaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["feature"]>
    composites: {}
  }

  type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = $Result.GetResult<Prisma.$FeaturePayload, S>

  type FeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureCountAggregateInputType | true
    }

  export interface FeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feature'], meta: { name: 'Feature' } }
    /**
     * Find zero or one Feature that matches the filter.
     * @param {FeatureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFindUniqueArgs>(args: SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFindFirstArgs>(args?: SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     * 
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureWithIdOnly = await prisma.feature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureFindManyArgs>(args?: SelectSubset<T, FeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feature.
     * @param {FeatureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     * 
     */
    create<T extends FeatureCreateArgs>(args: SelectSubset<T, FeatureCreateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Features.
     * @param {FeatureCreateManyArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureCreateManyArgs>(args?: SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Features and returns the data saved in the database.
     * @param {FeatureCreateManyAndReturnArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feature.
     * @param {FeatureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     * 
     */
    delete<T extends FeatureDeleteArgs>(args: SelectSubset<T, FeatureDeleteArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feature.
     * @param {FeatureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureUpdateArgs>(args: SelectSubset<T, FeatureUpdateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Features.
     * @param {FeatureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureDeleteManyArgs>(args?: SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureUpdateManyArgs>(args: SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features and returns the data updated in the database.
     * @param {FeatureUpdateManyAndReturnArgs} args - Arguments to update many Features.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, FeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feature.
     * @param {FeatureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
     */
    upsert<T extends FeatureUpsertArgs>(args: SelectSubset<T, FeatureUpsertArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends FeatureCountArgs>(
      args?: Subset<T, FeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureAggregateArgs>(args: Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>

    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupByArgs} args - Group by arguments.
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
      T extends FeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureGroupByArgs['orderBy'] }
        : { orderBy?: FeatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feature model
   */
  readonly fields: FeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends Feature$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Feature$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Feature model
   */
  interface FeatureFieldRefs {
    readonly id: FieldRef<"Feature", 'String'>
    readonly name: FieldRef<"Feature", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Feature findUnique
   */
  export type FeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findUniqueOrThrow
   */
  export type FeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findFirst
   */
  export type FeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findFirstOrThrow
   */
  export type FeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findMany
   */
  export type FeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Features to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature create
   */
  export type FeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Feature.
     */
    data: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
  }

  /**
   * Feature createMany
   */
  export type FeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature createManyAndReturn
   */
  export type FeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature update
   */
  export type FeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Feature.
     */
    data: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
    /**
     * Choose, which Feature to update.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature updateMany
   */
  export type FeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature updateManyAndReturn
   */
  export type FeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature upsert
   */
  export type FeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Feature to update in case it exists.
     */
    where: FeatureWhereUniqueInput
    /**
     * In case the Feature found by the `where` argument doesn't exist, create a new Feature with this data.
     */
    create: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
    /**
     * In case the Feature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
  }

  /**
   * Feature delete
   */
  export type FeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter which Feature to delete.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature deleteMany
   */
  export type FeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Features to delete
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to delete.
     */
    limit?: number
  }

  /**
   * Feature.properties
   */
  export type Feature$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureInclude<ExtArgs> | null
    where?: PropertyFeatureWhereInput
    orderBy?: PropertyFeatureOrderByWithRelationInput | PropertyFeatureOrderByWithRelationInput[]
    cursor?: PropertyFeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyFeatureScalarFieldEnum | PropertyFeatureScalarFieldEnum[]
  }

  /**
   * Feature without action
   */
  export type FeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
  }


  /**
   * Model PropertyFeature
   */

  export type AggregatePropertyFeature = {
    _count: PropertyFeatureCountAggregateOutputType | null
    _min: PropertyFeatureMinAggregateOutputType | null
    _max: PropertyFeatureMaxAggregateOutputType | null
  }

  export type PropertyFeatureMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    featureId: string | null
  }

  export type PropertyFeatureMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    featureId: string | null
  }

  export type PropertyFeatureCountAggregateOutputType = {
    id: number
    propertyId: number
    featureId: number
    _all: number
  }


  export type PropertyFeatureMinAggregateInputType = {
    id?: true
    propertyId?: true
    featureId?: true
  }

  export type PropertyFeatureMaxAggregateInputType = {
    id?: true
    propertyId?: true
    featureId?: true
  }

  export type PropertyFeatureCountAggregateInputType = {
    id?: true
    propertyId?: true
    featureId?: true
    _all?: true
  }

  export type PropertyFeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyFeature to aggregate.
     */
    where?: PropertyFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyFeatures to fetch.
     */
    orderBy?: PropertyFeatureOrderByWithRelationInput | PropertyFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyFeatures
    **/
    _count?: true | PropertyFeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyFeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyFeatureMaxAggregateInputType
  }

  export type GetPropertyFeatureAggregateType<T extends PropertyFeatureAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyFeature[P]>
      : GetScalarType<T[P], AggregatePropertyFeature[P]>
  }




  export type PropertyFeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyFeatureWhereInput
    orderBy?: PropertyFeatureOrderByWithAggregationInput | PropertyFeatureOrderByWithAggregationInput[]
    by: PropertyFeatureScalarFieldEnum[] | PropertyFeatureScalarFieldEnum
    having?: PropertyFeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyFeatureCountAggregateInputType | true
    _min?: PropertyFeatureMinAggregateInputType
    _max?: PropertyFeatureMaxAggregateInputType
  }

  export type PropertyFeatureGroupByOutputType = {
    id: string
    propertyId: string
    featureId: string
    _count: PropertyFeatureCountAggregateOutputType | null
    _min: PropertyFeatureMinAggregateOutputType | null
    _max: PropertyFeatureMaxAggregateOutputType | null
  }

  type GetPropertyFeatureGroupByPayload<T extends PropertyFeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyFeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyFeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyFeatureGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyFeatureGroupByOutputType[P]>
        }
      >
    >


  export type PropertyFeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    featureId?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyFeature"]>

  export type PropertyFeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    featureId?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyFeature"]>

  export type PropertyFeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    featureId?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyFeature"]>

  export type PropertyFeatureSelectScalar = {
    id?: boolean
    propertyId?: boolean
    featureId?: boolean
  }

  export type PropertyFeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "featureId", ExtArgs["result"]["propertyFeature"]>
  export type PropertyFeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyFeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyFeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyFeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyFeature"
    objects: {
      feature: Prisma.$FeaturePayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      featureId: string
    }, ExtArgs["result"]["propertyFeature"]>
    composites: {}
  }

  type PropertyFeatureGetPayload<S extends boolean | null | undefined | PropertyFeatureDefaultArgs> = $Result.GetResult<Prisma.$PropertyFeaturePayload, S>

  type PropertyFeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyFeatureCountAggregateInputType | true
    }

  export interface PropertyFeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyFeature'], meta: { name: 'PropertyFeature' } }
    /**
     * Find zero or one PropertyFeature that matches the filter.
     * @param {PropertyFeatureFindUniqueArgs} args - Arguments to find a PropertyFeature
     * @example
     * // Get one PropertyFeature
     * const propertyFeature = await prisma.propertyFeature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFeatureFindUniqueArgs>(args: SelectSubset<T, PropertyFeatureFindUniqueArgs<ExtArgs>>): Prisma__PropertyFeatureClient<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyFeature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFeatureFindUniqueOrThrowArgs} args - Arguments to find a PropertyFeature
     * @example
     * // Get one PropertyFeature
     * const propertyFeature = await prisma.propertyFeature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyFeatureClient<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyFeature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFeatureFindFirstArgs} args - Arguments to find a PropertyFeature
     * @example
     * // Get one PropertyFeature
     * const propertyFeature = await prisma.propertyFeature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFeatureFindFirstArgs>(args?: SelectSubset<T, PropertyFeatureFindFirstArgs<ExtArgs>>): Prisma__PropertyFeatureClient<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyFeature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFeatureFindFirstOrThrowArgs} args - Arguments to find a PropertyFeature
     * @example
     * // Get one PropertyFeature
     * const propertyFeature = await prisma.propertyFeature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyFeatureClient<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyFeatures
     * const propertyFeatures = await prisma.propertyFeature.findMany()
     * 
     * // Get first 10 PropertyFeatures
     * const propertyFeatures = await prisma.propertyFeature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyFeatureWithIdOnly = await prisma.propertyFeature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFeatureFindManyArgs>(args?: SelectSubset<T, PropertyFeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyFeature.
     * @param {PropertyFeatureCreateArgs} args - Arguments to create a PropertyFeature.
     * @example
     * // Create one PropertyFeature
     * const PropertyFeature = await prisma.propertyFeature.create({
     *   data: {
     *     // ... data to create a PropertyFeature
     *   }
     * })
     * 
     */
    create<T extends PropertyFeatureCreateArgs>(args: SelectSubset<T, PropertyFeatureCreateArgs<ExtArgs>>): Prisma__PropertyFeatureClient<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyFeatures.
     * @param {PropertyFeatureCreateManyArgs} args - Arguments to create many PropertyFeatures.
     * @example
     * // Create many PropertyFeatures
     * const propertyFeature = await prisma.propertyFeature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyFeatureCreateManyArgs>(args?: SelectSubset<T, PropertyFeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyFeatures and returns the data saved in the database.
     * @param {PropertyFeatureCreateManyAndReturnArgs} args - Arguments to create many PropertyFeatures.
     * @example
     * // Create many PropertyFeatures
     * const propertyFeature = await prisma.propertyFeature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyFeatures and only return the `id`
     * const propertyFeatureWithIdOnly = await prisma.propertyFeature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyFeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyFeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyFeature.
     * @param {PropertyFeatureDeleteArgs} args - Arguments to delete one PropertyFeature.
     * @example
     * // Delete one PropertyFeature
     * const PropertyFeature = await prisma.propertyFeature.delete({
     *   where: {
     *     // ... filter to delete one PropertyFeature
     *   }
     * })
     * 
     */
    delete<T extends PropertyFeatureDeleteArgs>(args: SelectSubset<T, PropertyFeatureDeleteArgs<ExtArgs>>): Prisma__PropertyFeatureClient<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyFeature.
     * @param {PropertyFeatureUpdateArgs} args - Arguments to update one PropertyFeature.
     * @example
     * // Update one PropertyFeature
     * const propertyFeature = await prisma.propertyFeature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyFeatureUpdateArgs>(args: SelectSubset<T, PropertyFeatureUpdateArgs<ExtArgs>>): Prisma__PropertyFeatureClient<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyFeatures.
     * @param {PropertyFeatureDeleteManyArgs} args - Arguments to filter PropertyFeatures to delete.
     * @example
     * // Delete a few PropertyFeatures
     * const { count } = await prisma.propertyFeature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyFeatureDeleteManyArgs>(args?: SelectSubset<T, PropertyFeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyFeatures
     * const propertyFeature = await prisma.propertyFeature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyFeatureUpdateManyArgs>(args: SelectSubset<T, PropertyFeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyFeatures and returns the data updated in the database.
     * @param {PropertyFeatureUpdateManyAndReturnArgs} args - Arguments to update many PropertyFeatures.
     * @example
     * // Update many PropertyFeatures
     * const propertyFeature = await prisma.propertyFeature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyFeatures and only return the `id`
     * const propertyFeatureWithIdOnly = await prisma.propertyFeature.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyFeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyFeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyFeature.
     * @param {PropertyFeatureUpsertArgs} args - Arguments to update or create a PropertyFeature.
     * @example
     * // Update or create a PropertyFeature
     * const propertyFeature = await prisma.propertyFeature.upsert({
     *   create: {
     *     // ... data to create a PropertyFeature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyFeature we want to update
     *   }
     * })
     */
    upsert<T extends PropertyFeatureUpsertArgs>(args: SelectSubset<T, PropertyFeatureUpsertArgs<ExtArgs>>): Prisma__PropertyFeatureClient<$Result.GetResult<Prisma.$PropertyFeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFeatureCountArgs} args - Arguments to filter PropertyFeatures to count.
     * @example
     * // Count the number of PropertyFeatures
     * const count = await prisma.propertyFeature.count({
     *   where: {
     *     // ... the filter for the PropertyFeatures we want to count
     *   }
     * })
    **/
    count<T extends PropertyFeatureCountArgs>(
      args?: Subset<T, PropertyFeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyFeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyFeatureAggregateArgs>(args: Subset<T, PropertyFeatureAggregateArgs>): Prisma.PrismaPromise<GetPropertyFeatureAggregateType<T>>

    /**
     * Group by PropertyFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFeatureGroupByArgs} args - Group by arguments.
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
      T extends PropertyFeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyFeatureGroupByArgs['orderBy'] }
        : { orderBy?: PropertyFeatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyFeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyFeature model
   */
  readonly fields: PropertyFeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyFeature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyFeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feature<T extends FeatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureDefaultArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropertyFeature model
   */
  interface PropertyFeatureFieldRefs {
    readonly id: FieldRef<"PropertyFeature", 'String'>
    readonly propertyId: FieldRef<"PropertyFeature", 'String'>
    readonly featureId: FieldRef<"PropertyFeature", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PropertyFeature findUnique
   */
  export type PropertyFeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureInclude<ExtArgs> | null
    /**
     * Filter, which PropertyFeature to fetch.
     */
    where: PropertyFeatureWhereUniqueInput
  }

  /**
   * PropertyFeature findUniqueOrThrow
   */
  export type PropertyFeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureInclude<ExtArgs> | null
    /**
     * Filter, which PropertyFeature to fetch.
     */
    where: PropertyFeatureWhereUniqueInput
  }

  /**
   * PropertyFeature findFirst
   */
  export type PropertyFeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureInclude<ExtArgs> | null
    /**
     * Filter, which PropertyFeature to fetch.
     */
    where?: PropertyFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyFeatures to fetch.
     */
    orderBy?: PropertyFeatureOrderByWithRelationInput | PropertyFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyFeatures.
     */
    cursor?: PropertyFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyFeatures.
     */
    distinct?: PropertyFeatureScalarFieldEnum | PropertyFeatureScalarFieldEnum[]
  }

  /**
   * PropertyFeature findFirstOrThrow
   */
  export type PropertyFeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureInclude<ExtArgs> | null
    /**
     * Filter, which PropertyFeature to fetch.
     */
    where?: PropertyFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyFeatures to fetch.
     */
    orderBy?: PropertyFeatureOrderByWithRelationInput | PropertyFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyFeatures.
     */
    cursor?: PropertyFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyFeatures.
     */
    distinct?: PropertyFeatureScalarFieldEnum | PropertyFeatureScalarFieldEnum[]
  }

  /**
   * PropertyFeature findMany
   */
  export type PropertyFeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureInclude<ExtArgs> | null
    /**
     * Filter, which PropertyFeatures to fetch.
     */
    where?: PropertyFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyFeatures to fetch.
     */
    orderBy?: PropertyFeatureOrderByWithRelationInput | PropertyFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyFeatures.
     */
    cursor?: PropertyFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyFeatures.
     */
    skip?: number
    distinct?: PropertyFeatureScalarFieldEnum | PropertyFeatureScalarFieldEnum[]
  }

  /**
   * PropertyFeature create
   */
  export type PropertyFeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyFeature.
     */
    data: XOR<PropertyFeatureCreateInput, PropertyFeatureUncheckedCreateInput>
  }

  /**
   * PropertyFeature createMany
   */
  export type PropertyFeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyFeatures.
     */
    data: PropertyFeatureCreateManyInput | PropertyFeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyFeature createManyAndReturn
   */
  export type PropertyFeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyFeatures.
     */
    data: PropertyFeatureCreateManyInput | PropertyFeatureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyFeature update
   */
  export type PropertyFeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyFeature.
     */
    data: XOR<PropertyFeatureUpdateInput, PropertyFeatureUncheckedUpdateInput>
    /**
     * Choose, which PropertyFeature to update.
     */
    where: PropertyFeatureWhereUniqueInput
  }

  /**
   * PropertyFeature updateMany
   */
  export type PropertyFeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyFeatures.
     */
    data: XOR<PropertyFeatureUpdateManyMutationInput, PropertyFeatureUncheckedUpdateManyInput>
    /**
     * Filter which PropertyFeatures to update
     */
    where?: PropertyFeatureWhereInput
    /**
     * Limit how many PropertyFeatures to update.
     */
    limit?: number
  }

  /**
   * PropertyFeature updateManyAndReturn
   */
  export type PropertyFeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * The data used to update PropertyFeatures.
     */
    data: XOR<PropertyFeatureUpdateManyMutationInput, PropertyFeatureUncheckedUpdateManyInput>
    /**
     * Filter which PropertyFeatures to update
     */
    where?: PropertyFeatureWhereInput
    /**
     * Limit how many PropertyFeatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyFeature upsert
   */
  export type PropertyFeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyFeature to update in case it exists.
     */
    where: PropertyFeatureWhereUniqueInput
    /**
     * In case the PropertyFeature found by the `where` argument doesn't exist, create a new PropertyFeature with this data.
     */
    create: XOR<PropertyFeatureCreateInput, PropertyFeatureUncheckedCreateInput>
    /**
     * In case the PropertyFeature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyFeatureUpdateInput, PropertyFeatureUncheckedUpdateInput>
  }

  /**
   * PropertyFeature delete
   */
  export type PropertyFeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureInclude<ExtArgs> | null
    /**
     * Filter which PropertyFeature to delete.
     */
    where: PropertyFeatureWhereUniqueInput
  }

  /**
   * PropertyFeature deleteMany
   */
  export type PropertyFeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyFeatures to delete
     */
    where?: PropertyFeatureWhereInput
    /**
     * Limit how many PropertyFeatures to delete.
     */
    limit?: number
  }

  /**
   * PropertyFeature without action
   */
  export type PropertyFeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyFeature
     */
    select?: PropertyFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyFeature
     */
    omit?: PropertyFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyFeatureInclude<ExtArgs> | null
  }


  /**
   * Model Inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    userId: string | null
    name: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
  }

  export type InquiryMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    userId: string | null
    name: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
  }

  export type InquiryCountAggregateOutputType = {
    id: number
    propertyId: number
    userId: number
    name: number
    email: number
    message: number
    createdAt: number
    _all: number
  }


  export type InquiryMinAggregateInputType = {
    id?: true
    propertyId?: true
    userId?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
  }

  export type InquiryMaxAggregateInputType = {
    id?: true
    propertyId?: true
    userId?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
  }

  export type InquiryCountAggregateInputType = {
    id?: true
    propertyId?: true
    userId?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiry to aggregate.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type InquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithAggregationInput | InquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: InquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    id: string
    propertyId: string
    userId: string | null
    name: string
    email: string
    message: string
    createdAt: Date
    _count: InquiryCountAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends InquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type InquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | Inquiry$userArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | Inquiry$userArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | Inquiry$userArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectScalar = {
    id?: boolean
    propertyId?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type InquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "userId" | "name" | "email" | "message" | "createdAt", ExtArgs["result"]["inquiry"]>
  export type InquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | Inquiry$userArgs<ExtArgs>
  }
  export type InquiryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | Inquiry$userArgs<ExtArgs>
  }
  export type InquiryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | Inquiry$userArgs<ExtArgs>
  }

  export type $InquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inquiry"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      userId: string | null
      name: string
      email: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type InquiryGetPayload<S extends boolean | null | undefined | InquiryDefaultArgs> = $Result.GetResult<Prisma.$InquiryPayload, S>

  type InquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface InquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inquiry'], meta: { name: 'Inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {InquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryFindUniqueArgs>(args: SelectSubset<T, InquiryFindUniqueArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryFindFirstArgs>(args?: SelectSubset<T, InquiryFindFirstArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryFindManyArgs>(args?: SelectSubset<T, InquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inquiry.
     * @param {InquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends InquiryCreateArgs>(args: SelectSubset<T, InquiryCreateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inquiries.
     * @param {InquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryCreateManyArgs>(args?: SelectSubset<T, InquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inquiries and returns the data saved in the database.
     * @param {InquiryCreateManyAndReturnArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, InquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inquiry.
     * @param {InquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends InquiryDeleteArgs>(args: SelectSubset<T, InquiryDeleteArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inquiry.
     * @param {InquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryUpdateArgs>(args: SelectSubset<T, InquiryUpdateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inquiries.
     * @param {InquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryDeleteManyArgs>(args?: SelectSubset<T, InquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryUpdateManyArgs>(args: SelectSubset<T, InquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries and returns the data updated in the database.
     * @param {InquiryUpdateManyAndReturnArgs} args - Arguments to update many Inquiries.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.updateManyAndReturn({
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
    updateManyAndReturn<T extends InquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, InquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inquiry.
     * @param {InquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends InquiryUpsertArgs>(args: SelectSubset<T, InquiryUpsertArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends InquiryCountArgs>(
      args?: Subset<T, InquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryGroupByArgs} args - Group by arguments.
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
      T extends InquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryGroupByArgs['orderBy'] }
        : { orderBy?: InquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inquiry model
   */
  readonly fields: InquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Inquiry$userArgs<ExtArgs> = {}>(args?: Subset<T, Inquiry$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inquiry model
   */
  interface InquiryFieldRefs {
    readonly id: FieldRef<"Inquiry", 'String'>
    readonly propertyId: FieldRef<"Inquiry", 'String'>
    readonly userId: FieldRef<"Inquiry", 'String'>
    readonly name: FieldRef<"Inquiry", 'String'>
    readonly email: FieldRef<"Inquiry", 'String'>
    readonly message: FieldRef<"Inquiry", 'String'>
    readonly createdAt: FieldRef<"Inquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inquiry findUnique
   */
  export type InquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findUniqueOrThrow
   */
  export type InquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findFirst
   */
  export type InquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findFirstOrThrow
   */
  export type InquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findMany
   */
  export type InquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiries to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry create
   */
  export type InquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inquiry.
     */
    data: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
  }

  /**
   * Inquiry createMany
   */
  export type InquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquiry createManyAndReturn
   */
  export type InquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inquiry update
   */
  export type InquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inquiry.
     */
    data: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
    /**
     * Choose, which Inquiry to update.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry updateMany
   */
  export type InquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
  }

  /**
   * Inquiry updateManyAndReturn
   */
  export type InquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inquiry upsert
   */
  export type InquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inquiry to update in case it exists.
     */
    where: InquiryWhereUniqueInput
    /**
     * In case the Inquiry found by the `where` argument doesn't exist, create a new Inquiry with this data.
     */
    create: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
    /**
     * In case the Inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
  }

  /**
   * Inquiry delete
   */
  export type InquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter which Inquiry to delete.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry deleteMany
   */
  export type InquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiries to delete
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to delete.
     */
    limit?: number
  }

  /**
   * Inquiry.user
   */
  export type Inquiry$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Inquiry without action
   */
  export type InquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    userId: string
    propertyId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propertyId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      propertyId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly propertyId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model AdminConfig
   */

  export type AggregateAdminConfig = {
    _count: AdminConfigCountAggregateOutputType | null
    _min: AdminConfigMinAggregateOutputType | null
    _max: AdminConfigMaxAggregateOutputType | null
  }

  export type AdminConfigMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminConfigMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminConfigMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminConfigMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminConfig to aggregate.
     */
    where?: AdminConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminConfigs to fetch.
     */
    orderBy?: AdminConfigOrderByWithRelationInput | AdminConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminConfigs
    **/
    _count?: true | AdminConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminConfigMaxAggregateInputType
  }

  export type GetAdminConfigAggregateType<T extends AdminConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminConfig[P]>
      : GetScalarType<T[P], AggregateAdminConfig[P]>
  }




  export type AdminConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminConfigWhereInput
    orderBy?: AdminConfigOrderByWithAggregationInput | AdminConfigOrderByWithAggregationInput[]
    by: AdminConfigScalarFieldEnum[] | AdminConfigScalarFieldEnum
    having?: AdminConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminConfigCountAggregateInputType | true
    _min?: AdminConfigMinAggregateInputType
    _max?: AdminConfigMaxAggregateInputType
  }

  export type AdminConfigGroupByOutputType = {
    id: string
    key: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: AdminConfigCountAggregateOutputType | null
    _min: AdminConfigMinAggregateOutputType | null
    _max: AdminConfigMaxAggregateOutputType | null
  }

  type GetAdminConfigGroupByPayload<T extends AdminConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminConfigGroupByOutputType[P]>
            : GetScalarType<T[P], AdminConfigGroupByOutputType[P]>
        }
      >
    >


  export type AdminConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminConfig"]>

  export type AdminConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminConfig"]>

  export type AdminConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminConfig"]>

  export type AdminConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["adminConfig"]>

  export type $AdminConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminConfig"]>
    composites: {}
  }

  type AdminConfigGetPayload<S extends boolean | null | undefined | AdminConfigDefaultArgs> = $Result.GetResult<Prisma.$AdminConfigPayload, S>

  type AdminConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminConfigCountAggregateInputType | true
    }

  export interface AdminConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminConfig'], meta: { name: 'AdminConfig' } }
    /**
     * Find zero or one AdminConfig that matches the filter.
     * @param {AdminConfigFindUniqueArgs} args - Arguments to find a AdminConfig
     * @example
     * // Get one AdminConfig
     * const adminConfig = await prisma.adminConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminConfigFindUniqueArgs>(args: SelectSubset<T, AdminConfigFindUniqueArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminConfigFindUniqueOrThrowArgs} args - Arguments to find a AdminConfig
     * @example
     * // Get one AdminConfig
     * const adminConfig = await prisma.adminConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigFindFirstArgs} args - Arguments to find a AdminConfig
     * @example
     * // Get one AdminConfig
     * const adminConfig = await prisma.adminConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminConfigFindFirstArgs>(args?: SelectSubset<T, AdminConfigFindFirstArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigFindFirstOrThrowArgs} args - Arguments to find a AdminConfig
     * @example
     * // Get one AdminConfig
     * const adminConfig = await prisma.adminConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminConfigs
     * const adminConfigs = await prisma.adminConfig.findMany()
     * 
     * // Get first 10 AdminConfigs
     * const adminConfigs = await prisma.adminConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminConfigWithIdOnly = await prisma.adminConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminConfigFindManyArgs>(args?: SelectSubset<T, AdminConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminConfig.
     * @param {AdminConfigCreateArgs} args - Arguments to create a AdminConfig.
     * @example
     * // Create one AdminConfig
     * const AdminConfig = await prisma.adminConfig.create({
     *   data: {
     *     // ... data to create a AdminConfig
     *   }
     * })
     * 
     */
    create<T extends AdminConfigCreateArgs>(args: SelectSubset<T, AdminConfigCreateArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminConfigs.
     * @param {AdminConfigCreateManyArgs} args - Arguments to create many AdminConfigs.
     * @example
     * // Create many AdminConfigs
     * const adminConfig = await prisma.adminConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminConfigCreateManyArgs>(args?: SelectSubset<T, AdminConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminConfigs and returns the data saved in the database.
     * @param {AdminConfigCreateManyAndReturnArgs} args - Arguments to create many AdminConfigs.
     * @example
     * // Create many AdminConfigs
     * const adminConfig = await prisma.adminConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminConfigs and only return the `id`
     * const adminConfigWithIdOnly = await prisma.adminConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminConfig.
     * @param {AdminConfigDeleteArgs} args - Arguments to delete one AdminConfig.
     * @example
     * // Delete one AdminConfig
     * const AdminConfig = await prisma.adminConfig.delete({
     *   where: {
     *     // ... filter to delete one AdminConfig
     *   }
     * })
     * 
     */
    delete<T extends AdminConfigDeleteArgs>(args: SelectSubset<T, AdminConfigDeleteArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminConfig.
     * @param {AdminConfigUpdateArgs} args - Arguments to update one AdminConfig.
     * @example
     * // Update one AdminConfig
     * const adminConfig = await prisma.adminConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminConfigUpdateArgs>(args: SelectSubset<T, AdminConfigUpdateArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminConfigs.
     * @param {AdminConfigDeleteManyArgs} args - Arguments to filter AdminConfigs to delete.
     * @example
     * // Delete a few AdminConfigs
     * const { count } = await prisma.adminConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminConfigDeleteManyArgs>(args?: SelectSubset<T, AdminConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminConfigs
     * const adminConfig = await prisma.adminConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminConfigUpdateManyArgs>(args: SelectSubset<T, AdminConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminConfigs and returns the data updated in the database.
     * @param {AdminConfigUpdateManyAndReturnArgs} args - Arguments to update many AdminConfigs.
     * @example
     * // Update many AdminConfigs
     * const adminConfig = await prisma.adminConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminConfigs and only return the `id`
     * const adminConfigWithIdOnly = await prisma.adminConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminConfig.
     * @param {AdminConfigUpsertArgs} args - Arguments to update or create a AdminConfig.
     * @example
     * // Update or create a AdminConfig
     * const adminConfig = await prisma.adminConfig.upsert({
     *   create: {
     *     // ... data to create a AdminConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminConfig we want to update
     *   }
     * })
     */
    upsert<T extends AdminConfigUpsertArgs>(args: SelectSubset<T, AdminConfigUpsertArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigCountArgs} args - Arguments to filter AdminConfigs to count.
     * @example
     * // Count the number of AdminConfigs
     * const count = await prisma.adminConfig.count({
     *   where: {
     *     // ... the filter for the AdminConfigs we want to count
     *   }
     * })
    **/
    count<T extends AdminConfigCountArgs>(
      args?: Subset<T, AdminConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminConfigAggregateArgs>(args: Subset<T, AdminConfigAggregateArgs>): Prisma.PrismaPromise<GetAdminConfigAggregateType<T>>

    /**
     * Group by AdminConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigGroupByArgs} args - Group by arguments.
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
      T extends AdminConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminConfigGroupByArgs['orderBy'] }
        : { orderBy?: AdminConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminConfig model
   */
  readonly fields: AdminConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AdminConfig model
   */
  interface AdminConfigFieldRefs {
    readonly id: FieldRef<"AdminConfig", 'String'>
    readonly key: FieldRef<"AdminConfig", 'String'>
    readonly value: FieldRef<"AdminConfig", 'String'>
    readonly createdAt: FieldRef<"AdminConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminConfig findUnique
   */
  export type AdminConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminConfig
     */
    omit?: AdminConfigOmit<ExtArgs> | null
    /**
     * Filter, which AdminConfig to fetch.
     */
    where: AdminConfigWhereUniqueInput
  }

  /**
   * AdminConfig findUniqueOrThrow
   */
  export type AdminConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminConfig
     */
    omit?: AdminConfigOmit<ExtArgs> | null
    /**
     * Filter, which AdminConfig to fetch.
     */
    where: AdminConfigWhereUniqueInput
  }

  /**
   * AdminConfig findFirst
   */
  export type AdminConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminConfig
     */
    omit?: AdminConfigOmit<ExtArgs> | null
    /**
     * Filter, which AdminConfig to fetch.
     */
    where?: AdminConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminConfigs to fetch.
     */
    orderBy?: AdminConfigOrderByWithRelationInput | AdminConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminConfigs.
     */
    cursor?: AdminConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminConfigs.
     */
    distinct?: AdminConfigScalarFieldEnum | AdminConfigScalarFieldEnum[]
  }

  /**
   * AdminConfig findFirstOrThrow
   */
  export type AdminConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminConfig
     */
    omit?: AdminConfigOmit<ExtArgs> | null
    /**
     * Filter, which AdminConfig to fetch.
     */
    where?: AdminConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminConfigs to fetch.
     */
    orderBy?: AdminConfigOrderByWithRelationInput | AdminConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminConfigs.
     */
    cursor?: AdminConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminConfigs.
     */
    distinct?: AdminConfigScalarFieldEnum | AdminConfigScalarFieldEnum[]
  }

  /**
   * AdminConfig findMany
   */
  export type AdminConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminConfig
     */
    omit?: AdminConfigOmit<ExtArgs> | null
    /**
     * Filter, which AdminConfigs to fetch.
     */
    where?: AdminConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminConfigs to fetch.
     */
    orderBy?: AdminConfigOrderByWithRelationInput | AdminConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminConfigs.
     */
    cursor?: AdminConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminConfigs.
     */
    skip?: number
    distinct?: AdminConfigScalarFieldEnum | AdminConfigScalarFieldEnum[]
  }

  /**
   * AdminConfig create
   */
  export type AdminConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminConfig
     */
    omit?: AdminConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminConfig.
     */
    data: XOR<AdminConfigCreateInput, AdminConfigUncheckedCreateInput>
  }

  /**
   * AdminConfig createMany
   */
  export type AdminConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminConfigs.
     */
    data: AdminConfigCreateManyInput | AdminConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminConfig createManyAndReturn
   */
  export type AdminConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminConfig
     */
    omit?: AdminConfigOmit<ExtArgs> | null
    /**
     * The data used to create many AdminConfigs.
     */
    data: AdminConfigCreateManyInput | AdminConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminConfig update
   */
  export type AdminConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminConfig
     */
    omit?: AdminConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminConfig.
     */
    data: XOR<AdminConfigUpdateInput, AdminConfigUncheckedUpdateInput>
    /**
     * Choose, which AdminConfig to update.
     */
    where: AdminConfigWhereUniqueInput
  }

  /**
   * AdminConfig updateMany
   */
  export type AdminConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminConfigs.
     */
    data: XOR<AdminConfigUpdateManyMutationInput, AdminConfigUncheckedUpdateManyInput>
    /**
     * Filter which AdminConfigs to update
     */
    where?: AdminConfigWhereInput
    /**
     * Limit how many AdminConfigs to update.
     */
    limit?: number
  }

  /**
   * AdminConfig updateManyAndReturn
   */
  export type AdminConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminConfig
     */
    omit?: AdminConfigOmit<ExtArgs> | null
    /**
     * The data used to update AdminConfigs.
     */
    data: XOR<AdminConfigUpdateManyMutationInput, AdminConfigUncheckedUpdateManyInput>
    /**
     * Filter which AdminConfigs to update
     */
    where?: AdminConfigWhereInput
    /**
     * Limit how many AdminConfigs to update.
     */
    limit?: number
  }

  /**
   * AdminConfig upsert
   */
  export type AdminConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminConfig
     */
    omit?: AdminConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminConfig to update in case it exists.
     */
    where: AdminConfigWhereUniqueInput
    /**
     * In case the AdminConfig found by the `where` argument doesn't exist, create a new AdminConfig with this data.
     */
    create: XOR<AdminConfigCreateInput, AdminConfigUncheckedCreateInput>
    /**
     * In case the AdminConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminConfigUpdateInput, AdminConfigUncheckedUpdateInput>
  }

  /**
   * AdminConfig delete
   */
  export type AdminConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminConfig
     */
    omit?: AdminConfigOmit<ExtArgs> | null
    /**
     * Filter which AdminConfig to delete.
     */
    where: AdminConfigWhereUniqueInput
  }

  /**
   * AdminConfig deleteMany
   */
  export type AdminConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminConfigs to delete
     */
    where?: AdminConfigWhereInput
    /**
     * Limit how many AdminConfigs to delete.
     */
    limit?: number
  }

  /**
   * AdminConfig without action
   */
  export type AdminConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminConfig
     */
    omit?: AdminConfigOmit<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    buyerId: string | null
    sellerId: string | null
    lastMessageAt: Date | null
    createdAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    buyerId: string | null
    sellerId: string | null
    lastMessageAt: Date | null
    createdAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    propertyId: number
    buyerId: number
    sellerId: number
    lastMessageAt: number
    createdAt: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    sellerId?: true
    lastMessageAt?: true
    createdAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    sellerId?: true
    lastMessageAt?: true
    createdAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    sellerId?: true
    lastMessageAt?: true
    createdAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    propertyId: string
    buyerId: string
    sellerId: string
    lastMessageAt: Date
    createdAt: Date
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "buyerId" | "sellerId" | "lastMessageAt" | "createdAt", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      buyer: Prisma.$UserPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      buyerId: string
      sellerId: string
      lastMessageAt: Date
      createdAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
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
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly propertyId: FieldRef<"Conversation", 'String'>
    readonly buyerId: FieldRef<"Conversation", 'String'>
    readonly sellerId: FieldRef<"Conversation", 'String'>
    readonly lastMessageAt: FieldRef<"Conversation", 'DateTime'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
    senderId: string | null
    text: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
    senderId: string | null
    text: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    conversationId: number
    senderId: number
    text: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    conversationId?: true
    senderId?: true
    text?: true
    isRead?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    conversationId?: true
    senderId?: true
    text?: true
    isRead?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    conversationId?: true
    senderId?: true
    text?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    conversationId: string
    senderId: string
    text: string
    isRead: boolean
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    senderId?: boolean
    text?: boolean
    isRead?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    senderId?: boolean
    text?: boolean
    isRead?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    senderId?: boolean
    text?: boolean
    isRead?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    conversationId?: boolean
    senderId?: boolean
    text?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "senderId" | "text" | "isRead" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversationId: string
      senderId: string
      text: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly conversationId: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly text: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model AdminSettings
   */

  export type AggregateAdminSettings = {
    _count: AdminSettingsCountAggregateOutputType | null
    _min: AdminSettingsMinAggregateOutputType | null
    _max: AdminSettingsMaxAggregateOutputType | null
  }

  export type AdminSettingsMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminSettingsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminSettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminSettingsMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminSettingsMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminSettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminSettings to aggregate.
     */
    where?: AdminSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminSettings to fetch.
     */
    orderBy?: AdminSettingsOrderByWithRelationInput | AdminSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminSettings
    **/
    _count?: true | AdminSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminSettingsMaxAggregateInputType
  }

  export type GetAdminSettingsAggregateType<T extends AdminSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminSettings[P]>
      : GetScalarType<T[P], AggregateAdminSettings[P]>
  }




  export type AdminSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminSettingsWhereInput
    orderBy?: AdminSettingsOrderByWithAggregationInput | AdminSettingsOrderByWithAggregationInput[]
    by: AdminSettingsScalarFieldEnum[] | AdminSettingsScalarFieldEnum
    having?: AdminSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminSettingsCountAggregateInputType | true
    _min?: AdminSettingsMinAggregateInputType
    _max?: AdminSettingsMaxAggregateInputType
  }

  export type AdminSettingsGroupByOutputType = {
    id: string
    key: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: AdminSettingsCountAggregateOutputType | null
    _min: AdminSettingsMinAggregateOutputType | null
    _max: AdminSettingsMaxAggregateOutputType | null
  }

  type GetAdminSettingsGroupByPayload<T extends AdminSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminSettingsGroupByOutputType[P]>
        }
      >
    >


  export type AdminSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminSettings"]>

  export type AdminSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminSettings"]>

  export type AdminSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminSettings"]>

  export type AdminSettingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["adminSettings"]>

  export type $AdminSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminSettings"]>
    composites: {}
  }

  type AdminSettingsGetPayload<S extends boolean | null | undefined | AdminSettingsDefaultArgs> = $Result.GetResult<Prisma.$AdminSettingsPayload, S>

  type AdminSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminSettingsCountAggregateInputType | true
    }

  export interface AdminSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminSettings'], meta: { name: 'AdminSettings' } }
    /**
     * Find zero or one AdminSettings that matches the filter.
     * @param {AdminSettingsFindUniqueArgs} args - Arguments to find a AdminSettings
     * @example
     * // Get one AdminSettings
     * const adminSettings = await prisma.adminSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminSettingsFindUniqueArgs>(args: SelectSubset<T, AdminSettingsFindUniqueArgs<ExtArgs>>): Prisma__AdminSettingsClient<$Result.GetResult<Prisma.$AdminSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminSettingsFindUniqueOrThrowArgs} args - Arguments to find a AdminSettings
     * @example
     * // Get one AdminSettings
     * const adminSettings = await prisma.adminSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminSettingsClient<$Result.GetResult<Prisma.$AdminSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminSettingsFindFirstArgs} args - Arguments to find a AdminSettings
     * @example
     * // Get one AdminSettings
     * const adminSettings = await prisma.adminSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminSettingsFindFirstArgs>(args?: SelectSubset<T, AdminSettingsFindFirstArgs<ExtArgs>>): Prisma__AdminSettingsClient<$Result.GetResult<Prisma.$AdminSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminSettingsFindFirstOrThrowArgs} args - Arguments to find a AdminSettings
     * @example
     * // Get one AdminSettings
     * const adminSettings = await prisma.adminSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminSettingsClient<$Result.GetResult<Prisma.$AdminSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminSettings
     * const adminSettings = await prisma.adminSettings.findMany()
     * 
     * // Get first 10 AdminSettings
     * const adminSettings = await prisma.adminSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminSettingsWithIdOnly = await prisma.adminSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminSettingsFindManyArgs>(args?: SelectSubset<T, AdminSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminSettings.
     * @param {AdminSettingsCreateArgs} args - Arguments to create a AdminSettings.
     * @example
     * // Create one AdminSettings
     * const AdminSettings = await prisma.adminSettings.create({
     *   data: {
     *     // ... data to create a AdminSettings
     *   }
     * })
     * 
     */
    create<T extends AdminSettingsCreateArgs>(args: SelectSubset<T, AdminSettingsCreateArgs<ExtArgs>>): Prisma__AdminSettingsClient<$Result.GetResult<Prisma.$AdminSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminSettings.
     * @param {AdminSettingsCreateManyArgs} args - Arguments to create many AdminSettings.
     * @example
     * // Create many AdminSettings
     * const adminSettings = await prisma.adminSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminSettingsCreateManyArgs>(args?: SelectSubset<T, AdminSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminSettings and returns the data saved in the database.
     * @param {AdminSettingsCreateManyAndReturnArgs} args - Arguments to create many AdminSettings.
     * @example
     * // Create many AdminSettings
     * const adminSettings = await prisma.adminSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminSettings and only return the `id`
     * const adminSettingsWithIdOnly = await prisma.adminSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminSettings.
     * @param {AdminSettingsDeleteArgs} args - Arguments to delete one AdminSettings.
     * @example
     * // Delete one AdminSettings
     * const AdminSettings = await prisma.adminSettings.delete({
     *   where: {
     *     // ... filter to delete one AdminSettings
     *   }
     * })
     * 
     */
    delete<T extends AdminSettingsDeleteArgs>(args: SelectSubset<T, AdminSettingsDeleteArgs<ExtArgs>>): Prisma__AdminSettingsClient<$Result.GetResult<Prisma.$AdminSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminSettings.
     * @param {AdminSettingsUpdateArgs} args - Arguments to update one AdminSettings.
     * @example
     * // Update one AdminSettings
     * const adminSettings = await prisma.adminSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminSettingsUpdateArgs>(args: SelectSubset<T, AdminSettingsUpdateArgs<ExtArgs>>): Prisma__AdminSettingsClient<$Result.GetResult<Prisma.$AdminSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminSettings.
     * @param {AdminSettingsDeleteManyArgs} args - Arguments to filter AdminSettings to delete.
     * @example
     * // Delete a few AdminSettings
     * const { count } = await prisma.adminSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminSettingsDeleteManyArgs>(args?: SelectSubset<T, AdminSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminSettings
     * const adminSettings = await prisma.adminSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminSettingsUpdateManyArgs>(args: SelectSubset<T, AdminSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminSettings and returns the data updated in the database.
     * @param {AdminSettingsUpdateManyAndReturnArgs} args - Arguments to update many AdminSettings.
     * @example
     * // Update many AdminSettings
     * const adminSettings = await prisma.adminSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminSettings and only return the `id`
     * const adminSettingsWithIdOnly = await prisma.adminSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminSettings.
     * @param {AdminSettingsUpsertArgs} args - Arguments to update or create a AdminSettings.
     * @example
     * // Update or create a AdminSettings
     * const adminSettings = await prisma.adminSettings.upsert({
     *   create: {
     *     // ... data to create a AdminSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminSettings we want to update
     *   }
     * })
     */
    upsert<T extends AdminSettingsUpsertArgs>(args: SelectSubset<T, AdminSettingsUpsertArgs<ExtArgs>>): Prisma__AdminSettingsClient<$Result.GetResult<Prisma.$AdminSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminSettingsCountArgs} args - Arguments to filter AdminSettings to count.
     * @example
     * // Count the number of AdminSettings
     * const count = await prisma.adminSettings.count({
     *   where: {
     *     // ... the filter for the AdminSettings we want to count
     *   }
     * })
    **/
    count<T extends AdminSettingsCountArgs>(
      args?: Subset<T, AdminSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminSettingsAggregateArgs>(args: Subset<T, AdminSettingsAggregateArgs>): Prisma.PrismaPromise<GetAdminSettingsAggregateType<T>>

    /**
     * Group by AdminSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminSettingsGroupByArgs} args - Group by arguments.
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
      T extends AdminSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminSettingsGroupByArgs['orderBy'] }
        : { orderBy?: AdminSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminSettings model
   */
  readonly fields: AdminSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AdminSettings model
   */
  interface AdminSettingsFieldRefs {
    readonly id: FieldRef<"AdminSettings", 'String'>
    readonly key: FieldRef<"AdminSettings", 'String'>
    readonly value: FieldRef<"AdminSettings", 'String'>
    readonly createdAt: FieldRef<"AdminSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminSettings findUnique
   */
  export type AdminSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSettings
     */
    select?: AdminSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminSettings
     */
    omit?: AdminSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AdminSettings to fetch.
     */
    where: AdminSettingsWhereUniqueInput
  }

  /**
   * AdminSettings findUniqueOrThrow
   */
  export type AdminSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSettings
     */
    select?: AdminSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminSettings
     */
    omit?: AdminSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AdminSettings to fetch.
     */
    where: AdminSettingsWhereUniqueInput
  }

  /**
   * AdminSettings findFirst
   */
  export type AdminSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSettings
     */
    select?: AdminSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminSettings
     */
    omit?: AdminSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AdminSettings to fetch.
     */
    where?: AdminSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminSettings to fetch.
     */
    orderBy?: AdminSettingsOrderByWithRelationInput | AdminSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminSettings.
     */
    cursor?: AdminSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminSettings.
     */
    distinct?: AdminSettingsScalarFieldEnum | AdminSettingsScalarFieldEnum[]
  }

  /**
   * AdminSettings findFirstOrThrow
   */
  export type AdminSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSettings
     */
    select?: AdminSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminSettings
     */
    omit?: AdminSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AdminSettings to fetch.
     */
    where?: AdminSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminSettings to fetch.
     */
    orderBy?: AdminSettingsOrderByWithRelationInput | AdminSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminSettings.
     */
    cursor?: AdminSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminSettings.
     */
    distinct?: AdminSettingsScalarFieldEnum | AdminSettingsScalarFieldEnum[]
  }

  /**
   * AdminSettings findMany
   */
  export type AdminSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSettings
     */
    select?: AdminSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminSettings
     */
    omit?: AdminSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AdminSettings to fetch.
     */
    where?: AdminSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminSettings to fetch.
     */
    orderBy?: AdminSettingsOrderByWithRelationInput | AdminSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminSettings.
     */
    cursor?: AdminSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminSettings.
     */
    skip?: number
    distinct?: AdminSettingsScalarFieldEnum | AdminSettingsScalarFieldEnum[]
  }

  /**
   * AdminSettings create
   */
  export type AdminSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSettings
     */
    select?: AdminSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminSettings
     */
    omit?: AdminSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminSettings.
     */
    data: XOR<AdminSettingsCreateInput, AdminSettingsUncheckedCreateInput>
  }

  /**
   * AdminSettings createMany
   */
  export type AdminSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminSettings.
     */
    data: AdminSettingsCreateManyInput | AdminSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminSettings createManyAndReturn
   */
  export type AdminSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSettings
     */
    select?: AdminSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminSettings
     */
    omit?: AdminSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many AdminSettings.
     */
    data: AdminSettingsCreateManyInput | AdminSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminSettings update
   */
  export type AdminSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSettings
     */
    select?: AdminSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminSettings
     */
    omit?: AdminSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminSettings.
     */
    data: XOR<AdminSettingsUpdateInput, AdminSettingsUncheckedUpdateInput>
    /**
     * Choose, which AdminSettings to update.
     */
    where: AdminSettingsWhereUniqueInput
  }

  /**
   * AdminSettings updateMany
   */
  export type AdminSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminSettings.
     */
    data: XOR<AdminSettingsUpdateManyMutationInput, AdminSettingsUncheckedUpdateManyInput>
    /**
     * Filter which AdminSettings to update
     */
    where?: AdminSettingsWhereInput
    /**
     * Limit how many AdminSettings to update.
     */
    limit?: number
  }

  /**
   * AdminSettings updateManyAndReturn
   */
  export type AdminSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSettings
     */
    select?: AdminSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminSettings
     */
    omit?: AdminSettingsOmit<ExtArgs> | null
    /**
     * The data used to update AdminSettings.
     */
    data: XOR<AdminSettingsUpdateManyMutationInput, AdminSettingsUncheckedUpdateManyInput>
    /**
     * Filter which AdminSettings to update
     */
    where?: AdminSettingsWhereInput
    /**
     * Limit how many AdminSettings to update.
     */
    limit?: number
  }

  /**
   * AdminSettings upsert
   */
  export type AdminSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSettings
     */
    select?: AdminSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminSettings
     */
    omit?: AdminSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminSettings to update in case it exists.
     */
    where: AdminSettingsWhereUniqueInput
    /**
     * In case the AdminSettings found by the `where` argument doesn't exist, create a new AdminSettings with this data.
     */
    create: XOR<AdminSettingsCreateInput, AdminSettingsUncheckedCreateInput>
    /**
     * In case the AdminSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminSettingsUpdateInput, AdminSettingsUncheckedUpdateInput>
  }

  /**
   * AdminSettings delete
   */
  export type AdminSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSettings
     */
    select?: AdminSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminSettings
     */
    omit?: AdminSettingsOmit<ExtArgs> | null
    /**
     * Filter which AdminSettings to delete.
     */
    where: AdminSettingsWhereUniqueInput
  }

  /**
   * AdminSettings deleteMany
   */
  export type AdminSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminSettings to delete
     */
    where?: AdminSettingsWhereInput
    /**
     * Limit how many AdminSettings to delete.
     */
    limit?: number
  }

  /**
   * AdminSettings without action
   */
  export type AdminSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminSettings
     */
    select?: AdminSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminSettings
     */
    omit?: AdminSettingsOmit<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    rating: number | null
    text: string | null
    image: string | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    rating: number | null
    text: string | null
    image: string | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    name: number
    role: number
    rating: number
    text: number
    image: number
    isApproved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    rating?: true
    text?: true
    image?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    rating?: true
    text?: true
    image?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    rating?: true
    text?: true
    image?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    name: string
    role: string
    rating: number
    text: string
    image: string | null
    isApproved: boolean
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    rating?: boolean
    text?: boolean
    image?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    rating?: boolean
    text?: boolean
    image?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    rating?: boolean
    text?: boolean
    image?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    rating?: boolean
    text?: boolean
    image?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "rating" | "text" | "image" | "isApproved" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: string
      rating: number
      text: string
      image: string | null
      isApproved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly name: FieldRef<"Review", 'String'>
    readonly role: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly text: FieldRef<"Review", 'String'>
    readonly image: FieldRef<"Review", 'String'>
    readonly isApproved: FieldRef<"Review", 'Boolean'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    firstName: 'firstName',
    googleId: 'googleId',
    lastName: 'lastName',
    provider: 'provider',
    avatar: 'avatar',
    bio: 'bio',
    location: 'location',
    phone: 'phone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    propertyType: 'propertyType',
    verificationStatus: 'verificationStatus',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    instagram: 'instagram',
    youtube: 'youtube'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    street: 'street',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const PropertyImageScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    url: 'url',
    order: 'order',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt'
  };

  export type PropertyImageScalarFieldEnum = (typeof PropertyImageScalarFieldEnum)[keyof typeof PropertyImageScalarFieldEnum]


  export const FeatureScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum]


  export const PropertyFeatureScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    featureId: 'featureId'
  };

  export type PropertyFeatureScalarFieldEnum = (typeof PropertyFeatureScalarFieldEnum)[keyof typeof PropertyFeatureScalarFieldEnum]


  export const InquiryScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    userId: 'userId',
    name: 'name',
    email: 'email',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const AdminConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminConfigScalarFieldEnum = (typeof AdminConfigScalarFieldEnum)[keyof typeof AdminConfigScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    buyerId: 'buyerId',
    sellerId: 'sellerId',
    lastMessageAt: 'lastMessageAt',
    createdAt: 'createdAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    senderId: 'senderId',
    text: 'text',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const AdminSettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminSettingsScalarFieldEnum = (typeof AdminSettingsScalarFieldEnum)[keyof typeof AdminSettingsScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    rating: 'rating',
    text: 'text',
    image: 'image',
    isApproved: 'isApproved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    firstName?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    provider?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    buyerConversations?: ConversationListRelationFilter
    sellerConversations?: ConversationListRelationFilter
    favorites?: FavoriteListRelationFilter
    inquiries?: InquiryListRelationFilter
    sentMessages?: MessageListRelationFilter
    properties?: PropertyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    provider?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    buyerConversations?: ConversationOrderByRelationAggregateInput
    sellerConversations?: ConversationOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    inquiries?: InquiryOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    provider?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    buyerConversations?: ConversationListRelationFilter
    sellerConversations?: ConversationListRelationFilter
    favorites?: FavoriteListRelationFilter
    inquiries?: InquiryListRelationFilter
    sentMessages?: MessageListRelationFilter
    properties?: PropertyListRelationFilter
  }, "id" | "username" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    provider?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    title?: StringNullableFilter<"Property"> | string | null
    description?: StringNullableFilter<"Property"> | string | null
    price?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    propertyType?: StringNullableFilter<"Property"> | string | null
    verificationStatus?: StringFilter<"Property"> | string
    ownerId?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    instagram?: StringNullableFilter<"Property"> | string | null
    youtube?: StringNullableFilter<"Property"> | string | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    conversations?: ConversationListRelationFilter
    favorites?: FavoriteListRelationFilter
    inquiries?: InquiryListRelationFilter
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    features?: PropertyFeatureListRelationFilter
    images?: PropertyImageListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    propertyType?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instagram?: SortOrderInput | SortOrder
    youtube?: SortOrderInput | SortOrder
    address?: AddressOrderByWithRelationInput
    conversations?: ConversationOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    inquiries?: InquiryOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    features?: PropertyFeatureOrderByRelationAggregateInput
    images?: PropertyImageOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    title?: StringNullableFilter<"Property"> | string | null
    description?: StringNullableFilter<"Property"> | string | null
    price?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    propertyType?: StringNullableFilter<"Property"> | string | null
    verificationStatus?: StringFilter<"Property"> | string
    ownerId?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    instagram?: StringNullableFilter<"Property"> | string | null
    youtube?: StringNullableFilter<"Property"> | string | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    conversations?: ConversationListRelationFilter
    favorites?: FavoriteListRelationFilter
    inquiries?: InquiryListRelationFilter
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    features?: PropertyFeatureListRelationFilter
    images?: PropertyImageListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    propertyType?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instagram?: SortOrderInput | SortOrder
    youtube?: SortOrderInput | SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    title?: StringNullableWithAggregatesFilter<"Property"> | string | null
    description?: StringNullableWithAggregatesFilter<"Property"> | string | null
    price?: DecimalNullableWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    propertyType?: StringNullableWithAggregatesFilter<"Property"> | string | null
    verificationStatus?: StringWithAggregatesFilter<"Property"> | string
    ownerId?: StringNullableWithAggregatesFilter<"Property"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    instagram?: StringNullableWithAggregatesFilter<"Property"> | string | null
    youtube?: StringNullableWithAggregatesFilter<"Property"> | string | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    propertyId?: StringFilter<"Address"> | string
    street?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    zipCode?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    propertyId?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    zipCode?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id" | "propertyId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    propertyId?: StringWithAggregatesFilter<"Address"> | string
    street?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringNullableWithAggregatesFilter<"Address"> | string | null
    state?: StringNullableWithAggregatesFilter<"Address"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"Address"> | string | null
    country?: StringNullableWithAggregatesFilter<"Address"> | string | null
  }

  export type PropertyImageWhereInput = {
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    id?: StringFilter<"PropertyImage"> | string
    propertyId?: StringFilter<"PropertyImage"> | string
    url?: StringFilter<"PropertyImage"> | string
    order?: IntFilter<"PropertyImage"> | number
    isPrimary?: BoolFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyImageOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    propertyId?: StringFilter<"PropertyImage"> | string
    url?: StringFilter<"PropertyImage"> | string
    order?: IntFilter<"PropertyImage"> | number
    isPrimary?: BoolFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyImageOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    _count?: PropertyImageCountOrderByAggregateInput
    _avg?: PropertyImageAvgOrderByAggregateInput
    _max?: PropertyImageMaxOrderByAggregateInput
    _min?: PropertyImageMinOrderByAggregateInput
    _sum?: PropertyImageSumOrderByAggregateInput
  }

  export type PropertyImageScalarWhereWithAggregatesInput = {
    AND?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    OR?: PropertyImageScalarWhereWithAggregatesInput[]
    NOT?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertyImage"> | string
    propertyId?: StringWithAggregatesFilter<"PropertyImage"> | string
    url?: StringWithAggregatesFilter<"PropertyImage"> | string
    order?: IntWithAggregatesFilter<"PropertyImage"> | number
    isPrimary?: BoolWithAggregatesFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PropertyImage"> | Date | string
  }

  export type FeatureWhereInput = {
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    id?: StringFilter<"Feature"> | string
    name?: StringFilter<"Feature"> | string
    properties?: PropertyFeatureListRelationFilter
  }

  export type FeatureOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    properties?: PropertyFeatureOrderByRelationAggregateInput
  }

  export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    properties?: PropertyFeatureListRelationFilter
  }, "id" | "name">

  export type FeatureOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FeatureCountOrderByAggregateInput
    _max?: FeatureMaxOrderByAggregateInput
    _min?: FeatureMinOrderByAggregateInput
  }

  export type FeatureScalarWhereWithAggregatesInput = {
    AND?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    OR?: FeatureScalarWhereWithAggregatesInput[]
    NOT?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feature"> | string
    name?: StringWithAggregatesFilter<"Feature"> | string
  }

  export type PropertyFeatureWhereInput = {
    AND?: PropertyFeatureWhereInput | PropertyFeatureWhereInput[]
    OR?: PropertyFeatureWhereInput[]
    NOT?: PropertyFeatureWhereInput | PropertyFeatureWhereInput[]
    id?: StringFilter<"PropertyFeature"> | string
    propertyId?: StringFilter<"PropertyFeature"> | string
    featureId?: StringFilter<"PropertyFeature"> | string
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyFeatureOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    featureId?: SortOrder
    feature?: FeatureOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyFeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    propertyId_featureId?: PropertyFeaturePropertyIdFeatureIdCompoundUniqueInput
    AND?: PropertyFeatureWhereInput | PropertyFeatureWhereInput[]
    OR?: PropertyFeatureWhereInput[]
    NOT?: PropertyFeatureWhereInput | PropertyFeatureWhereInput[]
    propertyId?: StringFilter<"PropertyFeature"> | string
    featureId?: StringFilter<"PropertyFeature"> | string
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id" | "propertyId_featureId">

  export type PropertyFeatureOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    featureId?: SortOrder
    _count?: PropertyFeatureCountOrderByAggregateInput
    _max?: PropertyFeatureMaxOrderByAggregateInput
    _min?: PropertyFeatureMinOrderByAggregateInput
  }

  export type PropertyFeatureScalarWhereWithAggregatesInput = {
    AND?: PropertyFeatureScalarWhereWithAggregatesInput | PropertyFeatureScalarWhereWithAggregatesInput[]
    OR?: PropertyFeatureScalarWhereWithAggregatesInput[]
    NOT?: PropertyFeatureScalarWhereWithAggregatesInput | PropertyFeatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertyFeature"> | string
    propertyId?: StringWithAggregatesFilter<"PropertyFeature"> | string
    featureId?: StringWithAggregatesFilter<"PropertyFeature"> | string
  }

  export type InquiryWhereInput = {
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    id?: StringFilter<"Inquiry"> | string
    propertyId?: StringFilter<"Inquiry"> | string
    userId?: StringNullableFilter<"Inquiry"> | string | null
    name?: StringFilter<"Inquiry"> | string
    email?: StringFilter<"Inquiry"> | string
    message?: StringFilter<"Inquiry"> | string
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type InquiryOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type InquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    propertyId?: StringFilter<"Inquiry"> | string
    userId?: StringNullableFilter<"Inquiry"> | string | null
    name?: StringFilter<"Inquiry"> | string
    email?: StringFilter<"Inquiry"> | string
    message?: StringFilter<"Inquiry"> | string
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type InquiryOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: InquiryCountOrderByAggregateInput
    _max?: InquiryMaxOrderByAggregateInput
    _min?: InquiryMinOrderByAggregateInput
  }

  export type InquiryScalarWhereWithAggregatesInput = {
    AND?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    OR?: InquiryScalarWhereWithAggregatesInput[]
    NOT?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inquiry"> | string
    propertyId?: StringWithAggregatesFilter<"Inquiry"> | string
    userId?: StringNullableWithAggregatesFilter<"Inquiry"> | string | null
    name?: StringWithAggregatesFilter<"Inquiry"> | string
    email?: StringWithAggregatesFilter<"Inquiry"> | string
    message?: StringWithAggregatesFilter<"Inquiry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    propertyId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_propertyId?: FavoriteUserIdPropertyIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    propertyId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_propertyId">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    propertyId?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type AdminConfigWhereInput = {
    AND?: AdminConfigWhereInput | AdminConfigWhereInput[]
    OR?: AdminConfigWhereInput[]
    NOT?: AdminConfigWhereInput | AdminConfigWhereInput[]
    id?: StringFilter<"AdminConfig"> | string
    key?: StringFilter<"AdminConfig"> | string
    value?: StringFilter<"AdminConfig"> | string
    createdAt?: DateTimeFilter<"AdminConfig"> | Date | string
    updatedAt?: DateTimeFilter<"AdminConfig"> | Date | string
  }

  export type AdminConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: AdminConfigWhereInput | AdminConfigWhereInput[]
    OR?: AdminConfigWhereInput[]
    NOT?: AdminConfigWhereInput | AdminConfigWhereInput[]
    value?: StringFilter<"AdminConfig"> | string
    createdAt?: DateTimeFilter<"AdminConfig"> | Date | string
    updatedAt?: DateTimeFilter<"AdminConfig"> | Date | string
  }, "id" | "key">

  export type AdminConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminConfigCountOrderByAggregateInput
    _max?: AdminConfigMaxOrderByAggregateInput
    _min?: AdminConfigMinOrderByAggregateInput
  }

  export type AdminConfigScalarWhereWithAggregatesInput = {
    AND?: AdminConfigScalarWhereWithAggregatesInput | AdminConfigScalarWhereWithAggregatesInput[]
    OR?: AdminConfigScalarWhereWithAggregatesInput[]
    NOT?: AdminConfigScalarWhereWithAggregatesInput | AdminConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminConfig"> | string
    key?: StringWithAggregatesFilter<"AdminConfig"> | string
    value?: StringWithAggregatesFilter<"AdminConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminConfig"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    propertyId?: StringFilter<"Conversation"> | string
    buyerId?: StringFilter<"Conversation"> | string
    sellerId?: StringFilter<"Conversation"> | string
    lastMessageAt?: DateTimeFilter<"Conversation"> | Date | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    buyer?: UserOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    propertyId_buyerId_sellerId?: ConversationPropertyIdBuyerIdSellerIdCompoundUniqueInput
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    propertyId?: StringFilter<"Conversation"> | string
    buyerId?: StringFilter<"Conversation"> | string
    sellerId?: StringFilter<"Conversation"> | string
    lastMessageAt?: DateTimeFilter<"Conversation"> | Date | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }, "id" | "propertyId_buyerId_sellerId">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    propertyId?: StringWithAggregatesFilter<"Conversation"> | string
    buyerId?: StringWithAggregatesFilter<"Conversation"> | string
    sellerId?: StringWithAggregatesFilter<"Conversation"> | string
    lastMessageAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    conversationId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    conversationId?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    text?: StringWithAggregatesFilter<"Message"> | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type AdminSettingsWhereInput = {
    AND?: AdminSettingsWhereInput | AdminSettingsWhereInput[]
    OR?: AdminSettingsWhereInput[]
    NOT?: AdminSettingsWhereInput | AdminSettingsWhereInput[]
    id?: StringFilter<"AdminSettings"> | string
    key?: StringFilter<"AdminSettings"> | string
    value?: StringFilter<"AdminSettings"> | string
    createdAt?: DateTimeFilter<"AdminSettings"> | Date | string
    updatedAt?: DateTimeFilter<"AdminSettings"> | Date | string
  }

  export type AdminSettingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: AdminSettingsWhereInput | AdminSettingsWhereInput[]
    OR?: AdminSettingsWhereInput[]
    NOT?: AdminSettingsWhereInput | AdminSettingsWhereInput[]
    value?: StringFilter<"AdminSettings"> | string
    createdAt?: DateTimeFilter<"AdminSettings"> | Date | string
    updatedAt?: DateTimeFilter<"AdminSettings"> | Date | string
  }, "id" | "key">

  export type AdminSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminSettingsCountOrderByAggregateInput
    _max?: AdminSettingsMaxOrderByAggregateInput
    _min?: AdminSettingsMinOrderByAggregateInput
  }

  export type AdminSettingsScalarWhereWithAggregatesInput = {
    AND?: AdminSettingsScalarWhereWithAggregatesInput | AdminSettingsScalarWhereWithAggregatesInput[]
    OR?: AdminSettingsScalarWhereWithAggregatesInput[]
    NOT?: AdminSettingsScalarWhereWithAggregatesInput | AdminSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminSettings"> | string
    key?: StringWithAggregatesFilter<"AdminSettings"> | string
    value?: StringWithAggregatesFilter<"AdminSettings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminSettings"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    name?: StringFilter<"Review"> | string
    role?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    text?: StringFilter<"Review"> | string
    image?: StringNullableFilter<"Review"> | string | null
    isApproved?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    image?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    name?: StringFilter<"Review"> | string
    role?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    text?: StringFilter<"Review"> | string
    image?: StringNullableFilter<"Review"> | string | null
    isApproved?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    image?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    name?: StringWithAggregatesFilter<"Review"> | string
    role?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    text?: StringWithAggregatesFilter<"Review"> | string
    image?: StringNullableWithAggregatesFilter<"Review"> | string | null
    isApproved?: BoolWithAggregatesFilter<"Review"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    buyerConversations?: ConversationCreateNestedManyWithoutBuyerInput
    sellerConversations?: ConversationCreateNestedManyWithoutSellerInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    buyerConversations?: ConversationUncheckedCreateNestedManyWithoutBuyerInput
    sellerConversations?: ConversationUncheckedCreateNestedManyWithoutSellerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConversations?: ConversationUpdateManyWithoutBuyerNestedInput
    sellerConversations?: ConversationUpdateManyWithoutSellerNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConversations?: ConversationUncheckedUpdateManyWithoutBuyerNestedInput
    sellerConversations?: ConversationUncheckedUpdateManyWithoutSellerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressCreateNestedOneWithoutPropertyInput
    conversations?: ConversationCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryCreateNestedManyWithoutPropertyInput
    owner?: UserCreateNestedOneWithoutPropertiesInput
    features?: PropertyFeatureCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutPropertyInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutPropertyInput
    features?: PropertyFeatureUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutPropertyNestedInput
    conversations?: ConversationUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUpdateManyWithoutPropertyNestedInput
    owner?: UserUpdateOneWithoutPropertiesNestedInput
    features?: PropertyFeatureUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutPropertyNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutPropertyNestedInput
    features?: PropertyFeatureUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateInput = {
    id?: string
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    property: PropertyCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    propertyId: string
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    property?: PropertyUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateManyInput = {
    id?: string
    propertyId: string
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyImageCreateInput = {
    id?: string
    url: string
    order?: number
    isPrimary?: boolean
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutImagesInput
  }

  export type PropertyImageUncheckedCreateInput = {
    id?: string
    propertyId: string
    url: string
    order?: number
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type PropertyImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PropertyImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateManyInput = {
    id?: string
    propertyId: string
    url: string
    order?: number
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type PropertyImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCreateInput = {
    id?: string
    name: string
    properties?: PropertyFeatureCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateInput = {
    id?: string
    name: string
    properties?: PropertyFeatureUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    properties?: PropertyFeatureUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    properties?: PropertyFeatureUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureCreateManyInput = {
    id?: string
    name: string
  }

  export type FeatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyFeatureCreateInput = {
    id?: string
    feature: FeatureCreateNestedOneWithoutPropertiesInput
    property: PropertyCreateNestedOneWithoutFeaturesInput
  }

  export type PropertyFeatureUncheckedCreateInput = {
    id?: string
    propertyId: string
    featureId: string
  }

  export type PropertyFeatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: FeatureUpdateOneRequiredWithoutPropertiesNestedInput
    property?: PropertyUpdateOneRequiredWithoutFeaturesNestedInput
  }

  export type PropertyFeatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyFeatureCreateManyInput = {
    id?: string
    propertyId: string
    featureId: string
  }

  export type PropertyFeatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyFeatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
  }

  export type InquiryCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutInquiriesInput
    user?: UserCreateNestedOneWithoutInquiriesInput
  }

  export type InquiryUncheckedCreateInput = {
    id?: string
    propertyId: string
    userId?: string | null
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type InquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutInquiriesNestedInput
    user?: UserUpdateOneWithoutInquiriesNestedInput
  }

  export type InquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryCreateManyInput = {
    id?: string
    propertyId: string
    userId?: string | null
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type InquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutFavoritesInput
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    propertyId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutFavoritesNestedInput
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    userId: string
    propertyId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminConfigCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminConfigUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminConfigCreateManyInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    id?: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
    buyer: UserCreateNestedOneWithoutBuyerConversationsInput
    property: PropertyCreateNestedOneWithoutConversationsInput
    seller: UserCreateNestedOneWithoutSellerConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    propertyId: string
    buyerId: string
    sellerId: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutBuyerConversationsNestedInput
    property?: PropertyUpdateOneRequiredWithoutConversationsNestedInput
    seller?: UserUpdateOneRequiredWithoutSellerConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    propertyId: string
    buyerId: string
    sellerId: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    conversationId: string
    senderId: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    conversationId: string
    senderId: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminSettingsCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminSettingsUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminSettingsCreateManyInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    name: string
    role: string
    rating?: number
    text: string
    image?: string | null
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    name: string
    role: string
    rating?: number
    text: string
    image?: string | null
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    name: string
    role: string
    rating?: number
    text: string
    image?: string | null
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
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
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type InquiryListRelationFilter = {
    every?: InquiryWhereInput
    some?: InquiryWhereInput
    none?: InquiryWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    googleId?: SortOrder
    lastName?: SortOrder
    provider?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    phone?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    googleId?: SortOrder
    lastName?: SortOrder
    provider?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    phone?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    googleId?: SortOrder
    lastName?: SortOrder
    provider?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    phone?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PropertyFeatureListRelationFilter = {
    every?: PropertyFeatureWhereInput
    some?: PropertyFeatureWhereInput
    none?: PropertyFeatureWhereInput
  }

  export type PropertyImageListRelationFilter = {
    every?: PropertyImageWhereInput
    some?: PropertyImageWhereInput
    none?: PropertyImageWhereInput
  }

  export type PropertyFeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    propertyType?: SortOrder
    verificationStatus?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instagram?: SortOrder
    youtube?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    propertyType?: SortOrder
    verificationStatus?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instagram?: SortOrder
    youtube?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    propertyType?: SortOrder
    verificationStatus?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instagram?: SortOrder
    youtube?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PropertyImageCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type PropertyImageMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyImageMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FeatureCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FeatureMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FeatureScalarRelationFilter = {
    is?: FeatureWhereInput
    isNot?: FeatureWhereInput
  }

  export type PropertyFeaturePropertyIdFeatureIdCompoundUniqueInput = {
    propertyId: string
    featureId: string
  }

  export type PropertyFeatureCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    featureId?: SortOrder
  }

  export type PropertyFeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    featureId?: SortOrder
  }

  export type PropertyFeatureMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    featureId?: SortOrder
  }

  export type InquiryCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type InquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type InquiryMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FavoriteUserIdPropertyIdCompoundUniqueInput = {
    userId: string
    propertyId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationPropertyIdBuyerIdSellerIdCompoundUniqueInput = {
    propertyId: string
    buyerId: string
    sellerId: string
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    image?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    image?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    image?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ConversationCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ConversationCreateWithoutBuyerInput, ConversationUncheckedCreateWithoutBuyerInput> | ConversationCreateWithoutBuyerInput[] | ConversationUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutBuyerInput | ConversationCreateOrConnectWithoutBuyerInput[]
    createMany?: ConversationCreateManyBuyerInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutSellerInput = {
    create?: XOR<ConversationCreateWithoutSellerInput, ConversationUncheckedCreateWithoutSellerInput> | ConversationCreateWithoutSellerInput[] | ConversationUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutSellerInput | ConversationCreateOrConnectWithoutSellerInput[]
    createMany?: ConversationCreateManySellerInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type InquiryCreateNestedManyWithoutUserInput = {
    create?: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput> | InquiryCreateWithoutUserInput[] | InquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserInput | InquiryCreateOrConnectWithoutUserInput[]
    createMany?: InquiryCreateManyUserInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PropertyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ConversationCreateWithoutBuyerInput, ConversationUncheckedCreateWithoutBuyerInput> | ConversationCreateWithoutBuyerInput[] | ConversationUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutBuyerInput | ConversationCreateOrConnectWithoutBuyerInput[]
    createMany?: ConversationCreateManyBuyerInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<ConversationCreateWithoutSellerInput, ConversationUncheckedCreateWithoutSellerInput> | ConversationCreateWithoutSellerInput[] | ConversationUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutSellerInput | ConversationCreateOrConnectWithoutSellerInput[]
    createMany?: ConversationCreateManySellerInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type InquiryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput> | InquiryCreateWithoutUserInput[] | InquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserInput | InquiryCreateOrConnectWithoutUserInput[]
    createMany?: InquiryCreateManyUserInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConversationUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ConversationCreateWithoutBuyerInput, ConversationUncheckedCreateWithoutBuyerInput> | ConversationCreateWithoutBuyerInput[] | ConversationUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutBuyerInput | ConversationCreateOrConnectWithoutBuyerInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutBuyerInput | ConversationUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ConversationCreateManyBuyerInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutBuyerInput | ConversationUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutBuyerInput | ConversationUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ConversationCreateWithoutSellerInput, ConversationUncheckedCreateWithoutSellerInput> | ConversationCreateWithoutSellerInput[] | ConversationUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutSellerInput | ConversationCreateOrConnectWithoutSellerInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutSellerInput | ConversationUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ConversationCreateManySellerInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutSellerInput | ConversationUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutSellerInput | ConversationUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type InquiryUpdateManyWithoutUserNestedInput = {
    create?: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput> | InquiryCreateWithoutUserInput[] | InquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserInput | InquiryCreateOrConnectWithoutUserInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutUserInput | InquiryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InquiryCreateManyUserInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutUserInput | InquiryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutUserInput | InquiryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PropertyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ConversationCreateWithoutBuyerInput, ConversationUncheckedCreateWithoutBuyerInput> | ConversationCreateWithoutBuyerInput[] | ConversationUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutBuyerInput | ConversationCreateOrConnectWithoutBuyerInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutBuyerInput | ConversationUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ConversationCreateManyBuyerInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutBuyerInput | ConversationUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutBuyerInput | ConversationUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ConversationCreateWithoutSellerInput, ConversationUncheckedCreateWithoutSellerInput> | ConversationCreateWithoutSellerInput[] | ConversationUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutSellerInput | ConversationCreateOrConnectWithoutSellerInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutSellerInput | ConversationUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ConversationCreateManySellerInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutSellerInput | ConversationUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutSellerInput | ConversationUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type InquiryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput> | InquiryCreateWithoutUserInput[] | InquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserInput | InquiryCreateOrConnectWithoutUserInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutUserInput | InquiryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InquiryCreateManyUserInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutUserInput | InquiryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutUserInput | InquiryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutPropertyInput = {
    create?: XOR<AddressCreateWithoutPropertyInput, AddressUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPropertyInput
    connect?: AddressWhereUniqueInput
  }

  export type ConversationCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ConversationCreateWithoutPropertyInput, ConversationUncheckedCreateWithoutPropertyInput> | ConversationCreateWithoutPropertyInput[] | ConversationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutPropertyInput | ConversationCreateOrConnectWithoutPropertyInput[]
    createMany?: ConversationCreateManyPropertyInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput> | FavoriteCreateWithoutPropertyInput[] | FavoriteUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPropertyInput | FavoriteCreateOrConnectWithoutPropertyInput[]
    createMany?: FavoriteCreateManyPropertyInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type InquiryCreateNestedManyWithoutPropertyInput = {
    create?: XOR<InquiryCreateWithoutPropertyInput, InquiryUncheckedCreateWithoutPropertyInput> | InquiryCreateWithoutPropertyInput[] | InquiryUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutPropertyInput | InquiryCreateOrConnectWithoutPropertyInput[]
    createMany?: InquiryCreateManyPropertyInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyFeatureCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyFeatureCreateWithoutPropertyInput, PropertyFeatureUncheckedCreateWithoutPropertyInput> | PropertyFeatureCreateWithoutPropertyInput[] | PropertyFeatureUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyFeatureCreateOrConnectWithoutPropertyInput | PropertyFeatureCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyFeatureCreateManyPropertyInputEnvelope
    connect?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
  }

  export type PropertyImageCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutPropertyInput = {
    create?: XOR<AddressCreateWithoutPropertyInput, AddressUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPropertyInput
    connect?: AddressWhereUniqueInput
  }

  export type ConversationUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ConversationCreateWithoutPropertyInput, ConversationUncheckedCreateWithoutPropertyInput> | ConversationCreateWithoutPropertyInput[] | ConversationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutPropertyInput | ConversationCreateOrConnectWithoutPropertyInput[]
    createMany?: ConversationCreateManyPropertyInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput> | FavoriteCreateWithoutPropertyInput[] | FavoriteUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPropertyInput | FavoriteCreateOrConnectWithoutPropertyInput[]
    createMany?: FavoriteCreateManyPropertyInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type InquiryUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<InquiryCreateWithoutPropertyInput, InquiryUncheckedCreateWithoutPropertyInput> | InquiryCreateWithoutPropertyInput[] | InquiryUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutPropertyInput | InquiryCreateOrConnectWithoutPropertyInput[]
    createMany?: InquiryCreateManyPropertyInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type PropertyFeatureUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyFeatureCreateWithoutPropertyInput, PropertyFeatureUncheckedCreateWithoutPropertyInput> | PropertyFeatureCreateWithoutPropertyInput[] | PropertyFeatureUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyFeatureCreateOrConnectWithoutPropertyInput | PropertyFeatureCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyFeatureCreateManyPropertyInputEnvelope
    connect?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
  }

  export type PropertyImageUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AddressUpdateOneWithoutPropertyNestedInput = {
    create?: XOR<AddressCreateWithoutPropertyInput, AddressUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPropertyInput
    upsert?: AddressUpsertWithoutPropertyInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutPropertyInput, AddressUpdateWithoutPropertyInput>, AddressUncheckedUpdateWithoutPropertyInput>
  }

  export type ConversationUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ConversationCreateWithoutPropertyInput, ConversationUncheckedCreateWithoutPropertyInput> | ConversationCreateWithoutPropertyInput[] | ConversationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutPropertyInput | ConversationCreateOrConnectWithoutPropertyInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutPropertyInput | ConversationUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ConversationCreateManyPropertyInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutPropertyInput | ConversationUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutPropertyInput | ConversationUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput> | FavoriteCreateWithoutPropertyInput[] | FavoriteUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPropertyInput | FavoriteCreateOrConnectWithoutPropertyInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutPropertyInput | FavoriteUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FavoriteCreateManyPropertyInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutPropertyInput | FavoriteUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutPropertyInput | FavoriteUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type InquiryUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<InquiryCreateWithoutPropertyInput, InquiryUncheckedCreateWithoutPropertyInput> | InquiryCreateWithoutPropertyInput[] | InquiryUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutPropertyInput | InquiryCreateOrConnectWithoutPropertyInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutPropertyInput | InquiryUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: InquiryCreateManyPropertyInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutPropertyInput | InquiryUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutPropertyInput | InquiryUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPropertiesNestedInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    upsert?: UserUpsertWithoutPropertiesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPropertiesInput, UserUpdateWithoutPropertiesInput>, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyFeatureUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyFeatureCreateWithoutPropertyInput, PropertyFeatureUncheckedCreateWithoutPropertyInput> | PropertyFeatureCreateWithoutPropertyInput[] | PropertyFeatureUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyFeatureCreateOrConnectWithoutPropertyInput | PropertyFeatureCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyFeatureUpsertWithWhereUniqueWithoutPropertyInput | PropertyFeatureUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyFeatureCreateManyPropertyInputEnvelope
    set?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    disconnect?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    delete?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    connect?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    update?: PropertyFeatureUpdateWithWhereUniqueWithoutPropertyInput | PropertyFeatureUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyFeatureUpdateManyWithWhereWithoutPropertyInput | PropertyFeatureUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyFeatureScalarWhereInput | PropertyFeatureScalarWhereInput[]
  }

  export type PropertyImageUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type AddressUncheckedUpdateOneWithoutPropertyNestedInput = {
    create?: XOR<AddressCreateWithoutPropertyInput, AddressUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPropertyInput
    upsert?: AddressUpsertWithoutPropertyInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutPropertyInput, AddressUpdateWithoutPropertyInput>, AddressUncheckedUpdateWithoutPropertyInput>
  }

  export type ConversationUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ConversationCreateWithoutPropertyInput, ConversationUncheckedCreateWithoutPropertyInput> | ConversationCreateWithoutPropertyInput[] | ConversationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutPropertyInput | ConversationCreateOrConnectWithoutPropertyInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutPropertyInput | ConversationUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ConversationCreateManyPropertyInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutPropertyInput | ConversationUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutPropertyInput | ConversationUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput> | FavoriteCreateWithoutPropertyInput[] | FavoriteUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPropertyInput | FavoriteCreateOrConnectWithoutPropertyInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutPropertyInput | FavoriteUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FavoriteCreateManyPropertyInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutPropertyInput | FavoriteUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutPropertyInput | FavoriteUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type InquiryUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<InquiryCreateWithoutPropertyInput, InquiryUncheckedCreateWithoutPropertyInput> | InquiryCreateWithoutPropertyInput[] | InquiryUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutPropertyInput | InquiryCreateOrConnectWithoutPropertyInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutPropertyInput | InquiryUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: InquiryCreateManyPropertyInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutPropertyInput | InquiryUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutPropertyInput | InquiryUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type PropertyFeatureUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyFeatureCreateWithoutPropertyInput, PropertyFeatureUncheckedCreateWithoutPropertyInput> | PropertyFeatureCreateWithoutPropertyInput[] | PropertyFeatureUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyFeatureCreateOrConnectWithoutPropertyInput | PropertyFeatureCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyFeatureUpsertWithWhereUniqueWithoutPropertyInput | PropertyFeatureUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyFeatureCreateManyPropertyInputEnvelope
    set?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    disconnect?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    delete?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    connect?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    update?: PropertyFeatureUpdateWithWhereUniqueWithoutPropertyInput | PropertyFeatureUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyFeatureUpdateManyWithWhereWithoutPropertyInput | PropertyFeatureUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyFeatureScalarWhereInput | PropertyFeatureScalarWhereInput[]
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutAddressInput = {
    create?: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutAddressInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutAddressInput
    upsert?: PropertyUpsertWithoutAddressInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutAddressInput, PropertyUpdateWithoutAddressInput>, PropertyUncheckedUpdateWithoutAddressInput>
  }

  export type PropertyCreateNestedOneWithoutImagesInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    connect?: PropertyWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PropertyUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    upsert?: PropertyUpsertWithoutImagesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutImagesInput, PropertyUpdateWithoutImagesInput>, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type PropertyFeatureCreateNestedManyWithoutFeatureInput = {
    create?: XOR<PropertyFeatureCreateWithoutFeatureInput, PropertyFeatureUncheckedCreateWithoutFeatureInput> | PropertyFeatureCreateWithoutFeatureInput[] | PropertyFeatureUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: PropertyFeatureCreateOrConnectWithoutFeatureInput | PropertyFeatureCreateOrConnectWithoutFeatureInput[]
    createMany?: PropertyFeatureCreateManyFeatureInputEnvelope
    connect?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
  }

  export type PropertyFeatureUncheckedCreateNestedManyWithoutFeatureInput = {
    create?: XOR<PropertyFeatureCreateWithoutFeatureInput, PropertyFeatureUncheckedCreateWithoutFeatureInput> | PropertyFeatureCreateWithoutFeatureInput[] | PropertyFeatureUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: PropertyFeatureCreateOrConnectWithoutFeatureInput | PropertyFeatureCreateOrConnectWithoutFeatureInput[]
    createMany?: PropertyFeatureCreateManyFeatureInputEnvelope
    connect?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
  }

  export type PropertyFeatureUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<PropertyFeatureCreateWithoutFeatureInput, PropertyFeatureUncheckedCreateWithoutFeatureInput> | PropertyFeatureCreateWithoutFeatureInput[] | PropertyFeatureUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: PropertyFeatureCreateOrConnectWithoutFeatureInput | PropertyFeatureCreateOrConnectWithoutFeatureInput[]
    upsert?: PropertyFeatureUpsertWithWhereUniqueWithoutFeatureInput | PropertyFeatureUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: PropertyFeatureCreateManyFeatureInputEnvelope
    set?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    disconnect?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    delete?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    connect?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    update?: PropertyFeatureUpdateWithWhereUniqueWithoutFeatureInput | PropertyFeatureUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: PropertyFeatureUpdateManyWithWhereWithoutFeatureInput | PropertyFeatureUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: PropertyFeatureScalarWhereInput | PropertyFeatureScalarWhereInput[]
  }

  export type PropertyFeatureUncheckedUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<PropertyFeatureCreateWithoutFeatureInput, PropertyFeatureUncheckedCreateWithoutFeatureInput> | PropertyFeatureCreateWithoutFeatureInput[] | PropertyFeatureUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: PropertyFeatureCreateOrConnectWithoutFeatureInput | PropertyFeatureCreateOrConnectWithoutFeatureInput[]
    upsert?: PropertyFeatureUpsertWithWhereUniqueWithoutFeatureInput | PropertyFeatureUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: PropertyFeatureCreateManyFeatureInputEnvelope
    set?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    disconnect?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    delete?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    connect?: PropertyFeatureWhereUniqueInput | PropertyFeatureWhereUniqueInput[]
    update?: PropertyFeatureUpdateWithWhereUniqueWithoutFeatureInput | PropertyFeatureUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: PropertyFeatureUpdateManyWithWhereWithoutFeatureInput | PropertyFeatureUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: PropertyFeatureScalarWhereInput | PropertyFeatureScalarWhereInput[]
  }

  export type FeatureCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<FeatureCreateWithoutPropertiesInput, FeatureUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutPropertiesInput
    connect?: FeatureWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutFeaturesInput = {
    create?: XOR<PropertyCreateWithoutFeaturesInput, PropertyUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFeaturesInput
    connect?: PropertyWhereUniqueInput
  }

  export type FeatureUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<FeatureCreateWithoutPropertiesInput, FeatureUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutPropertiesInput
    upsert?: FeatureUpsertWithoutPropertiesInput
    connect?: FeatureWhereUniqueInput
    update?: XOR<XOR<FeatureUpdateToOneWithWhereWithoutPropertiesInput, FeatureUpdateWithoutPropertiesInput>, FeatureUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyUpdateOneRequiredWithoutFeaturesNestedInput = {
    create?: XOR<PropertyCreateWithoutFeaturesInput, PropertyUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFeaturesInput
    upsert?: PropertyUpsertWithoutFeaturesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutFeaturesInput, PropertyUpdateWithoutFeaturesInput>, PropertyUncheckedUpdateWithoutFeaturesInput>
  }

  export type PropertyCreateNestedOneWithoutInquiriesInput = {
    create?: XOR<PropertyCreateWithoutInquiriesInput, PropertyUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutInquiriesInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInquiriesInput = {
    create?: XOR<UserCreateWithoutInquiriesInput, UserUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInquiriesInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutInquiriesNestedInput = {
    create?: XOR<PropertyCreateWithoutInquiriesInput, PropertyUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutInquiriesInput
    upsert?: PropertyUpsertWithoutInquiriesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutInquiriesInput, PropertyUpdateWithoutInquiriesInput>, PropertyUncheckedUpdateWithoutInquiriesInput>
  }

  export type UserUpdateOneWithoutInquiriesNestedInput = {
    create?: XOR<UserCreateWithoutInquiriesInput, UserUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInquiriesInput
    upsert?: UserUpsertWithoutInquiriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInquiriesInput, UserUpdateWithoutInquiriesInput>, UserUncheckedUpdateWithoutInquiriesInput>
  }

  export type PropertyCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<PropertyCreateWithoutFavoritesInput, PropertyUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFavoritesInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<PropertyCreateWithoutFavoritesInput, PropertyUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFavoritesInput
    upsert?: PropertyUpsertWithoutFavoritesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutFavoritesInput, PropertyUpdateWithoutFavoritesInput>, PropertyUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserCreateNestedOneWithoutBuyerConversationsInput = {
    create?: XOR<UserCreateWithoutBuyerConversationsInput, UserUncheckedCreateWithoutBuyerConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuyerConversationsInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutConversationsInput = {
    create?: XOR<PropertyCreateWithoutConversationsInput, PropertyUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutConversationsInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSellerConversationsInput = {
    create?: XOR<UserCreateWithoutSellerConversationsInput, UserUncheckedCreateWithoutSellerConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSellerConversationsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBuyerConversationsNestedInput = {
    create?: XOR<UserCreateWithoutBuyerConversationsInput, UserUncheckedCreateWithoutBuyerConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuyerConversationsInput
    upsert?: UserUpsertWithoutBuyerConversationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBuyerConversationsInput, UserUpdateWithoutBuyerConversationsInput>, UserUncheckedUpdateWithoutBuyerConversationsInput>
  }

  export type PropertyUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<PropertyCreateWithoutConversationsInput, PropertyUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutConversationsInput
    upsert?: PropertyUpsertWithoutConversationsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutConversationsInput, PropertyUpdateWithoutConversationsInput>, PropertyUncheckedUpdateWithoutConversationsInput>
  }

  export type UserUpdateOneRequiredWithoutSellerConversationsNestedInput = {
    create?: XOR<UserCreateWithoutSellerConversationsInput, UserUncheckedCreateWithoutSellerConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSellerConversationsInput
    upsert?: UserUpsertWithoutSellerConversationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSellerConversationsInput, UserUpdateWithoutSellerConversationsInput>, UserUncheckedUpdateWithoutSellerConversationsInput>
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ConversationCreateWithoutBuyerInput = {
    id?: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutConversationsInput
    seller: UserCreateNestedOneWithoutSellerConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutBuyerInput = {
    id?: string
    propertyId: string
    sellerId: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutBuyerInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutBuyerInput, ConversationUncheckedCreateWithoutBuyerInput>
  }

  export type ConversationCreateManyBuyerInputEnvelope = {
    data: ConversationCreateManyBuyerInput | ConversationCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutSellerInput = {
    id?: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
    buyer: UserCreateNestedOneWithoutBuyerConversationsInput
    property: PropertyCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutSellerInput = {
    id?: string
    propertyId: string
    buyerId: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutSellerInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutSellerInput, ConversationUncheckedCreateWithoutSellerInput>
  }

  export type ConversationCreateManySellerInputEnvelope = {
    data: ConversationCreateManySellerInput | ConversationCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    propertyId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InquiryCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutInquiriesInput
  }

  export type InquiryUncheckedCreateWithoutUserInput = {
    id?: string
    propertyId: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type InquiryCreateOrConnectWithoutUserInput = {
    where: InquiryWhereUniqueInput
    create: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput>
  }

  export type InquiryCreateManyUserInputEnvelope = {
    data: InquiryCreateManyUserInput | InquiryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    conversationId: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCreateWithoutOwnerInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressCreateNestedOneWithoutPropertyInput
    conversations?: ConversationCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryCreateNestedManyWithoutPropertyInput
    features?: PropertyFeatureCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutOwnerInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutPropertyInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutPropertyInput
    features?: PropertyFeatureUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyCreateManyOwnerInputEnvelope = {
    data: PropertyCreateManyOwnerInput | PropertyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ConversationUpsertWithWhereUniqueWithoutBuyerInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutBuyerInput, ConversationUncheckedUpdateWithoutBuyerInput>
    create: XOR<ConversationCreateWithoutBuyerInput, ConversationUncheckedCreateWithoutBuyerInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutBuyerInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutBuyerInput, ConversationUncheckedUpdateWithoutBuyerInput>
  }

  export type ConversationUpdateManyWithWhereWithoutBuyerInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutBuyerInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: StringFilter<"Conversation"> | string
    propertyId?: StringFilter<"Conversation"> | string
    buyerId?: StringFilter<"Conversation"> | string
    sellerId?: StringFilter<"Conversation"> | string
    lastMessageAt?: DateTimeFilter<"Conversation"> | Date | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
  }

  export type ConversationUpsertWithWhereUniqueWithoutSellerInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutSellerInput, ConversationUncheckedUpdateWithoutSellerInput>
    create: XOR<ConversationCreateWithoutSellerInput, ConversationUncheckedCreateWithoutSellerInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutSellerInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutSellerInput, ConversationUncheckedUpdateWithoutSellerInput>
  }

  export type ConversationUpdateManyWithWhereWithoutSellerInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutSellerInput>
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    propertyId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type InquiryUpsertWithWhereUniqueWithoutUserInput = {
    where: InquiryWhereUniqueInput
    update: XOR<InquiryUpdateWithoutUserInput, InquiryUncheckedUpdateWithoutUserInput>
    create: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput>
  }

  export type InquiryUpdateWithWhereUniqueWithoutUserInput = {
    where: InquiryWhereUniqueInput
    data: XOR<InquiryUpdateWithoutUserInput, InquiryUncheckedUpdateWithoutUserInput>
  }

  export type InquiryUpdateManyWithWhereWithoutUserInput = {
    where: InquiryScalarWhereInput
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyWithoutUserInput>
  }

  export type InquiryScalarWhereInput = {
    AND?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
    OR?: InquiryScalarWhereInput[]
    NOT?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
    id?: StringFilter<"Inquiry"> | string
    propertyId?: StringFilter<"Inquiry"> | string
    userId?: StringNullableFilter<"Inquiry"> | string | null
    name?: StringFilter<"Inquiry"> | string
    email?: StringFilter<"Inquiry"> | string
    message?: StringFilter<"Inquiry"> | string
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    text?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type PropertyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
  }

  export type PropertyUpdateManyWithWhereWithoutOwnerInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: StringFilter<"Property"> | string
    title?: StringNullableFilter<"Property"> | string | null
    description?: StringNullableFilter<"Property"> | string | null
    price?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    propertyType?: StringNullableFilter<"Property"> | string | null
    verificationStatus?: StringFilter<"Property"> | string
    ownerId?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    instagram?: StringNullableFilter<"Property"> | string | null
    youtube?: StringNullableFilter<"Property"> | string | null
  }

  export type AddressCreateWithoutPropertyInput = {
    id?: string
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
  }

  export type AddressUncheckedCreateWithoutPropertyInput = {
    id?: string
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
  }

  export type AddressCreateOrConnectWithoutPropertyInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutPropertyInput, AddressUncheckedCreateWithoutPropertyInput>
  }

  export type ConversationCreateWithoutPropertyInput = {
    id?: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
    buyer: UserCreateNestedOneWithoutBuyerConversationsInput
    seller: UserCreateNestedOneWithoutSellerConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutPropertyInput = {
    id?: string
    buyerId: string
    sellerId: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutPropertyInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutPropertyInput, ConversationUncheckedCreateWithoutPropertyInput>
  }

  export type ConversationCreateManyPropertyInputEnvelope = {
    data: ConversationCreateManyPropertyInput | ConversationCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutPropertyInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutPropertyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutPropertyInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput>
  }

  export type FavoriteCreateManyPropertyInputEnvelope = {
    data: FavoriteCreateManyPropertyInput | FavoriteCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type InquiryCreateWithoutPropertyInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutInquiriesInput
  }

  export type InquiryUncheckedCreateWithoutPropertyInput = {
    id?: string
    userId?: string | null
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type InquiryCreateOrConnectWithoutPropertyInput = {
    where: InquiryWhereUniqueInput
    create: XOR<InquiryCreateWithoutPropertyInput, InquiryUncheckedCreateWithoutPropertyInput>
  }

  export type InquiryCreateManyPropertyInputEnvelope = {
    data: InquiryCreateManyPropertyInput | InquiryCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPropertiesInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    buyerConversations?: ConversationCreateNestedManyWithoutBuyerInput
    sellerConversations?: ConversationCreateNestedManyWithoutSellerInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutPropertiesInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    buyerConversations?: ConversationUncheckedCreateNestedManyWithoutBuyerInput
    sellerConversations?: ConversationUncheckedCreateNestedManyWithoutSellerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutPropertiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
  }

  export type PropertyFeatureCreateWithoutPropertyInput = {
    id?: string
    feature: FeatureCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyFeatureUncheckedCreateWithoutPropertyInput = {
    id?: string
    featureId: string
  }

  export type PropertyFeatureCreateOrConnectWithoutPropertyInput = {
    where: PropertyFeatureWhereUniqueInput
    create: XOR<PropertyFeatureCreateWithoutPropertyInput, PropertyFeatureUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyFeatureCreateManyPropertyInputEnvelope = {
    data: PropertyFeatureCreateManyPropertyInput | PropertyFeatureCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyImageCreateWithoutPropertyInput = {
    id?: string
    url: string
    order?: number
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type PropertyImageUncheckedCreateWithoutPropertyInput = {
    id?: string
    url: string
    order?: number
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type PropertyImageCreateOrConnectWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageCreateManyPropertyInputEnvelope = {
    data: PropertyImageCreateManyPropertyInput | PropertyImageCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutPropertyInput = {
    update: XOR<AddressUpdateWithoutPropertyInput, AddressUncheckedUpdateWithoutPropertyInput>
    create: XOR<AddressCreateWithoutPropertyInput, AddressUncheckedCreateWithoutPropertyInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutPropertyInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutPropertyInput, AddressUncheckedUpdateWithoutPropertyInput>
  }

  export type AddressUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutPropertyInput, ConversationUncheckedUpdateWithoutPropertyInput>
    create: XOR<ConversationCreateWithoutPropertyInput, ConversationUncheckedCreateWithoutPropertyInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutPropertyInput, ConversationUncheckedUpdateWithoutPropertyInput>
  }

  export type ConversationUpdateManyWithWhereWithoutPropertyInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutPropertyInput>
  }

  export type FavoriteUpsertWithWhereUniqueWithoutPropertyInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutPropertyInput, FavoriteUncheckedUpdateWithoutPropertyInput>
    create: XOR<FavoriteCreateWithoutPropertyInput, FavoriteUncheckedCreateWithoutPropertyInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutPropertyInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutPropertyInput, FavoriteUncheckedUpdateWithoutPropertyInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutPropertyInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutPropertyInput>
  }

  export type InquiryUpsertWithWhereUniqueWithoutPropertyInput = {
    where: InquiryWhereUniqueInput
    update: XOR<InquiryUpdateWithoutPropertyInput, InquiryUncheckedUpdateWithoutPropertyInput>
    create: XOR<InquiryCreateWithoutPropertyInput, InquiryUncheckedCreateWithoutPropertyInput>
  }

  export type InquiryUpdateWithWhereUniqueWithoutPropertyInput = {
    where: InquiryWhereUniqueInput
    data: XOR<InquiryUpdateWithoutPropertyInput, InquiryUncheckedUpdateWithoutPropertyInput>
  }

  export type InquiryUpdateManyWithWhereWithoutPropertyInput = {
    where: InquiryScalarWhereInput
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyWithoutPropertyInput>
  }

  export type UserUpsertWithoutPropertiesInput = {
    update: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type UserUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConversations?: ConversationUpdateManyWithoutBuyerNestedInput
    sellerConversations?: ConversationUpdateManyWithoutSellerNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConversations?: ConversationUncheckedUpdateManyWithoutBuyerNestedInput
    sellerConversations?: ConversationUncheckedUpdateManyWithoutSellerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type PropertyFeatureUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyFeatureWhereUniqueInput
    update: XOR<PropertyFeatureUpdateWithoutPropertyInput, PropertyFeatureUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyFeatureCreateWithoutPropertyInput, PropertyFeatureUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyFeatureUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyFeatureWhereUniqueInput
    data: XOR<PropertyFeatureUpdateWithoutPropertyInput, PropertyFeatureUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyFeatureUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyFeatureScalarWhereInput
    data: XOR<PropertyFeatureUpdateManyMutationInput, PropertyFeatureUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyFeatureScalarWhereInput = {
    AND?: PropertyFeatureScalarWhereInput | PropertyFeatureScalarWhereInput[]
    OR?: PropertyFeatureScalarWhereInput[]
    NOT?: PropertyFeatureScalarWhereInput | PropertyFeatureScalarWhereInput[]
    id?: StringFilter<"PropertyFeature"> | string
    propertyId?: StringFilter<"PropertyFeature"> | string
    featureId?: StringFilter<"PropertyFeature"> | string
  }

  export type PropertyImageUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    update: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    data: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyImageUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyImageScalarWhereInput
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyImageScalarWhereInput = {
    AND?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    OR?: PropertyImageScalarWhereInput[]
    NOT?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    id?: StringFilter<"PropertyImage"> | string
    propertyId?: StringFilter<"PropertyImage"> | string
    url?: StringFilter<"PropertyImage"> | string
    order?: IntFilter<"PropertyImage"> | number
    isPrimary?: BoolFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
  }

  export type PropertyCreateWithoutAddressInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    conversations?: ConversationCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryCreateNestedManyWithoutPropertyInput
    owner?: UserCreateNestedOneWithoutPropertiesInput
    features?: PropertyFeatureCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutAddressInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    conversations?: ConversationUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutPropertyInput
    features?: PropertyFeatureUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutAddressInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput>
  }

  export type PropertyUpsertWithoutAddressInput = {
    update: XOR<PropertyUpdateWithoutAddressInput, PropertyUncheckedUpdateWithoutAddressInput>
    create: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutAddressInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutAddressInput, PropertyUncheckedUpdateWithoutAddressInput>
  }

  export type PropertyUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: ConversationUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUpdateManyWithoutPropertyNestedInput
    owner?: UserUpdateOneWithoutPropertiesNestedInput
    features?: PropertyFeatureUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: ConversationUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutPropertyNestedInput
    features?: PropertyFeatureUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutImagesInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressCreateNestedOneWithoutPropertyInput
    conversations?: ConversationCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryCreateNestedManyWithoutPropertyInput
    owner?: UserCreateNestedOneWithoutPropertiesInput
    features?: PropertyFeatureCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutImagesInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutPropertyInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutPropertyInput
    features?: PropertyFeatureUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutImagesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
  }

  export type PropertyUpsertWithoutImagesInput = {
    update: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutImagesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type PropertyUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutPropertyNestedInput
    conversations?: ConversationUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUpdateManyWithoutPropertyNestedInput
    owner?: UserUpdateOneWithoutPropertiesNestedInput
    features?: PropertyFeatureUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutPropertyNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutPropertyNestedInput
    features?: PropertyFeatureUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyFeatureCreateWithoutFeatureInput = {
    id?: string
    property: PropertyCreateNestedOneWithoutFeaturesInput
  }

  export type PropertyFeatureUncheckedCreateWithoutFeatureInput = {
    id?: string
    propertyId: string
  }

  export type PropertyFeatureCreateOrConnectWithoutFeatureInput = {
    where: PropertyFeatureWhereUniqueInput
    create: XOR<PropertyFeatureCreateWithoutFeatureInput, PropertyFeatureUncheckedCreateWithoutFeatureInput>
  }

  export type PropertyFeatureCreateManyFeatureInputEnvelope = {
    data: PropertyFeatureCreateManyFeatureInput | PropertyFeatureCreateManyFeatureInput[]
    skipDuplicates?: boolean
  }

  export type PropertyFeatureUpsertWithWhereUniqueWithoutFeatureInput = {
    where: PropertyFeatureWhereUniqueInput
    update: XOR<PropertyFeatureUpdateWithoutFeatureInput, PropertyFeatureUncheckedUpdateWithoutFeatureInput>
    create: XOR<PropertyFeatureCreateWithoutFeatureInput, PropertyFeatureUncheckedCreateWithoutFeatureInput>
  }

  export type PropertyFeatureUpdateWithWhereUniqueWithoutFeatureInput = {
    where: PropertyFeatureWhereUniqueInput
    data: XOR<PropertyFeatureUpdateWithoutFeatureInput, PropertyFeatureUncheckedUpdateWithoutFeatureInput>
  }

  export type PropertyFeatureUpdateManyWithWhereWithoutFeatureInput = {
    where: PropertyFeatureScalarWhereInput
    data: XOR<PropertyFeatureUpdateManyMutationInput, PropertyFeatureUncheckedUpdateManyWithoutFeatureInput>
  }

  export type FeatureCreateWithoutPropertiesInput = {
    id?: string
    name: string
  }

  export type FeatureUncheckedCreateWithoutPropertiesInput = {
    id?: string
    name: string
  }

  export type FeatureCreateOrConnectWithoutPropertiesInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutPropertiesInput, FeatureUncheckedCreateWithoutPropertiesInput>
  }

  export type PropertyCreateWithoutFeaturesInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressCreateNestedOneWithoutPropertyInput
    conversations?: ConversationCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryCreateNestedManyWithoutPropertyInput
    owner?: UserCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutFeaturesInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutPropertyInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutFeaturesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutFeaturesInput, PropertyUncheckedCreateWithoutFeaturesInput>
  }

  export type FeatureUpsertWithoutPropertiesInput = {
    update: XOR<FeatureUpdateWithoutPropertiesInput, FeatureUncheckedUpdateWithoutPropertiesInput>
    create: XOR<FeatureCreateWithoutPropertiesInput, FeatureUncheckedCreateWithoutPropertiesInput>
    where?: FeatureWhereInput
  }

  export type FeatureUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: FeatureWhereInput
    data: XOR<FeatureUpdateWithoutPropertiesInput, FeatureUncheckedUpdateWithoutPropertiesInput>
  }

  export type FeatureUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyUpsertWithoutFeaturesInput = {
    update: XOR<PropertyUpdateWithoutFeaturesInput, PropertyUncheckedUpdateWithoutFeaturesInput>
    create: XOR<PropertyCreateWithoutFeaturesInput, PropertyUncheckedCreateWithoutFeaturesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutFeaturesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutFeaturesInput, PropertyUncheckedUpdateWithoutFeaturesInput>
  }

  export type PropertyUpdateWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutPropertyNestedInput
    conversations?: ConversationUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUpdateManyWithoutPropertyNestedInput
    owner?: UserUpdateOneWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutPropertyNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutInquiriesInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressCreateNestedOneWithoutPropertyInput
    conversations?: ConversationCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    owner?: UserCreateNestedOneWithoutPropertiesInput
    features?: PropertyFeatureCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutInquiriesInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutPropertyInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    features?: PropertyFeatureUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutInquiriesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutInquiriesInput, PropertyUncheckedCreateWithoutInquiriesInput>
  }

  export type UserCreateWithoutInquiriesInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    buyerConversations?: ConversationCreateNestedManyWithoutBuyerInput
    sellerConversations?: ConversationCreateNestedManyWithoutSellerInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutInquiriesInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    buyerConversations?: ConversationUncheckedCreateNestedManyWithoutBuyerInput
    sellerConversations?: ConversationUncheckedCreateNestedManyWithoutSellerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutInquiriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInquiriesInput, UserUncheckedCreateWithoutInquiriesInput>
  }

  export type PropertyUpsertWithoutInquiriesInput = {
    update: XOR<PropertyUpdateWithoutInquiriesInput, PropertyUncheckedUpdateWithoutInquiriesInput>
    create: XOR<PropertyCreateWithoutInquiriesInput, PropertyUncheckedCreateWithoutInquiriesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutInquiriesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutInquiriesInput, PropertyUncheckedUpdateWithoutInquiriesInput>
  }

  export type PropertyUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutPropertyNestedInput
    conversations?: ConversationUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    owner?: UserUpdateOneWithoutPropertiesNestedInput
    features?: PropertyFeatureUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutPropertyNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    features?: PropertyFeatureUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserUpsertWithoutInquiriesInput = {
    update: XOR<UserUpdateWithoutInquiriesInput, UserUncheckedUpdateWithoutInquiriesInput>
    create: XOR<UserCreateWithoutInquiriesInput, UserUncheckedCreateWithoutInquiriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInquiriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInquiriesInput, UserUncheckedUpdateWithoutInquiriesInput>
  }

  export type UserUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConversations?: ConversationUpdateManyWithoutBuyerNestedInput
    sellerConversations?: ConversationUpdateManyWithoutSellerNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConversations?: ConversationUncheckedUpdateManyWithoutBuyerNestedInput
    sellerConversations?: ConversationUncheckedUpdateManyWithoutSellerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PropertyCreateWithoutFavoritesInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressCreateNestedOneWithoutPropertyInput
    conversations?: ConversationCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryCreateNestedManyWithoutPropertyInput
    owner?: UserCreateNestedOneWithoutPropertiesInput
    features?: PropertyFeatureCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutFavoritesInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutPropertyInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutPropertyInput
    features?: PropertyFeatureUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutFavoritesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutFavoritesInput, PropertyUncheckedCreateWithoutFavoritesInput>
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    buyerConversations?: ConversationCreateNestedManyWithoutBuyerInput
    sellerConversations?: ConversationCreateNestedManyWithoutSellerInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    buyerConversations?: ConversationUncheckedCreateNestedManyWithoutBuyerInput
    sellerConversations?: ConversationUncheckedCreateNestedManyWithoutSellerInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type PropertyUpsertWithoutFavoritesInput = {
    update: XOR<PropertyUpdateWithoutFavoritesInput, PropertyUncheckedUpdateWithoutFavoritesInput>
    create: XOR<PropertyCreateWithoutFavoritesInput, PropertyUncheckedCreateWithoutFavoritesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutFavoritesInput, PropertyUncheckedUpdateWithoutFavoritesInput>
  }

  export type PropertyUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutPropertyNestedInput
    conversations?: ConversationUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUpdateManyWithoutPropertyNestedInput
    owner?: UserUpdateOneWithoutPropertiesNestedInput
    features?: PropertyFeatureUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutPropertyNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutPropertyNestedInput
    features?: PropertyFeatureUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConversations?: ConversationUpdateManyWithoutBuyerNestedInput
    sellerConversations?: ConversationUpdateManyWithoutSellerNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConversations?: ConversationUncheckedUpdateManyWithoutBuyerNestedInput
    sellerConversations?: ConversationUncheckedUpdateManyWithoutSellerNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutBuyerConversationsInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    sellerConversations?: ConversationCreateNestedManyWithoutSellerInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutBuyerConversationsInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    sellerConversations?: ConversationUncheckedCreateNestedManyWithoutSellerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBuyerConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBuyerConversationsInput, UserUncheckedCreateWithoutBuyerConversationsInput>
  }

  export type PropertyCreateWithoutConversationsInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressCreateNestedOneWithoutPropertyInput
    favorites?: FavoriteCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryCreateNestedManyWithoutPropertyInput
    owner?: UserCreateNestedOneWithoutPropertiesInput
    features?: PropertyFeatureCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutConversationsInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutPropertyInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPropertyInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutPropertyInput
    features?: PropertyFeatureUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutConversationsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutConversationsInput, PropertyUncheckedCreateWithoutConversationsInput>
  }

  export type UserCreateWithoutSellerConversationsInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    buyerConversations?: ConversationCreateNestedManyWithoutBuyerInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutSellerConversationsInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    buyerConversations?: ConversationUncheckedCreateNestedManyWithoutBuyerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutSellerConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSellerConversationsInput, UserUncheckedCreateWithoutSellerConversationsInput>
  }

  export type MessageCreateWithoutConversationInput = {
    id?: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string
    senderId: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBuyerConversationsInput = {
    update: XOR<UserUpdateWithoutBuyerConversationsInput, UserUncheckedUpdateWithoutBuyerConversationsInput>
    create: XOR<UserCreateWithoutBuyerConversationsInput, UserUncheckedCreateWithoutBuyerConversationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBuyerConversationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBuyerConversationsInput, UserUncheckedUpdateWithoutBuyerConversationsInput>
  }

  export type UserUpdateWithoutBuyerConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    sellerConversations?: ConversationUpdateManyWithoutSellerNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBuyerConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    sellerConversations?: ConversationUncheckedUpdateManyWithoutSellerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PropertyUpsertWithoutConversationsInput = {
    update: XOR<PropertyUpdateWithoutConversationsInput, PropertyUncheckedUpdateWithoutConversationsInput>
    create: XOR<PropertyCreateWithoutConversationsInput, PropertyUncheckedCreateWithoutConversationsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutConversationsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutConversationsInput, PropertyUncheckedUpdateWithoutConversationsInput>
  }

  export type PropertyUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutPropertyNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUpdateManyWithoutPropertyNestedInput
    owner?: UserUpdateOneWithoutPropertiesNestedInput
    features?: PropertyFeatureUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutPropertyNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutPropertyNestedInput
    features?: PropertyFeatureUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserUpsertWithoutSellerConversationsInput = {
    update: XOR<UserUpdateWithoutSellerConversationsInput, UserUncheckedUpdateWithoutSellerConversationsInput>
    create: XOR<UserCreateWithoutSellerConversationsInput, UserUncheckedCreateWithoutSellerConversationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSellerConversationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSellerConversationsInput, UserUncheckedUpdateWithoutSellerConversationsInput>
  }

  export type UserUpdateWithoutSellerConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConversations?: ConversationUpdateManyWithoutBuyerNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSellerConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConversations?: ConversationUncheckedUpdateManyWithoutBuyerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type ConversationCreateWithoutMessagesInput = {
    id?: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
    buyer: UserCreateNestedOneWithoutBuyerConversationsInput
    property: PropertyCreateNestedOneWithoutConversationsInput
    seller: UserCreateNestedOneWithoutSellerConversationsInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    propertyId: string
    buyerId: string
    sellerId: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    buyerConversations?: ConversationCreateNestedManyWithoutBuyerInput
    sellerConversations?: ConversationCreateNestedManyWithoutSellerInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    username?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string | null
    googleId?: string | null
    lastName?: string | null
    provider?: string
    avatar?: string | null
    bio?: string | null
    location?: string | null
    phone?: string | null
    buyerConversations?: ConversationUncheckedCreateNestedManyWithoutBuyerInput
    sellerConversations?: ConversationUncheckedCreateNestedManyWithoutSellerInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutBuyerConversationsNestedInput
    property?: PropertyUpdateOneRequiredWithoutConversationsNestedInput
    seller?: UserUpdateOneRequiredWithoutSellerConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConversations?: ConversationUpdateManyWithoutBuyerNestedInput
    sellerConversations?: ConversationUpdateManyWithoutSellerNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    buyerConversations?: ConversationUncheckedUpdateManyWithoutBuyerNestedInput
    sellerConversations?: ConversationUncheckedUpdateManyWithoutSellerNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ConversationCreateManyBuyerInput = {
    id?: string
    propertyId: string
    sellerId: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
  }

  export type ConversationCreateManySellerInput = {
    id?: string
    propertyId: string
    buyerId: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: string
    propertyId: string
    createdAt?: Date | string
  }

  export type InquiryCreateManyUserInput = {
    id?: string
    propertyId: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    conversationId: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type PropertyCreateManyOwnerInput = {
    id?: string
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    propertyType?: string | null
    verificationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instagram?: string | null
    youtube?: string | null
  }

  export type ConversationUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutConversationsNestedInput
    seller?: UserUpdateOneRequiredWithoutSellerConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutBuyerConversationsNestedInput
    property?: PropertyUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutInquiriesNestedInput
  }

  export type InquiryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutPropertyNestedInput
    conversations?: ConversationUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUpdateManyWithoutPropertyNestedInput
    features?: PropertyFeatureUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutPropertyNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPropertyNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutPropertyNestedInput
    features?: PropertyFeatureUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationCreateManyPropertyInput = {
    id?: string
    buyerId: string
    sellerId: string
    lastMessageAt?: Date | string
    createdAt?: Date | string
  }

  export type FavoriteCreateManyPropertyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type InquiryCreateManyPropertyInput = {
    id?: string
    userId?: string | null
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type PropertyFeatureCreateManyPropertyInput = {
    id?: string
    featureId: string
  }

  export type PropertyImageCreateManyPropertyInput = {
    id?: string
    url: string
    order?: number
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type ConversationUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutBuyerConversationsNestedInput
    seller?: UserUpdateOneRequiredWithoutSellerConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutInquiriesNestedInput
  }

  export type InquiryUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyFeatureUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: FeatureUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyFeatureUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyFeatureUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyImageUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyFeatureCreateManyFeatureInput = {
    id?: string
    propertyId: string
  }

  export type PropertyFeatureUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneRequiredWithoutFeaturesNestedInput
  }

  export type PropertyFeatureUncheckedUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyFeatureUncheckedUpdateManyWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyConversationInput = {
    id?: string
    senderId: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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