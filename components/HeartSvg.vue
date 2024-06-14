<template>
  <div
    class="heart"
    @mousemove="onMouseMove"
  >
    <svg
      ref="heartSvg"
      class="heart__svg"
      viewBox="0 0 690 582"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        v-for="(piece, index) in pieces"
        :key="index"
        :d="piece.d"
        :fill="piece.fill"
        :class="['heart__fragment', { hovered: isPieceHovered(index), pulsating: isPieceAdjacent(index) }]"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HeartSvg',
  data() {
    return {
      pieces: [
        { d: 'M578.5 136L623.5 251.5L662 125L578.5 136Z', fill: '#2A0E40', neighbors: [4, 2, 5, 6, 7, 8, 9] },
        { d: 'M518.5 395L345 456.5L432 512.5L518.5 395Z', fill: '#2C2C2C', neighbors: [2, 3, 2, 5, 6, 7, 8, 9] },
        { d: 'M520 394.5L459 326.5L345 457L520 394.5Z', fill: '#3A1755', neighbors: [1, 3, 2, 5, 6, 7, 8, 9] },
        { d: 'M459 326.5L624 251L518.5 394L459 326.5Z', fill: '#2F0F48', neighbors: [2, 4, 1, 2, 5, 6, 7, 8, 9] },
        { d: 'M623.5 251.5L578.5 136L459 326.5L623.5 251.5Z', fill: '#351556', neighbors: [3, 0, 2, 2, 5, 6, 7, 8, 9] },
        { d: 'M662 125L568 37L578.5 136L662 125Z', fill: '#471956', neighbors: [0, 4] },
        { d: 'M117 426L44.5 322L185.5 489.5L117 426Z', fill: '#2F3463', neighbors: [7, 9] },
        { d: 'M44.5 322L41 323.5L110.5 416.5L44.5 322Z', fill: '#304797', neighbors: [6, 8] },
        { d: 'M18.5 167L1 231L44.5 322L18.5 167Z', fill: '#148898', neighbors: [7, 9] },
        { d: 'M198 457.5L84.5 278L44.5 322L198 457.5Z', fill: '#1B605C', neighbors: [8, 10] },
        { d: 'M84.5 278L242.5 363L198 457.5L84.5 278Z', fill: '#1D6D72', neighbors: [9, 11] },
        { d: 'M242.5 363L113.5 141.5L334 228L459 326.5L242.5 363Z', fill: '#2A697D', neighbors: [10, 12, 13] },
        { d: 'M328.5 117L334 228L196 70L328.5 117Z', fill: '#4F2A6D', neighbors: [11, 14] },
        { d: 'M328.5 117L196 70L217 25.5L328.5 117Z', fill: '#0E393F', neighbors: [13, 15] },
        { d: 'M100 41L18.5 121.5V167L113.5 141.5L100 41Z', fill: '#77D9B0', neighbors: [12, 16] },
        { d: 'M100 41L217 25.5L196 70L100 41Z', fill: '#124545', neighbors: [15, 17] },
        { d: 'M196 70L113.5 141.5L100 41L196 70Z', fill: '#225064', neighbors: [16, 18] },
        { d: 'M334 228L196 70L113.5 141.5L334 228Z', fill: '#432F70', neighbors: [17, 19] },
        { d: 'M1 231L18.5 122V167L1 231Z', fill: '#1A2665', neighbors: [18, 20] },
        { d: 'M113.5 141.5L84.5 278L18.5 167L113.5 141.5Z', fill: '#9CD9BC', neighbors: [19, 21] },
        { d: 'M84.5 278L44.5 322L18.5 167L84.5 278Z', fill: '#359180', neighbors: [20, 22] },
        { d: 'M173.5 18.5L100 41L217 25.5L173.5 18.5Z', fill: '#202658', neighbors: [21, 23] },
        { d: 'M217 25.5L328.5 117L335.5 80.5L217 25.5Z', fill: '#082B07', neighbors: [22, 24] },
        { d: 'M84.5 278L242.5 363L113.5 141.5L84.5 278Z', fill: '#107D7D', neighbors: [23, 25] },
        { d: 'M185.5 489.5L44.5 322L198 457.5L185.5 489.5Z', fill: '#372B58', neighbors: [24, 26] },
        { d: 'M345.5 456.5L242.5 363L198 457.5L345.5 456.5Z', fill: '#247769', neighbors: [25, 27] },
        { d: 'M346 456.5L328.5 545L198 457.5L346 456.5Z', fill: '#432561', neighbors: [26, 28] },
        { d: 'M459 326.5L242.5 363L346 457L459 326.5Z', fill: '#5B7D7B', neighbors: [27, 29] },
        { d: 'M198 457.5L185.5 489.5L320 580.5L328.5 544.5L198 457.5Z', fill: '#3C2266', neighbors: [28, 30] },
        { d: 'M41 323.5L1 231L44.5 322L41 323.5Z', fill: '#434DA7', neighbors: [29, 31] },
        { d: 'M328.5 544.5L320 580.5L389.5 581L328.5 544.5Z', fill: '#3C2463', neighbors: [30, 32] },
        { d: 'M431.5 511.5L328.5 544.5L345.5 456.5L431.5 511.5Z', fill: '#2C1A51', neighbors: [31, 33] },
        { d: 'M662 125L623.5 251.5L431 512L389.5 580.5L485 515L577 429L671 273L689 166L646.5 63L662 125Z', fill: '#2C0B39', neighbors: [32, 34] },
        { d: 'M518.5 394L345.5 456.5L431.5 512L518.5 394Z', fill: '#310E41', neighbors: [33, 35] },
        { d: 'M431.5 511.5L328.5 544.5L389.5 581L431.5 511.5Z', fill: '#0B0C39', neighbors: [34, 36] },
        { d: 'M646 61L568 37L662 125L646 61Z', fill: '#1D0625', neighbors: [35, 37] },
        { d: 'M645.5 61L545 1.5L568 37L645.5 61Z', fill: '#130734', neighbors: [36, 38] },
        { d: 'M545.5 1L470.5 17.5L568 37L545.5 1Z', fill: '#171D4E', neighbors: [37, 39] },
        { d: 'M470.5 17.5L449.5 5.5L545.5 1.5L470.5 17.5Z', fill: '#2C3A60', neighbors: [38, 40] },
        { d: 'M335.5 80.5L328.5 117L470.5 17.5L449.5 5.5L335.5 80.5Z', fill: '#3F1D6C', neighbors: [39, 41] },
        { d: 'M470.5 17.5L504 84L568 37L470.5 17.5Z', fill: '#4B296E', neighbors: [40, 42] },
        { d: 'M504 84L578.5 136L568 37L504 84Z', fill: '#52065F', neighbors: [41, 43] },
        { d: 'M470.5 17.5L328.5 117L334 228L504 84L470.5 17.5Z', fill: '#72508E', neighbors: [42, 44] },
        { d: 'M334 228L578.5 136L504 84L334 228Z', fill: '#5B3D78', neighbors: [43, 45] },
        { d: 'M578.5 136L459 326.5L334 228L578.5 136Z', fill: '#482F68', neighbors: [44, 46] },
      ],
      hoveredPieceIndex: null,
    }
  },

  methods: {
    onMouseMove(event) {
      const svg = this.$refs.heartSvg

      if (!svg) return

      const point = svg.createSVGPoint()
      point.x = event.clientX
      point.y = event.clientY
      const cursorPoint = point.matrixTransform(svg.getScreenCTM().inverse())

      this.hoveredPieceIndex = this.getPieceUnderCursor(cursorPoint)
    },

    getPieceUnderCursor(cursorPoint) {
      const svg = this.$refs.heartSvg

      if (!svg) return null

      for (let i = 0; i < svg.children.length; i++) {
        const path = svg.children[i]

        if (path && path.isPointInFill(cursorPoint)) {
          return i
        }
      }
      return null
    },

    isPieceHovered(index) {
      const svg = this.$refs.heartSvg

      if (!svg) return false

      const cursorPoint = this.getCursorPoint()
      const path = svg.children[index]
      return path && path.isPointInFill(cursorPoint)
    },

    isPieceAdjacent(index) {
      if (this.hoveredPieceIndex === null) return false

      const neighbors = this.pieces[this.hoveredPieceIndex].neighbors
      return neighbors.includes(index)
    },

    getCursorPoint(event) {
      const svg = this.$refs.heartSvg

      if (!svg) return null

      const point = svg.createSVGPoint()
      point.x = event.clientX
      point.y = event.clientY

      return point.matrixTransform(svg.getScreenCTM().inverse())
    },
  },
}
</script>

<style scoped lang="scss">
$heart-width: max(200px, 30vw);

.heart {
  width: $heart-width;

  &__svg {
    width: 100%;
    height: auto;
  }

  &__fragment {
    transition: fill 0.3s;

    &.pulsating {
      animation: pulsate 1s infinite;
    }

    &.hovered {
      fill: red;
    }
  }
}

@keyframes pulsate {
  0% {
    fill-opacity: 1;
  }

  50% {
    fill-opacity: 0.5;
  }

  100% {
    fill-opacity: 1;
  }
}
</style>
