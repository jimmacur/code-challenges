# 1/24/25 ruby/JS challenges

# 1. Sum of Two Numbers

# Write a function that takes two numbers as input and returns their sum

def sum(num1, num2)
  num1 + num2
end

# p sum(2, 4)

# 2. Convert Celsius to Fahrenheit

# Write a function that converts a temperature from Celsius to Fahrenheit. The formula is:

# F = (C x (9/5)) + 32

def celToFahr(celcius)
  celsius * (9.0/5) + 32
end

# p celToFahr(15)

# had to make 9 = 9.0 otherwise ruby makes 9/5 an integer instead of a float = 1

# 3. Check for Even or Odd

# Write a function that takes a number as input and returns "even" if the number is even and "odd" if the number is odd.

def evenOrOdd(number)
  if (number%2 == 0)
    "even"
  else
    "odd"
  end
end

p evenOrOdd(15)
p evenOrOdd(14)

# no need to put 'p' within the function