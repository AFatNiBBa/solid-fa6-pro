
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users-between-lines` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-between-lines?s=duotone users-between-lines}
 * @preview ![users-between-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/users-between-lines.svg)
 */
const UsersBetweenLines: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 320c0 17.7 14.3 32 32 32l85.6 0c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4l-96 0c-35.3 0-64 28.7-64 64zM83.2 160a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm94.4 224c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6c-6.9-1.6-14.2-2.4-21.6-2.4l-96 0c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32zm64-208a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm174.3 88.6c38.1 14.8 67.4 47.3 77.7 87.4l82.4 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-96 0c-11.7 0-22.7 3.1-32.1 8.6zM435.2 160a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l592 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 0zm0 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l592 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 464z" />
    </Icon>
);

export default UsersBetweenLines;