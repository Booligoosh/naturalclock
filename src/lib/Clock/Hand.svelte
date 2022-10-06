<script lang="ts">
  import { timeToPercent } from "../helpers";

  export let clockRadius: number;
  export let time: Date;

  const triangleBaseWidth = 8;
</script>

<polyline
  points={`-${triangleBaseWidth} 0,0 -${clockRadius},${triangleBaseWidth} 0`}
  transform={`rotate(${timeToPercent(time) * 360})`}
  fill="currentColor"
/>
<circle cx={0} cy={0} r={triangleBaseWidth} fill="currentColor" />
