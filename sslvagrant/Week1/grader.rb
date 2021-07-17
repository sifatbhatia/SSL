class Grader
    def grader(_grade, _student, _assignment) 
        grade = _grade.to_f
        puts('-------------------------------------')
        puts('Student Name: ' + _student)
        puts('Assignment Name: ' + _assignment)
        if grade < 60 
            puts ("Grade: F")
        elsif grade >= 60 && grade <= 69 
            puts ("Grade: D")
        elsif grade >= 70 && grade <= 79 
            puts ("Grade: C")
        elsif grade >= 80 && grade <= 89 
            puts ("Grade: B")
        else
            puts ("Grade: A")
       
        end
        puts('-------------------------------------')
      
    end
    print "What is the name of the student? "
    student_name = gets.chomp
    print "What is the assignment's name? "
    assignment_name = gets.chomp
    print "What's your grade: "
    grade = gets.chomp
    gradex = Grader.new
    gradex.grader(grade, student_name, assignment_name)
end
