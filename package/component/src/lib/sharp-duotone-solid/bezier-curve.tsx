
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bezier-curve` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bezier-curve?s=sharp-duotone-solid bezier-curve}
 * @preview ![bezier-curve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bezier-curve.svg)
 */
const BezierCurve: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 112c0 35.3 28.7 64 64 64c25.3 0 47.2-14.7 57.6-36l66.9 0c-58.9 39.6-98.9 105-104 180l3.5 0 48 0 4.7 0c5.6-63.8 44.6-118.1 99.3-145.3l0-38.7 0-48 0-4L121.6 84C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112zM400 84l0 4 0 48 0 38.7c54.7 27.2 93.7 81.5 99.3 145.3l4.7 0 48 0 3.5 0c-5-75-45.1-140.4-104-180l66.9 0c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36L400 84z" />
        <path d="M296 88l0 48 48 0 0-48-48 0zM240 32l56 0 48 0 56 0 0 56 0 48 0 56-56 0-48 0-56 0 0-56 0-48 0-56zM136 376l-48 0 0 48 48 0 0-48zM88 320l48 0 56 0 0 56 0 48 0 56-56 0-48 0-56 0 0-56 0-48 0-56 56 0zm464 56l-48 0 0 48 48 0 0-48zm-48-56l48 0 56 0 0 56 0 48 0 56-56 0-48 0-56 0 0-56 0-48 0-56 56 0z" />
    </Icon>
);

export default BezierCurve;