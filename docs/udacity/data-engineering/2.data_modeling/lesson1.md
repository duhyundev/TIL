# 1. Introduction to the Course
## Learning Objective
 Students will understand the strengths and weaknesses of different types of databases and data modeling techniques

# 2. What is Data Modeling
"...an abstraction that __organizes elements of data__ and __how they__ will __relate__ to each other" -- Wikipedia

Data modeling can easily translate to database modeling, as this is the essential __end state__

Data modeling can easily be called database modeling

## Data modeling
- Process to support busines and user applications
- Gather REquirements
- Conceptual Data Modeling
- Logical Data Modeling
- Physical Data Modeling

### overview
In this course, we will focus on The __physical data model__ to create DDL's in __Relational__ and __Non_Relational databases__
(DDL => Data Definition Language)

# 3. Why is Data Modeling Important?
- Data organization is critical
- Organized data determines later data use
- Begin prior to building out application, business logic, and analytical models
- Iterative preocess

# 4. Who does this type of work?
Data Modeling is an important skill for :
- data scientist
- software engineers
- data engineers
- anyone involved in the process of using and analyzing data

# 5. Intro to Relational Databases
## Relational Model
"This model __organizes data into__ one or more tables (or __relations) of columns and rows__, with a __unique key identifying each row.__
Generally, each table represents one __entity type__"

RDBMS (Relation DataBase Management System)

- Database/Schema
  - Collection of Tables
- Tables/Relation
  - A group of rows sharing the same labeled elements
- Columns/Attribute
  - Labeled element
- Rows/Tuple
  - A single item

# 6. Quiz: Relational Databases
- True or __False__: A column holds multiple tables.
- __True__ or False: An attribute is another name for a column.
- __True__ or False: A schema is a collection of tables in some database terminology.

# 7. When to use a relational database

## Advantages of using a Relational Database
- Ease of use -- SQL
- Ability to do JOINS
- Ability to do aggregations and analytics
- Smaller data volumes
- Easier to change business requirements
- Flexibility for queries
- Modeling the data not modeling queries
- Secondary Indexes available
  - for quick search, can add secondary indexes
- __ACID Transactions --data integrity__ 

# 8. ACID Transactions

## ACID Properties
"...properties of database transactions intended to __guarantee validity__ even __in__ the __event of errors, power failures...__" 

### Atomicity
"...the whole transaction is processed or nothing is processed"

### Consistency
"...only transactions that abide by constraints and rules is written into the database otherwise database keeps previous state"

### Isolation
"...transactions are processed independently and securely, order does not matter"

### Durability
"...completed transactions are saved to database even of cases of system failure"

# 8. When Not to Use a Relational Database
- Large amounts of data
- Need to be able to store different data type formats
- Need high throughput --fast reads
- Need a flexible schema
  - flexible schema can allow for columns to be added that do not have to be used by every row, and this saves disk space.
- Need high availability
- Need horizontal scalability

## High Availability
"...describes a database where there is very little __downtime__ of the system, it is __always on__ and __functioning__"

## Hoizontal Scalability
- Ability to add more servers to the system
  - ...can add more nodes or servers to a system, and the performance in the space of the system will increase
  - Many traditional databases especially Relational Database cannot add additional servers

# 10. What is PostgreSQL?
- Open source object-relational database system
- Uses and builds on SQL language

# 11. Demos: Creating a Postgres Table
# 12. Exercise
refer_path : ./L1_Exercise_1_Creating_a_Table_with_Postgres.ipynb