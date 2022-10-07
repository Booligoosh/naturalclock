<script lang="ts">
  import { timeToPercent } from "../helpers";

  export let clockRadius: number;
  export let time: Date;

  const triangleBaseWidth = 4;
  const extrusionLength = 20;
</script>

<polyline
  points={`-${triangleBaseWidth} 0,0 -${clockRadius},${triangleBaseWidth} 0`}
  transform={`rotate(${timeToPercent(time) * 360})`}
  fill="currentColor"
/>
<polyline
  points={`${triangleBaseWidth} ${extrusionLength}, -${triangleBaseWidth} ${extrusionLength},-${triangleBaseWidth} 0,${triangleBaseWidth} 0`}
  transform={`rotate(${timeToPercent(time) * 360})`}
  fill="currentColor"
/>
<circle cx={0} cy={0} r={2 * triangleBaseWidth} fill="currentColor" />
