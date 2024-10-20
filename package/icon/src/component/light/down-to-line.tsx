
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-line` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-line?s=light down-to-line}
 * @preview ![down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/down-to-line.svg)
 */
const DownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 448l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 480c-8.8 0-16-7.2-16-16s7.2-16 16-16zm174.2-96.8c.5 .5 1.1 .8 1.8 .8s1.4-.3 1.8-.8L318.2 219.3c1.2-1.2 1.8-2.9 1.8-4.6c0-3.7-3-6.7-6.7-6.7L256 208c-8.8 0-16-7.2-16-16l0-120c0-4.4-3.6-8-8-8l-80 0c-4.4 0-8 3.6-8 8l0 120c0 8.8-7.2 16-16 16l-57.3 0c-3.7 0-6.7 3-6.7 6.7c0 1.7 .7 3.3 1.8 4.6L190.2 351.2zM192 384c-9.5 0-18.6-3.9-25.1-10.8L42.5 241.2C35.8 234 32 224.5 32 214.7C32 193.3 49.3 176 70.7 176l41.3 0 0-104c0-22.1 17.9-40 40-40l80 0c22.1 0 40 17.9 40 40l0 104 41.3 0c21.4 0 38.7 17.3 38.7 38.7c0 9.9-3.8 19.3-10.5 26.5L217.1 373.2c-6.5 6.9-15.6 10.8-25.1 10.8z" />
    </Icon>
);

export default DownToLine;