<script lang="ts">
  import Clock from "./lib/Clock/Clock.svelte";

  let now = new Date();

  // Update date every 5s
  setInterval(() => (now = new Date()), 5 * 1000);

  let latitude = Number(localStorage.getItem("latitude") ?? undefined);
  let longitude = Number(localStorage.getItem("longitude") ?? undefined);
  let altitude = Number(localStorage.getItem("altitude") ?? undefined);

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      latitude = pos.coords.latitude || 0;
      localStorage.setItem("latitude", latitude.toString());
      longitude = pos.coords.longitude || 0;
      localStorage.setItem("longitude", longitude.toString());
      // Fix wild negative numbers returned by some browsers
      altitude = pos.coords.altitude < -1000 ? 0 : pos.coords.altitude || 0;
      localStorage.setItem("altitude", altitude.toString());
    });
  } else {
    alert("Geolocation is not available");
  }
</script>

<main>
  <div />
  <div>
    {#if !isNaN(latitude) && !isNaN(longitude) && !isNaN(altitude)}
      <Clock {now} {latitude} {longitude} {altitude} />
    {/if}
  </div>
  <div>
    <div class="time">
      {now.toLocaleString({}, { timeStyle: "short", hour12: false })}
    </div>

    <h1 class="title">NaturalClock</h1>
  </div>
</main>

<style lang="scss">
  main {
    flex-grow: 1;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
  .title {
    margin: 0;
    margin-top: 0.3rem;
    font-size: 1.15rem;
    font-weight: 500;
    opacity: 0.5;
  }

  .time {
    font-size: 1.75rem;
    font-weight: 600;
    opacity: 0.7;
  }
</style>
