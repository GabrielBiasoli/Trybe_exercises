-- SELF JOIN

-- 1. Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências ( manager ) cujos departamentos ( department ) são diferentes.
SELECT 
    e.FIRST_NAME, e2.FIRST_NAME
FROM
    employees e
        INNER JOIN
    employees e2 ON e.EMPLOYEE_ID = e2.MANAGER_ID
WHERE
    e.DEPARTMENT_ID <> e2.DEPARTMENT_ID;
    
-- 2. Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.
SELECT 
    m.first_name, COUNT(*)
FROM
    employees m
        INNER JOIN
    employees e ON m.employee_id = e.manager_id
GROUP BY m.employee_id;
