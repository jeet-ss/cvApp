

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.37507769.js","_app/immutable/chunks/scheduler.a7dff244.js","_app/immutable/chunks/index.f6eab506.js"];
export const stylesheets = [];
export const fonts = [];
