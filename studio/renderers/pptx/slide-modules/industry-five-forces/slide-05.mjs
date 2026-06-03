import { loadFiveForcesData } from "./data.mjs";
import { forceDetailPage } from "./shared.mjs";

export async function slide05(presentation, ctx) {
  const slide = presentation.slides.add();
  await forceDetailPage(ctx, slide, loadFiveForcesData(), "entrants", 5);
  return slide;
}
