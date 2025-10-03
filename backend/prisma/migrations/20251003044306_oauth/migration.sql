/*
  Warnings:

  - A unique constraint covering the columns `[googleId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `avatar` VARCHAR(500) NULL,
    ADD COLUMN `firstName` VARCHAR(100) NULL,
    ADD COLUMN `googleId` VARCHAR(255) NULL,
    ADD COLUMN `lastName` VARCHAR(100) NULL,
    ADD COLUMN `provider` VARCHAR(20) NOT NULL DEFAULT 'local',
    MODIFY `username` VARCHAR(50) NULL,
    MODIFY `password` VARCHAR(255) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_googleId_key` ON `users`(`googleId`);
