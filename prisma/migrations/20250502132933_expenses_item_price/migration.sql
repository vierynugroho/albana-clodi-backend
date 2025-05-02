/*
  Warnings:

  - The `item_price` column on the `expenses` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "item_price",
ADD COLUMN     "item_price" DOUBLE PRECISION;
