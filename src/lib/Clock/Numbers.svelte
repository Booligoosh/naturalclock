<script lang="ts">
  import { scaleLinear } from "d3-scale";

  const HOURS_IN_DAY = 24;

  export let clockRadius: number;
  export let clockRotation: number;
  export let radialOffset: number;
  export let fontSize: number;
  export let fontWeight: number;
  export let opacity: number;
  export let numbers: number[];

  $: numbersScale = scaleLinear()
    .range([3 * Math.PI, 1 * Math.PI]) // 3π radians -> 1π radians
    .domain([0, HOURS_IN_DAY]);

  $: hypotenuse = clockRadius - radialOffset;

  $: getX = (number) => hypotenuse * Math.sin(numbersScale(number));
  $: getY = (number) => hypotenuse * Math.cos(numbersScale(number));

  // https://stackoverflow.com/a/48260836
</script>

{#each numbers as number}
  <text
    x={getX(number)}
    y={getY(number)}
    fill="hsl(0, 0%, 100%)"
    font-weight={fontWeight}
    font-size={fontSize}
    {opacity}
    text-anchor="middle"
    dominant-baseline="central"
    transform="rotate({-clockRotation}, {getX(number)}, {getY(number)})"
  >
    {number}
  </text>
{/each}
