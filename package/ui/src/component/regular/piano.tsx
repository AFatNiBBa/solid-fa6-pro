
import { Icon } from "../../index";

/**
 * A component that renders the `piano` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano?s=regular piano}
 * @preview ![piano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/piano.svg)
 */
const Piano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 384l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-96 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0 0 64c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-64-32 0zM48 336l416 0 0-8.4c0-6.1-3.4-11.6-8.8-14.3L396.8 284c-37.2-18.6-60.8-56.7-60.8-98.3C336 109.7 274.3 48 198.3 48L192 48C112.5 48 48 112.5 48 192l0 144zm464-8.4l0 8.4 0 24 0 24 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-64 0-24 0-24L0 192C0 86 86 0 192 0l6.3 0C300.8 0 384 83.2 384 185.7c0 23.5 13.2 44.9 34.2 55.4l58.4 29.2c21.7 10.8 35.4 33 35.4 57.2z" />
    </Icon>
);

export default Piano;