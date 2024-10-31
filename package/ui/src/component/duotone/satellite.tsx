
import { Icon, generic } from "../../index";

/**
 * A component that renders the `satellite` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/satellite?s=duotone satellite}
 * @preview ![satellite](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/satellite.svg)
 */
const Satellite: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M103 103c-9.4 9.4-9.4 24.6 0 33.9l89.4 89.4L322.3 96.4 233 7c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7l-96 96zM285.7 319.6L375 409c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7l96-96c9.4-9.4 9.4-24.6 0-33.9l-89.4-89.4C372.3 233 329 276.3 285.7 319.6z" />
        <path d="M377.4 41.4c12.5-12.5 32.8-12.5 45.3 0l48 48c12.5 12.5 12.5 32.8 0 45.3L270.2 335.1c11.4 24.6 17.8 52 17.8 80.9c0 31.7-7.7 61.5-21.2 87.8c-4.7 9-16.7 10.3-23.8 3.1L135.3 399.3l-16.4 16.4c.7 2.6 1.1 5.4 1.1 8.3c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32c2.9 0 5.6 .4 8.3 1.1l16.4-16.4L5.1 269.1c-7.2-7.2-5.9-19.2 3.1-23.8C34.5 231.7 64.3 224 96 224c28.9 0 56.3 6.4 80.9 17.8L377.4 41.4z" />
    </Icon>
);

export default Satellite;