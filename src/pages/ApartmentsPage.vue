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
        <div class="hero">
        <div class="hero__content">
            <h1 class="big-text text-center">APARTMENTS</h1>
        </div>
        <img  id="homehero" src="../assets/img/apartament.jpeg" alt="">
    </div>
    <div class="container mt-5">
        <div class="box">
            <div class="search-box">
                <input type="text" name="searchbar" placeholder="Search here...">
                <label for="" class="icon">
                    <i class="fa-solid fa-magnifying-glass" style="color: #0b57da;"></i>
                </label>
            </div>
        </div>
    </div>


    <div class="container mt-4">
        <div class="row">
            <div class="col-3 mb-5" v-for="apartment in apartments" :key="apartment.id">
                <div class="column-bg card text-center">
                    <img :src="getImage(apartment)" alt="Apartment Image">
                    <h5 class="text-uppercase mt-4">{{ apartment.name }}</h5>
                    <p class="mt-2"><i class="fa-solid fa-location-dot"></i> {{ apartment.city }}</p>
                    <div class="d-flex justify-content-center">
                        <p><i class="fa-solid fa-expand"></i> {{ apartment.square_meters }} sqm </p>
                        <p><i class="fa-solid fa-bed"></i> {{ apartment.bed_number }}</p>
                        <p><i class="fa-solid fa-bath"></i> {{ apartment.bathroom_number }}</p>
                        <p><i class="fa-solid fa-euro-sign"></i> {{ apartment.price }}</p>
                    </div>

                    <btn class=" details text-center">
                        <router-link class="nav-link" :to="{ name: 'singleapartment' }">DETAILS</router-link>
                    </btn>
                </div>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
// Variabili


.container {
    // height: calc(100vh - 250px);

    .card {
        height: 350px;
        border: 1px solid #01ABE3;
        border-radius: 0%;
        // border: none;

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
    color: white;
    font-size: 0.6rem;
    padding: 0.9rem;
}

.row {
    margin-top: 50px;
}
#homehero{
    position: absolute;
    top: 2;
    right: 30 ;
    min-width: 100%;
    min-height: 100%;
    z-index: 0;
}


.hero{
    position: relative;
    height: 600px;
    display: flex;
    width: 100%;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,.2) rgba(0,0,0,0.9) 70.71%), url() no-repeat center center;
    background-size: cover;
    overflow: hidden;
}

.hero::after{
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.4;
}
.hero__content{
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    z-index: 1;
    position: relative;
}
.hero__content h1,
.hero__content p
{
color: white;
}
.ciao1{
  display: flex;
  flex-direction: row-reverse;
}
.intro-text{
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
}
.big-text{
    font-size: 70px;
}

.box{
    max-width: 400px;
    width: 100%;
}
.box .search-box{
    position: relative;
    height: 50px;
    max-width: 380px;
    background-color: #01ABE3;
    margin: auto;
    box-shadow: 0 5px 10px rgba(0,0,0,.25) ;
    border-radius: 25px;
}
.search-box input{
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 25px ;
    background-color: #fff;
    outline: none;
    border: none;
    padding-left: 20px;
    font-size: 18px;
}
.search-box .icon{
    position: absolute;
    right: -2px;
    top: 0;
    width: 50px;
    background: #01ABE3;
    height: 100%;
    text-align: center ;
    line-height: 50px;
    color: black;
    font-size: 20px ;
    border-radius: 0 25px 25px 0 ;
}
</style>
