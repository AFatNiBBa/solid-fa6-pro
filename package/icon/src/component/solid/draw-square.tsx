
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `draw-square` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/draw-square?s=solid draw-square}
 * @preview ![draw-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMzYwLjg3NVYxNTEuMTI1QzQzNSAxNDAgNDQ4IDExOS42MjUgNDQ4IDk2QzQ0OCA2MC42MjUgNDE5LjM3NSAzMiAzODQgMzJDMzYwLjM3NSAzMiAzNDAgNDUgMzI4Ljg3NSA2NEgxMTkuMTI1QzEwOCA0NSA4Ny42MjUgMzIgNjQgMzJDMjguNjI1IDMyIDAgNjAuNjI1IDAgOTZDMCAxMTkuNjI1IDEzIDE0MCAzMiAxNTEuMTI1VjM2MC44NzVDMTMgMzcyIDAgMzkyLjM3NSAwIDQxNkMwIDQ1MS4zNzUgMjguNjI1IDQ4MCA2NCA0ODBDODcuNjI1IDQ4MCAxMDggNDY3IDExOS4xMjUgNDQ4SDMyOC44NzVDMzQwIDQ2NyAzNjAuMzc1IDQ4MCAzODQgNDgwQzQxOS4zNzUgNDgwIDQ0OCA0NTEuMzc1IDQ0OCA0MTZDNDQ4IDM5Mi4zNzUgNDM1IDM3MiA0MTYgMzYwLjg3NVpNOTYgMzYwLjg3NVYxNTEuMTI1QzEwNS42MjUgMTQ1LjUgMTEzLjUgMTM3LjYyNSAxMTkuMTI1IDEyOEgzMjguODc1QzMzNC41IDEzNy42MjUgMzQyLjM3NSAxNDUuNSAzNTIgMTUxLjEyNVYzNjAuODc1QzM0Mi4zNzUgMzY2LjUgMzM0LjUgMzc0LjM3NSAzMjguODc1IDM4NEgxMTkuMTI1QzExMy41IDM3NC4zNzUgMTA1LjYyNSAzNjYuNSA5NiAzNjAuODc1Wk00MDAgOTZDNDAwIDEwNC44NzUgMzkyLjg3NSAxMTIgMzg0IDExMlMzNjggMTA0Ljg3NSAzNjggOTZTMzc1LjEyNSA4MCAzODQgODBTNDAwIDg3LjEyNSA0MDAgOTZaTTY0IDgwQzcyLjg3NSA4MCA4MCA4Ny4xMjUgODAgOTZTNzIuODc1IDExMiA2NCAxMTJTNDggMTA0Ljg3NSA0OCA5NlM1NS4xMjUgODAgNjQgODBaTTQ4IDQxNkM0OCA0MDcuMTI1IDU1LjEyNSA0MDAgNjQgNDAwUzgwIDQwNy4xMjUgODAgNDE2UzcyLjg3NSA0MzIgNjQgNDMyUzQ4IDQyNC44NzUgNDggNDE2Wk0zODQgNDMyQzM3NS4xMjUgNDMyIDM2OCA0MjQuODc1IDM2OCA0MTZTMzc1LjEyNSA0MDAgMzg0IDQwMFM0MDAgNDA3LjEyNSA0MDAgNDE2UzM5Mi44NzUgNDMyIDM4NCA0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function DrawSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M416 360.875V151.125C435 140 448 119.625 448 96C448 60.625 419.375 32 384 32C360.375 32 340 45 328.875 64H119.125C108 45 87.625 32 64 32C28.625 32 0 60.625 0 96C0 119.625 13 140 32 151.125V360.875C13 372 0 392.375 0 416C0 451.375 28.625 480 64 480C87.625 480 108 467 119.125 448H328.875C340 467 360.375 480 384 480C419.375 480 448 451.375 448 416C448 392.375 435 372 416 360.875ZM96 360.875V151.125C105.625 145.5 113.5 137.625 119.125 128H328.875C334.5 137.625 342.375 145.5 352 151.125V360.875C342.375 366.5 334.5 374.375 328.875 384H119.125C113.5 374.375 105.625 366.5 96 360.875ZM400 96C400 104.875 392.875 112 384 112S368 104.875 368 96S375.125 80 384 80S400 87.125 400 96ZM64 80C72.875 80 80 87.125 80 96S72.875 112 64 112S48 104.875 48 96S55.125 80 64 80ZM48 416C48 407.125 55.125 400 64 400S80 407.125 80 416S72.875 432 64 432S48 424.875 48 416ZM384 432C375.125 432 368 424.875 368 416S375.125 400 384 400S400 407.125 400 416S392.875 432 384 432Z" />
        </Icon>
    </>
}