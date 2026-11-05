CREATE TABLE `quote_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`project_type` text,
	`material` text,
	`project_url` text,
	`message` text NOT NULL,
	`file_key` text,
	`file_name` text,
	`file_size` integer,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` integer NOT NULL
);
