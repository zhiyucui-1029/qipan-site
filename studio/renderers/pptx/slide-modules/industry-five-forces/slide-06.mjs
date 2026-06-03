import { loadFiveForcesData } from "./data.mjs";
import { forceDetailPage } from "./shared.mjs";

export async function slide06(presentation, ctx) {
  const slide = presentation.slides.add();
  await forceDetailPage(ctx, slide, loadFiveForcesData(), "suppliers", 6);
  return slide;
}
