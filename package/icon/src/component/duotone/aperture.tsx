
import { Icon, generic } from "../../index";

/**
 * A component that renders the `aperture` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/aperture?s=duotone aperture}
 * @preview ![aperture](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/aperture.svg)
 */
const Aperture: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 17.8 1.8 35.2 5.3 51.9c1.5 7.2 7.9 12.1 15.2 12.1l133.9 0c12.3 0 20-13.3 13.9-24L66.1 119c-5.7-9.8-19.4-10.7-25.6-1.2C14.9 157.7 0 205.1 0 256zM232.3 489c-5.7 9.8 .4 22.2 11.8 22.8c3.9 .2 7.9 .3 11.9 .3c65.4 0 125.1-24.5 170.3-64.9c5.4-4.9 6.5-12.9 2.9-19.2L362.2 312c-6.2-10.7-21.6-10.7-27.7 0L232.3 489zm19-353c-6.2 10.7 1.5 24 13.9 24l204.4 0c11.3 0 19-11.5 13.8-21.6C453 79.5 400.2 34 336.4 12.9c-6.9-2.3-14.4 .8-18 7.1l-67 116z" />
        <path d="M256 0c4 0 7.9 .1 11.9 .3c11.3 .5 17.4 12.9 11.8 22.8L177.5 200c-6.2 10.7-21.6 10.7-27.7 0L82.8 84.1c-3.6-6.3-2.6-14.3 2.9-19.2C130.9 24.5 190.6 0 256 0zM193.6 492c-3.6 6.3-11.1 9.4-18 7.1C111.8 478 59 432.5 28.5 373.6C23.3 363.5 31 352 42.3 352l204.4 0c12.3 0 20 13.3 13.9 24l-67 116zm277.9-97.8c-6.1 9.5-19.9 8.6-25.6-1.2L343.8 216c-6.2-10.7 1.5-24 13.9-24l133.9 0c7.3 0 13.7 4.9 15.2 12.1c3.5 16.8 5.3 34.1 5.3 51.9c0 50.9-14.9 98.3-40.5 138.2z" />
    </Icon>
);

export default Aperture;