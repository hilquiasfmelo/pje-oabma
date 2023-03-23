-- DropForeignKey
ALTER TABLE `courts` DROP FOREIGN KEY `courts_states_id_fkey`;

-- RenameIndex
ALTER TABLE `courts` RENAME INDEX `courts_states_id_fkey` TO `courts_states_id_idx`;
