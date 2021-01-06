# 1. Learning Obejctvie
## Learning Objective
 Students will learn the fundamentals of how to do relational data modeling by focusing on normalization, denormalization, fact/dimension tables, and different schema models.

# 2. Databases
## Definition
 A set of related data and the way it is organized.

## Database Management System
"...consisting of __computer software__ that allows users to interact with the databases and provides access to all of the data. Because of the __close relationship__ the term database is often used to refer to both the database and the DMBS used."

# 3. Importance of Relational Databases
- Invented in 1969 by researchers at IBM. Edgar R. Codd, the lead researcher, proposed 12 rules of what makes a database management system a true relational system.

__Rule 1:__ The _information rule_
 All information in a relational database is represented explicitly at the logical level and in exactly one way - by values in tables

## Relational Importance
- Standardization of data model
  - Once your data is transformed into the rows and columns format, your data is standardized and you can query it with SQL
- Flexibility in adding and altering tables
  - Relational databases gives you flexibility to add tables, alter tables, add and remove data.
- Data Integrity
  - Data Integrity is the backbone of using a relational database.
- Standrad Query Language (SQL)
  - A standard language can be used to access the data with a predefined language.
- Simplicity
  - Data is systematically stored and modeled in tabular format.
- Intuituve Organization
  - The spreadsheet format is intuitive but intuitive to data modeling in relational databases.

# 4. OLAP vs OLTP

## What is OLAP vs OLTP?
### Online Analytical Processing (OLAP)
  Databases optimized for these workloads allow for __complex analytical and ad hoc queries.__ These type of databases are optimized for reads.
### Online Transactional Processing (OLTP)
  Databases optimized for these workloads allow for __less complex querie in large volume.__ The types of queries for these databases are read, insert, update, and delete.

# 5. Quiz: Quiz1
- True or __False__: OLTP queries are read heavy and focus primarily on analytics.
- What makes data modeling for relational databases different?
  - [x] The ability to model data in a way that is intutive
  - [ ] You must model for your queries first
  - [ ] There is no flexibility or agile nature to this process

# 6. Structuring the Database
## Definition
__Normalization__ : To reduce data redundancy and increase data integrity.
__Denormalization__ : Must be done in read heavy workloads to increase performance. 

### Normalization
The process of __structuring__ a relational database in accordance with a series of __normal forms__ in order __to reduce data redundancy and increase data integrity.__

# 7. Objectives of Normal Form
1. To free the database form unwanted insertions, updates, and deletion dependencies
2. To reduce the need for refactoring the database as new types of data are introduced
3. To make the relation model more infromative to users
4. To make the database neutral to the query statistics

# 8. Normal Forms
The process of normalization is a step by step process:
- First Normal Form (1NF)
- Second Normal Form (2NF)
- Third Normal Form (3NF)

## 1NF
How to Reach 1st Normal Form
- Atomic values : each cell contains unique and single values
- Be able to add data without altering tables
- Seperate different relations into different tables
- Keep relationships between tables together with foreign keys

## 2NF
How to Reach 2nd Normal Form
- Have reached 1NF
- All columns in the table must rely on the Primary key

## 3NF
How to Reach 3rd Normal Form
- Must be in 2nd Normal Form
- No transitive dependencies

# 9. Demo 1: Creating Normalized Tables

# 10. Exercise 1: Creating Normalized Tables
refer_path : ./L2_Exercise_1_Creating_Normalized_Tables.ipynb

# 11. Solution: Exercise 1: Creating Normalized Tables

# 12. Denormalization
## Denormalization
The process of trying to improve the read performance of a database at the expense of losing some wirte performance by adding redundant copies of data.

### Logical Design Change
1. The Designer is incharge of keeping data consistent
2. Reads will be faster (select)
3. Writes will be slower (insert, update, delete)

# 13. Demo 2: Createing Denormalized Tables

# 14. Denormalization Vs. Normalization

## Normalization
Normalization is about trying to increase data integrity by reducing the number of copies of the data. Data that needs to be added or updated will be done in as few places as possible.

## Denormalization
Denormalization is trying to increase performance by reducing the number of joins between tables (as joins can be slow). Data integrity will take a bit of a potential hit, as there will be more copies of the data (to reduce JOINS).

# 15. Exercise 2: Creating Denormalized Tables
refer_path : ./L2_Exercise_2_Creating_Denormalized_Tables.ipynb

# 16. Solution: Exercise 2: Creating Denormalized Tables

# 17. Fact and Dimension Tables
## Fact and Dimension Tables
- Work together to create an organized data model
- While fact and dimension are not created differently in the DDL, they are conceptual and extremely important for organization.

### Fact Tables
Fact table consists of the measurements, metrics or facts of a business process.

### Dimension
A structure that categorizes facts and measures in order to enable users to answer business questions. Dimensions are people, products, place and time.

### Implementing Different Schemas
Two of the most popular (because of their simplicity) data mart schema for data warehouses are:
  1. Star Schema
  2. Snowflake Schema

# 18. Star Schemas

# 19. Benefits of Star Schemas

# 20. Snowflake Schemas