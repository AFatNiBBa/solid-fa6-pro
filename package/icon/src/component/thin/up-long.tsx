
import { Icon } from "../../index";

/**
 * A component that renders the `up-long` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=thin up-long}
 * @preview ![up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/up-long.svg)
 */
const UpLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M104 176l-81.1 0c-3.8 0-6.9-3.1-6.9-6.9c0-1.8 .7-3.5 1.9-4.7L158.1 16.8c.5-.5 1.2-.8 1.9-.8s1.4 .3 1.9 .8L302.1 164.4c1.2 1.3 1.9 3 1.9 4.7c0 3.8-3.1 6.9-6.9 6.9L216 176c-8.8 0-16 7.2-16 16l0 280c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24l0-280c0-8.8-7.2-16-16-16zM146.5 5.8L6.3 153.4c-4 4.3-6.3 9.9-6.3 15.8C0 181.8 10.2 192 22.9 192L88 192l16 0 0 16 0 264c0 22.1 17.9 40 40 40l32 0c22.1 0 40-17.9 40-40l0-264 0-16 16 0 65.1 0c12.6 0 22.9-10.2 22.9-22.9c0-5.9-2.3-11.5-6.3-15.8L173.5 5.8C170 2.1 165.1 0 160 0s-10 2.1-13.5 5.8z" />
    </Icon>
);

export default UpLong;