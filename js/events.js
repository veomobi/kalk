const debug = new Listener(
    "click",
    (ctx)=>{
        ctx.renderObjectValueOnHTML("test");
        ctx.values["test"] *= 2;
        ctx.htmlElement.style.backgroundColor=
        `rgb(${min(Math.sin(ctx.values["test"]) * 255,60)},${min(Math.sin(ctx.values["test"]) * 255,60)},${min(Math.sin(ctx.values["test"]) * 255,60)})`
    }
)