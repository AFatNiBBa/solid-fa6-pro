
import { Icon } from "../../index";

/**
 * A component that renders the `salad` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salad?s=solid salad}
 * @preview ![salad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/salad.svg)
 */
const Salad: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 96c2.6 0 5.2 .1 7.8 .2C406.2 76.5 380.5 64 352 64c-8.7 0-17.2 1.2-25.3 3.4C309.5 27.7 270 0 224 0s-85.5 27.7-102.7 67.4c-8-2.2-16.5-3.4-25.3-3.4C43 64 0 107 0 160s43 96 96 96l73.4 0L84.7 171.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L208 249.4 208 112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 144 52 0c-2.6-10.2-4-21-4-32c0-70.7 57.3-128 128-128zM27.4 288C12.3 288 0 300.3 0 315.4c0 70.5 44.4 130.7 106.7 154.1l1.8 14.4c2 16 15.6 28 31.8 28l231.5 0c16.1 0 29.8-12 31.8-28l1.8-14.4C467.6 446.1 512 385.9 512 315.4c0-15.1-12.3-27.4-27.4-27.4L27.4 288zM512 224c0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32l181.1 0c3.5-10 5.5-20.8 5.5-32z" />
    </Icon>
);

export default Salad;