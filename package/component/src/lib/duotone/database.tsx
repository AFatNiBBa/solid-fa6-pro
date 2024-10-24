
import { Icon, generic } from "../../index";

/**
 * A component that renders the `database` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/database?s=duotone database}
 * @preview ![database](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/database.svg)
 */
const Database: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 80l0 48c0 44.2 100.3 80 224 80s224-35.8 224-80l0-48C448 35.8 347.7 0 224 0S0 35.8 0 80zM0 186.1L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0-101.9c-14.9 11.8-34 21.2-54.8 28.6C348.3 230.7 288.5 240 224 240s-124.3-9.3-169.2-25.3C34 207.3 14.9 197.8 0 186.1zm0 160L0 432c0 44.2 100.3 80 224 80s224-35.8 224-80l0-85.9c-14.9 11.8-34 21.2-54.8 28.6C348.3 390.7 288.5 400 224 400s-124.3-9.3-169.2-25.3C34 367.3 14.9 357.8 0 346.1z" />
        <path d="M0 186.1L0 128c0 44.2 100.3 80 224 80s224-35.8 224-80l0 58.1c-14.9 11.8-34 21.2-54.8 28.6C348.3 230.7 288.5 240 224 240s-124.3-9.3-169.2-25.3C34 207.3 14.9 197.8 0 186.1zm0 160L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0 58.1c-14.9 11.8-34 21.2-54.8 28.6C348.3 390.7 288.5 400 224 400s-124.3-9.3-169.2-25.3C34 367.3 14.9 357.8 0 346.1z" />
    </Icon>
);

export default Database;