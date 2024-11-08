The following code is how you can run a Python file in the terminal with its current version"

- <span class="emphasis">NOTE </span>: It may end up being one or the other. 

```shell
python3 python_file_name.py
python python_file_name.py
```

- For example <span class="emphasis">python</span> make work for you or <span class="emphasis">python3</span> may work.

The following <span class="emphasis">keyword</span> is used to <span class="emphasis">define</span> a <span class="emphasis">function </span>:

```python
def
def my_funtion():
```

The following <span class="emphasis">function</span> is used to <span class="emphasis">round</span> a <span class="emphasis">number</span> to a <span class="emphasis">specified</span> number of <span class="secondEmphasis">decimal places</span>:

```python
round()
```

The following <span class="emphasis">function</span> is used to <span class="emphasis">print</span> out a line of code to the <span class="emphasis">console</span>:

- It is the <span class="emphasis">equivalent</span> of the <span class="emphasis">console.log()</span> in <span class="emphasis">JavaScript</span>.

```python
print()
```

The following code is the Python <span class="emphasis">equivalent</span> of what to do when you want to <span class="emphasis">create</span> a <span class="secondEmphasis">string literal</span>:

```python
(f"{}")
print(f"Hello, my name is {name} and I am {age} years old.")

```

The following <span class="emphasis">method</span> is used to <span class="emphasis">convert</span> a <span class="emphasis">number</span> or a <span class="emphasis">string</span> to a <span class="emphasis">floating-point</span> <span class="secondEmphasis">number</span>:

```python
float()
```

The following <span class="emphasis">operator</span> is used to <span class="emphasis">invert</span> the <span class="emphasis">truth</span> <span class="emphasis">value</span> of a <span class="emphasis">Boolean</span> <span class="secondEmphasis">expression</span>:

- This is the Python <span class="emphasis">equivalent</span> of using an <span class="secondEmphasis">!</span> in <span class="emphasis">JavaScript</span>.

```python
not
```

The following <span class="emphasis">built-in</span> Python <span class="emphasis">method</span> is used to <span class="emphasis">lowercase</span> <span class="secondEmphasis">strings</span>:

```python
.lower()
```

The following <span class="emphasis">method</span> <span class="secondEmphasis">capitalizes</span> the <span class="emphasis">first letter</span> in each <span class="emphasis">word</span>:

```python
.title()
```

<span class="emphasis">Lists</span> are used to store multiple <span class="emphasis">items</span> in a single <span class="emphasis">variable</span> within <span class="emphasis">square brackets</span>:

- <span class="emphasis">List</span> items are <span class="emphasis">ordered</span>, <span class="emphasis">changeable</span>, and allow <span class="emphasis">duplicate values</span>.

```python
[ 1, 2, 3, 4, 5 ]
[ 'item1', 'item2', 'item3' ]
[1, 'item2', 3.14, True]
```

<!-- ```python
.count()
.extend()
.index()
.insert()
.pop()
.remove()
.reverse()
.sort()
``` -->

This method adds a single item to the end of the existing list:

```python
.append()
```

- i.e.

```python
# Create a list
fruits = ["apple", "banana"]

# Append a new fruit to the list
fruits.append("cherry")

# Print the updated list
print(fruits)  # Output: ['apple', 'banana', 'cherry']
```

This method removes all items from a list:

```python
.clear()
```

This method creates a shallow copy of a list:

```python
.copy()
```

<span class="emphasis">Tuples</span> are another <span class="emphasis">data type</span> that <span class="emphasis">stores</span> multiple <span class="emphasis">items</span> in a single <span class="emphasis">variable</span>, but within <span class="emphasis">parenthesis</span>:

- <span class="emphasis">Tuples</span> are <span class="emphasis">ordered</span> and <span class="emphasis">unchangeable</span>.

```python
( "item1", "item2", "item3" )
```


The following method defines how to slice an objects sequence:

- Specificially where you can start and end slicing an object.

```python
slice()
```

The following method removes the element at the specified position from a list or dictionary

```python
pop()
```

The following method updates the current set by adding items from another iterable, such as a set, list, tuple, or dictionary.

- It also removes any duplicates, ensuring that all the elements in the original set occur only once.

```python
update()
```

The following is the shorthand way to right a variable name for a dataframe. 

- A Data Frame is a data structure constructed with rows and columns that resembles a spreadsheet or SQL table.

```python
df
```

The following function is used to combine multiple iterables (e.g., lists, tuples, strings) element-wise into a single iterable of tuples.

```python
zip()
```

The following function retrieves the index of a tuple, list, or dictionary if needed to update an indices for a future operation.

```python
enumerate()
```

The following function converts a value into a string.

```python
str()
```

The following function returns the number of items in an object:

```python
len()
```

The following statement is the python equivalent of a try catch block:

- It ensures resources are closed after processing them.

```python
with
```

The following function retrieves the next items from an iterator, such as a list, tuple, or dictionary:

```python
next()
```

The following keyword is used to raise an exception:

- You can define what kind of error to raise, and the text to print to the user.

```python
raise
```

- ie.

```python
x = -1

if x < 0:
  raise Exception("Sorry, no numbers below zero")
```

The following function is used to exit a program when an error occurs.

```python
sys.exit()
```

You define a class in Python by using the following syntax.

- The class keyword is first followed by the class name

```python
class myClass:
```

The following keyword is used with Python classes as a placeholder to prevent errors from being thrown while working on running executing empty sections of code.

```python
pass
```

In the following code. The portion before the parenthesis functions as a constructor for the class.

- Then adding the parenthesis makes that constructor also a method.

```python
__init__()
```

The following variable/parameter can use another name but that might confuses other developers.

- The following variable/parameter name is what is the most widely accepted name in Python.

- This variable/parameter is the equivalent of using this keyword in JavaScript/TypeScript.

```python
self
```

- The following is a full example of using self in Python:

```python
# Define the Car class
class Car:
    # Constructor to initialize car attributes
    def __init__(self, make, model, year):
        self.make = make  # Car make (e.g., Toyota)
        self.model = model  # Car model (e.g., Corolla)
        self.year = year  # Car year (e.g., 2021)

    # Method to display car info
    def display_info(self):
        print(f"{self.year} {self.make} {self.model}")

# Create a Car object
my_car = Car("Toyota", "Corolla", 2021)

# Display car info
my_car.display_info()
```



