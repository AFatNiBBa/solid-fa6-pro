
import { Icon } from "../../index";

/**
 * A component that renders the `snooze` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=thin snooze}
 * @preview ![snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/snooze.svg)
 */
const Snooze: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 8c0-4.4 3.6-8 8-8L312 0c3.3 0 6.3 2.1 7.5 5.2s.3 6.6-2.2 8.8L189 128l123 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-3.3 0-6.3-2.1-7.5-5.2s-.3-6.6 2.2-8.8L291 16 168 16c-4.4 0-8-3.6-8-8zM0 264c0-4.4 3.6-8 8-8l208 0c3.1 0 6 1.8 7.3 4.7s.8 6.2-1.2 8.6L25.5 496 216 496c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 512c-3.1 0-6-1.8-7.3-4.7s-.8-6.2 1.2-8.6L198.5 272 8 272c-4.4 0-8-3.6-8-8zm296-40l144 0c3.2 0 6 1.9 7.3 4.7s.8 6.3-1.4 8.6L314 384l126 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-3.2 0-6-1.9-7.3-4.7s-.8-6.3 1.4-8.6L422 240l-126 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default Snooze;