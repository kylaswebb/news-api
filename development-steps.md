# installation

- install 
    express
    mysql2
    sequelize

- global install
    - sequelizecli
    - sequelize
- sequelize init

# Add Sequelize

Sequelize commands:
#### News table:
$ sequelize-cli model:generate --name News
 --attributes urlSlug:string,,user_id:integer,guid:string,title:string,link:string,categories:string,content:text,imageUrl:string,publishedDate:string,isPublished:string,isApproved:string

 #### Users table: 
 - $ sequelize-cli model:generate --name Users --attributes email:string,password:string,fname:string,lname:string,isActive:boolean,isApproved:boolean

#### NewsLikes table: 
 - $ sequelize-cli model:generate --name NewsLikes --attributes news_id:integer,user_id:integer

#### NewsComments table: 
 - $ sequelize-cli model:generate --name NewsComments --attributes news_id:integer,user_id:integer,comment:string

 After running all above command to create migrations and models changes them to match current migrations and models (add allowNull, defaultValue, foreignkeys )

## Running migrations
- sequelize-cli db:migrate

## Undoing Migrations
- sequelize-cli db:migrate:all

## Creating seed
- sequelize-cli seed:generate --name demo-user
- sequelize-cli seed:generate --name demo-news

## Running Seeds:
- sequelize-cli db:seed:all

## Undo all seeds
- sequelize-cli db:seed:undo:all