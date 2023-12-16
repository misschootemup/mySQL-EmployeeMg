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
    ( 1, "apple"),
    ( 2, "orange"),
    ( 3, "banana");