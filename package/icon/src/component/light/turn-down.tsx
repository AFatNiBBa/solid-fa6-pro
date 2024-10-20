
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=light turn-down}
 * @preview ![turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/turn-down.svg)
 */
const TurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 352l-57.3 0c-3.7 0-6.7 3-6.7 6.7c0 1.9 .8 3.7 2.2 5L192 476.2 317.8 363.7c1.4-1.3 2.2-3.1 2.2-5c0-3.7-3-6.7-6.7-6.7L256 352c-17.7 0-32-14.3-32-32l0-176c0-61.9-50.1-112-112-112L48 32c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l64 0c26.5 0 48 21.5 48 48l0 176c0 17.7-14.3 32-32 32zm78 154.7c-3.8 3.4-8.8 5.3-14 5.3s-10.1-1.9-14-5.3L44.9 387.5C36.7 380.2 32 369.7 32 358.7C32 337.3 49.3 320 70.7 320L96 320l32 0 0-32 0-144c0-8.8-7.2-16-16-16l-64 0C21.5 128 0 106.5 0 80L0 48C0 21.5 21.5 0 48 0l64 0c79.5 0 144 64.5 144 144l0 144 0 32 32 0 25.3 0c21.4 0 38.7 17.3 38.7 38.7c0 11-4.7 21.5-12.9 28.8L206 506.7z" />
    </Icon>
);

export default TurnDown;