<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-6">
                <img :src="imagePath" alt="Apartment Image" class="img-fluid">
            </div>
            <div class="col-md-6">
                <div class="card apartment">
                    <div class="card-body">
                        <h3 class="card-title text-uppercase mt-4">{{ apartment.name }}</h3>
                        <p class="card-text">{{ apartment.address }}, {{ apartment.city }}, {{ apartment.state }}</p>
                        <div class="row">
                            <div class="col-6  d-flex details">
                                <p class="mr-4"><i class="fa-solid fa-expand"></i> {{ apartment.square_meters }} sqm</p>
                                <p class="mr-4"><i class="fa-solid fa-bed"></i> {{ apartment.bed_number }}</p>
                                <p><i class="fa-solid fa-bath"></i> {{ apartment.bathroom_number }}</p>
                                <p><i class="fa-solid fa-euro-sign"></i> {{ apartment.price }} at night</p>
                            </div>
                        </div>
                        <div class="mt-2">
                            <p>{{ apartment.description }}</p>
                        </div>
                        <div class="mt-4 d-flex">
                            <button class="btn"><i class="fa-solid fa-wifi"></i> wifi</button>
                            <button class="btn"><i class="fa-solid fa-square-parking"></i> Parking</button>
                            <button class="btn"><i class="fa-solid fa-person-swimming"></i> Swimming Pool</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-4">
                <div class="card">
                    <div class="map_img">
                        <img src="../assets/img/map.png" alt="map_img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import bolobnbImage from '../assets/img/homeloft.jpg';

export default {
    name: 'SingleApartmentPage',
    data() {
        return {
            apartment: {
                name: "Design Club Collection",
                description: "Progettato da architetti di fama internazionale, l'edificio completamente ristrutturato vanta appartamenti con una selezione di iconici elementi di design moderno che uniscono qualità estetica con qualità funzionale e funzionale...",
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
            },
            imagePath: bolobnbImage,
        };
    },
};
</script>
  
<style scoped>
.img-fluid {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
    box-shadow: 0px 0px 0px 5px transparent;
}

.card {
    height: 300px;
    border-radius: 5px;
    border: 1px solid transparent;
    font-size: 0.8rem;
    overflow: hidden;
    transition: border-color 0.3s, transform 0.3s;
}

.card:hover,
.img-fluid:hover {
    border-color: #01ABE3;
    box-shadow: 0px 0px 0px 5px #01ABE3;
    transform: scale(1.05);
}

.card-content {
    /* background-color: var(--card-color); */
    border-radius: inherit;
    display: grid;
    inset: 1px;
    padding: 1em;
    position: absolute;
    transition: background-color 0.3s;
}

.card:hover .card-content {
    background-color: transparent;
}

.card h3 {
    color: #01ABE3;
    margin-top: 1rem;
    transition: color 0.3s;
}



.card-text {
    transition: color 0.3s;
}



.map_img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}

.map_img img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    object-fit: cover;
}

ul {
    padding: none;
}

.btn {
    background-color: #01ABE3;
    color: white;
    border-radius: 15px;
    margin-right: 1rem;
    font-size: 0.7rem;
    border: none;
    pointer-events: none;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #439CB4;
}

.btn:active {
    background-color: #A6C4D2;
}

.details p {
    margin-right: 1rem;
}

.details i {
    color: #01ABE3;
}

.container{
    height: calc(100vh - 275px);
}
.row{
    margin-top: 30px;
}
</style>
