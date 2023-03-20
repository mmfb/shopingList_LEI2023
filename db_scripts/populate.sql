-- None at the moment,users must be created using the API because of the bcrypt

-- hashed password 123
INSERT INTO appuser VALUES (1,'me','$2b$10$Wemfac2wY/7RSCdKxuYUL.GV2clfhXC66OL76uCpDFUmpYZ/bGZtW',null),
(2,'me2','$2b$10$6j2xIDnnxv.TLfBSstbbO.qE7wFTf5envx/uijiFjCP3slsy7EE4K',null);

insert into shoplist(shl_usr_id,shl_name) values
   (1,'Week shoplist'),
   (1,'Easter shoplist'),
   (1,'Party shoplist'),
   (2,'Monthly shoplist');

insert into product(prd_name,prd_img_url) values 
('Potato','https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg'),
('Pork','https://images.pexels.com/photos/8251005/pexels-photo-8251005.jpeg'),
('Milk',null),
('Eggs','https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg'),
('Tomatos','https://images.pexels.com/photos/4022083/pexels-photo-4022083.jpeg');

insert into unit (un_name) values ('units'),('kg'),('half dozen'),('liter');

insert into item(it_shl_id,it_prd_id,it_un_id,it_quant) values
  (1,3,4,3), (1,4,3,1), (2,1,2,2.5), (2,2,2,1.5),(2,5,2,1),
  (3,4,3,2), (3,3,4,2), (4,4,3,1), (4,2,2,0.7);


