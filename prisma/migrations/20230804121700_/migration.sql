/*
  Warnings:

  - You are about to drop the column `create` on the `order_detail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `address` MODIFY `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `order_detail` DROP COLUMN `create`,
    ADD COLUMN `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
