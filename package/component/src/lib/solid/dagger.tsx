
import { Icon } from "../../index";

/**
 * A component that renders the `dagger` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=solid dagger}
 * @preview ![dagger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dagger.svg)
 */
const Dagger: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96L48 128c-26.5 0-48 21.5-48 48s21.5 48 48 48c20.9 0 38.7-13.4 45.3-32l98.7 0 98.7 0c6.6 18.6 24.4 32 45.3 32c26.5 0 48-21.5 48-48s-21.5-48-48-48l-112 0 0-96zM128 224l0 24 0 166.8c0 10.5 2.9 20.8 8.5 29.7l35.1 56.2c4.4 7 12.1 11.3 20.4 11.3s16-4.3 20.4-11.3l35.1-56.2c5.6-8.9 8.5-19.2 8.5-29.7L256 248l0-24-24 0-80 0-24 0z" />
    </Icon>
);

export default Dagger;