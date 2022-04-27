<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2">

            </div>
        </div>
        <div class="row p-2">
            <House v-for="h in houses" :key="h.id" :house="h" />
        </div>
    </div>

    <Modal id="create-house-modal">
        <template #modal-title-slot>
            <h3>Create A house dammit</h3>
        </template>
       <template #modal-body-slot>
              <HouseForm />
          </template>   
    </Modal>           
           
</template>

<script>
// REVIEW what is mounted
import{ computed, onMounted} from "@vue/runtime-core";
import {housesService} from "../services/HousesService"
export default {
    
}
</script>