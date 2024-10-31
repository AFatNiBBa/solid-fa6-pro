
import { Icon } from "../../index";

/**
 * A component that renders the `pills` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pills?s=thin pills}
 * @preview ![pills](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pills.svg)
 */
const Pills: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 48c53 0 96 43 96 96l0 112L16 256l0-112c0-53 43-96 96-96zM16 368l0-96 192 0 0 96c0 53-43 96-96 96s-96-43-96-96zM0 144L0 368c0 61.9 50.1 112 112 112s112-50.1 112-112l0-224c0-61.9-50.1-112-112-112S0 82.1 0 144zM416 464c-79.5 0-144-64.5-144-144c0-36.9 13.9-70.5 36.7-96L512 427.3c-25.5 22.8-59.1 36.7-96 36.7zM320 212.7c25.5-22.8 59.1-36.7 96-36.7c79.5 0 144 64.5 144 144c0 36.9-13.9 70.5-36.7 96L320 212.7zM416 480a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default Pills;