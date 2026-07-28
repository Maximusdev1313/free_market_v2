/*
  Warnings:

  - Made the column `bar_code` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sale_price` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `stock_balance` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "bar_code" SET NOT NULL,
ALTER COLUMN "sale_price" SET NOT NULL,
ALTER COLUMN "stock_balance" SET NOT NULL;
