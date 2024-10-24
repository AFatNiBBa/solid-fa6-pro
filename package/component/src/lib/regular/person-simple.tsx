
import { Icon } from "../../index";

/**
 * A component that renders the `person-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=regular person-simple}
 * @preview ![person-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-simple.svg)
 */
const PersonSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M128 128A64 64 0 1 0 128 0a64 64 0 1 0 0 128zM73.7 237.3C75.1 220.8 89 208 105.6 208l44.8 0c16.6 0 30.5 12.8 31.9 29.3l4.1 49.3c.8 9.3-6.6 17.3-15.9 17.3l-2.4 0-80 0-2.4 0c-9.4 0-16.7-8-15.9-17.3l4.1-49.3zM112 352l32 0 0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-139.7c26.5-9.5 44.7-35.8 42.2-65.6l-4.1-49.3C226.7 191.9 192 160 150.4 160l-44.8 0c-41.6 0-76.3 31.9-79.7 73.4l-4.1 49.3c-2.5 29.8 15.7 56.1 42.2 65.6L64 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136z" />
    </Icon>
);

export default PersonSimple;