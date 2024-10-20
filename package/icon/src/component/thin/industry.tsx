
import { Icon } from "../../index";

/**
 * A component that renders the `industry` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/industry?s=thin industry}
 * @preview ![industry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/industry.svg)
 */
const Industry: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M72 48C58.7 48 48 58.7 48 72l0 232 0 48 0 72c0 22.1 17.9 40 40 40l400 0c22.1 0 40-17.9 40-40l0-104 0-16 0-151.1c0-12.2-13.2-19.9-23.8-14L363.9 217.5c-2.5 1.4-5.5 1.4-8-.1s-4-4.1-4-6.9l0-56.8c0-12.3-13.4-20-24.1-13.8L188 221.6c-2.5 1.4-5.5 1.5-8 0s-4-4.1-4-6.9L176 72c0-13.3-10.7-24-24-24L72 48zM32 72c0-22.1 17.9-40 40-40l80 0c22.1 0 40 17.9 40 40l0 128.7 127.9-74.6c21.3-12.4 48.1 2.9 48.1 27.6l0 43.1L496.4 125c21.3-11.9 47.6 3.5 47.6 27.9L544 304l0 16 0 104c0 30.9-25.1 56-56 56L88 480c-30.9 0-56-25.1-56-56l0-72 0-48L32 72z" />
    </Icon>
);

export default Industry;