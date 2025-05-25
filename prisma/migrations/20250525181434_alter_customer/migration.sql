/*
  Warnings:

  - You are about to drop the column `subdistrict` on the `customers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "customers" DROP COLUMN "subdistrict",
ADD COLUMN     "address_detail" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "district" TEXT,
ADD COLUMN     "province" TEXT,
ADD COLUMN     "village" TEXT;
