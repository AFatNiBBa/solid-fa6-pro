
import { Icon } from "../../index";

/**
 * A component that renders the `frog` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frog?s=sharp-regular frog}
 * @preview ![frog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/frog.svg)
 */
const Frog: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M312.8 142.2l-30.6 3.4C150.4 160.5 48 272.3 48 408l0 24 192 0-1-1 56.8-56.8c10.4-10.3 16.2-24.4 16.2-39c0-30.5-24.7-55.2-55.2-55.2c-14.6 0-28.7 5.8-39 16.2L169 345l-17 17L118.1 328l17-17 48.8-48.8c19.4-19.4 45.6-30.2 73-30.2c48.4 0 89 33.3 100.2 78.3l5.9-4.8 5.1-5.4 .7 .7 2.4-1.9c4.6-3.8 9.5-7.3 14.5-10.5L528 197.7l0-18.2-80-24.6-27.3-8.4-5.6-28C410.6 96.5 391.2 80 368 80c-21.2 0-39.3 13.8-45.6 33l-9.6 29.3zM576 224L442 309.3l-30.7 19.6c-3.5 2.2-6.8 4.6-9.9 7.2l1.8 1.9 31 33.4L490.5 432l37.5 0 24 0 24 0 0 48-24 0-24 0-37.5 0L480 480l-10.5 0-7.1-7.7-7.1-7.7L432 439.6l-7-7.6-24.3-26.2L384 387.9l-3.6-3.9-12.5-13.4L355.4 384l-20.3 21.8L310.9 432l25.1 0 23.5 0 .5 0 16.4 0 7.6 0 0 26.4 0 21.6-24 0-24 0-25.1 0-110.1 0L48 480l-24 0L0 480l0-24 0-24 0-24C0 247.6 121.1 115.5 276.8 98c12.6-38.3 48.7-66 91.2-66c46.5 0 85.3 33.1 94.1 77L576 144l0 80zM368 120a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Frog;