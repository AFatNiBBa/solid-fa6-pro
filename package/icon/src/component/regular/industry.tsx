
import { Icon } from "../../index";

/**
 * A component that renders the `industry` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/industry?s=regular industry}
 * @preview ![industry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/industry.svg)
 */
const Industry: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M88 80c-4.4 0-8 3.6-8 8l0 216 0 48 0 56c0 13.3 10.7 24 24 24l368 0c13.3 0 24-10.7 24-24l0-88 0-16 0-148.1-139.1 89c-7.4 4.7-16.8 5-24.5 .8s-12.5-12.3-12.5-21.1l0-70.9L180.1 235.4c-7.4 4.3-16.6 4.4-24 .1s-12-12.2-12-20.8L144 88c0-4.4-3.6-8-8-8L88 80zM32 88c0-30.9 25.1-56 56-56l48 0c30.9 0 56 25.1 56 56l0 84.9 103.8-60.6c32-18.7 72.2 4.4 72.2 41.5l0 27 102.1-65.4C502.1 95 544 117.9 544 155.9L544 304l0 16 0 88c0 39.8-32.2 72-72 72l-368 0c-39.8 0-72-32.2-72-72l0-56 0-48L32 88z" />
    </Icon>
);

export default Industry;