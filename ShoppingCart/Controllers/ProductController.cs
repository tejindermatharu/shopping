using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ShoppingCart.Entities;
using ShoppingCart.Interfaces;

namespace ShoppingCart.Controllers
{
    public class ProductController : ApiController
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        // Read all items
        public IEnumerable<Product> Get()
        {
            return _productRepository.GetProducts();
        }

        public IHttpActionResult Post(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            //var repository = new ProductRepository();
            _productRepository.AddProduct(product);
            return Ok();
        }

        public IHttpActionResult Put(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            //var repository = new ProductRepository();
            _productRepository.UpdateProduct(product);
            return Ok();
        }

        public IHttpActionResult Delete(string name)
        {
            var item = _productRepository.GetProduct(name);
            if (item == null)
            {
                NotFound();
            }

            //var repository = new ProductRepository();
            _productRepository.DeleteProduct(name);
            return Ok();
        } 

    }
}
