/*
  Warnings:

  - Changed the type of `unit_amount` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "unit_amount",
ADD COLUMN     "unit_amount" DOUBLE PRECISION NOT NULL;
