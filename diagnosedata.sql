DROP TABLE "failed_jobs";
CREATE TABLE "failed_jobs" ("id" integer not null primary key autoincrement, "uuid" varchar not null, "connection" text not null, "queue" text not null, "payload" text not null, "exception" text not null, "failed_at" datetime default CURRENT_TIMESTAMP not null);

DROP TABLE "gejala_penyakits";
CREATE TABLE "gejala_penyakits" ("id" integer not null primary key autoincrement, "gejala_kode" varchar not null, "penyakit_kode" varchar not null, "created_at" datetime, "updated_at" datetime);

DROP TABLE "gejalas";
CREATE TABLE "gejalas" ("id" integer not null primary key autoincrement, "kode" varchar not null, "value" text, "created_at" datetime, "updated_at" datetime);

DROP TABLE "migrations";
CREATE TABLE "migrations" ("id" integer not null primary key autoincrement, "migration" varchar not null, "batch" integer not null);

DROP TABLE "password_resets";
CREATE TABLE "password_resets" ("email" varchar not null, "token" varchar not null, "created_at" datetime);

DROP TABLE "penyakits";
CREATE TABLE "penyakits" ("id" integer not null primary key autoincrement, "kode" varchar not null, "value" text, "created_at" datetime, "updated_at" datetime);

DROP TABLE "personal_access_tokens";
CREATE TABLE "personal_access_tokens" ("id" integer not null primary key autoincrement, "tokenable_type" varchar not null, "tokenable_id" integer not null, "name" varchar not null, "token" varchar not null, "abilities" text, "last_used_at" datetime, "expires_at" datetime, "created_at" datetime, "updated_at" datetime);

DROP TABLE "sqlite_sequence";
CREATE TABLE sqlite_sequence(name,seq);

DROP TABLE "users";
CREATE TABLE "users" ("id" integer not null primary key autoincrement, "username" varchar not null, "email" varchar, "email_verified_at" datetime, "password" varchar not null, "remember_token" varchar, "created_at" datetime, "updated_at" datetime);


INSERT INTO "gejala_penyakits" ("id", "gejala_kode", "penyakit_kode", "created_at", "updated_at") VALUES
(1, 'G01', 'P01', NULL, NULL),
(2, 'G02', 'P01', NULL, NULL),
(3, 'G03', 'P01', NULL, NULL),
(4, 'G04', 'P01', NULL, NULL),
(5, 'G05', 'P01', NULL, NULL),
(6, 'G06', 'P01', NULL, NULL),
(7, 'G07', 'P01', NULL, NULL),
(8, 'G08', 'P01', NULL, NULL),
(9, 'G02', 'P02', NULL, NULL),
(10, 'G06', 'P02', NULL, NULL),
(11, 'G09', 'P02', NULL, NULL),
(12, 'G10', 'P02', NULL, NULL),
(13, 'G11', 'P02', NULL, NULL),
(14, 'G12', 'P02', NULL, NULL),
(15, 'G13', 'P02', NULL, NULL),
(16, 'G14', 'P02', NULL, NULL),
(17, 'G06', 'P03', NULL, NULL),
(18, 'G15', 'P03', NULL, NULL),
(19, 'G16', 'P03', NULL, NULL),
(20, 'G17', 'P03', NULL, NULL),
(21, 'G18', 'P03', NULL, NULL),
(22, 'G19', 'P03', NULL, NULL),
(23, 'G20', 'P03', NULL, NULL),
(24, 'G12', 'P04', NULL, NULL),
(25, 'G21', 'P04', NULL, NULL),
(26, 'G22', 'P04', NULL, NULL),
(27, 'G23', 'P04', NULL, NULL),
(28, 'G24', 'P04', NULL, NULL),
(29, 'G25', 'P04', NULL, NULL),
(30, 'G26', 'P05', NULL, NULL),
(31, 'G27', 'P05', NULL, NULL),
(32, 'G28', 'P05', NULL, NULL),
(33, 'G29', 'P05', NULL, NULL);

INSERT INTO "gejalas" ("id", "kode", "value", "created_at", "updated_at") VALUES
(1, 'G01', 'Mual dan muntah terus menerus', NULL, NULL),
(2, 'G02', 'Nyeri perut bagian atas', NULL, NULL),
(3, 'G03', 'Berat badan turun', NULL, NULL),
(4, 'G04', 'Lidah mengering dan kotor', NULL, NULL),
(5, 'G05', 'Kenaikan suhu badan', NULL, NULL),
(6, 'G06', 'Gangguan penglihatan', NULL, NULL),
(7, 'G07', 'Dehidrasi', NULL, NULL),
(8, 'G08', 'Kesadaran menurun', NULL, NULL),
(9, 'G09', 'Tekanan darah lebih dari 140/90 atau lebih', NULL, NULL),
(10, 'G10', 'Sesak nafas', NULL, NULL),
(11, 'G11', 'Oedema pada jari, tangan dan mata', NULL, NULL),
(12, 'G12', 'Mual dan muntah', NULL, NULL),
(13, 'G13', 'Nyeri ulu hati', NULL, NULL),
(14, 'G14', 'Sakit kepala', NULL, NULL),
(15, 'G15', 'Nyeri perut', NULL, NULL),
(16, 'G16', 'Pendaharahan ringan', NULL, NULL),
(17, 'G17', 'Nyeri pada tulang punggul', NULL, NULL),
(18, 'G18', 'Nyeri pada bahu dan leher', NULL, NULL),
(19, 'G19', 'Syok', NULL, NULL),
(20, 'G20', 'Gangguan kencing', NULL, NULL),
(21, 'G21', 'Flek atau pendaharahan berwarna coklat dan bergelembung seperti busa', NULL, NULL),
(22, 'G22', 'Keluar cairan berbentuk gelembung mirip buah anggur', NULL, NULL),
(23, 'G23', 'Tidak ada tanda-tanda adanya janin', NULL, NULL),
(24, 'G24', 'Gelisah', NULL, NULL),
(25, 'G25', 'Rahim yang tampak lebih besar dari usia kandungan', NULL, NULL),
(26, 'G26', 'Pendaharahan nyeri', NULL, NULL),
(27, 'G27', 'Pendaharahan berulang-ulang', NULL, NULL),
(28, 'G28', 'Pendaharahan keluar banyak', NULL, NULL),
(29, 'G29', 'Pendaharahan di trimester akhir', NULL, NULL);

INSERT INTO "migrations" ("id", "migration", "batch") VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_06_12_164701_create_gejalas_table', 1),
(6, '2023_06_12_165041_create_penyakits_table', 1),
(7, '2023_06_12_165153_create_gejala_penyakits_table', 1);


INSERT INTO "penyakits" ("id", "kode", "value", "created_at", "updated_at") VALUES
(1, 'P01', 'Hiperemesis Gravidarum', NULL, NULL),
(2, 'P02', 'Preeklampsia', NULL, NULL),
(3, 'P03', 'Kehamilan Ektopik', NULL, NULL),
(4, 'P04', 'Molahidatidosa (Hamil Anggur )', NULL, NULL),
(5, 'P05', 'Plasenta Previa', NULL, NULL);


INSERT INTO "sqlite_sequence" ("name", "seq") VALUES
('migrations', '7'),
('users', '2'),
('gejalas', '30'),
('penyakits', '5'),
('gejala_penyakits', '33');

INSERT INTO "users" ("id", "username", "email", "email_verified_at", "password", "remember_token", "created_at", "updated_at") VALUES
(1, 'udin', NULL, NULL, '$2y$10$bKNV1VX2ZiMmEetdGFKD.OUXRIsYdi4nx34lA0AEGoyoMiqASiTM2', NULL, '2023-06-12 17:05:34', '2023-06-12 17:05:34'),
(2, 'admin', NULL, NULL, '$2y$10$g7MUsP2gsLjmPCxQ.P9y0e3Vg.hePmH7SHsnUnTslPijqRP9G7QUa', NULL, '2023-06-12 17:05:34', '2023-06-12 17:05:34');
