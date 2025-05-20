/*
  Warnings:

  - You are about to drop the `product_wholesaler` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "product_wholesaler" DROP CONSTRAINT "product_wholesaler_product_variant_id_fkey";

-- DropTable
DROP TABLE "product_wholesaler";
