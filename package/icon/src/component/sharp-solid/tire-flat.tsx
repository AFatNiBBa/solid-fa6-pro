
import { Icon } from "../../index";

/**
 * A component that renders the `tire-flat` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tire-flat?s=sharp-solid tire-flat}
 * @preview ![tire-flat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tire-flat.svg)
 */
const TireFlat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32C114.6 32 0 146.6 0 288c0 47.9 13.2 92.8 36.1 131.1L0 448l0 64 512 0 0-64-36.1-28.9C498.8 380.8 512 335.9 512 288C512 146.6 397.4 32 256 32zm96 384c-2.1 1.6-4.3 3.2-6.6 4.7C319.9 437.9 289.1 448 256 448c-36 0-69.3-11.9-96-32c-38.9-29.2-64-75.7-64-128c0-88.4 71.6-160 160-160s160 71.6 160 160c0 52.3-25.1 98.8-64 128zm-96-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm16 95c44.3-5.5 81.5-33.6 99.8-72.4l-61.9-20.1c-8.6 13.5-22.1 23.5-38 27.6l0 65zM381.7 312.2c1.5-7.8 2.3-15.9 2.3-24.2c0-36.8-15.5-69.9-40.3-93.3l-38.2 52.6c9.1 11 14.5 25.2 14.5 40.6c0 1.4 0 2.7-.1 4l61.8 20.1zM256 224c8.3 0 16.3 1.6 23.6 4.5l38.2-52.6C299.5 165.8 278.4 160 256 160s-43.5 5.8-61.8 15.9l28.1 38.8 10 13.8c7.3-2.9 15.3-4.5 23.6-4.5zM128 288c0 8.3 .8 16.3 2.3 24.2L192.1 292c-.1-1.3-.1-2.7-.1-4c0-15.4 5.5-29.6 14.5-40.6l-10.1-13.9-28.1-38.7C143.5 218.1 128 251.2 128 288zm12.2 54.6c18.3 38.8 55.5 66.9 99.8 72.4l0-65c-15.8-4.1-29.3-14.1-37.9-27.5l-61.9 20.1z" />
    </Icon>
);

export default TireFlat;