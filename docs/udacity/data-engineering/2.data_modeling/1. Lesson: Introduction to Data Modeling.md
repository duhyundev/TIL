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
# 12. Exercise 1: Creating a Table with Postgres
refer_path : ./L1_Exercise_1_Creating_a_Table_with_Postgres.ipynb

# 13. Solution for Exercise 1: Create a Table with Postgres

# 14. NoSQL Databases
## What is a NoSql Database
"...has a simpler design, simpler horizontal scaling, and finer control of availabilty. Data structures used are different than those in Relational Database are make some operations faster."

## Common Types of NoSQL Databases
### Apache Cassandra (Partition Row store)
 The data is distributed by partitions across nodes or servers, and the data is organized in the columns and rows format.

### MongoDB (Documnet store)
 One of the defining characteristics of a document-oriented database is that in addition to the Key Lookups performed by key-value store, the database also offers an API or query language that retrieves document based on its contents.

### DynamoDB (Key-Value store)
 A Key-value store is basically the data is represented as a collection of key and value pairs.

### Apache HBase (Wide Column Store)
 It also uses tables, rows, and columns, but unlike a relational database, the names and format of the columns can vary form row to row in the same table. (flexible Schema)

### Neo4J (Graph Database)
 Neo4J is a Graph Database where relationships between entities is more the focus. With graph databases, it's all about relationships, and the data is represented as nodes and edges.

## Type of NoSQL Database
In this course, we will use Apache Cassandra to explain the concepts of data modeling for NoSQL Databases.

### The Basics of Apache Cassandra

#### General
- Keysapce
  - Collection of Tables
- Table
  - A group of partitions
- Rows
  - A single item

#### Specific Apache Cassandra
- Partition
  - Fundamental unit of access
  - Collection of row(s)
  - How data is distributed 
- Primary Key
  - Primary Key is made up of a partition key and clustering columns
- Columns
  - Clustering and Data
  - Labeled element

# 15. What is Apache Cassandra
"...__provides scalability__ and __high availability__ without compromising performance. Linear Scalability and proven __falut-tolerance__ ond commodity hardware or cloud infrastructure make it the perfect platform for mission-critical data."

- Apache Cassandra uses its own query language CQL.

## What type of companies use Apache Cassandra?
 All kinds of companies. For example, Uber uses Apache Cassandra for their entire backend. Netflix uses Apache Cassandra to serve all their videos to customers. Good use cases for NoSQL (and more specifically Apache Cassandra) are :

- Transaction logging (retail, health care)
- Internet of Things (IoT)
- Time series data
- Any workload that is heavy on writes to the database (since Apache Cassandra is optimized for writes).

# 16. When to Use a NoSql Database
- Large amounts of data
- Need horizontal scalability
- Need high throughput -- fast reads
- Need a flexible schema
- Need high availability
- Need to be able to store different data type formats
- Users are distributed --low latency

NoSql was built to handle the limitations that exist in relational databases.

# 17. When Not to Use a NoSql Database
- Need ACID Transactions
- Need ability to do JOINS
- Ability to do aggregations and analytics
- Having changing business requirements
- Queries are not availiable and need to have flexibility
- Have a small datasaet

## Remember
NoSql databases and Relational databases do __not replace__ each other for all tasks.

Both do different tasks extremely well, and should be utilized for the use cases they fit best.

## Caveats to NoSQL and ACID Transactions
 There are some NoSQL databases that offer some form of ACID transaction. As of v4.0, MongoDB added multi-document ACID transactions within a single replica set. With their later version, v4.2, they have added multi-document ACID transactions in a sharded/partitioned deployment.

# 18. Demo 2: Creating table with Cassandra

# 19. Exercise 2: Create table with Cassandra
refer_path : ./L1_Exercise_2_Creating_a_Table_with_Apache_Cassandra
# 20. Solution for Exercise 2: Create table with Cassandra

# 21. Conclusion
## Wrap Up
- What is Data Modeling?
- Who Does Data Modeling?
- When to and not to use Relational Databases
- When to and not to use NoSQL databases
- How to create a simple table in PostgreSQL
- How to create a simple table in Apache Cassandra