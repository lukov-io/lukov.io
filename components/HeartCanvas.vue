<template>
  <div class="canvas__wrapper">
    <canvas
      ref="canvas"
      class="canvas"
      width="690"
      height="600"
    />
  </div>
</template>

<script>
export default {
  name: 'HeartCanvas',
  data() {
    return {
      svgElements: [
        { d: 'M1 231L18.5 122V167L1 231Z', fill: '#1A2665', stroke: 'black' },
        { d: 'M18.5 167L1 231L44.5 322L18.5 167Z', fill: '#148898', stroke: 'black' },
        { d: 'M41 323.5L1 231L44.5 322L41 323.5Z', fill: '#434DA7', stroke: 'black' },
        { d: 'M44.5 322L41 323.5L110.5 416.5L44.5 322Z', fill: '#304797', stroke: 'black' },
        { d: 'M84.5 278L242.5 363L113.5 141.5L84.5 278Z', fill: '#107D7D', stroke: 'black' },
        { d: 'M84.5 278L44.5 322L18.5 167L84.5 278Z', fill: '#359180', stroke: 'black' },
        { d: 'M84.5 278L242.5 363L198 457.5L84.5 278Z', fill: '#1D6D72', stroke: 'black' },
        { d: 'M117 426L44.5 322L185.5 489.5L117 426Z', fill: '#2F3463', stroke: 'black' },
        { d: 'M100 41L18.5 121.5V167L113.5 141.5L100 41Z', fill: '#77D9B0', stroke: 'black' },
        { d: 'M100 41L217 25.5L196 70L100 41Z', fill: '#124545', stroke: 'black' },
        { d: 'M113.5 141.5L84.5 278L18.5 167L113.5 141.5Z', fill: '#9CD9BC', stroke: 'black' },
        { d: 'M173.5 18.5L100 41L217 25.5L173.5 18.5Z', fill: '#202658', stroke: 'black' },
        { d: 'M185.5 489.5L44.5 322L198 457.5L185.5 489.5Z', fill: '#372B58', stroke: 'black' },
        { d: 'M196 70L113.5 141.5L100 41L196 70Z', fill: '#225064', stroke: 'black' },
        { d: 'M198 457.5L84.5 278L44.5 322L198 457.5Z', fill: '#1B605C', stroke: 'black' },
        { d: 'M198 457.5L185.5 489.5L320 580.5L328.5 544.5L198 457.5Z', fill: '#3C2266', stroke: 'black' },
        { d: 'M217 25.5L328.5 117L335.5 80.5L217 25.5Z', fill: '#082B07', stroke: 'black' },
        { d: 'M242.5 363L113.5 141.5L334 228L459 326.5L242.5 363Z', fill: '#2A697D', stroke: 'black' },
        { d: 'M328.5 117L334 228L196 70L328.5 117Z', fill: '#4F2A6D', stroke: 'black' },
        { d: 'M328.5 117L196 70L217 25.5L328.5 117Z', fill: '#0E393F', stroke: 'black' },
        { d: 'M328.5 544.5L320 580.5L389.5 581L328.5 544.5Z', fill: '#3C2463', stroke: 'black' },
        { d: 'M334 228L196 70L113.5 141.5L334 228Z', fill: '#432F70', stroke: 'black' },
        { d: 'M334 228L578.5 136L504 84L334 228Z', fill: '#5B3D78', stroke: 'black' },
        { d: 'M335.5 80.5L328.5 117L470.5 17.5L449.5 5.5L335.5 80.5Z', fill: '#3F1D6C', stroke: 'black' },
        { d: 'M345.5 456.5L242.5 363L198 457.5L345.5 456.5Z', fill: '#247769', stroke: 'black' },
        { d: 'M346 456.5L328.5 545L198 457.5L346 456.5Z', fill: '#432561', stroke: 'black' },
        { d: 'M431.5 511.5L328.5 544.5L345.5 456.5L431.5 511.5Z', fill: '#2C1A51', stroke: 'black' },
        { d: 'M431.5 511.5L328.5 544.5L389.5 581L431.5 511.5Z', fill: '#0B0C39', stroke: 'black' },
        { d: 'M459 326.5L242.5 363L346 457L459 326.5Z', fill: '#5B7D7B', stroke: 'black' },
        { d: 'M459 326.5L624 251L518.5 394L459 326.5Z', fill: '#2F0F48', stroke: 'black' },
        { d: 'M470.5 17.5L449.5 5.5L545.5 1.5L470.5 17.5Z', fill: '#2C3A60', stroke: 'black' },
        { d: 'M470.5 17.5L504 84L568 37L470.5 17.5Z', fill: '#4B296E', stroke: 'black' },
        { d: 'M470.5 17.5L328.5 117L334 228L504 84L470.5 17.5Z', fill: '#72508E', stroke: 'black' },
        { d: 'M504 84L578.5 136L568 37L504 84Z', fill: '#52065F', stroke: 'black' },
        { d: 'M518.5 394L345.5 456.5L431.5 512L518.5 394Z', fill: '#310E41', stroke: 'black' },
        { d: 'M520 394.5L459 326.5L345 457L520 394.5Z', fill: '#3A1755', stroke: 'black' },
        { d: 'M545.5 1L470.5 17.5L568 37L545.5 1Z', fill: '#171D4E', stroke: 'black' },
        { d: 'M578.5 136L459 326.5L334 228L578.5 136Z', fill: '#482F68', stroke: 'black' },
        { d: 'M578.5 136L623.5 251.5L662 125L578.5 136Z', fill: '#2A0E40', stroke: 'black' },
        { d: 'M623.5 251.5L578.5 136L459 326.5L623.5 251.5Z', fill: '#351556', stroke: 'black' },
        { d: 'M645.5 61L545 1.5L568 37L645.5 61Z', fill: '#130734', stroke: 'black' },
        { d: 'M646 61L568 37L662 125L646 61Z', fill: '#1D0625', stroke: 'black' },
        { d: 'M662 125L568 37L578.5 136L662 125Z', fill: '#471956', stroke: 'black' },
        {
          d: 'M662 125L623.5 251.5L431 512L389.5 580.5L485 515L577 429L671 273L689 166L646.5 63L662 125Z',
          fill: '#2C0B39',
          stroke: 'black',
        },
      ],
      scale: 0.95,
      pulse: { width: 0.5, growing: true },
      currentHoveredElement: null,
      originalColors: {},
    }
  },
  mounted() {
    this.svgElements.forEach((element) => {
      this.originalColors[element.d] = { fill: element.fill, stroke: element.stroke }
    })
    this.drawElements()
    this.$refs.canvas.addEventListener('mousemove', this.handleMouseMove)
    this.animatePulse()
  },
  beforeUnmount() {
    if (this.$refs.canvas) {
      this.$refs.canvas.removeEventListener('mousemove', this.handleMouseMove)
    }
  },
  methods: {
    parseSVGPath(path) {
      const commands = path.match(/[MLHVCSQTZ][^MLHVCSQTZ]*/ig)
      const points = []
      let currentPoint = { x: 0, y: 0 }

      commands.forEach((command) => {
        const type = command[0]
        const values = command.slice(1).trim().split(/[\s,]+/).map(parseFloat)

        switch (type) {
          case 'M':
          case 'L':
            for (let i = 0; i < values.length; i += 2) {
              currentPoint = { x: values[i], y: values[i + 1] }
              points.push({ ...currentPoint })
            }
            break
          case 'H':
            values.forEach((value) => {
              currentPoint.x = value
              points.push({ ...currentPoint })
            })
            break
          case 'V':
            values.forEach((value) => {
              currentPoint.y = value
              points.push({ ...currentPoint })
            })
            break
          case 'Z':
            points.push(points[0])
            break
        }
      })

      return points
    },

    getMousePos(event) {
      const rect = this.$refs.canvas.getBoundingClientRect()
      const scaleX = this.$refs.canvas.width / rect.width
      const scaleY = this.$refs.canvas.height / rect.height

      return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY,
      }
    },

    isPointInPolygon(point, polygon) {
      const x = point.x, y = point.y
      let inside = false

      // алгоритм ray-casting
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i].x, yi = polygon[i].y
        const xj = polygon[j].x, yj = polygon[j].y

        const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)

        if (intersect) inside = !inside
      }

      return inside
    },

    getHoveredElement(mousePos) {
      for (const element of this.svgElements) {
        const points = this.parseSVGPath(element.d)

        if (this.isPointInPolygon(mousePos, points)) {
          return element
        }
      }

      return null
    },

    drawElements() {
      const ctx = this.$refs.canvas.getContext('2d')
      ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)

      ctx.save()
      ctx.translate(this.$refs.canvas.width / 2, this.$refs.canvas.height / 2)
      ctx.scale(this.scale, this.scale)
      ctx.translate(-this.$refs.canvas.width / 2, -this.$refs.canvas.height / 2)

      this.svgElements.forEach((element) => {
        ctx.fillStyle = element.fill
        ctx.strokeStyle = element.stroke
        const points = this.parseSVGPath(element.d)
        ctx.beginPath()
        points.forEach((point, index) => {
          if (index === 0) {
            ctx.moveTo(point.x, point.y)
          }
          else {
            ctx.lineTo(point.x, point.y)
          }
        })

        ctx.closePath()
        ctx.fill()
        ctx.lineJoin = 'round'
        ctx.lineWidth = this.pulse.width
        ctx.stroke()
      })

      ctx.restore()
    },

    handleMouseMove(event) {
      const mousePos = this.getMousePos(event)
      const hoveredElement = this.getHoveredElement(mousePos)

      if (this.currentHoveredElement !== hoveredElement) {
        if (this.currentHoveredElement) {
          this.animateColorChange(this.currentHoveredElement.fill, this.originalColors[this.currentHoveredElement.d].fill, Date.now(), this.currentHoveredElement)
        }

        this.currentHoveredElement = hoveredElement

        if (hoveredElement) {
          this.animateColorChange(this.originalColors[hoveredElement.d].fill, this.pSBC(0.1, this.originalColors[hoveredElement.d].fill), Date.now(), hoveredElement)
        }
      }

      this.drawElements()
    },

    animateColorChange(startColor, endColor, startTime, element) {
      const animate = () => {
        const currentTime = Date.now()
        const progress = Math.min((currentTime - startTime) / 750, 1)

        element.fill = this.pSBC(progress, startColor, endColor)
        this.drawElements()

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    },

    animatePulse() {
      const animate = () => {
        if (this.pulse.growing) {
          if (this.pulse.width < 3) {
            this.pulse.width += 0.05
            this.scale += 0.0005
          }
          else {
            this.pulse.growing = false
          }
        }
        else {
          if (this.pulse.width > 0.5) {
            this.pulse.width -= 0.05
            this.scale -= 0.0005
          }
          else {
            this.pulse.growing = true
          }
        }

        this.drawElements()
        requestAnimationFrame(animate)
      }

      requestAnimationFrame(animate)
    },

    /* eslint-disable 'prefer-const' */
    pSBC(p, c0, c1, l) {
      let r, g, b, P, f, t, h, m = Math.round, a = typeof (c1) == 'string'
      if (typeof (p) != 'number' || p < -1 || p > 1 || typeof (c0) != 'string' || (c0[0] !== 'r' && c0[0] !== '#') || (c1 && !a)) return null
      const i = parseInt
      const parseColor = (d) => {
        let n = d.length, x = {}
        if (n > 9) {
          [r, g, b, a] = d.split(','), n = d.length
          if (n < 3 || n > 4) return null
          x.r = i(r[3] === 'a' ? r.slice(5) : r.slice(4)), x.g = i(g), x.b = i(b), x.a = a ? parseFloat(a) : -1
        }
        else {
          if (n === 8 || n === 6 || n < 4) return null
          if (n < 6) d = '#' + d[1] + d[1] + d[2] + d[2] + d[3] + d[3]
          d = i(d.slice(1), 16)
          if (n === 9 || n === 5) x.r = (d >> 24) & 255, x.g = (d >> 16) & 255, x.b = (d >> 8) & 255, x.a = m((d & 255) / 0.255) / 1000
          else x.r = d >> 16, x.g = (d >> 8) & 255, x.b = d & 255, x.a = -1
        }
        return x
      }
      if (!this.pSBCr) this.pSBCr = parseColor
      h = c0.length > 9, h = a ? c1.length > 9 ? true : c1 === 'c' ? !h : false : h, f = this.pSBCr(c0), P = p < 0, t = c1 && c1 !== 'c'
        ? this.pSBCr(c1)
        : P ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 }, p = P ? p * -1 : p, P = 1 - p
      if (!f || !t) return null
      if (l) r = m(P * f.r + p * t.r), g = m(P * f.g + p * t.g), b = m(P * f.b + p * t.b)
      else r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5), g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5), b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5)
      a = f.a, t = t.a, f = a >= 0 || t >= 0, a = f ? a < 0 ? t : t < 0 ? a : a * P + t * p : 0
      if (h) return 'rgb' + (f ? 'a(' : '(') + r + ',' + g + ',' + b + (f ? ',' + m(a * 1000) / 1000 : '') + ')'
      else return '#' + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2)
    },
    /* eslint-enable 'prefer-const' */
  },
}
</script>

<style scoped lang="scss">
$heart-width: max(200px, 30vw);
$heart-width-md: max(200px, 50vw);

.canvas__wrapper {
  width: $heart-width;

  @media #{$md} {
    width: $heart-width-md;
  }

  .canvas {
    width: 100%;
    aspect-ratio: 1.1 / 1;
  }
}
</style>
