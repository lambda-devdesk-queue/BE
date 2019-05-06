
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {
          id: 1,
          title: "React Issue",
          description: "Short description",
          category: "React",
          resolved: 0,
          assigned: 1,
          assigned_user: 1,
          created_at: "2019-05-05 05:00:00",
          user_id: 2
        },
        {
          id: 2,
          title: "JavaScript Issue",
          description: "Short description",
          category: "JavaScript",
          resolved: 0,
          assigned: 1,
          assigned_user: 1,
          created_at: "2019-05-05 05:00:00",
          user_id: 4
        },
        {
          id: 3,
          title: "CSS Issue",
          description: "Short description",
          category: "CSS",
          resolved: 0,
          assigned: 1,
          assigned_user: 1,
          created_at: "2019-05-05 05:00:00",
          user_id: 2
        },
        {
          id: 4,
          title: "HTML Issue",
          description: "Short description",
          category: "HTML",
          resolved: 0,
          assigned: 1,
          assigned_user: 1,
          created_at: "2019-05-05 05:00:00",
          user_id: 4
        },
        {
          id: 5,
          title: "JavaScript Problem",
          description: "Short description",
          category: "JavaScript",
          resolved: 0,
          assigned: 1,
          assigned_user: 3,
          created_at: "2019-05-05 05:00:00",
          user_id: 2
        },
        {
          id: 6,
          title: "CSS Problem",
          description: "Short description",
          category: "CSS",
          resolved: 0,
          assigned: 1,
          assigned_user: 3,
          created_at: "2019-05-05 05:00:00",
          user_id: 4
        },
        {
          id: 7,
          title: "React Problem",
          description: "Short description",
          category: "React",
          resolved: 0,
          assigned: 1,
          assigned_user: 3,
          created_at: "2019-05-05 05:00:00",
          user_id: 2
        },
        {
          id: 8,
          title: "HTML Problem",
          description: "Short description",
          category: "HTML",
          resolved: 0,
          assigned: 1,
          assigned_user: 3,
          created_at: "2019-05-05 05:00:00",
          user_id: 4
        }
      ]);
    });
};
