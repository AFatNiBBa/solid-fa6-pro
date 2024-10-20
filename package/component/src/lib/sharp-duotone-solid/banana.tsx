
import { Icon, generic } from "../../index";

/**
 * A component that renders the `banana` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/banana?s=sharp-duotone-solid banana}
 * @preview ![banana](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/banana.svg)
 */
const Banana: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M263.3 282.5c20.3 12 40.6 24 60.9 36.1c38.4-8.1 76.8-16.2 115.1-24.2c5.7-22.5 8.7-46.1 8.7-70.3c0-84.7-36.6-160.9-94.8-213.6L288.1 55c10.3 27.7 15.9 57.7 15.9 89c0 51-14.9 98.6-40.7 138.5z" />
        <path d="M467.1 288.5l12.7-2.7 .9-.2 9.3 10.4 64 72L569.9 386 534 417.9l-15.9-17.9-54.7-61.6-43 9.1C374.1 444.7 274.9 512 160 512L0 512 0 400l48 0c72.9 0 138.7-30.5 185.4-79.4l-22.1-13.1-80.2 41.8-21.3 11.1L87.6 317.8l21.3-11.1 92-48 11.8-6.2 11.5 6.8 39.1 23.2 60.9 36.1 115.1-24.2 27.7-5.8z" />
    </Icon>
);

export default Banana;