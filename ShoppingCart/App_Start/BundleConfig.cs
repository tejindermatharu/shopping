using System.Web;
using System.Web.Optimization;

namespace ShoppingCart
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/angular")
                  .Include("~/Scripts/angular.js")
                  .Include("~/Scripts/angular-resource.js")
                  .Include("~/Scripts/angular-route.js"));

            bundles.Add(new ScriptBundle("~/bundles/cartApp")
                  .Include("~/app/Cart/app.js")
                  .Include("~/app/Cart/route-config*")
                  .Include("~/app/Cart/Services/data-service*")
                  .Include("~/app/Cart/Services/admin-repository*")
                  .Include("~/app/Cart/Controllers/shop-controller*")
                  .Include("~/app/Cart/Controllers/admin-controller*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
