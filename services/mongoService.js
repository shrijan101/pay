((mongoService, mongodb)=>{

    var connectionString = process.env.MongoConnectionString ||
        "mongodb://localhost:27017/paypaltesting";
    var connect = (cb)=> {
        mongodb.connect(connectionString, (err,db)=>{
        return cb(err,db,()=>{db.close()}
        );

    });
        mongoService.Create=(colName, createObj,cb)=>{
        connect((err,db,close)=>{
        db.collection(colName).insert(createObj, (err, results)=>{
            )
            cb(err,results);
        return close();


        });

        });
        }
    };
    mongoService.Read = (colname, readObj,cb)=>{
        connect((err,db,close)=>{

            db.collection(colName.find(readObj).toArray((err,results)=>{
                cb(err,results);
                return close();

                });
            )
        }
        mongoService.Update =(colName,findObj,updateObj,cb)=>{
            connect((err,db,close)=>{
                db.collection(colName).update(findObj,{$set: updateObj},(err,results)=>{
                    cb(err,results);
                    return close();

                });
            });
        }

    }
}
    mongoService.DELETE=(colName,findObj,cb)=>{
        Connect((err,db,close)=>{
            db.collection(colName).remove(findObj,(err,results)=>{
                cb(err,results);
                return close();

            });

        });
    }

(
    module.exports,
    require('mongodb')
);
