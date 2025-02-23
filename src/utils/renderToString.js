import { renderToString } from "vue/server-renderer";

export function renderVueComponentToString(component, props) {
  const app = createApp(component, props);
  return renderToString(app);
}
