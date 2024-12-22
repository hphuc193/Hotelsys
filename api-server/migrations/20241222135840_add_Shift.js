exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE shift (
            shift_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            name TEXT NOT NULL,
            start_time TIME NOT NULL,
            end_time TIME NOT NULL
        );
        COMMENT ON TABLE shift IS 'Ca làm việc';
        COMMENT ON COLUMN shift.name IS 'Tên ca';
        COMMENT ON COLUMN shift.start_time IS 'Thời gian bắt đầu';
        COMMENT ON COLUMN shift.end_time IS 'Thời gian kết thúc';
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE shift;
    `);
};