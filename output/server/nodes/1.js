

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1f770ae5.js","_app/immutable/chunks/scheduler.a7dff244.js","_app/immutable/chunks/index.f6eab506.js","_app/immutable/chunks/stores.4810fd5e.js","_app/immutable/chunks/singletons.214050a5.js"];
export const stylesheets = [];
export const fonts = [];
