// initialiser la carte 
var carte = L.map("carte").setView([ 14.75,-17.20],12)
// ajouter de la baseamp
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?",{}).addTo(carte)

// geoJSON ponctuelle
var point_geojson ={
    "type": "FeatureCollection",
    "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              -17.14105243389875,
              14.745449612407384
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              -17.275128266706986,
              14.793959664830737
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              -17.01875998050801,
              14.909487142855667
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              -17.175010241370956,
              14.814280480283912
            ],
            "type": "Point"
          }
        }
      ]
  }; 
// geoJSON linéaire 
var ligne_geojson =
{"type": "FeatureCollection",
    "features": [{
    "type": "Feature",
    "properties": {},
    "geometry": {
      "coordinates": [
        [
          -17.12019273458492,
          14.70823232662471
        ],
        [
          -17.13916544490823,
          14.74902076750395
        ],
        [
          -17.18028175930513,
          14.829576748151581
        ],
        [
          -17.288903505688694,
          14.786756900559197
        ],
        [
          -17.369047740791302,
          14.772479912134074
        ],
        [
          -17.430224199209817,
          14.745967471844452
        ],
        [
          -17.307884958575244,
          14.74800614928293
        ]
      ],
      "type": "LineString"
    }
  }
    ]};
var polygone = {"type": "FeatureCollection",
    "type": "Feature",
    "properties": {"name":"je suis un polygone"},
    "geometry": {
      "coordinates": [
        [
          [
            -17.110949732597533,
            14.782666466375701
          ],
          [
            -17.17064484628625,
            14.686329792853783
          ],
          [
            -17.0887652286211,
            14.589563912780235
          ],
          [
            -17.044832519209166,
            14.636410193230603
          ],
          [
            -17.05167213408845,
            14.72534092813963
          ],
          [
            -17.110949732597533,
            14.782666466375701
          ]
        ]
      ],
      "type": "Polygon"
    }};

  L.geoJSON(point_geojson,{
    style:{color:"yellow"}
    }).addTo(carte)

  L.geoJSON(ligne_geojson,{
    style:{ color:"green"}
  }).addTo(carte)
  L.geoJSON(polygone,{
    style:{color:"yellow"}}).addTo(carte)

var point = L.marker([14.718285165191993,-17.18670406278898]).addTo(carte)
// ajout d'un Popup qui s'affiche quon on clique dessu
point.bindPopup("Salut")//.openPopup();

// ajout d'un cercle

var cercle = L.circle([14.7106, -17.2059], {
    radius: 200}).addTo(carte)
    // le Popup du cercle
    cercle.bindPopup("je suis un cercle")

    // fonction qui permet de recupérer les coordonnées
//function cliquesurcarte (evenement){
//console.log(evenement) 
//alert("Latitude : "+ evenement.latlng.lat + 
  //      " Longitude :"+ evenement.latlng.lng )

//} 

//carte.on("click",cliquesurcarte)