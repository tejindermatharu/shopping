﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingCart.Entities
{
    public class Product
    {
        public string Name { get; set; }
        public string Desc { get; set; }
        public decimal  Price { get; set; }
        public decimal Quantity { get; set; }
    }
}
