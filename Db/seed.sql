INSERT INTO department (name)
VALUES
    ( "Accounting"),
    ( "Legal"),
    ( "Marketing");

    INSERT INTO role (title, salary, department_id)
VALUES
    ("Accountant", 60000, 1),
    ( "Lawyer", 80000, 2),
    ( "Marketing Manager", 60000, 3);

    INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ( "Tom", "Apple", 3, null),
    ( "Jane", "Orange", 2, 1),
    ( "Bobbi", "Banana" , 3, 2);