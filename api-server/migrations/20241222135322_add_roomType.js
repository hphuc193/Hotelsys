exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE room_type (
            room_type_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            name TEXT NOT NULL,
            description TEXT
        );
        COMMENT ON TABLE room_type IS 'Loại phòng';
        COMMENT ON COLUMN room_type.name IS 'Tên loại phòng';
        COMMENT ON COLUMN room_type.description IS 'Mô tả loại phòng';
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE room_type;
    `);
};