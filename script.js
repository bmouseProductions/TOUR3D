(function(){
    var script = {
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "scrollBarVisible": "rollOver",
 "id": "rootPlayer",
 "downloadEnabled": false,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "propagateClick": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "mouseControlMode": "drag_acceleration"
},
{
 "label": "Bmouse Tour Teste",
 "hfovMin": "135%",
 "id": "panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB",
 "overlays": [
  "this.overlay_C59AAA60_D027_7933_41E1_07317F1A96F6",
  "this.overlay_C6C07357_D028_EF1D_41E8_B1D675199DB9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8",
   "yaw": 4.27,
   "distance": 1,
   "backwardYaw": -18.09
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130
},
{
 "label": "Bmouse Tour Teste",
 "id": "panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B",
 "overlays": [
  "this.overlay_C4A015FD_D01B_AB0D_41DB_15C4F4D16CF4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B",
   "yaw": -126.81,
   "distance": 1,
   "backwardYaw": 142.52
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 105.7,
 "thumbnailUrl": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 140
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DB7FB4B9_D068_A915_41CC_71883719722E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DB7FB4B9_D068_A915_41CC_71883719722E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "yaw": -1.03,
  "pitch": -3.66
 },
 "manualRotationSpeed": 1606,
 "automaticZoomSpeed": 10,
 "id": "panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.77,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C8639CC1_D029_F975_41E4_2B0B61E96DE4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.63,
  "pitch": -0.24
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DB7FB4B9_D068_A915_41CC_71883719722E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.73,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C8455CF0_D029_F913_41DF_64D272BAD427",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 126.52,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C79FACA2_D029_F937_41C8_9B28B0FE3E43",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -37.48,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C8733CD0_D029_F914_41E4_741D96EEF5F6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Panorama",
 "vfov": 99.18,
 "overlays": [
  "this.overlay_C558774C_D018_B70C_41DA_CC6257474D27",
  "this.overlay_C54F3313_D01F_AF15_41DE_7C6498742686"
 ],
 "label": "Bmouse Tour Teste",
 "id": "panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_t.jpg",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B",
   "yaw": 142.52,
   "distance": 1,
   "backwardYaw": -126.81
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.12,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.91,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C7891C92_D029_F917_41E7_E11876DD7127",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DB7FB4B9_D068_A915_41CC_71883719722E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DB7FB4B9_D068_A915_41CC_71883719722E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "Panorama",
 "vfov": 121.13,
 "overlays": [
  "this.overlay_C5EEDEAB_D019_9934_41DF_6BD26483ED3E"
 ],
 "label": "Bmouse Tour Teste",
 "id": "panorama_DB7FB4B9_D068_A915_41CC_71883719722E",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_t.jpg",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB",
   "yaw": -6.23,
   "distance": 1,
   "backwardYaw": -53.48
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "Panorama",
 "vfov": 124.52,
 "overlays": [
  "this.overlay_C6D00614_D018_A91C_41B5_F11A2B5CEF17"
 ],
 "label": "Bmouse Tour Teste",
 "id": "panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_t.jpg",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB",
   "yaw": -18.09,
   "distance": 1,
   "backwardYaw": 4.27
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "label": "Bmouse Tour Teste",
 "hfovMin": "135%",
 "id": "panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB",
 "overlays": [
  "this.overlay_C67CAA69_D019_9935_41D4_84592DE58EFC",
  "this.overlay_C6D186A9_D01B_6935_41E5_1A115818DCAE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB7FB4B9_D068_A915_41CC_71883719722E",
   "yaw": -53.48,
   "distance": 1,
   "backwardYaw": -6.23
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.65,
  "pitch": -0.96
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "yaw": 53.19,
  "pitch": 0
 },
 "manualRotationSpeed": 1606,
 "automaticZoomSpeed": 10,
 "id": "camera_C856DCFF_D029_F90C_41D0_70577C861C6F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Panorama",
 "vfov": 107.42,
 "label": "Bmouse Tour Teste",
 "id": "panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546",
 "thumbnailUrl": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB709DD1_D06B_7B14_41BC_D6E36AB97546_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -71.11,
  "pitch": -7.04
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "propagateClick": true,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "borderRadius": 0,
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipOpacity": 0.5,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontSize": 13,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "progressLeft": 0,
 "toolTipPaddingBottom": 7,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderSize": 0,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "transitionMode": "blending",
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "progressBorderSize": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "top": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "toolTipPaddingTop": 7,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipDisplayTime": 600,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "toolTipFontWeight": "normal",
 "paddingTop": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipPaddingRight": 10,
 "playbackBarHeadWidth": 6
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "propagateClick": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "top": "0%",
 "minHeight": 1,
 "height": "100%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "--- LEFT PANEL"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "propagateClick": true,
 "right": "0%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "height": 641,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "data": {
  "name": "-- SETTINGS"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "propagateClick": true,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "visible": false,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "top": 34,
 "height": 140,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "--STICKER"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "propagateClick": true,
 "right": "0%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "data": {
  "name": "--INFO photo"
 },
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "propagateClick": true,
 "right": "0%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "propagateClick": true,
 "right": "0%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "data": {
  "name": "--LOCATION"
 },
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "propagateClick": true,
 "right": "0%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "data": {
  "name": "--FLOORPLAN"
 },
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "propagateClick": true,
 "right": "0%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "propagateClick": true,
 "right": "0%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "data": {
  "name": "--REALTOR"
 },
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton MUTE"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton HS "
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton GYRO"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton VR"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.13,
   "hfov": 17.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.41
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.13,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 485,
      "height": 628
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.41,
   "hfov": 17.46
  }
 ],
 "id": "overlay_C59AAA60_D027_7933_41E1_07317F1A96F6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8, this.camera_C7891C92_D029_F917_41E7_E11876DD7127); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.27,
   "hfov": -1.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -92.23
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 729,
      "height": 318
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -92.23,
   "yaw": 4.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": -1.57,
   "distance": 50
  }
 ],
 "id": "overlay_C6C07357_D028_EF1D_41E8_B1D675199DB9",
 "data": {
  "label": "BACK"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B, this.camera_C8733CD0_D029_F914_41E4_741D96EEF5F6); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -126.81,
   "hfov": 9.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.21
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_C64D570D_D029_B70C_41C0_D5BE63934D60",
   "pitch": -18.21,
   "yaw": -126.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.78,
   "distance": 50
  }
 ],
 "id": "overlay_C4A015FD_D01B_AB0D_41DB_15C4F4D16CF4",
 "data": {
  "label": "Arrow 01 Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.53,
   "hfov": 9.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.6
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_C64C670D_D029_B70C_41D4_A26CC1DAF0C6",
   "pitch": -14.6,
   "yaw": 5.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.96,
   "distance": 100
  }
 ],
 "id": "overlay_C558774C_D018_B70C_41DA_CC6257474D27",
 "data": {
  "label": "Circle 360 1"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B, this.camera_C856DCFF_D029_F90C_41D0_70577C861C6F); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.52,
   "hfov": 9.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.39
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_C64C570D_D029_B70C_41C7_676CB17B8376",
   "pitch": -16.39,
   "yaw": 142.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.88,
   "distance": 100
  }
 ],
 "id": "overlay_C54F3313_D01F_AF15_41DE_7C6498742686",
 "data": {
  "label": "Circle 360 1"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB, this.camera_C79FACA2_D029_F937_41C8_9B28B0FE3E43); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.23,
   "hfov": 21.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.49
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_C64CA70D_D029_B70C_41CA_9218319475AF",
   "pitch": -47.49,
   "yaw": -6.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.19,
   "distance": 50
  }
 ],
 "id": "overlay_C5EEDEAB_D019_9934_41DF_6BD26483ED3E",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DB6895C7_D06B_6B7D_41D3_C38C04FA2CEB, this.camera_C8455CF0_D029_F913_41DF_64D272BAD427); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.09,
   "hfov": 8.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.75
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_C64C870D_D029_B70C_41E3_E00383CC1066",
   "pitch": -30.75,
   "yaw": -18.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.85,
   "distance": 50
  }
 ],
 "id": "overlay_C6D00614_D018_A91C_41B5_F11A2B5CEF17",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.01,
   "hfov": 6.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -69.34
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_C64C070D_D029_B70C_41D6_E725D65B97B6",
   "pitch": -69.34,
   "yaw": 23.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.73,
   "distance": 50
  }
 ],
 "id": "overlay_C67CAA69_D019_9935_41D4_84592DE58EFC",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DB7FB4B9_D068_A915_41CC_71883719722E, this.camera_C8639CC1_D029_F975_41E4_2B0B61E96DE4); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.48,
   "hfov": 13.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.51
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_C64CC70D_D029_B70C_41BE_1C04426533D0",
   "pitch": -35.51,
   "yaw": -53.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.56,
   "distance": 50
  }
 ],
 "id": "overlay_C6D186A9_D01B_6935_41E5_1A115818DCAE",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "propagateClick": true,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "visible": false,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "minHeight": 1,
 "height": "100%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "- COLLAPSE"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "width": 300,
 "propagateClick": true,
 "right": "0%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "horizontal",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0.06,
  0.08,
  0.26,
  0.27,
  0.37,
  0.48,
  0.58,
  0.74,
  0.87,
  0.94
 ],
 "verticalAlign": "top",
 "paddingLeft": 40,
 "paddingRight": 40,
 "scrollBarWidth": 10,
 "top": "0%",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 40,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 40,
 "layout": "absolute",
 "data": {
  "name": "- EXPANDED"
 },
 "backgroundOpacity": 0.7,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "propagateClick": true,
 "right": "0%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "height": 110,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "layout": "horizontal",
 "data": {
  "name": "button menu sup"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "propagateClick": true,
 "right": "0%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "91.304%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "bottom": "0%",
 "height": "85.959%",
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "layout": "vertical",
 "data": {
  "name": "-button set"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center"
},
{
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "contentOpaque": false,
 "width": 366,
 "propagateClick": true,
 "shadowColor": "#000000",
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowBlurRadius": 8,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "top": 2,
 "minHeight": 1,
 "height": 78,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "white block"
 },
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "contentOpaque": false,
 "width": 366,
 "propagateClick": true,
 "shadowColor": "#000000",
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0.01
 ],
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "top": 86,
 "minHeight": 1,
 "height": 46,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "blue block"
 },
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "width": 391,
 "propagateClick": true,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "text": "LOREM IPSUM",
 "minHeight": 1,
 "top": 0,
 "height": 75,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "fontSize": 61,
 "fontStyle": "italic",
 "class": "Label",
 "paddingTop": 0,
 "fontColor": "#000000",
 "data": {
  "name": "text 1"
 },
 "backgroundOpacity": 0,
 "fontWeight": "bold",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "textShadowColor": "#000000",
 "textShadowBlurRadius": 10,
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "width": 385,
 "propagateClick": true,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "textShadowOpacity": 1,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "minHeight": 1,
 "textShadowVerticalLength": 0,
 "top": 90,
 "height": 44,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "fontSize": 28,
 "fontStyle": "italic",
 "class": "Label",
 "paddingTop": 0,
 "fontColor": "#FFFFFF",
 "textShadowHorizontalLength": 0,
 "backgroundOpacity": 0,
 "data": {
  "name": "text 2"
 },
 "fontWeight": "normal",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "contentOpaque": false,
 "propagateClick": false,
 "shadowColor": "#000000",
 "right": "15%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "propagateClick": false,
 "right": "15%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarColor": "#000000",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "contentOpaque": false,
 "propagateClick": false,
 "shadowColor": "#000000",
 "right": "15%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarColor": "#000000",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "contentOpaque": false,
 "propagateClick": false,
 "shadowColor": "#000000",
 "right": "15%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "propagateClick": false,
 "right": "15%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarColor": "#000000",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "contentOpaque": false,
 "propagateClick": false,
 "shadowColor": "#000000",
 "right": "15%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarColor": "#000000",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "contentOpaque": false,
 "propagateClick": false,
 "shadowColor": "#000000",
 "right": "15%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarColor": "#000000",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "contentOpaque": false,
 "propagateClick": false,
 "shadowColor": "#000000",
 "right": "15%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "propagateClick": false,
 "right": "15%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_DBAFC7F2_D068_9717_41E6_76984CE0332B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_C64D570D_D029_B70C_41C0_D5BE63934D60",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C64C670D_D029_B70C_41D4_A26CC1DAF0C6",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DB6072EE_D068_A90F_41D4_7242AF91EC7B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C64C570D_D029_B70C_41C7_676CB17B8376",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DB7FB4B9_D068_A915_41CC_71883719722E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_C64CA70D_D029_B70C_41CA_9218319475AF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DB77CD6F_D068_9B0D_41D4_3BDAF2A58AB8_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_C64C870D_D029_B70C_41E3_E00383CC1066",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_C64C070D_D029_B70C_41D6_E725D65B97B6",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_DB061D0E_D068_BB0F_41AA_6A69D1580DBB_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_C64CC70D_D029_B70C_41BE_1C04426533D0",
 "frameCount": 9
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "propagateClick": true,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "top": "0%",
 "minHeight": 1,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "data": {
  "name": "Container black"
 },
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 50,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "class": "IconButton",
 "paddingTop": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "left": "0%",
 "propagateClick": true,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "width": "100%",
 "paddingLeft": 0,
 "top": "0%",
 "minHeight": 30,
 "height": "25%",
 "minWidth": 40,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "shadow": false,
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "propagateClick": true,
 "right": "0%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "top": "25%",
 "minHeight": 1,
 "minWidth": 1,
 "gap": 0,
 "bottom": "25%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "layout": "vertical",
 "data": {
  "name": "-Container buttons"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "propagateClick": true,
 "right": "0%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "100%",
 "verticalAlign": "bottom",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "bottom": "0%",
 "height": "26.316%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "layout": "vertical",
 "data": {
  "name": "-Container footer"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "data": {
  "name": "image button menu"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "click": "this.shareTwitter(window.location.href)",
 "class": "IconButton",
 "data": {
  "name": "IconButton TWITTER"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "click": "this.shareFacebook(window.location.href)",
 "class": "IconButton",
 "data": {
  "name": "IconButton FB"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "propagateClick": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "width": "85%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.51,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "propagateClick": false,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "50%",
 "verticalAlign": "top",
 "paddingLeft": 50,
 "paddingRight": 50,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "backgroundOpacity": 1,
 "scrollBarColor": "#0069A3",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "width": "25%",
 "paddingLeft": 0,
 "minHeight": 50,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "propagateClick": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 140,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "selectedItemThumbnailShadowVerticalLength": 0,
 "horizontalAlign": "center",
 "rollOverItemLabelFontColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "propagateClick": false,
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "width": "100%",
 "borderRadius": 5,
 "scrollBarMargin": 2,
 "itemPaddingLeft": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "verticalAlign": "middle",
 "paddingLeft": 70,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemMinHeight": 50,
 "height": "92%",
 "itemOpacity": 1,
 "minWidth": 1,
 "itemMinWidth": 50,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "class": "ThumbnailGrid",
 "itemHeight": 160,
 "shadow": false,
 "backgroundOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "itemLabelTextDecoration": "none",
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemBackgroundOpacity": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailHeight": 125,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 70,
 "itemThumbnailShadow": false,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "bottom": -0.2,
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "gap": 26,
 "itemHorizontalAlign": "center",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontStyle": "italic",
 "itemWidth": 220,
 "itemLabelHorizontalAlign": "center",
 "paddingTop": 10,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelPosition": "bottom",
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "width": "100%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "insetBorder": false,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "class": "WebFrame",
 "paddingTop": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "backgroundOpacity": 1,
 "scrollEnabled": true,
 "shadow": false
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingRight": 0,
 "width": "25%",
 "paddingLeft": 0,
 "minHeight": 50,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "left": 0,
 "propagateClick": false,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "borderRadius": 0,
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontSize": 12,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "height": "99.975%",
 "progressLeft": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderSize": 0,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "transitionMode": "blending",
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "progressBorderSize": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "top": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipDisplayTime": 600,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "toolTipFontWeight": "normal",
 "paddingTop": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipPaddingRight": 6,
 "playbackBarHeadWidth": 6
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "propagateClick": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 140,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "propagateClick": false,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "Container photo"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "propagateClick": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "width": "55%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.51,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "propagateClick": false,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "45%",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "paddingRight": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "backgroundOpacity": 1,
 "scrollBarColor": "#0069A3",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "propagateClick": false,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingRight": 0,
 "width": "25%",
 "paddingLeft": 0,
 "minHeight": 50,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "propagateClick": true,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 1,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "fontColor": "#FFFFFF",
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "layout": "horizontal",
 "propagateClick": true,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "width": "100%",
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "height": 50,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "iconHeight": 32,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Tour Information",
 "paddingTop": 0,
 "fontSize": 18,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "iconWidth": 32,
 "data": {
  "name": "Button Tour Info"
 },
 "backgroundOpacity": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "propagateClick": true,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 1,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "fontColor": "#FFFFFF",
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "layout": "horizontal",
 "propagateClick": true,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "width": "100%",
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "height": 50,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "iconHeight": 32,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Panorama List",
 "paddingTop": 0,
 "fontSize": 18,
 "gap": 23,
 "fontStyle": "italic",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconWidth": 32,
 "data": {
  "name": "Button Panorama List"
 },
 "backgroundOpacity": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "propagateClick": true,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 1,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "fontColor": "#FFFFFF",
 "pressedLabel": "Location",
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "layout": "horizontal",
 "propagateClick": true,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "width": "100%",
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "height": 50,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "iconHeight": 32,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Location",
 "paddingTop": 0,
 "fontSize": 18,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "iconWidth": 32,
 "data": {
  "name": "Button Location"
 },
 "backgroundOpacity": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "propagateClick": true,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 1,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "fontColor": "#FFFFFF",
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "layout": "horizontal",
 "propagateClick": true,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "width": "100%",
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "height": 50,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "iconHeight": 32,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Floorplan",
 "paddingTop": 0,
 "fontSize": 18,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "iconWidth": 32,
 "data": {
  "name": "Button Floorplan"
 },
 "backgroundOpacity": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "propagateClick": true,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 1,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "fontColor": "#FFFFFF",
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "layout": "horizontal",
 "propagateClick": true,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "width": "100%",
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "height": 50,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "iconHeight": 32,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Photoalbum",
 "paddingTop": 0,
 "fontSize": 18,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "iconWidth": 32,
 "data": {
  "name": "Button Photoalbum"
 },
 "backgroundOpacity": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "propagateClick": true,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 1,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "fontColor": "#FFFFFF",
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "layout": "horizontal",
 "propagateClick": true,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "width": "100%",
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "height": 50,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "iconHeight": 32,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Contact Information",
 "paddingTop": 0,
 "fontSize": 18,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "iconWidth": 32,
 "data": {
  "name": "Button Contact"
 },
 "backgroundOpacity": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "propagateClick": true,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 1,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "width": 40,
 "propagateClick": true,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 2,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "blue line"
 },
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "propagateClick": true,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 78,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "shadow": false
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "width": 42,
 "propagateClick": true,
 "cursor": "hand",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "IconButton collapse"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "propagateClick": false,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "width": "100%",
 "paddingLeft": 0,
 "top": "0%",
 "minHeight": 1,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "propagateClick": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 0,
 "height": 50,
 "minWidth": 1,
 "gap": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.79,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "propagateClick": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 10,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#E73B2C",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "propagateClick": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 30,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "propagateClick": false,
 "right": 20,
 "borderRadius": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "top": 20,
 "minHeight": 50,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "propagateClick": false,
 "right": 20,
 "borderRadius": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "top": 20,
 "minHeight": 50,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "propagateClick": false,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "borderRadius": 0,
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontSize": 12,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "progressLeft": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderSize": 0,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "transitionMode": "blending",
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "progressBorderSize": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "top": "0%",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipDisplayTime": 600,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipFontWeight": "normal",
 "paddingTop": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipPaddingRight": 6,
 "playbackBarHeadWidth": 6
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "propagateClick": true,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "cursor": "hand",
 "width": "14.22%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "class": "IconButton",
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "shadow": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "propagateClick": true,
 "right": 10,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "cursor": "hand",
 "width": "14.22%",
 "paddingLeft": 0,
 "top": "20%",
 "minHeight": 50,
 "minWidth": 50,
 "mode": "push",
 "bottom": "20%",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton >"
 },
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "propagateClick": true,
 "right": 20,
 "borderRadius": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "width": "10%",
 "paddingLeft": 0,
 "top": 20,
 "minHeight": 50,
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "propagateClick": false,
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "width": "100%",
 "paddingLeft": 0,
 "top": "0%",
 "minHeight": 1,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Image",
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "propagateClick": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 0,
 "borderSize": 0,
 "height": "5%",
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.79,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "propagateClick": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#E73B2C",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "propagateClick": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": 40,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "propagateClick": false,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.39vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.6vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.75vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "layout": "horizontal",
 "width": 180,
 "propagateClick": false,
 "shadowColor": "#000000",
 "cursor": "hand",
 "borderRadius": 50,
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowSpread": 1,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "height": 50,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "label": "LOREM IPSUM",
 "iconHeight": 32,
 "borderSize": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": "2.39vh",
 "fontStyle": "italic",
 "class": "Button",
 "paddingTop": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0.7,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button31015"
 },
 "fontWeight": "bold",
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "propagateClick": false,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": "46%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.39vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarVisible": "rollOver",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "propagateClick": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "height": "75%",
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "- content"
 },
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "propagateClick": false,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "width": "25%",
 "paddingLeft": 0,
 "minHeight": 1,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "backgroundOpacity": 0,
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "propagateClick": false,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "75%",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.6vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.46vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "backgroundOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "shadow": false
}],
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "vrPolyfillScale": 1,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "gap": 10,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "class": "Player",
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "Player468"
 },
 "scrollBarColor": "#000000",
 "scripts": {
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "shadow": false,
 "horizontalAlign": "left"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
