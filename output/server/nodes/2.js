

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9fc74e03.js","_app/immutable/chunks/scheduler.a7dff244.js","_app/immutable/chunks/index.f6eab506.js"];
export const stylesheets = [];
export const fonts = [];
