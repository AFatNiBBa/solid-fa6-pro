
import { Icon } from "../../index";

/**
 * A component that renders the `bone` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bone?s=light bone}
 * @preview ![bone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bone.svg)
 */
const Bone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M143.2 174.3C138.6 148 115.6 128 88 128c-30.9 0-56 25.1-56 56c0 16.3 7 31 18.2 41.3c17.9 16.4 17.9 45 0 61.4C39 297 32 311.7 32 328c0 30.9 25.1 56 56 56c27.6 0 50.6-20 55.2-46.3C146.3 320 161.7 304 183 304L393 304c21.3 0 36.7 16 39.8 33.7C437.4 364 460.4 384 488 384c30.9 0 56-25.1 56-56c0-16.3-7-31-18.2-41.3c-17.9-16.4-17.9-45 0-61.4C537 215 544 200.3 544 184c0-30.9-25.1-56-56-56c-27.6 0-50.6 20-55.2 46.3C429.7 192 414.3 208 393 208L183 208c-21.3 0-36.7-16-39.8-33.7zm31.5-5.5c.7 4.1 4.1 7.3 8.3 7.3L393 176c4.1 0 7.6-3.2 8.3-7.3C408.5 127.4 444.6 96 488 96c48.6 0 88 39.4 88 88c0 25.7-11 48.8-28.5 64.9c-4.1 3.7-4.1 10.5 0 14.2C565 279.2 576 302.3 576 328c0 48.6-39.4 88-88 88c-43.4 0-79.5-31.4-86.7-72.7c-.7-4.1-4.1-7.3-8.3-7.3L183 336c-4.1 0-7.6 3.2-8.3 7.3C167.5 384.6 131.4 416 88 416c-48.6 0-88-39.4-88-88c0-25.7 11-48.8 28.5-64.9c4.1-3.7 4.1-10.5 0-14.2C11 232.8 0 209.7 0 184c0-48.6 39.4-88 88-88c43.4 0 79.5 31.4 86.7 72.7z" />
    </Icon>
);

export default Bone;