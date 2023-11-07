const userAccount=require('../model/userModel')

// const register=async(req,res)=>{
//     const data={
//         name:"Prince",
//         email:"prince07@gmail.com",
//         password:"test",
//         mobileno:9527168450
//     }
//     const response=await userAccount.create(data)
//     console.log(response)
//     return res.send(response)
// }

// const login=async(req,res)=>{
//     const data={
//         email:"prince07@gmail.com",
//         password:"test"
//     }

//     const result=await userAccount.findOne({email:data.email})
//     return res.send(result)
// }

const ques2=async(req,res)=>{
    try{
        const data=([{
            "firstName": "John",
            "lastName": "Doe",
            "salary": "25000",
            "department": "HR",
            "lastCompany": "X",
            "lastSalary": "10000",
            "overallExp": "2",
            "contactInfo": "1234567890",
            "yearGrad": "2016",
            "gradStream": "CSE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "roh",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          }])
        // const data=
        //     {"firstName": "John",
        //     "lastName": "Doe",
        //     "salary": "25000",
        //     "department": "HR",
        //     "lastCompany": "X",
        //     "lastSalary": "10000",
        //     "overallExp": "2",
        //     "contactInfo": "1234567890",
        //     "yearGrad": "2016",
        //     "gradStream": "CSE"
        //   }

          const response=await userAccount.create(data)
          console.log(response)
          return res.status(200).send(response)
        }

        catch(err){
            return res.status(500).send(err,"error occurred")
        }
}

const ques3=async(req,res)=>{
    try{
        const result=await userAccount.find({"salary":{$gt:"30000"}})
        return res.status(200).send(result)
    }
    catch(err){
        res.status(500).send(err,"error occurred")
    }
}

const ques4=async(req,res)=>{
    try{
        const result=await userAccount.find({"overallExp":{$gt:"2"}})
        return res.status(200).send(result)
    }
    catch(err){
        res.status(500).send(err,"error occurred")
    }
}

const ques5=async(req,res)=>{
    try{
        const result=await userAccount.find({"yearGrad":{$gt:"2015"},"overallExp":{$gt:"1"}})
        return res.status(200).send(result)
    }
    catch(err){
        res.status(500).send(err,"error occurred")
    }
}

const ques6=async(req,res)=>{
    try{
        const result=await userAccount.updateMany({"salary":{$gt:"70000"}},{$set:{"salary":"65000"}})
        return res.status(200).send(result)
    }
    catch(err){
        res.status(500).send(err,"error occurred")
    }
}

const ques7=async(req,res)=>{
    try{
        const result=await userAccount.deleteMany({"lastCompany":"Y"})
        return res.status(200).send(result)
    }
    catch(err){
        res.status(500).send(err,"error occurred")
    }
}


module.exports={ques2,ques3,ques4,ques5,ques6,ques7}