-- CreateEnum
CREATE TYPE "ProductDiscountTypes" AS ENUM ('PERCENTAGE', 'NOMINAL');

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

-- AddForeignKey
ALTER TABLE "product_discounts" ADD CONSTRAINT "product_discounts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
