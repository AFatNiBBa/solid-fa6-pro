
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shish-kebab` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shish-kebab?s=duotone shish-kebab}
 * @preview ![shish-kebab](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shish-kebab.svg)
 */
const ShishKebab: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 8.2 3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0l59-59c-15.1-15.1-30.2-30.2-45.3-45.3l-59 59C3.1 463.6 0 471.8 0 480zM166.3 300.4c15.1 15.1 30.2 30.2 45.3 45.3l30.1-30.1c-15.1-15.1-30.2-30.2-45.3-45.3l-30.1 30.1zm128-128c15.1 15.1 30.2 30.2 45.3 45.3l48.1-48.1c16.2-16.2 14.1-39.7 3-53.9c-9.8-12.5-8.8-30.7 2.7-42.2c12.5-12.5 32.8-12.5 45.3 0c10.4 10.4 12.2 26.4 5.1 38.6c-8.8 15.3-3.6 34.9 11.7 43.7s34.9 3.6 43.7-11.7c8.6-14.8 12.8-31.4 12.8-48c0-24.6-9.4-49.1-28.1-67.9c-37.5-37.5-98.3-37.5-135.8 0c-29.6 29.6-35.8 73.6-18.8 109.3l-35 35z" />
        <path d="M203.7 138.3l-41.4 41.4c-15.6 15.6-15.6 40.9 0 56.6L275.7 349.7c15.6 15.6 40.9 15.6 56.6 0l41.4-41.4c15.6-15.6 15.6-40.9 0-56.6L260.3 138.3c-15.6-15.6-40.9-15.6-56.6 0zm-71.4 128c-15.6-15.6-40.9-15.6-56.6 0L34.3 307.7c-15.6 15.6-15.6 40.9 0 56.6L147.7 477.7c15.6 15.6 40.9 15.6 56.6 0l41.4-41.4c15.6-15.6 15.6-40.9 0-56.6L132.3 266.3z" />
    </Icon>
);

export default ShishKebab;