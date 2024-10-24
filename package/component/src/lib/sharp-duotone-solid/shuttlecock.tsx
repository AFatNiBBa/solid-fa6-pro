
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shuttlecock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuttlecock?s=sharp-duotone-solid shuttlecock}
 * @preview ![shuttlecock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shuttlecock.svg)
 */
const Shuttlecock: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 410.2C0 466.4 45.6 512 101.8 512c27 0 52.9-10.7 72-29.8L192 464 48 320 29.8 338.2C10.7 357.3 0 383.2 0 410.2z" />
        <path d="M48 320l48-48L224 0l96 0 0 48-16 0-41 0L250.6 87.1l-31.3 99.2L176 208l-40 80 27 27 71.9-71.9L281.1 96.8 286.4 80 304 80l104 0 24 0 0 24 0 104 0 17.6-16.8 5.3L268.8 277.1 197 349l27 27 80-40 21.6-43.3 99.2-31.3L464 249l0-41 0-16 48 0 0 96L240 416l-48 48L48 320z" />
    </Icon>
);

export default Shuttlecock;