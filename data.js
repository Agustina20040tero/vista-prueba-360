var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama1",
      "name": "Panorama1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.4656116909192498,
          "pitch": 0.6590406959002699,
          "rotation": 0,
          "target": "1-panorama2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8777738920112181,
          "pitch": 0.08826723750188137,
          "title": "AAAAA",
          "text": "gfhf"
        }
      ]
    },
    {
      "id": "1-panorama2",
      "name": "Panorama2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.32203596833887005,
          "pitch": 0.3565041569159959,
          "rotation": 0,
          "target": "0-panorama1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7099822498327573,
          "pitch": -0.015584749195554082,
          "title": "De prueba",
          "text": "Veamos si funciona."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
