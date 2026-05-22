const defaultConfig = {
  site_title: "Concertcodviajes",
  hero_title: "Vive la Música Sin Preocupaciones",
  hero_subtitle:
    "Paquetes de viaje redondo que incluyen transporte, hospedaje y entradas. Tú solo disfruta del show.",
  cta_button_text: "Ver Viajes Disponibles",
  primary_color: "#ec4899",
  secondary_color: "#a855f7",
  background_color: "#0f0f23",
  text_color: "#ffffff",
  accent_color: "#22d3ee",
};

const codviajes = [
   
    {
    id: 1,
    artist: "Pulp",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["2 de Junio, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Pulp.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 5,
  },
    {
    id: 2,
    artist: "Monsta X",
    tour: "Tour 2026",
    city: "Auditorio Nacional, CDMX",
      dates: ["19 de Mayo, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Monsta.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
    {
    id: 3,
    artist: "TK From Ling Tosite Sigure",
    tour: "Tour 2026",
    city: "Foro Puebla, CDMX",
      dates: ["6 de Junio, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/TK.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 4,
    artist: "Milo J",
    tour: "Tour 2026",
    city: "Pálacio de los Deportes, CDMX",
      dates: ["6 de Junio, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/MiloJ.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 30,
  },
  
   {
    id: 6,
    artist: "BOA",
    tour: "Tour 2026",
    city: "Teatro Metropolitan, CDMX",
      dates: ["10  de Junio, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Boa.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 17,
  },
  {
    id: 7,
    artist: "RUSH",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["18 de Junio, 2026", "20 de Junio, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Rush.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 8,
    artist: "The Rose",
    tour: "Tour 2026",
    city: "Arena CDMX, CDMX",
      dates: ["17 de Junio, 2026"],
    schedules: ["9:30 AM", "2:00 PM"],
    image: "./images/TheRose.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 9,
    artist: "Zayn",
    tour: "Tour 2026",
    city: "Estadio GNP Seguros, CDMX",
      dates: ["20 de Junio, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Zayn.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 10,
    artist: "Los Tigres del Norte",
    tour: "Tour 2026",
    city: "Estadio GNP Seguros, CDMX",
      dates: ["27 de Junio, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Tigres.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 18,
  },
   {
    id: 11,
    artist: "Asian Kung Fu Generation",
    tour: "Tour 2026",
    city: "Pepsi Center WTC, CDMX",
      dates: ["27 de Junio, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Asian.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 12,
    artist: "Rufus Du Sol",
    tour: "Tour 2026",
    city: "Estadio GNP Seguros, CDMX",
      dates: ["04 de Julio, 2026"],
    schedules: ["11:30 AM", "2:00 PM"],
    image: "./images/Rufus.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 13,
    artist: "Hanabie",
    tour: "Tour 2026",
    city: "Foro Velodromo, CDMX",
      dates: ["10 de Julio, 2026"],
    schedules: ["11:30 AM"],
    image: "./images/Hanabie.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 18,
  },
   {
    id: 14,
    artist: "Enhypen",
    tour: "Tour 2026",
    city: "Arena CDMX, CDMX",
      dates: ["11 de Julio, 2026", "12 de Julio, 2026", "14 de Julio, 2026"],
    schedules: ["9:30 AM", "2:00 PM"],
    image: "./images/Enhypen.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 48,
  },


   {
    id: 15,
    artist: "Woodz",
    tour: "Tour 2026",
    city: "La Maraka, CDMX",
      dates: ["21 de Julio, 2026"],
    schedules: ["11:30 AM"],
    image: "./images/Woodz.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
{
    id: 16,
    artist: "Sombr",
    tour: "Tour 2026",
    city: "Pepsi Center WTC, CDMX",
      dates: ["22 de Julio, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Sombr.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },

   {
    id: 17,
    artist: "Harry Styles",
    tour: "Tour 2026",
    city: "Estadio GNP Seguros, CDMX",
      dates: ["31 de Julio, 2026", "1 de Agosto, 2026", "4 de Agosto, 2026", "7 de Agosto, 2026", "8 de Agosto, 2026", "10 de Agosto, 2026",],
    schedules: ["9:30 AM", "11:30 AM", "2:00 PM"],
    image: "./images/Harry.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
   {
    id: 18,
    artist: "Melanie Martinez",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: [ "8 de Agosto, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Melanie.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
   {
    id: 19,
    artist: "Laura y Brenda",
    tour: "Tour 2026",
    city: "Auditorio Nacional, CDMX",
      dates: [ "2 de Agosto, 2026",],
    schedules: ["2:00 PM"],
    image: "./images/LauraBrenda.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
   {
    id: 20,
    artist: "DPR",
    tour: "Cream & DPR Artic",
    city: "Pepsi Center WTC, CDMX",
      dates: [ "7 de Agosto, 2026"],
    schedules: ["9:30 AM", "13:00 PM"],
    image: "./images/Dpr.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 21,
    artist: "Cristian Castro",
    tour: "Tour 2026",
    city: "Estadio GNP Seguros, CDMX",
      dates: [ "14 de Agosto, 2026","15 de Agosto, 2026"],
    schedules: [ "14:00 PM"],
    image: "./images/Cristian.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
 
  {
    id: 22,
    artist: "Sam Smith",
    tour: "Tour 2026",
    city: "Auditorio Nacional, CDMX",
      dates: [ "17 de Agosto, 2026","18 de Agosto, 2026", "20 de Agosto, 2026", "21 de Agosto, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Sam.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 23,
    artist: "Anyma",
    tour: "Tour 2026",
    city: "Auditorio Nacional, CDMX",
      dates: ["22 de Agosto, 2026",],
    schedules: ["14:00 PM"],
    image: "./images/Anyma.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },

   {
    id: 24,
    artist: "Lacrimosa",
    tour: "Tour 2026",
    city: "Arena CDMX, CDMX",
      dates: ["22 de Agosto, 2026", "22 de Agosto, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Lacrimosa.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
    {
    id: 25,
    artist: "Rosalia",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["24 de Agosto, 2026", "26 de Agosto, 2026", "28 de Agosto, 2026", "29 de Agosto, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Rosalia.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
     {
    id: 26,
    artist: "Ikon",
    tour: "Tour 2026",
    city: "La Maraka, CDMX",
      dates: [ "27 de Agosto, 2026"],
    schedules: ["9:30 AM","1:00 PM"],
    image: "./images/Ikon.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
     {
    id: 27,
    artist: "Helloween",
    tour: "Tour 2026",
    city: "Arena CDMX, CDMX",
      dates: ["29 de Agosto, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Helloweeen.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
     {
    id: 28,
    artist: "Enjambre",
    tour: "Tour 2026",
    city: "Estadio GNP Seguros, CDMX",
      dates: ["29 de Agosto, 2026", "30 de Agosto, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Enjambre.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 29,
    artist: "MGK",
    tour: "Tour 2026",
    city: "Estadio Fray Nano, CDMX",
      dates: ["3 de Septiembre, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/MGK.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 30,
    artist: "Yuridia",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["3 de Septiembre, 2026", "4 de Septiembre, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Yuridia.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
    {
    id: 31,
    artist: "Siddhartha",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["4 de Septiembre, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Siddhartha.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
    {
    id: 32,
    artist: "5 seconds of summer",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["9 de Septiembre, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/5sos.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 33,
    artist: "Robyn Sexitential Tour",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["26 de Septiembre, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Robyn.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 34,
    artist: "Tan Bionica",
    tour: "Tour 2026",
    city: "Teatro Metropolitan, CDMX",
      dates: ["10  de Septiembre, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/Bionica.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
   {
    id: 35,
    artist: "AESPA",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["10  de Septiembre, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/AESPA.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 36,
    artist: "The Neighbourhood",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["26 de Septiembre, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/TheNeigh.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 37,
    artist: "Iron Maiden",
    tour: "Tour 2026",
    city: "Estadio GNP Seguros, CDMX",
      dates: ["26 de Octubre, 2026"],
    schedules: ["2:00 PM"],
    image: "./images/IronMaiden.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 38,
    artist: "Robbie Williams",
    tour: "Tour 2026",
    city: "Palacio de Los Deportes, CDMX",
      dates: ["7 de Octubre, 2026", "8 de Octubre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Robbie.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 39,
    artist: "Two Door Cinema Club",
    tour: "Tour 2026",
    city: "Pepsi Center, CDMX",
      dates: ["15 de Octubre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/TwoDoor.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 40,
    artist: "Martin Garrix",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["16 de Octubre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Garrix.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 41,
    artist: "Bad Gay",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["22 de Octubre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Badgay.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 42,
    artist: "Jessie Ware",
    tour: "Tour 2026",
    city: "Teatro Metropolitan, CDMX",
      dates: ["24 de Octubre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Jessie.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 43,
    artist: "Fobia",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["24 de Octubre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Fobia.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 44,
    artist: "Romeo Santos y Prince Royce",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["25 de Octubre, 2026", "26 de Octubre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Romeo.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
   {
    id: 45,
    artist: "Jimmy Sea",
    tour: "Tour 2026",
    city: "Teatro Metropolitan, CDMX",
      dates: ["28 de Octubre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Jimmy.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 46,
    artist: "MORAT",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["6 de Noviembre, 2026", "7 de Noviembre, 2026", "8 de Noviembre, 2026", "12 de Noviembre, 2026", "13 de Noviembre, 2026", "14 de Noviembre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Morat.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 47,
    artist: "Karol G",
    tour: "Tour 2026",
    city: "Estadio GNP Seguros, CDMX",
      dates: ["13 de Noviembre, 2026", "14 de Noviembre, 2026", "15 de Noviembre, 2026"],
    schedules: [ "10:30 AM", "1:30 PM"],
    image: "./images/KarolG.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 48,
    artist: "Eros Ramazzotti",
    tour: "Tour 2026",
    city: "Arena CDMX, CDMX",
      dates: ["14 de Noviembre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Eros.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 49,
    artist: "Love Of Lesbian",
    tour: "Tour 2026",
    city: "Auditorio Nacional, CDMX",
      dates: ["25 de Noviembre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/LoveOfLesbian.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 50,
    artist: "Hayley Williams",
    tour: "Tour 2026",
    city: "Auditorio Nacional, CDMX",
      dates: ["26 de Noviembre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Hayley.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 51,
    artist: "Katseye",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["27 de Noviembre, 2026"],
    schedules: [ "9:30 AM", "1:00 PM"],
    image: "./images/Katseye.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
    {
    id: 52,
    artist: "Knotfest",
    tour: "Tour 2026",
    city: "Estadio Fray Nano, CDMX",
      dates: ["5 de Diciembre, 2026"],
    schedules: [ "10:00 AM"],
    image: "./images/Knotfest.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
    {
    id: 53,
    artist: "Bruno Mars",
    tour: "Tour 2026",
    city: "Estadio GNP Seguros, CDMX",
      dates: ["3 de Diciembre, 2026", "4 de Diciembre, 2026", "7 de Diciembre, 2026","8 de Diciembre, 2026"],
    schedules: [ "11:30 AM", "1:30 PM"],
    image: "./images/Bruno.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
    {
    id: 54,
    artist: "Atarashii Gakko!        ",
    tour: "Tour 2026",
    city: "Velodromo Olimpico, CDMX",
      dates: ["8 de Diciembre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Atara.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
    {
    id: 55,
    artist: "Ed Sheeran",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["11 de Diciembre, 2026", "12 de Diciembre, 2026"],
    schedules: [ "9:30 AM", "1:00 PM"],
    image: "./images/Ed.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
    {
    id: 56,
    artist: "BabyMetal",
    tour: "Tour 2026",
    city: "Estadio GNP Seguros, CDMX",
      dates: ["12 de Diciembre, 2026"],
    schedules: [  "2:00 PM"],
    image: "./images/BabyMetal.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
    {
    id: 57,
    artist: "Disney Worlds Collide Tour",
    tour: "Tour 2026",
    city: "Arena CDMX, CDMX",
      dates: ["13 de Diciembre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Disney.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
    {
    id: 58,
    artist: "Deep Purple",
    tour: "Tour 2026",
    city: "Estadio Fray Nano, CDMX",
      dates: ["19 de Diciembre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Deep.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
    {
    id: 59,
    artist: "Ricardo Arjona",
    tour: "Tour 2026",
    city: "Estadio Banorte, CDMX",
      dates: ["20 de Diciembre, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Arjona.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
  {
    id: 60,
    artist: "Hillary Duff",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
      dates: ["13 de Febrero, 2026", "14 de Febrero, 2026"],
    schedules: [ "2:00 PM"],
    image: "./images/Hillary.jpg",
    price: 629,
    originalPrice: 655,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 20,
  },
   
];

let cart = [];

function rendercodviajes() {
  const container = document.getElementById("codviajes-container");
  container.innerHTML = codviajes
    .map(
      (codviaje, index) => `
        <div class="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/50 transition-all duration-300 card-glow slide-up" style="animation-delay: ${
          index * 0.1
        }s">
<div class="aspect-square bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center relative overflow-hidden">
${
  codviaje.image.includes("/")
    ? `<img 
         src="${codviaje.image}" 
         alt="${codviaje.artist}" 
         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
       />`
    : `<span class="text-7xl float-animation">${codviaje.image}</span>`
}          <div class="absolute top-12 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
  codviaje.spots < 7
    ? "bg-red-500"
    : "bg-green-500"
}">
  ${
    codviaje.spots < 7
      ? "🔥 Poca disponibilidad"
      : "✅ Alta disponibilidad"
  }
</div>
            ${
              codviaje.originalPrice > codviaje.price
                ? `
              <div class="absolute top-3 left-3 px-3 py-1 bg-green-500 rounded-full text-xs font-semibold">
                -${Math.round(
                  (1 - codviaje.price / codviaje.originalPrice) * 100
                )}%
              </div>
            `
                : ""
            }
          </div>
          <div class="p-5">
            <div class="flex items-start justify-between mb-2">
              <div>
              
                <h3 class="text-xl font-bold">${codviaje.artist}</h3>
                <p class="text-purple-400 text-sm">${codviaje.tour}</p>
                
              </div>
            </div>
            <div class="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <span>📍 ${codviaje.city}</span>
              <span>•</span>
              <span>📅 ${codviaje.dates}</span>
            </div>
            <div class="flex items-end justify-between">
              <div>
                ${
                  codviaje.originalPrice > codviaje.price
                    ? `
                  <span class="text-gray-500 line-through text-sm">$${codviaje.originalPrice.toLocaleString()}</span>
                `
                    : ""
                }
                <p class="text-2xl font-bold text-pink-400">$${codviaje.price.toLocaleString()}<span class="text-sm text-gray-400 font-normal"> MXN</span></p>
              </div>
              <button onclick="openModal(${
                codviaje.id
              })" class="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function openModal(codviajeId) {
  const codviaje = codviajes.find((t) => t.id === codviajeId);
  if (!codviaje) return;

  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
        <div class="text-center mb-6">
${
  codviaje.image.includes("/")
    ? `<img 
         src="${codviaje.image}" 
         alt="${codviaje.artist}" 
         class="w-40 h-40 mx-auto mb-4 object-cover rounded-xl"
       />`
    : `<span class="text-6xl mb-4 block">${codviaje.image}</span>`
}
          <h3 class="text-2xl font-bold">${codviaje.artist}</h3>
          <p class="text-purple-400">${codviaje.tour}</p>
        </div>
        
        <div class="space-y-4 mb-6">
          <div class="flex justify-between items-center py-3 border-b border-white/10">
            <span class="text-gray-400">📍 Destino</span>
            <span class="font-semibold">${codviaje.city}</span>
          </div>
          <div class="flex justify-between items-center py-3 border-b border-white/10">
            <span class="text-gray-400">📅 Fecha</span>
            <span class="font-semibold">${codviaje.dates}</span>
          </div>
          <div class="flex justify-between items-center py-3 border-b border-white/10">
            <span class="text-gray-400">👥 Lugares disponibles</span>
            <span class="font-semibold text-pink-400">${codviaje.spots}</span>
          </div>
        </div>

        <div class="bg-white/5 rounded-xl p-4 mb-6">
          <h4 class="font-semibold mb-3">El paquete incluye:</h4>
          <ul class="space-y-2">
            ${codviaje.includes
              .map(
                (item) => `
              <li class="flex items-center gap-2 text-gray-300">
                <span class="text-green-400">✓</span>
                ${item}
              </li>
            `
              )
              .join("")}
          </ul>
        </div>

        <div class="flex items-center justify-between mb-6">
          <div>
            ${
              codviaje.originalPrice > codviaje.price
                ? `
              <span class="text-gray-500 line-through">$${codviaje.originalPrice.toLocaleString()}</span>
            `
                : ""
            }
            <p class="text-3xl font-bold text-pink-400">$${codviaje.price.toLocaleString()} <span class="text-sm text-gray-400 font-normal">MXN</span></p>
            <p class="text-xs text-gray-500">Precio por persona</p>
          </div>
        </div>

        <button onclick="addToCart(${
          codviaje.id
        })" class="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold text-lg hover:scale-[1.02] transition-transform">
          🎟️ Reservar Ahora
        </button>
      `;

  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").classList.add("flex");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("modal").classList.remove("flex");
}

function addToCart(codviajeId) {
  const codviaje = codviajes.find((t) => t.id === codviajeId);
  if (!codviaje) return;

  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
  <div>
  <label class="block text-sm font-medium text-gray-300 mb-2">
    Selecciona fecha
  </label>
  <select id="fecha" required
      class="w-full px-4 py-3 bg-gray-900 text-white border border-white/20 rounded-xl">

    <option value="">Selecciona fecha</option>
    ${codviaje.dates
      .map(
        (d) => `
      <option value="${d}">${d}</option>
    `
      )
      .join("")}
  </select>
</div>

<div>
  <label class="block text-sm font-medium text-gray-300 mb-2">
    Selecciona horario
  </label>
  <select id="horario" required
      class="w-full px-4 py-3 bg-gray-900 text-white border border-white/20 rounded-xl">

    <option value="">Selecciona horario</option>
    ${codviaje.schedules
      .map(
        (h) => `
      <option value="${h}">${h}</option>
    `
      )
      .join("")}
  </select>
</div>
      
  <div class="py-4">
          <h3 class="text-2xl font-bold mb-2">Completa tu reserva</h3>
          <p class="text-gray-400 mb-6">Información de los pasajeros</p>
          
          <form id="booking-form" class="space-y-6">
            <div>
              <label for="pasajeros" class="block text-sm font-medium text-gray-300 mb-2">¿Cuántos pasajeros son?</label>
              <select id="pasajeros" required     class="w-full px-4 py-3 bg-gray-900 text-white border border-white/20 rounded-xl focus:outline-none focus:border-pink-500 transition-colors">
                <option value="">Selecciona cantidad</option>
                ${Array.from(
                  { length: codviaje.spots },
                  (_, i) =>
                    `<option value="${i + 1}">${i + 1} ${
                      i === 0 ? "persona" : "personas"
                    }</option>`
                ).join("")}
              </select>
              <p class="text-xs text-gray-500 mt-1">Máximo ${
                codviaje.spots
              } lugares disponibles</p>
            </div>

            <div id="passengers-container" class="space-y-4">
              <!-- Formularios de pasajeros aparecerán aquí -->
            </div>

            <div id="summary-container" class="hidden bg-pink-500/10 border border-pink-500/30 rounded-xl p-4">
              <p class="text-sm text-gray-300"><strong>Resumen:</strong></p>
              <p class="text-sm text-gray-400">${codviaje.artist} - ${
    codviaje.tour
  }</p>
              <p class="text-sm text-gray-400">${codviaje.city} • ${
    codviaje.dates
  }</p>
<p class="text-sm text-gray-400">
  📅 <span id="resumen-fecha">Selecciona fecha</span>
</p>
<p class="text-sm text-gray-400">
  ⏰ <span id="resumen-horario">Selecciona horario</span>
</p>


              <p id="total-price" class="text-lg font-bold text-pink-400 mt-2"></p>
              <p id="deposit-price" class="text-sm text-gray-400 mt-1"></p>
            </div>
            
            <button type="submit" id="submit-btn" disabled class="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl font-semibold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 opacity-50 cursor-not-allowed">
              <span class="text-xl">📱</span>
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      `;

  // Handle passenger count change
  document.getElementById("pasajeros").addEventListener("change", function (e) {
    const count = parseInt(e.target.value);
    if (count) {
      renderPassengerForms(count, codviaje);
    }
  });

  // Add form submit handler
  document
    .getElementById("booking-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      sendWhatsApp(codviajeId);
    });
}

function renderPassengerForms(count, codviaje) {
  const container = document.getElementById("passengers-container");
  const summaryContainer = document.getElementById("summary-container");
  const submitBtn = document.getElementById("submit-btn");

  let formsHTML = "";
  for (let i = 0; i < count; i++) {
    formsHTML += `
          <div class="bg-white/5 border border-white/20 rounded-xl p-4">
            <h4 class="font-semibold text-purple-400 mb-3">Pasajero ${
              i + 1
            }</h4>
            <div class="space-y-3">
              <div>
                <label for="nombre_${i}" class="block text-sm text-gray-300 mb-1">Nombre Completo</label>
                <input type="text" id="nombre_${i}" required class="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-pink-500 transition-colors text-sm" placeholder="Ej. María García López">
              </div>
              <div>
                <label for="edad_${i}" class="block text-sm text-gray-300 mb-1">Edad</label>
                <input type="number" id="edad_${i}" required min="1" max="99" class="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-pink-500 transition-colors text-sm" placeholder="Ej. 25">
              </div>
              <div>
                <label for="telefono_${i}" class="block text-sm text-gray-300 mb-1">Número de Teléfono</label>
                <input type="tel" id="telefono_${i}" required class="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-pink-500 transition-colors text-sm" placeholder="Ej. 5512345678">
              </div>
            </div>
          </div>
        `;
  }

  container.innerHTML = formsHTML;

  // Show summary
  summaryContainer.classList.remove("hidden");
  const totalPrice = codviaje.price * count;
  const depositPrice = Math.round(totalPrice * 0.3);
  document.getElementById(
    "total-price"
  ).textContent = `Total: $${totalPrice.toLocaleString()} MXN`;

  // Enable submit button
  submitBtn.disabled = false;
  submitBtn.classList.remove("opacity-50", "cursor-not-allowed");
}

function sendWhatsApp(codviajeId) {
  const codviaje = codviajes.find((t) => t.id === codviajeId);
  if (!codviaje) return;
  const fecha = document.getElementById("fecha").value;
  const horario = document.getElementById("horario").value;

  const pasajeros = parseInt(document.getElementById("pasajeros").value);

  let pasajerosInfo = "";
  for (let i = 0; i < pasajeros; i++) {
    const nombre = document.getElementById(`nombre_${i}`).value;
    const edad = document.getElementById(`edad_${i}`).value;
    const telefono = document.getElementById(`telefono_${i}`).value;

    pasajerosInfo += `\n👤 *Pasajero ${
      i + 1
    }:*\n   Nombre: ${nombre}\n   Edad: ${edad} años\n   Teléfono: ${telefono}\n`;
  }

  const totalPrice = codviaje.price * pasajeros;
  const depositPrice = Math.round(totalPrice * 0.3);

  const mensaje = `🎸 *RESERVA DE VIAJE A CONCIERTO*

📋 *Información del Evento:*
🎤 Artista: ${codviaje.artist}
🎭 Tour: ${codviaje.tour}
📅 Fecha: ${fecha}
⏰ Horario: ${horario}
💰 Precio por persona: $${codviaje.price.toLocaleString()} MXN

👥 *Información de Pasajeros (${pasajeros}):*${pasajerosInfo}

💵 *Total: $${totalPrice.toLocaleString()} MXN*

¡Quiero confirmar mi reserva!`;

  // Reemplaza este número con tu número de WhatsApp real (con código de país, sin +)
  const numeroWhatsApp = "522225485659"; // Ejemplo: 52 (México) + 55 1234 5678

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensaje
  )}`;

  // Abrir WhatsApp en nueva pestaña
  window.open(urlWhatsApp, "_blank", "noopener,noreferrer");

  // Mostrar mensaje de confirmación
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
        <div class="text-center py-8">
          <div class="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
            <span class="text-4xl">✅</span>
          </div>
          <h3 class="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
          <p class="text-gray-400 mb-6">Se abrirá WhatsApp con tu solicitud de reserva para <strong>${
            codviaje.artist
          }</strong> con ${pasajeros} ${
    pasajeros === 1 ? "pasajero" : "pasajeros"
  }.</p>
          
          <p class="text-sm text-gray-400 mb-6">
            Si no se abrió automáticamente, haz clic en el botón de abajo.
          </p>
          
          <button onclick="window.open('${urlWhatsApp}', '_blank', 'noopener,noreferrer')" class="w-full py-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold transition-colors mb-3 flex items-center justify-center gap-2">
            <span class="text-xl">📱</span>
            Abrir WhatsApp
          </button>
          
          <button onclick="closeModal()" class="w-full py-3 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all">
            Cerrar
          </button>
        </div>
      `;
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Initialize Element SDK
const elementConfig = {
  defaultConfig,
  onConfigChange: async (config) => {
    const navTitle = document.getElementById("nav-title");
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const ctaButton = document.getElementById("cta-button");

    if (navTitle)
      navTitle.textContent = config.site_title || defaultConfig.site_title;

    if (heroTitle) {
      const titleText = config.hero_title || defaultConfig.hero_title;
      const words = titleText.split(" ");
      const midPoint = Math.ceil(words.length / 2);
      const firstHalf = words.slice(0, midPoint).join(" ");
      const secondHalf = words.slice(midPoint).join(" ");
      heroTitle.innerHTML = `${firstHalf}<br><span class="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">${secondHalf}</span>`;
    }

    if (heroSubtitle)
      heroSubtitle.textContent =
        config.hero_subtitle || defaultConfig.hero_subtitle;
    if (ctaButton)
      ctaButton.textContent =
        config.cta_button_text || defaultConfig.cta_button_text;
  },
  mapToCapabilities: (config) => ({
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) =>
          window.elementSdk.setConfig({ background_color: value }),
      },
      {
        get: () => config.primary_color || defaultConfig.primary_color,
        set: (value) => window.elementSdk.setConfig({ primary_color: value }),
      },
      {
        get: () => config.secondary_color || defaultConfig.secondary_color,
        set: (value) => window.elementSdk.setConfig({ secondary_color: value }),
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => window.elementSdk.setConfig({ text_color: value }),
      },
      {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (value) => window.elementSdk.setConfig({ accent_color: value }),
      },
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || "Outfit",
      set: (value) => window.elementSdk.setConfig({ font_family: value }),
    },
    fontSizeable: {
      get: () => config.font_size || 16,
      set: (value) => window.elementSdk.setConfig({ font_size: value }),
    },
  }),
  mapToEditPanelValues: (config) =>
    new Map([
      ["site_title", config.site_title || defaultConfig.site_title],
      ["hero_title", config.hero_title || defaultConfig.hero_title],
      ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
      [
        "cta_button_text",
        config.cta_button_text || defaultConfig.cta_button_text,
      ],
    ]),
};

if (window.elementSdk) {
  window.elementSdk.init(elementConfig);
}

// Initialize codviajes on load
rendercodviajes();

// Close modal on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
