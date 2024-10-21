
import { Icon } from "../../index";

/**
 * A component that renders the `poop` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poop?s=solid poop}
 * @preview ![poop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/poop.svg)
 */
const Poop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M254.4 6.6c3.5-4.3 9-6.5 14.5-5.7C315.8 7.2 352 47.4 352 96c0 11.2-1.9 22-5.5 32l5.5 0c35.3 0 64 28.7 64 64c0 19.1-8.4 36.3-21.7 48l13.7 0c39.8 0 72 32.2 72 72c0 23.2-11 43.8-28 57c34.1 5.7 60 35.3 60 71c0 39.8-32.2 72-72 72L72 512c-39.8 0-72-32.2-72-72c0-35.7 25.9-65.3 60-71c-17-13.2-28-33.8-28-57c0-39.8 32.2-72 72-72l13.7 0C104.4 228.3 96 211.1 96 192c0-35.3 28.7-64 64-64l16.2 0c44.1-.1 79.8-35.9 79.8-80c0-9.2-1.5-17.9-4.3-26.1c-1.8-5.2-.8-11.1 2.8-15.4z" />
    </Icon>
);

export default Poop;