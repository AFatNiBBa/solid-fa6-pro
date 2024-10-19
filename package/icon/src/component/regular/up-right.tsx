
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `up-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up-right?s=regular up-right}
 * @preview ![up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMTEyVjI5Ny4zNjdMMjk5Ljg4NCAyNjEuMjU0TDI2NS45NDMgMjI3LjMxM0wyMzIuMDAzIDI2MS4yNTRMMTA5LjI1NCAzODRMNjQgMzM4Ljc0NkwxODYuNzQ4IDIxNS45OTZMMjIwLjY4OSAxODIuMDU1TDE4Ni43NDcgMTQ4LjExM0wxNTAuNjMzIDExMkgzMzZNMzUyIDY0SDExMkM5OS4wNjMgNjQgODcuMzkxIDcxLjc4MSA4Mi40MzggODMuNzVDNzcuNDg1IDk1LjcxOSA4MC4yMTkgMTA5LjQ2OSA4OS4zNzUgMTE4LjYyNUwxNTIuODA3IDE4Mi4wNTVMMzAuMDU5IDMwNC44MDVDMTEuMzE1IDMyMy41NDcgMTEuMzEzIDM1My45NDEgMzAuMDU5IDM3Mi42ODhMNzUuMzEzIDQxNy45NDFDODQuNjg2IDQyNy4zMTYgOTYuOTcgNDMyIDEwOS4yNTUgNDMyUzEzMy44MjMgNDI3LjMxNiAxNDMuMTk2IDQxNy45NDFMMjY1Ljk0MyAyOTUuMTk1TDMyOS4zNzUgMzU4LjYyNUMzMzUuNTAyIDM2NC43NjIgMzQzLjY3NSAzNjguMDQzIDM1MS45ODcgMzY4LjA0M0MzNTYuMTE4IDM2OC4wNDMgMzYwLjI4MiAzNjcuMjM0IDM2NC4yNSAzNjUuNTYyQzM3Ni4yMDMgMzYwLjYyNSAzODQgMzQ4LjkzOCAzODQgMzM2Vjk2QzM4NCA3OC4zMTIgMzY5LjY3MiA2NCAzNTIgNjRMMzUyIDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 112V297.367L299.884 261.254L265.943 227.313L232.003 261.254L109.254 384L64 338.746L186.748 215.996L220.689 182.055L186.747 148.113L150.633 112H336M352 64H112C99.063 64 87.391 71.781 82.438 83.75C77.485 95.719 80.219 109.469 89.375 118.625L152.807 182.055L30.059 304.805C11.315 323.547 11.313 353.941 30.059 372.688L75.313 417.941C84.686 427.316 96.97 432 109.255 432S133.823 427.316 143.196 417.941L265.943 295.195L329.375 358.625C335.502 364.762 343.675 368.043 351.987 368.043C356.118 368.043 360.282 367.234 364.25 365.562C376.203 360.625 384 348.938 384 336V96C384 78.312 369.672 64 352 64L352 64Z" />
        </Icon>
    </>
}