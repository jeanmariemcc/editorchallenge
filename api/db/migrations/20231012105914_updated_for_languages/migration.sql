/*
  Warnings:

  - You are about to drop the column `version` on the `codeDoc` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_codeDoc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "filename" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "codeDoc_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_codeDoc" ("content", "createdAt", "filename", "id", "language", "projectId", "updatedAt") SELECT "content", "createdAt", "filename", "id", "language", "projectId", "updatedAt" FROM "codeDoc";
DROP TABLE "codeDoc";
ALTER TABLE "new_codeDoc" RENAME TO "codeDoc";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
