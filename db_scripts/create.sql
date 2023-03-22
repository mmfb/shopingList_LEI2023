-- Create the database with the name: shopingList
-- Then run the create table bellow

create table appuser (
    usr_id serial,
    usr_name varchar(60) not null,
    usr_pass varchar(200) not null, 
    usr_token varchar(200),
    primary key (usr_id));

create table shoplist (
    shl_id serial,
    shl_usr_id int not null,
    shl_name varchar(60) not null,
    shl_created date not null default CURRENT_DATE,
    shl_due date,
    primary key (shl_id));

create table product (
    prd_id serial,
    prd_name varchar(60) not null,
    prd_img_url varchar(300),
    primary key (prd_id));

create table item (
    it_id serial,
    it_shl_id int not null,
    it_prd_id int not null,
    it_quant decimal(6,3),
    it_un_id int,
    primary key (it_id));

create table unit (
    un_id serial,
    un_name varchar(40),
    primary key (un_id));

create table bought (
    b_id serial,
    b_it_id int not null,
    b_quant decimal(6,3),
    b_bought date not null default CURRENT_DATE,
    primary key (b_id));

-- Foreign Keys

alter table shoplist add constraint shoplist_fk_appuser
            foreign key (shl_usr_id) references appuser(usr_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table item add constraint item_fk_shoplist
            foreign key (it_shl_id) references shoplist(shl_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table item add constraint item_fk_product
            foreign key (it_prd_id) references product(prd_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table item add constraint item_fk_unit
            foreign key (it_un_id) references unit(un_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table bought add constraint bought_fk_item
            foreign key (b_it_id) references item(it_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
