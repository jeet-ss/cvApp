

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.9e31a0ee.js","_app/immutable/chunks/scheduler.a7dff244.js","_app/immutable/chunks/index.f6eab506.js","_app/immutable/chunks/stores.4810fd5e.js","_app/immutable/chunks/singletons.214050a5.js"];
export const stylesheets = ["_app/immutable/assets/0.af44ea8b.css"];
export const fonts = [];
