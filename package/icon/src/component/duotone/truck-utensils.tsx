
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-utensils` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-utensils?s=duotone truck-utensils}
 * @preview ![truck-utensils](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-utensils.svg)
 */
const TruckUtensils: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l17.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l66.3 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l1.1 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM89.5 77.5c.7-5.9 5.6-10.3 11.6-10.3c6.2 0 11.3 4.8 11.6 11l4.4 75.5c.2 3 2.6 5.3 5.6 5.3s5.5-2.3 5.6-5.3l4.4-75.8c.3-6 5.3-10.6 11.3-10.6s10.9 4.7 11.3 10.6l4.4 75.8c.2 3 2.6 5.3 5.6 5.3s5.5-2.3 5.6-5.3l4.4-75.5c.4-6.2 5.5-11 11.6-11c5.9 0 10.9 4.4 11.6 10.3l9.5 81.4c0 29.4-20.5 54-48 60.3l0 52.8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-52.8c-27.5-6.3-48-30.9-48-60.3l9.5-81.4zM256 154.9c0-63.1 41.3-86 50.3-90.2c1.1-.5 2.3-.8 3.6-.8c5.6 0 10.1 4.5 10.1 10.1l0 53.9 0 96 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c-17.7 0-32-14.3-32-32l0-37z" />
    </Icon>
);

export default TruckUtensils;