<script lang="ts">
  export let start: Date;
  export let end: Date;
  export let clockRadius: number;
  export let fill: string;

  import { arc } from "d3-shape";
  import { timeToPercent } from "../helpers";

  const rev = 2 * Math.PI;
  const arcGenerator = arc();

  $: startAngle = timeToPercent(start) * rev;
  $: endAngle = timeToPercent(end) * rev;

  $: arcPath = arcGenerator({
    innerRadius: 0,
    outerRadius: clockRadius,
    startAngle: startAngle > endAngle ? startAngle - rev : startAngle,
    endAngle: endAngle,
  });
</script>

<path d={arcPath} {fill} />
