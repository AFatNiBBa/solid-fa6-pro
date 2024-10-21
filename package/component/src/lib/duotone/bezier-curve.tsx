
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bezier-curve` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bezier-curve?s=duotone bezier-curve}
 * @preview ![bezier-curve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bezier-curve.svg)
 */
const BezierCurve: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 112C0 76.7 28.7 48 64 48c25.3 0 47.2 14.7 57.6 36L240 84l0 60c0 10 3 19.2 8.2 26.9C189.2 196.6 146.6 253 140.7 320l-56.2 0c5-75 45.1-140.4 104-180l-66.9 0c-10.4 21.3-32.3 36-57.6 36c-35.3 0-64-28.7-64-64zm391.8 58.9c2.6-3.8 4.7-8.1 6.1-12.6c.7-2.3 1.2-4.6 1.6-7c.2-1.2 .3-2.4 .4-3.6c0-.6 .1-1.2 .1-1.8s0-1.2 0-1.9l0-60 118.4 0c10.4-21.3 32.3-36 57.6-36c35.3 0 64 28.7 64 64s-28.7 64-64 64c-25.3 0-47.2-14.7-57.6-36l-66.9 0c58.9 39.6 98.9 105 104 180l-56.2 0c-5.9-67-48.5-123.4-107.5-149.1z" />
        <path d="M296 136l48 0 0-48-48 0 0 48zM240 80c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64zM88 376l0 48 48 0 0-48-48 0zm-8-56l64 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48zm424 56l0 48 48 0 0-48-48 0zm-8-56l64 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default BezierCurve;