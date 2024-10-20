
import { Icon, generic } from "../../index";

/**
 * A component that renders the `family` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/family?s=duotone family}
 * @preview ![family](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/family.svg)
 */
const Family: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M21.8 282.7c-.2 1.8-.2 3.6-.2 5.4c0 27.5 17.6 51.3 42.4 60.2L64 464c0 26.5 21.5 48 48 48l32 0c13.5 0 25.7-5.6 34.4-14.5c-1.6-5.5-2.4-11.4-2.4-17.5l0-56.4c-19.6-17.6-32-43.1-32-71.6l0-16c0-43.1 24.3-80.5 60-99.2c-17.1-14.7-28-36.5-28-60.8c0-3.9 .3-7.8 .8-11.5c-8.3-2.9-17.2-4.5-26.4-4.5l-44.8 0c-41.6 0-76.3 31.9-79.7 73.4l-4.1 49.3zM64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64zM308 236.8c35.7 18.7 60 56.1 60 99.2l0 16c0 28.4-12.4 54-32 71.6l0 56.4c0 6.1-.8 11.9-2.4 17.5c8.7 9 20.9 14.5 34.4 14.5l32 0c26.5 0 48-21.5 48-48l0-80 21.6 0c18.2 0 32-14.9 32-31.9c0-2.9-.4-5.9-1.3-8.8L461.3 206.4c-7.8-27.5-33-46.4-61.5-46.4l-31.4 0c-11.8 0-23 3.2-32.6 8.9c.2 2.3 .3 4.7 .3 7.1c0 24.3-10.9 46.1-28 60.8zM320 64a64 64 0 1 0 128 0A64 64 0 1 0 320 64z" />
        <path d="M208 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM176 336c0-44.2 35.8-80 80-80s80 35.8 80 80l0 16c0 23.7-12.9 44.4-32 55.4l0 72.6c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-72.6c-19.1-11.1-32-31.7-32-55.4l0-16z" />
    </Icon>
);

export default Family;