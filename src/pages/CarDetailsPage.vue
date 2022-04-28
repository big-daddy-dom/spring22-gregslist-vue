<template>
  <div class="container-fluid">
    <div v-if="car">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <img
            :src="car.imgUrl"
            :alt="`${car.year} ${car.make} ${car.model}`"
            class="img-fluid"
          />
          <div class="p-2" v-if="car.creatorId === account.id">
            <i
              class="mdi mdi-pencil selectable"
              data-bs-toggle="modal"
              data-bs-target="#edit-car-modal"
            ></i>
            <i class="mdi mdi-delete ms-2 selectable" @click="deleteCar()"></i>
          </div>
          <div class="d-flex justify-content-between p-2">
            <h5>{{ car.year }}</h5>
            <h5>{{ car.make }}</h5>
            <h5>{{ car.model }}</h5>
            <h5>${{ car.price }}</h5>
          </div>
          <div class="d-flex p-2">
            <p>{{ car.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>...Loading</h1>
    </div>
  </div>

  <!-- Edit Car Modal -->
  <Modal id="edit-car-modal">
    <template #modal-title-slot>
      <h3>Edit Car!</h3>
    </template>
    <template #modal-body-slot>
      <CarForm :car="car" />
    </template>
  </Modal>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { carsService } from "../services/CarsService";
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState";
export default {
  setup() {
    // useRoute gives us access to the url and all of its properties
    const route = useRoute();
    // useRouter gives us access to the vue router - ie, router.push
    const router = useRouter();
    onMounted(async () => {
      try {
        AppState.car = null;
        await carsService.getCarById(route.params.id);
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      async deleteCar() {
        try {
          if (await Pop.confirm()) {
            await carsService.deleteCar(route.params.id);
            Pop.toast("Car Delorted!", "success");
            router.push({ name: "CarsPage" });
          }
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
      car: computed(() => AppState.car),
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style lang="scss" scoped></style>
