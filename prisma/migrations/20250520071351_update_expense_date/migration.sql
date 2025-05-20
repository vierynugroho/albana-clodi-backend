/*
  Warnings:

  - You are about to drop the column `expense_data` on the `expenses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "expense_data",
ADD COLUMN     "expense_date" TIMESTAMP(3);
