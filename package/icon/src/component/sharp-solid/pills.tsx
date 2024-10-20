
import { Icon } from "../../index";

/**
 * A component that renders the `pills` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pills?s=sharp-solid pills}
 * @preview ![pills](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pills.svg)
 */
const Pills: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 96c-26.5 0-48 21.5-48 48l0 112 96 0 0-112c0-26.5-21.5-48-48-48zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112l0 224c0 61.9-50.1 112-112 112S0 429.9 0 368L0 144zM576 320c0 38.4-13.5 73.7-36.1 101.3L314.7 196.1C342.3 173.5 377.6 160 416 160c88.4 0 160 71.6 160 160zM416 480c-88.4 0-160-71.6-160-160c0-38.4 13.5-73.7 36.1-101.3L517.3 443.9C489.7 466.5 454.4 480 416 480z" />
    </Icon>
);

export default Pills;