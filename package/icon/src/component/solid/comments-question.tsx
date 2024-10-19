
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comments-question` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comments-question?s=solid comments-question}
 * @preview ![comments-question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTkuNTk0IDQ0My43MzZDNjI0LjgyOCA0MTMuOTQ1IDY0MCAzNzYuNjM1IDY0MCAzMzZDNjQwIDIzOC43OTcgNTU0LjAzOSAxNjAgNDQ4IDE2MEM0NDcuNjg2IDE2MCA0NDcuMzgxIDE2MC4wNDEgNDQ3LjA2NiAxNjAuMDQzQzQ0Ny41MzMgMTY1LjMyOCA0NDggMTcwLjYxMyA0NDggMTc2QzQ0OCAyNzQuNjE3IDM2OC4zMiAzNTcuMjQ4IDI2MS44NzkgMzc4LjUyM0MyODIuNjU4IDQ1NS4xNDMgMzU3Ljk4NiA1MTIgNDQ4IDUxMkM0ODEuNjkzIDUxMiA1MTMuMzIyIDUwMy45OTIgNTQwLjg0OCA0OTAuMDE4QzU2NS4yNDQgNTAyLjAyIDU5Ni4wODYgNTEyIDYzMi4zNCA1MTJDNjM1LjM5OCA1MTIgNjM4LjEgNTEwLjI3NSA2MzkuMzU5IDUwNy4zOTVDNjQwLjU4OCA1MDQuNTE2IDY0MC4wMTggNTAxLjI0NiA2MzcuOTE4IDQ5OS4wNDFDNjM3LjU2NiA0OTguNjg5IDYxNS44NjcgNDc1LjI2NiA1OTkuNTk0IDQ0My43MzZaTTQxNiAxNzZDNDE2IDc4Ljc5NyAzMjIuODc1IDAgMjA4IDBTMCA3OC43OTcgMCAxNzZDMCAyMTUuNTcgMTUuNjIxIDI1MS45NjMgNDEuNjcyIDI4MS4zNTlDMjUuMjg1IDMxNC4xMjMgMi40NDMgMzM4LjY4IDIuMDgyIDMzOS4wNDFDLTAuMDE4IDM0MS4yNDYgLTAuNTg4IDM0NC41MTYgMC42NDEgMzQ3LjM5NUMxLjkgMzUwLjI3NSA0LjYwMiAzNTIgNy42NiAzNTJDNDYuMDA2IDM1MiA3OC40MTggMzQwLjg3OSAxMDMuNDAyIDMyNy45NTVDMTM0LjE1NiAzNDMuMTQ2IDE2OS44MTggMzUyIDIwOCAzNTJDMzIyLjg3NSAzNTIgNDE2IDI3My4yMDEgNDE2IDE3NlpNMjA4LjQ3MSAyODhDMTk0LjcwNyAyODggMTg0IDI3Ny4yOTMgMTg0IDI2My41MjlDMTg0IDI0OS43NjQgMTk0LjcwNyAyMzkuMDU5IDIwOC40NzEgMjM5LjA1OUMyMjIuMjM2IDIzOS4wNTkgMjMyLjk0MSAyNDkuNzY0IDIzMi45NDEgMjYzLjUyOUMyMzIuOTQxIDI3Ny4yOTMgMjIyLjIzNiAyODggMjA4LjQ3MSAyODhaTTI2MiAxNzEuNDEyTDIyNi44MjQgMTkyLjgyMlYxOTQuMzUyQzIyNi44MjQgMjA0LjI5MyAyMTguNDEyIDIxMi43MDUgMjA4LjQ3MSAyMTIuNzA1UzE5MC4xMTkgMjA0LjI5MyAxOTAuMTE5IDE5NC4zNTJWMTgyLjExN0MxOTAuMTE5IDE3NiAxOTMuMTc4IDE2OS44ODMgMTk5LjI5NSAxNjYuMDU5TDI0Mi44ODMgMTQwLjA1OUMyNDguMjM2IDEzNyAyNTEuMjk1IDEzMS42NDYgMjUxLjI5NSAxMjUuNTI5QzI1MS4yOTUgMTE2LjM1MiAyNDMuNjQ2IDEwOC43MDUgMjM0LjQ3MSAxMDguNzA1SDE5NC43MDdDMTg1LjUyOSAxMDguNzA1IDE3Ny44ODMgMTE2LjM1MiAxNzcuODgzIDEyNS41MjlDMTc3Ljg4MyAxMzUuNDcxIDE2OS40NzEgMTQzLjg4MyAxNTkuNTMxIDE0My44ODNDMTQ5LjU5IDE0My44ODMgMTQxLjE3OCAxMzUuNDcxIDE0MS4xNzggMTI1LjUyOUMxNDEuMTc4IDk1LjcwNSAxNjQuODgzIDcyIDE5NC43MDcgNzJIMjM0LjQ3MUMyNjQuMjk1IDcyIDI4OCA5NS43MDUgMjg4IDEyNS41MjlDMjg4IDE0My44ODMgMjc4LjA1OSAxNjEuNDcxIDI2MiAxNzEuNDEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CommentsQuestion(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M599.594 443.736C624.828 413.945 640 376.635 640 336C640 238.797 554.039 160 448 160C447.686 160 447.381 160.041 447.066 160.043C447.533 165.328 448 170.613 448 176C448 274.617 368.32 357.248 261.879 378.523C282.658 455.143 357.986 512 448 512C481.693 512 513.322 503.992 540.848 490.018C565.244 502.02 596.086 512 632.34 512C635.398 512 638.1 510.275 639.359 507.395C640.588 504.516 640.018 501.246 637.918 499.041C637.566 498.689 615.867 475.266 599.594 443.736ZM416 176C416 78.797 322.875 0 208 0S0 78.797 0 176C0 215.57 15.621 251.963 41.672 281.359C25.285 314.123 2.443 338.68 2.082 339.041C-0.018 341.246 -0.588 344.516 0.641 347.395C1.9 350.275 4.602 352 7.66 352C46.006 352 78.418 340.879 103.402 327.955C134.156 343.146 169.818 352 208 352C322.875 352 416 273.201 416 176ZM208.471 288C194.707 288 184 277.293 184 263.529C184 249.764 194.707 239.059 208.471 239.059C222.236 239.059 232.941 249.764 232.941 263.529C232.941 277.293 222.236 288 208.471 288ZM262 171.412L226.824 192.822V194.352C226.824 204.293 218.412 212.705 208.471 212.705S190.119 204.293 190.119 194.352V182.117C190.119 176 193.178 169.883 199.295 166.059L242.883 140.059C248.236 137 251.295 131.646 251.295 125.529C251.295 116.352 243.646 108.705 234.471 108.705H194.707C185.529 108.705 177.883 116.352 177.883 125.529C177.883 135.471 169.471 143.883 159.531 143.883C149.59 143.883 141.178 135.471 141.178 125.529C141.178 95.705 164.883 72 194.707 72H234.471C264.295 72 288 95.705 288 125.529C288 143.883 278.059 161.471 262 171.412Z" />
        </Icon>
    </>
}