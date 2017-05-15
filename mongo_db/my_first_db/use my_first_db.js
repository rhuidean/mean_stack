use my_first_db

db.createCollection("students")

db.students.insert({name:"a",state:"OK",number:8,birthday:{month:8,day:23,year:1978}})

db.students.find()

db.students.find($or,[{state:"CA"},{state:WA}])

db.students.find({number:{$gt:3}})

db.students.find({number:{$lte:3}})

db.students.find($or,[{number:{$lte:9}},{number:{$gte:1}}])


