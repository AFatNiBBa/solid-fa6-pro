
import { Icon } from "../../index";

/**
 * A component that renders the `square-heart` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-heart?s=sharp-light square-heart}
 * @preview ![square-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-heart.svg)
 */
const SquareHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM199 195.9l-9.3-11.6c-8.3-10.4-20.8-16.4-34.1-16.4c-24.1 0-43.6 19.5-43.6 43.6l0 3.6c0 12.5 5 24.5 13.8 33.4l24.8 24.8L224 346.7l73.4-73.4 24.8-24.8c8.9-8.9 13.8-20.9 13.8-33.4l0-3.6c0-24.1-19.5-43.6-43.6-43.6c-13.3 0-25.8 6-34.1 16.4L249 195.9l-25 31.2-25-31.2zm121 100l-73.4 73.4L224 391.9l-22.6-22.6L128 295.9l-24.8-24.8c-14.9-14.9-23.2-35-23.2-56l0-3.6c0-41.8 33.9-75.6 75.6-75.6c17 0 33.4 5.7 46.6 16c4.6 3.6 8.8 7.7 12.5 12.4l9.3 11.6 9.3-11.6c3.7-4.6 7.9-8.8 12.5-12.4c13.2-10.3 29.5-16 46.6-16c41.8 0 75.6 33.9 75.6 75.6l0 3.6c0 21-8.3 41.1-23.2 56L320 295.9z" />
    </Icon>
);

export default SquareHeart;