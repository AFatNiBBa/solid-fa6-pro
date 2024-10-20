
import { Icon } from "../../index";

/**
 * A component that renders the `brightness` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness?s=thin brightness}
 * @preview ![brightness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/brightness.svg)
 */
const Brightness: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 104c0 4.4 3.6 8 8 8s8-3.6 8-8l0-96c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 96zm8 72a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0 160c4.4 0 8-3.6 8-8l0-96c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 96c0 4.4 3.6 8 8 8zM0 256c0 4.4 3.6 8 8 8l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 248c-4.4 0-8 3.6-8 8zm408-8c-4.4 0-8 3.6-8 8s3.6 8 8 8l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-96 0zM75 437c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L75 425.7c-3.1 3.1-3.1 8.2 0 11.3zM357.8 142.9c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L437 86.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-67.9 67.9zM75 75c-3.1 3.1-3.1 8.2 0 11.3l67.9 67.9c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L86.3 75c-3.1-3.1-8.2-3.1-11.3 0zM369.1 357.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L425.7 437c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-67.9-67.9z" />
    </Icon>
);

export default Brightness;