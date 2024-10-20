
import { Icon } from "../../index";

/**
 * A component that renders the `banana` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/banana?s=sharp-solid banana}
 * @preview ![banana](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/banana.svg)
 */
const Banana: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M353.2 10.4C411.4 63.1 448 139.3 448 224c0 12.3-.8 24.4-2.3 36.3L329.8 284.7 279 254.6c16.1-33.5 25-71 25-110.6c0-31.4-5.6-61.3-15.9-89l65.1-44.6zm-29 308.2l115.1-24.2 27.7-5.8 13.6-2.9 9.3 10.4 64 72L569.9 386 534 417.9l-15.9-17.9-54.7-61.6-43 9.1C374.1 444.7 274.9 512 160 512L0 512 0 400l48 0c72.9 0 138.7-30.5 185.4-79.4l-22.1-13.1-80.2 41.8-21.3 11.1L87.6 317.8l21.3-11.1 92-48 11.8-6.2 11.5 6.8 39.1 23.2 60.9 36.1z" />
    </Icon>
);

export default Banana;