/*
  Warnings:

  - A unique constraint covering the columns `[userId,templateId]` on the table `FavoriteTemplate` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "FavoriteTemplate" DROP CONSTRAINT "FavoriteTemplate_templateId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteTemplate" DROP CONSTRAINT "FavoriteTemplate_userId_fkey";

-- AlterTable
ALTER TABLE "Prompt" ALTER COLUMN "version" SET DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteTemplate_userId_templateId_key" ON "FavoriteTemplate"("userId", "templateId");

-- CreateIndex
CREATE INDEX "Project_provider_idx" ON "Project"("provider");

-- CreateIndex
CREATE INDEX "Prompt_projectId_idx" ON "Prompt"("projectId");

-- CreateIndex
CREATE INDEX "PromptTemplate_category_idx" ON "PromptTemplate"("category");

-- AddForeignKey
ALTER TABLE "FavoriteTemplate" ADD CONSTRAINT "FavoriteTemplate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteTemplate" ADD CONSTRAINT "FavoriteTemplate_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "PromptTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
