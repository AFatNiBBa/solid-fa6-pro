
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wrench-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench-simple?s=duotone wrench-simple}
 * @preview ![wrench-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wrench-simple.svg)
 */
const WrenchSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 342.3c14.1 8.2 29.4 14.6 45.5 19c8 2.2 16.3 3.9 24.7 5c4.2 .6 8.5 1 12.8 1.3c2.1 .1 4.3 .3 6.5 .3s4.3 .1 6.5 .1c35 0 67.8-9.4 96-25.7L288 464c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-121.7z" />
        <path d="M203.3 212.7c-6.2 6.2-16.4 6.2-22.6 0l-48-48c-3-3-4.7-7.1-4.7-11.3l0-135.8c0-11-10.9-18.7-20.8-13.8C43.7 35 0 100.4 0 176C0 282 86 368 192 368s192-86 192-192c0-75.6-43.7-141-107.2-172.3C266.9-1.2 256 6.5 256 17.6l0 135.8c0 4.2-1.7 8.3-4.7 11.3l-48 48z" />
    </Icon>
);

export default WrenchSimple;