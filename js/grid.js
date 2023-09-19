const c1 = new Component("#c1",debug,{test:1},"c1");
const c2 = new Component("#c2",debug,{test:2},"c2");
const c3 = new Component("#c3",debug,{test:3},"c3");

const c4 = new Component("#c4",debug,{test:4},"c4");
const c5 = new Component("#c5",debug,{test:5},"c5");
const c6 = new Component("#c6",debug,{test:6},"c6");

const c7 = new Component("#c7",debug,{test:7},"c7");
const c8 = new Component("#c8",debug,{test:8},"c8");
const c9 = new Component("#c9",debug,{test:9},"c9");

const Grid = new ComponentManager();

Grid.add(c1).add(c2).add(c3).add(c4).add(c5).add(c6).add(c7).add(c8).add(c9);