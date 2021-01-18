let mapone = document.querySelector('#map');
let markerImage = "img/map/mappin.png"
let coordinates = [59.938635, 30.323118]

ymaps.ready(() => {
  let map = new ymaps.Map(mapone, {
    center: coordinates,
    // Уровень масштабирования. Допустимые значения:

    // от 0 (весь мир) до 19.
    zoom: 16
  });

  let catEnergy = new ymaps.Placemark(
    map.getCenter(),
    {
      hintContent: "Cat Energy"
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: markerImage,
      iconImageSize: [56, 52],
      iconImageOffset: [-33, -100]
    }
  );
  map.geoObjects.add(catEnergy);
});
