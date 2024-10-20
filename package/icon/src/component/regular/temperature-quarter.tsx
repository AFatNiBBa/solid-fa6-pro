
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-quarter` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-quarter?s=regular temperature-quarter}
 * @preview ![temperature-quarter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/temperature-quarter.svg)
 */
const TemperatureQuarter: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 48c-35.3 0-64 28.7-64 64l0 161.9c0 14.5-5.7 27.1-12.8 36.6C71.1 326.5 64 346.4 64 368c0 53 43 96 96 96s96-43 96-96c0-21.6-7.1-41.5-19.2-57.5c-7.1-9.5-12.8-22.1-12.8-36.6L224 112c0-35.3-28.7-64-64-64zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112l0 161.9c0 1.7 .7 4.4 3.2 7.8c18.1 24.1 28.8 54 28.8 86.4c0 79.5-64.5 144-144 144S16 447.5 16 368c0-32.4 10.7-62.3 28.8-86.4c2.5-3.4 3.2-6.1 3.2-7.8L48 112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-50.7c0-8.8 7.2-16 16-16s16 7.2 16 16l0 50.7c18.6 6.6 32 24.4 32 45.3z" />
    </Icon>
);

export default TemperatureQuarter;