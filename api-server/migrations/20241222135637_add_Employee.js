exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE employee (
            employee_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            name TEXT NOT NULL,
            position TEXT,
            salary INT
        );
        COMMENT ON TABLE employee IS 'Nhân viên';
        COMMENT ON COLUMN employee.name IS 'Tên nhân viên';
        COMMENT ON COLUMN employee.position IS 'Chức vụ';
        COMMENT ON COLUMN employee.salary IS 'Lương';
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE employee;
    `);
};
