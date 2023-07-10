<script>
export default {
    data() {
        return {
            apartments: [
                {
                    user_id: 3,
                    name: "Casa Giostrello ",
                    description:
                        "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale, nella zona alta...",
                    square_meters: 320,
                    bed_number: 2,
                    bathroom_number: 2,
                    room_number: 4,
                    address: "Viale Pasitea",
                    city: "Positano",
                    state: "Italia",
                    latitude: 40.62829,
                    longitude: 14.48427,
                    price: 200.0,
                    image: "homeloft.jpg",
                    visibility: true,
                },

                {
                    user_id: 3,
                    name: "Maison Matilde Luxury ",
                    description:
                        "Maison Matilde è una nuova struttura moderna situata nel cuore del centro storico, a soli 3 minuti dalla piazza principale...",
                    square_meters: 190,
                    bed_number: 3,
                    bathroom_number: 2,
                    room_number: 5,
                    address: "Corso Italia",
                    city: "Sorrento",
                    state: "Italia",
                    latitude: 40.7324058,
                    longitude: 13.9447849,
                    price: 138.0,
                    image: "bolobnb.jpg",
                    visibility: true,
                },
                {
                    user_id: 4,
                    name: "Design Club Collection",
                    description:
                        "Progettato da architetti di fama internazionale, l'edificio completamente ristrutturato vanta appartamenti con una selezione di iconici elementi di design moderno che uniscono qualità estetica con qualità funzionale e funzionale...",
                    square_meters: 100,
                    bed_number: 3,
                    bathroom_number: 2,
                    room_number: 3,
                    address: "Via Nazario Sauro, 25",
                    city: "Bologna",
                    state: "Italia",
                    latitude: 44.49801,
                    longitude: 11.33979,
                    price: 500.0,
                    image: "bolobnb.jpg",
                    visibility: true,
                },
                {
                    user_id: 4,
                    name: " Airport_Bologna",
                    description:
                        "Si tratta di un mini appartamento adatto come punto di appoggio o breve soggiorno. Vicinissimo all'aeroporto MARCONI, all'OSPEDALE MAGGIORE, CENTRO COMMERCIALE \"GRAN RENO\", UNIPOL ARENA, CENTRO BORGO e al MUSEO DUCATI. La zona è ben servita da tutti i servizi, a pochi metri si trova la fermata dell'autobus per raggiungere il centro...",
                    square_meters: 30,
                    bed_number: 1,
                    bathroom_number: 1,
                    room_number: 3,
                    address: "Via Guglielmo Pepe, 20",
                    city: "Bologna",
                    state: "Italia",
                    latitude: 44.5231484,
                    longitude: 11.2921357,
                    price: 100.0,
                    image: "homeloft.jpg",
                    visibility: true,
                },
                {
                    user_id: 3,
                    name: "Casa Giostrello ",
                    description:
                        "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale, nella zona alta...",
                    square_meters: 320,
                    bed_number: 2,
                    bathroom_number: 2,
                    room_number: 4,
                    address: "Viale Pasitea",
                    city: "Positano",
                    state: "Italia",
                    latitude: 40.62829,
                    longitude: 14.48427,
                    price: 200.0,
                    image: "homeloft.jpg",
                    visibility: true,
                },

                {
                    user_id: 3,
                    name: "Maison Matilde Luxury ",
                    description:
                        "Maison Matilde è una nuova struttura moderna situata nel cuore del centro storico, a soli 3 minuti dalla piazza principale...",
                    square_meters: 190,
                    bed_number: 3,
                    bathroom_number: 2,
                    room_number: 5,
                    address: "Corso Italia",
                    city: "Sorrento",
                    state: "Italia",
                    latitude: 40.7324058,
                    longitude: 13.9447849,
                    price: 138.0,
                    image: "bolobnb.jpg",
                    visibility: true,
                },
               
            ],
        };
    },
    methods: {
        getImage(element) {
            return new URL(`../assets/img/${element.image}`, import.meta.url).href;
        },
    },
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 mb-2" v-for="apartment in apartments" :key="apartment.id">
                <div class="content">
                    <a href="#">
                        <div class="content-overlay"></div>
                        <img class="content-image" :src="getImage(apartment)" alt="Apartment Image" />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">{{ apartment.name }}</h3>
                            <p class="content-text">
                                <i class="fa fa-map-marker"></i> {{ apartment.city }}
                            </p>
                            <div class="d-flex justify-content-center align-items-center">
                                <p class="mr-4">
                                    <i class="fa-solid fa-expand mr-2"></i>
                                    {{ apartment.square_meters }} <span class="mr-3">sqm</span>
                                </p>
                                <p class="mr-4">
                                    <i class="fa-solid fa-bed"></i> {{ apartment.bed_number }}
                                </p>
                                <p class="mr-4">
                                    <i class="fa-solid fa-bath"></i>
                                    {{ apartment.bathroom_number }}
                                </p>
                                <p class="mr-4">
                                    <i class="fa-solid fa-euro-sign"></i> {{ apartment.price }}/
                                    night
                                </p>
                            </div>
                            <div class="details text-center">
                                <router-link class="btn" :to="{ name: 'singleapartment' }">DETAILS</router-link>
                            </div>


                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="container mt-4">


        <div class="row">
            <div class="col-3" v-for="apartment in apartments" :key="apartment.id">
                <div class="column-bg card">
                    <img :src="getImage(apartment)" alt="Apartment Image">
                    <h3 class="text-uppercase">{{ apartment.name }}</h3>
                    <p>{{ apartment.address }} {{ apartment.city }}</p>
                    <div class="d-flex">
                        <p><i class="fa-solid fa-expand"></i> {{ apartment.square_meters }} sqm </p>
                        <p><i class="fa-solid fa-bed"></i> {{ apartment.bed_number }}</p>
                        <p><i class="fa-solid fa-bath"></i> {{ apartment.bathroom_number }}</p>
                        <p><i class="fa-solid fa-euro-sign"></i> {{ apartment.price }}</p>
                    </div>
                    
                    <div class="details text-center">
                        <router-link class="nav-link" :to="{ name: 'singleapartment' }">DETAILS</router-link>
                    </div>
                </div>

            </div>
        </div>

    </div> -->
</template>

<style lang="scss" scoped>
// Variabili
$body-bg: #f9f9f9;
$title-color: #1a1a1a;
$content-overlay-color: rgba(0, 0, 0, 0.7);

// Mixin
@mixin transition($properties) {
  transition: $properties;
  -webkit-transition: $properties;
  -moz-transition: $properties;
}

body {
  background: $body-bg;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
}

.container {
  height: calc(100vh - 250px);
}

.title {
  color: $title-color;
  text-align: center;
  margin-bottom: 10px;
}

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;

  .content-overlay {
    background: $content-overlay-color;
    position: absolute;
    height: 99%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    @include transition(all 0.4s ease-in-out 0s);
  }

  &:hover {
    .content-overlay {
      opacity: 1;
    }

    .content-details {
      top: 50%;
      left: 50%;
      opacity: 1;
    }
  }
}

.content-image {
  width: 100%;
}

img {
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  @include transition(all 0.3s ease-in-out 0s);

  h3 {
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  p {
    color: #fff;
    font-size: 0.8em;
    margin-right: 10px;
  }
}

.fadeIn-bottom {
  top: 80%;
}

.details {
  color: white;
  text-decoration: underline;
}

i {
  color: #01ABE3;
}

.btn {
  background-color: #01ABE3;
  color: white;
  font-size: 0.6rem;
}

.row{
    margin-top: 50px;
}

</style>
