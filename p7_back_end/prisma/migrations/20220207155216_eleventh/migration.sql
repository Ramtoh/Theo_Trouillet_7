/*
  Warnings:

  - Added the required column `liked` to the `likes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `likes` ADD COLUMN `liked` BOOLEAN NOT NULL;
