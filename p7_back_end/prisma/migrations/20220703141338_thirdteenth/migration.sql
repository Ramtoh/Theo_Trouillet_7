/*
  Warnings:

  - You are about to drop the `likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `post_author_id_fkey`;

-- AlterTable
ALTER TABLE `post` ADD COLUMN `dislikes` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    ADD COLUMN `likes` INTEGER UNSIGNED NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `likes`;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
