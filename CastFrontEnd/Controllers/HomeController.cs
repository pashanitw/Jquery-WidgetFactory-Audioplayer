using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Web.Mvc;
using CastFrontEnd.Models;
namespace CastFrontEnd.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult template()
        {
            return View();
        }

        public JsonResult GetMusic()
        {
            return Json(new SampleData().RoughData, JsonRequestBehavior.AllowGet);
        }

        public ActionResult boot()
        {
            return View();
        }

        public ActionResult testboot()
        {
            return View();
        }

        public void Save(string recording)
        {
            if (recording == "")
            {
                recording += "output.wav";
            }
            Stream str;
            str = Request.InputStream;
            //  var filestream = new FileInfo("C:\\Output\\" +"1"+ recordin
            var path = Server.MapPath(Url.Content("~/Content/music/temp.wav"));
            var filestream = new FileInfo(path);
            FileStream mst = filestream.Create();
            mst.Close();
            FileStream wrtstream = filestream.OpenWrite();
            str.Seek(0, SeekOrigin.Begin);
            str.CopyTo(wrtstream);
            wrtstream.Close();
            str.Close();
        }
    }

}
