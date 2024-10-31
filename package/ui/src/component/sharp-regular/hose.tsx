
import { Icon } from "../../index";

/**
 * A component that renders the `hose` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose?s=sharp-regular hose}
 * @preview ![hose](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hose.svg)
 */
const Hose: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 128l48 0 0-24 0-2.3 80-11.4 0 13.7 32 0 0-16 0-48 0-16-32 0 0 13.7L336 26.3l0-2.3 0-24L288 0l0 24 0 80 0 24zM8 464l0 48 24 0 384 0 24 0 0-48-24 0L32 464 8 464zm24-80L8 384l0 48 24 0 384 0 24 0 0-48-24 0L32 384zM8 304l0 48 24 0 384 0 24 0 0-48-24 0L32 304 8 304zM56 156c0-37.6 30.4-68 68-68l132 0 0-48L124 40C59.9 40 8 91.9 8 156s51.9 116 116 116l292 0 24 0 0-48-24 0-292 0c-37.6 0-68-30.4-68-68z" />
    </Icon>
);

export default Hose;