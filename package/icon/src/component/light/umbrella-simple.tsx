
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=light umbrella-simple}
 * @preview ![umbrella-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/umbrella-simple.svg)
 */
const UmbrellaSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16.5C116.7 40.1 17 134.9 2 256.1C-.2 273.6 14.3 288 32 288l448 0c17.7 0 32.2-14.4 30-31.9C495 134.9 395.3 40.1 272 32.5L272 16zm0 430.6L272 320l-32 0 0 126.6c0 18.5-15 33.4-33.4 33.4c-12.7 0-24.2-7.2-29.9-18.5l-2.3-4.7c-4-7.9-13.6-11.1-21.5-7.2s-11.1 13.6-7.2 21.5l2.3 4.7C159.1 498 181.8 512 206.6 512c36.1 0 65.4-29.3 65.4-65.4zM256 64c112.8 0 206.2 83.5 221.7 192L34.3 256C49.8 147.5 143.2 64 256 64z" />
    </Icon>
);

export default UmbrellaSimple;