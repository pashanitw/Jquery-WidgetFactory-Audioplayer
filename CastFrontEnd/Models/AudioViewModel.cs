using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace CastGraphy.WebRole.Models
{
    public class AudioViewModel
    {
        [Required()]
        [StringLength(20,MinimumLength=10)]
        [RegularExpression(@"(\S)+", ErrorMessage = "White space is not allowed")]
        public string Title { get; set; }
        [Required()]
        public string Username { get; set; }
        [Required()]
        public string Channel { get; set; }
    }
}