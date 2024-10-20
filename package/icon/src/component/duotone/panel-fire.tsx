
import { Icon, generic } from "../../index";

/**
 * A component that renders the `panel-fire` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/panel-fire?s=duotone panel-fire}
 * @preview ![panel-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/panel-fire.svg)
 */
const PanelFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l273.6 0c-31-34.7-49.6-80.6-49.6-129.9c0-2 .1-4 .2-6.1c-13.4 0-24.2-10.7-24.2-24s10.7-24 24-24c3.5 0 6.9 .8 9.9 2.1c6.7-19 16.4-37.8 27.2-55.4c3.8-6.2 7.9-12.5 12.3-18.7L96 224c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 39.4c9-9.4 18.5-18.6 28.5-27.5c10-8.9 23-12.8 35.5-11.7L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM120 320a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M518 194.3l-12.3 13.8-19-19.9c-2-2.1-4-4.4-6-6.7c-9-10.2-18.6-21.3-32.7-21.6c-7.3-.2-14.6 2.3-20.3 7.5c-23.4 21.1-50 48.9-70.9 80.2C336 278.6 320 314.7 320 352c0 88.6 70.4 159.8 160 159.8c88.7 0 160-71.2 160-159.8c0-30-11-60.9-26.2-88.1c-15.2-27.4-35.3-52.3-55-70.6c-5.6-5.2-12.8-7.8-19.9-7.8c-7.6 0-15.5 2.8-20.9 8.9zM480 464c-35.3 0-64-28.7-64-64c0-36.5 37-73 54.8-88.4c5.4-4.7 13.1-4.7 18.5 0C507 327 544 363.5 544 400c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default PanelFire;