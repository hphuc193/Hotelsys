exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE room_status (
            room_status_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            status_name TEXT NOT NULL,
            description TEXT
        );
        COMMENT ON TABLE room_status IS 'Trạng thái phòng';
        COMMENT ON COLUMN room_status.status_name IS 'Tên trạng thái';
        COMMENT ON COLUMN room_status.description IS 'Mô tả trạng thái';
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE room_status;
    `);
};