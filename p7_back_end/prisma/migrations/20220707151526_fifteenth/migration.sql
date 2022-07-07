/*
  Warnings:

  - You are about to drop the column `dislikes` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `post_dislikes_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `post_likes_fkey`;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `dislikes`,
    DROP COLUMN `likes`;
