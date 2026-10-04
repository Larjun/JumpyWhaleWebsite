/**
 * Livery photos live on the same ImageKit bucket that design.jumpywhale.com uses,
 * so the portfolio reuses them rather than duplicating assets into this repo.
 */
const BASE = (
  (import.meta.env.VITE_IMAGEKIT_API_ENDPOINT as string | undefined) ??
  "https://ik.imagekit.io/b31f6e949c704b9ca534/"
).replace(/\/$/, "");

export type IkTransform = {
  width?: number;
  quality?: number;
  format?: "auto" | "webp" | "avif" | "jpg";
  /** ImageKit aspect ratio, e.g. "4-5" — crops proportionally, centred. */
  aspectRatio?: string;
};

export function ikUrl(path: string, tr?: IkTransform): string {
  const url = `${BASE}/${path.replace(/^\//, "")}`;
  if (!tr) return url;

  const parts: string[] = [];
  if (tr.width) parts.push(`w-${tr.width}`);
  if (tr.aspectRatio) parts.push(`ar-${tr.aspectRatio}`);
  if (tr.quality) parts.push(`q-${tr.quality}`);
  parts.push(`f-${tr.format ?? "auto"}`);
  return `${url}?tr=${parts.join(",")}`;
}

const HERO_WIDTHS = [640, 960, 1280, 1600, 1920] as const;
const CARD_WIDTHS = [400, 640, 960] as const;

export function ikSrcSet(path: string, quality = 70, hero = false): string {
  const widths = hero ? HERO_WIDTHS : CARD_WIDTHS;
  return widths
    .map((w) => `${ikUrl(path, { width: w, quality })} ${w}w`)
    .join(", ");
}

/** Build the ImageKit path for a livery photo, matching the design site's naming. */
export function liveryPath(photoName: string, index: number): string {
  return `liveries/${photoName}_${index}.jpg`;
}

/** A region of the source image, in original pixels. */
export type IkRegion = { x: number; y: number; width: number; height: number };

/**
 * A portrait image with a srcset sized for the About column.
 *
 * Pass `region` to choose what stays in frame: it crops that rectangle out of
 * the original first, then scales it down — a chained transform. Without it,
 * `aspectRatio` crops from the centre, which can push an off-centre subject out
 * of shot.
 */
export function ikPortrait(
  path: string,
  options: {
    region?: IkRegion;
    aspectRatio?: string;
    quality?: number;
  } = {},
) {
  const { region, aspectRatio = "4-5", quality = 80 } = options;
  const widths = [400, 560, 700, 900];

  const url = (w: number) => {
    if (!region) return ikUrl(path, { width: w, quality, aspectRatio });
    const extract = `w-${region.width},h-${region.height},cm-extract,x-${region.x},y-${region.y}`;
    return `${BASE}/${path.replace(/^\//, "")}?tr=${extract}:w-${w},q-${quality},f-auto`;
  };

  return {
    src: url(700),
    srcSet: widths.map((w) => `${url(w)} ${w}w`).join(", "),
  };
}
