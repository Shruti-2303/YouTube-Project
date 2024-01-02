import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import CommentsContainer from "./CommentsContainer";
import { YOUTUBE_CHANNEL_DETAILS_API, YOUTUBE_VIDEO_DETAILS_API } from "../constants/generalConstants";
import Header from "./Header";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [videoSnippet, setVideoSnippet] = useState(null);
  const [videoStats, setVideoStats] = useState(null);
  const [channelSnippet, setChannelSnippet] = useState(null);
  const [channelStats, setChannelStats] = useState(null);

  const getVideoDetailsAPI = async () => {
    try {
      // setLoading(true);
      const data = await fetch(
        YOUTUBE_VIDEO_DETAILS_API + "&id=" + searchParams.get("v")
      );
      const json = await data.json();
      setVideoSnippet(json.items[0].snippet);
      setVideoStats(json.items[0].statistics);
      // console.log('videoSnippet', json.items[0].snippet)
      // console.log('videoStats', json.items[0].statistics)
    } catch (error) {
      console.error("Error while fetching Videos Data: ", error);
    } finally {
      // setLoading(false);
    }
  };
  const getChannelDetailsAPI = async () => {
    try {
      // setLoading(true);
      const data = await fetch(
        YOUTUBE_CHANNEL_DETAILS_API + "&id=" + searchParams.get("channel_id")
      );
      const json = await data.json();
      setChannelSnippet(json.items[0].snippet);
      setChannelStats(json.items[0].statistics);
      // console.log('channelSnippet', json.items[0].snippet)
      // console.log('channelStats', json.items[0].statistics)
    } catch (error) {
      console.error("Error while fetching Channel Data: ", error);
    } finally {
      // setLoading(false);
    }
  };

  const formatCount = (count) => {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(2) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(2) + 'K';
    } else {
        return count.toString();
    }
}


  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetailsAPI();
    getChannelDetailsAPI();
  }, []);


  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col mx-auto">
        <div className="grid grid-cols-3 gap-10 px-8 pt-8 pb-4 h-[60vh]">
          <div className="col-span-2 ">
            <iframe
              // width="720"
              // height="405"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-xl w-full h-[30%]"
            ></iframe>
              <div className="flex flex-col gap-2 w-[100%] mt-6">
                <div className="text-xl font-bold">{videoSnippet && videoSnippet.title}</div>
                  <div className="flex gap-2 ">
                    <img className="rounded-full h-10" src={channelSnippet && channelSnippet.thumbnails.default.url} alt="channelLogo" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">{channelSnippet && channelSnippet.title}</span>
                      <span className="text-xs">{channelStats && formatCount(channelStats.subscriberCount)} Subscribers</span>
                    </div>
                  </div>
                </div>
                <CommentsContainer />
            </div>
          <div className="col-span-1">
            <LiveChat />
          </div>
        </div>

        {/* <div className="px-8 flex flex-col gap-2 w-[100%]">
          <div className="text-xl font-bold">{videoSnippet && videoSnippet.title}</div>
          <div className="flex gap-2 ">
            <img className="rounded-full h-10" src={channelSnippet && channelSnippet.thumbnails.default.url} alt="channelLogo" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{channelSnippet && channelSnippet.title}</span>
              <span className="text-xs">{channelStats && formatCount(channelStats.subscriberCount)} Subscribers</span>
            </div>
          </div>
        </div> */}

        <div>
          {/* <CommentsContainer /> */}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
