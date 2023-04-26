module.exports = {


  friendlyName: 'Uploadfile',


  description: 'Uploadfile upload.',

  files: ['mediaFile'],


  inputs: {

    mediaFile: {
      type: 'ref'
    },

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var util = require('util');
    var mediaFileUrl = '';
    var mediaFilesArray = [];

    console.log("UPLOAD")

    // Upload the image.
   
      for (var key in files) {
        if (files[key] !== undefined) {
          if (files[key].field == 'mediaFile') {
            mediaFileUrl = "https://wastemanagement20200134.s3.eu-north-1.amazonaws.com/" + files[key].fd;
            var fileObj = {
              fileName: files[key].filename,
              url: mediaFileUrl
            }
            mediaFilesArray.push(fileObj);
          }
        }
      }

      return exits.success({
        mediaFileUrl: mediaFileUrl,
        mediaFilesArray: mediaFilesArray
      });

  }


};
