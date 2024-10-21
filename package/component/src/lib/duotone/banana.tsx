
import { Icon, generic } from "../../index";

/**
 * A component that renders the `banana` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/banana?s=duotone banana}
 * @preview ![banana](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/banana.svg)
 */
const Banana: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M269.1 273.1c2.7 1.8 5.3 3.7 7.8 5.7l.5 .4c16 12.8 32.1 25.7 48.1 38.5c32.2-8.6 64.4-17.2 96.7-25.8l.5-.1c2.9-.8 5.9-1.4 8.8-2c3.1-.6 6.1-1 9.2-1.3c4.8-20.8 7.3-42.4 7.3-64.6c0-84.7-36.6-160.9-94.8-213.6C345.6 3.6 335.9 0 326.1 0c-29.4 0-47.5 29.4-38 55c10.3 27.7 15.9 57.7 15.9 89c0 47.1-12.7 91.2-34.9 129.1z" />
        <path d="M177.1 315.2c9.7-7.3 21.5-11.2 33.6-11.2l1.3 0c10.3 0 20.4 2.8 29.1 8.2C194.1 366 125 400 48 400c-26.5 0-48 21.5-48 48l0 16c0 26.5 21.5 48 48 48l112 0c117.3 0 218.2-70.1 263.1-170.6l12-3.2c5.4-1.4 10.9-2.2 16.5-2.2l2.6 0c22.5 0 43.3 11.8 54.9 31.1l22.4 37.3c6.8 11.4 21.6 15 32.9 8.2s15-21.6 8.2-32.9l-22.4-37.3c-20.2-33.7-56.7-54.4-96-54.4l-2.6 0c-9.7 0-19.4 1.3-28.9 3.8l-.3 .1-.2 .1-96.7 25.8-48.1-38.5-.5-.4c-18.4-14.8-41.4-22.8-65-22.8l-1.3 0c-22.5 0-44.4 7.3-62.4 20.8l-42.7 32c-10.6 8-12.8 23-4.8 33.6s23 12.8 33.6 4.8l42.7-32z" />
    </Icon>
);

export default Banana;