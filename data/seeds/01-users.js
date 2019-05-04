
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
            id: 1,
            firstName: "AdminFirst",
            lastName: "AdminLast",
            username: "admin",
            password: "$2a$12$i5EsB0hDdJ5XwxPK9/VqeehXitPhHr8haUuEXCnLgHu1MLCOsG5NC",
            email: "admin@email.com",
            isAdmin: 1,
            cohort: null,
            created_at: "2019-05-02 05:11:33"
        },
        {
            id: 2,
            firstName: "StudentFirst",
            lastName: "StudentLast",
            username: "student",
            password: "$2a$12$t7GNRk85k8nrZLNDGkaEk.wrXH8iZshqkPWJoh8mSn9OPH9DCKYC.",
            email: "student@email.com",
            isAdmin: 0,
            cohort: "WEBPT4",
            created_at: "2019-05-02 05:12:31"
        },
        {
            id: 3,
            firstName: "Xavier",
            lastName: "Puentes",
            username: "xpuentes",
            password: "$2a$12$0Z4PY4ASsQCQWs9CjFoB3ec05nBLYWopBFsyZGO4vftvk4LwakpFW",
            email: "xavier@email.com",
            isAdmin: 1,
            cohort: "WEBPT3",
            created_at: "2019-05-03 04:55:13"
        }
      ]);
    });
};
