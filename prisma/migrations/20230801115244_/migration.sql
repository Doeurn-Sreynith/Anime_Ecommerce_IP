/*
  Warnings:

  - You are about to drop the column `coupon_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `order_detail` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `size` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pid]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `size` DROP FOREIGN KEY `size_productId_fkey`;

-- AlterTable
ALTER TABLE `contact` MODIFY `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `order` DROP COLUMN `coupon_id`;

-- AlterTable
ALTER TABLE `order_detail` DROP COLUMN `discount`,
    MODIFY `quantity` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `pickupopt` MODIFY `create` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `size` DROP COLUMN `productId`;

-- CreateIndex
CREATE UNIQUE INDEX `product_pid_key` ON `product`(`pid`);

-- AddForeignKey
ALTER TABLE `size` ADD CONSTRAINT `size_pid_fkey` FOREIGN KEY (`pid`) REFERENCES `product`(`pid`) ON DELETE RESTRICT ON UPDATE CASCADE;
