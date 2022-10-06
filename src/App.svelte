<script lang="ts">
  import Clock from "./lib/Clock/Clock.svelte";

  let latitude = Number(localStorage.getItem("latitude") ?? undefined);
  let longitude = Number(localStorage.getItem("longitude") ?? undefined);
  let altitude = Number(localStorage.getItem("altitude") ?? undefined);

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      latitude = pos.coords.latitude;
      localStorage.setItem("latitude", (latitude || 0).toString());
      longitude = pos.coords.longitude;
      localStorage.setItem("longitude", (longitude || 0).toString());
      altitude = pos.coords.altitude;
      localStorage.setItem("altitude", (altitude || 0).toString());
    });
  } else {
    alert("Geolocation is not available");
  }
</script>

<main>
  {#if !isNaN(latitude) && !isNaN(longitude) && !isNaN(altitude)}
    <Clock {latitude} {longitude} {altitude} />
  {/if}
  <div class="footer">
    <h1 class="title">NaturalClock</h1>
    <div class="time">
      {new Date().toLocaleString({}, { timeStyle: "short", hour12: false })}
    </div>
    <div class="credit">
      Built by <a href="https://ethan.link" target="_blank">Ethan</a>
    </div>
  </div>
</main>

<style lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    display: grid;
    align-items: flex-end;
    grid-template-columns: 1fr 1fr 1fr;
    line-height: 1;
    opacity: 0.7;

    .title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .time {
      font-size: 2.5rem;
      font-weight: 900;
      text-align: center;
    }

    .credit {
      text-align: right;
    }
  }
</style>
