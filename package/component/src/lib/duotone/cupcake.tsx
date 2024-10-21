
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cupcake` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cupcake?s=duotone cupcake}
 * @preview ![cupcake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cupcake.svg)
 */
const Cupcake: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 227c0 41.4 27.1 76.6 64.6 88.6c9 2.9 18.5 4.4 28.4 4.4l30.9 0 32.2 0 135.8 0 32.2 0 30.9 0c9.9 0 19.5-1.5 28.4-4.4c37.5-12 64.6-47.1 64.6-88.6c0-40-25.6-75.6-63.6-88.2l-22.6-7.5c-4.1-1.4-8.2-2.3-12.5-2.8c1.7-6.7 2.6-13.8 2.6-21C352 48.1 303.9 0 244.6 0L240 0c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l6.1 6.1c3.4 3.4 5.3 7.9 5.3 12.7C240 56 232 64 222.1 64L160 64c-35.3 0-64 28.7-64 64c0 .3 0 .6 0 .8c-3.3 .5-6.6 1.4-9.9 2.4l-22.6 7.5C25.6 151.5 0 187 0 227z" />
        <path d="M64.6 315.6l25 156c3.7 23.3 23.8 40.4 47.4 40.4l10.9 0-24-192L93 320c-9.9 0-19.5-1.5-28.4-4.4zm91.6 4.4l24 192 87.8 0 24-192-135.8 0zm168 0l-24 192 10.9 0c23.6 0 43.7-17.1 47.4-40.4l25-156c-9 2.9-18.5 4.4-28.4 4.4l-30.9 0z" />
    </Icon>
);

export default Cupcake;