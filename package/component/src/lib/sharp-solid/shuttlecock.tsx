
import { Icon } from "../../index";

/**
 * A component that renders the `shuttlecock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuttlecock?s=sharp-solid shuttlecock}
 * @preview ![shuttlecock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shuttlecock.svg)
 */
const Shuttlecock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 0l0 48-16 0-41 0L250.6 87.1l-31.3 99.2L176 208l-40 80 27 27 71.9-71.9L281.1 96.8 286.4 80 304 80l104 0 24 0 0 24 0 104 0 17.6-16.8 5.3L268.8 277.1 197 349l27 27 80-40 21.6-43.3 99.2-31.3L464 249l0-41 0-16 48 0 0 96L240 416l-36.7 36.7-144-144L96 272 224 0l96 0zM36.7 331.3l144 144-6.9 6.9c-19.1 19.1-45 29.8-72 29.8C45.6 512 0 466.4 0 410.2c0-27 10.7-52.9 29.8-72l6.9-6.9z" />
    </Icon>
);

export default Shuttlecock;