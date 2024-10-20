
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bottle-water` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bottle-water?s=duotone bottle-water}
 * @preview ![bottle-water](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bottle-water.svg)
 */
const BottleWater: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 167.5c0 17 7.5 32.3 19.4 42.6C39.4 221.7 32 238 32 256c0 19.1 8.4 36.3 21.7 48C40.4 315.7 32 332.9 32 352s8.4 36.3 21.7 48C40.4 411.7 32 428.9 32 448c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64c0-19.1-8.4-36.3-21.7-48c13.3-11.7 21.7-28.9 21.7-48s-8.4-36.3-21.7-48c13.3-11.7 21.7-28.9 21.7-48c0-18-7.4-34.3-19.4-45.9c11.9-10.4 19.4-25.6 19.4-42.6c0-19.5-10-37.6-26.6-47.9c-12.6-7.9-25.1-15.7-37.6-23.6L96 96c-12.3 7.9-24.9 15.7-37.4 23.6C42 129.9 32 148 32 167.5zM96 240c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm0 128c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" />
        <path d="M120 0C106.7 0 96 10.7 96 24l0 72 128 0 0-72c0-13.3-10.7-24-24-24L120 0zM96 240c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16zm0 128c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default BottleWater;