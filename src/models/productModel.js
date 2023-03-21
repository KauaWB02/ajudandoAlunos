const connection = require('./connection')

const listProducts = async () => {
   const [products] = await connection.execute('SELECT * FROM tb_product');

   return products;
};

const createProduct = async (body) => {

   console.log(body);

   try {

      let query = 'INSERT INTO tb_product (name, description, stock, maturity, type_medicine, created_at, updated_at) values (?,?,?,?,?,?,?) ';
      let date = new Date().toLocaleDateString();
      let vecimento = new Date(body.maturity);
      await connection.execute(query, [body.name, body.description, body.stock, vecimento, body.type_medicine, date, null])
         .then(() => {
            return `Produto [${body.name}] cadastrado com sucesso!`
         })
         .catch((e) => {
            console.log('teste')

            throw { message: `Algo aconteceu [${e}]` }
         })

   } catch (e) {
      console.log(e)
   }

}


module.exports = {
   listProducts,
   createProduct,
}
