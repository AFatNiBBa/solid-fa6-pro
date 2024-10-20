
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=solid dice-d8}
 * @preview ![dice-d8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dice-d8.svg)
 */
const DiceD8: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 16c0-6.5-4-12.4-10-14.8s-13-1-17.5 3.7l-208 216c-3.7 3.9-5.3 9.3-4.1 14.6s4.9 9.5 9.9 11.5l208 80c4.9 1.9 10.5 1.2 14.8-1.7s6.9-7.9 6.9-13.2l0-296zM34.6 307.5c-4.1 6.3-3.3 14.6 1.9 20l176 179.7c4.5 4.6 11.5 6.1 17.5 3.6s10-8.3 10-14.8l0-112c0-6.6-4.1-12.6-10.3-14.9l-176-67.7c-7-2.7-15-.1-19.1 6.1zm442.7 0c-4.1-6.3-12.1-8.8-19.1-6.1l-176 67.7c-6.2 2.4-10.3 8.3-10.3 14.9l0 112c0 6.5 3.9 12.4 10 14.8s12.9 1 17.5-3.6l176-179.7c5.3-5.4 6.1-13.7 1.9-20zM282 1.2C276 3.6 272 9.5 272 16l0 296c0 5.3 2.6 10.2 6.9 13.2s9.9 3.6 14.8 1.7l208-80c5-1.9 8.7-6.2 9.9-11.5s-.4-10.7-4.1-14.6l-208-216C295 .2 288.1-1.3 282 1.2z" />
    </Icon>
);

export default DiceD8;