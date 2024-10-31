
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kaaba` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kaaba?s=duotone kaaba}
 * @preview ![kaaba](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/kaaba.svg)
 */
const Kaaba: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 229.2c17.6 5.5 35.2 11 52.8 16.5c8.4 2.6 13.1 11.6 10.5 20s-11.6 13.1-20 10.5c-14.4-4.5-28.8-9-43.2-13.5l0-33.5zM60 120c76-23.8 152-47.5 228-71.2C364 72.5 440 96.3 516 120c-76 23.7-152 47.5-228 71.2L60 120zM96.7 276.2c2.6-8.4 11.6-13.1 20-10.5c21.3 6.7 42.7 13.3 64 20c8.4 2.6 13.1 11.6 10.5 20s-11.6 13.1-20 10.5c-21.3-6.7-42.7-13.3-64-20c-8.4-2.6-13.1-11.6-10.5-20zm128 40c2.6-8.4 11.6-13.1 20-10.5c12.8 4 25.6 8 38.5 12c3.1 1 6.4 1 9.5 0c12.8-4 25.6-8 38.5-12c8.4-2.6 17.4 2.1 20 10.5s-2.1 17.4-10.5 20l-38.5 12c-4.7 1.5-9.5 2.2-14.3 2.2s-9.7-.7-14.3-2.2l-38.5-12c-8.4-2.6-13.1-11.6-10.5-20zm160-10.5c-2.6-8.4 2.1-17.4 10.5-20c21.3-6.7 42.7-13.3 64-20c8.4-2.6 17.4 2.1 20 10.5s-2.1 17.4-10.5 20c-21.3 6.7-42.7 13.3-64 20c-8.4 2.6-17.4-2.1-20-10.5zm128-40c-2.6-8.4 2.1-17.4 10.5-20c17.6-5.5 35.2-11 52.8-16.5l0 33.5c-14.4 4.5-28.8 9-43.2 13.5c-8.4 2.6-17.4-2.1-20-10.5z" />
        <path d="M60 120l228 71.2L516 120 288 48.8 60 120zM278.5 1.5c6.2-1.9 12.9-1.9 19.1 0l256 80C566.9 85.6 576 98 576 112l0 16s0 0 0 0l0 21.2L292.8 237.7c-3.1 1-6.4 1-9.5 0L0 149.2 0 128l0-16C0 98 9.1 85.6 22.5 81.5l256-80zm23.9 266.8L576 182.8l0 46.5-52.8 16.5c-8.4 2.6-13.1 11.6-10.5 20s11.6 13.1 20 10.5L576 262.8 576 400c0 14-9.1 26.4-22.5 30.5l-256 80c-6.2 1.9-12.9 1.9-19.1 0l-256-80C9.1 426.4 0 414 0 400L0 262.8l43.2 13.5c8.4 2.6 17.4-2.1 20-10.5s-2.1-17.4-10.5-20L0 229.2l0-46.5 273.7 85.5c9.3 2.9 19.3 2.9 28.6 0zm-185.5-2.6c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20l64 20c8.4 2.6 17.4-2.1 20-10.5s-2.1-17.4-10.5-20l-64-20zm352 30.5c8.4-2.6 13.1-11.6 10.5-20s-11.6-13.1-20-10.5l-64 20c-8.4 2.6-13.1 11.6-10.5 20s11.6 13.1 20 10.5l64-20zm-224 9.5c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20l38.5 12c9.3 2.9 19.3 2.9 28.6 0l38.5-12c8.4-2.6 13.1-11.6 10.5-20s-11.6-13.1-20-10.5l-38.5 12c-3.1 1-6.4 1-9.5 0l-38.5-12z" />
    </Icon>
);

export default Kaaba;