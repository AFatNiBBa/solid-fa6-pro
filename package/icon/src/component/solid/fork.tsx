
import { Icon } from "../../index";

/**
 * A component that renders the `fork` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fork?s=solid fork}
 * @preview ![fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/fork.svg)
 */
const Fork: typeof Icon = x => (
    <Icon {...x}>
        <path d="M412.4 5.9c5.2 6.4 4.8 15.6-1.1 21.5L320 118.6c-5.2 5.2-5.2 13.6 0 18.8c4.9 4.9 12.8 5.2 18.1 .6l99.4-86.1c6.3-5.5 15.9-5.2 21.8 .8s6.3 15.4 .8 21.8L374 173.9c-4.6 5.3-4.3 13.2 .6 18.1c5.2 5.2 13.6 5.2 18.8 0l91.3-91.3c5.8-5.8 15.1-6.3 21.5-1.1s7.7 14.4 3.2 21.2l-71 106.5c-18.6 27.9-49.9 44.6-83.4 44.6c-19.3 0-37.9-5.5-53.9-15.7L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L255.7 211c-10.2-16-15.7-34.7-15.7-53.9c0-33.5 16.8-64.8 44.6-83.4l106.5-71c6.8-4.6 16-3.2 21.2 3.2z" />
    </Icon>
);

export default Fork;