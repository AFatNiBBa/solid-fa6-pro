
import { Icon } from "../../index";

/**
 * A component that renders the `print-magnifying-glass` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print-magnifying-glass?s=light print-magnifying-glass}
 * @preview ![print-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/print-magnifying-glass.svg)
 */
const PrintMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 160l0-96c0-17.7 14.3-32 32-32l229.5 0c8.5 0 16.6 3.4 22.6 9.4l26.5 26.5c6 6 9.4 14.1 9.4 22.6l0 69.5 32 0 0-69.5c0-17-6.7-33.3-18.7-45.3L466.7 18.7C454.7 6.7 438.5 0 421.5 0L192 0c-35.3 0-64 28.7-64 64l0 96 32 0zm-32 64l192 0c9.1-12.1 19.9-22.9 32-32l-224 0c-35.3 0-64 28.7-64 64l0 128c0 17.7 14.3 32 32 32l32 0 0 64c0 17.7 14.3 32 32 32l320 0c15.8 0 29-11.5 31.6-26.6L498.2 472c-5.9 1.9-12 3.6-18.2 4.8l0 3.2-32 0-288 0 0-128 131.2 0c-2.1-10.3-3.2-21-3.2-32l-128 0c-17.7 0-32 14.3-32 32l0 32-32 0 0-128c0-17.7 14.3-32 32-32zm320 .1a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224c29.6 0 56.8-10 78.5-26.9l86.2 86.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-86.2-86.2C566 377 576 349.7 576 320.2c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128z" />
    </Icon>
);

export default PrintMagnifyingGlass;