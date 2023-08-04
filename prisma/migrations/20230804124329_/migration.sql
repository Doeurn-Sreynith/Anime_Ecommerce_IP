/*
  Warnings:

  - A unique constraint covering the columns `[rid]` on the table `order` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `order_detail` DROP FOREIGN KEY `order_detail_rid_fkey`;

-- AlterTable
ALTER TABLE `order_detail` MODIFY `rid` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `order_rid_key` ON `order`(`rid`);

-- AddForeignKey
ALTER TABLE `order_detail` ADD CONSTRAINT `order_detail_rid_fkey` FOREIGN KEY (`rid`) REFERENCES `order`(`rid`) ON DELETE RESTRICT ON UPDATE CASCADE;
