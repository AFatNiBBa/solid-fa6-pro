
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-full` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-full?s=light temperature-full}
 * @preview ![temperature-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/temperature-full.svg)
 */
const TemperatureFull: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 32c-35.3 0-64 28.7-64 64l0 156.7c0 14.9-7 27.7-16 36.9C60.2 309.8 48 337.5 48 368c0 61.9 50.1 112 112 112s112-50.1 112-112c0-30.5-12.2-58.2-32-78.4c-9-9.2-16-22-16-36.9L224 96c0-35.3-28.7-64-64-64zM64 96c0-53 43-96 96-96s96 43 96 96l0 156.7c0 4.6 2.2 9.8 6.8 14.5c25.5 26 41.2 61.6 41.2 100.8c0 79.5-64.5 144-144 144S16 447.5 16 368c0-39.3 15.7-74.9 41.2-100.8c4.6-4.7 6.8-9.9 6.8-14.5L64 96zm96 304a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 32c-35.3 0-64-28.7-64-64c0-29.8 20.4-54.9 48-62l0-210c0-8.8 7.2-16 16-16s16 7.2 16 16l0 210c27.6 7.1 48 32.2 48 62c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default TemperatureFull;