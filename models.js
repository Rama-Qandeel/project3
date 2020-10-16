const db = [
    {
      username: "admin",
      email: "admin@gmail.com",
      //   password: "admin123",
      roleId: "admin",
    },
  
    {
    //   id: "ff506ff4-3e5e-4cd7-b511-3d945808b02c",
      username: "Dr-Ali",
      email: "ali1@gmail.com",
    //   password: "ali123",
     password:
        "$2b$10$D.rxrvzlvDVfnHUfEBv2H.CDtgbu.QAJCDmyLmVQ4iy/aF67gajbe",
      roleId: 1,
    },
    {
    //   id: "9fc03fa3-5e1b-4632-85a0-04073084a675",
      username: "Hadeel",
      email: "hadeel2@gmail.com",
    //   password: "hadeel123",
     password:
        "$2b$10$t3/pySs5ZcEOLQjhPoeyk.dZpyccuFHmnn2PWeGXD.cUhgwGiavlm",
      roleId: 1,
    },
    {
    //   id: "6f80eaa0-d179-42f0-828e-9e1c571d2cbe",
      username: "ahmad",
      email: "ahmad@gmail.com",
      class: "fourth",
    //   password: "ahmad123",
    password:
        "$2b$10$cjoIrtXRqx12C0lAafAxDONFnsnOA3112quS6tFWt3wCIkHhbu5vW",
      roleId: 3,
    },
    {
    //   id: "c3744aa4-18f5-46ef-b0b5-7130d6030ee2",
      username: "sara",
      email: "sara1@gmail.com",
    //   password: "sara123",
      password:
        "$2b$10$qEPNOcrkdQlNhnz.uLf6KO3fyR44pWRhjTPYgpBsYHrXRoSwAIJlm",
      material: "",
      time: "",
      roleId: 2,
    },
    {
    //   id: "98d9e480-107e-4fc8-970a-6ebfb082f2d5",
      username: "omar",
      email: "omar@gmail.com",
    //   password: "omar123",
      password:
        "$2b$10$BynPBR5Lql6hSR27DwoUpu/F09Pi78mbFtKmS125.6PB/.jHJN2Sa",
      material: "math",
      time: "10-11",
      roleId: 2,
    },
    {
    //   id: "ae7e8cac-aabf-4e8e-a36c-71393c1a57ea",
      username: "lina",
      email: "lina@gmail.com",
      class: "tawjihi",
    //   password: "lina123",
      password:
        "$2b$10$xQ5Pe.vodfp8QEMwn/8DVuQPPwbe1WTgeXkPLXhUQwiWD4.CkObFK",
      roleId: 3,
    },
  ];
  
  const roles = [
    {
        id: "admin",
        type: "admin",
        permissions: ["CreateManager",],
      },
    {
      id: 1,
      type: "manager",
      permissions: ["Get", "Createnew", "Update", "Delele"],
    },
    {
      id: 2,
      type: "teacher",
      permissions: ["Get", "Create", "Update", "Delele"],
    },
    { id: 3, type: "student", permissions: ["Get"] },
  ];
  
  module.exports = {
    db,
    roles,
  };
  