
import { Icon } from "../../index";

/**
 * A component that renders the `star-of-david` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-david?s=regular star-of-david}
 * @preview ![star-of-david](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/star-of-david.svg)
 */
const StarOfDavid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M408.9 301.9L378.2 352l61.5 0-30.8-50.1zM380.8 256l-58.9-96-131.7 0-58.9 96 58.9 96 131.7 0 58.9-96zm56.3 0l53.4 87c3.6 5.9 5.5 12.7 5.5 19.6c0 20.7-16.8 37.4-37.4 37.4l-109.8 0-56.2 91.5C284.8 504.3 270.9 512 256 512s-28.8-7.7-36.6-20.5L163.3 400 53.4 400C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87L21.5 169c-3.6-5.9-5.5-12.7-5.5-19.6C16 128.8 32.8 112 53.4 112l109.8 0 56.2-91.5C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5L348.7 112l109.8 0c20.7 0 37.4 16.8 37.4 37.4c0 6.9-1.9 13.7-5.5 19.6l-53.4 87zm-58.9-96l30.7 50.1L439.7 160l-61.5 0zm-85.8-48L256 52.7 219.6 112l72.8 0zM133.8 160l-61.5 0 30.8 50.1L133.8 160zM103.1 301.9L72.3 352l61.5 0-30.8-50.1zM219.6 400L256 459.3 292.4 400l-72.8 0z" />
    </Icon>
);

export default StarOfDavid;