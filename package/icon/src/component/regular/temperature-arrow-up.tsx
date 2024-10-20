
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-arrow-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-arrow-up?s=regular temperature-arrow-up}
 * @preview ![temperature-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/temperature-arrow-up.svg)
 */
const TemperatureArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 48c-35.3 0-64 28.7-64 64l0 161.9c0 14.5-5.7 27.1-12.8 36.6C87.1 326.5 80 346.4 80 368c0 53 43 96 96 96s96-43 96-96c0-21.6-7.1-41.5-19.2-57.5c-7.1-9.5-12.8-22.1-12.8-36.6L240 112c0-35.3-28.7-64-64-64zM64 112C64 50.1 114.1 0 176 0s112 50.1 112 112l0 161.9c0 1.7 .7 4.4 3.2 7.8c18.1 24.1 28.8 54 28.8 86.4c0 79.5-64.5 144-144 144S32 447.5 32 368c0-32.4 10.7-62.3 28.8-86.4c2.5-3.4 3.2-6.1 3.2-7.8L64 112zM224 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L160 112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 210.7c18.6 6.6 32 24.4 32 45.3zM448 32c6.8 0 13.3 2.9 17.8 7.9l72 80c8.9 9.9 8.1 25-1.8 33.9s-25 8.1-33.9-1.8L472 118.5 472 456c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-337.5-30.2 33.5c-8.9 9.9-24 10.7-33.9 1.8s-10.7-24-1.8-33.9l72-80c4.6-5.1 11-7.9 17.8-7.9z" />
    </Icon>
);

export default TemperatureArrowUp;