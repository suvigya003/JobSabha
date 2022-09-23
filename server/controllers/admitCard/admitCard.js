const db = require("../../configs/dbService");

exports.addAdmitCard = (req, res) => {
    const id = req.params.id;
    const { name, postDate, shortInfo, examDate, examBody, examCity, downloadLink } = req.body;
    const admitCard = {
        name,
        postDate, 
        shortInfo, 
        examDate, 
        examBody, 
        examCity, 
        downloadLink        
      };

    db.query(
      `insert into admitCard values('${admitCard.name}','${admitCard.postDate}','${admitCard.shortInfo}','${admitCard.examDate}','${admitCard.examBody}','${admitCard.examCity}','${admitCard.downloadLink}')`
    )
  
      .then((data) => {
        res.status(200).json({
          message:
            "New Admit Card added successfully.",
            data:data,
        });
      })
  
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: "Internal server error",
        });
      });
  };