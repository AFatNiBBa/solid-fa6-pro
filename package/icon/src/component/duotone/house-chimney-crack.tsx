
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-chimney-crack` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney-crack?s=duotone house-chimney-crack}
 * @preview ![house-chimney-crack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-chimney-crack.svg)
 */
const HouseChimneyCrack: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 270.5L64.1 448c0 35.3 28.7 64 64 64l102.3 0-31.4-52.3c-4.1-6.8-2.6-15.5 3.5-20.5L288 368l-60.2-82.8c-10.9-15 8.2-33.5 22.8-22l117.9 92.6c8 6.3 8.2 18.4 .4 24.9L288 448l38.4 64 122.1 0c35.4 0 64-28.7 64-64c-.1-59.2-.3-118.3-.4-177.4L288 74.5 64 270.5z" />
        <path d="M309.1 7.9C297-2.6 279-2.6 266.9 7.9l-256 224c-13.3 11.6-14.6 31.9-3 45.2s31.9 14.6 45.2 3L288 74.5 522.9 280.1c13.3 11.6 33.5 10.3 45.2-3s10.3-33.5-3-45.2L512 185.5 512 64c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 37.5L309.1 7.9z" />
    </Icon>
);

export default HouseChimneyCrack;