
import { Icon } from "../../index";

/**
 * A component that renders the `reply` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=thin reply}
 * @preview ![reply](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/reply.svg)
 */
const Reply: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 144c-8.8 0-16-7.2-16-16l0-64c0-6.3-3.7-12-9.5-14.6s-12.5-1.5-17.2 2.7l-160 144c-3.4 3-5.3 7.4-5.3 11.9s1.9 8.9 5.3 11.9l160 144c4.7 4.2 11.4 5.3 17.2 2.7s9.5-8.3 9.5-14.6l0-64c0-8.8 7.2-16 16-16l96 0c61.9 0 112 50.1 112 112c0 35.5-15.2 57.1-27.3 68.4c-3.7 3.5-4.7 6.5-4.7 7.8c0 2.1 1.7 3.7 3.7 3.7c.3 0 .5 0 .6 0c17.1-9.3 91.8-55.7 91.8-160c0-88.4-71.6-160-160-160l-112 0zm0 160l0 48c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4s19 16.6 19 29.2l0 48 0 16 16 0 96 0c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96l-80 0-16 0 0 16z" />
    </Icon>
);

export default Reply;