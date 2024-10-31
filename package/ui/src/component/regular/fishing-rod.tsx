
import { Icon } from "../../index";

/**
 * A component that renders the `fishing-rod` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fishing-rod?s=regular fishing-rod}
 * @preview ![fishing-rod](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/fishing-rod.svg)
 */
const FishingRod: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M280.4 48c-3.2 0-6.3 .5-9.3 1.4L206.6 69.2C136.1 90.9 88 156.1 88 229.8l0 42.9c22.7 3.8 40 23.6 40 47.3l0 144c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 320c0-23.8 17.3-43.5 40-47.3l0-42.9C40 135 101.8 51.2 192.5 23.4L256.9 3.5C264.5 1.2 272.4 0 280.4 0c44 0 79.6 35.7 79.6 79.6l0 56.4c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56.4C312 62.2 297.8 48 280.4 48zM48 320l0 144 32 0 0-144-32 0zm208 24c0-71.6 55.6-127.8 89-148.1c4.3-2.6 9.6-2.6 14 0c33.5 20.3 89 76.6 89 148.1c0 32-16 80-64 112l27.3 27.3c3 3 4.7 7.1 4.7 11.3l0 1.4c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-1.4c0-4.2 1.7-8.3 4.7-11.3L320 456c-48-32-64-80-64-112zm128-32a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default FishingRod;