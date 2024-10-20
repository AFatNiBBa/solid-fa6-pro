
import { Icon } from "../../index";

/**
 * A component that renders the `house-signal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-signal?s=sharp-thin house-signal}
 * @preview ![house-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/house-signal.svg)
 */
const HouseSignal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 5.5l5.2 4.5 224 192 6.1 5.2-10.4 12.1-6.1-5.2L512 177.4 512 408l0 8-8 0-232.4 0c-1.9-5.4-4-10.7-6.2-16L496 400l0-236.3L336 26.5 176 163.7 176 284c-5.2-4-10.5-7.9-16-11.5l0-95.1-42.8 36.7-6.1 5.2-10.4-12.1 6.1-5.2 224-192L336 5.5zM280 176l112 0 8 0 0 8 0 112 0 8-8 0-112 0-8 0 0-8 0-112 0-8 8 0zm8 112l96 0 0-96-96 0 0 96zM0 272l0-16c141.4 0 256 114.6 256 256l-16 0C240 379.5 132.5 272 0 272zM48 480a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM0 480a32 32 0 1 1 64 0A32 32 0 1 1 0 480zm144 32c0-79.5-64.5-144-144-144l0-16c88.4 0 160 71.6 160 160l-16 0z" />
    </Icon>
);

export default HouseSignal;