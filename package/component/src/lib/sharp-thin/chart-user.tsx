
import { Icon } from "../../index";

/**
 * A component that renders the `chart-user` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-user?s=sharp-thin chart-user}
 * @preview ![chart-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chart-user.svg)
 */
const ChartUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M624 16L176 16l0 81c-5.2-.7-10.6-1-16-1l0-80 0-16 16 0L624 0l16 0 0 16 0 384 0 16-16 0-299.4 0-4.8-16L624 400l0-384zM416 112l8 0 96 0 8 0 0 8 0 96 0 8-16 0 0-8 0-76.7L389.7 261.7l-5.7 5.7-5.7-5.7-80-80-5.7-5.7L304 164.7l5.7 5.7L384 244.7 500.7 128 424 128l-8 0 0-16zM160 304a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-176a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM59.9 368L21.5 496l277 0L260.1 368 59.9 368zM272 352l43.2 144 4.8 16-16.7 0L16.7 512 0 512l4.8-16L48 352l224 0z" />
    </Icon>
);

export default ChartUser;