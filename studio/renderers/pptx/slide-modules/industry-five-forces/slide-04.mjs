import { loadFiveForcesData } from "./data.mjs";
import { forceDetailPage } from "./shared.mjs";

export async function slide04(presentation, ctx) {
  const slide = presentation.slides.add();
  await forceDetailPage(ctx, slide, loadFiveForcesData(), "substitutes", 4);
  return slide;
}
