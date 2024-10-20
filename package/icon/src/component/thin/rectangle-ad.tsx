
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-ad` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-ad?s=thin rectangle-ad}
 * @preview ![rectangle-ad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/rectangle-ad.svg)
 */
const RectangleAd: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm199.3 68.7l80 176c1.8 4 0 8.8-4 10.6s-8.8 0-10.6-4L245 304 139 304l-19.7 43.3c-1.8 4-6.6 5.8-10.6 4s-5.8-6.6-4-10.6l80-176c1.3-2.9 4.1-4.7 7.3-4.7s6 1.8 7.3 4.7zM192 187.3L146.2 288l91.5 0L192 187.3zM376 224a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm56 10.7l0-66.7c0-4.4 3.6-8 8-8s8 3.6 8 8l0 112 0 64c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-18.7c-13.2 16.3-33.4 26.7-56 26.7c-39.8 0-72-32.2-72-72s32.2-72 72-72c22.6 0 42.8 10.4 56 26.7z" />
    </Icon>
);

export default RectangleAd;