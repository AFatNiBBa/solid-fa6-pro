
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-up-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-up-lock?s=sharp-light arrow-down-up-lock}
 * @preview ![arrow-down-up-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-down-up-lock.svg)
 */
const ArrowDownUpLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 510.6l11.3-11.3 96-96L246.6 392 224 369.4l-11.3 11.3L144 449.4 144 272l160 0 32 0 80 0c0-11.1 1.6-21.9 4.6-32L336 240l0-177.4 68.7 68.7L416 142.6 438.6 120l-11.3-11.3-96-96L320 1.4 308.7 12.7l-96 96L201.4 120 224 142.6l11.3-11.3L304 62.6 304 240l-160 0-32 0-96 0L0 240l0 32 16 0 96 0 0 177.4L43.3 380.7 32 369.4 9.4 392l11.3 11.3 96 96L128 510.6zM112 48l0 152 32 0 0-152 0-16-32 0 0 16zM336 312l-32 0 0 152 0 16 32 0 0-16 0-152zm192-88c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48-32 0 0 32 0 128 0 32 32 0 160 0 32 0 0-32 0-128 0-32-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default ArrowDownUpLock;