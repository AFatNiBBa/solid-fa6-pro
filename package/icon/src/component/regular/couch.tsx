
import { Icon } from "../../index";

/**
 * A component that renders the `couch` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/couch?s=regular couch}
 * @preview ![couch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/couch.svg)
 */
const Couch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 80L192 80c-44.2 0-80 35.8-80 80l0 40c-12.3-5.1-25.8-8-40-8c-2.7 0-5.4 .1-8 .3L64 160C64 89.3 121.3 32 192 32l256 0c70.7 0 128 57.3 128 128l0 32.3c-2.6-.2-5.3-.3-8-.3c-14.2 0-27.7 2.8-40 8l0-40c0-44.2-35.8-80-80-80zM568 224c2.7 0 5.4 .1 8 .4c36 4 64 34.5 64 71.6l0 136c0 26.5-21.5 48-48 48l-48 0c-20.9 0-38.7-13.4-45.3-32l-357.5 0c-6.6 18.6-24.4 32-45.3 32l-48 0c-26.5 0-48-21.5-48-48L0 296c0-37.1 28-67.6 64-71.6c2.6-.3 5.3-.4 8-.4c15.2 0 29.4 4.7 41 12.8c16.7 11.6 28.2 30 30.5 51.2l352.9 0c2.3-21.2 13.9-39.6 30.5-51.2c11.6-8.1 25.8-12.8 41-12.8zm-24 72l0 40 0 64 0 32 48 0 0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24zM496 400l0-64-352 0 0 64 352 0zM96 400l0-64 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 136 48 0 0-32z" />
    </Icon>
);

export default Couch;