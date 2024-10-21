
import { Icon } from "../../index";

/**
 * A component that renders the `crutch` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crutch?s=thin crutch}
 * @preview ![crutch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/crutch.svg)
 */
const Crutch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M308.7 20.7c-6.2 6.2-6.2 16.4 0 22.6l160 160c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0zM297.4 9.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3zm-95 160.9l82.7-82.7 11.3 11.3L219.3 176 336 292.7l77.1-77.1 11.3 11.3-82.7 82.7L307.4 344c-10.1 10.1-22.9 16.9-36.8 19.7L148.6 388c-10.8 2.2-20.8 7.5-28.6 15.3L21.7 501.7l-8 8c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l8-8L108.6 392c7.8-7.8 13.1-17.8 15.3-28.6l24.4-122c2.8-13.9 9.6-26.7 19.7-36.8l34.2-34.2c0 0 0 0 .1-.1s0 0 .1-.1zm5.6 17L179.4 216c-7.8 7.8-13.1 17.8-15.3 28.6l-24.4 122c-.5 2.6-1.2 5.3-2 7.8c2.6-.8 5.2-1.5 7.8-2l122-24.4c10.8-2.2 20.8-7.5 28.6-15.3L324.7 304 208 187.3z" />
    </Icon>
);

export default Crutch;