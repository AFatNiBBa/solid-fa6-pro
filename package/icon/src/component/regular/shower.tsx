
import { Icon } from "../../index";

/**
 * A component that renders the `shower` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shower?s=regular shower}
 * @preview ![shower](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shower.svg)
 */
const Shower: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 123.9C48 99.6 67.6 80 91.9 80c11.6 0 22.8 4.6 31 12.9l6.7 6.7c-27.8 43.4-22.8 101.7 15.1 139.6l7 7-.8 .8c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-.8 .8L303.4 81l-.2-.2c-37.9-37.9-96.2-43-139.6-15.1l-6.7-6.7C139.6 41.7 116.3 32 91.9 32C41.1 32 0 73.1 0 123.9L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-332.1zM269.5 115l6.8 6.8-90.5 90.5-7-7c-25-25-25-65.5 0-90.5s65.5-25 90.5 0l.2 .2c0 0 0 0 0 0zM416 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Shower;