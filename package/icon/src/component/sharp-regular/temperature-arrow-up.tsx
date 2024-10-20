
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-arrow-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-arrow-up?s=sharp-regular temperature-arrow-up}
 * @preview ![temperature-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/temperature-arrow-up.svg)
 */
const TemperatureArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 294.5l-10.7 13.2C88 324.2 80 345.1 80 368c0 53 43 96 96 96s96-43 96-96c0-22.9-8-43.8-21.3-60.3L240 294.5l0-17L240 48 112 48l0 229.5 0 17zM240 0l48 0 0 48 0 229.5c20 24.7 32 56.2 32 90.5c0 79.5-64.5 144-144 144S32 447.5 32 368c0-34.3 12-65.8 32-90.5L64 48 64 0l48 0L240 0zM224 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L160 112l0-16 32 0 0 16 0 210.7c18.6 6.6 32 24.4 32 45.3zM448 20.1l17.8 19.8 72 80 16.1 17.8-35.7 32.1-16.1-17.8L472 118.5 472 456l0 24-48 0 0-24 0-337.5-30.2 33.5-16.1 17.8-35.7-32.1 16.1-17.8 72-80L448 20.1z" />
    </Icon>
);

export default TemperatureArrowUp;