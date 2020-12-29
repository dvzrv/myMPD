"use strict";
/*
 SPDX-License-Identifier: GPL-2.0-or-later
 myMPD (c) 2018-2020 Juergen Mang <mail@jcgames.de>
 https://github.com/jcorporation/mympd
*/

//eslint-disable-next-line no-unused-vars
var cmds = [
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_CLEAR"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_CROP"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_CROP_OR_CLEAR"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_SAVE","params":{"plist":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_LIST","params":{"offset":0,"limit":100,"cols":["",""]}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_SEARCH","params":{"offset":0,"limit":100,"filter":"","searchstr":"","cols":["",""]}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_RM_TRACK","params":{"track":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_RM_RANGE","params":{"start":0,"end":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_MOVE_TRACK","params":{"from":0,"to":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_ADD_TRACK_AFTER","params":{"uri":"","to":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_ADD_TRACK","params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_ADD_PLAY_TRACK","params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_REPLACE_TRACK","params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_ADD_PLAYLIST","params":{"plist":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_ADD_RANDOM","params":{"playlist":"Database","quantity":0, "mode":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_REPLACE_PLAYLIST","params":{"plist":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_SHUFFLE"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_LAST_PLAYED","params":{"offset":0,"limit":100,"cols":["","",""]}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYLIST_RM","params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYLIST_CLEAR","params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYLIST_RENAME","params":{"from":"","to":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYLIST_MOVE_TRACK","params":{"plist":"","from":0,"to":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYLIST_ADD_TRACK","params":{"plist":"","uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYLIST_RM_TRACK","params":{"uri":"","track":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYLIST_RM_ALL", "params":{"type":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYLIST_LIST","params":{"offset":0,"limit":100,"searchstr":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYLIST_CONTENT_LIST","params":{"uri":"","offset":0,"limit":100,"searchstr":"","cols":["",""]}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYLIST_SHUFFLE", "params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYLIST_SORT", "params":{"uri":"","tag":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPDWORKER_API_SMARTPLS_UPDATE_ALL", "params":{"force":false}},
    {"jsonrpc":"2.0","id":0,"method":"MPDWORKER_API_SMARTPLS_UPDATE", "params":{"playlist":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_SMARTPLS_SAVE","params":{"type":"","playlist":"","timerange":0,"sort":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_SMARTPLS_GET","params":{"playlist":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_DATABASE_SEARCH_ADV","params":{"offset":0,"limit":100,"expression":"(any contains '"+""+"')","sort":"", "sortdesc":false,"plist":"","cols":[""],"replace":false}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_DATABASE_SEARCH","params":{"offset":0,"limit":100,"filter":"","searchstr":"","plist":"","cols":["",""],"replace":false}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_DATABASE_UPDATE","params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_DATABASE_RESCAN","params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_DATABASE_FILESYSTEM_LIST","params":{"offset":0,"limit":100,"searchstr":"","path":"","cols":["",""]}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_DATABASE_GET_ALBUMS","params":{"offset":0,"limit":100,"searchstr":"", "filter":"", "sort":"", "sortdesc":false}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_DATABASE_TAG_LIST","params":{"offset":0,"limit":100,"searchstr":"", "filter":"", "sort":"", "sortdesc":false, "tag":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_DATABASE_TAG_ALBUM_TITLE_LIST","params":{"album":"","searchstr":"","tag":"","cols":["",""]}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_DATABASE_STATS"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_DATABASE_SONGDETAILS","params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_DATABASE_FINGERPRINT","params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_PLAY_TRACK","params":{"track":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_VOLUME_SET","params":{"volume":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_VOLUME_GET"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_PAUSE"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_PLAY"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_STOP"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_SEEK_CURRENT","params":{"seek":0,"relative":false}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_SEEK","params":{"songid":0,"seek":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_NEXT"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_PREV"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_OUTPUT_LIST"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_TOGGLE_OUTPUT","params":{"output":0,"state":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_CURRENT_SONG"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_STATE"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_LIKE","params":{"uri":"","like":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_SETTINGS_GET"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_MOUNT_LIST"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_MOUNT_NEIGHBOR_LIST"},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_MOUNT_MOUNT","params":{"mountUrl":"", "mountPoint":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_MOUNT_UNMOUNT","params":{"mountPoint":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_URLHANDLERS"},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_SETTINGS_GET"},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_SETTINGS_SET","params":{"consume":1,"random":0,"single":0,"repeat":0,"replaygain":"off","crossfade":"0","mixrampdb":0,"mixrampdelay":-1,"notificationWeb":false,"notificationPage":true,"mediaSession":true,"jukeboxMode":1,"jukeboxPlaylist":"Database","jukeboxQueueLength":1,"jukeboxLastPlayed":24,"jukeboxUniqueTag":"Album","autoPlay":false,"bgCover":false,"bgColor":"#888","bgCssFilter":"blur(5px)","featLocalplayer":false,"localplayerAutoplay":false,"streamUrl":"","streamPort":8000,"coverimage":true,"coverimageName":"folder, cover","coverimageSize":"250","covergridSize":"200","locale":"default","love":false,"loveChannel":"","loveMessage":"love","bookmarks":true,"maxElementsPerPage":"100","stickers":true,"lastPlayedCount":"20","smartpls":true,"smartplsPrefix":"myMPDsmart","smartplsInterval":14400,"smartplsSort":"","taglist":"Artist,Album,AlbumArtist,Title,Track,Genre,Date","searchtaglist":"Album,AlbumArtist,Artist,Genre,Title","browsetaglist":"Album,AlbumArtist,Artist,Genre","generatePlsTags":"Genre","theme":"theme-default","highlightColor":"#28a745","timer":true,"bookletName":"booklet.pdf","lyrics":true}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_SETTINGS_RESET"},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_COLS_SAVE","params":{"table":"","cols":["","",""]}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_SYSCMD","params":{"cmd": ""}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_BOOKMARK_RM","params":{"id":0}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_BOOKMARK_LIST","params":{"offset":0,"limit":100}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_BOOKMARK_SAVE","params":{"id":0,"name":"","uri":"","type":""}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_BOOKMARK_CLEAR"},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_TIMER_SAVE","params":{"timerid":0,"name":"","enabled":false,"startHour":0,"startMinute":0,"action":"","subaction":"","volume":0,"playlist":"","jukeboxMode":0,"weekdays":[false,false,false,false,false,false,false],"arguments":{"arg1":""}}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_TIMER_LIST"},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_TIMER_GET","params":{"timerid":0}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_TIMER_RM","params":{"timerid":0}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_TIMER_TOGGLE","params":{"timerid":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_MESSAGE_SEND","params":{"channel":"", "message":""}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_SCRIPT_SAVE","params":{"script":"","oldscript":"","order":0,"content":"","arguments":["", ""]}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_SCRIPT_EXECUTE","params":{"script":"","arguments":{"arg1": ""}}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_SCRIPT_POST_EXECUTE","params":{"script":"","arguments":{"arg1": ""}}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_SCRIPT_LIST","params":{"all":true}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_SCRIPT_GET","params":{"script":""}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_SCRIPT_DELETE","params":{"script":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PARTITION_LIST","params":{}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PARTITION_NEW","params":{"name":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PARTITION_SWITCH","params":{"name":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PARTITION_RM","params":{"name":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PARTITION_OUTPUT_MOVE","params":{"name":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_TRIGGER_LIST","params":{}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_TRIGGER_GET","params":{"id":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_TRIGGER_SAVE","params":{"id":0,"name":"","event":0,"script":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_TRIGGER_DELETE","params":{"id":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_PLAYER_OUTPUT_ATTRIBUTS_SET","params":{"outputId":0,"attributes":{"allowed_formats":""}}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_HOME_LIST","params":{}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_HOME_ICON_DELETE","params":{"pos":0}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_HOME_ICON_MOVE","params":{"from":0,"to":0}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_HOME_ICON_SAVE","params":{"replace":false,"oldpos":0,"name":"","ligature":"","bgcolor":"","image":"","cmd":"","options":["option1","option2"]}},
    {"jsonrpc":"2.0","id":0,"method":"MYMPD_API_HOME_ICON_PICTURE_LIST","params":{}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_JUKEBOX_LIST","params":{"offset":"0","limit":100,"cols":["Pos","Title","Artist","Album"]}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_JUKEBOX_RM","params":{"pos":0}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_LYRICS_UNSYNCED_GET","params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_LYRICS_SYNCED_GET","params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_LYRICS_GET","params":{"uri":""}},
    {"jsonrpc":"2.0","id":0,"method":"MPD_API_QUEUE_PRIO_SET_HIGHEST","params":{"trackid":0}}
];
