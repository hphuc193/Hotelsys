exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE special_requests (
            request_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            booking_id INT NOT NULL REFERENCES booking(booking_id) ON DELETE CASCADE,
            request_text TEXT NOT NULL
        );
        COMMENT ON TABLE special_requests IS 'Yêu cầu đặc biệt';
        COMMENT ON COLUMN special_requests.booking_id IS 'Mã đặt phòng';
        COMMENT ON COLUMN special_requests.request_text IS 'Nội dung yêu cầu';
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE special_requests;
    `);
};