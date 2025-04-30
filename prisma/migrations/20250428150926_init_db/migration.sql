-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'SUPERADMIN');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('settlement', 'pending', 'cancel', 'installments');

-- CreateEnum
CREATE TYPE "ProductTypes" AS ENUM ('BARANG_STOK_SENDIRI', 'BARANG_SUPPLIER_LAIN', 'BARANG_PRE_ORDER');

-- CreateEnum
CREATE TYPE "CustomerCategories" AS ENUM ('CUSTOMER', 'RESELLER', 'DROPSHIPPER', 'MEMBER', 'AGENT');

-- CreateEnum
CREATE TYPE "CustomerStatuses" AS ENUM ('ACTIVE', 'NONACTIVE');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "fullname" TEXT,
    "email" TEXT,
    "password" TEXT,
    "role" "Roles",
    "created_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "name" TEXT,

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

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_wholesaler" (
    "id" UUID NOT NULL,
    "product_variant_id" UUID,
    "lower_limit_item" INTEGER,
    "upper_limit_item" INTEGER,
    "unit_price" DOUBLE PRECISION,
    "wholesaler_price" DOUBLE PRECISION,

    CONSTRAINT "product_wholesaler_pkey" PRIMARY KEY ("id")
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

    CONSTRAINT "product_variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "category" "CustomerCategories",
    "address" TEXT,
    "subdistrict" TEXT,
    "postal_code" TEXT,
    "phone_number" TEXT,
    "email" TEXT,
    "status" "CustomerStatuses",

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" UUID NOT NULL,
    "orderer_customer_id" UUID,
    "delivery_target_customer_id" UUID,
    "sender_place" TEXT,
    "order_date" DATE,
    "sales_channel" TEXT,
    "note" TEXT,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_details" (
    "id" UUID NOT NULL,
    "product_id" UUID,
    "payment_method_id" UUID,
    "code" TEXT,
    "product_qty" INTEGER,
    "courier_name" TEXT,
    "courier_category" TEXT,
    "courier_eta" TEXT,
    "courier_cost" TEXT,
    "other_fees" JSONB,
    "final_price" DOUBLE PRECISION,
    "paymentStatus" "PaymentStatus",
    "payment_date" TIMESTAMP(3),
    "receipt_number" TEXT,

    CONSTRAINT "order_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_methods" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "bank_name" TEXT,
    "bank_branch" TEXT,
    "account_number" TEXT,

    CONSTRAINT "payment_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "delivery_places" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "subdistrict" TEXT,
    "phone_number" TEXT,
    "email" TEXT,

    CONSTRAINT "delivery_places_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expenses" (
    "id" UUID NOT NULL,
    "item_name" TEXT,
    "item_price" TEXT,
    "item_total" INTEGER,
    "total_price" DOUBLE PRECISION,
    "person_responsible" TEXT,
    "note" TEXT,

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

    CONSTRAINT "shop_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales_channels" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "is_active" BOOLEAN,

    CONSTRAINT "sales_channels_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

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
CREATE INDEX "orders_sales_channel_idx" ON "orders"("sales_channel");

-- CreateIndex
CREATE INDEX "order_details_product_id_idx" ON "order_details"("product_id");

-- CreateIndex
CREATE INDEX "order_details_payment_method_id_idx" ON "order_details"("payment_method_id");

-- CreateIndex
CREATE INDEX "order_details_paymentStatus_idx" ON "order_details"("paymentStatus");

-- CreateIndex
CREATE INDEX "order_details_code_idx" ON "order_details"("code");

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

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_wholesaler" ADD CONSTRAINT "product_wholesaler_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "product_variant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_prices" ADD CONSTRAINT "product_prices_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "product_variant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_variant" ADD CONSTRAINT "product_variant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_orderer_customer_id_fkey" FOREIGN KEY ("orderer_customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_delivery_target_customer_id_fkey" FOREIGN KEY ("delivery_target_customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "payment_methods"("id") ON DELETE SET NULL ON UPDATE CASCADE;
