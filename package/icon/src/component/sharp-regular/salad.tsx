
import { Icon } from "../../index";

/**
 * A component that renders the `salad` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salad?s=sharp-regular salad}
 * @preview ![salad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/salad.svg)
 */
const Salad: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 96c2.6 0 5.2 .1 7.8 .2C406.2 76.5 380.5 64 352 64c-8.7 0-17.2 1.2-25.3 3.4C309.5 27.7 270 0 224 0s-85.5 27.7-102.7 67.4c-8-2.2-16.5-3.4-25.3-3.4C43 64 0 107 0 160s43 96 96 96l73.4 0L84.7 171.3 73.4 160 96 137.4l11.3 11.3L208 249.4 208 112l0-16 32 0 0 16 0 144 52 0c-2.6-10.2-4-21-4-32c0-70.7 57.3-128 128-128zM144 433.5l-27.4-13C82.9 404.5 58 373.4 50.4 336l411.2 0c-7.6 37.4-32.5 68.5-66.2 84.5l-27.4 13 0 30.3 0 .2-224 0 0-.2 0-30.3zM1.7 336C9.8 392.6 46.1 440.1 96 463.8l0 .2 0 48 48 0 224 0 48 0 0-48 0-.2c49.9-23.7 86.2-71.2 94.3-127.8c1.1-7.8 1.7-15.9 1.7-24l0-24-48 0L48 288 0 288l0 24c0 8.1 .6 16.2 1.7 24zM464 224c0 12.3-4.6 23.5-12.2 32l54.8 0c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32l54.8 0c-7.6-8.5-12.2-19.7-12.2-32c0-26.5 21.5-48 48-48s48 21.5 48 48z" />
    </Icon>
);

export default Salad;