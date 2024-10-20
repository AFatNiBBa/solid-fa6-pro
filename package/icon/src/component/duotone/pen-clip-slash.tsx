
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-clip-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-clip-slash?s=duotone pen-clip-slash}
 * @preview ![pen-clip-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-clip-slash.svg)
 */
const PenClipSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64.5 483.3c-1.6 7.9 .9 16 6.6 21.7c4.5 4.5 10.7 7 17 7c1.6 0 3.1-.2 4.7-.5l25-5c66.6-13.3 127.8-46.1 175.8-94.1l47.7-47.7L195.8 250.3l-32.3 32.3c-48 48-80.8 109.2-94.1 175.8l-5 25zm128-357.7c12.7 9.9 25.4 19.9 38.1 29.8L271 114.9c9.4-9.4 24.6-9.4 33.9 0L318.1 128l-53.8 53.8c48.6 38.1 97.1 76.1 145.7 114.2l55-55 17-17-1-1-16-16-96-96-17-17L338.9 81c-28.1-28.1-73.7-28.1-101.8 0l-44.6 44.6zM374.6 71.4l17 17 96 96 16 16 1 1c17.4-17.4 34.7-34.7 52.1-52.1c12.5-12.5 18.7-28.9 18.7-45.3s-6.2-32.8-18.7-45.3L517.3 19.3C504.8 6.8 488.4 .6 472 .6s-32.8 6.2-45.3 18.7L374.6 71.4z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default PenClipSlash;