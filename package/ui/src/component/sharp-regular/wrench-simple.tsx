
import { Icon } from "../../index";

/**
 * A component that renders the `wrench-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench-simple?s=sharp-regular wrench-simple}
 * @preview ![wrench-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wrench-simple.svg)
 */
const WrenchSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M273.9 193.9L288 179.9l0-19.9 0-75.3c29.5 26.4 48 64.7 48 107.3c0 48.1-23.6 90.8-60 117l-20 14.4 0 24.6 0 68 0 48 0 48 48 0 0-48 0-116c48.5-34.9 80-91.7 80-156c0-71.1-38.6-133.1-96-166.3C273.1 17.1 257 10.4 240 6l0 50.1L240 160l-14.1 14.1L192 208l-33.9-33.9L144 160l0-103.8L144 6c-17 4.4-33.1 11-48 19.6C38.6 58.9 0 120.9 0 192c0 64.2 31.5 121.1 80 156l0 116 0 48 48 0 0-48 0-48 0-68 0-24.6L108 309c-36.5-26.2-60-68.9-60-117c0-42.6 18.5-81 48-107.3L96 160l0 19.9 14.1 14.1 48 48L192 275.9l33.9-33.9 48-48z" />
    </Icon>
);

export default WrenchSimple;