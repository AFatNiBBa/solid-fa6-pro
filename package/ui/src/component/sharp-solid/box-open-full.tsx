
import { Icon } from "../../index";

/**
 * A component that renders the `box-open-full` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open-full?s=sharp-solid box-open-full}
 * @preview ![box-open-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/box-open-full.svg)
 */
const BoxOpenFull: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 128c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 5.1 .6 10 1.7 14.7l-65.5-8.2c-.1-2.2-.2-4.3-.2-6.5C128 57.3 185.3 0 256 0s128 57.3 128 128c0 1.2 0 2.4 0 3.5L444.6 3.5l86.8 41.1-44.1 93L320 158.5l-7.2-.9c4.6-8.8 7.2-18.9 7.2-29.6zM576 338.3l0 108.4-256 64-256-64 0-108.4 151.2 43.2 23.6 6.7 12.6-21L320 252.9l68.6 114.3 12.6 21 23.6-6.7L576 338.3zM64 158.7l256 32 256-32 64 128-224 64-96-160-96 160L0 286.7l64-128z" />
    </Icon>
);

export default BoxOpenFull;