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
update Users set role='admin' where id='5acdb827-ec04-44df-9f1d-e7a71d1da978'
-- 删
delete from user where id=1

-- 数据列操作
-- 删除数据列（删除数据表的 i 字段）
ALTER TABLE testalter_tbl DROP i;

-- 增加数据列
ALTER TABLE testalter_tbl ADD i INT;
ALTER TABLE Users ADD role VARCHAR(255);

-- 修改数据列
ALTER TABLE testalter_tbl MODIFY c CHAR(10);
