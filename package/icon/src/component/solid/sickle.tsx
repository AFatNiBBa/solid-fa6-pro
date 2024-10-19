
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sickle` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sickle?s=solid sickle}
 * @preview ![sickle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjkuOTMzIDMwOC43NEMxMjMuNjc3IDMwMi40OTUgMTEzLjQ0MyAzMDIuNDk5IDEwNy4xOTIgMzA4Ljc1TDg0LjY5MSAzMzEuMjVDNzguNDQxIDMzNy41IDc4LjQ0MSAzNDcuNzUgODQuNjkxIDM1NEw4Ny4zMTYgMzU2Ljc1TDkuMzczIDQzNC43NTNDLTMuMTI0IDQ0Ny4yNDkgLTMuMTI0IDQ2Ny41MTEgOS4zNzMgNDgwLjAwN0wzMS45OTQgNTAyLjYyN0M0NC40OTIgNTE1LjEyNCA2NC43NTQgNTE1LjEyNCA3Ny4yNTEgNTAyLjYyN0wxNTUuMzE5IDQyNC41TDE1OC4wNjkgNDI3LjI1QzE2NC4zMiA0MzMuNSAxNzQuNDQ1IDQzMy41IDE4MC42OTUgNDI3LjI1TDIwMy4zMjEgNDA0LjYyNUMyMDkuNTczIDM5OC4zNzQgMjA5LjU2OSAzODguMjM3IDIwMy4zMTIgMzgxLjk5MUwxMjkuOTMzIDMwOC43NFpNMzE3LjkyNyAwQzIyMC45MTEgMCAxNDkuOTE4IDY4LjQ5NiAxMzEuODUzIDE0OS44NUMxMTcuOTU4IDIxMi4yODggMTQyLjcxNyAyNzcuMDc1IDE4OC44MjUgMzIyLjIwM0wyMjAuOTExIDM1MkwyNTYuNjYgMzE3LjAxQzIxNy43NTMgMjUzLjQ2IDIzMi41MzMgMTY3LjI4MyAzMDQuMDMyIDEyMy4xNDRDMzQ3LjYxMyA5Ni4xOTEgNDA0LjcxMSA5NC40NiA0NDkuNjgyIDExOS4xODhDNDY4LjM3OCAxMjkuMzI2IDQ4NC42NzMgMTQzLjI5OCA0OTcuNDMyIDE2MC4xMTJDNTAyLjYxMSAxNjYuOTEzIDUxMy40NzUgMTYxLjk2NyA1MTEuODMzIDE1My42ODNDNTAwLjk2OSA5OS42NTMgNDQ3LjI4MiAwIDMxNy45MjcgMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Sickle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M129.933 308.74C123.677 302.495 113.443 302.499 107.192 308.75L84.691 331.25C78.441 337.5 78.441 347.75 84.691 354L87.316 356.75L9.373 434.753C-3.124 447.249 -3.124 467.511 9.373 480.007L31.994 502.627C44.492 515.124 64.754 515.124 77.251 502.627L155.319 424.5L158.069 427.25C164.32 433.5 174.445 433.5 180.695 427.25L203.321 404.625C209.573 398.374 209.569 388.237 203.312 381.991L129.933 308.74ZM317.927 0C220.911 0 149.918 68.496 131.853 149.85C117.958 212.288 142.717 277.075 188.825 322.203L220.911 352L256.66 317.01C217.753 253.46 232.533 167.283 304.032 123.144C347.613 96.191 404.711 94.46 449.682 119.188C468.378 129.326 484.673 143.298 497.432 160.112C502.611 166.913 513.475 161.967 511.833 153.683C500.969 99.653 447.282 0 317.927 0Z" />
        </Icon>
    </>
}