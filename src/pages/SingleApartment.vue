<template>
    <div class="hero">
        <div class="ms-container hero__content mt-4">
            <h1 class="big-text">{{ apartment.name }}</h1>
            <p>{{ apartment.address }}, {{ apartment.city }} </p>
        </div>
        <img id="homehero" :src="imagePath" alt="">
    </div>

    <div class="ms-container mt-4">
        <div class="row">
            <div class="col-md-8">
                <div class="house">
                    <div class="details d-flex mt-4">
                        <p><i class="fa-solid fa-expand m-1"></i>{{ apartment.square_meters }} sqm</p>
                        <p><i class="fa-solid fa-bed m-1"></i>{{ apartment.bed_number }}</p>
                        <p><i class="fa-solid fa-bath m-1"></i>{{ apartment.bathroom_number }}</p>
                        <p><i class="fa-solid fa-euro-sign m-1"></i>{{ apartment.price }} per night</p>
                    </div>

                    <div class="services mt-4">
                        <button class="btn m-2"><i class="fa-solid fa-wifi"></i>wifi</button>
                        <button class="btn m-2"><i class="fa-solid fa-square-parking"></i>parking</button>
                        <button class="btn m-2"><i class="fa-solid fa-person-swimming"></i>swimming pool</button>
                    </div>

                    <div class="description mt-4">
                        <h2 class="mb-2 m-2">About the apartment:</h2>
                        <p class="m-2">{{ apartment.description }}</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="contact-us mt-4">
                    <form @submit="submitForm">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Name"
                                required >
                        </div>
                        <div class="mb-3">
                            <label for="surname" class="form-label">Surname</label>
                            <input type="text" v-model="form.surname" class="form-control" id="surname"
                                placeholder="Surname" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" v-model="form.email" class="form-control" id="email"
                                placeholder="name@example.com" required>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea v-model="form.message" class="form-control" id="message" rows="3" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Contact Us</button>
                    </form>
                </div>


            </div>


        </div>

        <div class="row mt-2">
            <div class="col-md-12">
                <div class="map mt-4 mb-4">
                    <img :src="mapImage" alt="Map">
                </div>
            </div>
        </div>
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
                description: "Designed by internationally renowned architects, the completely renovated building features apartments with a selection of iconic modern design elements that combine aesthetic quality with functional functionality...",
                square_meters: 100,
                bed_number: 3,
                bathroom_number: 2,
                address: "Via Nazario Sauro, 25",
                city: "Bologna",
                state: "Italy",
                latitude: 44.49801,
                longitude: 11.33979,
                price: 500.0,
            },
            imagePath: bolobnbImage,
            form: {
                name: "",
                surname: "",
                email: "",
                message: ""
            }
        };
    },
    computed: {
        mapImage() {
            return `../assets/img/map.png?lat=${this.apartment.latitude}&lon=${this.apartment.longitude}`;
        }
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            // You can access the form data using this.form object
            console.log("Form submitted:", this.form);
        }
    }
};
</script>
    
<style scoped>
body {
    background: grey;
}

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
    /* border: 1px solid white; */
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

.intro-text {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
}

.big-text {
    font-size: 70px;
}

.ms-container {
    width: 70%;
    margin: 0 auto;
    /* border: 1px solid black; */
}

.ms-container .house {
    width: 70%;
}

.ms-container .details {
    width: 70%;
}

.ms-container .details p {
    margin-right: 1rem;
}

.ms-container .details i {
    color: #01abe3;
}

.ms-container .services {
    width: 70%;
}

.ms-container .services .btn {
    background-color: #01abe3;
    font-size: 1rem;
    color: white;
    border-radius: 20px;
    margin-right: 1rem;
}

.ms-container .description {
    width: 100%;
    font-size: 20px;
    margin-bottom: 2rem;
    /* border: 1px solid black; */
}

.ms-container .map {
    height: 300px;
    border: 5px solid #01abe3;
    border-radius: 15px;
    margin-top: 2rem;
}

.ms-container .map img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.ms-container .contact-us {
    margin-top: 2rem;
    width: 70%;
    padding: 1rem;
    border: 5px solid #01abe3;
    border-radius: 15px;
    background-color: white;
}

.ms-container .contact-us .btn {
    background-color: #01abe3;
    color: white;
    border: none;
    margin-right: 1rem;
}

@media (max-width: 810px) {
    .hero {
        height: 300px;
    }

    .big-text {
        font-size: 40px;
    }

    .ms-container .map {
        height: 200px;
    }
    
    .ms-container {
        width: 90%;
    }

    .ms-container .house,
    .ms-container .details,
    .ms-container .services,
    .ms-container .description,
    .ms-container .contact-us {
        width: 100%;
    }
}

@media (max-width: 428px) {
    .hero {
        height: 200px;
    }

    .big-text {
        font-size: 30px;
    }

    .ms-container .map {
        height: 150px;
    }

    .ms-container {
        width: 90%;
    }

    .ms-container .house,
    .ms-container .details,
    .ms-container .services,
    .ms-container .description,
    .ms-container .contact-us {
        width: 100%;
        font-size: 0.7rem;
    }

    .ms-container .services .btn {
        font-size: 0.6rem;
        padding: 0.4rem;
        margin-right: 0.5rem;
    }

    .ms-container .contact-us .btn {
        font-size: 0.6rem;
        padding: 0.5rem;
        margin-right: 0.5rem;
    }
}

</style>
