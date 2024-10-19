
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `z` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/z?s=duotone z}
 * @preview ![z](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4My45OTggNDMyQzM4My45OTggNDU4LjUgMzYyLjQ5OCA0ODAgMzM1Ljk5OSA0ODBINDguMDAxQzI5LjQ3IDQ4MCAxMi41NjQgNDY5LjMxMiA0LjYyNiA0NTIuNTYyQy0zLjMxMSA0MzUuNzgxIC0wLjkwNSA0MTUuOTY5IDEwLjg0NSA0MDEuNTk0TDIzNC43MTggMTI4SDQ4LjAwMUMyMS41MDEgMTI4IDAuMDAxIDEwNi41IDAuMDAxIDgwUzIxLjUwMSAzMiA0OC4wMDEgMzJIMzM1Ljk5OUMzNTQuNTMgMzIgMzcxLjQzNiA0Mi42ODggMzc5LjM3MyA1OS40MzhDMzg3LjMxMSA3Ni4yMTkgMzg0LjkwNCA5Ni4wMzEgMzczLjE1NSAxMTAuNDA2TDE0OS4yODEgMzg0SDMzNS45OTlDMzYyLjQ5OCAzODQgMzgzLjk5OCA0MDUuNSAzODMuOTk4IDQzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Z(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M383.998 432C383.998 458.5 362.498 480 335.999 480H48.001C29.47 480 12.564 469.312 4.626 452.562C-3.311 435.781 -0.905 415.969 10.845 401.594L234.718 128H48.001C21.501 128 0.001 106.5 0.001 80S21.501 32 48.001 32H335.999C354.53 32 371.436 42.688 379.373 59.438C387.311 76.219 384.904 96.031 373.155 110.406L149.281 384H335.999C362.498 384 383.998 405.5 383.998 432Z" />
        </Icon>
    </>
}