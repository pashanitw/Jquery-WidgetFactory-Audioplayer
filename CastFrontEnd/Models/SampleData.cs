using System.Collections.Generic;

namespace CastFrontEnd.Models
{
    public class SampleData
    {
        public List<TrackModel> RoughData;

        public SampleData()
        {
            RoughData = new List<TrackModel>
                {
               
                    new TrackModel
                        {
                            UserName = "pasha",
                            img = "Content/images/batman.png",
                            trackname = "i kissed a girl i liked it!",
                            trackurl = "/Content/music/2.mp3"
                        },
                    new TrackModel
                        {
                            UserName = "Preeti",
                            img = "Content/images/captain.png",
                            trackname = "justin bieber baby.....!",
                            trackurl = "/Content/music/1.mp3"
                        },
                    new TrackModel
                        {
                            UserName = "Rakesh",
                            img = "Content/images/please.png",
                            trackname = "shakira waka waka ....!",
                            trackurl = "/Content/music/3.mp3"
                        },
                        new TrackModel
                        {
                            UserName = "Meera..",
                            img = "Content/images/batman.png",
                            trackname = "i kissed a girl i liked it!",
                            trackurl = "/Content/music/2.mp3"
                        },
                    new TrackModel
                        {
                            UserName = "Zakir",
                            img = "Content/images/please.png",
                            trackname = "justin bieber baby.....!",
                            trackurl = "/Content/music/1.mp3"
                        },
                    new TrackModel
                        {
                            UserName = "Kishore",
                            img = "Content/images/spider.png",
                            trackname = "shakira waka waka ....!",
                            trackurl = "/Content/music/3.mp3"
                        },
                        new TrackModel
                        {
                            UserName = "John",
                            img = "Content/images/batman.png",
                            trackname = "i kissed a girl i liked it!",
                            trackurl = "/Content/music/2.mp3"
                        },
                    new TrackModel
                        {
                            UserName = "Captain",
                            img = "Content/images/captain.png",
                            trackname = "justin bieber baby.....!",
                            trackurl = "/Content/music/1.mp3"
                        },
                    new TrackModel
                        {
                            UserName = "pasha",
                            img = "Content/images/captain.png",
                            trackname = "shakira waka waka ....!",
                            trackurl = "/Content/music/3.mp3"
                        },
                                 };
        }
    }
}