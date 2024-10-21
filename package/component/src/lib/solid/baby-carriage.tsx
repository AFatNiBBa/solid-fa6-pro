
import { Icon } from "../../index";

/**
 * A component that renders the `baby-carriage` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baby-carriage?s=solid baby-carriage}
 * @preview ![baby-carriage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/baby-carriage.svg)
 */
const BabyCarriage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 192L.1 192C2.7 117.9 41.3 52.9 99 14.1c13.3-8.9 30.8-4.3 39.9 8.8L256 192zm128-32c0-35.3 28.7-64 64-64l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 64c0 25.2-5.8 50.2-17 73.5s-27.8 44.5-48.6 62.3s-45.5 32-72.7 41.6S253.4 416 224 416s-58.5-5-85.7-14.6s-51.9-23.8-72.7-41.6s-37.3-39-48.6-62.3S0 249.2 0 224l224 0 160 0 0-64zM80 416a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm240 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default BabyCarriage;