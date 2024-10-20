
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-left-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left-up?s=duotone turn-left-up}
 * @preview ![turn-left-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/turn-left-up.svg)
 */
const TurnLeftUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M144 192l0 192c0 70.7 57.3 128 128 128l80 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-80 0c-17.7 0-32-14.3-32-32l0-192-96 0z" />
        <path d="M38.5 151.5c-6.6 7-8.4 17.2-4.6 26s12.5 14.5 22 14.5l272 0c9.6 0 18.2-5.7 22-14.5s2-19-4.6-26l-136-144C204.9 2.7 198.6 0 192 0s-12.9 2.7-17.4 7.5l-136 144z" />
    </Icon>
);

export default TurnLeftUp;