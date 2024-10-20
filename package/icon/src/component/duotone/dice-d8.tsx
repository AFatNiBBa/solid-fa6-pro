
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=duotone dice-d8}
 * @preview ![dice-d8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dice-d8.svg)
 */
const DiceD8: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 232c0 1.2 .1 2.3 .4 3.5c1.2 5.2 4.9 9.5 9.9 11.5l208 80c1.9 .7 3.8 1.1 5.7 1.1c3.2 0 6.4-1 9.1-2.8c4.3-3 6.9-7.9 6.9-13.2l0-296c0-6.5-4-12.4-10-14.8s-13-1-17.5 3.7l-208 216c-2.9 3-4.5 7-4.5 11.1zM272 16l0 296c0 5.3 2.6 10.2 6.9 13.2c2.7 1.9 5.9 2.8 9.1 2.8c1.9 0 3.9-.4 5.7-1.1l208-80c5-1.9 8.7-6.2 9.9-11.5s-.4-10.7-4.1-14.6l-208-216C295 .2 288.1-1.3 282 1.2S272 9.5 272 16z" />
        <path d="M34.6 307.5c-4.1 6.3-3.3 14.6 1.9 20l176 179.7c4.5 4.6 11.5 6.1 17.5 3.6s10-8.3 10-14.8l0-112c0-6.6-4.1-12.6-10.3-14.9l-176-67.7c-7-2.7-15-.1-19.1 6.1zm442.7 0c-4.1-6.3-12.1-8.8-19.1-6.1l-176 67.7c-6.2 2.4-10.3 8.3-10.3 14.9l0 112c0 6.5 3.9 12.4 10 14.8s12.9 1 17.5-3.6l176-179.7c5.3-5.4 6.1-13.7 1.9-20z" />
    </Icon>
);

export default DiceD8;