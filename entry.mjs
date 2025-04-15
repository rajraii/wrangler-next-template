export default {
  async fetch(req, env, ctx) {
    Object.assign(process.env, env); // inject vars into process.env
    return handler.fetch(req, env, ctx); // delegate to OpenNext
  }
}
