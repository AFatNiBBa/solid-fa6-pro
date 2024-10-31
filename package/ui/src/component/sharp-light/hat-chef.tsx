
import { Icon } from "../../index";

/**
 * A component that renders the `hat-chef` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-chef?s=sharp-light hat-chef}
 * @preview ![hat-chef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hat-chef.svg)
 */
const HatChef: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 96L134.4 76.8C123.7 68.7 110.4 64 96 64c-35.3 0-64 28.7-64 64l0 1.4c0 6.5 1 13 2.9 19.2L87.6 320l50.5 0L112.3 178.9l-2.9-15.7 31.5-5.8 2.9 15.7 26.4 144 .5 2.9 69.3 0 0-176 0-16 32 0 0 16 0 176 69.3 0 .5-2.9 26.4-144 2.9-15.7 31.5 5.8-2.9 15.7L373.8 320l50.5 0 52.7-171.4c1.9-6.2 2.9-12.7 2.9-19.2l0-1.4c0-35.3-28.7-64-64-64c-14.4 0-27.7 4.7-38.4 12.8L352 96 332.8 70.4C315.2 47 287.4 32 256 32s-59.2 15-76.8 38.4L160 96zM448 352L64 352 4.3 158C1.5 148.7 0 139.1 0 129.4L0 128C0 75 43 32 96 32c21.6 0 41.6 7.1 57.6 19.2c0 0 0 0 0 0C177 20.1 214.1 0 256 0s79 20.1 102.4 51.2c0 0 0 0 0 0c16-12 36-19.2 57.6-19.2c53 0 96 43 96 96l0 1.4c0 9.7-1.4 19.4-4.3 28.6L448 352zM64 384l32 0 0 96 320 0 0-96 32 0 0 96 0 32-32 0L96 512l-32 0 0-32 0-96z" />
    </Icon>
);

export default HatChef;