
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sandwich` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sandwich?s=duotone sandwich}
 * @preview ![sandwich](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sandwich.svg)
 */
const Sandwich: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 272c0 17.7 14.3 32 32 32c22.7 0 44.3-10.3 58.8-17.2c1.3-.6 2.6-1.2 3.8-1.8c17.4-8.2 29.4-13 41.4-13c16.2 0 27.5 5 45.4 13.1c18 8.2 41.4 18.9 74.6 18.9s56.6-10.7 74.5-18.9C348.5 277 359.8 272 376 272c12 0 23.9 4.7 41.4 13c1.2 .6 2.5 1.2 3.8 1.8c14.5 6.9 36.1 17.2 58.8 17.2c17.7 0 32-14.3 32-32s-14.3-32-32-32c-7.2 0-15.8-3.7-35.4-13c-16.6-7.8-40.6-19-68.6-19c-30.6 0-53 10.2-70.1 18l-1.9 .9C286.9 234.7 274.3 240 256 240s-30.9-5.3-48.1-13.1l-1.9-.9c-17-7.8-39.4-18-70.1-18c-28 0-52.1 11.3-68.6 19c-19.6 9.2-28.2 13-35.4 13c-17.7 0-32 14.3-32 32zm212.8 64c7.4 0 14.6 2 20.9 5.7c23.4 13.6 46.8 27.3 70.2 40.9c.6 .4 1.3 .7 1.9 1s1.3 .6 1.9 .9c1.3 .5 2.6 1 4 1.4c2.7 .7 5.5 1.1 8.3 1.1c5.6 0 11.1-1.5 16.1-4.4l70.2-40.9c6.4-3.7 13.6-5.7 20.9-5.7l-214.5 0z" />
        <path d="M32 64C14.3 64 0 78.3 0 96l0 48c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-48c0-17.7-14.3-32-32-32L32 64zM233.7 341.7c-6.4-3.7-13.6-5.7-20.9-5.7l-4.8 0L32 336c-17.7 0-32 14.3-32 32l0 48c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-48c0-17.7-14.3-32-32-32l-48 0-4.8 0c-7.4 0-14.6 2-20.9 5.7l-70.2 40.9c-10 5.8-22.3 5.8-32.2 0l-70.2-40.9z" />
    </Icon>
);

export default Sandwich;