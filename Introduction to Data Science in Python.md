# Introduction to Data Science in Python

[TOC]



## Week1

### introduction to Specialization : [Video]

​	이 강의는 파이썬과 데이터 과학 전문화 과정의 5개 중 첫번째 강의이다. 프로그래밍과 통계에 대한 기본적인 지식이 있다는 가정을 하며, 강조할 것은 파이썬 프로그래밍 언어를 통해 응용 기술 교육을 하는 것이다.

#### Python, Why Python ?

1. It's easy to learn
2. Full featured : Not just a statistics language, but full capabilities for data.
3. Strong Data Science Libraries : The SciPy Ecosystem

#### Course Outline

1. Prerequisite Python Knowledge
2. The Pandas Toolkit
3. Advanced Querying and Manipulation with pandas
4. Basic Statistical Analysis with numpy and spicy, and project





### Syllabus : [Reading]

 #### Prerequisites

 프로그래밍 배경이 있기를 바라며, 없다면, coursera course `Programming for Everybody` 를 듣기를 바람.

#### Grading and Assignments

 80% grade가 통과에 필요합니다.

#### Working Offline

 Jupyter Notebook system을 사용하면, offline에서도 이용가능하다.



### Data Science : [Video]

데이터 사이언스가 무엇인지 생각해보고, 무엇을 알고 싶은지 고민해보세요. 

If someone you ran into asked you what data science was, and why you were taking this class, what would you tell them?

---

 데이터 사이언스는 말그대로 데이터에 대한 과학이라고 말할 수 있다. 데이터라 함은, 기록의 단위로 일커러 질 수 있다. 그러한 기록은 길이나, 양처럼 정량적인 것 일 수도 있으며, 사람의 생각처럼 추상적인 것일 수도 있다. 핵심은 그것이 정량화 되어 있던, 추상화 되어있던, 수치로서 표현할 수도 있게하거나 혹은 그래픽으로서 표현된 것을 데이터라고 할 수 있다. 데이터가 저장 혹은 보관됨으로서, 축적된 산물이 여러가지 방법으로 분석되어 미래의 것에 대한 경향 혹은 추정할 수 있을 것이다. 경향 혹은 추정 뿐아니라, 당장의 어떤 결정을 내리는데 도움이 될 수 있다.  이러한 방법론을 포함한, 모든 과정을 일커러 과학이라 부를 수 있을 것 같다.
 데이터 사이언스 공부에 대한 열망은 나에게 필연적이다. 나는 사회에서 일어나는 모든 일을 포함한 나의 개인적 일들도 그것이 합리적 결정이기를 바란다. 합리적이기 위해서는 근거가 있어야한다. 하지만, 실제 사회에서 일어나는 일들은 그렇게 합리적으로 결정되지 않는다. 결정을 내리는 사람의 문제이기보다, 실제 사회는 생각보다 긴급하거나, 합리적 결정을 위한 근거 도출를 위한 시간이 부족하거나, 또한 그 근거를 기반하는 내용, 즉 데이터의 부족일 수도 있다. 즉, 나는 나에게 있어서 데이터 사이언스에 대한 사고의 방향과 실질적 능력이 이 사회에 큰 도움이 될수 있을 거라 확신한다. 크게는 이 사회, 작게는 내가 속한 집단, 필연적으로 나에게 있어서.

---

 Data Science is literally a science of data. Data may be referred to as a unit of recording. Such records may be quantitative, such as length or weight, or abstract as human thought. At its core, data can be represented numerically or graphically. As the data is stored or archived, the accumulated products can be analyzed in variety of ways to estimate the future. In addition to trends or estimates, it can help you make some immediate decisions. It is likely that all processes, including this methodology, will be called science.
 The desire to study data science is inevitable to me. I hope that my personal affairs, including everything that happens in society, are rational decisions. To be reasonable, there must be evidence. However, what really happens is not so reasonably determined. Rather than being a matter of the person making the decision, the real world may be more urgent than i think, lack of time to establish a basis for rational decisions, or a lack of data based on the evidence. In other words, I am convinced that the direction and practical ability of thinking about data science can be of great benefits th this society. Big in this society, small in my group, inevitably for me.



### 50 years of Data Science, David Donoho[: Reading]

Optional







### The Coursera Jupyter Notebook System[: Video]

 introduction Jupyter notebook or coursera



### Notice for Auditing Learners: Assignment Submission[: Reading]

Notice



### Notebook: Week 1 Lectures Jupyter Notebook[: Notebook]

##### Cheatsheet



```python
# for
for name, email in x.items():
    print(name)
    print(email)

    
# for loop
let lst = []
for i in Range(10)
    for j in Range(10)
        [].append(i*j)
    
# list comparison
[i*j for i in Range(10)
     for j in Range(10)]
```



### Python Functions[: Video]

### Python Types and Sequences[: Video]

tuple, list, dictionary(no order like js object )

```python
# Tuple is immutable. 
x = (1, 'a', 2, 'b')
type(x)
# outpu t> tuple

# List is mutable
x = [1, 'a', 2, 'b']
type(x)
# output> list
x.append(3.3)
print(x)
# output > [1, 'a', 2, 'b', 3.3]

# Dictionaries associate keys with values
x = {'Christopher Brooks': 'brooksch@umich.edu', 'Bill Gates': 'billg@microsoft.com'}
x['Christopher Brooks'] # Retrieve a value by using the indexing operator
# output > 'brooksch@umich.edu'
```



### Python More on Strings[: Video]

Utf, unicode 256의 의미

string is not mutable

### Python Demonstration: Reading and Writing CSV files[: Video]

literating , csv 

### Python Dates and Times[: Video]

offset, time module

### Objects and map()[: Video]

class patterning

```python
# class
class Person:
    department = 'School of Information' #a class variable

    def set_name(self, new_name): #a method
        self.name = new_name
    def set_location(self, new_location):
        self.location = new_location

person = Person()
person.set_name('Christopher Brooks')
person.set_location('Ann Arbor, MI, USA')
print('{} live in {} and works in the department {}'.format(person.name, person.location, person.department))
```

Python's object는 private, protected 맴버들을 갖지않는다.

둘째로, 파이선에서는 객체를 생성할 때, 명시적인 생성자가 필요하지 않습니다. 

원한다면 생성자를 추가할 수 있습니다. __init__ 메소드를 사용해서 말이죠

```python
# can distructuring
x = ('Christopher', 'Brooks', 'brooksch@umich.edu')
fname, lname, email = x
```



### Advanced Python Lambda and List Comprehensions[: Video]

Lambda 는 익명함수 만드는 방법임 (arrow function 이랑 비슷?)

https://medium.com/@chineketobenna/lambda-expressions-vs-anonymous-functions-in-javascript-3aa760c958ae

```python
# lambda (life arrow function ??)
my_function = lambda a, b, c : a + b
my_function(1, 2, 3)
```



### Advanced Python Demonstration: The Numerical Python Library(NumPy)[: Video]

numby like a Math in js

```python
# array vs list (NumPy as np)
np.array
np.arrange
np.linspace
...
```





## week2

## week3

## week4

