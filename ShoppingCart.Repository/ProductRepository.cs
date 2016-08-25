using ShoppingCart.Entities;
using ShoppingCart.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingCart.Repository
{
    public class ProductRepository : IProductRepository
    {
        private static Dictionary<string, Product> products;

        static ProductRepository()
        {
            products = new Dictionary<string, Product>();
        }

        public IEnumerable<Product> GetProducts()
        {
            return products.Select(x => x.Value);
        }

        public void AddProduct(Product product)
        {
            products.Add(product.Name,product);
        }

        public void UpdateProduct(Product product)
        {
            if (products.ContainsKey(product.Name))
            {
                products[product.Name] = product;
            }
        }

        public void DeleteProduct(string name)
        {
            if (products.ContainsKey(name))
            {
                products.Remove(name);
            }
        }

        public Product GetProduct(string name)
        {
            if (products.ContainsKey(name))
            {
                return products[name];
            }

            return null;
        }

    }
}
