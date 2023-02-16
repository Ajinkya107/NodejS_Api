"README":
1. Install the folder on your local machine.
2.Open the folder in vscode to run the project 
3. Install npm init -y
   a)npm install express body-parser --save
  b) To run the project  "npm run start"
4. Once the project is live use the url:
	5. Open the postman app in order to test the end points
	a)When you open the postman choose "GET" method and you will be able to see the empty array
  a)  post:  http://localhost:3000/items 
     Enter the data for ex in "body: json"
     {
  "patientName": "Astronaut",
  "patientAddress": "112, brooklyn west avenue",
  "hospitalName": "General Hospital",
  "dateOfService": "2023-02-14",
  "billAmount": 2000

}
b) Now select "GET" and use the url:http://localhost:3000/items
	c) You will be able to see the medical bill

5. The end   





