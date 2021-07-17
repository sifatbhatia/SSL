import sys
def grader(_grade, _student, _assignment):
	grade = float(_grade)
	print('-------------------------------------')
	print('Student Name: ' + _student)
	print('Assignment Name: ' + _assignment)
	if grade < 60:
		print ("Grade: F")
	elif grade >= 60 and grade <= 69:
		print ("Grade: D")
	elif grade >= 70 and grade <= 79:
		print ("Grade: C")
	elif grade >= 80 and grade <= 89:
		print ("Grade: B")
	else:
		print ("Grade: A")
	print('-------------------------------------')



student_name = raw_input("What is the name of the student? ")
assignment_name = raw_input("What is the assignment's name? ")
grade = raw_input("What's your grade: ")
grader(grade, student_name, assignment_name)
