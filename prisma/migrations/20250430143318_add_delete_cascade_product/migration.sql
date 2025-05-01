-- DropForeignKey
ALTER TABLE "product_prices" DROP CONSTRAINT "product_prices_product_variant_id_fkey";

-- DropForeignKey
ALTER TABLE "product_variant" DROP CONSTRAINT "product_variant_product_id_fkey";

-- DropForeignKey
ALTER TABLE "product_wholesaler" DROP CONSTRAINT "product_wholesaler_product_variant_id_fkey";

-- AddForeignKey
ALTER TABLE "product_wholesaler" ADD CONSTRAINT "product_wholesaler_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_prices" ADD CONSTRAINT "product_prices_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_variant" ADD CONSTRAINT "product_variant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
