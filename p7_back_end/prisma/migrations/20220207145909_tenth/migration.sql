/*
  Warnings:

  - You are about to drop the column `authorId` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `likes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `comments` DROP COLUMN `authorId`;

-- AlterTable
ALTER TABLE `likes` DROP COLUMN `authorId`;
