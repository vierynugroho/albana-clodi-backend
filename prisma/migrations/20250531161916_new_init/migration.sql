-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'SUPERADMIN');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('SETTLEMENT', 'PENDING', 'CANCEL', 'INSTALLMENTS');

-- CreateEnum
CREATE TYPE "ProductTypes" AS ENUM ('BARANG_STOK_SENDIRI', 'BARANG_SUPPLIER_LAIN', 'BARANG_PRE_ORDER');

-- CreateEnum
CREATE TYPE "CustomerCategories" AS ENUM ('CUSTOMER', 'RESELLER', 'DROPSHIPPER', 'MEMBER', 'AGENT');

-- CreateEnum
CREATE TYPE "CustomerStatuses" AS ENUM ('ACTIVE', 'NONACTIVE');

-- CreateEnum
CREATE TYPE "ProductDiscountTypes" AS ENUM ('PERCENTAGE', 'NOMINAL');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "fullname" TEXT,
    "email" TEXT,
    "password" TEXT,
    "phoneNumber" TEXT,
    "role" "Roles",
    "created_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "category_id" UUID,
    "name" TEXT,
    "type" "ProductTypes",
    "description" TEXT,
    "weight" DOUBLE PRECISION,
    "is_publish" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_discounts" (
    "id" UUID NOT NULL,
    "product_id" UUID,
    "type" "ProductDiscountTypes",
    "value" DECIMAL(65,30),
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_prices" (
    "id" UUID NOT NULL,
    "product_variant_id" UUID,
    "normal" DOUBLE PRECISION,
    "buy" DOUBLE PRECISION,
    "reseller" DOUBLE PRECISION,
    "agent" DOUBLE PRECISION,
    "member" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_prices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_variant" (
    "id" UUID NOT NULL,
    "product_id" UUID,
    "sku" TEXT,
    "stock" INTEGER,
    "size" TEXT,
    "color" TEXT,
    "image_url" TEXT,
    "barcode" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "category" "CustomerCategories",
    "address" TEXT,
    "province" TEXT,
    "city" TEXT,
    "district" TEXT,
    "village" TEXT,
    "address_detail" TEXT,
    "postal_code" TEXT,
    "phone_number" TEXT,
    "destination_id" INTEGER,
    "email" TEXT,
    "status" "CustomerStatuses",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" UUID NOT NULL,
    "orderer_customer_id" UUID,
    "delivery_target_customer_id" UUID,
    "delivery_place_id" UUID,
    "sales_channel_id" UUID,
    "order_date" DATE,
    "note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_details" (
    "id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "payment_method_id" UUID,
    "code" TEXT,
    "other_fees" JSONB,
    "final_price" DOUBLE PRECISION,
    "paymentStatus" "PaymentStatus",
    "payment_date" TIMESTAMP(3),
    "receipt_number" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "productId" UUID,

    CONSTRAINT "order_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_products" (
    "id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "order_detail_id" UUID,
    "product_id" UUID NOT NULL,
    "product_qty" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipping_services" (
    "id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "shipping_name" TEXT,
    "service_name" TEXT,
    "weight" INTEGER,
    "is_cod" BOOLEAN DEFAULT false,
    "shipping_cost" DOUBLE PRECISION,
    "shipping_cashback" DOUBLE PRECISION,
    "shipping_cost_net" DOUBLE PRECISION,
    "grandtotal" DOUBLE PRECISION,
    "service_fee" DOUBLE PRECISION,
    "net_income" DOUBLE PRECISION,
    "etd" TEXT,
    "type" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shipping_services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_methods" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "bank_name" TEXT,
    "bank_branch" TEXT,
    "account_number" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "delivery_places" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "subdistrict" TEXT,
    "phone_number" TEXT,
    "destination_id" INTEGER,
    "email" TEXT,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "delivery_places_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expenses" (
    "id" UUID NOT NULL,
    "item_name" TEXT,
    "item_price" DOUBLE PRECISION,
    "expense_date" TIMESTAMP(3),
    "item_total" INTEGER,
    "total_price" DOUBLE PRECISION,
    "person_responsible" TEXT,
    "note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_settings" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "email" TEXT,
    "phone_number" TEXT,
    "address" TEXT,
    "owner" TEXT,
    "logo" TEXT,
    "banner" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shop_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales_channels" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "is_active" BOOLEAN,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sales_channels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provinces" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "provinces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" BIGSERIAL NOT NULL,
    "province_id" BIGINT,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "districts" (
    "id" BIGSERIAL NOT NULL,
    "city_id" BIGINT,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "districts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "villages" (
    "id" BIGSERIAL NOT NULL,
    "disctict_id" BIGINT,
    "name" TEXT,
    "postalCode" INTEGER,

    CONSTRAINT "villages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "installments" (
    "id" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "is_paid" BOOLEAN NOT NULL DEFAULT false,
    "payment_method_id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "installments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE INDEX "categories_name_idx" ON "categories"("name");

-- CreateIndex
CREATE INDEX "products_category_id_idx" ON "products"("category_id");

-- CreateIndex
CREATE INDEX "products_name_idx" ON "products"("name");

-- CreateIndex
CREATE INDEX "products_is_publish_idx" ON "products"("is_publish");

-- CreateIndex
CREATE INDEX "product_prices_product_variant_id_idx" ON "product_prices"("product_variant_id");

-- CreateIndex
CREATE INDEX "product_variant_product_id_idx" ON "product_variant"("product_id");

-- CreateIndex
CREATE INDEX "product_variant_sku_idx" ON "product_variant"("sku");

-- CreateIndex
CREATE INDEX "customers_email_idx" ON "customers"("email");

-- CreateIndex
CREATE INDEX "customers_phone_number_idx" ON "customers"("phone_number");

-- CreateIndex
CREATE INDEX "customers_category_idx" ON "customers"("category");

-- CreateIndex
CREATE INDEX "customers_status_idx" ON "customers"("status");

-- CreateIndex
CREATE INDEX "orders_orderer_customer_id_idx" ON "orders"("orderer_customer_id");

-- CreateIndex
CREATE INDEX "orders_delivery_target_customer_id_idx" ON "orders"("delivery_target_customer_id");

-- CreateIndex
CREATE INDEX "orders_order_date_idx" ON "orders"("order_date");

-- CreateIndex
CREATE INDEX "orders_delivery_place_id_idx" ON "orders"("delivery_place_id");

-- CreateIndex
CREATE INDEX "orders_sales_channel_id_idx" ON "orders"("sales_channel_id");

-- CreateIndex
CREATE INDEX "orders_created_at_idx" ON "orders"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "order_details_order_id_key" ON "order_details"("order_id");

-- CreateIndex
CREATE INDEX "order_details_payment_method_id_idx" ON "order_details"("payment_method_id");

-- CreateIndex
CREATE INDEX "order_details_paymentStatus_idx" ON "order_details"("paymentStatus");

-- CreateIndex
CREATE INDEX "order_details_code_idx" ON "order_details"("code");

-- CreateIndex
CREATE INDEX "order_products_order_id_idx" ON "order_products"("order_id");

-- CreateIndex
CREATE INDEX "order_products_product_id_idx" ON "order_products"("product_id");

-- CreateIndex
CREATE INDEX "order_products_order_detail_id_idx" ON "order_products"("order_detail_id");

-- CreateIndex
CREATE INDEX "shipping_services_order_id_idx" ON "shipping_services"("order_id");

-- CreateIndex
CREATE INDEX "shipping_services_shipping_name_idx" ON "shipping_services"("shipping_name");

-- CreateIndex
CREATE INDEX "shipping_services_service_name_idx" ON "shipping_services"("service_name");

-- CreateIndex
CREATE INDEX "shipping_services_type_idx" ON "shipping_services"("type");

-- CreateIndex
CREATE INDEX "payment_methods_name_idx" ON "payment_methods"("name");

-- CreateIndex
CREATE INDEX "delivery_places_name_idx" ON "delivery_places"("name");

-- CreateIndex
CREATE INDEX "delivery_places_email_idx" ON "delivery_places"("email");

-- CreateIndex
CREATE INDEX "expenses_person_responsible_idx" ON "expenses"("person_responsible");

-- CreateIndex
CREATE INDEX "sales_channels_name_idx" ON "sales_channels"("name");

-- CreateIndex
CREATE INDEX "sales_channels_is_active_idx" ON "sales_channels"("is_active");

-- CreateIndex
CREATE INDEX "provinces_name_idx" ON "provinces"("name");

-- CreateIndex
CREATE INDEX "cities_name_idx" ON "cities"("name");

-- CreateIndex
CREATE INDEX "districts_name_idx" ON "districts"("name");

-- CreateIndex
CREATE INDEX "villages_name_idx" ON "villages"("name");

-- CreateIndex
CREATE UNIQUE INDEX "installments_payment_method_id_key" ON "installments"("payment_method_id");

-- CreateIndex
CREATE UNIQUE INDEX "installments_order_id_key" ON "installments"("order_id");

-- CreateIndex
CREATE INDEX "installments_is_paid_idx" ON "installments"("is_paid");

-- CreateIndex
CREATE INDEX "installments_order_id_idx" ON "installments"("order_id");

-- CreateIndex
CREATE INDEX "installments_payment_method_id_idx" ON "installments"("payment_method_id");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_discounts" ADD CONSTRAINT "product_discounts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_prices" ADD CONSTRAINT "product_prices_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_variant" ADD CONSTRAINT "product_variant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_sales_channel_id_fkey" FOREIGN KEY ("sales_channel_id") REFERENCES "sales_channels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_delivery_place_id_fkey" FOREIGN KEY ("delivery_place_id") REFERENCES "delivery_places"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_orderer_customer_id_fkey" FOREIGN KEY ("orderer_customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_delivery_target_customer_id_fkey" FOREIGN KEY ("delivery_target_customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "payment_methods"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_products" ADD CONSTRAINT "order_products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_products" ADD CONSTRAINT "order_products_order_detail_id_fkey" FOREIGN KEY ("order_detail_id") REFERENCES "order_details"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipping_services" ADD CONSTRAINT "shipping_services_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "provinces"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "districts" ADD CONSTRAINT "districts_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "villages" ADD CONSTRAINT "villages_disctict_id_fkey" FOREIGN KEY ("disctict_id") REFERENCES "districts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "installments" ADD CONSTRAINT "installments_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "installments" ADD CONSTRAINT "installments_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "payment_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
