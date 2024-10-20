
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-cough` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-cough?s=duotone head-side-cough}
 * @preview ![head-side-cough](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/head-side-cough.svg)
 */
const HeadSideCough: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224.2C0 100.6 100.2 0 224 0l24 0c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8c-6.7 0-13.4 0-20.2 0l0 32L339.2 365.6c-11 1.4-19.2 10.7-19.2 21.8c0 11.6 9 21.2 20.6 21.9L448 416l0 16c0 26.5-21.5 48-48 48l-80 0 0 8c0 13.3-10.7 24-24 24c-13.3 0-26.7 0-40 0L96 512c-17.7 0-32-14.3-32-32l0-72.7c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM320 192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M592 288a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-40 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-64 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm128 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM592 480a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-40-72a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default HeadSideCough;