
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bells` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bells?s=duotone bells}
 * @preview ![bells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bells.svg)
 */
const Bells: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M.6 289.5c1.4 12 9.4 22.2 20.8 26.3l230.5 83.9 1.1-3.9c9.4-32.5 8.1-67.2-3.5-99.1l-18.7-51.2C203.2 170.3 232.4 88.2 296.5 46c-4.5-2.2-9.1-4.2-13.9-6c-14.9-5.4-30.2-8-45.3-8c-54.1 0-104.9 33.3-124.5 87L98.2 159C84 197.8 57.6 231 23 253.7L14.9 259C4.7 265.7-.8 277.5 .6 289.5zm260.3-54.9l18.8 51.2c14 38.2 15.5 79.8 4.3 118.9l-4.6 15.8c-3.3 11.6 .1 24 9 32.2s21.5 10.8 32.8 6.7L618.6 351.1c11.3-4.1 19.4-14.2 20.8-26.2c.2-1.3 .2-2.5 .2-3.8c0-10.6-5.3-20.6-14.2-26.6l-13.7-9.2c-33.8-22.7-59.6-55.4-73.6-93.6l-18.8-51.2C493.2 69.2 414.1 32.5 342.8 58.4s-108 104.8-81.9 176.2z" />
        <path d="M211.9 419.5L94.3 376.1c-.3 2.5-.4 5-.4 7.5c0 35.5 28.9 64.3 64.5 64.3c22.3 0 41.9-11.3 53.5-28.4zM480.8 480c35.6 0 64.5-28.8 64.5-64.3c0-1.3 0-2.6-.1-3.9L429.1 454.1c11.8 15.7 30.6 25.9 51.7 25.9z" />
    </Icon>
);

export default Bells;