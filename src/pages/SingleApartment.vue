<template>
    <div class="hero">
        <div class="hero__content">
            <h1 class="big-text">{{ apartment.name }}</h1>
            <p>{{ apartment.address }} {{ apartment.city }} {{ apartment.state }}</p>
        </div>
        <img id="homehero" src="../assets/img/loft1.jpg" alt="">
    </div>


    <div class="ms-container house mt-4 d-flex">

        <div class=" mt-4 ">
            <div class="details d-flex">
                <p><i class="fa-solid fa-expand"></i> {{ apartment.square_meters }} sqm</p>
                <p><i class="fa-solid fa-bed"></i> {{ apartment.bed_number }}</p>
                <p><i class="fa-solid fa-bath"></i> {{ apartment.bathroom_number }}</p>
                <p><i class="fa-solid fa-euro-sign"></i> {{ apartment.price }} at night</p>
            </div>

            <div class="services mt-4 d-flex "> <button class="btn"><i class="fa-solid fa-wifi"></i> wifi</button>
                <button class="btn"><i class="fa-solid fa-square-parking"></i> Parking</button>
                <button class="btn"><i class="fa-solid fa-person-swimming"></i> Swimming Pool</button>
            </div>


            <div class="description mt-4  d-flex">
                <p>{{ apartment.description }}</p>
            </div>


        </div>




        <div class="contact-us  d-flex flex-column mt-4">
            <form>
                <div>
                    <label for="name" class="form-label">Name</label>
                    <input type="name" class="form-control" id="name" placeholder="Name">
                </div>
                <div>
                    <label for="surname" class="form-label">Surname</label>
                    <input type="Surname" class="form-control" id="surname" placeholder="Surname">
                </div>


                <div>
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Contact Us</button>
            </form>
        </div>

     
    </div>

    <div class="ms-container map mt-4 mb-4">
        <img src="../assets/img/map.png" alt="">

    </div>
</template>
  
<script>
import bolobnbImage from '../assets/img/loft1.jpg';

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
  
<style lang="scss" scoped>
#homehero {
    position: absolute;
    top: 2;
    right: 30;
    min-width: 100%;
    min-height: 100%;
    z-index: 0;
}


.hero {
    position: relative;
    height: 500px;
    display: flex;
    width: 100%;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, .2) rgba(0, 0, 0, 0.9) 70.71%), url() no-repeat center center;
    background-size: cover;
    object-fit: cover;
    overflow: hidden;
}

.hero::after {
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

.hero__content {
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    z-index: 1;
    position: relative;
}

.hero__content h1,
.hero__content p {
    color: white;
}

.ciao1 {
    display: flex;
    flex-direction: row-reverse;
}

.intro-text {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
}

.big-text {
    font-size: 70px;
}


.ms-container {
  
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;

    .services {
        width: 50%;

        .btn {
            background-color: #01abe3;
            color: white;
            border-radius: 20px;
            margin-right: 1rem;
        }
    }

    .house {
        width: 100%;
        height: 150px;
    }

    .details {
        width: 50%;

        p {
            margin-right: 1rem;
        }

        i {
            color: #01abe3;
        }
    }

    .description {
        width: 50%;
        font-size:25px;
    }

    .contact-us {
        width: 40%;
        border: 5px solid #01abe3;
        background-color: white;
        font-size: 1rem;
        border-radius: 30px;
        padding: 2rem;
        // position: relative;
        // bottom:250px
       
    }

    .contact-us .btn{
           background-color: #01abe3 ;
           color: white;
           border: none;
           border-radius: 20px;
        }

}

.map {
    height: 300px;
    position: relative;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}
</style>
