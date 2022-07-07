-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_author_id_fkey`;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_likes_fkey` FOREIGN KEY (`likes`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_dislikes_fkey` FOREIGN KEY (`dislikes`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
