
import { Icon, generic } from "../../index";

/**
 * A component that renders the `socks` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/socks?s=duotone socks}
 * @preview ![socks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/socks.svg)
 */
const Socks: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2l21.6-16.2c-9.7-18-15.2-38.7-15.2-60.6c0-40.3 19-78.2 51.2-102.4l64-48c8.1-6 12.8-15.5 12.8-25.6l0-80-160 0 0 80c0 20.1-9.5 39.1-25.6 51.2l-64 48C14.2 357.3 0 385.8 0 416zM128 48l0 16 160 0 0-16c0-14.5 3.9-28.2 10.7-39.9C291 3 281.9 0 272 0L176 0c-26.5 0-48 21.5-48 48zm0 48l0 32 160 0 0-32L128 96zM320 64l0 32 192 0 0-32L320 64zm0 64l0 32 192 0 0-32-192 0z" />
        <path d="M320 128l192 0 0-32L320 96l0 32zm0 32l0 80c0 20.1-9.5 39.1-25.6 51.2l-64 48C206.2 357.3 192 385.8 192 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2l115.2-86.4C493 382.2 512 344.3 512 304l0-144-192 0zM512 64l0-16c0-26.5-21.5-48-48-48L368 0c-26.5 0-48 21.5-48 48l0 16 192 0zM128 64l0 32 160 0 0-32L128 64zm160 64l-160 0 0 32 160 0 0-32z" />
    </Icon>
);

export default Socks;