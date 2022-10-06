<script lang="ts">
  import { scaleLinear } from "d3-scale";
  import { range } from "d3-array";

  export let numTicks: number;
  export let tickLength: number;
  export let clockRadius: number;
  export let strokeWidth: number;

  $: ticksScale = scaleLinear().range([0, 360]).domain([0, numTicks]);
  $: ticksRange = range(numTicks);
</script>

{#each ticksRange as tickValue}
  <line
    x1={0}
    x2={0}
    y1={clockRadius}
    y2={clockRadius - tickLength}
    transform={`rotate(${ticksScale(tickValue)})`}
    stroke-width={strokeWidth}
    stroke="currentColor"
  />
{/each}
