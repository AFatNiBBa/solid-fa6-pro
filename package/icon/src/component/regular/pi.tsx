
import { Icon } from "../../index";

/**
 * A component that renders the `pi` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pi?s=regular pi}
 * @preview ![pi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pi.svg)
 */
const Pi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 64C10.7 64 0 74.7 0 88s10.7 24 24 24l88 0 0 165.4c0 44.9-11.4 89-33.2 128.2L75 412.3c-6.4 11.6-2.3 26.2 9.3 32.6s26.2 2.3 32.6-9.3l3.8-6.8c25.8-46.4 39.3-98.5 39.3-151.5L160 112l144 0 0 262.6c0 40.6 32.9 73.4 73.4 73.4c27.8 0 53.2-15.7 65.7-40.6l2.3-4.7c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7l-2.3 4.7c-4.3 8.6-13.1 14.1-22.8 14.1c-14.1 0-25.4-11.4-25.4-25.4L352 112l72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 64z" />
    </Icon>
);

export default Pi;