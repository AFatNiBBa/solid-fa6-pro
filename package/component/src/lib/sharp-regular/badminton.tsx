
import { Icon } from "../../index";

/**
 * A component that renders the `badminton` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/badminton?s=sharp-regular badminton}
 * @preview ![badminton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/badminton.svg)
 */
const Badminton: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M228.9 100.9C193.7 136.1 176 180.4 176 221c0 31.9 10.9 61.1 32.4 82.6c48.2 48.2 138.8 43.5 202.7-20.5C446.3 247.9 464 203.6 464 163c0-31.9-10.9-61.1-32.4-82.6S380.8 48 349 48c-40.6 0-84.9 17.7-120.1 52.9zM194.9 66.9C238.5 23.4 294.8 0 349 0c42.8 0 84.9 14.8 116.6 46.5S512 120.2 512 163c0 54.2-23.4 110.5-66.9 154c-70.3 70.3-178.8 90.2-252.3 36.2L161 385l23 23-33.9 33.9-36.1 36.1L80 512 46.1 478.1 33.9 465.9 0 432l33.9-33.9 36.1-36.1L104 328l23 23 31.8-31.8C137.9 290.5 128 256 128 221c0-54.2 23.4-110.5 66.9-154zM116.1 408L104 395.9 67.9 432 80 444.1 116.1 408zM512 352c26.5 0 48 21.5 48 48l0 32-96 0 0-32c0-26.5 21.5-48 48-48zm-48.5 96l97.1 0 11.1 39 4.4 15.4-30.8 8.8-4.4-15.4L528 450.6l0 45.4 0 16-32 0 0-16 0-45.4-12.9 45.2-4.4 15.4L448 502.4l4.4-15.4 11.1-39z" />
    </Icon>
);

export default Badminton;