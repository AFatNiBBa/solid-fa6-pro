
import { Icon } from "../../index";

/**
 * A component that renders the `sushi` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sushi?s=sharp-regular sushi}
 * @preview ![sushi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sushi.svg)
 */
const Sushi: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 352L554.7 224.4c-6.4-38.1-23.7-72.1-48.5-98.8L405.9 295.5 576 352zM393.5 66.1L282.2 254.4l92.7 30.8L482.1 103.6c-25.4-19.5-55.8-32.7-88.7-37.5zm-36-2.1L246.6 64 96.1 318.7l139.4-48.3L357.5 64zM21.3 224.4L0 352l32-11.1 1.5-.5 15.9-5.5L80 324.3s0 0 0 0L49.4 334.9 209.5 64c-93.3 .6-172.8 68.2-188.2 160.4zM32 374.8l0 1.2c0 39.8 32.2 72 72 72c16.6 0 31.8-5.6 44-15c12.2 9.4 27.4 15 44 15c18.4 0 35.3-6.9 48-18.3c12.7 11.4 29.6 18.3 48 18.3s35.3-6.9 48-18.3c12.7 11.4 29.6 18.3 48 18.3c16.6 0 31.8-5.6 44-15c12.2 9.4 27.4 15 44 15c39.8 0 72-32.2 72-72l0-.9-48-15.9 0 16.9c0 13.3-10.7 24-24 24c-5.6 0-10.6-1.8-14.6-5L428 372.3 398.6 395c-4.1 3.1-9.1 5-14.6 5c-6.2 0-11.7-2.3-16-6.1l-32-28.7-32 28.7c-4.3 3.8-9.8 6.1-16 6.1s-11.7-2.3-16-6.1l-32-28.7-32 28.7c-4.3 3.8-9.8 6.1-16 6.1c-5.6 0-10.6-1.8-14.6-5L148 372.3 118.6 395c-4.1 3.1-9.1 5-14.6 5c-13.3 0-24-10.7-24-24l0-17.9L32 374.8z" />
    </Icon>
);

export default Sushi;