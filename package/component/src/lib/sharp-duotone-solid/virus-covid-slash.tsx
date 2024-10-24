
import { Icon, generic } from "../../index";

/**
 * A component that renders the `virus-covid-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/virus-covid-slash?s=sharp-duotone-solid virus-covid-slash}
 * @preview ![virus-covid-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/virus-covid-slash.svg)
 */
const VirusCovidSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 192l48 0 0 24 0 16 33.6 0c.9-6.3 2-12.4 3.5-18.5L401.3 412.2c-17.6 9.2-36.9 15.4-57.3 18.2l0 33.6 16 0 24 0 0 48-24 0-40 0-40 0-24 0 0-48 24 0 16 0 0-33.6c-30.7-4.2-58.8-16.3-82.3-34.1L189.9 420l11.3 11.3 17 17-33.9 33.9-17-17L139 437l-28.3-28.3-17-17 33.9-33.9 17 17L156 386.1l23.8-23.8c-17.9-23.5-29.9-51.7-34.1-82.3L112 280l0 16 0 24-48 0 0-24 0-40 0-40 0-24zM133.3 80.7L139 75l28.3-28.3 17-17 33.9 33.9-17 17-28.3 28.3-1.4 1.4c-12.7-9.9-25.5-19.8-38.2-29.7zM197 130.1c26.3-25.8 60.7-43.3 99-48.5L296 48l-16 0-24 0 0-48 24 0 40 0 40 0 24 0 0 48-24 0-16 0 0 33.6c30.7 4.2 58.8 16.3 82.3 34.1L450.1 92 438.8 80.6l-17-17 33.9-33.9 17 17L501 75l28.3 28.3 17 17-33.9 33.9-17-17L484 125.9l-23.8 23.8c17.9 23.5 29.9 51.7 34.1 82.3l33.6 0 0-16 0-24 48 0 0 24 0 40 0 40 0 24-48 0 0-24 0-16-33.6 0c-3.1 23.1-10.8 44.7-21.9 64L197 130.1z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default VirusCovidSlash;