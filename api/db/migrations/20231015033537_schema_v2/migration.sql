/*
  Warnings:

  - You are about to drop the `CodeDoc` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `docVersion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CodeDoc";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "docVersion";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ProjFile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "filename" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProjFile_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DocVersion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projFileId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DocVersion_projFileId_fkey" FOREIGN KEY ("projFileId") REFERENCES "ProjFile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
