
import { Icon } from "../../index";

/**
 * A component that renders the `moped` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moped?s=sharp-thin moped}
 * @preview ![moped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/moped.svg)
 */
const Moped: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M328 32l-8 0 0 16 8 0 74 0 59.6 201.1c-34.3 12.8-62.5 38.4-78.6 70.9l-111 0-16 0 0-16 0-96 0-16-16 0-112 0C57.3 192 0 249.3 0 320l0 48 0 16 16 0 48 0c0 53 43 96 96 96s96-43 96-96l112 0 4 0 12 0c0-70.7 57.3-128 128-128c35.4 0 67.5 14.4 90.7 37.6L614 282.4C587.9 256.2 551.9 240 512 240c-12.1 0-23.9 1.5-35.1 4.3L445.9 139.9l54.5 27.2 1.7 .8 1.9 0 16 0 8 0 0-8 0-96 0-8-8 0-16 0-1.9 0-1.7 .8-64 32-4.9 2.4L415.7 37.7 414 32l-6 0-80 0zm40.9 336L16 368l0-48c0-61.9 50.1-112 112-112l112 0 0 112 0 16 16 0 120.2 0c-3.6 10.2-6.1 20.9-7.3 32zm74.7-247.2l-3.8-1.9-4.1-13.7 .8 1.5 7.2-3.6L505.9 72l6.1 0 0 80-6.1 0-62.3-31.2zM240 128l0 32-128 0 0-32 128 0zM112 112l-16 0 0 16 0 32 0 16 16 0 128 0 16 0 0-16 0-32 0-16-16 0-128 0zM80 384l160 0c0 44.2-35.8 80-80 80s-80-35.8-80-80zm432-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
    </Icon>
);

export default Moped;