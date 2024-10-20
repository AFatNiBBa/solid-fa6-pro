
import { Icon } from "../../index";

/**
 * A component that renders the `hose` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose?s=sharp-solid hose}
 * @preview ![hose](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hose.svg)
 */
const Hose: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 104l0 24 48 0 0-24 0-2.3 80-11.4 0 13.7 32 0 0-16 0-48 0-16-32 0 0 13.7L336 26.3l0-2.3 0-24L288 0l0 24 0 80zM64 176c0-44.2 35.8-80 80-80l112 0 0-64L144 32C64.5 32 0 96.5 0 176s64.5 144 144 144l272 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-272 0c-44.2 0-80-35.8-80-80zM32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 352zm0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default Hose;