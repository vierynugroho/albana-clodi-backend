/*
  Warnings:

  - You are about to drop the column `courier_category` on the `order_details` table. All the data in the column will be lost.
  - You are about to drop the column `courier_cost` on the `order_details` table. All the data in the column will be lost.
  - You are about to drop the column `courier_eta` on the `order_details` table. All the data in the column will be lost.
  - You are about to drop the column `courier_name` on the `order_details` table. All the data in the column will be lost.
  - You are about to drop the column `sales_channel` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `sender_place` on the `orders` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "orders_sales_channel_idx";

-- AlterTable
ALTER TABLE "order_details" DROP COLUMN "courier_category",
DROP COLUMN "courier_cost",
DROP COLUMN "courier_eta",
DROP COLUMN "courier_name",
ADD COLUMN     "shipping_service_id" UUID;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "sales_channel",
DROP COLUMN "sender_place",
ADD COLUMN     "delivery_place_id" UUID,
ADD COLUMN     "sales_channel_id" UUID;

-- CreateTable
CREATE TABLE "shipping_services" (
    "id" UUID NOT NULL,
    "order_detail_id" UUID,
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

-- CreateIndex
CREATE INDEX "shipping_services_shipping_name_idx" ON "shipping_services"("shipping_name");

-- CreateIndex
CREATE INDEX "shipping_services_service_name_idx" ON "shipping_services"("service_name");

-- CreateIndex
CREATE INDEX "shipping_services_type_idx" ON "shipping_services"("type");

-- CreateIndex
CREATE INDEX "orders_delivery_place_id_idx" ON "orders"("delivery_place_id");

-- CreateIndex
CREATE INDEX "orders_sales_channel_id_idx" ON "orders"("sales_channel_id");

-- CreateIndex
CREATE INDEX "orders_created_at_idx" ON "orders"("created_at");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_sales_channel_id_fkey" FOREIGN KEY ("sales_channel_id") REFERENCES "sales_channels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_delivery_place_id_fkey" FOREIGN KEY ("delivery_place_id") REFERENCES "delivery_places"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_shipping_service_id_fkey" FOREIGN KEY ("shipping_service_id") REFERENCES "shipping_services"("id") ON DELETE SET NULL ON UPDATE CASCADE;
