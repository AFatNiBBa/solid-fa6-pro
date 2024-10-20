
import { Icon } from "../../index";

/**
 * A component that renders the `crow` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crow?s=light crow}
 * @preview ![crow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/crow.svg)
 */
const Crow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.7 412.7L63.2 384l209.4 0 48.6 118.1c3.4 8.2 12.7 12.1 20.9 8.7s12.1-12.7 8.7-20.9L307.2 384l12.8 0c16 0 31.4-1.9 46.3-5.6l50.9 123.7c3.4 8.2 12.7 12.1 20.9 8.7s12.1-12.7 8.7-20.9L396.6 368.1C464.5 338.5 512 270.8 512 192l0-48 128-32c0-44.2-35.8-80-80-80l-72.4 0C470 12.4 444.4 0 416 0c-53 0-96 43-96 96l0 51L52.4 352l-8.6 6.6L6.3 387.3c-7 5.4-8.3 15.4-3 22.4s15.4 8.3 22.4 3zM506.5 64L560 64c18 0 33.7 9.9 41.9 24.5L512 111l0-15c0-11.2-1.9-22-5.5-32zM132.7 330.8l186.7-143C313.6 250 268 302.1 205.9 315.2l-73.2 15.5zM320 352l-133.2 0 25.7-5.5c81.3-17.2 139.5-89 139.5-172.2l0-11.6s0 0 0 0l0-15.8 0-51c0-35.3 28.7-64 64-64s64 28.7 64 64l0 32 0 64c0 88.4-71.6 160-160 160zM440 96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Crow;