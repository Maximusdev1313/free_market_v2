-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "bar_code" INTEGER,
ADD COLUMN     "discounted_price" DOUBLE PRECISION,
ADD COLUMN     "sale_price" DOUBLE PRECISION,
ADD COLUMN     "stock_balance" INTEGER;
