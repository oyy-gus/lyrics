"use strict";
import fetch from "node-fetch";
import * as cheerio from "cheerio";
const a = 'freestar.config.enabled_slots.push({ placementName: "azlyrics_atf_leaderboard", slotId: "azlyrics_atf_leaderboard" });';
const b = 'freestar.config.enabled_slots.push({ placementName: "azlyrics_btf_2", slotId: "azlyrics_btf_2" });';

export async function search(artist="", title="") {
  const url = `https://www.azlyrics.com/lyrics/${artist}/${title}.html`;
  try {
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);

    let result = {
      artist: $("b").eq(0).text(),
      title: $("b").eq(1).text().replace('"', "").replace('"', ""),
      lyrics: $("div:not([class])").eq(4).text().replace(a, "").replace(b, "").trim()
    }

    /*$("div:not([class])").each((i, el) => {
      console.log(`Element ${i}:`, $(el).text().trim());
    });*/
    
    if (!result.artist || !result.title || !result.lyrics) {
      result.artist = 'lyrics for artist "artist" or title "title" not found.';
      result.title = 'lyrics for artist "artist" or title "title" not found.';
      result.lyrics = 'lyrics for artist "artist" or title "title" not found.';
    }
    
    return result;
  } catch (error) {
    console.error("An error occurred: ", error);
    return 'An error occurred while trying to retrieve lyrics for "artist_name" - "title_name".';
  }
};