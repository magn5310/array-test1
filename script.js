const mineTracks = ["Engle", "Under din sne", "2step", "Milan Allé", "Kom og mærk", "First time", "Happier", "Og du blev til en hvid fugl", "Som fluer", "Tides"];

mineTracks.forEach(enAdGangen);

function enAdGangen(bareEn) {
  console.log(bareEn + "er et godt nummer");
  document.querySelector("main").innerHTML += `<p>${bareEn}</p>`;
}
