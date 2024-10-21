
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-progress` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-progress?s=sharp-light arrow-progress}
 * @preview ![arrow-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-progress.svg)
 */
const ArrowProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 32l0 64 64 0 0-64-64 0zM384 0l32 0 64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32zM286 1.5l12.3 10.2 48 40L361 64 346.2 76.3l-48 40L286 126.5 265.5 102l12.3-10.2 14-11.7L32 80l0 160 464 0 16 0 0 16 0 192 0 16-16 0-80 0 0 16 0 32-32 0-64 0-32 0 0-32 0-64 0-32 32 0 64 0 32 0 0 32 0 16 64 0 0-160L16 272 0 272l0-16L0 64 0 48l16 0 275.8 0-14-11.7L265.5 26 286 1.5zM128 416l0 16 67.8 0-14.1-11.7L169.5 410 190 385.5l12.3 10.2 48 40L265 448l-14.7 12.3-48 40L190 510.5 169.5 486l12.3-10.2L195.8 464 128 464l0 16 0 32-32 0-64 0L0 512l0-32 0-64 0-32 32 0 64 0 32 0 0 32zm-32 0l-64 0 0 64 64 0 0-64zm224 0l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default ArrowProgress;