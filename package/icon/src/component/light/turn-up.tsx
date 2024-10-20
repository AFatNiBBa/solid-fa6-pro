
import { Icon } from "../../index";

/**
 * A component that renders the `turn-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=light turn-up}
 * @preview ![turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/turn-up.svg)
 */
const TurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 160l-57.3 0c-3.7 0-6.7-3-6.7-6.7c0-1.9 .8-3.7 2.2-5L192 35.8 317.8 148.3c1.4 1.3 2.2 3.1 2.2 5c0 3.7-3 6.7-6.7 6.7L256 160c-17.7 0-32 14.3-32 32l0 176c0 61.9-50.1 112-112 112l-64 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l64 0c26.5 0 48-21.5 48-48l0-176c0-17.7-14.3-32-32-32zM206 5.3C202.1 1.9 197.2 0 192 0s-10.1 1.9-14 5.3L44.9 124.5C36.7 131.8 32 142.3 32 153.3C32 174.7 49.3 192 70.7 192L96 192l32 0 0 32 0 144c0 8.8-7.2 16-16 16l-64 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l64 0c79.5 0 144-64.5 144-144l0-144 0-32 32 0 25.3 0c21.4 0 38.7-17.3 38.7-38.7c0-11-4.7-21.5-12.9-28.8L206 5.3z" />
    </Icon>
);

export default TurnUp;