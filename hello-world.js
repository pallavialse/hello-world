console.log('Hello World');
txtUserId = getRequestString("UserId");
txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;
db.Execute(txtSQL,txtUserId);
