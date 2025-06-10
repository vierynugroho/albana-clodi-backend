-- AlterTable
ALTER TABLE "order_products" ADD COLUMN     "product_variant_id" UUID;

-- AddForeignKey
ALTER TABLE "order_products" ADD CONSTRAINT "order_products_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "product_variant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
