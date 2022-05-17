/*
  Warnings:

  - The primary key for the `post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `post_id` on the `post` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `user_id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - Added the required column `author_id` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publication_id` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comments` ADD COLUMN `author_id` INTEGER UNSIGNED NOT NULL,
    ADD COLUMN `publication_id` INTEGER UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `post` DROP PRIMARY KEY,
    ADD COLUMN `author_id` INTEGER UNSIGNED NOT NULL,
    MODIFY `post_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`post_id`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `user_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`user_id`);

-- CreateIndex
CREATE INDEX `FK1_PUBLICATIONID` ON `comments`(`publication_id`);

-- CreateIndex
CREATE INDEX `FK2_AUTHORID` ON `comments`(`author_id`);

-- CreateIndex
CREATE INDEX `FK1_AUTHORID` ON `post`(`author_id`);

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_publication_id_fkey` FOREIGN KEY (`publication_id`) REFERENCES `post`(`post_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
