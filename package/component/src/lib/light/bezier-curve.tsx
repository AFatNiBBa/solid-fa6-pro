
import { Icon } from "../../index";

/**
 * A component that renders the `bezier-curve` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bezier-curve?s=light bezier-curve}
 * @preview ![bezier-curve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bezier-curve.svg)
 */
const BezierCurve: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 64c8.8 0 16 7.2 16 16l0 21.2 0 10.8 0 22 0 10c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-10 0-22 0-10.8L272 80c0-8.8 7.2-16 16-16l64 0zm83.4 64l78.6 0c7.1 27.6 32.2 48 62 48c35.3 0 64-28.7 64-64s-28.7-64-64-64c-29.8 0-54.9 20.4-62 48L400 96l0-16c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48l0 16L126 96c-7.1-27.6-32.2-48-62-48C28.7 48 0 76.7 0 112s28.7 64 64 64c29.8 0 54.9-20.4 62-48l78.6 0C139.5 167.2 96 238.5 96 320l-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0c0-77.5 45.9-144.3 112-174.6c.7 25.9 21.9 46.6 48 46.6l64 0c26 0 47.2-20.7 48-46.6c66.1 30.3 112 97.1 112 174.6l-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0c0-81.5-43.5-152.8-108.6-192zM544 352l16 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16l16 0 32 0zm-416 0l16 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16l16 0 32 0zM32 112a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm512 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default BezierCurve;