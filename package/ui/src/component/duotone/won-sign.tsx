
import { Icon, generic } from "../../index";

/**
 * A component that renders the `won-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/won-sign?s=duotone won-sign}
 * @preview ![won-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/won-sign.svg)
 */
const WonSign: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l40.9 0L51.6 224 32 224c-17.7 0-32 14.3-32 32zm119.1-32c7.1 21.3 14.2 42.7 21.3 64l26.6 0 16-64-63.9 0zM233 288l46 0-16-64-14 0c-5.3 21.3-10.7 42.7-16 64zm96-64c5.3 21.3 10.7 42.7 16 64l26.6 0 21.3-64L329 224zm110.1 64l40.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-19.6 0c-7.1 21.3-14.2 42.7-21.3 64z" />
        <path d="M21.9 33.6c16.8-5.6 34.9 3.5 40.5 20.2l93.2 279.7L225 56.2C228.5 42 241.3 32 256 32s27.5 10 31 24.2l69.3 277.4L449.6 53.9c5.6-16.8 23.7-25.8 40.5-20.2s25.8 23.7 20.2 40.5l-128 384c-4.5 13.5-17.4 22.4-31.6 21.9s-26.4-10.4-29.8-24.2L256 195.9 191 455.8c-3.5 13.8-15.6 23.7-29.8 24.2s-27.1-8.4-31.6-21.9L1.6 74.1C-3.9 57.4 5.1 39.2 21.9 33.6z" />
    </Icon>
);

export default WonSign;