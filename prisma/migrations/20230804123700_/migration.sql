/*
  Warnings:

  - You are about to drop the column `productId` on the `order_detail` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `order_detail` DROP FOREIGN KEY `order_detail_productId_fkey`;

-- AlterTable
ALTER TABLE `order_detail` DROP COLUMN `productId`;

-- AddForeignKey
ALTER TABLE `order_detail` ADD CONSTRAINT `order_detail_pid_fkey` FOREIGN KEY (`pid`) REFERENCES `product`(`pid`) ON DELETE RESTRICT ON UPDATE CASCADE;
