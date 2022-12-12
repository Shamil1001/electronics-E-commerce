<template>
  <div class="category">
    <div class="list-group">
      <button
        type="button"
        class="list-group-item list-group-item-action active"
        aria-current="true"
      >
        Arduinolar
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Sensorlar
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Kondensatorlar
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        LED cyralar
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Tok cesmesi
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Monitorlar
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Klawiaturalar
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Sycanjyklar
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Zaryadniklar
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Driwerler
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Motorlar
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Payatniklar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
};
</script>

<style>
.category {
  width: 20%;
}
.category .list-group .active {
  background-color: #172a4c;
}
</style>
