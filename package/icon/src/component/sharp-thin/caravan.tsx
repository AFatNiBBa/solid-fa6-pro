
import { Icon } from "../../index";

/**
 * A component that renders the `caravan` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan?s=sharp-thin caravan}
 * @preview ![caravan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/caravan.svg)
 */
const Caravan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 48c79.5 0 144 64.5 144 144l0 208-272 0-1.3 0c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80L16 400 16 48l400 0zM16 416l80 0c0 53 43 96 96 96s96-43 96-96l272 0 16 0 56 0 8 0 0-16-8 0-56 0 0-208c0-88.4-71.6-160-160-160L16 32 0 32 0 48 0 400l0 16 16 0zM80 144l160 0 0 96L80 240l0-96zM64 128l0 16 0 96 0 16 16 0 160 0 16 0 0-16 0-96 0-16-16 0L80 128l-16 0zm368 16l0 80-40 0-8 0 0 16 8 0 40 0 0 96-96 0 0-192 96 0zm16 80l0-80 0-16-16 0-96 0-16 0 0 16 0 192 0 16 16 0 96 0 16 0 0-16 0-96 0-16zM192 336a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default Caravan;