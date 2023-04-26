module.exports = {


  friendlyName: 'View home',


  description: 'Display "Home" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/home'
    }

  },


  fn: async function (inputs,exits) {

    var cardboardList = [];
    var metalList = [];
    var paperList = [];
    var plasticList = [];
    var textilesList = [];
    var woodList = [];

    var productList = await Product.find().sort('createdAt DESC');

   

   console.log('Product list ',productList)
    return exits.success({
     
    });

  }


};
