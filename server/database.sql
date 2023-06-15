create TABLE person(
 id serial primary key,
 name_person varchar(255),
 surname varchar(255)
);

create table posts(
 id serial primary key,
 title varchar(255),
 content varchar(255),
 user_id integer,
 foreign key (user_id) references person(id)
);