<script lang="ts">
  import Svelvet from "svelvet"
  import type { Node, Edge } from "svelvet"
  import Drawcard from "$lib/components/draw-components/drawcard.svelte"

  const initialNodes: Node[] = [
    {
      id: 1,
      position: { x: 200, y: 50 },
      data: { label: "Input Node" },
      width: 175,
      height: 40,
      bgColor: "white",
    },
    {
      id: 2,
      position: { x: 25, y: 150 },
      data: { label: "Option #1" },
      width: 175,
      height: 40,
      bgColor: "#B8FFC6",
      borderColor: "transparent",
    },
    {
      id: 3,
      position: { x: 375, y: 150 },
      data: { label: "Option #2" },
      width: 175,
      height: 40,
      bgColor: "#FFB8B8",
      borderColor: "transparent",
    },
    {
      id: 4,
      position: { x: 400, y: 130 },
      data: { custom: Drawcard },
      width: 200,
      height: 300,
      borderColor: "transparent",
      borderRadius: 12,
    },
    {
      id: 5,
      position: { x: 400, y: 130 },
      data: { custom: Drawcard },
      width: 200,
      height: 300,
      borderColor: "transparent",
      borderRadius: 12,
      targetPosition: "right",
      sourcePosition: "left",
    },
  ]
  const initialEdges: Edge[] = [
    { id: "e1-2", source: 1, target: 2, label: " YES ", labelBgColor: "transparent", labelTextColor: "yellow" },
    { id: "e1-3", source: 1, target: 3, label: " NO ", labelBgColor: "transparent", labelTextColor: "yellow" },
    { id: "e1-4", source: 1, target: 4, label: " MAYBE ", labelBgColor: "transparent", labelTextColor: "yellow" },
    { id: "e2-4", source: 4, target: 5, label: " YES ", labelBgColor: "transparent", labelTextColor: "yellow" },
  ]
</script>

<div class="overflow-hidden">
  <Svelvet bgColor={"transparent"} width={window.innerWidth} height={window.innerHeight} nodes={initialNodes} edges={initialEdges} nodeLink nodeCreate background />
</div>
