import { loadFiveForcesData } from "./data.mjs";
import { forceDetailPage } from "./shared.mjs";

export async function slide07(presentation, ctx) {
  const slide = presentation.slides.add();
  await forceDetailPage(ctx, slide, loadFiveForcesData(), "buyers", 7);
  return slide;
}
