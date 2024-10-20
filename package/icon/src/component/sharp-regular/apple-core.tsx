
import { Icon } from "../../index";

/**
 * A component that renders the `apple-core` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-core?s=sharp-regular apple-core}
 * @preview ![apple-core](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/apple-core.svg)
 */
const AppleCore: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M176 96l0-16c0-44.2 35.8-80 80-80l16 0 16 0 0 16 0 16c0 44.2-35.8 80-80 80l-16 0-16 0 0-16zM80 128l112 32 112-32c6.7 0 13 .6 19.1 1.9c18.4 3.7 33.9 12.7 46.7 25.4c-13.7 8.7-26.1 19.2-36.9 31.2C305 217.7 288 258.9 288 304c0 53.7 24.1 101.8 62 134.1c4.8 4.1 9.7 7.9 14.9 11.4c-10.3 13.5-21.8 25.2-34.1 34.7C307.7 502 281.8 512 256 512l-64-16-64 16c-25.8 0-51.7-10-74.8-27.9c-12.2-9.5-23.7-21.1-34.1-34.7c5.2-3.5 10.2-7.3 14.9-11.4C71.9 405.8 96 357.7 96 304c0-45.1-17-86.3-44.9-117.5c-10.8-12-23.2-22.6-36.9-31.2c12.8-12.7 28.4-21.7 46.7-25.4C67 128.6 73.3 128 80 128zm125.2 78.2L192 209.9l-13.2-3.8-67.9-19.4C131.9 220.8 144 261 144 304c0 56.2-20.7 107.6-54.9 146.9c12 7.8 23.6 11.9 33.9 12.9l57.3-14.3 11.6-2.9 11.6 2.9 57.3 14.3c10.3-1 22-5 33.9-12.9C260.7 411.6 240 360.2 240 304c0-43 12.1-83.2 33.1-117.3l-67.9 19.4z" />
    </Icon>
);

export default AppleCore;