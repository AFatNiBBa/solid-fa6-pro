
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-plus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-plus?s=solid octagon-plus}
 * @preview ![octagon-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/octagon-plus.svg)
 */
const OctagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M140.6 21.2C154.1 7.7 172.4 .1 191.5 .1l129 0c19.1 0 37.4 7.6 50.9 21.1L490.8 140.6c13.5 13.5 21.1 31.8 21.1 50.9l0 129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8c-13.5 13.5-31.8 21.1-50.9 21.1l-129 0c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4C7.7 357.9 .1 339.6 .1 320.5l0-129c0-19.1 7.6-37.4 21.1-50.9L140.6 21.2zM232 344c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z" />
    </Icon>
);

export default OctagonPlus;