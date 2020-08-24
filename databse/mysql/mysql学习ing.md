进入mysql：`mysql -u root -p`

显示数据库：`show databases;`

进入数据库：`use <数据库名>;`

显示表：`show tables;`

创建表：

```
create table final_stu(
    -> id varchar(10) primary key not null,
    -> name varchar(20),
    -> sex enum('男','女','保密') default '保密',
    -> enrollment year,
    -> birthday date,
    -> class varchar(20)
    -> )engine=myisam charset=utf8;
```

增：

```
insert into final_stu values
    -> ('002','李四','男',2020,'1994-05-25','1-1'),
    -> ('003','王五','男',2019,'1995-04-02','2-10'),
    -> ('004','周梅','女',2020,'1993-06-16','1-1');
```

删：

```
alter table final_stu drop id;
```

改：

```
update set name='小花' sex='女' where id=1;
```

```
alter table final_stu add address varchar(20) not null default '' comment '户籍地址';
```

查：

```
select name,id from final_stu where name like '王%' and id<007 order by id desc limit 3;
```

