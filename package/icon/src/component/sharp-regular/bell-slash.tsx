
import { Icon } from "../../index";

/**
 * A component that renders the `bell-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-slash?s=sharp-regular bell-slash}
 * @preview ![bell-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bell-slash.svg)
 */
const BellSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 399.6l0-31.6-64-72 0-88c0-77.4-55-142-128-156.8L352 0 288 0l0 51.2c-42.9 8.7-79.5 34.5-102.5 70.1L48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L544 399.6zM223.7 150.9C243.2 118 279 96 320 96c61.9 0 112 50.1 112 112l0 88 0 16.6L223.7 150.9zM406.2 416l-60.9-48-185 0 35.7-40.1L208 314.2l0-18.2 0-36.1-48-37.8 0 73.9L96 368l0 48 48 0 262.2 0zM384 448l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
    </Icon>
);

export default BellSlash;