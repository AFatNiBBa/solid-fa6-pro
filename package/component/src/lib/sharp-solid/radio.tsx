
import { Icon } from "../../index";

/**
 * A component that renders the `radio` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=sharp-solid radio}
 * @preview ![radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/radio.svg)
 */
const Radio: typeof Icon = x => (
    <Icon {...x}>
        <path d="M485.7 55.3L509 49.6 497.6 3 474.3 8.7l-456 112L0 125.2 0 128l0 16L0 304l0 24L0 512l512 0 0-384-322.2 0 296-72.7zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM80 240l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zM64 304l16 0 128 0 16 0 0 32-16 0L80 336l-16 0 0-32zm16 64l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32z" />
    </Icon>
);

export default Radio;