
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-divide` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-divide?s=thin octagon-divide}
 * @preview ![octagon-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/octagon-divide.svg)
 */
const OctagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M191.5 16.1c-14.9 0-29.1 5.9-39.6 16.4L32.5 151.9C22 162.4 16.1 176.7 16.1 191.5l0 129c0 14.9 5.9 29.1 16.4 39.6L151.9 479.5c10.5 10.5 24.7 16.4 39.6 16.4l129 0c14.9 0 29.1-5.9 39.6-16.4L479.5 360.1c10.5-10.5 16.4-24.7 16.4-39.6l0-129c0-14.9-5.9-29.1-16.4-39.6L360.1 32.5C349.6 22 335.3 16.1 320.5 16.1l-129 0zm-50.9 5.1C154.1 7.7 172.4 .1 191.5 .1l129 0c19.1 0 37.4 7.6 50.9 21.1L490.8 140.6c13.5 13.5 21.1 31.8 21.1 50.9l0 129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8c-13.5 13.5-31.8 21.1-50.9 21.1l-129 0c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4C7.7 357.9 .1 339.6 .1 320.5l0-129c0-19.1 7.6-37.4 21.1-50.9L140.6 21.2zM272 160a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-72 88l208 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-208 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zM256 368a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default OctagonDivide;