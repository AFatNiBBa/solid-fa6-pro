
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pinata` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pinata?s=sharp-duotone-solid pinata}
 * @preview ![pinata](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pinata.svg)
 */
const Pinata: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 218.7c15.8 6.6 31.6 13.2 47.4 19.7L240 198.1l0 25.9 19.8 0c-30.9 15.4-61.7 30.9-92.6 46.3c-2.2 1.1-4.4 2.2-6.6 3.3c-2.3-.9-4.5-1.9-6.8-2.8C139.9 265 126 259.1 112 253.3l0-34.7zm0 99.4l16.7 8.4 33.3-13.3c2.2-.9 4.4-1.8 6.7-2.7c2.1 1.1 4.3 2.1 6.4 3.2l25.6 12.8c11.1-4.4 22.2-8.9 33.3-13.3c2.2-.9 4.4-1.8 6.7-2.7c2.1 1.1 4.3 2.1 6.4 3.2l25.6 12.8 33.3-13.3c2.2-.9 4.4-1.8 6.7-2.7c2.1 1.1 4.3 2.1 6.4 3.2l25.6 12.8c11.1-4.4 22.2-8.9 33.3-13.3c2.2-.9 4.4-1.8 6.7-2.7c2.1 1.1 4.3 2.1 6.4 3.2c8.5 4.3 17 8.5 25.6 12.8c11.1-4.4 22.2-8.9 33.3-13.3c2.2-.9 4.4-1.8 6.7-2.7c2.1 1.1 4.3 2.1 6.4 3.2c8.5 4.3 17 8.5 25.6 12.8l23.3-9.3 0 34.5-18.1 7.2-6.7 2.7-6.4-3.2-25.6-12.8-33.3 13.3-6.7 2.7-6.4-3.2-25.6-12.8-33.3 13.3-6.7 2.7-6.4-3.2-25.6-12.8-33.3 13.3c-2.2 .9-4.4 1.8-6.7 2.7c-2.1-1.1-4.3-2.1-6.4-3.2l-25.6-12.8-33.3 13.3c-2.2 .9-4.4 1.8-6.7 2.7c-2.1-1.1-4.3-2.1-6.4-3.2c-8.5-4.3-17-8.5-25.6-12.8c-11.1 4.4-22.2 8.9-33.3 13.3c-2.2 .9-4.4 1.8-6.7 2.7c-2.1-1.1-4.3-2.1-6.4-3.2l-8.8-4.4 0-35.8zm0 84l24 12 24.8-12.4c2.4-1.2 4.8-2.4 7.2-3.6l7.2 3.6c7.9 3.9 15.8 7.9 23.7 11.8c5.4-3.6 10.8-7.2 16.3-10.8l4-2.7 4.8 0 0 35.2-15.1 10.1c-2.6 1.7-5.1 3.4-7.7 5.2l-8.3-4.2L168 433.9l-24.8 12.4c-2.4 1.2-4.8 2.4-7.2 3.6c-2.4-1.2-4.8-2.4-7.2-3.6L112 437.9l0-35.8zM400 400l4.8 0c1.3 .9 2.7 1.8 4 2.7c5.4 3.6 10.8 7.2 16.3 10.8l23.7-11.8 7.2-3.6 7.2 3.6L488 414.1l24-12 0 35.8-16.8 8.4-7.2 3.6-7.2-3.6L456 433.9l-24.8 12.4-8.3 4.2-7.7-5.2L400 435.2l0-35.2z" />
        <path d="M112 318.1l0-64.8 41.8 17.4 6.8 2.8 6.5-3.3L259.8 224l28.2 0 224 0 0 93.2-23.3 9.3-25.6-12.8-6.4-3.2-6.7 2.7-33.3 13.3-25.6-12.8-6.4-3.2-6.7 2.7-33.3 13.3-25.6-12.8-6.4-3.2-6.7 2.7-33.3 13.3-25.6-12.8-6.4-3.2-6.7 2.7-33.3 13.3-25.6-12.8-6.4-3.2-6.7 2.7-33.3 13.3L112 318.1zm0 35.8l8.8 4.4 6.4 3.2 6.7-2.7 33.3-13.3 25.6 12.8 6.4 3.2 6.7-2.7 33.3-13.3 25.6 12.8 6.4 3.2 6.7-2.7 33.3-13.3 25.6 12.8 6.4 3.2 6.7-2.7 33.3-13.3 25.6 12.8 6.4 3.2 6.7-2.7 33.3-13.3 25.6 12.8 6.4 3.2 6.7-2.7 18.1-7.2 0 50.5-24 12-24.8-12.4-7.2-3.6-7.2 3.6-23.7 11.8-16.3-10.8-4-2.7-4.8 0-176 0-4.8 0-4 2.7-16.3 10.8-23.7-11.8-7.2-3.6-7.2 3.6L136 414.1l-24-12 0-48.2zm47.4-115.5L0 172 0 64l176 0 0-64 64 0 0 198.1-80.6 40.3zM112 437.9l16.8 8.4 7.2 3.6 7.2-3.6L168 433.9l24.8 12.4 8.3 4.2 7.7-5.2L224 435.2l0 76.8-112 0 0-74.1zm288-2.7l15.1 10.1 7.7 5.2 8.3-4.2L456 433.9l24.8 12.4 7.2 3.6 7.2-3.6 16.8-8.4 0 74.1-112 0 0-76.8zM200 144a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Pinata;