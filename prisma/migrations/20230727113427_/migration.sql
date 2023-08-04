/*
  Warnings:

  - You are about to drop the column `categoryId` on the `product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cid]` on the table `category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_categoryId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `categoryId`;

-- CreateIndex
CREATE UNIQUE INDEX `category_cid_key` ON `category`(`cid`);

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_cid_fkey` FOREIGN KEY (`cid`) REFERENCES `category`(`cid`) ON DELETE RESTRICT ON UPDATE CASCADE;
