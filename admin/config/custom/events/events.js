
// var moment = require('moment');
//
// function quotes (args, result) {
//     return args.db.client.pg ? result.replace(/`/g,'"') : result;
// }


exports.preSave = function (req, res, args, next) {
    next();
}


// upload image to cloudinary.com
// var config = {
//     cloud_name: '',
//     api_key: '',
//     api_secret: ''
// };
// if (config.api_secret) {
//     var cloudinary = require('cloudinary'),
//         fs = require('fs'),
//         path = require('path');
//     cloudinary.config(config);
// }

exports.postSave = function (req, res, args, next) {
    const aws = require('aws-sdk');
    const fs = require('fs');
    const path = require('path');
    const fileType = require('file-type');
    const mysql = require('mysql');

    if (args.name == 'fund_card_photo' && args.action == 'insert') {

        let fname = args.data.view.fund_card_photo.records[0].columns.name;
        let fpath = path.join(args.upath, fname);

        let data = fs.readFileSync(fpath);
        aws.config.region = 'ap-northeast-2'; //Seoul
        aws.config.update({
            accessKeyId: "AKIAI7PAUTPPUMOTRL7A",
            secretAccessKey: "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"
        });
        let s3_params = {
            Bucket: 'belhyun-fund',
            Key: fname,
            ACL: 'public-read',
            ContentType: fileType(data)['mime']
        };

        let s3obj = new aws.S3({ params: s3_params });
        s3obj.upload({ Body: data }).
        on('httpUploadProgress', function (evt) { console.log(evt); }).
        send(function (err, data) {
            //let record = args.data.view.fund_card_photo.records[0].columns;
            //record.image_url = data.Location;
            //console.log(data.Location);
            console.log(err);
            console.log(data);
            var connection = mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : 'fund',
                database : 'fund'
            });

            connection.connect();

            console.log(args.data.view.fund_card_photo.records[0]);

            let sql = "UPDATE fund_card_photo SET image_url = " + "'" + data.Location + "' WHERE id= " +
                    args.data.view.fund_card_photo.records[0].pk[0];
            connection.query(sql, function (err, rows, fields) {
                if (err) console.log(err);
                // console.log('rows', rows); //row는 배열이다.
                // console.log('fields', fields); //fields는 컬럼을 의미한다.
            });

            connection.end();//접속이 끊긴다.
            next();
        });
    }
    next();

    // if (args.debug) console.log('postSave');
    // debugger;

    // upload image to a third party server
    // if (args.name == 'item') {
    //     // provide your credentials to cloudinary.com
    //     if (!config.api_secret) return next();
    //     // file upload control data
    //     var image = args.upload.view.item.records[0].columns.image;
    //     // in case file is chosen through the file input control
    //     if (image.name) {
    //         // file name of the image already uploaded to the upload folder
    //         var fname = args.data.view.item.records[0].columns.image;
    //         // upload
    //         var fpath = path.join(args.upath, fname);
    //         cloudinary.uploader.upload(fpath, function (result) {
    //             console.log(result);
    //             next();
    //         });
    //     }
    //     else next();
    // }
    // else next();
}


exports.preList = function (req, res, args, next) {
    next();
}
