create database if not exists GoodPet;
use GoodPet;

create table if not exists users(
	id_usr int not null primary key auto_increment,
    nam_usr varchar(45) not null,
    mail_usr varchar(100) not null,
    pass_usr varchar(100) not null
);

select * from users;