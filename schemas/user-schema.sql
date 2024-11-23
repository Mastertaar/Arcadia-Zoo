CREATE TABLE `zoo_arcadia`.`user` (`id` INT NOT NULL AUTO_INCREMENT , 
`first_name` VARCHAR(50) NOT NULL, 
`last_name` VARCHAR(50) NOT NULL, 
`email` VARCHAR(50) NOT NULL,
`password` CHAR(60) NOT NULL, 
`comments` TEXT NOT NULL, 
`status` VARCHAR NOT NULL DEFAULT 'active', PRIMARY KEY(`id`)) ENGINE = MYSQL