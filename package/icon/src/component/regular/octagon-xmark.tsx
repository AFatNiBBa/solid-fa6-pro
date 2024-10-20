
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-xmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-xmark?s=regular octagon-xmark}
 * @preview ![octagon-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/octagon-xmark.svg)
 */
const OctagonXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M191.5 48.1c-6.4 0-12.5 2.5-17 7L55.1 174.5c-4.5 4.5-7 10.6-7 17l0 129c0 6.4 2.5 12.5 7 17L21.2 371.4C7.7 357.9 .1 339.6 .1 320.5l0-129c0-19.1 7.6-37.4 21.1-50.9L140.6 21.2C154.1 7.7 172.4 .1 191.5 .1l129 0c19.1 0 37.4 7.6 50.9 21.1L490.8 140.6c13.5 13.5 21.1 31.8 21.1 50.9l0 129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8c-13.5 13.5-31.8 21.1-50.9 21.1l-129 0c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4l33.9-33.9L174.5 456.9c4.5 4.5 10.6 7 17 7l129 0c6.4 0 12.5-2.5 17-7L456.9 337.5c4.5-4.5 7-10.6 7-17l0-129c0-6.4-2.5-12.5-7-17L337.5 55.1c-4.5-4.5-10.6-7-17-7l-129 0zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default OctagonXmark;