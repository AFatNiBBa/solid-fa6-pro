
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire?s=duotone fire}
 * @preview ![fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fire.svg)
 */
const Fire: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 276.5C0 404.1 98.4 512 224 512c124.2 0 224-107.8 224-235.5c0-29.3-13.5-71.1-33.8-111.9c-20.7-41.4-49.9-85-84.5-118c-7.8-7.5-20.1-7.5-28-.1c-13.5 12.8-26 28.5-37 42.9c-24.2-30.2-50.1-58.1-77.7-84C183.1 1.8 178.1 0 173.1 0c-5 0-9.9 1.8-13.8 5.4c-46.5 43.2-86 92.3-113.9 139.3C17.8 191.2 0 238.1 0 276.5zm112 30.3c0-30.1 16.9-56.9 50.8-99.4c6.3-8 18.4-7.9 24.7 .1c16.8 21.3 46.3 58.8 62.8 79.8c6.2 7.9 18.1 8.1 24.7 .5l25.2-29.3c6.5-7.6 18-6.9 22.5 2c9 16.4 13.4 34.5 13.4 52.2c0 32.1-14.3 63.2-41.5 82.2c-21.1 14-43.5 21-68.8 21C162.6 416 112 375.4 112 306.8z" />
        <path d="M294.5 395c-21.1 14-43.5 21-68.8 21C162.6 416 112 375.4 112 306.8c0-30.1 16.9-56.9 50.8-99.4c6.3-8 18.4-7.9 24.7 .1c16.8 21.3 46.3 58.8 62.8 79.8c6.2 7.9 18.1 8.1 24.7 .5l25.2-29.3c6.5-7.6 18-6.9 22.5 2c25.3 46.2 14 105-28.1 134.4z" />
    </Icon>
);

export default Fire;