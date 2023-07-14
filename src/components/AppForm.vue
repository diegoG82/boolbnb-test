<template>
    <div class="form-overlay">
        <div class="form-container">
            <h2 class="text-center">Search your apartment</h2>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="address">City or address</label>
                    <input type="text" class="form-control" id="address" placeholder="Insert city or address"
                        v-model="address">
                </div>
                <div class="form-group">
                    <label for="minRooms">Min Rooms:</label>
                    <input type="number" class="form-control" id="minRooms" min="1" v-model="minRooms">
                </div>
                <div class="form-group">
                    <label for="minBeds">Min beds:</label>
                    <input type="number" class="form-control" id="minBeds" min="1" v-model="minBeds">
                </div>
                <div class="form-group">
                    <label for="range">Search Range (km): 20</label>
                    <div>
                        <input class="range_km" type="range" name="range" min="1" max="20" step="1">
                    </div>
                </div>
                <div class="form-group">
                    <label class="mb-1">Services:</label>
                    <div class="row mt-4">
                        <div class="col-3 mb-1" v-for="service in services" :key="service.name">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" :id="service.name"
                                    v-model="selectedServices">
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
    </div>
    <AppForm />
</template>
  
<script>
export default {
    data() {
        return {
            address: '',
            minRooms: '',
            minBeds: '',
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
            ]
        };
    },
    methods: {
        submitForm() {
            console.log('submitForm method called');
            // Logica per la gestione dell'invio della form
            // ...
            // Chiudi la form dopo aver gestito l'invio
            this.$emit('close');
        }
    }
};
</script>
  
<style scoped>
.form-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-container {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 5px;
    max-width: 500px;
}

.range_km {
    width: 50%;
}
</style>
  