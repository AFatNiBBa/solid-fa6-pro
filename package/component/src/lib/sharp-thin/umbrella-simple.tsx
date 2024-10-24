
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=sharp-thin umbrella-simple}
 * @preview ![umbrella-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/umbrella-simple.svg)
 */
const UmbrellaSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8l0-8L248 0l0 8 0 24.1C115.7 36.2 8.6 140.7 .5 272c-.3 5.3-.5 10.6-.5 16l16 0 480 0 16 0c0-5.4-.2-10.7-.5-16C503.4 140.7 396.3 36.2 264 32.1L264 8zm-8 40c127.2 0 231.2 98.9 239.5 224l-479 0C24.8 146.9 128.8 48 256 48zm8 414.2L264 320l-16 0 0 142.2c0 18.7-15.2 33.8-33.8 33.8c-14.6 0-27.5-9.3-32.1-23.1l-6.5-19.4-2.5-7.6-15.2 5.1 2.5 7.6 6.5 19.4c6.8 20.4 25.8 34.1 47.3 34.1c27.5 0 49.8-22.3 49.8-49.8z" />
    </Icon>
);

export default UmbrellaSimple;