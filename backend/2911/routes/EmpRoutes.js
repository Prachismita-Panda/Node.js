const express = require("express");
const { getAllEmployees } = require("../controllers/testController");
const db = require("../config/db");
const router = express.Router();
router.get("/getall", getAllEmployees);

router.get("/searchByEmpno/:en", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM emp WHERE empno=${req.params.en}`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});

router.get("/searchByName/:en", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM emp WHERE ENAME =${req.params.en}`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/searchByEmpnoEnameSal", async (req, res) => {
    try {
        const data = await db.query(`SELECT EMPNO,ENAME,SAL FROM emp`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/searchBySal", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM EMP WHERE SAL >1500`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/searchByJob", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM EMP WHERE JOB = 'CLERK' `);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/searchByOrder", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM EMP ORDER BY ENAME`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/searchBySalCon ", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM EMP WHERE SAL>=1500 AND SAL<= 4000`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/searchByLastCharacterN", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM EMP WHERE ENAME LIKE '%N'`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/searchBySecondLetter", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM EMP WHERE ENAME LIKE '_M%'`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/searchByNameUnknown", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM EMP WHERE ENAME LIKE '____'`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/searchByLoc", async (req, res) => {
    try {
        const data = await db.query(`SELECT ENAME FROM EMP WHERE DEPTNO = (SELECT DEPTNO FROM DEPT WHERE LOC = 'CHICAGO') `);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/searchDeptOfKing", async (req, res) => {
    try {
        const data = await db.query(`SELECT DNAME FROM DEPT WHERE DEPTNO = (SELECT DEPTNO FROM EMP WHERE ENAME ='KING');`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/maxsal", async (req, res) => {
    try {
        const data = await db.query(`SELECT MAX(SAL) FROM emp`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});

router.get("/minsal", async (req, res) => {
    try {
        const data = await db.query(`SELECT MIN(SAL) FROM emp`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/countsal", async (req, res) => {
    try {
        const data = await db.query(`SELECT COUNT(SAL) FROM emp`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


router.get("/avgsal", async (req, res) => {
    try {
        const data = await db.query(`SELECT AVG(SAL) FROM emp`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});

// 18 Display employees working in departments located in 'CHICAGO'
router.get("/chicagoDeptEmp", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT * FROM employee 
            WHERE deptno IN (
                SELECT deptno FROM dept WHERE loc='CHICAGO'
            )
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 19 List employee name, salary, grade (Grade determined by salgrade table)
router.get("/empSalGrade", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT ename, sal, 
            (SELECT grade FROM salgrade WHERE sal BETWEEN losal AND hisal) AS grade 
            FROM employee
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 20 Employees whose department name contains 'A'
router.get("/deptContainsA", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT * FROM employee 
            WHERE deptno IN (
                SELECT deptno FROM dept WHERE dname LIKE '%A%'
            )
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 21 Employees working in departments with loc ending with 'N'
router.get("/locEndsN", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT * FROM employee 
            WHERE deptno IN (
                SELECT deptno FROM dept WHERE loc LIKE '%N'
            )
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 22 Show empno, ename, deptno, deptname sorted by department name
router.get("/empDeptSorted", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT empno, ename, deptno,
            (SELECT dname FROM dept WHERE deptno = employee.deptno) AS deptname 
            FROM employee 
            ORDER BY deptname
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 23 Employees with salary grade >= 3 (using sub-query grade lookup)
router.get("/grade3above", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT * FROM employee 
            WHERE sal IN (
                SELECT sal FROM employee 
                WHERE (SELECT grade FROM salgrade WHERE sal BETWEEN losal AND hisal) >= 3
            )
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 24 Employees whose job contains 'CL'
router.get("/jobCL", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT ename, job,
            (SELECT grade FROM salgrade WHERE sal BETWEEN losal AND hisal) AS salgrade
            FROM employee 
            WHERE job LIKE '%CL%'
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 25 Departments starting with 'R' or ending with 'G'
router.get("/deptRorG", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT * FROM employee 
            WHERE deptno IN (
                SELECT deptno FROM dept 
                WHERE dname LIKE 'R%' OR dname LIKE '%G'
            )
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 26 Minimum salary from employee table
router.get("/minsal", async (req, res) => {
    try {
        const data = await db.query(`SELECT MIN(sal) AS minsal FROM employee`);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 27 Average salary
router.get("/avgsal", async (req, res) => {
    try {
        const data = await db.query(`SELECT AVG(sal) AS avgsal FROM employee`);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 28 Count total employees
router.get("/countEmp", async (req, res) => {
    try {
        const data = await db.query(`SELECT COUNT(*) AS totalEmp FROM employee`);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 29 Second highest salary
router.get("/secondHighSal", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT sal FROM employee 
            WHERE sal < (SELECT MAX(sal) FROM employee) 
            ORDER BY sal DESC LIMIT 1
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 30 Employees with salary above average salary
router.get("/aboveAvgSal", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT * FROM employee 
            WHERE sal > (SELECT AVG(sal) FROM employee)
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 31 Highest paid employee details
router.get("/highestPaid", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT * FROM employee 
            WHERE sal = (SELECT MAX(sal) FROM employee)
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 32 Lowest paid employee details
router.get("/lowestPaid", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT * FROM employee 
            WHERE sal = (SELECT MIN(sal) FROM employee)
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});

// 33 Department with highest number of employees
router.get("/maxDept", async (req, res) => {
    try {
        const data = await db.query(`
            SELECT deptno,
            (SELECT dname FROM dept WHERE deptno = employee.deptno) AS deptname,
            COUNT(*) AS totalEmp 
            FROM employee 
            GROUP BY deptno 
            ORDER BY totalEmp DESC LIMIT 1
        `);

        if (!data[0].length) 
            return res.send({
                success: false,
                message: "No record found",
                errorCode: 500,
                data: data[0]
            });

        res.send({
            success: true,
            message: "Record found",
            errorCode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error occurred",
            errorCode: 404,
            error
        });
    }
});






module.exports = router;
