

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experience/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.0eb4877d.js","_app/immutable/chunks/scheduler.a7dff244.js","_app/immutable/chunks/index.f6eab506.js"];
export const stylesheets = [];
export const fonts = [];
