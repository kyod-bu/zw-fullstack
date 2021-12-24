-- 终端登录 mysql 数据库：
-- mysql -u root -p
-- 创建数据库 shop:
create database shop;

-- 创建数据表 user：
create table user;

-- 删除数据表 user：
 delete table user;

-- 数据操作
-- 增
insert into user (id, name) values (2, 'text1')
-- 查
select * from user
-- 改
update Users set name='admin' where name='zhaowa'
-- 删
delete from user where id=1
