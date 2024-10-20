
import { Icon, generic } from "../../index";

/**
 * A component that renders the `earth-americas` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-americas?s=sharp-duotone-solid earth-americas}
 * @preview ![earth-americas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/earth-americas.svg)
 */
const EarthAmericas: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c136 0 247.2-106.1 255.5-240c-37.2 0-74.3 0-111.5 0c0-26.7 0-53.3 0-80c24.2-24.2 48.4-48.4 72.6-72.6C429.9 51.9 356.5 5.7 272 .5c0 26.5 0 53 0 79.5c-10.7 10.7-21.3 21.3-32 32c0 5.3 0 10.7 0 16c10.7 10.7 21.3 21.3 32 32c0 10.7 0 21.3 0 32c-26.7 0-53.3 0-80 0c0 10.7 0 21.3 0 32c10.7 10.7 21.3 21.3 32 32c42.7 0 85.3 0 128 0c0 26.7 0 53.3 0 80c-21.3 21.3-42.7 42.7-64 64c0 16 0 32 0 48l-64 0c0-21.3 0-42.7 0-64c-10.7-10.7-21.3-21.3-32-32c0-21.3 0-42.7 0-64c-16-16-32-32-48-48c-16 0-32 0-48 0c-28.5-19-57-38-85.5-57C3.7 206.2 0 230.6 0 256z" />
        <path d="M192 352l0-64-48-48-48 0L10.6 183C42 77.2 140 0 256 0c5.4 0 10.7 .2 16 .5L272 80l-32 32 0 16 32 32 0 32-80 0 0 32 32 32 128 0 0 80-64 64 0 48-64 0 0-64-32-32zM472.6 119.4C497.5 159 512 205.8 512 256c0 5.4-.2 10.7-.5 16L400 272l0-80 72.6-72.6z" />
    </Icon>
);

export default EarthAmericas;