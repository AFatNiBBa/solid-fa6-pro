
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bottle-water` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bottle-water?s=sharp-duotone-solid bottle-water}
 * @preview ![bottle-water](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bottle-water.svg)
 */
const BottleWater: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 167.5c0-19.5 10-37.6 26.6-47.9C71.1 111.7 83.7 103.9 96 96l127.9 0c12.4 7.9 25 15.7 37.6 23.6C278 129.9 288 148 288 167.5c0 17-7.5 32.3-19.4 42.6C280.6 221.7 288 238 288 256c0 19.1-8.4 36.3-21.7 48c13.3 11.7 21.7 28.9 21.7 48s-8.4 36.3-21.7 48c13.3 11.7 21.7 28.9 21.7 48l0 64-64 0L96 512l-64 0 0-64c0-19.1 8.4-36.3 21.7-48C40.4 388.3 32 371.1 32 352s8.4-36.3 21.7-48C40.4 292.3 32 275.1 32 256c0-18 7.4-34.3 19.4-45.9C39.5 199.7 32 184.5 32 167.5zM96 224l0 32 128 0 0-32L96 224zm0 128l0 32 128 0 0-32L96 352z" />
        <path d="M224 0L96 0l0 96 128 0 0-96zM96 224l0 32 128 0 0-32L96 224zm0 128l0 32 128 0 0-32L96 352z" />
    </Icon>
);

export default BottleWater;