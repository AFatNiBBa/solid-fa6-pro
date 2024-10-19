
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `scale-unbalanced-flip` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scale-unbalanced-flip?s=regular scale-unbalanced-flip}
 * @preview ![scale-unbalanced-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTkuOTk5IDE3NkM1MzAuMTU2IDE3NiA1MzkuNTkzIDE2OS41IDU0Mi44NTkgMTU5LjMxMkM1NDYuODkgMTQ2LjY4OCA1MzkuOTM3IDEzMy4xODggNTI3LjMxMiAxMjkuMTU2TDM5OS4xNzcgODguMTUyQzM5OS40NTYgODUuNDM0IDM5OS45OTkgODIuNzkzIDM5OS45OTkgODBDMzk5Ljk5OSAzNS44MTYgMzY0LjE4MyAwIDMxOS45OTkgMEMyOTAuMTk3IDAgMjY0LjUwNSAxNi40ODggMjUwLjc0IDQwLjY1NkwxMjcuMzEyIDEuMTU2QzExNC42NTYgLTIuODc1IDEwMS4xNzEgNC4wOTQgOTcuMTQgMTYuNjg4QzkzLjEwOSAyOS4zMTIgMTAwLjA2MiA0Mi44MTIgMTEyLjY4NyA0Ni44NDRMMjQwLjc4OCA4Ny44MzZDMjQzLjk3IDEyMC4wNzggMjY2LjA1MiAxNDYuNDU3IDI5NS45OTcgMTU1LjkzVjQ2NEgxMTkuOTk5QzEwNi43NDUgNDY0IDk1Ljk5OSA0NzQuNzQyIDk1Ljk5OSA0ODhDOTUuOTk5IDUwMS4yNTQgMTA2Ljc0NSA1MTIgMTE5Ljk5OSA1MTJIMzExLjk5N0MzMjkuNjcxIDUxMiAzNDMuOTk3IDQ5Ny42NzIgMzQzLjk5NyA0ODBWMTU1LjkzQzM1OC4xNCAxNTEuNDUzIDM3MC40ODggMTQzLjI5NyAzODAuMDE3IDEzMi4zOTFMNTEyLjY4NyAxNzQuODQ0QzUxNS4xMjQgMTc1LjYyNSA1MTcuNTc3IDE3NiA1MTkuOTk5IDE3NlpNMzE5Ljk5OSAxMTJDMzAyLjM1NSAxMTIgMjg3Ljk5OSA5Ny42NDUgMjg3Ljk5OSA4MFMzMDIuMzU1IDQ4IDMxOS45OTkgNDhTMzUxLjk5OSA2Mi4zNTUgMzUxLjk5OSA4MFMzMzcuNjQ0IDExMiAzMTkuOTk5IDExMlpNNTU0Ljk5NSAyNTAuNUM1NDYuMTIgMjMyLjg3NSA1MjguOTk1IDIyNCA1MTEuOTk3IDIyNEM0OTQuOTk3IDIyNCA0NzcuODcyIDIzMi44NzUgNDY5LjEyMiAyNTAuNUMzODIuNjIyIDQyMy4yNSAzODMuOTk3IDQxNS44NzUgMzgzLjk5NyA0MzJDMzgzLjk5NyA0NzYuMTI1IDQ0MS4yNDcgNTEyIDUxMS45OTcgNTEyQzU4Mi43NDUgNTEyIDYzOS45OTUgNDc2LjEyNSA2MzkuOTk1IDQzMkM2MzkuOTk1IDQxNi4zNzUgNjQxLjk5NSA0MjQuNzUgNTU0Ljk5NSAyNTAuNVpNNDM5Ljc0NyA0MTZDNDQ1LjYyMiA0MDQgNDkyLjEyMiAzMTEuNjI1IDUxMS45OTcgMjcyQzUxMi4xMjIgMjcyIDUxMi4yNDcgMjcyIDUxMi4yNDcgMjcyQzUzMC43NDUgMzA5LjUgNTc3Ljk5NSA0MDMuMzc1IDU4NC4xMiA0MTZINDM5Ljc0N1pNMjU1Ljk5OSAzMDRDMjU1Ljk5OSAyODguMzc1IDI1Ny45OTkgMjk2Ljc1IDE3MC44NzQgMTIyLjVDMTYyLjEyNCAxMDQuODc1IDE0NC45OTkgOTYgMTI3Ljk5OSA5NlM5My44NzQgMTA0Ljg3NSA4NS4xMjQgMTIyLjVDLTEuMzc0IDI5NS4yNSAwLjAwMSAyODcuODc1IDAuMDAxIDMwNEMwLjAwMSAzNDguMTI1IDU3LjI0OSAzODQgMTI3Ljk5OSAzODRTMjU1Ljk5OSAzNDguMTI1IDI1NS45OTkgMzA0Wk0xMjcuOTk5IDE0NEMxMjguMTI0IDE0NCAxOTMuOTk5IDI3NS4zNzUgMjAwLjEyNCAyODhINTUuNzQ5QzYxLjYyNCAyNzYgMTA4LjEyNCAxODMuNjI1IDEyNy45OTkgMTQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ScaleUnbalancedFlip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M519.999 176C530.156 176 539.593 169.5 542.859 159.312C546.89 146.688 539.937 133.188 527.312 129.156L399.177 88.152C399.456 85.434 399.999 82.793 399.999 80C399.999 35.816 364.183 0 319.999 0C290.197 0 264.505 16.488 250.74 40.656L127.312 1.156C114.656 -2.875 101.171 4.094 97.14 16.688C93.109 29.312 100.062 42.812 112.687 46.844L240.788 87.836C243.97 120.078 266.052 146.457 295.997 155.93V464H119.999C106.745 464 95.999 474.742 95.999 488C95.999 501.254 106.745 512 119.999 512H311.997C329.671 512 343.997 497.672 343.997 480V155.93C358.14 151.453 370.488 143.297 380.017 132.391L512.687 174.844C515.124 175.625 517.577 176 519.999 176ZM319.999 112C302.355 112 287.999 97.645 287.999 80S302.355 48 319.999 48S351.999 62.355 351.999 80S337.644 112 319.999 112ZM554.995 250.5C546.12 232.875 528.995 224 511.997 224C494.997 224 477.872 232.875 469.122 250.5C382.622 423.25 383.997 415.875 383.997 432C383.997 476.125 441.247 512 511.997 512C582.745 512 639.995 476.125 639.995 432C639.995 416.375 641.995 424.75 554.995 250.5ZM439.747 416C445.622 404 492.122 311.625 511.997 272C512.122 272 512.247 272 512.247 272C530.745 309.5 577.995 403.375 584.12 416H439.747ZM255.999 304C255.999 288.375 257.999 296.75 170.874 122.5C162.124 104.875 144.999 96 127.999 96S93.874 104.875 85.124 122.5C-1.374 295.25 0.001 287.875 0.001 304C0.001 348.125 57.249 384 127.999 384S255.999 348.125 255.999 304ZM127.999 144C128.124 144 193.999 275.375 200.124 288H55.749C61.624 276 108.124 183.625 127.999 144Z" />
        </Icon>
    </>
}