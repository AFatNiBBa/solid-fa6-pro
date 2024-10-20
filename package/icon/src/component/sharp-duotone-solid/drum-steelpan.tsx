
import { Icon, generic } from "../../index";

/**
 * A component that renders the `drum-steelpan` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drum-steelpan?s=sharp-duotone-solid drum-steelpan}
 * @preview ![drum-steelpan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/drum-steelpan.svg)
 */
const DrumSteelpan: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M48 160c0 9.9 8 29.9 55 49.8c22.2 9.4 49.7 17 81 22.2l38-55.9L164.8 91.7c-23.4 4.9-44.2 11.2-61.7 18.6C56 130.1 48 150.1 48 160zM225.5 82.8L249.9 160l76.2 0 24.4-77.2C330.7 81 309.8 80 288 80s-42.7 1-62.5 2.8zm9.9 155.3c16.9 1.3 34.5 1.9 52.7 1.9s35.8-.7 52.7-1.9L326.1 192l-76.2 0-14.6 46.1zM353.9 176l38.1 55.9c31.4-5.2 58.8-12.8 81-22.2c47.1-19.9 55-39.9 55-49.8s-8-29.9-55-49.8c-17.5-7.4-38.3-13.7-61.7-18.6L353.9 176z" />
        <path d="M473 209.8c-22.2 9.4-49.7 17-81 22.2L353.9 176l57.4-84.3c23.4 4.9 44.2 11.2 61.7 18.6c47.1 19.9 55 39.9 55 49.8s-8 29.9-55 49.8zM340.7 238.1c-16.9 1.3-34.5 1.9-52.7 1.9s-35.8-.7-52.7-1.9L249.9 192l76.2 0 14.6 46.1zm-156.6-6.1c-31.4-5.2-58.8-12.8-81-22.2C56 189.9 48 169.9 48 160s8-29.9 55-49.8c17.5-7.4 38.3-13.7 61.7-18.6L222.1 176l-38 55.9zM225.5 82.8C245.3 81 266.2 80 288 80s42.7 1 62.5 2.8L326.1 160l-76.2 0L225.5 82.8zM576 160C576 80 447.1 32 288 32S0 80 0 160L0 352c0 80 128.9 128 288 128s288-48 288-128l0-192z" />
    </Icon>
);

export default DrumSteelpan;