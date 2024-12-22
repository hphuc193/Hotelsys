exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE receptionist (
            receptionist_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            employee_id INT NOT NULL REFERENCES employee(employee_id) ON DELETE CASCADE,
            shift TEXT
        );
        COMMENT ON TABLE receptionist IS 'Lễ tân';
        COMMENT ON COLUMN receptionist.employee_id IS 'Mã nhân viên';
        COMMENT ON COLUMN receptionist.shift IS 'Ca làm việc';
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE receptionist;
    `);
};
