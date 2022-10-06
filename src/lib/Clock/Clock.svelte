<script lang="ts">
  import { getTimes } from "suncalc";
  import { timeToPercent } from "../helpers";
  import Hand from "./Hand.svelte";
  import Phase from "./Phase.svelte";
  import Ticks from "./Ticks.svelte";

  let clockRadius = 200;
  let margin = 0;
  let width = (clockRadius + margin) * 2;
  let height = (clockRadius + margin) * 2;

  let times = getTimes(
    new Date(),
    localStorage.lat,
    localStorage.lon,
    localStorage.alt
  );

  let rotation = timeToPercent(times.solarNoon) * -360;
  let now = new Date();
</script>

<svg {width} {height} style="filter: drop-shadow(0 6px 4px hsl(0, 0%, 9%))">
  <g
    id="clock-face"
    transform={`translate(${clockRadius + margin},${
      clockRadius + margin
    }) rotate(${rotation})`}
    color="white"
  >
    <g class="phases">
      <Phase
        start={times.sunset}
        end={times.sunrise}
        fill="#4d4d4d"
        {clockRadius}
      />
      <Phase start={times.dusk} end={times.dawn} fill="#333333" {clockRadius} />
      <Phase
        start={times.nauticalDusk}
        end={times.nauticalDawn}
        fill="#1a1a1a"
        {clockRadius}
      />
      <Phase
        start={times.night}
        end={times.nightEnd}
        fill="#000000"
        {clockRadius}
      />
      <Phase
        start={times.sunrise}
        end={times.solarNoon}
        fill="#757575"
        {clockRadius}
      />
      <Phase
        start={times.solarNoon}
        end={times.sunset}
        fill="#666666"
        {clockRadius}
      />
    </g>
    <g class="ticks" opacity={0.5}>
      <Ticks numTicks={24 * 4} tickLength={10} {clockRadius} />
      <Ticks numTicks={24} tickLength={20} {clockRadius} />
      <Ticks numTicks={4} tickLength={40} {clockRadius} />
    </g>
    <Hand {clockRadius} time={now} />
  </g>
</svg>