
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flask-round-potion` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask-round-potion?s=duotone flask-round-potion}
 * @preview ![flask-round-potion](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flask-round-potion.svg)
 */
const FlaskRoundPotion: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 352c0 56 22.1 106.9 58.2 144.3C84.5 507 99.3 512 114.2 512l219.6 0c15 0 29.7-5 40.1-15.7C409.9 458.9 432 408 432 352c0-76.8-41.6-143.8-103.5-179.9c-5.2-3-8.5-8.4-8.5-14.4L320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L304 0 144 0 128 0C110.3 0 96 14.3 96 32s14.3 32 32 32l0 93.7c0 6-3.3 11.4-8.5 14.4C57.6 208.2 16 275.2 16 352zm64 0c0-7.2 .5-14.3 1.5-21.2c6.5-44.1 33-81.7 70.2-103.4c23.4-13.6 40.3-39.3 40.3-69.7L192 64l64 0 0 93.7c0 30.4 16.9 56.1 40.3 69.7c43 25 71.6 71.4 71.7 124.7c0 .8 0 1.7 0 2.9c0 .1 0 .5 0 1c0 .4 0 .9-.1 1.6c-.5 14.1-3.1 27.7-7.4 40.5c-.7 2-1.4 4.1-2.2 6.1c-6.3 16.2-15.5 31-26.9 43.7l-214.7 0C93.8 422.5 80 388.9 80 352z" />
        <path d="M368 351.8c-58.6-1.7-85.4-12.6-109.9-22.6c-22-9-42.2-17.2-82.1-17.2c-42.3 0-73.4 9.2-94.5 18.8c-1 6.9-1.5 14-1.5 21.2c0 36.9 13.8 70.5 36.7 96l214.7 0c22.9-25.5 36.7-59.1 36.7-96l0-.2z" />
    </Icon>
);

export default FlaskRoundPotion;