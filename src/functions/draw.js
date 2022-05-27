import * as d3 from "d3";

const draw = (ctx) => {

    ctx.lineCap = "round";
  
    ctx.canvas.style.touchAction = "none"; // ignore native panning and zooming
    ctx.canvas.style.border = "dotted 1px gray";
  
    const curve = d3.line().curve(d3.curveCatmullRom).context(ctx);
  
    let offset;
    const lastEvent = {};
    ctx.canvas.addEventListener(
      "pointerdown",
      ({ pointerId, clientX, clientY, pressure }) => {
        offset = ctx.canvas.getBoundingClientRect();
        lastEvent[pointerId] = [[clientX - offset.x, clientY - offset.y]];
        ctx.canvas.setPointerCapture(pointerId);
      }
    );
    ctx.canvas.addEventListener(
      "pointermove",
      ({ pointerId, clientX, clientY, pressure, width }) => {
        if (!lastEvent[pointerId]) return;
        lastEvent[pointerId].push([clientX - offset.x, clientY - offset.y]);
        ctx.beginPath();
        curve(lastEvent[pointerId]);
        ctx.stroke();
      }
    );
    ctx.canvas.addEventListener(
      "pointerup",
      ({ pointerId }) => {
        lastEvent[pointerId] = null;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }
    );
  
    //clear;
  
    return ctx.canvas;
  }

export default draw;