    <!-- <template>
        <div class="container form mt-4">
            <h2 class="text-center">Search your apartment
            </h2>
            <form @submit="submitForm">
                <div class="form-group">
                    <label for="address">City or address</label>
                    <input type="text" class="form-control" id="address" placeholder="Insert city or address" v-model="address">
                </div>
                <div class="form-group">

                </div>
                <div class="form-group">
                    <label for="minRooms">Min Rooms:</label>
                    <input type="number" class="form-control" id="minRooms" min="1" v-model="minRooms">
                </div>
                <div class="form-group">
                    <label for="minBeds">Min beds:</label>
                    <input type="number" class="form-control" id="minBeds" min="1" v-model="minBeds">
                </div>
                <div>
                    <label for="range">
                        Search Range (km): 20
                    </label>
                    <div>
                        <input class="range_km" type="range" name="range" min="1" max="20" step="1">
                    </div>

                </div>
                <div class="form-group">
                    <label class="mb-1">Services:</label>
                    <div class="row mt-4">
                        <div class="col-3 mb-1" v-for="service in services" :key="service.name">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" :id="service.name" v-model="selectedServices">
                                <label class="form-check-label" :for="service.name">
                                    <i :class="service.icon"></i> {{ service.name }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">Cerca</button>
            </form>
        </div>


        <div class="container mt-4 mb-4">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12 mb-5" v-for="apartment in apartments" :key="apartment.id">
                    <div class="column-bg card text-center">
                        <img :src="getImage(apartment)" alt="Apartment Image">
                        <h6 class="text-uppercase mt-4">{{ apartment.name }}</h6>
                        <p class="mt-2"><i class="fa-solid fa-location-dot"></i> {{ apartment.city }}</p>
                        <div class="d-flex justify-content-center">
                            <p><i class="fa-solid fa-expand"></i> {{ apartment.square_meters }} sqm </p>
                            <p><i class="fa-solid fa-bed"></i> {{ apartment.bed_number }}</p>
                            <p><i class="fa-solid fa-bath"></i> {{ apartment.bathroom_number }}</p>
                            <p><i class="fa-solid fa-euro-sign"></i> {{ apartment.price }}</p>
                        </div>
                        <btn class="details text-center">
                            <router-link class="nav-link" :to="{ name: 'singleapartment' }">DETAILS</router-link>
                        </btn>
                    </div>
                </div>
            </div>
        </div>
    </template>

<script>
export default {
    data() {
        return {

            address: '',
            latitude: '',
            longitude: '',
            minRooms: '',
            minBeds: '',
            radius: 20,
            selectedServices: [],
            services: [


                { name: 'Wifi', icon: 'fas fa-wifi' },
                { name: 'Parcheggio', icon: 'fas fa-square-parking' },
                { name: 'Piscina', icon: 'fa-solid fa-person-swimming' },
                { name: 'Portineria', icon: 'fa-solid fa-bell-concierge' },
                { name: 'Sauna', icon: 'fa-solid fa-spa' },
                { name: 'Vista mare', icon: 'fa-solid fa-water' },
                { name: 'Tv', icon: 'fa-solid fa-tv' },
                { name: 'Riscaldamento', icon: 'fa-solid fa-temperature-low' },
                { name: 'Aria condizionata', icon: 'fa-solid fa-fan' },
                { name: 'Bagno privato', icon: 'fa-solid fa-toilet' },
                { name: 'Colazione inclusa', icon: 'fa-solid fa-mug-hot' },
                { name: 'Vista panoramica', icon: 'fa-solid fa-mountain-sun' },
                { name: 'Cucina', icon: 'fa-solid fa-fire-burner' },
                { name: 'Lavatrice', icon: 'fa-solid fa-soap' },
                { name: 'Asciugacapelli', icon: 'fa-solid fa-wind' },
                { name: 'Idromassaggio', icon: 'fa-solid fa-hot-tub-person' },
                { name: 'Domotica', icon: 'fa-solid fa-robot' },
                { name: 'Barbeque', icon: 'fa-solid fa-stroopwafel' },
                { name: 'Giardino', icon: 'fa-solid fa-tree' },
                { name: 'Culla', icon: 'fa-solid fa-baby-carriage' },
                { name: 'Ferro da stiro', icon: 'fa-solid fa-shirt' },
                { name: 'Set di cortesia', icon: 'fa-solid fa-spray-can-sparkles' },
                { name: 'Camino', icon: 'fa-solid fa-fire' },
                { name: 'Accessibilità', icon: 'fa-solid fa-wheelchair-move' }



            ],
            apartments: [
                {
                    user_id: 3,
                    name: "Casa Giostrello",
                    description: "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale...",
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
                    name: "Casa Giostrello",
                    description: "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale...",
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
                    name: "Casa Giostrello",
                    description: "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale...",
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
                    name: "Casa Giostrello",
                    description: "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale...",
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
                    address: "Corso Italia, 5",
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
                    user_id: 3,
                    name: "Casa Giostrello",
                    description: "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale...",
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
                    name: "Casa Giostrello",
                    description: "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale...",
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

<style lang="scss" scoped>
.form {
    padding: 1rem;
    margin-top: 300px;
    color: #01ABE3;
}

.range_km {
    width: 50%;
}

.container {
    border: 5px solid #01ABE3;
    border-radius: 15px;

    .card {
        height: 350px;
        width: 250px;
        border: 1px solid #01ABE3;
        border-radius: 0%;
        margin: 0 auto;

        p {
            margin-right: 5px;
        }

        i {
            color: #01ABE3;
        }
    }

    .details {
        border: 1px solid #01ABE3;
        border-radius: 5px;
        width: 35%;
        margin: 0 auto;
        padding: 0.3rem;
        font-size: 0.9rem;
        z-index: 1;
    }
}

.content-image {
    width: 100%;
}

img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.btn {
    background-color: #01ABE3;
    font-size: 0.6rem;
    padding: 0.9rem;
}

.row {
    margin-top: 20px;
}


@media (max-width: 810px) {
    .card {
        width: 50%;
    }
}

@media (max-width: 428px) {
    .card {
        width: 100%;
    }
}
</style> -->


<template>
    <div>
    

        <div class="container mt-4 mb-4 text-center">
            <h2>APARTMENTS LIST</h2>
            <button @click="showForm = true" class="btn btn-primary mt-4 mb-4 ">Filter Apartment</button>
        <Form v-if="showForm" @close="showForm = false" />
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12 mb-5" v-for="apartment in apartments" :key="apartment.id">
                    <div class="column-bg card text-center">
                        <img :src="getImage(apartment)" alt="Apartment Image">
                        <h6 class="text-uppercase mt-4">{{ apartment.name }}</h6>
                        <p class="mt-2"><i class="fa-solid fa-location-dot"></i> {{ apartment.city }}</p>
                        <div class="d-flex justify-content-center">
                            <p><i class="fa-solid fa-expand"></i> {{ apartment.square_meters }} sqm </p>
                            <p><i class="fa-solid fa-bed"></i> {{ apartment.bed_number }}</p>
                            <p><i class="fa-solid fa-bath"></i> {{ apartment.bathroom_number }}</p>
                            <p><i class="fa-solid fa-euro-sign"></i> {{ apartment.price }}</p>
                        </div>
                        <btn class="details text-center">
                            <router-link class="nav-link" :to="{ name: 'singleapartment' }">DETAILS</router-link>
                        </btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import AppForm from '../components/AppForm.vue';
  
  export default {
    components: {
    AppForm
    },
    data() {
      return {
        showForm: false,
        apartments: [
        {
                        user_id: 3,
                        name: "Casa Giostrello",
                        description: "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale...",
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
                        name: "Casa Giostrello",
                        description: "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale...",
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
                        name: "Casa Giostrello",
                        description: "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale...",
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
                        name: "Casa Giostrello",
                        description: "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale...",
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
                        address: "Corso Italia, 5",
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
                        user_id: 3,
                        name: "Casa Giostrello",
                        description: "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale...",
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
                        name: "Casa Giostrello",
                        description: "Casa Giostrello è un grazioso mini-appartamento indipendente in un parco residenziale...",
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
        ]
      };
    },
    methods: {
      getImage(apartment) {
        return new URL(`../assets/img/${apartment.image}`, import.meta.url).href;
      }
    }
  };
  </script>
  
<style lang="scss" scoped>
.container {
    border: 5px solid #01ABE3;
    border-radius: 15px;
}

.card {
    height: 350px;
    width: 250px;
    border: 1px solid #01ABE3;
    border-radius: 0%;
    margin: 0 auto;
}

.form {
    padding: 1rem;
    margin-top: 300px;
    color: #01ABE3;
}

.range_km {
    width: 50%;
}

.container {
    border: 5px solid #01ABE3;
    border-radius: 15px;

    .card {
        height: 350px;
        width: 250px;
        border: 1px solid #01ABE3;
        border-radius: 0%;
        margin: 0 auto;

        p {
            margin-right: 5px;
        }

        i {
            color: #01ABE3;
        }
    }

    .details {
        border: 1px solid #01ABE3;
        border-radius: 5px;
        width: 35%;
        margin: 0 auto;
        padding: 0.3rem;
        font-size: 0.9rem;
        z-index: 1;
    }
}

.content-image {
    width: 100%;
}

img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.btn {
    background-color: #01ABE3;
    font-size: 0.6rem;
    padding: 0.9rem;
}

.row {
    margin-top: 20px;
}


@media (max-width: 810px) {
    .card {
        width: 50%;
    }
}

@media (max-width: 428px) {
    .card {
        width: 100%;
    }
}


</style>
  