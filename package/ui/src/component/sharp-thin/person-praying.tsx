
import { Icon } from "../../index";

/**
 * A component that renders the `person-praying` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-praying?s=sharp-thin person-praying}
 * @preview ![person-praying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/person-praying.svg)
 */
const PersonPraying: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 224 64a64 64 0 1 0 128 0zM156.7 144l-4.8 0-2.2 4.3L79.8 280.9c-20.2 38.5-9.4 85.9 25.6 111.8L158.6 432 40 432l-8 0 0 8 0 64 0 8 8 0 234.2 0 5.8 0 1.8-5.5L302 445.3l1.8-5.5-4.7-3.4L187.7 354l45-90 42.9 58.9 5 6.8 6.6-5.4L410.2 223.7l6.2-5.1-5.1-6.2-40.5-49.5-5.1-6.2-6.2 5.1-64.1 52.5-48.7-66.9-2.4-3.3-4.1 0-83.6 0zM94 288.4L161.5 160l74.7 0 51.3 70.5 5 6.8L299 232l64.5-52.8 30.4 37.2L283.5 306.7l-45.6-62.7-7.7-10.6-5.9 11.8L170.4 352.9l-3 6 5.4 4L285 445.8 268.4 496 48 496l0-48 134.9 0 24.3 0-19.5-14.4-72.8-53.8c-28.6-21.1-37.5-60-20.9-91.4z" />
    </Icon>
);

export default PersonPraying;