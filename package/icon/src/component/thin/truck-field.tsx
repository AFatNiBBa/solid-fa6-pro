
import { Icon } from "../../index";

/**
 * A component that renders the `truck-field` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-field?s=thin truck-field}
 * @preview ![truck-field](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/truck-field.svg)
 */
const TruckField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 48c26.5 0 48 21.5 48 48l0 8 0 104 0 16 0 144-123.3 0c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64L48 368l0-80 0-16 0-128 0-16 0-32c0-26.5 21.5-48 48-48l224 0zM32 288l0 80L8 368c-4.4 0-8 3.6-8 8s3.6 8 8 8l24 0 16 0 24.4 0c-.2 2.6-.4 5.3-.4 8c0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8L368 384l16 0 8.4 0c-.2 2.6-.4 5.3-.4 8c0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8l24.4 0 16 0 24 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-96c0-35.3-28.7-64-64-64l-27.1 0L472 118.1C465.2 104.6 451.4 96 436.2 96L384 96c0-35.3-28.7-64-64-64L96 32C60.7 32 32 60.7 32 96l0 32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32zm0-16c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l0 128zm467.1-64L384 208l0-96 52.2 0c9.1 0 17.4 5.1 21.5 13.3L499.1 208zM384 368l0-144 127.8 0 .3 0 31.8 0c26.5 0 48 21.5 48 48l0 96-27.3 0c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64L384 368zM88 392a72 72 0 1 1 144 0A72 72 0 1 1 88 392zm392-72a72 72 0 1 1 0 144 72 72 0 1 1 0-144z" />
    </Icon>
);

export default TruckField;