
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  email: 'email',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  categoryId: 'categoryId',
  name: 'name',
  type: 'type',
  description: 'description',
  weight: 'weight',
  isPublish: 'isPublish',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductWholesalerScalarFieldEnum = {
  id: 'id',
  productVariantId: 'productVariantId',
  lowerLimitItem: 'lowerLimitItem',
  upperLimitItem: 'upperLimitItem',
  unitPrice: 'unitPrice',
  wholesalerPrice: 'wholesalerPrice',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductPriceScalarFieldEnum = {
  id: 'id',
  productVariantId: 'productVariantId',
  normal: 'normal',
  buy: 'buy',
  reseller: 'reseller',
  agent: 'agent',
  member: 'member',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductVariantScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  sku: 'sku',
  stock: 'stock',
  size: 'size',
  color: 'color',
  imageUrl: 'imageUrl',
  barcode: 'barcode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  address: 'address',
  subdistrict: 'subdistrict',
  postalCode: 'postalCode',
  phoneNumber: 'phoneNumber',
  email: 'email',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  ordererCustomerId: 'ordererCustomerId',
  deliveryTargetCustomerId: 'deliveryTargetCustomerId',
  senderPlace: 'senderPlace',
  orderDate: 'orderDate',
  salesChannel: 'salesChannel',
  note: 'note',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderDetailScalarFieldEnum = {
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
  receiptNumber: 'receiptNumber',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentMethodScalarFieldEnum = {
  id: 'id',
  name: 'name',
  bankName: 'bankName',
  bankBranch: 'bankBranch',
  accountNumber: 'accountNumber',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DeliveryPlaceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  subdistrict: 'subdistrict',
  phoneNumber: 'phoneNumber',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ExpenseScalarFieldEnum = {
  id: 'id',
  itemName: 'itemName',
  itemPrice: 'itemPrice',
  itemTotal: 'itemTotal',
  totalPrice: 'totalPrice',
  personResponsible: 'personResponsible',
  note: 'note',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ShopSettingScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  email: 'email',
  phoneNumber: 'phoneNumber',
  address: 'address',
  owner: 'owner',
  logo: 'logo',
  banner: 'banner',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SalesChannelScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Roles = exports.$Enums.Roles = {
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

exports.ProductTypes = exports.$Enums.ProductTypes = {
  BARANG_STOK_SENDIRI: 'BARANG_STOK_SENDIRI',
  BARANG_SUPPLIER_LAIN: 'BARANG_SUPPLIER_LAIN',
  BARANG_PRE_ORDER: 'BARANG_PRE_ORDER'
};

exports.CustomerCategories = exports.$Enums.CustomerCategories = {
  CUSTOMER: 'CUSTOMER',
  RESELLER: 'RESELLER',
  DROPSHIPPER: 'DROPSHIPPER',
  MEMBER: 'MEMBER',
  AGENT: 'AGENT'
};

exports.CustomerStatuses = exports.$Enums.CustomerStatuses = {
  ACTIVE: 'ACTIVE',
  NONACTIVE: 'NONACTIVE'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  settlement: 'settlement',
  pending: 'pending',
  cancel: 'cancel',
  installments: 'installments'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
