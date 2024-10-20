
import { Icon } from "../../index";

/**
 * A component that renders the `down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down?s=regular down}
 * @preview ![down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/down.svg)
 */
const Down: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 429.6L49.3 279.7c-.8-.8-1.3-2-1.3-3.2c0-2.5 2-4.6 4.6-4.6l83.4 0c13.3 0 24-10.7 24-24l0-168 64 0 0 168c0 13.3 10.7 24 24 24l83.4 0c2.5 0 4.6 2 4.6 4.6c0 1.2-.5 2.3-1.3 3.2L192 429.6zM0 276.6c0 13.5 5.2 26.5 14.5 36.3L161.1 466.8c8.1 8.5 19.2 13.2 30.9 13.2s22.8-4.8 30.9-13.2L369.5 312.8c9.3-9.8 14.5-22.8 14.5-36.3c0-29-23.5-52.6-52.6-52.6L272 224l0-144c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48l0 144-59.4 0C23.5 224 0 247.5 0 276.6z" />
    </Icon>
);

export default Down;