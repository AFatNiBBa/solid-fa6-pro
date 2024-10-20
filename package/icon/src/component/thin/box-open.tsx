
import { Icon } from "../../index";

/**
 * A component that renders the `box-open` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open?s=thin box-open}
 * @preview ![box-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/box-open.svg)
 */
const BoxOpen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M61.4 54.6l-33.2 83c-3.6 9 1.5 19 10.8 21.4l167.7 43.5c9.9 2.6 20.2-1.4 25.9-9.8L306.2 83.4 70 49.7c-3.7-.5-7.2 1.5-8.6 4.9zM72.2 33.9L320 69.3 567.8 33.9c11-1.6 21.6 4.6 25.7 14.8l33.2 83c7.2 17.9-3 38-21.7 42.9L437.3 218.1c-16.4 4.3-33.7-2.3-43.2-16.4l-74-110-74 110c-9.5 14.1-26.8 20.6-43.2 16.4L35 174.6c-18.7-4.8-28.8-25-21.7-42.9l33.2-83c4.1-10.3 14.7-16.4 25.7-14.8zM560 216.1l16-4.6 0 167c0 22-15 41.2-36.4 46.6l-208 52c-7.6 1.9-15.6 1.9-23.3 0l-208-52C79 419.7 64 400.6 64 378.5l0-167 16 4.6 0 162.4c0 14.7 10 27.5 24.2 31L312 461.5 312 200c0-4.4 3.6-8 8-8s8 3.6 8 8l0 261.5 207.8-51.9c14.2-3.6 24.2-16.4 24.2-31l0-162.4zM570 49.7L333.8 83.4l73.6 109.3c5.7 8.4 16.1 12.4 25.9 9.8l167.7-43.5c9.3-2.4 14.4-12.5 10.8-21.4l-33.2-83c-1.4-3.4-4.9-5.5-8.6-4.9z" />
    </Icon>
);

export default BoxOpen;