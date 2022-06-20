function showMap() {
  var general = { lat: 31.4117, lng: 35.0818 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: general
  });

  new google.maps.Marker({
    position: general,
    map: map,
    title: "Israel",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
  var input = document.getElementById('search');
  var searchBox = new google.maps.places.SearchBox(input);

  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];

  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length === 0)
      return;

    markers.forEach(function (m) { m.setMap(null); });
    markers = [];

    var bounds = new google.maps.LatLngBounds();

    places.forEach(function (p) {
      if (!p.geometry)
        return;

      markers.push(new google.maps.Marker({
        map: map,
        title: p.name,
        position: p.geometry.location
      }));

      if (p.geometry.viewport)
        bounds.union(p.geometry.viewport);
      else
        bounds.extend(p.geometry.location);
    });
    map.fitBounds(bounds);
  });
}

var iriat_ashdod_location = { lat: 31.792821175190998, lng: 34.638154561376005 }
var big_fashion_ashdod_location = { lat: 31.777182038219973, lng: 34.66375618465791 }
var ben_gurion_22_herzeliya_location = { lat: 32.162959993337104, lng: 34.841634312383356 }
var hamanufim_10_herzeliya_location = { lat: 32.16016184745947, lng: 34.80799068354779 }
var mashit_7_herzeliya_location = { lat: 32.16620517594011, lng: 34.81174282772545 }
var ramataim_64_hod_hasaron_location = { lat: 32.15734128860163, lng: 34.89428243937008 }
var park_4_honot_location = { lat: 32.144911580375904, lng: 34.88449281053409 }
var yad_lebanim_location = { lat: 32.15476036963465, lng: 34.892426133069776 }
var park_amada_rehovot_location = { lat: 31.910906499733454, lng: 34.80585991237546 }
var remez_pinat_kibobizh_rehovot_location = { lat: 31.895456433144016, lng: 34.80467151237498 }
var gal_meiyasdim_rehovot_location = { lat: 31.894027562804208, lng: 34.81111415285528 }
var rakevet_huf_hacarmel_haifa_location = { lat: 32.793518922367745, lng: 34.95673776637704 }
var hanassi_haifa_location = { lat: 32.81243095765956, lng: 34.98225357941261 }
var namal_haifa_location = { lat: 32.821710351460055, lng: 34.99642346822654 }
var igal_alon_82_telaviv_location = { lat: 32.066372644925345, lng: 34.79293641238031 }
var ehad_haham_14_telaviv_location = { lat: 32.06362497277842, lng: 34.769441797038205 }
var habarzel_20_telaviv_location = { lat: 32.10800144742728, lng: 34.839369597039536 }
var hapelech_7_telaviv_location = { lat: 32.05046616538019, lng: 34.766717783544344 }
var aharbaha_26_telaviv_location = { lat: 32.07046308753888, lng: 34.786022954709445 }
var rabhinezhki_8_telaviv_location = { lat: 32.06639512886863, lng: 34.7898526970382 }
var zeev_jabotinsky_33_ramat_gan_location = { lat: 32.08411781470688, lng: 34.80628268087581 }
var ben_gurion_26_ramat_gan_location = { lat: 32.09293991720725, lng: 34.821850680139285 }
var bialik_76_ramat_gan_location = { lat: 32.08591059199069, lng: 34.81162082617092 }
var sheba_medical_center_ramat_gan_location = { lat: 32.045528580148634, lng: 34.84182568198985 }
var general_location = { lat: 31.4117, lng: 35.0818 }

function general() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: general_location
  });
  new google.maps.Marker({
    position: general_location,
    map,
    title: "Israel",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function iriat_ashdod() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: iriat_ashdod_location
  });
  new google.maps.Marker({
    position: iriat_ashdod_location,
    map,
    title: "IRIAT_ASHDOD",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function big_fashion_ashdod() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: big_fashion_ashdod_location
  });
  new google.maps.Marker({
    position: big_fashion_ashdod_location,
    map,
    title: "BIG_FASHION_ASHDOD",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function mashit_7_herzeliya() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: mashit_7_herzeliya_location
  });
  new google.maps.Marker({
    position: mashit_7_herzeliya_location,
    map,
    title: "mashit_7",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function ben_gurion_22_herzeliya() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: ben_gurion_22_herzeliya_location
  });
  new google.maps.Marker({
    position: ben_gurion_22_herzeliya_location,
    map,
    title: "Ben_Gurion_22",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function hamanufim_10_herzeliya() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: hamanufim_10_herzeliya_location
  });
  new google.maps.Marker({
    position: hamanufim_10_herzeliya_location,
    map,
    title: "Hamanufim_10",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function ramataim_64_hod_hasaron() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: ramataim_64_hod_hasaron_location
  });
  new google.maps.Marker({
    position: ramataim_64_hod_hasaron_location,
    map,
    title: "Ramataim_64",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function park_4_honot_hod_hasaron() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: park_4_honot_location
  });
  new google.maps.Marker({
    position: park_4_honot_location,
    map,
    title: "Park_4_honot",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function yad_lebanim_hod_hasaron() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: yad_lebanim_location
  });
  new google.maps.Marker({
    position: yad_lebanim_location,
    map,
    title: "Yad_Lebanim",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function park_amada_rehovot() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: park_amada_rehovot_location
  });
  new google.maps.Marker({
    position: park_amada_rehovot_location,
    map,
    title: "Park_Amada_Rehovot",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function remez_pinat_kibobizh_rehovot() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: remez_pinat_kibobizh_rehovot_location
  });
  new google.maps.Marker({
    position: remez_pinat_kibobizh_rehovot_location,
    map,
    title: "Remez_Pinat_Kibobizh",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function gal_meiyasdim_rehovot() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: gal_meiyasdim_rehovot_location
  });
  new google.maps.Marker({
    position: gal_meiyasdim_rehovot_location,
    map,
    title: "Gal_Meiyasdim_Rehovot",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function rakevet_huf_hacarmel_haifa() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: rakevet_huf_hacarmel_haifa_location
  });
  new google.maps.Marker({
    position: rakevet_huf_hacarmel_haifa_location,
    map,
    title: "Rakevet_Huf_Hacarmel",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function hanassi_haifa() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: hanassi_haifa_location
  });
  new google.maps.Marker({
    position: hanassi_haifa_location,
    map,
    title: "Hanassi_Haifa",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function namal_haifa() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: namal_haifa_location
  });
  new google.maps.Marker({
    position: namal_haifa_location,
    map,
    title: "Namal_Haifa",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function igal_alon_82_telaviv() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: igal_alon_82_telaviv_location
  });
  new google.maps.Marker({
    position: igal_alon_82_telaviv_location,
    map,
    title: "Igal_Alon_82_Tel_Aviv",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function ehad_haham_14_telaviv() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: ehad_haham_14_telaviv_location
  });
  new google.maps.Marker({
    position: ehad_haham_14_telaviv_location,
    map,
    title: "Ehad_Haham_14_Tel_Aviv",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function habarzel_20_telaviv() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: habarzel_20_telaviv_location
  });
  new google.maps.Marker({
    position: habarzel_20_telaviv_location,
    map,
    title: "Habarzel_20_Tel_Aviv",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function hapelech_7_telaviv() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: hapelech_7_telaviv_location
  });
  new google.maps.Marker({
    position: hapelech_7_telaviv_location,
    map,
    title: "Hapelech_7_Tel_Aviv",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function aharbaha_26_telaviv() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: aharbaha_26_telaviv_location
  });
  new google.maps.Marker({
    position: aharbaha_26_telaviv_location,
    map,
    title: "Aharbaha_26_Tel_Aviv",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function rabhinezhki_8_telaviv() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: rabhinezhki_8_telaviv_location
  });
  new google.maps.Marker({
    position: rabhinezhki_8_telaviv_location,
    map,
    title: "Rabhinezhki_8_Tel_Aviv",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}


function zeev_jabotinsky_33_ramat_gan() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: zeev_jabotinsky_33_ramat_gan_location
  });
  new google.maps.Marker({
    position: zeev_jabotinsky_33_ramat_gan_location,
    map,
    title: "Haifa_Zeev_Jabotinsky_33",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function ben_gurion_26_ramat_gan() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: ben_gurion_26_ramat_gan_location
  });
  new google.maps.Marker({
    position: ben_gurion_26_ramat_gan_location,
    map,
    title: "Ben_Gurion_26",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}
function bialik_76_ramat_gan() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: bialik_76_ramat_gan_location
  });
  new google.maps.Marker({
    position: bialik_76_ramat_gan_location,
    map,
    title: "Bialik_76",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}
function sheba_medical_center_ramat_gan() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: sheba_medical_center_ramat_gan_location
  });
  new google.maps.Marker({
    position: sheba_medical_center_ramat_gan_location,
    map,
    title: "Sheba_Medical_Center",
    icon: "https://img.icons8.com/material/2x/fuel-gas.png"
  });
}

function initMapAshdod() {
  if (document.getElementById("אשדוד").value == 'דפולטיבי') { general() }
  else if (document.getElementById("אשדוד").value == 'עיריית_אשדוד') { iriat_ashdod() }
  else if (document.getElementById("אשדוד").value == 'ביג_אשדוד') { big_fashion_ashdod() }
}

function initMapHerzeliya() {
  if (document.getElementById("הרצליה").value == 'דפולטיבי') { general() }
  else if (document.getElementById("הרצליה").value == 'בן_גוריון_22') { ben_gurion_22_herzeliya() }
  else if (document.getElementById("הרצליה").value == 'המנופים_10') { hamanufim_10_herzeliya() }
  else if (document.getElementById("הרצליה").value == 'משכית_7') { mashit_7_herzeliya() }
}

function initMapHodHasaron() {

  if (document.getElementById("הוד_השרון").value == 'דפולטיבי') { general() }
  else if (document.getElementById("הוד_השרון").value == 'רמתיים_64') { ramataim_64_hod_hasaron() }
  else if (document.getElementById("הוד_השרון").value == 'פארק_4_העונות') { park_4_honot_hod_hasaron() }
  else if (document.getElementById("הוד_השרון").value == 'יד_לבנים') { park_4_honot_hod_hasaron() }
}

function initMapRehovot() {


  if (document.getElementById("רחובות").value == 'דפולטיבי') { general() }
  else if (document.getElementById("רחובות").value == 'פארק_המדע') { park_amada_rehovot() }
  else if (document.getElementById("רחובות").value == 'רמז_פינת_קיבוביץ') { remez_pinat_kibobizh_rehovot() }
  else if (document.getElementById("רחובות").value == 'גן_המייסדים') { gal_meiyasdim_rehovot() }
}

function initMapHaifa() {
  if (document.getElementById("חיפה").value == 'דפולטיבי') { general() }
  else if (document.getElementById("חיפה").value == 'רכבת_חוף_הכרמל') { rakevet_huf_hacarmel_haifa() }
  else if (document.getElementById("חיפה").value == 'הנשיא') { hanassi_haifa() }
  else if (document.getElementById("חיפה").value == 'נמל_חיפה') { namal_haifa() }
}

function initMapTelAviv() {
  if (document.getElementById("תל_אביב").value == 'דפולטיבי') { general() }
  else if (document.getElementById("תל_אביב").value == 'יגאל_אלון_82') { igal_alon_82_telaviv() }
  else if (document.getElementById("תל_אביב").value == 'אחד_העם_14') { ehad_haham_14_telaviv() }
  else if (document.getElementById("תל_אביב").value == 'הברזל_20') { habarzel_20_telaviv() }
  else if (document.getElementById("תל_אביב").value == 'הפלך_7') { hapelech_7_telaviv() }
  else if (document.getElementById("תל_אביב").value == 'הארבעה_26') { aharbaha_26_telaviv() }
  else if (document.getElementById("תל_אביב").value == 'רבניצקי_8') { rabhinezhki_8_telaviv() }
}

function initMapRamatGan() {
  if (document.getElementById("רמת_גן").value == 'דפולטיבי') { general() }
  else if (document.getElementById("רמת_גן").value == 'זאב_זבוטינסקי_33') { zeev_jabotinsky_33_ramat_gan() }
  else if (document.getElementById("רמת_גן").value == 'בן_גוריון_26') { ben_gurion_26_ramat_gan()() }
  else if (document.getElementById("רמת_גן").value == 'ביאליק_76') { bialik_76_ramat_gan() }
  else if (document.getElementById("רמת_גן").value == 'המרכז_הרפואי_שיבא_תל_השומר') { sheba_medical_center_ramat_gan() }
}

const cities = ["רמת גן", "תל אביב", "חיפה", "רחובות", "הוד השרון", "הרצליה", "אשדוד"];

document.getElementById("cityInput").addEventListener('input', (e) => {

  var cities_array = []

  if (e.target.value) {
    cities_array = cities.filter(city => city.includes(e.target.value));
  }
  cities_array = cities_array.map(city => `<li style="list-style-type:none;" onclick="updateInput(event.target)">${city}</li>`)
  showCitiesArray(cities_array)

})

function showCitiesArray(cities_array) {
  const html = !cities_array.length ? ' ' : cities_array.join('');
  document.querySelector('#city-list').innerHTML = html
}

function updateInput(value) {

  document.querySelector('#cityInput').value = value.innerHTML;
  clearList();
}
function clearList() {
  document.querySelector("#city-list").innerHTML = ''

}

var lastCity = undefined
const wrapper = document.querySelector('.wrapper'),
  searchForm = wrapper.querySelector('.searchForm'),
  submitInput = searchForm.querySelector('input[type="submit"]');

function updateMap(e) {
  e.preventDefault();
  var formData = new FormData(searchForm);
  var chosenCity = formData.get('cityName');
  var showedCity;
  if (chosenCity == 'אשדוד') {
    initMapAshdod();
    document.getElementById("Ashdod").hidden = false;
    showedCity = "Ashdod"
  }
  else if (chosenCity == 'הרצליה') {
    initMapHerzeliya();
    document.getElementById("Herzeliya").hidden = false;
    showedCity = "Herzeliya"
  }
  else if (chosenCity == 'הוד השרון') {
    initMapHodHasaron();
    document.getElementById("Hod_Hasaron").hidden = false;
    showedCity = "Hod_Hasaron"
  }
  else if (chosenCity == 'רחובות') {
    initMapRehovot();
    document.getElementById("Rehovot").hidden = false;
    showedCity = "Rehovot"
  }
  else if (chosenCity == 'חיפה') {
    initMapHaifa();
    document.getElementById("Haifa").hidden = false;
    showedCity = "Haifa"
  }
  else if (chosenCity == 'תל אביב') {
    initMapTelAviv();
    document.getElementById("Tel_Aviv").hidden = false;
    showedCity = "Tel_Aviv"
  }
  else if (chosenCity == 'רמת גן') {
    initMapRamatGan();
    document.getElementById("Ramat_Gan").hidden = false;
    showedCity = "Ramat_Gan"
  }

  if (lastCity != undefined && showedCity != lastCity) {
    document.getElementById(lastCity).hidden = true;
  }
  lastCity = showedCity

}

document.addEventListener('DOMContentLoaded', function () {
  submitInput.addEventListener('click', updateMap, false);

}, false);