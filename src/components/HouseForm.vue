<template>
    <form @submit.prevent="handleSubmit()">
        <div class="form-group">
            <label for="bedrooms" class="form-label">Bedrooms:</label>
            <input type="number"
            class="form-control"
            id="bedrooms"
            v-model="editable.bedrooms"
            />
            
        </div>
        <div class="form-group">
            <label for="bathrooms" class="form-label">Bathrooms:</label>
            <input 
            type="number"
            class="form-control"
            id="bathrooms"
            v-model="editable.bathrooms"
            />
        </div>
        <div class="form-group"></div>
    </form>
</template>