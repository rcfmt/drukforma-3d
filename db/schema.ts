import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const quoteRequests = sqliteTable("quote_requests", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  projectType: text("project_type"),
  material: text("material"),
  projectUrl: text("project_url"),
  message: text("message").notNull(),
  fileKey: text("file_key"),
  fileName: text("file_name"),
  fileSize: integer("file_size"),
  status: text("status").notNull().default("new"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
