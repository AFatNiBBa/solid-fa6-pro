
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-ad` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-ad?s=sharp-duotone-solid rectangle-ad}
 * @preview ![rectangle-ad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rectangle-ad.svg)
 */
const RectangleAd: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l576 0 0-448L0 32zM108.8 352L186 174.4l6.3-14.4 15.7 0 4 0 16.1 0 6.1 14.8L307.4 352l-51.9 0-9.9-24-73.9 0-10.4 24-52.3 0zm83.6-72l33.3 0-16.2-39.2L192.4 280zM320 280c0-39.8 32.2-72 72-72c8.4 0 16.5 1.4 24 4.1l0-28.1 0-24 48 0 0 24 0 96 0 48 0 24-48 0 0-4.1c-7.5 2.7-15.6 4.1-24 4.1c-39.8 0-72-32.2-72-72zm48 0a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M192.3 160l15.7 0 4 0 16.1 0 6.1 14.8L307.4 352l-51.9 0-9.9-24-73.9 0-10.4 24-52.3 0L186 174.4l6.3-14.4zm.2 120l33.3 0-16.2-39.2L192.4 280zM464 160l0 24 0 96 0 48 0 24-48 0 0-4.1c-7.5 2.7-15.6 4.1-24 4.1c-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1l0-28.1 0-24 48 0zm-72 96a24 24 0 1 0 0 48 24 24 0 1 0 0-48z" />
    </Icon>
);

export default RectangleAd;