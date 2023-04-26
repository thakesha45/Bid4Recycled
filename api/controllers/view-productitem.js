module.exports = {


  friendlyName: 'View productitem',


  description: 'Display "Productitem" page.',

  inputs: {

    id: {
      type: 'string'
    }

  },

  exits: {

    success: {
      viewTemplatePath: 'pages/productitem'
    }

  },


  fn: async function (inputs, exits) {

   

    // Respond with view.
    return exits.success({
      data: data,
      productList: productList ? productList : []
    });

  }


};
