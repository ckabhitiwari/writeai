/*
  Warnings:

  - Added the required column `stripePriceId` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Subscription` ADD COLUMN `stripePriceId` VARCHAR(191) NOT NULL;

-- RenameIndex
ALTER TABLE `Subscription` RENAME INDEX `Subscription_userId_fkey` TO `Subscription_userId_idx`;
