
import { Icon } from "../../index";

/**
 * A component that renders the `pickleball` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pickleball?s=sharp-thin pickleball}
 * @preview ![pickleball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pickleball.svg)
 */
const Pickleball: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M122 364.6l-6.7 6.7L38.6 448 80 489.4l76.7-76.7 6.7-6.7 9.1 2.7L282.4 441c2.5 6.6 5.5 13.1 8.9 19.3L168 424 91.3 500.7 80 512 68.7 500.7 27.3 459.3 16 448l11.3-11.3L104 360 64 224 276.7 11.3 288 0l11.3 11.3L516.7 228.7 528 240l-9.5 9.5c-4.6-3-9.4-5.7-14.4-8.2l1.2-1.2L288 22.6 82 228.6l37.3 126.9 2.7 9.1zm158.4-32c-2 5.8-3.6 11.7-4.9 17.7L138.6 213.9l-5.7-5.6 11.3-11.3 5.7 5.6L280.4 332.6zM431.9 496.1a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-240a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm-64 128a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0-48a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm80 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-64-64a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
    </Icon>
);

export default Pickleball;