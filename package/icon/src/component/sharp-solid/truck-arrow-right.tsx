
import { Icon } from "../../index";

/**
 * A component that renders the `truck-arrow-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-arrow-right?s=sharp-solid truck-arrow-right}
 * @preview ![truck-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/truck-arrow-right.svg)
 */
const TruckArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 0L0 0 0 416l64 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0 32 0 0-64-32 0 0-64 0-32 0-32 0-13.3-9.4-9.4-96-96L493.3 96 480 96l-64 0 0-96zM544 240l0 16-128 0 0-96 48 0 2.7 0L544 237.3l0 2.7zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM257 95l80 80 17 17-17 17-80 80-17 17L206.1 272l17-17 39-39L96 216l-24 0 0-48 24 0 166.1 0-39-39-17-17L240 78.1l17 17z" />
    </Icon>
);

export default TruckArrowRight;