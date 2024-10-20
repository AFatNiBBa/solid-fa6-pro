
import { Icon } from "../../index";

/**
 * A component that renders the `street-view` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/street-view?s=sharp-thin street-view}
 * @preview ![street-view](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/street-view.svg)
 */
const StreetView: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 304l16 0 0-16 0-64c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64l0 64 0 16 16 0 17.8 0L208 432l96 0 14.2-128 17.8 0zm-33.7-1.8L289.7 416l-67.4 0L209.7 302.2 208.1 288l-14.3 0L176 288l0-64c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 64-17.8 0-14.3 0-1.6 14.2zM208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 64A64 64 0 1 0 256 0a64 64 0 1 0 0 128zM16 425.5c0-9.1 7.5-19.9 26.5-30.8c18.4-10.6 45.3-19.9 78.4-26.9l-3.3-15.7c-33.9 7.1-62.6 16.9-83.1 28.7C14.6 392.3 0 407.2 0 425.5c0 14.5 9.3 26.9 22.7 37c13.5 10.1 32.6 18.9 55.5 26.2C124.1 503.1 186.9 512 256 512s131.9-8.9 177.8-23.4c22.9-7.2 42-16 55.5-26.2c13.4-10 22.7-22.4 22.7-37c0-18.3-14.6-33.2-34.5-44.7c-20.4-11.8-49.1-21.5-83.1-28.7l-3.3 15.7c33.1 6.9 60 16.2 78.4 26.9c18.9 10.9 26.5 21.7 26.5 30.8c0 7.2-4.6 15.4-16.3 24.2c-11.6 8.6-28.8 16.8-50.8 23.7C385 487.3 323.9 496 256 496s-129-8.7-172.9-22.6c-22-7-39.2-15.1-50.8-23.7c-11.7-8.8-16.3-17-16.3-24.2z" />
    </Icon>
);

export default StreetView;