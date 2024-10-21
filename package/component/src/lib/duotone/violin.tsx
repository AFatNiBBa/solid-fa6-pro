
import { Icon, generic } from "../../index";

/**
 * A component that renders the `violin` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/violin?s=duotone violin}
 * @preview ![violin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/violin.svg)
 */
const Violin: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 368c0 26.7 7.3 51.7 19.9 73.1c16.8-12.6 33.7-25.3 50.5-37.9c6.4-4.8 15.3-4.1 20.9 1.5c5.3 5.3 10.7 10.7 16 16c5.6 5.6 6.3 14.5 1.5 20.9c-12.6 16.8-25.3 33.7-37.9 50.5C220.3 504.7 245.3 512 272 512c30.8 0 59.3-9.6 82.6-26.1c6.7-4.7 7.6-13.8 4.3-21.3c-4.5-10-7-21-7-32.7c0-44.2 35.8-80 80-80c5.3 0 10.5 .5 15.4 1.5c7.4 1.4 15.4-1 18.8-7.7c8.8-17.4 13.8-37 13.8-57.8c0-23.7-6.5-46-17.7-65c-7.9 7.9-15.8 15.8-23.7 23.7c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3c7.9-7.9 15.8-15.8 23.7-23.7C398 166.5 375.7 160 352 160c-20.8 0-40.4 5-57.8 13.8c-6.7 3.4-9.1 11.4-7.7 18.8c1 5 1.5 10.2 1.5 15.4c0 44.2-35.8 80-80 80c-11.6 0-22.7-2.5-32.7-7c-7.4-3.3-16.6-2.4-21.3 4.3C137.6 308.7 128 337.2 128 368zM448 72a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48-48a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48 144a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48-48a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M630.6 54.6l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM345 7c9.4 9.4 9.4 24.6 0 33.9L41 345c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L311 7c9.4-9.4 24.6-9.4 33.9 0zM219.3 404.7l16 16c5.6 5.6 6.3 14.5 1.5 20.9l-48 64c-2.8 3.7-7 6-11.7 6.4s-9.2-1.4-12.4-4.6l-32-32c-3.3-3.3-5-7.8-4.6-12.4s2.6-8.9 6.4-11.7l64-48c6.4-4.8 15.3-4.1 20.9 1.5z" />
    </Icon>
);

export default Violin;