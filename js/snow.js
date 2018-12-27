var canvasBgImg = {
            start: function () {
                this.canvas = document.getElementById('canvas')
                this.ctx = this.canvas.getContext("2d")
                this.canvas.width = window.innerWidth
                this.canvas.height = window.innerHeight
                this.starList = []
            },
            drawLine: function (ctx, x1, y1, x2, y2) {
                ctx.beginPath()
                ctx.strokeStyle = '#ffffff'
                ctx.lineTo(x1, y1)
                ctx.lineTo(x2, y2)
                ctx.stroke()
            },
            canvasSingleSnow: function (snowSize) {
                var singleSnow = document.createElement('canvas'),
                    ctxSingle = singleSnow.getContext('2d')
                singleSnow.setAttribute('width', snowSize*2)
                singleSnow.setAttribute('height', snowSize*2)
                for (var i = 0; i < 6; i++) {
                    ctxSingle.save()
                    ctxSingle.translate(snowSize, snowSize)
                    ctxSingle.rotate(Math.PI * 2 * i / 6)
                    this.drawLine(ctxSingle, 0, 0, snowSize, 0)
                    ctxSingle.restore()
                }
                return singleSnow
            },
            canvasAllSnow: function (centerSnow) {
                var canvasSnow = document.createElement('canvas'),
                    ctxSnow = canvasSnow.getContext('2d'),
                    bigSnow = this.canvasSingleSnow(centerSnow),
                    smallSnow = this.canvasSingleSnow(centerSnow/3),
                    sizeSnow = centerSnow * 3/5,
                    rSnow = centerSnow - sizeSnow/2
                canvasSnow.setAttribute('width', centerSnow * 2)
                canvasSnow.setAttribute('height', centerSnow * 2)
                ctxSnow.drawImage(bigSnow, 0, 0, bigSnow.width, bigSnow.height, 0, 0, centerSnow*2, centerSnow*2)
                for(var i = 0; i < 6; i++){
                    ctxSnow.save()
                    ctxSnow.translate(centerSnow, centerSnow)
                    ctxSnow.rotate(Math.PI*2 * i/6)
                    ctxSnow.drawImage(smallSnow, 0, 0, smallSnow.width, smallSnow.height, rSnow - sizeSnow/2, -sizeSnow/2, sizeSnow, sizeSnow)
                    ctxSnow.restore()
                }
                return canvasSnow
            },
            init: function () {
                this.start()
                for (var i = 0; i < 300; i++) {
                    this.starList.push({
                        drawFunc: this.canvasAllSnow(15),
                        width: Math.random()*this.canvas.width,
                        height: Math.random()*this.canvas.height,
                        speed: Math.random()*1.5 + .5,
                        scale: Math.random()*12 + 5,
                        angel: 0
                    })
                }
                var self = this,
                    loop = function () {
                        self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.width)
                        for (var i = 0; i < 300; i++) {
                            self.ctx.save()
                            self.starList[i].height = self.starList[i].height + self.starList[i].speed
                            self.starList[i].angel += 2
                            self.ctx.translate(self.starList[i].width, self.starList[i].height)
                            self.ctx.rotate(self.starList[i].angel * Math.PI / 360)
                            self.ctx.translate(-self.starList[i].width, -self.starList[i].height)
                            self.ctx.drawImage(self.starList[i].drawFunc, 0, 0,
                                self.starList[i].drawFunc.width, self.starList[i].drawFunc.height,
                                self.starList[i].width - self.starList[i].scale/2, self.starList[i].height - self.starList[i].scale/2,
                                self.starList[i].scale, self.starList[i].scale)
                            if (self.starList[i].height > self.canvas.height) {
                                self.starList[i] = Object.assign(self.starList[i], {
                                    height: -self.starList[i].scale,
                                    width: Math.random()*this.canvas.width
                                })
                            }
                            self.ctx.restore()
                        }
                        requestAnimationFrame(loop)
                    }
                requestAnimationFrame(loop)
            }
        }
        canvasBgImg.init()