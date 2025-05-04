-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "destination_id" INTEGER;

-- AlterTable
ALTER TABLE "delivery_places" ADD COLUMN     "description" TEXT,
ADD COLUMN     "destination_id" INTEGER;
