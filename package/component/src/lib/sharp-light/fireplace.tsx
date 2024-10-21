
import { Icon } from "../../index";

/**
 * A component that renders the `fireplace` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fireplace?s=sharp-light fireplace}
 * @preview ![fireplace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/fireplace.svg)
 */
const Fireplace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L16 0 624 0l16 0 0 16 0 96 0 16-16 0-16 0 0 368 0 16-16 0-96 0-16 0 0-16 0-144c0-88.4-71.6-160-160-160s-160 71.6-160 160l0 144 0 16-16 0-96 0-16 0 0-16 0-368-16 0L0 128l0-16L0 16 0 0zM64 128l0 352 64 0 0-128c0-106 86-192 192-192s192 86 192 192l0 128 64 0 0-352L64 128zM32 32l0 64 576 0 0-64L32 32zM319.8 279.8l22.6 22.6L364.8 280c53.8 44.8 67.2 93.3 67.2 112c0 59.6-46.6 108.4-105.4 111.8c-2.2 .2-4.4 .3-6.6 .3s-4.4-.1-6.6-.3C254.6 500.4 208 451.7 208 392c0-62.7 59.7-115.7 89.6-134.4l22.2 22.2zM320 472c1.5 0 2.9 0 4.4-.1c19-2 30.8-16.6 30.8-30.5c0-11.3-8.7-26.9-24.6-43.3c-3.6-3.7-7.2-7.1-10.6-10.1c-3.4 3-7 6.4-10.6 10.1c-15.9 16.4-24.6 32-24.6 43.3c0 13.9 11.8 28.5 30.8 30.5c1.5 .1 2.9 .1 4.4 .1zm0-124.7s62.2 41.5 66.9 88.5c8.3-12.6 13.1-27.7 13.1-43.8c0-6.6-5.6-35.1-34.7-67.3l-.3 .3-22.6 22.6-22.6-22.6-25.3-25.3c-9.1 7.7-19 17.4-27.8 28.5C250.3 348.7 240 370.8 240 392c0 16.2 4.8 31.3 13.1 43.8c4.7-47 66.9-88.5 66.9-88.5z" />
    </Icon>
);

export default Fireplace;