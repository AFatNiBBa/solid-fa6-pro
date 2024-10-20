
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bolt-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-slash?s=duotone bolt-slash}
 * @preview ![bolt-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bolt-slash.svg)
 */
const BoltSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 256c0 3.8 .7 7.6 2 11.2c4.7 12.5 16.6 20.7 30 20.7l83.7 0-88.9-70-15.9 13.9c-7.1 6.2-10.9 15-10.9 24.1zm66.6 211.4c-5.9 13.7-1.5 29.7 10.6 38.5c5.6 4.1 12.2 6.1 18.8 6.1c7.5 0 15.1-2.7 21.1-7.9L374.4 391 264.5 304.4l-69.9 163zm33.8-313.7c73.4 57.5 146.7 115 220.1 172.5l52.7-46.1c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L445.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8L228.4 153.7z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default BoltSlash;