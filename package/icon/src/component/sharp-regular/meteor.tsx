
import { Icon } from "../../index";

/**
 * A component that renders the `meteor` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meteor?s=sharp-regular meteor}
 * @preview ![meteor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/meteor.svg)
 */
const Meteor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 16L253.6 45.2 101.3 133.4C38.6 169.7 0 236.6 0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3l88.2-152.3L496 208l-7.5 .6L438 212.5l-1.9 .1 17.7-49.5L491.1 58.4 512 0 453.6 20.9 348.9 58.3 299.4 75.9l.1-1.9 3.9-50.5L304 16zM125.3 174.9l123.8-71.7L245.9 146l69.7-24.9L432.7 79.3 390.9 196.5 366 266.1l42.8-3.3L337.1 386.7C309.4 434.5 258.3 464 203 464c-85.6 0-155-69.4-155-155c0-55.3 29.5-106.4 77.3-134.1zM200 424a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM176 264a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm24 96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Meteor;