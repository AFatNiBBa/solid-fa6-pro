
import { Icon } from "../../index";

/**
 * A component that renders the `sickle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sickle?s=solid sickle}
 * @preview ![sickle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sickle.svg)
 */
const Sickle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M212.7 340.7L181 309c-33.9-33.9-53-80-53-128C128 81 209 0 309 0l11 0c90.1 0 165.8 62.1 186.4 145.8c1.8 7.3-4 14.2-11.5 14.2c-3.9 0-7.5-1.9-9.9-4.9C458.9 122.9 419.5 104 377.8 104C301.7 104 240 165.7 240 241.8l0 9.8c0 20.7 5.2 39.7 12.2 58.6c2.2 6 .9 12.8-3.7 17.3l-13.2 13.2c-6.2 6.2-16.4 6.2-22.6 0zM121 311l24 24 32 32 24 24c9.4 9.4 9.4 24.6 0 33.9l-16 16c-9.4 9.4-24.6 9.4-33.9 0l-7-7L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l71-71-7-7c-9.4-9.4-9.4-24.6 0-33.9l16-16c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default Sickle;