/*
  Warnings:

  - You are about to drop the column `authorId` on the `post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `authorId`;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `authorId`;
