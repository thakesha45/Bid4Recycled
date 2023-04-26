module.exports = {


  friendlyName: 'View directoryitem',


  description: 'Display "Directoryitem" page.',


  inputs: {
    type: {
      type: "string"
    }
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/directoryitem'
    }

  },


  fn: async function (inputs, exits) {

    var companyList = [];
    var filter = {};

    

    

    console.log('LIST', companyList)
    // Respond with view.
    return exits.success({
     
    });

  }


};
